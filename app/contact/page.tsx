"use client";

import { useState } from "react";
import {profile, interests, languages} from "@/app/data/cv";
import PageTransition from "@/app/components/PageTransition";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus("sent");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    return (
        <PageTransition>
            <h2 className="mb-10 text-3xl font-bold text-white">Contact</h2>

            <div className="space-y-4">

               <a href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 text-zinc-300 transition-colors hover:border-violet-400/40 hover:text-white"
                >
                <Mail size={18} className="text-violet-400" /> {profile.email}
            </a>
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 text-zinc-300">
                <Phone size={18} className="text-violet-400" /> {profile.phone}
            </div>
            <a href={profile.github} target="_blank" className="flex items-center gap-2 hover:text-white">
                <FaGithub size={16} className="text-violet-400" /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" className="flex items-center gap-2 hover:text-white">
                <FaLinkedin size={16} className="text-violet-400" /> LinkedIn
            </a>
        </div>

        <h3 className="mt-10 mb-3 text-sm font-semibold tracking-wide text-violet-400 uppercase">
            Languages
        </h3>
        <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
                <span
                    key={lang.name}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300"
                >
                    {lang.name} <span className="text-zinc-500">· {lang.level}</span>
                </span>
            ))}
        </div>

    <h3 className="mt-10 mb-3 text-sm font-semibold tracking-wide text-violet-400 uppercase">
        Interests
    </h3>
    <div className="flex gap-2">
        {interests.map((i) => (
            <span key={i} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300">
            {i}
          </span>
        ))}
    </div>

    <h3 className="mt-12 mb-5 text-sm font-semibold tracking-wide text-violet-400 uppercase">
        Send a message
    </h3>
    <form onSubmit={handleSubmit} className="space-y-4">
        <input
            required
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-violet-400/50"
        />
        <input
            required
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-violet-400/50"
        />
        <textarea
            required
            rows={5}
            placeholder="Your message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full resize-none rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-violet-400/50"
        />
        <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        >
            {status === "sending" ? "Sending..." : "Send message"}
        </button>
        {status === "sent" && (
            <p className="text-sm text-green-400">Message sent, thank you!</p>
        )}
        {status === "error" && (
            <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
        )}
    </form>
</PageTransition>
);
}