export default async function sitemap() {

    const baseUrl = "https://chris-is-a-dev.vercel.app";

    return [{
        url: baseUrl,
        lastModified: new Date(),
    }]
}