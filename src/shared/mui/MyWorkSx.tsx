import type { SxProps, Theme } from "@mui/material/styles";

export const swiperContainerStyles: SxProps<Theme> = {
    width: "100%",
    paddingX: { xs: 0, md: 4 },
    position: "relative",
    zIndex: 1,
    "& .swiper": {
        overflow: "visible !important",
        paddingTop: "24px",
        paddingBottom: "80px",
        marginTop: "-24px",
        marginBottom: "-80px",
    },
    "& .swiper-wrapper": {
        overflow: "visible !important",
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
        "&::after": {
            display: "none",
        }
    },
    "& .swiper-button-prev": {
        left: { md: "-10px", lg: "-28px", xl: "-48px" },
    },
    "& .swiper-button-next": {
        right: { md: "-10px", lg: "-28px", xl: "-48px" },
    },
    "& .swiper-button-prev svg, & .swiper-button-next svg": {
        width: 18,
        height: 18,
    },
    "& .swiper-button-prev:hover": {
        transform: "translateX(-3px)",
        color: "#63ff5b",
        borderColor: "rgba(99, 255, 91, 0.45)",
        backgroundColor: "rgba(57, 255, 20, 0.06)",
        boxShadow: "0 0 16px rgba(99, 255, 91, 0.25)",
    },
    "& .swiper-button-next:hover": {
        transform: "translateX(3px)",
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
    "& .swiper-slide": {
        height: "auto",
        display: "flex",
        overflow: "visible !important",
        opacity: 0,
        transition: "opacity 0.3s ease",
        pointerEvents: "none",
    },
    "& .swiper-slide-visible": {
        opacity: 1,
        pointerEvents: "auto",
    },
};

export const projectCardStyles: SxProps<Theme> = {
    width: "100%",
    height: "100%",
    minHeight: 540,
    display: "flex",
    flexDirection: "column",
    background: "rgba(255, 255, 255, 0.06)",
    borderRadius: 4,
    overflow: "hidden",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    boxShadow: "0 24px 60px rgba(0, 0, 0, 0.32)",
    transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
    "&:hover": {
        transform: "translateY(-6px)",
        borderColor: "rgba(99, 255, 91, 0.38)",
        boxShadow: "0 24px 60px rgba(57, 255, 20, 0.12)",
    },
};

export const getCardHeaderStyles = (gradient: string, noGrid?: boolean): SxProps<Theme> => ({
    height: 220,
    background: gradient,
    padding: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    position: "relative",
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

export const tooltipStyles = {
    tooltip: {
        sx: {
            bgcolor: "rgba(10, 10, 10, 0.95)",
            color: "#ffffff",
            border: "1px solid rgba(99, 255, 91, 0.35)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5), 0 0 12px rgba(99, 255, 91, 0.15)",
            fontSize: 12,
            fontWeight: 700,
            padding: "8px 14px",
            borderRadius: "8px",
            backdropFilter: "blur(12px)",
            fontFamily: "var(--font-roboto), sans-serif",
            letterSpacing: 0.5,
        }
    },
    arrow: {
        sx: {
            color: "rgba(10, 10, 10, 0.95)",
            "&::before": {
                border: "1px solid rgba(99, 255, 91, 0.35)",
                bgcolor: "rgba(10, 10, 10, 0.95)",
            }
        }
    }
};
