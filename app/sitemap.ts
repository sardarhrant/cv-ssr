import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://hrantsardaryan.labstacks.work";
    return [
        { url: base, lastModified: new Date() },
        { url: `${base}/skills`, lastModified: new Date() },
        { url: `${base}/experience`, lastModified: new Date() },
        { url: `${base}/contact`, lastModified: new Date() },
    ];
}