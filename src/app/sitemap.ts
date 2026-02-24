import type { MetadataRoute } from "next";
import { getCases } from "@/lib/cases";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://goji.studio";
    const cases = getCases();

    const caseUrls = cases
        .filter((c) => c.cardLayout !== "external")
        .map((c) => ({
            url: `${baseUrl}/cases/${c.slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/cases`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        ...caseUrls,
    ];
}
