"use client";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const footerLinks = [
    { label: "Sobre mí", href: "#about" },
    { label: "Habilidades", href: "#skills" },
    { label: "Proyectos", href: "#projects" },
    { label: "Contacto", href: "#contact" },
];

const socialLinks = [
    { label: "GitHub", href: "https://github.com/jesuspaz3000", icon: GitHubIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jesus-paz-0507bb1b9", icon: LinkedInIcon },
];

export default function Footer() {
    return (
        <Box component="footer" sx={{ display: "flex", justifyContent: "center", px: 2 }}>
            <Box
                sx={{
                    width: "1440px",
                    maxWidth: "100%",
                    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    pt: 5,
                    position: "relative",
                }}
            >
                <Box sx={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr 1fr" }, gap: 4, pb: 4 }}>
                    <Box>
                        <Typography sx={{ fontSize: 30, fontWeight: 800, mb: 1 }}>
                            Jesús Miguel Paz Llave
                        </Typography>
                        <Typography sx={{ color: "secondary.main", maxWidth: 420, lineHeight: 1.8 }}>
                            Desarrollador Web Full Stack enfocado en interfaces responsivas, backend con Spring Boot y código limpio, mantenible y escalable.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 800, mb: 2 }}>
                            Navegación
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 1.2 }}>
                            {footerLinks.map((link) => (
                                <Box
                                    key={link.label}
                                    component={Link}
                                    href={link.href}
                                    sx={{
                                        color: "secondary.main",
                                        textDecoration: "none",
                                        transition: "color 0.2s ease, transform 0.2s ease",
                                        "&:hover": {
                                            color: "#63ff5b",
                                            transform: "translateX(4px)",
                                        },
                                    }}
                                >
                                    {link.label}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 800, mb: 2 }}>
                            Redes
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1.5 }}>
                            {socialLinks.map(({ label, href, icon: Icon }) => (
                                <Box
                                    key={label}
                                    component="a"
                                    href={href}
                                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                                    rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                                    aria-label={label}
                                    sx={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: "50%",
                                        display: "grid",
                                        placeItems: "center",
                                        color: "primary.main",
                                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                                        border: "1px solid rgba(255, 255, 255, 0.1)",
                                        transition: "color 0.2s ease, border-color 0.2s ease, transform 0.2s ease",
                                        "&:hover": {
                                            color: "#63ff5b",
                                            borderColor: "rgba(99, 255, 91, 0.45)",
                                            transform: "translateY(-3px)",
                                        },
                                    }}
                                >
                                    <Icon fontSize="small" />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 1,
                        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                        py: 2.5,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 2,
                        flexDirection: { xs: "column", sm: "row" },
                    }}
                >
                    <Typography sx={{ color: "secondary.main", fontSize: 14 }}>
                        © {new Date().getFullYear()} Jesús Miguel Paz Llave. Todos los derechos reservados.
                    </Typography>
                    <Box
                        component="button"
                        type="button"
                        aria-label="Volver arriba"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        sx={{
                            width: 42,
                            height: 42,
                            p: 0,
                            border: 0,
                            borderRadius: "50%",
                            display: "grid",
                            placeItems: "center",
                            color: "background.default",
                            backgroundColor: "#63ff5b",
                            cursor: "pointer",
                            boxShadow: "0 16px 36px rgba(57, 255, 20, 0.18)",
                            transition: "transform 0.2s ease, background-color 0.2s ease",
                            "&:hover": {
                                backgroundColor: "#7dff76",
                                transform: "translateY(-4px)",
                            },
                        }}
                    >
                        <ArrowUpwardIcon fontSize="small" />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}