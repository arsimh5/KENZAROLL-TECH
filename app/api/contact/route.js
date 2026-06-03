import nodemailer from "nodemailer";

export const runtime = "nodejs";

const requiredFields = ["name", "contact", "service", "message"];

function getTransportConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL || user;
  const from = process.env.CONTACT_FROM_EMAIL || user;

  if (!host || !user || !pass || !to || !from) {
    return null;
  }

  return {
    from,
    to,
    transport: {
      host,
      port,
      secure: process.env.SMTP_SECURE === "true" || port === 465,
      auth: {
        user,
        pass,
      },
    },
  };
}

function clean(value) {
  return String(value || "").trim();
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Kerkesa nuk eshte valide." }, { status: 400 });
  }

  const data = {
    name: clean(body.name),
    contact: clean(body.contact),
    service: clean(body.service),
    message: clean(body.message),
  };

  const missingField = requiredFields.find((field) => !data[field]);

  if (missingField) {
    return Response.json(
      { message: "Ju lutem plotesoni te gjitha fushat." },
      { status: 400 },
    );
  }

  const config = getTransportConfig();

  if (!config) {
    return Response.json(
      {
        message:
          "Forma eshte gati, por email-i nuk eshte konfiguruar ende ne server.",
      },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport(config.transport);
  const subject = `Kerkese e re nga website - ${data.service}`;
  const text = [
    `Emri: ${data.name}`,
    `Kontakt: ${data.contact}`,
    `Sherbimi: ${data.service}`,
    "",
    "Mesazhi:",
    data.message,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: config.from,
      to: config.to,
      replyTo: data.contact.includes("@") ? data.contact : undefined,
      subject,
      text,
    });
  } catch {
    return Response.json(
      { message: "Email-i nuk u dergua. Kontrolloni konfigurimin SMTP." },
      { status: 502 },
    );
  }

  return Response.json({
    message: "Mesazhi u dergua me sukses. Do t'ju kontaktojme se shpejti.",
  });
}
