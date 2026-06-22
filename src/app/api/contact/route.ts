type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  weddingDate?: string;
  location?: string;
  guestCount?: string;
  budgetRange?: string;
  serviceInterested?: string;
  message?: string;
  locale?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email ?? "");

  if (!payload.name || !emailValid || !payload.phone || !payload.serviceInterested || !payload.message) {
    return Response.json({ ok: false, message: "Invalid inquiry" }, { status: 400 });
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  return Response.json({ ok: true });
}
