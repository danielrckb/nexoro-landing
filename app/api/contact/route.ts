import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // Port 465 = SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      authMethod: "LOGIN", // IONOS requires LOGIN explicitly
    });

    await transporter.sendMail({
      from: `"Nexoro Kontaktformular" <${process.env.SMTP_USER}>`,
      to: "office@nexoro.net",
      subject: "Neue Kontaktanfrage über Nexoro Website",
      text: `
Vorname: ${body.vorname}
Nachname: ${body.nachname}
E-Mail: ${body.email}
Telefon: ${body.telefon}
Unternehmen: ${body.unternehmen}
Betreff: ${body.betreff}
Nachricht: ${body.nachricht}
      `,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Vorname:</strong> ${body.vorname}</p>
        <p><strong>Nachname:</strong> ${body.nachname}</p>
        <p><strong>E-Mail:</strong> ${body.email}</p>
        <p><strong>Telefon:</strong> ${body.telefon}</p>
        <p><strong>Unternehmen:</strong> ${body.unternehmen}</p>
        <p><strong>Betreff:</strong> ${body.betreff}</p>
        <p><strong>Nachricht:</strong><br>${body.nachricht}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("SMTP Error:", error);
    return Response.json({ ok: false, error }, { status: 500 });
  }
}
