"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        throw new Error("All fields are required");
    }

    await resend.emails.send({
        from: "Contacto vía portafolio <onboarding@resend.dev>",
        to: ["veyito30000@gmail.com"],
        subject: "Nuevo mensaje de contacto",
        html: `
            <h3>Nuevo mensaje</h3>
            <p><b>Nombre:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Mensaje:</b> ${message}</p>
        `,
    });
}