import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material/styles";

interface SectionChipProps {
    icon?: ReactNode;
    label: string;
    rightIcon?: ReactNode;
    sx?: SxProps<Theme>;
}

export default function SectionChip({ icon, label, rightIcon, sx }: SectionChipProps) {
    return (
        <Box 
            sx={{ 
                borderRadius: 10, 
                px: 2, 
                py: 1, 
                color: "#63ff5b", 
                backgroundColor: "rgba(57, 255, 20, 0.12)", 
                border: "1px solid rgba(57, 255, 20, 0.22)", 
                fontSize: 13, 
                fontWeight: 500,
                letterSpacing: 0.6, 
                display: "flex", 
                alignItems: "center", 
                gap: 1,
                width: "fit-content",
                maxWidth: "100%",
                "& svg": {
                    fontSize: 16,
                },
                ...sx 
            }}
        >
            {icon}
            <Typography 
                component="span"
                sx={{ 
                    fontSize: { xs: 12, md: 13 }, 
                    fontWeight: 500,
                    lineHeight: 1,
                    letterSpacing: "inherit",
                }}
            >
                {label}
            </Typography>
            {rightIcon}
        </Box>
    );
}
