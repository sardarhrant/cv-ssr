"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/app/data/cv";
import PageTransition from "@/app/components/PageTransition";

export default function Skills() {
    return (
        <PageTransition>
            <h2 className="mb-10 text-3xl font-bold text-white">Skills</h2>
            <div className="space-y-10">
                {skillGroups.map((group, gi) => (
                    <div key={group.category}>
                        <h3 className="mb-5 text-sm font-semibold tracking-wide text-white uppercase">
                            {group.category}
                        </h3>
                        <div className="space-y-5">
                            {group.skills.map((skill, si) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: gi * 0.05 + si * 0.03 }}
                                >
                                    <div className="mb-1.5 flex items-center justify-between">
                                    <span className="text-sm font-medium text-zinc-300">
                                      {skill.name}
                                    </span>
                                        <span className="text-xs text-zinc-500">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                                        <motion.div
                                            className="h-full rounded-full bg-gradient-to-r from-teal-500 to-emerald-400"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.8,
                                                delay: gi * 0.05 + si * 0.03,
                                                ease: "easeOut",
                                            }}
                                        />
                                    </div>

                                    {skill.subSkills && skill.subSkills.length > 0 && (
                                        <div className="mt-2 flex flex-wrap gap-1.5">
                                            {skill.subSkills.map((sub) => (
                                                <span
                                                    key={sub}
                                                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-zinc-400"
                                                >
                          {sub}
                        </span>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </PageTransition>
    );
}