"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    try {
        const name = (formData.get("name") as string || "").trim();
        const email = (formData.get("email") as string || "").trim();
        const message = (formData.get("message") as string || "").trim();

        // 1. Validaciones básicas en el servidor
        if (!name) {
            return { success: false, error: "El nombre es obligatorio." };
        }
        if (!email) {
            return { success: false, error: "El correo electrónico es obligatorio." };
        }
        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return { success: false, error: "El formato de correo electrónico no es válido." };
        }
        if (!message) {
            return { success: false, error: "El mensaje es obligatorio y no puede estar vacío." };
        }

        // 2. Verificar que la API Key esté configurada
        if (!process.env.RESEND_API_KEY) {
            console.error("Resend API Key is missing in environment variables.");
            return { 
                success: false, 
                error: "El servicio de mensajería no está configurado correctamente en el servidor. Por favor, contacta directamente a veyito30000@gmail.com." 
            };
        }

        // 3. Enviar el correo usando Resend
        const response = await resend.emails.send({
            from: "Contacto vía portafolio <onboarding@resend.dev>",
            to: ["veyito30000@gmail.com"],
            subject: `Nuevo mensaje de contacto de ${name}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6;">
                    <h2 style="color: #63ff5b; background-color: #0b0b0b; padding: 15px; border-radius: 8px;">Nuevo mensaje de contacto</h2>
                    <p><strong>Nombre:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p><strong>Mensaje:</strong></p>
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #63ff5b; white-space: pre-wrap;">${message}</div>
                </div>
            `,
        });

        // 4. Resend devuelve { data, error }. Si hay error, lo reportamos.
        if (response.error) {
            console.error("Resend API Error:", response.error);
            return { 
                success: false, 
                error: `Error del servicio de mensajería: ${response.error.message}` 
            };
        }

        return { success: true };
    } catch (err: any) {
        console.error("Unexpected error in sendEmail action:", err);
        return { 
            success: false, 
            error: err.message || "Ocurrió un error inesperado al enviar el mensaje." 
        };
    }
}