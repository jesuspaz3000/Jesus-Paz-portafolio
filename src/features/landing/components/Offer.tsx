"use client"

import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import RateReviewIcon from "@mui/icons-material/RateReview";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SectionChip from "@/shared/components/SectionChip";

const services = [
    {
        title: "Desarrollo Frontend",
        description: "Construcción de interfaces responsivas y funcionales con Next.js, React, Vue.js y Material UI, enfocadas en usabilidad y mantenibilidad.",
        icon: WebAssetIcon,
        size: { xs: 12, md: 6 },
    },
    {
        title: "Integración con APIs",
        description: "Conexión de aplicaciones frontend con APIs REST, manejo de sesiones, autenticación, consumo de datos y flujos completos de usuario.",
        icon: SmartphoneIcon,
        size: { xs: 12, md: 6 },
    },
    {
        title: "Migraciones Frontend",
        description: "Migración de sistemas legacy, como Vue.js 2 hacia Next.js, mejorando rendimiento, estructura del proyecto y mantenimiento futuro.",
        icon: DesignServicesIcon,
        size: { xs: 12, sm: 6, md: 3 },
    },
    {
        title: "Desarrollo Full Stack",
        description: "Implementación de aplicaciones con Next.js en frontend y Spring Boot en backend, incluyendo roles, permisos, CRUDs y reglas de negocio.",
        icon: CodeIcon,
        size: { xs: 12, sm: 6, md: 3 },
    },
    {
        title: "Optimización y Mantenimiento",
        description: "Corrección de bugs, mejora de estabilidad, refactorización de código y optimización de rendimiento en aplicaciones web existentes.",
        icon: ElectricBoltIcon,
        size: { xs: 12, sm: 6, md: 3 },
    },
    {
        title: "Documentación y Soporte",
        description: "Documentación de APIs con Swagger/OpenAPI, acompañamiento técnico y mejoras iterativas según feedback del cliente.",
        icon: RateReviewIcon,
        size: { xs: 12, sm: 6, md: 3 },
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 90,
            damping: 14,
        }
    }
};

export default function Offer() {
    return (
        <Box
            id="services"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                px: 2,
                py: { xs: 7, md: 8 },
                position: "relative",
                overflow: "hidden",
                "&:before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                    maskImage: "linear-gradient(180deg, transparent, black 12%, black 88%, transparent)",
                    pointerEvents: "none",
                },
                "&:after": {
                    content: '""',
                    position: "absolute",
                    width: { xs: 480, md: 680 },
                    height: { xs: 480, md: 680 },
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(57, 255, 20, 0.08), transparent 68%)",
                    left: "50%",
                    top: "58%",
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "none",
                },
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5 }}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", marginBottom: "40px" }}
            >
                <SectionChip 
                    icon={<ElectricBoltIcon />} 
                    label="Qué puedo ofrecer" 
                />
                <Typography sx={{ fontSize: { xs: 38, md: 64 }, lineHeight: 1.05, mt: 2, maxWidth: 820, textAlign: "center" }}>
                    Soluciones pensadas para productos reales.
                </Typography>
                <Typography sx={{ fontSize: { xs: 16, md: 20 }, color: "secondary.main", maxWidth: 760, mt: 2, textAlign: "center" }}>
                    Servicios enfocados en crear, mejorar y mantener aplicaciones web modernas, escalables y fáciles de usar.
                </Typography>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20px" }}
                style={{ width: "1440px", maxWidth: "100%" }}
            >
                <Grid container spacing={3} sx={{ width: "100%", position: "relative", zIndex: 1 }}>
                    {services.map(({ title, description, icon: Icon, size }) => (
                        <Grid key={title} size={size}>
                            <motion.div variants={cardVariants} style={{ height: "100%" }}>
                                <Box
                                    sx={{
                                        height: "100%",
                                        minHeight: { xs: 220, md: size.md === 6 ? 250 : 210 },
                                        borderRadius: 4,
                                        border: "1px solid rgba(255, 255, 255, 0.08)",
                                        background: "rgba(255, 255, 255, 0.06)",
                                        boxShadow: "0 24px 60px rgba(0, 0, 0, 0.32)",
                                        overflow: "hidden",
                                        position: "relative",
                                        p: { xs: 3, md: size.md === 6 ? 4 : 3 },
                                        transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
                                        "&:before": {
                                            content: '""',
                                            position: "absolute",
                                            inset: 0,
                                            backgroundSize: "28px 28px",
                                            maskImage: "linear-gradient(135deg, black, transparent 78%)",
                                            pointerEvents: "none",
                                        },
                                        "&:after": {
                                            content: '""',
                                            position: "absolute",
                                            inset: 0,
                                            background: "linear-gradient(135deg, rgba(57, 255, 20, 0.16), rgba(255, 255, 255, 0.08))",
                                            opacity: 0,
                                            transition: "opacity 0.25s ease",
                                            pointerEvents: "none",
                                        },
                                        "&:hover": {
                                            transform: "translateY(-6px)",
                                            borderColor: "rgba(91, 255, 90, 0.45)",
                                            boxShadow: "0 24px 60px rgba(57, 255, 20, 0.12)",
                                            "&:after": {
                                                opacity: 1,
                                            },
                                            "& .service-title": {
                                                color: "#63ff5b",
                                            },
                                        },
                                    }}
                                >
                                    <Box sx={{ position: "relative", zIndex: 1 }}>
                                        <Box
                                            sx={{
                                                width: 48,
                                                height: 48,
                                                borderRadius: 2.5,
                                                display: "grid",
                                                placeItems: "center",
                                                color: "#63ff5b",
                                                backgroundColor: "rgba(57, 255, 20, 0.16)",
                                                boxShadow: "0 0 24px rgba(57, 255, 20, 0.16)",
                                                mb: 3,
                                            }}
                                        >
                                            <Icon fontSize="small" />
                                        </Box>
                                        <Typography className="service-title" sx={{ fontSize: { xs: 20, md: size.md === 6 ? 24 : 18 }, fontWeight: 700, color: "primary.main", mb: 1.5, transition: "color 0.25s ease" }}>
                                            {title}
                                        </Typography>
                                        <Typography sx={{ color: "secondary.main", fontSize: { xs: 14, md: 15 }, lineHeight: 1.7 }}>
                                            {description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </motion.div>
        </Box>
    )
}