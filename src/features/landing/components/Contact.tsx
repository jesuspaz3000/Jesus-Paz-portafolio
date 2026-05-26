"use client"

import { useState, FormEvent } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Box, Button, TextField, Typography, Alert, CircularProgress } from "@mui/material";
import { fieldStyles, decoratorCircle, decoratorRectangle, submitStyles } from "@/shared/mui/ContactFormSx";
import { motion } from "framer-motion";
import SectionChip from "@/shared/components/SectionChip";

import { sendEmail } from "@/app/actions/send-email";

const contactItems = [
    {
        label: "Correo",
        value: "veyito30000@gmail.com",
        icon: EmailOutlinedIcon,
    },
    {
        label: "Ubicación",
        value: "Arequipa, Perú",
        icon: LocationOnOutlinedIcon,
    },
    {
        label: "Teléfono",
        value: "+51 930 817 891",
        icon: PhoneOutlinedIcon,
    },
    {
        label: "Disponibilidad",
        value: "Disponible para proyectos frontend y full stack",
        icon: ScheduleOutlinedIcon,
    },
];

const formVariants = {
    hidden: { opacity: 0, x: -35 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring" as const,
            stiffness: 80,
            damping: 15,
        }
    }
};

const infoVariants = {
    hidden: { opacity: 0, x: 35 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring" as const,
            stiffness: 80,
            damping: 15,
        }
    }
};

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setAlert(null);

        try {
            // Crear FormData y agregar los campos
            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("message", message);

            // Enviar el FormData completo
            await sendEmail(formData);

            // Mostrar éxito
            setAlert({
                type: "success",
                message: "¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.",
            });

            // Limpiar el formulario después de enviar
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error("Error sending email:", error);
            setAlert({
                type: "error",
                message: "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.",
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <Box id="contact" component="form" onSubmit={handleSubmit} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", px: 2, py: { xs: 7, md: 8 }, overflow: "visible" }}>
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", marginBottom: "40px" }}
            >
                <SectionChip 
                    icon={<ChatBubbleOutlineIcon />} 
                    label="Contacto" 
                />
                <Typography sx={{ fontSize: { xs: 38, md: 64 }, lineHeight: 1.05, mt: 2, textAlign: "center" }}>
                    Trabajemos juntos
                </Typography>
                <Typography sx={{ fontSize: { xs: 16, md: 20 }, color: "secondary.main", maxWidth: 760, mt: 2, textAlign: "center" }}>
                    ¿Tienes un proyecto en mente? Conversemos sobre cómo llevar tus ideas a una aplicación funcional.
                </Typography>
            </motion.div>

            <Box sx={decoratorCircle}>
                <motion.div
                    variants={formVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    style={{ height: "100%", width: "100%" }}
                >
                    <Box sx={decoratorRectangle}>
                        {alert && (
                            <Alert
                                severity={alert.type}
                                onClose={() => setAlert(null)}
                                sx={{
                                    borderRadius: 2.5,
                                    backgroundColor: alert.type === "success" ? "rgba(57, 255, 20, 0.08)" : "rgba(255, 50, 50, 0.08)",
                                    color: alert.type === "success" ? "#63ff5b" : "#ff5f5f",
                                    border: alert.type === "success" ? "1px solid rgba(57, 255, 20, 0.22)" : "1px solid rgba(255, 50, 50, 0.22)",
                                    "& .MuiAlert-icon": {
                                        color: alert.type === "success" ? "#63ff5b" : "#ff5f5f",
                                    },
                                    "& .MuiAlert-action": {
                                        color: "inherit",
                                    }
                                }}
                            >
                                {alert.message}
                            </Alert>
                        )}
                        <TextField name="name" label="Nombre" placeholder="Tu nombre" fullWidth required disabled={loading} sx={fieldStyles} value={name} onChange={(e) => setName(e.target.value)} />
                        <TextField name="email" label="Correo" placeholder="tu.correo@ejemplo.com" type="email" fullWidth required disabled={loading} sx={fieldStyles} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextField
                            name="message"
                            label="Mensaje"
                            placeholder="Cuéntame sobre tu proyecto..."
                            multiline
                            minRows={6}
                            fullWidth
                            required
                            disabled={loading}
                            sx={{
                                ...fieldStyles,
                                flexGrow: 1,
                                display: "flex",
                                flexDirection: "column",
                                "& .MuiInputBase-root": {
                                    flexGrow: 1,
                                    alignItems: "flex-start",
                                    py: 2.25,
                                },
                                "& .MuiInputBase-input": {
                                    height: "100% !important",
                                }
                            }}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <Button
                            type="submit"
                            disabled={loading}
                            variant="contained"
                            endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendOutlinedIcon />}
                            sx={submitStyles}
                        >
                            {loading ? "Enviando..." : "Enviar mensaje"}
                        </Button>
                    </Box>
                </motion.div>

                <motion.div
                    variants={infoVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    style={{ height: "100%", width: "100%" }}
                >
                    <Box sx={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column" }}>
                        <Typography sx={{ fontSize: { xs: 26, md: 32 }, fontWeight: 800, mb: 1 }}>
                            Conectemos
                        </Typography>
                        <Typography sx={{ color: "secondary.main", lineHeight: 1.8, mb: 3, maxWidth: 560 }}>
                            Estoy abierto a conversar sobre proyectos frontend, full stack, integraciones con APIs o mejoras para productos web existentes.
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            {contactItems.map(({ label, value, icon: Icon }) => (
                                <Box
                                    key={label}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 2,
                                        borderRadius: 3,
                                        border: "1px solid rgba(255, 255, 255, 0.08)",
                                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                                        p: 2.25,
                                    }}
                                >
                                    <Box sx={{ width: 46, height: 46, borderRadius: 2.5, display: "grid", placeItems: "center", color: "#63ff5b", backgroundColor: "rgba(57, 255, 20, 0.14)" }}>
                                        <Icon fontSize="small" />
                                    </Box>
                                    <Box>
                                        <Typography sx={{ color: "secondary.main", fontSize: 13 }}>
                                            {label}
                                        </Typography>
                                        <Typography sx={{ fontWeight: 700, mt: 0.4 }}>
                                            {value}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </motion.div>
            </Box>
        </Box>
    )
}