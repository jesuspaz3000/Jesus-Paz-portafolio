import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: "rgba(255,255,255,0.75)",
        },
        background: {
            default: "#000000",
        }
    },
    typography: {
        fontFamily: "var(--font-roboto), sans-serif",
    }
});