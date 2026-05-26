"use client"

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import { Box, Typography } from "@mui/material";
import { useRef } from "react";
import { A11y, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Emily Rodriguez",
        role: "Fundadora, StartupHub",
        quote: "Transformó nuestra visión en una interfaz clara, moderna y fácil de usar. El proyecto se entregó a tiempo y la comunicación fue excelente.",
        metric: "100%",
        metricLabel: "Entrega a tiempo",
        image: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(80,80,80,0.45)), url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80')",
    },
    {
        name: "Marcus Chen",
        role: "Líder de Producto, Nova Labs",
        quote: "La landing se sintió pulida desde el primer día. Mejoró el rendimiento, la estructura quedó limpia y el equipo pudo iterar sin fricción.",
        metric: "+42%",
        metricLabel: "Más conversiones",
        image: "linear-gradient(135deg, rgba(255,255,255,0.75), rgba(20,20,20,0.55)), url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80')",
    },
    {
        name: "Sofia Martinez",
        role: "Directora de Diseño, PixelCraft",
        quote: "Convirtió nuestro sistema de diseño en componentes responsivos con mucha atención al detalle. La experiencia final se veía sólida en todos los dispositivos.",
        metric: "98%",
        metricLabel: "Satisfacción",
        image: "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(25,25,25,0.55)), url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80')",
    },
    {
        name: "Daniel Foster",
        role: "CTO, CloudSprint",
        quote: "La revisión de código y las mejoras frontend nos ayudaron a reducir errores antes del lanzamiento. Explicaciones claras y buenas decisiones técnicas.",
        metric: "-35%",
        metricLabel: "Menos bugs UI",
        image: "linear-gradient(135deg, rgba(255,255,255,0.75), rgba(20,20,20,0.6)), url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80')",
    },
];

export default function Testimonials() {
    const swiperRef = useRef<{ slidePrev: () => void; slideNext: () => void } | null>(null);

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", px: 2, py: { xs: 7, md: 8 }, overflow: "hidden" }}>
            <Box sx={{ width: "1440px", maxWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginBottom: 5, textAlign: "center" }}>
                <Box sx={{ borderRadius: 10, paddingX: 2, paddingY: 1, textAlign: "center", color: "#63ff5b", backgroundColor: "rgba(57, 255, 20, 0.12)", border: "1px solid rgba(57, 255, 20, 0.22)", fontSize: 13, letterSpacing: 1 }}>
                    Testimonios
                </Box>
                <Typography sx={{ fontSize: { xs: 38, md: 64 }, lineHeight: 1.05, mt: 2, maxWidth: 720 }}>
                    Confianza de equipos que buscan avanzar
                </Typography>
                <Typography sx={{ fontSize: { xs: 16, md: 20 }, color: "secondary.main", maxWidth: 680, mt: 2 }}>
                    Opiniones de clientes sobre soluciones digitales cuidadas, funcionales y orientadas a resultados.
                </Typography>
            </Box>
            <Box
                sx={{
                    width: "1440px",
                    maxWidth: "100%",
                    px: { xs: 0, md: 5 },
                    position: "relative",
                    "& .swiper": {
                        maxWidth: 1080,
                        overflow: "hidden",
                    },
                    "& .testimonials-nav-button": {
                        position: "absolute",
                        top: "50%",
                        zIndex: 5,
                        width: 36,
                        height: 36,
                        p: 0,
                        borderRadius: "50%",
                        border: "1px solid rgba(255, 255, 255, 0.16)",
                        color: "primary.main",
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                        backdropFilter: "blur(10px)",
                        cursor: "pointer",
                        display: "grid",
                        placeItems: "center",
                        transform: "translateY(-50%)",
                        transition: "color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease",
                        "& svg": {
                            width: 16,
                            height: 16,
                        },
                    },
                    "& .testimonials-nav-button:hover": {
                        color: "#63ff5b",
                        borderColor: "rgba(99, 255, 91, 0.45)",
                        backgroundColor: "rgba(57, 255, 20, 0.1)",
                    },
                    "& .testimonials-button-prev": {
                        left: { xs: 8, md: 18 },
                    },
                    "& .testimonials-button-next": {
                        right: { xs: 8, md: 18 },
                    },
                    "& .swiper-pagination-bullet": {
                        width: 8,
                        height: 8,
                        backgroundColor: "rgba(255, 255, 255, 0.55)",
                        opacity: 1,
                    },
                    "& .swiper-pagination-bullet-active": {
                        width: 28,
                        borderRadius: 10,
                        backgroundColor: "#63ff5b",
                    },
                }}
            >
                <Swiper
                    modules={[Pagination, A11y]}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    spaceBetween={0}
                    loop
                    style={{ paddingBottom: 58 }}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.name}>
                            <Box
                                sx={{
                                    maxWidth: 980,
                                    mx: "auto",
                                    display: "grid",
                                    gridTemplateColumns: { xs: "1fr", md: "320px 1fr" },
                                    gap: { xs: 3, md: 4 },
                                    alignItems: "center",
                                    borderRadius: 5,
                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                    background: "radial-gradient(circle at 52% 50%, rgba(57, 255, 20, 0.16), transparent 34%), rgba(255, 255, 255, 0.04)",
                                    boxShadow: "0 30px 90px rgba(0, 0, 0, 0.36)",
                                    p: { xs: 2, md: 4 },
                                    position: "relative",
                                    overflow: "hidden",
                                    "&:before": {
                                        content: '""',
                                        position: "absolute",
                                        inset: 0,
                                        backgroundImage:
                                            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
                                        backgroundSize: "32px 32px",
                                        maskImage: "linear-gradient(90deg, transparent, black 18%, black 82%, transparent)",
                                        pointerEvents: "none",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        minHeight: { xs: 260, md: 300 },
                                        borderRadius: 3,
                                        background: testimonial.image,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        filter: "grayscale(1)",
                                        position: "relative",
                                        overflow: "hidden",
                                        zIndex: 1,
                                    }}
                                >
                                    <Box sx={{ position: "absolute", left: 18, bottom: 18, borderRadius: 3, backgroundColor: "rgba(0, 0, 0, 0.58)", backdropFilter: "blur(10px)", px: 2, py: 1.5 }}>
                                        <Typography sx={{ color: "#63ff5b", fontSize: 22, fontWeight: 800, lineHeight: 1 }}>
                                            {testimonial.metric}
                                        </Typography>
                                        <Typography sx={{ color: "primary.main", fontSize: 12, mt: 0.5 }}>
                                            {testimonial.metricLabel}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ position: "relative", zIndex: 1 }}>
                                    <FormatQuoteIcon sx={{ color: "#63ff5b", fontSize: 38, mb: 1 }} />
                                    <Typography sx={{ color: "primary.main", fontSize: { xs: 20, md: 26 }, lineHeight: 1.55, maxWidth: 640, mb: 4 }}>
                                        &quot;{testimonial.quote}&quot;
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: { xs: "flex-start", sm: "center" }, flexDirection: { xs: "column", sm: "row" }, gap: 2 }}>
                                        <Box>
                                            <Typography sx={{ fontWeight: 700, fontSize: 16 }}>
                                                {testimonial.name}
                                            </Typography>
                                            <Typography sx={{ color: "secondary.main", fontSize: 14, mt: 0.5 }}>
                                                {testimonial.role}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", gap: 0.5, color: "#63ff5b" }} aria-label="5 star rating">
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <StarIcon key={index} sx={{ fontSize: 18 }} />
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Box component="button" type="button" className="testimonials-nav-button testimonials-button-prev" aria-label="Testimonio anterior" onClick={() => swiperRef.current?.slidePrev()}>
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M15 5L8 12L15 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Box>
                <Box component="button" type="button" className="testimonials-nav-button testimonials-button-next" aria-label="Siguiente testimonio" onClick={() => swiperRef.current?.slideNext()}>
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Box>
            </Box>
        </Box>
    )
}