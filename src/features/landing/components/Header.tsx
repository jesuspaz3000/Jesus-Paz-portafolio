import CodeIcon from "@mui/icons-material/Code";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const navLinks = [
    { label: "Sobre mí", href: "#about" },
    { label: "Habilidades", href: "#skills" },
    { label: "Proyectos", href: "#projects" },
    { label: "Servicios", href: "#services" },
    { label: "Contacto", href: "#contact" },
];

export default function Header() {
    return (
        <Box sx={{ px: 2, py: 2, display: "flex", justifyContent: "center", position: "fixed", width: "100%", top: 0, left: 0, zIndex: 1000, backgroundColor: "rgba(0, 0, 0, 0.62)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 1440, width: "100%", gap: 2 }}>
                <Link href="#" style={{ textDecoration: "none" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#63ff5b" }}>
                        <CodeIcon sx={{ fontSize: 22 }} />
                        <Typography sx={{ fontSize: { xs: 22, md: 26 }, fontWeight: 800 }}>
                            Jesús Paz
                        </Typography>
                    </Box>
                </Link>
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4, alignItems: "center", justifyContent: "center" }}>
                    {navLinks.map((link) => (
                        <Link key={link.label} href={link.href} style={{ textDecoration: "none" }}>
                            <Box
                                sx={{
                                    color: "secondary.main",
                                    fontSize: 15,
                                    fontWeight: 500,
                                    transition: "color 0.2s ease",
                                    "&:hover": {
                                        color: "#63ff5b",
                                    },
                                }}
                            >
                                {link.label}
                            </Box>
                        </Link>
                    ))}
                </Box>
                <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                    <Button
                        href="/curriculum/cv-jesus-paz.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            display: { xs: "none", sm: "inline-flex" },
                            borderRadius: 10,
                            px: { xs: 2, md: 2.5 },
                            py: 1,
                            color: "#63ff5b",
                            border: "1px solid rgba(99, 255, 91, 0.35)",
                            backgroundColor: "rgba(57, 255, 20, 0.04)",
                            fontWeight: 700,
                            textTransform: "none",
                            transition: "all 0.2s ease",
                            "&:hover": {
                                color: "background.default",
                                backgroundColor: "#63ff5b",
                                borderColor: "#63ff5b"
                            }
                        }}
                    >
                        Ver CV
                    </Button>
                    <Button href="#contact" sx={{ borderRadius: 10, px: { xs: 2, md: 3 }, py: 1, color: "background.default", backgroundColor: "#f4fff1", fontWeight: 700, textTransform: "none", "&:hover": { backgroundColor: "#63ff5b" } }}>
                        Contáctame
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}