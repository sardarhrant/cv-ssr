"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const links = [
    { href: "/", label: "Home" },
    { href: "/skills", label: "Skills" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-md">
            <div className="flex items-center justify-between px-6 py-4">
                <Link href="/" aria-label="Go to home page">
                    <Logo size={38} />
                </Link>

                <div className="hidden gap-1 md:flex">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{ fontSize: "clamp(0.8125rem, 0.6vw + 0.6rem, 0.9375rem)" }}
                                className={`rounded-md px-4 py-2 font-medium transition-colors ${
                                    isActive
                                        ? "bg-violet-500/15 text-violet-300"
                                        : "text-zinc-400 hover:bg-white/5 hover:text-white"
                                }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
                >
                    <motion.span
                        animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        className="h-0.5 w-6 rounded-full bg-white"
                    />
                    <motion.span
                        animate={open ? { opacity: 0 } : { opacity: 1 }}
                        className="h-0.5 w-6 rounded-full bg-white"
                    />
                    <motion.span
                        animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        className="h-0.5 w-6 rounded-full bg-white"
                    />
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden border-t border-white/10 md:hidden"
                    >
                        <div className="flex flex-col gap-1 px-6 py-4">
                            {links.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className={`rounded-md px-4 py-3 text-base font-medium transition-colors ${
                                            isActive
                                                ? "bg-violet-500/15 text-violet-300"
                                                : "text-zinc-400 hover:bg-white/5 hover:text-white"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}