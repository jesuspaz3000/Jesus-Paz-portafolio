import type { SxProps, Theme } from "@mui/material/styles";

export const fieldStyles: SxProps<Theme> = {
    "& .MuiOutlinedInput-root": {
        color: "primary.main",
        borderRadius: 2.5,
        backgroundColor: "rgba(255, 255, 255, 0.06)",
        "& fieldset": {
            borderColor: "rgba(255, 255, 255, 0.08)",
        },
        "&:hover fieldset": {
            borderColor: "rgba(99, 255, 91, 0.28)",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#63ff5b",
        },
        "&.Mui-disabled": {
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.04) !important",
            },
        },
    },
    "& .MuiInputLabel-root": {
        color: "secondary.main",
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "#63ff5b",
    },
    "& .MuiInputLabel-root.Mui-disabled": {
        color: "rgba(255, 255, 255, 0.3)",
    },
    "& .MuiOutlinedInput-input::placeholder": {
        color: "rgba(255, 255, 255, 0.48)",
        opacity: 1,
    },
    "& .MuiOutlinedInput-input.Mui-disabled": {
        WebkitTextFillColor: "rgba(255, 255, 255, 0.3)",
    },
};

export const decoratorCircle: SxProps<Theme> = {
    width: "1440px",
    maxWidth: "100%",
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "1fr 0.9fr" },
    gap: 4,
    alignItems: "stretch",
    position: "relative",
    "&:before": {
        content: '""',
        position: "absolute",
        top: { xs: 80, md: 10 },
        left: { xs: "42%", md: "38%" },
        width: { xs: 460, md: 680 },
        height: { xs: 460, md: 560 },
        background: "radial-gradient(circle, rgba(57, 255, 20, 0.1), rgba(57, 255, 20, 0.05) 32%, transparent 70%)",
        transform: "translateX(-50%)",
        pointerEvents: "none",
        zIndex: 0,
    },
}

export const decoratorRectangle: SxProps<Theme> = {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    gap: 2.5,
    borderRadius: 4,
    border: "1px solid rgba(255, 255, 255, 0.08)",
    background: "rgba(255, 255, 255, 0.05)",
    boxShadow: "0 30px 90px rgba(0, 0, 0, 0.34)",
    p: { xs: 2.5, md: 4 },
    overflow: "hidden",
    "&:before": {
        content: '""',
        position: "absolute",
        inset: 0,
        backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
        maskImage: "linear-gradient(135deg, black, transparent 78%)",
        pointerEvents: "none",
    },
}

export const submitStyles: SxProps<Theme> = {
    mt: 1,
    alignSelf: "flex-start",
    borderRadius: 10,
    px: 3,
    py: 1.25,
    color: "background.default",
    backgroundColor: "#63ff5b",
    fontWeight: 700,
    textTransform: "none",
    boxShadow: "0 18px 42px rgba(57, 255, 20, 0.18)",
    "&.Mui-disabled": {
        backgroundColor: "rgba(99, 255, 91, 0.3)",
        color: "rgba(0, 0, 0, 0.4)",
    },
    "&:hover": {
        backgroundColor: "#7dff76",
        boxShadow: "0 22px 52px rgba(57, 255, 20, 0.24)",
    },
}