"use client"

import { Box, Typography } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import type { ReactNode } from "react";
import {
    DockerIcon,
    FigmaIcon,
    GitIcon,
    GithubIcon,
    JavaIcon,
    JavaScriptIcon,
    NextJsIcon,
    PostgresIcon,
    PostmanIcon,
    RedisIcon,
    SpringBootIcon,
    VueJSIcon,
    NginxIcon,
    ReactIcon,
    MaterialUIIcon,
    TailwindIcon
} from "@/assets/icons";
import { motion } from "framer-motion";
import SectionChip from "@/shared/components/SectionChip";

type Skill = {
    icon: ReactNode;
    name: string;
};

type SkillCategory = {
    title: string;
    skills: Skill[];
};

const skillCategories: SkillCategory[] = [
    {
        title: "Desarrollo Frontend",
        skills: [
            { icon: <ReactIcon width={24} height={24} />, name: "React" },
            { icon: <NextJsIcon width={24} height={24} />, name: "Next.js" },
            { icon: <VueJSIcon width={24} height={24} />, name: "Vue.js" },
            { icon: <JavaScriptIcon width={24} height={24} />, name: "JavaScript" },
            { icon: <TailwindIcon width={24} height={24} />, name: "Tailwind CSS" },
            { icon: <MaterialUIIcon width={24} height={24} />, name: "Material UI" },
        ],
    },
    {
        title: "Backend & Bases de Datos",
        skills: [
            { icon: <JavaIcon width={24} height={24} />, name: "Java" },
            { icon: <SpringBootIcon width={24} height={24} />, name: "Spring Boot" },
            { icon: <PostgresIcon width={24} height={24} />, name: "PostgreSQL" },
            { icon: <RedisIcon width={24} height={24} />, name: "Redis" },
        ],
    },
    {
        title: "Herramientas & DevOps",
        skills: [
            { icon: <GitIcon width={24} height={24} />, name: "Git" },
            { icon: <GithubIcon width={24} height={24} />, name: "GitHub" },
            { icon: <DockerIcon width={24} height={24} />, name: "Docker" },
            { icon: <NginxIcon width={24} height={24} />, name: "Nginx" },
            { icon: <PostmanIcon width={24} height={24} />, name: "Postman" },
            { icon: <FigmaIcon width={24} height={24} />, name: "Figma" },
        ],
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        }
    }
};

const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const
        }
    }
};

export default function SkillsAndTech() {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", px: 2, py: { xs: 7, md: 8 }, position: "relative", overflow: "visible" }} id="skills">
            <Box sx={{ position: "absolute", width: { xs: 480, md: 640 }, height: { xs: 480, md: 640 }, borderRadius: "50%", background: "radial-gradient(circle, rgba(57, 255, 20, 0.1), transparent 68%)", left: { xs: -260, md: -120 }, bottom: { xs: -80, md: -50 }, pointerEvents: "none" }} />

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5 }}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", marginBottom: "40px" }}
            >
                <SectionChip 
                    icon={<AutoAwesomeIcon />} 
                    label="Habilidades" 
                />
                <Typography sx={{ fontSize: { xs: 38, md: 64 }, lineHeight: 1.05, mt: 2, textAlign: "center" }}>
                    Tecnologías y Habilidades
                </Typography>
                <Typography sx={{ fontSize: { xs: 16, md: 20 }, color: "secondary.main", maxWidth: 840, mt: 2, textAlign: "center", lineHeight: 1.6 }}>
                    El ecosistema de herramientas, lenguajes y frameworks que domino para materializar ideas en aplicaciones del mundo real robustas y eficientes.
                </Typography>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20px" }}
                style={{ width: "1440px", maxWidth: "100%" }}
            >
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, alignItems: "flex-start", gap: 3, position: "relative", zIndex: 1 }}>
                    {skillCategories.map((category) => (
                        <motion.div key={category.title} variants={columnVariants} style={{ height: "100%" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 2.5,
                                    background: "rgba(255, 255, 255, 0.06)",
                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                    borderRadius: 4,
                                    p: { xs: 2.5, md: 3 },
                                    boxShadow: "0 24px 60px rgba(0, 0, 0, 0.32)",
                                    overflow: "hidden",
                                    position: "relative",
                                    height: "100%",
                                    "&:before": {
                                        content: '""',
                                        position: "absolute",
                                        inset: 0,
                                        backgroundImage:
                                            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                                        backgroundSize: "28px 28px",
                                        maskImage: "linear-gradient(135deg, black, transparent 78%)",
                                        pointerEvents: "none",
                                    },
                                }}
                            >
                                <Typography sx={{ position: "relative", zIndex: 1, fontSize: 22, fontWeight: 800, mb: 1, borderBottom: "1px solid rgba(255,255,255,0.08)", pb: 1.5, color: "primary.main" }}>
                                    {category.title}
                                </Typography>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.75, mt: 0.5 }}>
                                    {category.skills.map((skill) => (
                                        <Box
                                            key={skill.name}
                                            sx={{
                                                position: "relative",
                                                zIndex: 1,
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 2,
                                                background: "rgba(255, 255, 255, 0.04)",
                                                border: "1px solid rgba(255, 255, 255, 0.06)",
                                                borderRadius: 3,
                                                p: 1.75,
                                                transition: "all 0.25s ease",
                                                "&:hover": {
                                                    transform: "translateY(-3px)",
                                                    borderColor: "rgba(99, 255, 91, 0.35)",
                                                    backgroundColor: "rgba(57, 255, 20, 0.05)",
                                                    boxShadow: "0 8px 30px rgba(57, 255, 20, 0.1)",
                                                }
                                            }}
                                        >
                                            <Box sx={{ width: 32, height: 32, display: "grid", placeItems: "center", flexShrink: 0 }}>
                                                {skill.icon}
                                            </Box>
                                            <Typography sx={{ fontWeight: 700, fontSize: 16 }}>
                                                {skill.name}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </motion.div>
                    ))}
                </Box>
            </motion.div>
        </Box>
    )
}