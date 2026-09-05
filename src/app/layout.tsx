import type { Metadata } from "next";
import { Barlow_Condensed, Inter, Oswald } from "next/font/google";
import "./globals.css";
import { business, images } from "@/lib/business";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.tarzantreescaping.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tarzan Treescaping | Tree Removal, Land Clearing & Landscaping | Newburgh NY",
    template: "%s | Tarzan Treescaping",
  },
  description:
    "Tarzan Treescaping provides tree removal, pruning, landscaping, land clearing, junk removal and stonework in Newburgh and throughout the Hudson Valley. Request a free estimate today.",
  keywords: [
    "Tree Service Newburgh NY",
    "Tree Removal Newburgh NY",
    "Tree Trimming Newburgh NY",
    "Tree Pruning Newburgh NY",
    "Land Clearing Newburgh NY",
    "Landscaping Newburgh NY",
    "Junk Removal Newburgh NY",
    "Stonework Newburgh NY",
    "Hudson Valley Tree Service",
    "Hudson Valley Land Clearing",
    "Hudson Valley Landscaping",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tarzan Treescaping | Tree Removal, Land Clearing & Landscaping | Newburgh NY",
    description:
      "Tree removal, pruning, landscaping, land clearing, junk removal and stonework in Newburgh and throughout the Hudson Valley.",
    url: siteUrl,
    siteName: business.name,
    locale: "en_US",
    type: "website",
    images: [{ url: images.hero, width: 1600, height: 686, alt: business.tagline }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarzan Treescaping | Newburgh NY",
    description:
      "Tree removal, pruning, landscaping, land clearing, junk removal and stonework in the Hudson Valley.",
    images: [images.hero],
  },
  icons: {
    icon: images.logo,
    shortcut: images.logo,
    apple: images.logo,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description:
      "Tree removal, tree pruning, landscaping, junk removal, land clearing and stonework serving Newburgh, NY and the Hudson Valley.",
    url: siteUrl,
    telephone: business.phoneHref.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      addressLocality: business.addressLocality,
      addressRegion: business.addressRegion,
      addressCountry: "US",
    },
    areaServed: business.serviceCounties.map((county) => ({
      "@type": "AdministrativeArea",
      name: county,
    })),
    priceRange: "$$",
    makesOffer: [
      "Tree Removal",
      "Tree Pruning",
      "Landscaping",
      "Junk Removal",
      "Land Clearing",
      "Stonework",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
        provider: { "@type": "LocalBusiness", name: business.name },
      },
    })),
  };

  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-offwhite text-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded focus:bg-forest-dark focus:px-4 focus:py-2 focus:text-offwhite"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
