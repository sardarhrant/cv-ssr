import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
    title: "Hrant Sardaryan — Senior Software Engineer",
    description:
        "Senior Software Engineer specializing in Angular and React. 10+ years building intuitive, high-performance frontend applications.",
    openGraph: {
        title: "Hrant Sardaryan — Senior Software Engineer",
        description: "Senior Software Engineer specializing in Angular and React.",
        url: "https://labstacks.work",
        type: "website",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-[#0a0a0f] text-zinc-200">
        <Navbar />
        {children}
        </body>
        </html>
    );
}