import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const postsDirectory = path.join(process.cwd(), "app/posts");
  const postFiles = fs.readdirSync(postsDirectory);

  const posts = postFiles
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(".md", "");
      return {
        url: `https://meudoutor.digital/blog/${slug}`,
        lastModified: new Date(),
      };
    });

  return [
    {
      url: "https://meudoutor.digital",
      lastModified: new Date(),
    },
    {
      url: "https://meudoutor.digital/blog",
      lastModified: new Date(),
    },
    ...posts, // Adiciona os posts automaticamente
  ];
}
