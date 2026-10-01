import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    en: site.url,
    "pt-PT": `${site.url}/pt`,
    "x-default": site.url,
  };

  return [
    {
      url: site.url,
      lastModified: new Date(),
      alternates: { languages },
    },
    {
      url: `${site.url}/pt`,
      lastModified: new Date(),
      alternates: { languages },
    },
  ];
}
