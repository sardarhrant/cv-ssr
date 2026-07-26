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
            className="inline-block rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
            {({ loading }) => (loading ? "Preparing PDF..." : "Download CV (PDF)")}
        </PDFDownloadLink>
    );
}