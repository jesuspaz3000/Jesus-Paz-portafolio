"use client"

import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LockIcon from "@mui/icons-material/Lock";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import SectionChip from "@/shared/components/SectionChip";
import { projects, type ProjectType } from "@/features/landing/data/projects";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { swiperContainerStyles, projectCardStyles, getCardHeaderStyles, tooltipStyles } from "@/shared/mui/MyWorkSx";

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
            duration: 0.25,
            ease: "easeOut" as const
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
                viewport={{ once: true, margin: "-20px" }}
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
                viewport={{ once: true, margin: "-20px" }}
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
                viewport={{ once: true, margin: "-20px" }}
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
                            <SwiperSlide key={project.slug}>
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
                                        <Typography sx={{ color: "secondary.main", marginBottom: 2, lineHeight: 1.7, whiteSpace: "pre-line" }}>
                                            {project.description}
                                        </Typography>

                                        {project.credentialsRequest && (
                                            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, mt: 1.5, mb: 2 }}>
                                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, color: "#63ff5b" }}>
                                                    <VpnKeyIcon sx={{ fontSize: 18 }} />
                                                    <Typography sx={{ fontSize: 16, fontWeight: 700, color: "primary.main" }}>
                                                        Acceso Demo:
                                                    </Typography>
                                                </Box>
                                                <Typography sx={{ color: "secondary.main", fontSize: 14, lineHeight: 1.6, fontStyle: "italic" }}>
                                                    Demo disponible bajo solicitud. Por favor, solicita las credenciales de acceso para explorar el sistema.
                                                </Typography>
                                            </Box>
                                        )}

                                        <Box sx={{ mt: "auto", display: "flex", flexDirection: "column", gap: 2 }}>
                                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                                                {project.tags.map((tag) => (
                                                    <Box key={tag} sx={{ borderRadius: 10, color: "#63ff5b", fontSize: 12, fontWeight: 700, paddingX: 1.5, paddingY: 0.75, backgroundColor: "rgba(57, 255, 20, 0.12)" }}>
                                                        {tag}
                                                    </Box>
                                                ))}
                                            </Box>
                                            <Typography sx={{ color: "#63ff5b", fontSize: 14, fontWeight: 700 }}>
                                                {project.metric}
                                            </Typography>
                                            {project.hasDetailPage !== false ? (
                                                <Box
                                                    component={Link}
                                                    href={`/proyectos/${project.slug}`}
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        gap: 1,
                                                        width: "100%",
                                                        py: 1.25,
                                                        borderRadius: 10,
                                                        textDecoration: "none",
                                                        color: "#63ff5b",
                                                        border: "1px solid rgba(99, 255, 91, 0.35)",
                                                        backgroundColor: "rgba(57, 255, 20, 0.06)",
                                                        fontWeight: 700,
                                                        fontSize: 14,
                                                        transition: "color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease",
                                                        "&:hover": {
                                                            color: "background.default",
                                                            backgroundColor: "#63ff5b",
                                                            borderColor: "#63ff5b",
                                                            transform: "translateY(-2px)",
                                                        },
                                                        "& svg": {
                                                            transition: "transform 0.2s ease",
                                                        },
                                                        "&:hover svg": {
                                                            transform: "translateX(3px)",
                                                        },
                                                    }}
                                                >
                                                    Ver más
                                                    <ArrowForwardIcon fontSize="small" />
                                                </Box>
                                            ) : project.comingSoon ? (
                                                <Tooltip title="Página de detalle disponible próximamente" placement="top" arrow slotProps={tooltipStyles}>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            gap: 1,
                                                            width: "100%",
                                                            py: 1.25,
                                                            borderRadius: 10,
                                                            color: "rgba(255, 255, 255, 0.3)",
                                                            border: "1px solid rgba(255, 255, 255, 0.08)",
                                                            backgroundColor: "rgba(255, 255, 255, 0.03)",
                                                            fontWeight: 700,
                                                            fontSize: 14,
                                                            cursor: "not-allowed",
                                                        }}
                                                    >
                                                        Próximamente
                                                    </Box>
                                                </Tooltip>
                                            ) : null}
                                        </Box>
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