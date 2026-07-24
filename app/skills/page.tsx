"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/app/data/cv";
import PageTransition from "@/app/components/PageTransition";

export default function Skills() {
    return (
        <PageTransition>
            <h2 className="mb-10 text-3xl font-bold text-white">Skills</h2>
            <div className="space-y-8">
                {skillGroups.map((group, i) => (
                    <motion.div
                        key={group.category}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                    >
                        <h3 className="mb-3 text-sm font-semibold tracking-wide text-violet-400 uppercase">
                            {group.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300 transition-colors hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
                                >
                  {skill}
                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </PageTransition>
    );
}