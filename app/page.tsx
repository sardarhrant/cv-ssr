"use client";

import { motion } from "framer-motion";
import { profile } from "./data/cv";
import PageTransition from "./components/PageTransition";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
    return (
        <PageTransition>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-3 text-sm font-medium tracking-widest text-violet-400 uppercase"
            >

                {profile.title}
            </motion.p>

            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{ fontSize: "clamp(2.25rem, 5vw + 1rem, 4.5rem)" }}
                className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text font-bold text-transparent"
            >
                {profile.name}
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                style={{ fontSize: "clamp(1rem, 1.5vw + 0.7rem, 1.25rem)" }}
                className="mt-6 max-w-2xl leading-relaxed text-zinc-400"
            >
                {profile.tagline}
            </motion.p>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                style={{ fontSize: "clamp(0.9375rem, 1vw + 0.6rem, 1.0625rem)" }}
                className="mt-4 max-w-2xl leading-relaxed text-zinc-500"
            >
                {profile.summary}
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="mt-10 flex flex-wrap gap-4 text-sm text-zinc-400"
            >
        <span className="flex items-center gap-2">
          <MapPin size={16} className="text-violet-400" /> {profile.location}
        </span>
                <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-white">
                    <Mail size={16} className="text-violet-400" /> {profile.email}
                </a>
                <span className="flex items-center gap-2">
          <Phone size={16} className="text-violet-400" /> {profile.phone}
        </span>
                <a href={profile.github} target="_blank" className="flex items-center gap-2 hover:text-white">
                    <FaGithub size={16} className="text-violet-400" /> GitHub
                </a>
                <a href={profile.linkedin} target="_blank" className="flex items-center gap-2 hover:text-white">
                    <FaLinkedin size={16} className="text-violet-400" /> LinkedIn
                </a>
            </motion.div>
        </PageTransition>
    );
}