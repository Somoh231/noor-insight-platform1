import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Submission = {
  name: string;
  role: string;
  organization: string;
  country: string;
  email: string;
  message: string;
};

function generateReference(): string {
  const r = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `NI-${r}`;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(value);
}

/**
 * Contact form handler. Accepts a structured briefing request and forwards
 * it by email to CONTACT_FORWARD_EMAIL. Without SMTP credentials configured
 * the handler logs the payload to stdout (local development only) and
 * returns 200; without CONTACT_FORWARD_EMAIL it returns 503 so the site
 * stays honest about what is actually wired up.
 *
 * Transport is intentionally minimal — nodemailer is the expected
 * production transport, configured via SMTP_HOST/SMTP_PORT/SMTP_USER/
 * SMTP_PASSWORD. When those are absent and NODE_ENV !== "production" the
 * request is accepted and logged; in production the handler returns 503.
 */
export async function POST(request: Request) {
  let body: Partial<Submission>;
  try {
    body = (await request.json()) as Partial<Submission>;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();
  const role = (body.role ?? "").trim();
  const organization = (body.organization ?? "").trim();
  const country = (body.country ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "A name, email, and short message are required to request a briefing.",
      },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "Please supply a valid email address." },
      { status: 400 }
    );
  }
  if (message.length > 5000 || name.length > 200 || organization.length > 200) {
    return NextResponse.json(
      { ok: false, message: "One of the fields exceeds the permitted length." },
      { status: 400 }
    );
  }

  const forwardTo = process.env.CONTACT_FORWARD_EMAIL;
  const isProd = process.env.NODE_ENV === "production";

  if (!forwardTo) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Contact form not yet configured. Please email briefings@noorinsight.co directly.",
      },
      { status: 503 }
    );
  }

  const reference = generateReference();

  const subject = `Briefing request · ${organization || name} · ${reference}`;
  const textBody = [
    `A briefing request has arrived via the Noor Insight website.`,
    ``,
    `Reference     ${reference}`,
    `Name          ${name}`,
    `Role          ${role || "—"}`,
    `Organization  ${organization || "—"}`,
    `Country       ${country || "—"}`,
    `Email         ${email}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const hasSmtp =
    !!process.env.SMTP_HOST &&
    !!process.env.SMTP_USER &&
    !!process.env.SMTP_PASSWORD;

  if (!hasSmtp) {
    if (isProd) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Contact transport not configured on this deployment. Please email briefings@noorinsight.co directly.",
        },
        { status: 503 }
      );
    }
    // Local development fallback: log and accept.
    // eslint-disable-next-line no-console
    console.info("[contact] submission (dev, no SMTP):", {
      to: forwardTo,
      subject,
      textBody,
    });
    return NextResponse.json({ ok: true, reference });
  }

  try {
    // Dynamic import so production builds without nodemailer installed still succeed.
    const nodemailer = (await import("nodemailer")) as typeof import("nodemailer");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT ?? 587) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
      to: forwardTo,
      replyTo: email,
      subject,
      text: textBody,
    });
    return NextResponse.json({ ok: true, reference });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("[contact] transport failure:", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "We could not deliver your message. Please email briefings@noorinsight.co directly.",
      },
      { status: 502 }
    );
  }
}
