import type { SxProps, Theme } from "@mui/material/styles";

export const highlightsStyles: SxProps<Theme> = {
    height: "100%",
    borderRadius: 4,
    border: "1px solid rgba(255, 255, 255, 0.08)",
    background: "rgba(255, 255, 255, 0.06)",
    boxShadow: "0 24px 60px rgba(0, 0, 0, 0.32)",
    p: { xs: 2.5, md: 3 },
    display: "flex",
    gap: 2.5,
    overflow: "hidden",
    position: "relative",
    transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
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
    "&:after": {
        content: '""',
        position: "absolute",
        inset: 0,
        background: "linear-gradient(135deg, rgba(57, 255, 20, 0.14), rgba(255, 255, 255, 0.08))",
        opacity: 0,
        transition: "opacity 0.25s ease",
        pointerEvents: "none",
    },
    "&:hover": {
        transform: "translateY(-6px)",
        borderColor: "rgba(99, 255, 91, 0.42)",
        boxShadow: "0 24px 60px rgba(57, 255, 20, 0.12)",
        "&:after": {
            opacity: 1,
        },
    },
}

export const iconStyles: SxProps<Theme> = {
    position: "relative",
    zIndex: 1,
    width: 48,
    height: 48,
    flexShrink: 0,
    borderRadius: 2.5,
    display: "grid",
    placeItems: "center",
    color: "#63ff5b",
    backgroundColor: "rgba(57, 255, 20, 0.16)",
    boxShadow: "0 0 24px rgba(57, 255, 20, 0.14)"
}

export const chipStyles: SxProps<Theme> = {
    display: "flex",
    alignItems: "center",
    gap: 1,
    mb: 3,
    borderRadius: 10,
    px: 2,
    py: 1,
    color: "#63ff5b",
    backgroundColor: "rgba(57, 255, 20, 0.12)",
    border: "1px solid rgba(57, 255, 20, 0.22)",
    width: "fit-content",
    fontSize: 13,
    letterSpacing: 0.6
}