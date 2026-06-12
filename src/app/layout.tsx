import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ThemeRegistry from "@/providers/ThemeRegistry";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Jesús Paz | Portfolio - Fullstack Developer",
  description: "Portafolio profesional de Jesús Paz, Desarrollador Fullstack con experiencia sólida en Java (Spring Boot) y JavaScript/TypeScript (React, Next.js, Express, Node.js).",
  keywords: [
    "Jesús Paz",
    "Jesús Paz Portfolio",
    "Jesús Paz Portafolio",
    "Jesús Paz Desarrollador",
    "Fullstack Developer",
    "Desarrollador Fullstack",
    "Backend Developer",
    "Spring Boot",
    "Java",
    "Express",
    "Node.js",
    "React",
    "Next.js",
    "TypeScript",
    "Software Engineer"
  ],
  authors: [{ name: "Jesús Paz" }],
  creator: "Jesús Paz",
  publisher: "Jesús Paz",
  metadataBase: new URL("https://yisusdynamics.cloud"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jesús Paz | Portfolio - Fullstack Developer",
    description: "Portafolio profesional de Jesús Paz, Desarrollador Fullstack con experiencia en Spring Boot, Express y React.",
    url: "https://yisusdynamics.cloud",
    siteName: "Jesús Paz Portfolio",
    locale: "es_PE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable} suppressHydrationWarning>
        <AppRouterCacheProvider>
          <ThemeRegistry>
            {children}
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
