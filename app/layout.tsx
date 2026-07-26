import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://hrantsardaryan.labstacks.work"),
    title: "Hrant Sardaryan — Senior Software Engineer",
    description:
        "Senior Software Engineer specializing in Angular and React. 10+ years building intuitive, high-performance frontend applications.",
    alternates: { canonical: "/" },
    openGraph: {
        title: "Hrant Sardaryan — Senior Software Engineer",
        description: "Senior Software Engineer specializing in Angular and React.",
        url: "https://hrantsardaryan.labstacks.work",
        type: "website",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    icons: {
        icon: "/favicon.svg",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hrant Sardaryan",
    jobTitle: "Senior Software Engineer",
    url: "https://hrantsardaryan.labstacks.work",
    email: "sardaryanhrant@gmail.com",
    telephone: "+37494091185",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Yerevan",
        addressCountry: "AM",
    },
    sameAs: [
        "https://github.com/sardarhrant",
        "https://linkedin.com/in/hrant-sardaryan-7962a667",
    ],
    knowsAbout: ["Angular", "React", "TypeScript", "JavaScript", "Frontend Development"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </head>
        <body className="bg-[#0a0a0f] text-zinc-200">
        <Navbar />
        {children}
        </body>
        </html>
    );
}