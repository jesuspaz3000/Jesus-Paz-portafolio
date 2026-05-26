"use client"

import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LockIcon from "@mui/icons-material/Lock";
import { Box, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import SectionChip from "@/shared/components/SectionChip";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { swiperContainerStyles, projectCardStyles, getCardHeaderStyles, tooltipStyles } from "@/shared/mui/MyWorkSx";

type ProjectType = "ui" | "full-stack";

interface Project {
    name: string;
    description: string;
    type: ProjectType;
    category: string;
    tags: string[];
    metric: string;
    gradient: string;
    logo?: string;
    noGrid?: boolean;
    demoUrl?: string;
    githubUrl?: string;
    isPrivate?: boolean;
    logoFullSize?: boolean;
    demoTooltip?: string;
    githubTooltip?: string;
}

const filterContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05,
        }
    }
};

const filterItemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 110,
            damping: 12,
        }
    }
};

export default function MyWork() {
    const [selectedFilter, setSelectedFilter] = useState<ProjectType | "all">("all");

    const filters: { label: string; value: ProjectType | "all" }[] = [
        { label: "Todos", value: "all" },
        { label: "Frontend", value: "ui" },
        { label: "Full stack", value: "full-stack" },
    ];

    const projects: Project[] = [
        {
            name: "Smartmuni Software",
            type: "ui",
            category: "Frontend",
            description: "Evolución de la plataforma de gobierno digital Smartmuni, optimizando la estabilidad del sistema mediante corrección de errores críticos e implementación de funcionalidades a medida bajo demanda de municipalidades.",
            tags: ["Vue.js", "Quasar", "Frontend"],
            metric: "Mantenimiento & Nuevos Módulos",
            gradient: "#1615B1",
            logo: "/logo/smart-muni.svg",
            noGrid: true,
            isPrivate: true,
        },
        {
            name: "Sistema de Tracking Turístico NextTrip",
            type: "ui",
            category: "Frontend",
            description: "Plataforma web para la gestión integral y tracking en tiempo real de itinerarios turísticos, brindando una navegación fluida al usuario final.",
            tags: ["Next.js", "App Router", "Django APIs"],
            metric: "Frontend & Integración de APIs",
            gradient: "#263238",
            logo: "/logo/next-trip.svg",
            noGrid: true,
            demoUrl: "https://nexttriptech.com/",
            demoTooltip: "Ver landing page (Dashboard privado)",
        },
        {
            name: "Sistema de Gestión de Veterinarias",
            type: "full-stack",
            category: "Full stack",
            description: "ERP para clínicas veterinarias que centraliza de forma segura el control de citas, historiales médicos y facturación en un entorno corporativo.",
            tags: ["Next.js", "Spring Boot", "Material UI"],
            metric: "Desarrollo Full-Stack & Control de Roles (RBAC)",
            gradient: "#ffffff",
            logo: "/logo/logo-gestion-veterinaria.png",
            noGrid: true,
            logoFullSize: true,
        },
        {
            name: "Administrador de Tienda / E-commerce",
            type: "full-stack",
            category: "Full stack",
            description: "Panel administrativo comercial que automatiza el control de stock, cierres de caja diaria y la generación de reportes de ventas integrados con gráficos interactivos.",
            tags: ["Next.js", "Spring Boot", "PostgreSQL"],
            metric: "Full-Stack: JWT, PostgreSQL & Redis",
            gradient: "#ffffff",
            githubUrl: "https://github.com/jesuspaz3000/fullstack-ecommerce-app.git",
            logo: "/logo/logo-jhemar.png",
            logoFullSize: true,
            noGrid: true,
        },
        {
            name: "Sistema de Gestión de Pagos",
            type: "ui",
            category: "Frontend",
            description: "Desarrollo frontend de una plataforma web para la gestión de recaudación de servicios públicos, realizada a través de la consultora Beryllium para su cliente final en el sector de saneamiento.",
            tags: ["Next.js", "Material UI", "Gestión"],
            metric: "UI & Flujos de Recaudación",
            gradient: "#ffffff",
            logo: "/logo/logo-sedapar.png",
            logoFullSize: true,
            noGrid: true,
            isPrivate: true
        },
        {
            name: "Migración Gestión de Molinos",
            type: "ui",
            category: "Frontend",
            description: "Modernización y refactorización frontend de un sistema heredado de control y monitoreo de producción, desarrollada a través de la consultora Beryllium para su cliente final en el sector agroindustrial.",
            tags: ["Vue.js", "Next.js", "Migración"],
            metric: "Migración Vue 2 a Next.js (Rendimiento)",
            gradient: "#006400",
            logo: "/logo/logo-molinos.png",
            logoFullSize: true,
            noGrid: true,
            isPrivate: true
        },
    ];

    const handleFilterChange = (filter: ProjectType | "all") => {
        setSelectedFilter(filter);
    }

    const filteredProjects = projects.filter((project) => {
        if (selectedFilter === "all") return true;
        return project.type === selectedFilter;
    });

    return (
        <Box id="projects" sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", px: 2, py: { xs: 7, md: 8 }, position: "relative", overflow: "visible" }}>
            <Box sx={{ position: "absolute", width: { xs: 500, md: 680 }, height: { xs: 500, md: 680 }, borderRadius: "50%", background: "radial-gradient(circle, rgba(57, 255, 20, 0.09), transparent 68%)", right: { xs: -300, md: -120 }, top: { xs: 240, md: 260 }, pointerEvents: "none" }} />

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", marginBottom: "32px" }}
            >
                <SectionChip 
                    icon={<AutoAwesomeIcon />} 
                    label="Mi trabajo" 
                />
                <Typography sx={{ fontSize: { xs: 38, md: 64 }, lineHeight: 1.05, mt: 2, textAlign: "center" }}>
                    Proyectos destacados
                </Typography>
                <Typography sx={{ fontSize: { xs: 16, md: 20 }, color: "secondary.main", maxWidth: 720, mt: 2, textAlign: "center" }}>
                    Algunos proyectos y sistemas en los que he trabajado recientemente.
                </Typography>
            </motion.div>

            <motion.div
                variants={filterContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "32px", width: "100%", zIndex: 1, position: "relative" }}
            >
                {filters.map((filter) => {
                    const isSelected = selectedFilter === filter.value;

                    return (
                        <motion.div key={filter.value} variants={filterItemVariants}>
                            <Box
                                component="button"
                                type="button"
                                onClick={() => handleFilterChange(filter.value)}
                                sx={{
                                    border: isSelected ? "1px solid rgba(99, 255, 91, 0.45)" : "1px solid rgba(255, 255, 255, 0.08)",
                                    borderRadius: 10,
                                    color: isSelected ? "background.default" : "secondary.main",
                                    cursor: "pointer",
                                    paddingX: 2,
                                    paddingY: 1,
                                    textAlign: "center",
                                    fontWeight: 700,
                                    backgroundColor: isSelected ? "#63ff5b" : "rgba(255, 255, 255, 0.06)",
                                    transition: "color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease",
                                    "&:hover": {
                                        color: isSelected ? "background.default" : "#63ff5b",
                                        borderColor: "rgba(99, 255, 91, 0.45)",
                                        backgroundColor: isSelected ? "#63ff5b" : "rgba(57, 255, 20, 0.1)",
                                    },
                                }}
                            >
                                {filter.label}
                            </Box>
                        </motion.div>
                    )
                })}
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                style={{ width: "1440px", maxWidth: "100%" }}
            >
                <Box
                    sx={swiperContainerStyles}
                >
                    <Swiper
                        key={selectedFilter}
                        modules={[Navigation, Pagination, A11y]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={24}
                        slidesPerView={3}
                        watchSlidesProgress={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 24,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                        }}
                    >
                        {filteredProjects.map((project) => (
                            <SwiperSlide key={project.name}>
                                <Box sx={projectCardStyles}>
                                    <Box
                                        sx={getCardHeaderStyles(project.gradient, project.noGrid)}
                                    >
                                        {project.logo && (
                                            <Box sx={{ position: "absolute", inset: 0, display: "flex", justifyContent: "center", alignItems: "center", zIndex: 0 }}>
                                                <Box sx={{
                                                    position: "relative",
                                                    width: project.logoFullSize ? "90%" : "100%",
                                                    height: project.logoFullSize ? "90%" : 76,
                                                    maxWidth: project.logoFullSize ? "90%" : 240
                                                }}>
                                                    <Image
                                                        src={project.logo}
                                                        alt={`Logo de ${project.name}`}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, 240px"
                                                        style={{
                                                            objectFit: "contain",
                                                            opacity: 0.95
                                                        }}
                                                    />
                                                </Box>
                                            </Box>
                                        )}
                                        <Box sx={{ borderRadius: 10, paddingX: 1.5, paddingY: 0.75, backgroundColor: "rgba(0, 0, 0, 0.38)", border: "1px solid rgba(255, 255, 255, 0.08)", fontSize: 12, position: "relative", zIndex: 1 }}>
                                            {project.category}
                                        </Box>
                                        {project.isPrivate ? (
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, borderRadius: 10, paddingX: 1.5, paddingY: 0.75, backgroundColor: "rgba(239, 68, 68, 0.15)", border: "1px solid rgba(239, 68, 68, 0.3)", color: "#f87171", fontSize: 12, fontWeight: 700, position: "relative", zIndex: 1 }}>
                                                <LockIcon sx={{ fontSize: 14 }} />
                                                Privado
                                            </Box>
                                        ) : (
                                            <Box sx={{ display: "flex", gap: 1, position: "relative", zIndex: 1 }}>
                                                <Tooltip
                                                    title={project.demoTooltip || (project.demoUrl ? "Ver demo en vivo" : "Demo no disponible")}
                                                    placement="top"
                                                    arrow
                                                    slotProps={tooltipStyles}
                                                >
                                                    {project.demoUrl ? (
                                                        <Box component="a" href={project.demoUrl} target="_blank" rel="noopener noreferrer" sx={{ width: 36, height: 36, borderRadius: 2, display: "grid", placeItems: "center", color: "primary.main", backgroundColor: "rgba(0, 0, 0, 0.38)", border: "1px solid rgba(255, 255, 255, 0.08)", transition: "color 0.2s ease, border-color 0.2s ease", "&:hover": { color: "#63ff5b", borderColor: "rgba(99, 255, 91, 0.45)" } }}>
                                                            <LaunchIcon fontSize="small" />
                                                        </Box>
                                                    ) : (
                                                        <Box component="span" aria-label={`Demo no disponible de ${project.name}`} sx={{ width: 36, height: 36, borderRadius: 2, display: "grid", placeItems: "center", color: "rgba(255, 255, 255, 0.25)", backgroundColor: "rgba(0, 0, 0, 0.38)", border: "1px solid rgba(255, 255, 255, 0.04)", cursor: "not-allowed" }}>
                                                            <LaunchIcon fontSize="small" />
                                                        </Box>
                                                    )}
                                                </Tooltip>
                                                <Tooltip
                                                    title={project.githubTooltip || (project.githubUrl ? "Ver código fuente" : "Repositorio no disponible")}
                                                    placement="top"
                                                    arrow
                                                    slotProps={tooltipStyles}
                                                >
                                                    {project.githubUrl ? (
                                                        <Box component="a" href={project.githubUrl} target="_blank" rel="noopener noreferrer" sx={{ width: 36, height: 36, borderRadius: 2, display: "grid", placeItems: "center", color: "primary.main", backgroundColor: "rgba(0, 0, 0, 0.38)", border: "1px solid rgba(255, 255, 255, 0.08)", transition: "color 0.2s ease, border-color 0.2s ease", "&:hover": { color: "#63ff5b", borderColor: "rgba(99, 255, 91, 0.45)" } }}>
                                                            <GitHubIcon fontSize="small" />
                                                        </Box>
                                                    ) : (
                                                        <Box component="span" aria-label={`Repositorio no enlazado de ${project.name}`} sx={{ width: 36, height: 36, borderRadius: 2, display: "grid", placeItems: "center", color: "rgba(255, 255, 255, 0.25)", backgroundColor: "rgba(0, 0, 0, 0.38)", border: "1px solid rgba(255, 255, 255, 0.04)", cursor: "not-allowed" }}>
                                                            <GitHubIcon fontSize="small" />
                                                        </Box>
                                                    )}
                                                </Tooltip>
                                            </Box>
                                        )}
                                    </Box>
                                    <Box sx={{ padding: 3, flex: 1, display: "flex", flexDirection: "column" }}>
                                        <Typography sx={{ fontSize: 22, fontWeight: 800, minHeight: 54, marginBottom: 1, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                            {project.name}
                                        </Typography>
                                        <Typography sx={{ color: "secondary.main", minHeight: 125, marginBottom: 2, lineHeight: 1.7 }}>
                                            {project.description}
                                        </Typography>
                                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, marginBottom: 2 }}>
                                            {project.tags.map((tag) => (
                                                <Box key={tag} sx={{ borderRadius: 10, color: "#63ff5b", fontSize: 12, fontWeight: 700, paddingX: 1.5, paddingY: 0.75, backgroundColor: "rgba(57, 255, 20, 0.12)" }}>
                                                    {tag}
                                                </Box>
                                            ))}
                                        </Box>
                                        <Typography sx={{ color: "#63ff5b", fontSize: 14, fontWeight: 700, mt: "auto" }}>
                                            {project.metric}
                                        </Typography>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </motion.div>
        </Box>
    )
}