import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import "./globals.css";
import Script from "next/script";

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
        icon: "/favicon.ico",
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
            <Script id="gtm" strategy="afterInteractive">
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-MJKS7L8N');`
                }
            </Script>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <meta name="google-site-verification" content="-ixGdHTQ-YQ5s1D3WCBAAibrajGkdc-iCvPANqJYUoY" />
        </head>
        <body className="bg-[#0a0a0f] text-zinc-200">
        {/* Google Tag Manager (noscript) */}
        <noscript>
            <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-MJKS7L8N"
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
            />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        {children}
        <Script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "184950b975484cf1b9138ad23eebb09e"}'
            strategy="afterInteractive"
        />
        </body>
        </html>
    );
}