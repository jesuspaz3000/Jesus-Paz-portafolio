export type ProjectType = "ui" | "full-stack";

export interface ProjectScreenshot {
    src: string;
    alt: string;
    caption?: string;
}

export interface Project {
    slug: string;
    name: string;
    description: string;
    longDescription?: string[];
    highlights?: string[];
    type: ProjectType;
    category: string;
    tags: string[];
    metric: string;
    gradient: string;
    logo?: string;
    noGrid?: boolean;
    demoUrl?: string;
    githubUrl?: string;
    isPrivate?: boolean;
    logoFullSize?: boolean;
    demoTooltip?: string;
    githubTooltip?: string;
    credentialsRequest?: boolean;
    videoUrl?: string;
    screenshots?: ProjectScreenshot[];
    /** Claves de TECH_ICON_MAP (ver ProjectDetail.tsx) con las tecnologías reales usadas. */
    techStack?: string[];
    /** Diagrama de arquitectura / modelo de datos (ej. esquema DBML exportado como imagen). */
    architectureImage?: ProjectScreenshot;
    /** false = no se muestra botón "Ver más" (ej. proyecto de cliente sin código/capturas propias). Default: true. */
    hasDetailPage?: boolean;
    /** true = en vez de ocultar el botón (hasDetailPage: false), muestra un botón deshabilitado "Próximamente". */
    comingSoon?: boolean;
}

export const projects: Project[] = [
    {
        slug: "smartmuni-software",
        name: "Smartmuni Software",
        type: "ui",
        category: "Frontend",
        description: "Evolución de la plataforma de gobierno digital Smartmuni, optimizando la estabilidad del sistema mediante corrección de errores críticos e implementación de funcionalidades a medida bajo demanda de municipalidades.",
        tags: ["Vue.js", "Quasar", "Frontend"],
        techStack: ["vuejs"],
        metric: "Mantenimiento & Nuevos Módulos",
        gradient: "#1615B1",
        logo: "/logo/smart-muni.svg",
        noGrid: true,
        isPrivate: true,
        hasDetailPage: false,
    },
    {
        slug: "nexttrip",
        name: "Sistema de Tracking Turístico NextTrip",
        type: "ui",
        category: "Frontend",
        description: "Plataforma web para la gestión integral y tracking en tiempo real de itinerarios turísticos, brindando una navegación fluida al usuario final.",
        tags: ["Next.js", "App Router", "Django APIs"],
        techStack: ["nextjs"],
        metric: "Frontend & Integración de APIs",
        gradient: "#263238",
        logo: "/logo/next-trip.svg",
        noGrid: true,
        demoUrl: "https://nexttriptech.com/",
        demoTooltip: "Ver landing page (Dashboard privado)",
        hasDetailPage: false,
    },
    {
        slug: "gestion-veterinaria",
        name: "Sistema de Gestión de Veterinarias",
        type: "full-stack",
        category: "Full stack",
        description: "ERP desarrollado como proyecto personal para clínicas veterinarias, el cual centraliza de forma segura el control de citas, historiales médicos y facturación.",
        longDescription: [
            "VetGest es un ERP full-stack para clínicas veterinarias construido de punta a punta como proyecto personal: diseño del esquema de base de datos, backend, frontend, seguridad, infraestructura de despliegue y puesta en producción.",
            "El sistema centraliza la operación completa de una clínica: agenda de citas, historia clínica unificada por mascota, vacunación y desparasitación con descuento automático de inventario, cirugías con validación de disponibilidad de personal, hospitalización con control de jaulas y evoluciones clínicas, y un módulo de ventas tipo POS con facturación, pagos parciales, notas de crédito y generación de recibos en PDF.",
            "Todo el acceso está protegido con autenticación JWT (access + refresh token en cookie HttpOnly) y un esquema de roles y permisos granular (RBAC) verificado tanto en el backend como en la interfaz.",
        ],
        highlights: [
            "Esquema de base de datos relacional con 40 tablas, diseñado primero en DBML antes de escribir una sola línea de backend.",
            "Backend en Spring Boot organizado por módulos de dominio, cada uno con su propia capa de controller, DTO, mapper, entidad, repositorio y servicio.",
            "Frontend en Next.js con arquitectura feature-based, tablas responsivas que cambian a tarjetas en móvil sin usar useMediaQuery (para evitar errores de hidratación).",
            "Autenticación JWT con refresh token rotativo, blacklist en Redis y control de acceso por permisos granulares (no solo por rol).",
            "Reglas de negocio reales: bloqueo de sobreventa concurrente en facturación, choque de horarios para cirugías, doble admisión en hospitalización, y descuento de stock al aplicar vacunas o desparasitantes.",
            "Despliegue containerizado con Docker Compose (backend, frontend, PostgreSQL y Redis) detrás de Nginx como reverse proxy con TLS.",
        ],
        tags: ["Next.js", "Spring Boot", "Proyecto Personal"],
        techStack: ["nextjs", "mui", "java", "springboot", "postgres", "redis", "docker", "nginx"],
        metric: "Desarrollo Full-Stack & Control de Roles (RBAC)",
        gradient: "#ffffff",
        githubUrl: "https://github.com/jesuspaz3000/veterinary-clinic.git",
        demoUrl: "https://veterinaria.yisusdynamics.cloud/",
        demoTooltip: "Solicitar credenciales para acceder a la demo",
        credentialsRequest: true,
        logo: "/logo/logo-gestion-veterinaria.png",
        noGrid: true,
        logoFullSize: true,
        videoUrl: "https://youtu.be/-p5Mg1HZIcU",
        architectureImage: {
            src: "/image/gestion-veterinaria/veterinaria-diagrama-dbml.png",
            alt: "Diagrama de base de datos DBML - Sistema de Gestión de Veterinarias",
            caption: "Esquema de base de datos relacional diseñado en DBML, base del backend en Spring Boot."
        },
        screenshots: [
            {
                src: "/image/gestion-veterinaria/dashboard.png",
                alt: "Dashboard con KPIs y gráficos de VetGest",
                caption: "Dashboard con métricas y gráficos en tiempo real",
            },
            {
                src: "/image/gestion-veterinaria/agenda-citas.png",
                alt: "Agenda semanal de citas de VetGest",
                caption: "Agenda semanal de citas por veterinario",
            },
            {
                src: "/image/gestion-veterinaria/historial-clinico.png",
                alt: "Historial clínico unificado de una mascota en VetGest",
                caption: "Historial clínico unificado por mascota",
            },
            {
                src: "/image/gestion-veterinaria/modulo-ventas.png",
                alt: "Módulo de ventas / facturación de VetGest",
                caption: "Ventas y facturación tipo POS",
            },
            {
                src: "/image/gestion-veterinaria/kardex.png",
                alt: "Kardex de movimientos de inventario de VetGest",
                caption: "Kardex de movimientos de inventario",
            },
            {
                src: "/image/gestion-veterinaria/hospitalizacion.png",
                alt: "Módulo de hospitalización de VetGest",
                caption: "Control de hospitalización y evoluciones clínicas",
            },
            {
                src: "/image/gestion-veterinaria/formulario-creacion.png",
                alt: "Formulario de creación de producto en VetGest",
                caption: "Formulario de creación con presentaciones dinámicas",
            },
            {
                src: "/image/gestion-veterinaria/roles.png",
                alt: "Gestión de roles en VetGest",
                caption: "Gestión de roles del sistema",
            },
            {
                src: "/image/gestion-veterinaria/permisos.png",
                alt: "Matriz de permisos granulares en VetGest",
                caption: "Permisos granulares por rol (RBAC)",
            },
            {
                src: "/image/gestion-veterinaria/responsive.png",
                alt: "Vista responsive en móvil de una tabla de VetGest",
                caption: "Tablas responsivas: tarjetas en móvil",
            },
        ],
    },
    {
        slug: "tienda-ecommerce",
        name: "Administrador de Tienda / E-commerce",
        type: "full-stack",
        category: "Full stack",
        description: "Panel administrativo comercial que automatiza el control de stock, cierres de caja diaria y la generación de reportes de ventas integrados con gráficos interactivos.",
        tags: ["Next.js", "Spring Boot", "PostgreSQL"],
        techStack: ["nextjs", "java", "springboot", "postgres", "redis", "docker", "nginx"],
        metric: "Full-Stack: JWT, PostgreSQL & Redis",
        gradient: "#ffffff",
        githubUrl: "https://github.com/jesuspaz3000/fullstack-ecommerce-app.git",
        demoUrl: "https://tienda.yisusdynamics.cloud/",
        demoTooltip: "Solicitar credenciales para acceder a la demo",
        credentialsRequest: true,
        logo: "/logo/logo-jhemar.png",
        logoFullSize: true,
        noGrid: true,
        hasDetailPage: false,
        comingSoon: true,
    },
    {
        slug: "sedapar-pagos",
        name: "Sistema de Gestión de Pagos",
        type: "ui",
        category: "Frontend",
        description: "Desarrollo frontend de una plataforma web para la gestión de recaudación de servicios públicos, realizada a través de la consultora Beryllium para su cliente final en el sector de saneamiento.",
        tags: ["Next.js", "Material UI", "Gestión"],
        techStack: ["nextjs", "mui"],
        metric: "UI & Flujos de Recaudación",
        gradient: "#ffffff",
        logo: "/logo/logo-sedapar.png",
        logoFullSize: true,
        noGrid: true,
        isPrivate: true,
        hasDetailPage: false,
    },
    {
        slug: "molinos-migracion",
        name: "Migración Gestión de Molinos",
        type: "ui",
        category: "Frontend",
        description: "Modernización y refactorización frontend de un sistema heredado de control y monitoreo de producción, desarrollada a través de la consultora Beryllium para su cliente final en el sector agroindustrial.",
        tags: ["Vue.js", "Next.js", "Migración"],
        techStack: ["vuejs", "nextjs"],
        metric: "Migración Vue 2 a Next.js (Rendimiento)",
        gradient: "#006400",
        logo: "/logo/logo-molinos.png",
        logoFullSize: true,
        noGrid: true,
        isPrivate: true,
        hasDetailPage: false,
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug);
}
