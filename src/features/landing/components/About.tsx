"use client"

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CodeIcon from "@mui/icons-material/Code";
import DownloadIcon from "@mui/icons-material/Download";
import SpeedIcon from "@mui/icons-material/Speed";
import { Box, Button, Grid, Typography } from "@mui/material";
import { highlightsStyles, iconStyles, chipStyles } from "@/shared/mui/AboutSx";
import { motion } from "framer-motion";
import SectionChip from "@/shared/components/SectionChip";

const highlights = [
    {
        title: "Experiencia",
        description: "Experiencia desarrollando frontend en Next.js, Vue.js y Material UI para sistemas reales de gestión y seguimiento.",
        icon: CodeIcon,
        size: { xs: 12 },
    },
    {
        title: "Clean Code",
        description: "Código mantenible, claro y pensado para crecer sin fricción.",
        icon: AutoAwesomeIcon,
        size: { xs: 12, sm: 6 },
    },
    {
        title: "Performance",
        description: "Optimización enfocada en velocidad, estabilidad y buena experiencia de usuario.",
        icon: SpeedIcon,
        size: { xs: 12, sm: 6 },
    },
    {
        title: "100%",
        description: "Clientes Satisfechos",
        size: { xs: 12, sm: 4 },
    },
    {
        title: "24/7",
        description: "Soporte y disponibilidad continua",
        size: { xs: 12, sm: 4 },
    },
    {
        title: "Rápido",
        description: "Tiempo de entrega eficiente y ágil",
        size: { xs: 12, sm: 4 },
    },
];

const stats = [
    { value: "2+", label: "Años de experiencia" },
    { value: "5+", label: "Proyectos desarrollados" },
    { value: "10+", label: "Tecnologías usadas" },
];

// Motion Variants
const textColumnVariants = {
    hidden: { opacity: 0, x: -30 },
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

const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 90,
            damping: 13,
        }
    }
};

export default function About() {
    return (
        <Box
            id="about"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                px: 2,
                py: { xs: 7, md: 8 },
                position: "relative",
                overflow: "hidden",
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                style={{ width: "1440px", maxWidth: "100%", marginBottom: "16px" }}
            >
                <SectionChip 
                    icon={<CodeIcon />} 
                    label="Desarrollador Full Stack" 
                    rightIcon={<AutoAwesomeIcon />} 
                />
            </motion.div>

            <Box sx={{ width: "1440px", maxWidth: "100%", display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 0.95fr" }, gap: { xs: 5, md: 6 }, alignItems: "stretch" }}>
                <motion.div
                    variants={textColumnVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <Typography sx={{ mb: 3, fontSize: { xs: 38, md: 64 }, lineHeight: 1.05, maxWidth: 720 }}>
                        Creando experiencias digitales que importan
                    </Typography>
                    <Typography sx={{ mb: 2, fontSize: { xs: 16, md: 18 }, lineHeight: 1.8, color: "secondary.main" }}>
                        Soy Jesús Miguel Paz Llave, desarrollador web full stack de Arequipa, Perú, especializado en construir interfaces responsivas y funcionales con React, Next.js y Vue.js.
                    </Typography>
                    <Typography sx={{ mb: 2, fontSize: { xs: 16, md: 18 }, lineHeight: 1.8, color: "secondary.main" }}>
                        He trabajado en sistemas de gestión, tracking de turismo, plataformas administrativas y aplicaciones full stack con autenticación, roles, CRUDs y validaciones de negocio.
                    </Typography>
                    <Typography sx={{ mb: 4, fontSize: { xs: 16, md: 18 }, lineHeight: 1.8, color: "secondary.main" }}>
                        Mi stack incluye Next.js, Vue.js, React, Material UI, Java, Spring Boot, PostgreSQL, Redis, Docker, Git y REST APIs. Me enfoco en código limpio, mantenible y escalable.
                    </Typography>
                    <Grid container spacing={2.5}>
                        {stats.map(({ value, label }) => (
                            <Grid key={label} size={{ xs: 4 }}>
                                <Box sx={{ borderLeft: "3px solid #63ff5b", pl: { xs: 1.5, md: 2.5 } }}>
                                    <Typography sx={{ fontSize: { xs: 26, md: 36 }, fontWeight: 800 }}>
                                        {value}
                                    </Typography>
                                    <Typography sx={{ fontSize: { xs: 12, md: 14 }, color: "secondary.main", mt: 0.5 }}>
                                        {label}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    <Button
                        variant="contained"
                        href="#contact"
                        startIcon={<DownloadIcon />}
                        sx={{
                            mt: 5,
                            borderRadius: 10,
                            px: 3,
                            py: 1.25,
                            color: "background.default",
                            backgroundColor: "#f4fff1",
                            fontWeight: 700,
                            textTransform: "none",
                            "&:hover": {
                                backgroundColor: "#63ff5b",
                            },
                        }}
                    >
                        Descargar CV
                    </Button>
                </motion.div>

                <motion.div
                    variants={cardContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    style={{ display: "flex", flexDirection: "column", gap: "20px", position: "relative" }}
                >
                    <Grid container spacing={2.5}>
                        {highlights.map(({ title, description, icon: Icon, size }) => {
                            const isStat = ["100%", "24/7", "Rápido"].includes(title);
                            return (
                                <Grid key={title} size={size}>
                                    <motion.div variants={cardVariants} style={{ height: "100%" }}>
                                        <Box
                                            sx={{
                                                ...highlightsStyles,
                                                minHeight: title === "Experiencia" ? 130 : isStat ? 140 : 200,
                                                flexDirection: title === "Experiencia" ? "row" : "column",
                                                alignItems: title === "Experiencia" ? "center" : "flex-start",
                                                height: "100%"
                                            }}
                                        >
                                            {Icon && (
                                                <Box sx={iconStyles}>
                                                    <Icon fontSize="small" />
                                                </Box>
                                            )}
                                            <Box sx={{ position: "relative", zIndex: 1 }}>
                                                <Typography
                                                    sx={{
                                                        fontWeight: 900,
                                                        fontSize: isStat ? { xs: 22, md: 26 } : { xs: 18, md: 20 },
                                                        color: isStat ? "#63ff5b" : "inherit",
                                                        mb: 1
                                                    }}
                                                >
                                                    {title}
                                                </Typography>
                                                <Typography sx={{ fontSize: { xs: 14, md: 15 }, lineHeight: 1.7, color: "secondary.main" }}>
                                                    {description}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </motion.div>
                                </Grid>
                            );
                        })}
                    </Grid>
                </motion.div>
            </Box>
        </Box>
    )
}