"use client";

import dynamic from "next/dynamic";

const PDFDownloadLink = dynamic(
    () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
    { ssr: false, loading: () => <span className="text-sm text-zinc-500">Preparing…</span> }
);

import ResumeDocument from "./ResumeDocument";

export default function DownloadCvButton() {
    return (
        <PDFDownloadLink
            document={<ResumeDocument />}
            fileName="Hrant-Sardaryan-Senior-Frontend-Engineer-CV.pdf"
            className="inline-block rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40">
            {({ loading }) => (loading ? "Preparing PDF..." : "Download CV (PDF)")}
        </PDFDownloadLink>
    );
}