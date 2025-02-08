import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://meudoutor.digital",
      lastModified: new Date(),
    },
    {
      url: "https://meudoutor.digital/blog",
      lastModified: new Date(),
    },
    // Add more URLs as needed
  ]
}

