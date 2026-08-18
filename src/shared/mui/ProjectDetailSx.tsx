import type { SxProps, Theme } from "@mui/material/styles";

export const backLinkStyles: SxProps<Theme> = {
    display: "inline-flex",
    alignItems: "center",
    gap: 1,
    color: "secondary.main",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 600,
    transition: "color 0.2s ease, transform 0.2s ease",
    "&:hover": {
        color: "#63ff5b",
    },
    "&:hover .back-arrow": {
        transform: "translateX(-3px)",
    },
    "& .back-arrow": {
        transition: "transform 0.2s ease",
        display: "flex",
    },
};

export const heroLogoStyles = (gradient: string, noGrid?: boolean): SxProps<Theme> => ({
    position: "relative",
    height: { xs: 220, md: 320 },
    borderRadius: 4,
    background: gradient,
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 30px 90px rgba(0, 0, 0, 0.42)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    "&:before": {
        content: '""',
        position: "absolute",
        inset: 0,
        backgroundImage: noGrid
            ? "none"
            : "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        pointerEvents: "none",
    },
});

export const sectionCardStyles: SxProps<Theme> = {
    borderRadius: 4,
    border: "1px solid rgba(255, 255, 255, 0.08)",
    background: "rgba(255, 255, 255, 0.06)",
    boxShadow: "0 24px 60px rgba(0, 0, 0, 0.32)",
    p: { xs: 3, md: 4 },
    position: "relative",
    overflow: "hidden",
};

export const highlightItemStyles: SxProps<Theme> = {
    display: "flex",
    alignItems: "flex-start",
    gap: 1.5,
    p: { xs: 2, md: 2.5 },
    borderRadius: 3,
    border: "1px solid rgba(255, 255, 255, 0.08)",
    background: "rgba(255, 255, 255, 0.04)",
    transition: "transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease",
    height: "100%",
    "&:hover": {
        transform: "translateY(-4px)",
        borderColor: "rgba(99, 255, 91, 0.38)",
        background: "rgba(57, 255, 20, 0.05)",
    },
};

export const ctaPrimaryStyles: SxProps<Theme> = {
    display: "inline-flex",
    alignItems: "center",
    gap: 1,
    borderRadius: 10,
    px: 3,
    py: 1.25,
    color: "background.default",
    backgroundColor: "#63ff5b",
    fontWeight: 700,
    fontSize: 15,
    textTransform: "none",
    textDecoration: "none",
    transition: "all 0.2s ease",
    "&:hover": {
        backgroundColor: "#7dff76",
        boxShadow: "0 0 20px rgba(99, 255, 91, 0.4)",
        transform: "translateY(-2px)",
    },
};

export const ctaSecondaryStyles: SxProps<Theme> = {
    display: "inline-flex",
    alignItems: "center",
    gap: 1,
    borderRadius: 10,
    px: 3,
    py: 1.25,
    color: "#63ff5b",
    border: "1px solid rgba(99, 255, 91, 0.4)",
    backgroundColor: "rgba(57, 255, 20, 0.06)",
    fontWeight: 700,
    fontSize: 15,
    textTransform: "none",
    textDecoration: "none",
    transition: "all 0.2s ease",
    "&:hover": {
        color: "background.default",
        backgroundColor: "#63ff5b",
        borderColor: "#63ff5b",
        transform: "translateY(-2px)",
    },
};

export const videoFrameStyles: SxProps<Theme> = {
    position: "relative",
    width: "100%",
    aspectRatio: "16 / 9",
    borderRadius: 3,
    overflow: "hidden",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    background: "#000",
    "& iframe": {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        border: 0,
    },
};

export const placeholderStyles: SxProps<Theme> = {
    position: "relative",
    width: "100%",
    aspectRatio: "16 / 9",
    borderRadius: 3,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 1.5,
    border: "1.5px dashed rgba(255, 255, 255, 0.16)",
    background: "rgba(255, 255, 255, 0.03)",
    color: "secondary.main",
    textAlign: "center",
    px: 3,
    overflow: "hidden",
    "&:before": {
        content: '""',
        position: "absolute",
        inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        pointerEvents: "none",
    },
};

export const techBadgeStyles: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 1,
    width: 96,
    p: 1.5,
    borderRadius: 3,
    border: "1px solid rgba(255, 255, 255, 0.08)",
    background: "rgba(255, 255, 255, 0.04)",
    transition: "transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease",
    "&:hover": {
        transform: "translateY(-4px)",
        borderColor: "rgba(99, 255, 91, 0.4)",
        background: "rgba(57, 255, 20, 0.05)",
    },
};

export const techIconCircleStyles: SxProps<Theme> = {
    width: 44,
    height: 44,
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    backgroundColor: "rgba(57, 255, 20, 0.1)",
    color: "#63ff5b",
    "& svg": {
        width: 22,
        height: 22,
    },
};

export const placeholderCardStyles: SxProps<Theme> = {
    position: "relative",
    aspectRatio: "4 / 3",
    borderRadius: 3,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    border: "1.5px dashed rgba(255, 255, 255, 0.16)",
    background: "rgba(255, 255, 255, 0.03)",
    color: "secondary.main",
    textAlign: "center",
    px: 2,
    overflow: "hidden",
    transition: "border-color 0.25s ease, background-color 0.25s ease",
    "&:hover": {
        borderColor: "rgba(99, 255, 91, 0.32)",
        background: "rgba(57, 255, 20, 0.04)",
    },
    "&:before": {
        content: '""',
        position: "absolute",
        inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        pointerEvents: "none",
    },
};

export const screenshotSwiperStyles: SxProps<Theme> = {
    width: "100%",
    position: "relative",
    "& .swiper": {
        overflow: "visible !important",
        paddingBottom: "52px",
    },
    "& .swiper-wrapper": {
        overflow: "visible !important",
    },
    "& .swiper-slide": {
        height: "auto",
        borderRadius: 3,
        overflow: "hidden",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        aspectRatio: "16 / 9",
        position: "relative",
        background: "rgba(255, 255, 255, 0.04)",
    },
    "& .swiper-button-prev, & .swiper-button-next": {
        width: 42,
        height: 42,
        borderRadius: "50%",
        color: "primary.main",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        border: "1px solid rgba(255, 255, 255, 0.14)",
        backdropFilter: "blur(10px)",
        transition: "all 0.25s ease",
        display: { xs: "none", md: "flex" },
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        "&::after": { display: "none" },
    },
    "& .swiper-button-prev": { left: { md: "-10px", lg: "-28px" } },
    "& .swiper-button-next": { right: { md: "-10px", lg: "-28px" } },
    "& .swiper-button-prev svg, & .swiper-button-next svg": {
        width: 18,
        height: 18,
    },
    "& .swiper-button-prev:hover, & .swiper-button-next:hover": {
        color: "#63ff5b",
        borderColor: "rgba(99, 255, 91, 0.45)",
        backgroundColor: "rgba(57, 255, 20, 0.06)",
        boxShadow: "0 0 16px rgba(99, 255, 91, 0.25)",
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
};
