"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", label: "Home" },
    { href: "/skills", label: "Skills" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#0a0a0f]/80 px-6 py-4 backdrop-blur-md">
      <span className="text-lg font-bold tracking-tight text-white">
        HS<span className="text-violet-400">.</span>
      </span>
            <div className="flex gap-1">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
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
        </nav>
    );
}