import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Skills — Hrant Sardaryan",
    description:
        "Technical skills of Hrant Sardaryan: Angular, React, TypeScript, state management, styling, backend, testing, and DevOps tools.",
    alternates: { canonical: "https://hrantsardaryan.labstacks.work/skills" },
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
    return children;
}