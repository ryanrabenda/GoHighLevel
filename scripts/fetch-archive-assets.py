import os
import re
import sys
import time
import json
import html as htmlmod
import urllib.parse as up
import requests

TS = "20170627183215"
ROOT = "http://tarzantreescaping.com"
START_PATH = "/default.aspx"
OUT = "archive-snapshot"
PAGES_DIR = os.path.join(OUT, "pages")
ASSETS_DIR = os.path.join(OUT, "assets")
TEXT_DIR = os.path.join(OUT, "text")
for d in (PAGES_DIR, ASSETS_DIR, TEXT_DIR):
    os.makedirs(d, exist_ok=True)

DEADLINE = time.monotonic() + 6 * 60  # hard wall-clock budget
MAX_PAGES = 25
MAX_ASSETS = 200

session = requests.Session()
session.headers.update({"User-Agent": "Mozilla/5.0 (compatible; ArchiveFetch/1.0)"})

visited_pages = set()
fetched_assets = {}
manifest = []


def log(msg):
    print(msg, flush=True)


def out_of_time():
    return time.monotonic() > DEADLINE


def wb_url(target_url, ts=TS, mod="id_"):
    return f"https://web.archive.org/web/{ts}{mod}/{target_url}"


def get(url, tries=2, timeout=12):
    last_exc = None
    for i in range(tries):
        if out_of_time():
            return None
        try:
            r = session.get(url, timeout=timeout)
            if r.status_code == 200:
                return r
            last_exc = Exception(f"status {r.status_code}")
        except Exception as e:  # noqa: BLE001
            last_exc = e
        time.sleep(1)
    log(f"FAILED: {url} :: {last_exc}")
    return None


def safe_name(path):
    path = path.split("?")[0].split("#")[0]
    name = path.strip("/").replace("/", "__")
    return name or "index"


def is_asset(url):
    return bool(re.search(r"\.(jpg|jpeg|png|gif|bmp|svg|css|ico|webp)$", url.split("?")[0], re.I))


def resolve(base, link):
    if link.startswith("//"):
        link = "http:" + link
    if link.startswith("http"):
        return link
    return up.urljoin(base, link)


def extract_links(html_text, base_url):
    hrefs = re.findall(r'(?:href|src)\s*=\s*["\']([^"\']+)["\']', html_text, re.I)
    css_urls = re.findall(r'url\(\s*["\']?([^"\')]+)["\']?\s*\)', html_text, re.I)
    out = []
    for h in hrefs + css_urls:
        h = h.strip()
        if not h or h.startswith("javascript:") or h.startswith("mailto:") or h.startswith("#"):
            continue
        out.append(resolve(base_url, h))
    return out


def download_asset(url):
    if out_of_time() or len(fetched_assets) >= MAX_ASSETS:
        return
    if url in fetched_assets:
        return
    parsed = up.urlparse(url)
    rel_path = parsed.path.lstrip("/")
    if not rel_path:
        return
    out_path = os.path.join(ASSETS_DIR, rel_path)
    os.makedirs(os.path.dirname(out_path) or ASSETS_DIR, exist_ok=True)
    r = get(wb_url(url))
    if r is None:
        fetched_assets[url] = None
        return
    with open(out_path, "wb") as f:
        f.write(r.content)
    fetched_assets[url] = out_path
    log(f"Saved asset: {url} -> {out_path} ({len(r.content)} bytes)")


def crawl_page(path, depth):
    if out_of_time() or path in visited_pages or len(visited_pages) >= MAX_PAGES:
        return
    visited_pages.add(path)
    target = ROOT.rstrip("/") + path if path.startswith("/") else path
    log(f"Fetching page: {target}")
    r = get(wb_url(target))
    if r is None:
        return
    html_text = r.text
    fname = safe_name(up.urlparse(target).path) + ".html"
    with open(os.path.join(PAGES_DIR, fname), "w", encoding="utf-8") as f:
        f.write(html_text)

    text = re.sub(r"(?is)<script.*?</script>|<style.*?</style>", " ", html_text)
    text = re.sub(r"(?s)<[^>]+>", "\n", text)
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n\s*\n+", "\n\n", text)
    text = htmlmod.unescape(text)
    with open(os.path.join(TEXT_DIR, safe_name(up.urlparse(target).path) + ".txt"), "w", encoding="utf-8") as f:
        f.write(text.strip())

    links = extract_links(html_text, target)
    manifest.append({"path": path, "target": target, "saved_html": fname, "link_count": len(links)})
    log(f"  -> {len(links)} links found")

    same_host_pages = []
    for link in links:
        if out_of_time():
            break
        parsed = up.urlparse(link)
        if is_asset(link):
            download_asset(link)
        elif parsed.netloc and up.urlparse(ROOT).netloc.split(":")[0] in parsed.netloc:
            same_host_pages.append(parsed.path or "/")

    if depth > 0:
        for p in set(same_host_pages):
            if out_of_time():
                break
            if p not in visited_pages:
                crawl_page(p, depth - 1)


try:
    crawl_page(START_PATH, depth=1)
except Exception as e:  # noqa: BLE001
    log(f"Crawl aborted with error: {e}")

with open(os.path.join(OUT, "manifest.json"), "w", encoding="utf-8") as f:
    json.dump(
        {
            "pages": manifest,
            "assets": {k: v for k, v in fetched_assets.items()},
            "visited_pages": sorted(visited_pages),
            "timed_out": out_of_time(),
        },
        f,
        indent=2,
    )

log(f"Pages visited: {len(visited_pages)}")
log(f"Assets attempted: {len(fetched_assets)}")
log(f"Assets saved: {sum(1 for v in fetched_assets.values() if v)}")
sys.exit(0)
