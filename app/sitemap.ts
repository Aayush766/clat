import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "#courses", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "#faculty", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "#testimonials", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "#faq", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "#blog", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "#contact", priority: 0.9, changeFrequency: "monthly" as const },
  ];

  return routes.map((r) => ({
    url: `${SITE.url}/${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
