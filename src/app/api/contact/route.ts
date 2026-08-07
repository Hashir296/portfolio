import nodemailer from "nodemailer";
import { profile } from "@/data/profile";
import { WEB3FORMS_PUBLIC_KEY } from "@/lib/web3forms";

export const runtime = "nodejs";

type Body = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

async function sendWithGmail(payload: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const user = process.env.GMAIL_USER || profile.email;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!pass) return null;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"${profile.shortName} Portfolio" <${user}>`,
    to: profile.email,
    replyTo: payload.email,
    subject: `[Portfolio] ${payload.subject}`,
    text: `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`,
    html: `
      <h2>New portfolio message</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Subject:</strong> ${payload.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${payload.message.replace(/\n/g, "<br/>")}</p>
    `,
  });

  return true;
}

async function sendWithWeb3Forms(payload: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const key = WEB3FORMS_PUBLIC_KEY;
  if (!key) return null;

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: key,
      name: payload.name,
      email: payload.email,
      subject: `[Portfolio] ${payload.subject}`,
      message: payload.message,
      from_name: payload.name,
      replyto: payload.email,
    }),
  });
  const data = (await res.json().catch(() => ({}))) as {
    success?: boolean | string;
    message?: string;
  };
  const ok = data.success === true || data.success === "true";
  if (!res.ok || !ok) {
    throw new Error(data.message || `Web3Forms failed (${res.status})`);
  }
  return true;
}

async function sendWithFormSubmit(payload: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const form = new URLSearchParams();
  form.set("name", payload.name);
  form.set("email", payload.email);
  form.set("_replyto", payload.email);
  form.set("_subject", `[Portfolio] ${payload.subject}`);
  form.set("message", payload.message);
  form.set("_template", "table");
  form.set("_captcha", "false");

  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(profile.email)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: form.toString(),
  });

  const data = await res.json().catch(() => ({} as { success?: string; message?: string }));
  if (!res.ok) {
    throw new Error(data.message || "FormSubmit failed");
  }
  return true;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "Portfolio inquiry").trim();
    const message = String(body.message || "").trim();

    if (name.length < 2) {
      return Response.json({ ok: false, error: "Please enter your name." }, { status: 400 });
    }
    if (!isEmail(email)) {
      return Response.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
    }
    if (message.length < 10) {
      return Response.json(
        { ok: false, error: "Message should be at least 10 characters." },
        { status: 400 }
      );
    }

    const payload = { name, email, subject, message };
    const errors: string[] = [];

    try {
      const w3 = await sendWithWeb3Forms(payload);
      if (w3) return Response.json({ ok: true, via: "web3forms" });
    } catch (e) {
      errors.push(e instanceof Error ? e.message : "Web3Forms failed");
    }

    try {
      const gmail = await sendWithGmail(payload);
      if (gmail) return Response.json({ ok: true, via: "gmail" });
    } catch (e) {
      errors.push(e instanceof Error ? e.message : "Gmail failed");
    }

    try {
      await sendWithFormSubmit(payload);
      return Response.json({
        ok: true,
        via: "formsubmit",
        note: "If this is the first message, confirm the FormSubmit email in your inbox.",
      });
    } catch (e) {
      errors.push(e instanceof Error ? e.message : "FormSubmit failed");
    }

    return Response.json(
      {
        ok: false,
        error: errors[0] || "Could not send message. Please email me directly.",
        details: errors,
      },
      { status: 502 }
    );
  } catch {
    return Response.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
