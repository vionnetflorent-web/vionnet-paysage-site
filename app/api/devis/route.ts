import { NextResponse } from "next/server";

// Quote request submission endpoint (stub).
// Wire this up to an email service (Resend, SendGrid) or a database
// once ready — for now it just validates and logs the payload so the
// form in app/devis/page.tsx has something real to call.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || !body.name || !body.email || !body.message) {
    return NextResponse.json(
      { error: "Champs requis manquants." },
      { status: 400 }
    );
  }

  // TODO: send an email / store the lead. Example:
  // await resend.emails.send({ to: siteConfig.email, ... });
  console.log("Nouvelle demande de devis:", body);

  return NextResponse.json({ ok: true });
}
