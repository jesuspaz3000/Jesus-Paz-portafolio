"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import LockIcon from "@mui/icons-material/Lock";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import PhotoCameraBackOutlinedIcon from "@mui/icons-material/PhotoCameraBackOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import BuildCircleRoundedIcon from "@mui/icons-material/BuildCircleRounded";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import OpenInFullRoundedIcon from "@mui/icons-material/OpenInFullRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Box, Typography, Modal, IconButton, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "./Header";
import Footer from "./Footer";
import SectionChip from "@/shared/components/SectionChip";
import type { Project, ProjectScreenshot } from "@/features/landing/data/projects";
import {
    DockerIcon,
    FigmaIcon,
    GitIcon,
    GithubIcon,
    JavaIcon,
    NextJsIcon,
    PostgresIcon,
    PostmanIcon,
    SpringBootIcon,
    MaterialUIIcon,
    JavaScriptIcon,
    VueJSIcon,
    NginxIcon,
    RedisIcon,
    ReactIcon,
    TailwindIcon,
} from "@/assets/icons";
import {
    backLinkStyles,
    heroLogoStyles,
    sectionCardStyles,
    highlightItemStyles,
    ctaPrimaryStyles,
    ctaSecondaryStyles,
    videoFrameStyles,
    placeholderStyles,
    placeholderCardStyles,
    screenshotSwiperStyles,
    techBadgeStyles,
    techIconCircleStyles,
} from "@/shared/mui/ProjectDetailSx";

const TECH_ICON_MAP: Record<string, { icon: typeof ReactIcon; label: string }> = {
    react: { icon: ReactIcon, label: "React" },
    nextjs: { icon: NextJsIcon, label: "Next.js" },
    vuejs: { icon: VueJSIcon, label: "Vue.js" },
    javascript: { icon: JavaScriptIcon, label: "JavaScript" },
    tailwind: { icon: TailwindIcon, label: "Tailwind CSS" },
    mui: { icon: MaterialUIIcon, label: "Material UI" },
    java: { icon: JavaIcon, label: "Java" },
    springboot: { icon: SpringBootIcon, label: "Spring Boot" },
    postgres: { icon: PostgresIcon, label: "PostgreSQL" },
    redis: { icon: RedisIcon, label: "Redis" },
    docker: { icon: DockerIcon, label: "Docker" },
    nginx: { icon: NginxIcon, label: "Nginx" },
    git: { icon: GitIcon, label: "Git" },
    github: { icon: GithubIcon, label: "GitHub" },
    postman: { icon: PostmanIcon, label: "Postman" },
    figma: { icon: FigmaIcon, label: "Figma" },
};

interface ProjectDetailProps {
    project: Project;
}

const screenshotSuggestions = [
    { label: "Formularios", icon: DescriptionOutlinedIcon },
    { label: "Módulos en acción", icon: DashboardOutlinedIcon },
    { label: "Gráficas y reportes", icon: BarChartRoundedIcon },
];

function getYoutubeEmbedUrl(url: string): string | null {
    try {
        const parsed = new URL(url);
        if (parsed.hostname.includes("youtu.be")) {
            return `https://www.youtube.com/embed/${parsed.pathname.replace("/", "")}`;
        }
        if (parsed.pathname.startsWith("/embed/")) {
            return url;
        }
        const videoId = parsed.searchParams.get("v");
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return null;
    } catch {
        return null;
    }
}

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: "easeOut" as const },
    },
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
    const embedUrl = project.videoUrl ? getYoutubeEmbedUrl(project.videoUrl) : null;
    const hasScreenshots = Boolean(project.screenshots && project.screenshots.length > 0);
    const [lightboxShot, setLightboxShot] = useState<ProjectScreenshot | null>(null);

    return (
        <Box sx={{ background: "background.default", color: "primary.main", position: "relative", overflowX: "hidden", width: "100%", minHeight: "100vh" }}>
            <Header />

            <Box component="main" sx={{ position: "relative", px: 2, pt: { xs: 13, md: 12 }, pb: { xs: 8, md: 10 } }}>
                <Box sx={{ position: "absolute", width: { xs: 480, md: 720 }, height: { xs: 480, md: 720 }, borderRadius: "50%", background: "radial-gradient(circle, rgba(57, 255, 20, 0.1), transparent 68%)", right: { xs: -320, md: -160 }, top: { xs: 60, md: 20 }, pointerEvents: "none" }} />
                <Box sx={{ position: "absolute", width: { xs: 380, md: 560 }, height: { xs: 380, md: 560 }, borderRadius: "50%", background: "radial-gradient(circle, rgba(57, 255, 20, 0.08), transparent 68%)", left: { xs: -260, md: -120 }, bottom: { xs: 200, md: 240 }, pointerEvents: "none" }} />

                <Box sx={{ width: "1440px", maxWidth: "100%", mx: "auto", position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: { xs: 6, md: 8 } }}>
                    <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                        <Box component={Link} href="/#projects" sx={backLinkStyles}>
                            <ArrowBackRoundedIcon fontSize="small" className="back-arrow" />
                            Volver a proyectos
                        </Box>
                    </motion.div>

                    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" }, gap: { xs: 5, md: 7 }, alignItems: "center" }}>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <motion.div variants={fadeInUp} style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                                <SectionChip icon={<AutoAwesomeIcon />} label={project.category} />
                                {project.isPrivate && (
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, borderRadius: 10, px: 2, py: 1, backgroundColor: "rgba(239, 68, 68, 0.15)", border: "1px solid rgba(239, 68, 68, 0.3)", color: "#f87171", fontSize: 13, fontWeight: 700 }}>
                                        <LockIcon sx={{ fontSize: 16 }} />
                                        Proyecto privado
                                    </Box>
                                )}
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <Typography sx={{ fontSize: { xs: 32, md: 48 }, lineHeight: 1.08, fontWeight: 800, mb: 2.5 }}>
                                    {project.name}
                                </Typography>
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <Typography sx={{ fontSize: { xs: 16, md: 18 }, lineHeight: 1.8, color: "secondary.main", mb: 3 }}>
                                    {project.description}
                                </Typography>
                            </motion.div>

                            <motion.div variants={fadeInUp}>
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3.5 }}>
                                    {project.tags.map((tag) => (
                                        <Box key={tag} sx={{ borderRadius: 10, color: "#63ff5b", fontSize: 12, fontWeight: 700, px: 1.5, py: 0.75, backgroundColor: "rgba(57, 255, 20, 0.12)" }}>
                                            {tag}
                                        </Box>
                                    ))}
                                </Box>
                            </motion.div>

                            {project.credentialsRequest && (
                                <motion.div variants={fadeInUp}>
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, mb: 3 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.75, color: "#63ff5b" }}>
                                            <VpnKeyIcon sx={{ fontSize: 18 }} />
                                            <Typography sx={{ fontSize: 16, fontWeight: 700, color: "primary.main" }}>
                                                Acceso Demo:
                                            </Typography>
                                        </Box>
                                        <Typography sx={{ color: "secondary.main", fontSize: 14, lineHeight: 1.6, fontStyle: "italic" }}>
                                            Demo disponible bajo solicitud. Contáctame para obtener las credenciales de acceso.
                                        </Typography>
                                    </Box>
                                </motion.div>
                            )}

                            {!project.isPrivate && (project.demoUrl || project.githubUrl) && (
                                <motion.div variants={fadeInUp}>
                                    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                                        {project.demoUrl && (
                                            <Box component="a" href={project.demoUrl} target="_blank" rel="noopener noreferrer" sx={ctaPrimaryStyles}>
                                                <LaunchIcon fontSize="small" />
                                                Ver demo
                                            </Box>
                                        )}
                                        {project.githubUrl && (
                                            <Box component="a" href={project.githubUrl} target="_blank" rel="noopener noreferrer" sx={ctaSecondaryStyles}>
                                                <GitHubIcon fontSize="small" />
                                                Ver código
                                            </Box>
                                        )}
                                    </Box>
                                </motion.div>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.2 }}
                        >
                            <Box sx={heroLogoStyles(project.gradient, project.noGrid)}>
                                {project.logo && (
                                    <Box sx={{ position: "relative", zIndex: 1, width: project.logoFullSize ? "70%" : "100%", height: project.logoFullSize ? "70%" : 100, maxWidth: project.logoFullSize ? "70%" : 320 }}>
                                        <Image
                                            src={project.logo}
                                            alt={`Logo de ${project.name}`}
                                            fill
                                            sizes="(max-width: 768px) 90vw, 500px"
                                            style={{ objectFit: "contain" }}
                                        />
                                    </Box>
                                )}
                            </Box>
                        </motion.div>
                    </Box>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                        variants={fadeInUp}
                    >
                        <SectionChip icon={<RocketLaunchRoundedIcon />} label="Sobre el proyecto" sx={{ mb: 2.5 }} />
                        <Box sx={sectionCardStyles}>
                            {(project.longDescription ?? [project.description]).map((paragraph, index) => (
                                <Typography
                                    key={index}
                                    sx={{
                                        fontSize: { xs: 15, md: 16 },
                                        lineHeight: 1.85,
                                        color: "secondary.main",
                                        mb: index === (project.longDescription?.length ?? 1) - 1 ? 0 : 2.5,
                                    }}
                                >
                                    {paragraph}
                                </Typography>
                            ))}
                        </Box>
                    </motion.div>

                    {project.highlights && project.highlights.length > 0 && (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeInUp}>
                                <SectionChip icon={<AutoAwesomeIcon />} label="Aspectos destacados" sx={{ mb: 2.5 }} />
                            </motion.div>
                            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
                                {project.highlights.map((highlight) => (
                                    <motion.div key={highlight} variants={cardVariant} style={{ height: "100%" }}>
                                        <Box sx={highlightItemStyles}>
                                            <CheckCircleRoundedIcon sx={{ color: "#63ff5b", fontSize: 22, flexShrink: 0, mt: 0.25 }} />
                                            <Typography sx={{ fontSize: { xs: 14, md: 15 }, lineHeight: 1.7, color: "secondary.main" }}>
                                                {highlight}
                                            </Typography>
                                        </Box>
                                    </motion.div>
                                ))}
                            </Box>
                        </motion.div>
                    )}

                    {project.techStack && project.techStack.length > 0 && (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                            variants={staggerContainer}
                        >
                            <motion.div variants={fadeInUp}>
                                <SectionChip icon={<BuildCircleRoundedIcon />} label="Tecnologías utilizadas" sx={{ mb: 2.5 }} />
                            </motion.div>
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                                {project.techStack.map((key) => {
                                    const tech = TECH_ICON_MAP[key];
                                    if (!tech) return null;
                                    const Icon = tech.icon;
                                    return (
                                        <motion.div key={key} variants={cardVariant}>
                                            <Box sx={techBadgeStyles}>
                                                <Box sx={techIconCircleStyles}>
                                                    <Icon width={22} height={22} />
                                                </Box>
                                                <Typography sx={{ fontSize: 12, fontWeight: 600, textAlign: "center", color: "secondary.main" }}>
                                                    {tech.label}
                                                </Typography>
                                            </Box>
                                        </motion.div>
                                    );
                                })}
                            </Box>
                        </motion.div>
                    )}

                    {project.type === "full-stack" && (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                            variants={fadeInUp}
                        >
                            <SectionChip icon={<AccountTreeRoundedIcon />} label="Arquitectura y modelo de datos" sx={{ mb: 2.5 }} />
                            {project.architectureImage ? (
                                <Box sx={{ position: "relative", width: "100%", minHeight: 320, borderRadius: 3, overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.08)", background: "rgba(255, 255, 255, 0.04)" }}>
                                    <Image
                                        src={project.architectureImage.src}
                                        alt={project.architectureImage.alt}
                                        width={1600}
                                        height={1000}
                                        priority
                                        style={{ width: "100%", height: "auto", display: "block" }}
                                    />
                                    {project.architectureImage.caption && (
                                        <Box sx={{ p: 2, borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                                            <Typography sx={{ fontSize: 13, color: "secondary.main" }}>
                                                {project.architectureImage.caption}
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>
                            ) : (
                                <Box sx={placeholderStyles}>
                                    <AccountTreeRoundedIcon sx={{ fontSize: 40, color: "rgba(99, 255, 91, 0.5)" }} />
                                    <Typography sx={{ fontWeight: 700, color: "primary.main" }}>
                                        Diagrama de arquitectura próximamente
                                    </Typography>
                                    <Typography sx={{ fontSize: 13, color: "secondary.main", maxWidth: 420 }}>
                                        Espacio reservado para el esquema de base de datos y/o diagrama de arquitectura del sistema.
                                    </Typography>
                                </Box>
                            )}
                        </motion.div>
                    )}

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                        variants={fadeInUp}
                    >
                        <SectionChip icon={<PlayCircleOutlineRoundedIcon />} label="Video demo" sx={{ mb: 2.5 }} />
                        {embedUrl ? (
                            <Box sx={videoFrameStyles}>
                                <iframe
                                    src={embedUrl}
                                    title={`Video demo de ${project.name}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </Box>
                        ) : (
                            <Box sx={placeholderStyles}>
                                <PlayCircleOutlineRoundedIcon sx={{ fontSize: 40, color: "rgba(99, 255, 91, 0.5)" }} />
                                <Typography sx={{ fontWeight: 700, color: "primary.main" }}>
                                    Video disponible próximamente en YouTube
                                </Typography>
                                <Typography sx={{ fontSize: 13, color: "secondary.main", maxWidth: 380 }}>
                                    Estoy preparando un recorrido en video mostrando el sistema en funcionamiento.
                                </Typography>
                            </Box>
                        )}
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                        variants={fadeInUp}
                    >
                        <SectionChip icon={<PhotoCameraBackOutlinedIcon />} label="Capturas del proyecto" sx={{ mb: 2.5 }} />
                        {hasScreenshots ? (
                            <Box sx={screenshotSwiperStyles}>
                                <Swiper
                                    modules={[Navigation, Pagination, A11y]}
                                    navigation
                                    pagination={{ clickable: true }}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    breakpoints={{
                                        768: { slidesPerView: 2, spaceBetween: 20 },
                                    }}
                                >
                                    {project.screenshots!.map((shot, index) => (
                                        <SwiperSlide key={shot.src + index}>
                                            <Image
                                                src={shot.src}
                                                alt={shot.alt}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                style={{ objectFit: "cover" }}
                                            />
                                            <Tooltip title="Ver imagen completa" placement="top" arrow>
                                                <IconButton
                                                    onClick={() => setLightboxShot(shot)}
                                                    aria-label={`Ampliar: ${shot.alt}`}
                                                    size="small"
                                                    sx={{
                                                        position: "absolute",
                                                        top: 10,
                                                        right: 10,
                                                        zIndex: 2,
                                                        color: "primary.main",
                                                        backgroundColor: "rgba(0, 0, 0, 0.55)",
                                                        border: "1px solid rgba(255, 255, 255, 0.14)",
                                                        backdropFilter: "blur(6px)",
                                                        transition: "all 0.2s ease",
                                                        "&:hover": {
                                                            color: "background.default",
                                                            backgroundColor: "#63ff5b",
                                                            borderColor: "#63ff5b",
                                                        },
                                                    }}
                                                >
                                                    <OpenInFullRoundedIcon fontSize="small" />
                                                </IconButton>
                                            </Tooltip>
                                            {shot.caption && (
                                                <Box sx={{ position: "absolute", left: 0, right: 0, bottom: 0, p: 2, background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.85))" }}>
                                                    <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
                                                        {shot.caption}
                                                    </Typography>
                                                </Box>
                                            )}
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </Box>
                        ) : (
                            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }, gap: 2 }}>
                                {screenshotSuggestions.map(({ label, icon: Icon }) => (
                                    <Box key={label} sx={placeholderCardStyles}>
                                        <Icon sx={{ fontSize: 30, color: "rgba(99, 255, 91, 0.5)", position: "relative", zIndex: 1 }} />
                                        <Typography sx={{ fontSize: 13, fontWeight: 700, color: "primary.main", position: "relative", zIndex: 1 }}>
                                            {label}
                                        </Typography>
                                        <Typography sx={{ fontSize: 12, color: "secondary.main", position: "relative", zIndex: 1 }}>
                                            Próximamente
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        )}
                    </motion.div>

                    <Modal
                        open={Boolean(lightboxShot)}
                        onClose={() => setLightboxShot(null)}
                        closeAfterTransition
                        disableScrollLock
                        slotProps={{
                            backdrop: {
                                sx: { backgroundColor: "rgba(5, 5, 8, 0.9)", backdropFilter: "blur(6px)" },
                            },
                        }}
                        sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: { xs: 2, md: 4 } }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                outline: "none",
                                width: "100%",
                                maxWidth: 1200,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 2,
                            }}
                        >
                            <IconButton
                                onClick={() => setLightboxShot(null)}
                                aria-label="Cerrar"
                                sx={{
                                    position: "absolute",
                                    top: -48,
                                    right: 0,
                                    color: "primary.main",
                                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                                    border: "1px solid rgba(255, 255, 255, 0.14)",
                                    "&:hover": { color: "#63ff5b", borderColor: "rgba(99, 255, 91, 0.45)" },
                                }}
                            >
                                <CloseRoundedIcon />
                            </IconButton>
                            {lightboxShot && (
                                <Box sx={{ position: "relative", width: "100%", height: { xs: "60vh", md: "80vh" } }}>
                                    <Image
                                        src={lightboxShot.src}
                                        alt={lightboxShot.alt}
                                        fill
                                        sizes="95vw"
                                        style={{ objectFit: "contain" }}
                                        priority
                                    />
                                </Box>
                            )}
                            {lightboxShot?.caption && (
                                <Typography sx={{ color: "secondary.main", fontSize: 14, textAlign: "center" }}>
                                    {lightboxShot.caption}
                                </Typography>
                            )}
                        </Box>
                    </Modal>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-20px" }}
                        variants={fadeInUp}
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        <Box component={Link} href="/#projects" sx={{ ...ctaSecondaryStyles, mt: 2 }}>
                            Ver más proyectos
                            <ArrowForwardIcon fontSize="small" />
                        </Box>
                    </motion.div>
                </Box>
            </Box>

            <Footer />
        </Box>
    );
}
