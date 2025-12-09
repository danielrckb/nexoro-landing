// /app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstname, lastname, email, phone, company, subject, message } =
      await req.json();

    // Transporter einrichten (z. B. SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email an dich erstellen
    await transporter.sendMail({
      from: `"Nexoro Kontaktformular" <${process.env.SMTP_USER}>`,
      to: "office@wiroconsulting.at",
      subject: "Neue Kontaktanfrage via Nexoro Website",
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Vorname:</strong> ${firstname}</p>
        <p><strong>Nachname:</strong> ${lastname}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "-"} </p>
        <p><strong>Unternehmen:</strong> ${company || "-"} </p>
        <p><strong>Betreff:</strong> ${subject}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ message: "Success" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Email sending failed" }, { status: 500 });
  }
}
