import { NextResponse } from "next/server";

// Point this at a GoHighLevel inbound webhook, Formspree endpoint, or any
// CRM/automation URL to start routing leads. Leave unset during local/dev
// testing — submissions are still logged server-side so nothing is silently
// discarded.
const CONTACT_WEBHOOK_URL = process.env.CONTACT_WEBHOOK_URL ?? "";

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = formData.get("name")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const address = formData.get("address")?.toString().trim() ?? "";
  const service = formData.get("service")?.toString().trim() ?? "";
  const details = formData.get("details")?.toString().trim() ?? "";
  const photo = formData.get("photo");

  if (!name || !phone || !service) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 },
    );
  }

  const lead = {
    name,
    phone,
    email,
    address,
    service,
    details,
    photoName: photo instanceof File && photo.size > 0 ? photo.name : null,
    source: "tarzantreescaping.com contact form",
    submittedAt: new Date().toISOString(),
  };

  if (CONTACT_WEBHOOK_URL) {
    try {
      await fetch(CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch (error) {
      console.error("Failed to forward lead to CONTACT_WEBHOOK_URL", error);
      return NextResponse.json(
        { ok: false, error: "Could not submit right now. Please call us instead." },
        { status: 502 },
      );
    }
  } else {
    console.log("New estimate request (CONTACT_WEBHOOK_URL not configured):", lead);
  }

  return NextResponse.json({ ok: true });
}
