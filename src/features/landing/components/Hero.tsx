"use client"

import StarIcon from "@mui/icons-material/Star";
import { Box, Button, Grid, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import { DockerIcon, GitIcon, NextJsIcon, PostgresIcon, RedisIcon, SpringBootIcon, ReactIcon } from "@/assets/icons";
import { motion } from "framer-motion";
import SectionChip from "@/shared/components/SectionChip";
import { tooltipStyles } from "@/shared/mui/MyWorkSx";

const heroStats = [
    { value: "2+", label: "Años de experiencia" },
    { value: "5+", label: "Proyectos realizados" },
    { value: "10+", label: "Tecnologías" },
];

const stackIcons = [
    { name: "React.js", icon: ReactIcon },
    { name: "Next.js", icon: NextJsIcon },
    { name: "Spring Boot", icon: SpringBootIcon },
    { name: "PostgreSQL", icon: PostgresIcon },
    { name: "Redis", icon: RedisIcon },
    { name: "Docker", icon: DockerIcon },
    { name: "Git", icon: GitIcon },
];

// Motion Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const
        }
    }
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 80,
            damping: 16,
            delay: 0.35,
        }
    }
};

const iconContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.75,
        }
    }
};

const iconVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.7 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 120,
            damping: 10,
        }
    }
};

export default function Hero() {
    return (
        <Box sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", px: 2, pt: { xs: 14, md: 10 }, pb: { xs: 8, md: 6 }, position: "relative", overflow: "hidden" }}>
            <Box sx={{ position: "absolute", width: { xs: 520, md: 860 }, height: { xs: 520, md: 860 }, borderRadius: "50%", background: "radial-gradient(circle, rgba(57, 255, 20, 0.1), rgba(57, 255, 20, 0.05) 34%, transparent 68%)", right: { xs: -360, md: -180 }, top: { xs: 40, md: -120 }, pointerEvents: "none" }} />
            <Box sx={{ position: "absolute", width: { xs: 420, md: 620 }, height: { xs: 420, md: 620 }, borderRadius: "50%", background: "radial-gradient(circle, rgba(57, 255, 20, 0.1), transparent 68%)", left: { xs: -260, md: -90 }, bottom: { xs: 80, md: 70 }, pointerEvents: "none" }} />
            <Box sx={{ width: "1440px", maxWidth: "100%", display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 0.9fr" }, gap: { xs: 6, md: 8 }, alignItems: "center", position: "relative", zIndex: 1 }}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ display: "flex", flexDirection: "column" }}
                >
                    <motion.div variants={itemVariants}>
                        <SectionChip
                            icon={<StarIcon />}
                            label="Desarrollador Full Stack | Arequipa, Perú"
                            sx={{ mb: 3 }}
                        />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Typography sx={{ fontSize: { xs: 46, sm: 58, md: 76 }, lineHeight: 1.02, mb: 3, maxWidth: 760, fontWeight: 800 }}>
                            Jesús Miguel Paz Llave
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Typography sx={{ fontSize: { xs: 16, md: 18 }, lineHeight: 1.8, color: "secondary.main", maxWidth: 680 }}>
                            Desarrollador Web Full Stack con experiencia en el desarrollo de interfaces responsivas y funcionales con React y Next.js. Experiencia en backend con Spring Boot y enfoque en código limpio, mantenible y escalable.
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Box sx={{ display: "flex", gap: 2, mt: 4, flexWrap: "wrap" }}>
                            <Button href="#contact" sx={{ borderRadius: 10, px: 3, py: 1.25, color: "background.default", backgroundColor: "#f4fff1", fontWeight: 700, textTransform: "none", "&:hover": { backgroundColor: "#63ff5b" } }}>
                                Contáctame
                            </Button>
                            <Button
                                href="/curriculum/cv-jesus-paz.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    borderRadius: 10,
                                    px: 3,
                                    py: 1.25,
                                    color: "#63ff5b",
                                    border: "1px solid rgba(99, 255, 91, 0.45)",
                                    backgroundColor: "rgba(57, 255, 20, 0.06)",
                                    fontWeight: 700,
                                    textTransform: "none",
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                        color: "background.default",
                                        backgroundColor: "#63ff5b",
                                        borderColor: "#63ff5b",
                                        boxShadow: "0 0 16px rgba(99, 255, 91, 0.4)"
                                    }
                                }}
                            >
                                Ver CV
                            </Button>
                        </Box>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Grid container spacing={2.5} sx={{ mt: 5, maxWidth: 620 }}>
                            {heroStats.map(({ value, label }) => (
                                <Grid key={label} size={{ xs: 4 }}>
                                    <Box sx={{ borderLeft: "3px solid #63ff5b", pl: { xs: 1.5, md: 2.5 } }}>
                                        <Typography sx={{ color: "#63ff5b", fontSize: { xs: 26, md: 34 }, fontWeight: 800, lineHeight: 1 }}>
                                            {value}
                                        </Typography>
                                        <Typography sx={{ color: "secondary.main", fontSize: { xs: 12, md: 14 }, mt: 1, lineHeight: 1.3 }}>
                                            {label}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <Box sx={{ width: "100%", maxWidth: 520, borderRadius: 4, border: "1px solid rgba(99, 255, 91, 0.24)", background: "rgba(255, 255, 255, 0.06)", boxShadow: "0 30px 90px rgba(0, 0, 0, 0.42)", p: 1.5, overflow: "hidden", position: "relative" }}>
                        <Box sx={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 1 }} />
                        <Image src="/image/foto-perfil.png" alt="Hero Image" width={1240} height={1240} style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", display: "block", borderRadius: 12, filter: "grayscale(0.25)" }} priority />
                        <motion.div
                            variants={iconContainerVariants}
                            initial="hidden"
                            animate="visible"
                            style={{ position: "absolute", left: 28, bottom: 24, display: "flex", alignItems: "center", gap: 11.2, zIndex: 2, borderRadius: 10, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, backgroundColor: "rgba(0, 0, 0, 0.55)", border: "1px solid rgba(255, 255, 255, 0.08)", backdropFilter: "blur(10px)" }}
                        >
                            {stackIcons.map(({ name, icon: Icon }) => (
                                <Tooltip key={name} title={name} placement="top" arrow slotProps={tooltipStyles}>
                                    <motion.div variants={iconVariants} style={{ display: "grid", placeItems: "center", cursor: "pointer" }}>
                                        <Icon width={20} height={20} />
                                    </motion.div>
                                </Tooltip>
                            ))}
                        </motion.div>
                    </Box>
                </motion.div>
            </Box>
        </Box>
    )
}