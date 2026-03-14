export default async function sitemap() {
  const baseUrl = "https://copstud3.xyz";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];
}
