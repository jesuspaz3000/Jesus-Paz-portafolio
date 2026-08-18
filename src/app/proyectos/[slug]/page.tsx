import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/features/landing/data/projects";
import ProjectDetail from "@/features/landing/components/ProjectDetail";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {};
    }

    return {
        title: `${project.name} | Jesús Paz`,
        description: project.description,
        alternates: {
            canonical: `/proyectos/${project.slug}`,
        },
        openGraph: {
            title: `${project.name} | Jesús Paz`,
            description: project.description,
            url: `https://yisusdynamics.cloud/proyectos/${project.slug}`,
            type: "article",
        },
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetail project={project} />;
}
