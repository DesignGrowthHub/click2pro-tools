import type { MetadataRoute } from "next";
import { liveToolSlugs } from "@/data/tools-home";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://click2pro.com/tools",
      priority: 1,
      changeFrequency: "weekly",
    },
    ...liveToolSlugs.map((slug) => ({
      url: `https://click2pro.com/tools/${slug}`,
      priority: 0.9,
      changeFrequency: "weekly" as const,
    })),
    {
      url: "https://click2pro.com/privacy",
      priority: 0.4,
      changeFrequency: "yearly",
    },
    {
      url: "https://click2pro.com/terms",
      priority: 0.4,
      changeFrequency: "yearly",
    },
    {
      url: "https://click2pro.com/disclaimer",
      priority: 0.4,
      changeFrequency: "yearly",
    },
  ];
}
