import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots{
    const baseUrl = "https://chris-is-a-dev.vercel.app";
    return {
        rules: {
            userAgent: '*',
            allow: ['/'],
            disallow: [],
        },
        sitemap: `${baseUrl}/sitemap.xml`
    }
}