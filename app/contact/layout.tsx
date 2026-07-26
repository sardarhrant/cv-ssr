import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact — Hrant Sardaryan",
    description: "Get in touch with Hrant Sardaryan, Senior Software Engineer specializing in Angular and React.",
    alternates: { canonical: "https://hrantsardaryan.labstacks.work/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}