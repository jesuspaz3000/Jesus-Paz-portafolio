"use client"

import CodeIcon from "@mui/icons-material/Code";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Typography, IconButton } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Sobre mí", href: "/#about" },
    { label: "Habilidades", href: "/#skills" },
    { label: "Proyectos", href: "/#projects" },
    { label: "Servicios", href: "/#services" },
    { label: "Contacto", href: "/#contact" },
];

const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.25,
            ease: "easeInOut" as const,
            when: "beforeChildren" as const,
            staggerChildren: 0.06,
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.2,
            ease: "easeInOut" as const
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.25,
            ease: "easeOut" as const
        }
    }
};

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Box className="mui-fixed" sx={{ px: 2, py: 2, display: "flex", justifyContent: "center", position: "fixed", width: "100%", top: 0, left: 0, zIndex: 1000, backgroundColor: "rgba(0, 0, 0, 0.62)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 1440, width: "100%", gap: 2 }}>
                    <Link href="/"style={{ textDecoration: "none" }}>
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
                                transition: "color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease",
                                "&:hover": {
                                    color: "background.default",
                                    backgroundColor: "#63ff5b",
                                    borderColor: "#63ff5b"
                                }
                            }}
                        >
                            Ver CV
                        </Button>
                        <Button href="/#contact" sx={{ display: { xs: "none", sm: "inline-flex" }, borderRadius: 10, px: { xs: 2, md: 3 }, py: 1, color: "background.default", backgroundColor: "#f4fff1", fontWeight: 700, textTransform: "none", "&:hover": { backgroundColor: "#63ff5b" } }}>
                            Contáctame
                        </Button>
                        <IconButton
                            onClick={() => setIsOpen(true)}
                            sx={{
                                display: { xs: "flex", md: "none" },
                                color: "#63ff5b",
                                border: "1px solid rgba(99, 255, 91, 0.25)",
                                backgroundColor: "rgba(57, 255, 20, 0.04)",
                                p: 1,
                                "&:hover": {
                                    backgroundColor: "rgba(57, 255, 20, 0.1)",
                                    borderColor: "#63ff5b",
                                }
                            }}
                            aria-label="abrir menú"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100vh",
                            backgroundColor: "rgba(10, 10, 10, 0.98)",
                            backdropFilter: "blur(20px)",
                            zIndex: 2000,
                            display: "flex",
                            flexDirection: "column",
                            padding: "24px 16px",
                        }}
                    >
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", mb: 6 }}>
                            <Link href="/"onClick={() => setIsOpen(false)} style={{ textDecoration: "none" }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#63ff5b" }}>
                                    <CodeIcon sx={{ fontSize: 22 }} />
                                    <Typography sx={{ fontSize: 22, fontWeight: 800 }}>
                                        Jesús Paz
                                    </Typography>
                                </Box>
                            </Link>
                            <IconButton
                                onClick={() => setIsOpen(false)}
                                sx={{
                                    color: "#63ff5b",
                                    border: "1px solid rgba(99, 255, 91, 0.25)",
                                    backgroundColor: "rgba(57, 255, 20, 0.04)",
                                    p: 1,
                                    "&:hover": {
                                        backgroundColor: "rgba(57, 255, 20, 0.1)",
                                        borderColor: "#63ff5b",
                                    }
                                }}
                                aria-label="cerrar menú"
                            >
                                <CloseIcon />
                            </IconButton>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, my: "auto" }}>
                            {navLinks.map((link) => (
                                <motion.div
                                    key={link.label}
                                    variants={itemVariants}
                                    style={{ willChange: "transform" }}
                                >
                                    <Link href={link.href} onClick={() => setIsOpen(false)} style={{ textDecoration: "none" }}>
                                        <Typography
                                            sx={{
                                                color: "secondary.main",
                                                fontSize: 24,
                                                fontWeight: 600,
                                                transition: "color 0.2s ease",
                                                "&:hover": {
                                                    color: "#63ff5b",
                                                },
                                            }}
                                        >
                                            {link.label}
                                        </Typography>
                                    </Link>
                                </motion.div>
                            ))}
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: "auto", width: "100%", px: 2, pb: 4 }}>
                            <motion.div variants={itemVariants} style={{ willChange: "transform" }}>
                                <Button
                                    href="/curriculum/cv-jesus-paz.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsOpen(false)}
                                    sx={{
                                        borderRadius: 10,
                                        width: "100%",
                                        py: 1.5,
                                        color: "#63ff5b",
                                        border: "1px solid rgba(99, 255, 91, 0.45)",
                                        backgroundColor: "rgba(57, 255, 20, 0.06)",
                                        fontWeight: 700,
                                        fontSize: 16,
                                        textTransform: "none",
                                        transition: "color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease",
                                        "&:hover": {
                                            color: "background.default",
                                            backgroundColor: "#63ff5b",
                                            borderColor: "#63ff5b"
                                        }
                                    }}
                                >
                                    Ver CV
                                </Button>
                            </motion.div>
                            <motion.div variants={itemVariants} style={{ willChange: "transform" }}>
                                <Button
                                    href="/#contact"
                                    onClick={() => setIsOpen(false)}
                                    sx={{
                                        borderRadius: 10,
                                        width: "100%",
                                        py: 1.5,
                                        color: "background.default",
                                        backgroundColor: "#f4fff1",
                                        fontWeight: 700,
                                        fontSize: 16,
                                        textTransform: "none",
                                        "&:hover": {
                                            backgroundColor: "#63ff5b"
                                        }
                                    }}
                                >
                                    Contáctame
                                </Button>
                            </motion.div>
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}