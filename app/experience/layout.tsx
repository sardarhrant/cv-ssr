import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Experience — Hrant Sardaryan",
    description:
        "Professional experience of Hrant Sardaryan, Senior Software Engineer, including roles at EPAM Systems, Peller Tech, Bonee Systems, and Atero Solutions.",
    alternates: { canonical: "https://hrantsardaryan.labstacks.work/experience" },
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
    return children;
}