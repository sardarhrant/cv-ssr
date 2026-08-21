"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/app/data/cv";
import PageTransition from "@/app/components/PageTransition";
import { FileText } from "lucide-react";
import {Fragment} from "react";

export default function Experience() {
    return (
        <PageTransition>
            <h2 className="mb-10 text-3xl font-bold text-white">Experience</h2>

            <div className="space-y-10 border-l border-white/10 pl-8">
                {experience.map((job, i) => (
                    <motion.div
                        key={job.company + job.period}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="relative"
                    >
                        <span className="absolute -left-[2.4rem] top-1.5 h-3 w-3 rounded-full bg-white" />
                        <p className="text-sm font-medium text-white">{job.period}</p>
                        <h3 className="mt-1 text-xl font-semibold text-white">{job.role}</h3>
                        <p className="text-zinc-400">
                            {job.company} · {job.location}
                        </p>
                        <p className="mt-2 text-sm text-zinc-500">{job.description}</p>
                        {job.achievements.length > 0 && (
                            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-400">
                                {job.achievements.map((a) => (
                                    <li key={a}>{a}</li>
                                ))}
                            </ul>
                        )}
                    </motion.div>
                ))}
            </div>

            <h2 className="mt-16 mb-10 text-3xl font-bold text-white">Education</h2>
            <div className="space-y-6">
                {education.map((edu) => (
                    <div key={edu.degree} className="rounded-lg border border-white/10 bg-white/5 p-5">
                        <p className="text-sm font-medium text-white">{edu.period}</p>
                        <hr className="mt-4 mb-4 text-gray-600"/>
                        <h3 className="mt-1 font-semibold text-white">{edu.degree}</h3>
                        <hr className="mt-4 mb-4 text-gray-600"/>
                        <p className="text-white">{edu.school}</p>
                        <hr className="mt-4 mb-4 text-gray-600"/>
                        {edu.thesis && <Fragment>
                            <p className="text-xs italic text-white">{edu.thesis}</p>
                            <hr className="mt-4 mb-4 text-gray-600"/>
                        </Fragment>}
                        {edu.field && <p className="text-xs italic text-white">{edu.field}</p>}
                        <hr className="mt-4 mb-4 text-gray-600"/>
                        {edu.diplomas.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                                {edu.diplomas.map((diploma) => (
                                    <a
                                        key={diploma.url}
                                        href={diploma.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
                                    >
                                        <FileText size={16} /> {diploma.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </PageTransition>
    );
}