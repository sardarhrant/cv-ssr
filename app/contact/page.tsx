"use client";

import { profile, interests } from "@/app/data/cv";
import PageTransition from "@/app/components/PageTransition";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
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
        Interests
    </h3>
    <div className="flex gap-2">
        {interests.map((i) => (
            <span
                key={i}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300"
            >
            {i}
          </span>
        ))}
    </div>
</PageTransition>
);
}