import { readdirSync, readFileSync, existsSync } from "fs";
import { join } from "path";

export interface CaseMeta {
    slug: string;
    title: string;
    description?: string;
    badges?: string[];
    company?: string;
    year?: string;
    image?: string;
    cardLayout: "full" | "half" | "external";
    externalLink?: string;
    publicationName?: string;
    publicationLogo?: string;
    isNda?: boolean;
    order?: number;
}

export interface ContentBlock {
    type: string;
    [key: string]: unknown;
}

export interface CaseContent {
    headerBg?: string;
    blocks: ContentBlock[];
}

const CONTENT_DIR = join(process.cwd(), "content", "cases");

function getContentDir(): string {
    return CONTENT_DIR;
}

export function getCases(): CaseMeta[] {
    const dir = getContentDir();
    if (!existsSync(dir)) {
        return [];
    }

    const slugs = readdirSync(dir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name);

    const cases: CaseMeta[] = [];

    for (const slug of slugs) {
        const metaPath = join(dir, slug, "meta.json");
        if (!existsSync(metaPath)) continue;

        try {
            const raw = readFileSync(metaPath, "utf-8");
            const meta = JSON.parse(raw) as CaseMeta;
            meta.slug = slug;
            cases.push(meta);
        } catch {
            // skip invalid meta
        }
    }

    cases.sort((a, b) => {
        const layoutOrder = { full: 0, half: 1, external: 2 };
        const layoutA = layoutOrder[a.cardLayout] ?? 2;
        const layoutB = layoutOrder[b.cardLayout] ?? 2;
        if (layoutA !== layoutB) return layoutA - layoutB;
        const orderA = a.order ?? 999;
        const orderB = b.order ?? 999;
        return orderA - orderB;
    });
    return cases;
}

export function getCaseBySlug(slug: string): CaseMeta | null {
    const metaPath = join(getContentDir(), slug, "meta.json");
    if (!existsSync(metaPath)) return null;

    try {
        const raw = readFileSync(metaPath, "utf-8");
        const meta = JSON.parse(raw) as CaseMeta;
        meta.slug = slug;
        return meta;
    } catch {
        return null;
    }
}

export function getCaseContent(slug: string): CaseContent | null {
    const contentPath = join(getContentDir(), slug, "content.json");
    if (!existsSync(contentPath)) return null;

    try {
        const raw = readFileSync(contentPath, "utf-8");
        return JSON.parse(raw) as CaseContent;
    } catch {
        return null;
    }
}

export function getCaseSlugs(): string[] {
    const dir = getContentDir();
    if (!existsSync(dir)) return [];

    return readdirSync(dir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name);
}
