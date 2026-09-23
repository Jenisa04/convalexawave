import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://www.convalexawave.com", changeFrequency: "monthly", priority: 1 }];
}
