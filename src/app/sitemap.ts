import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://www.slo-exo.si";

const routes = [
  "/",
  "/obiskovalci/",
  "/razstavljalci/",
  "/razstavljalci/prijava/",
  "/razstavljalci/seznam/",
  "/galerija/",
  "/o-nas/",
  "/pokrovitelji/",
  "/kontakt/",
  "/za-medije/",
  "/pravni-pouk/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));
}
