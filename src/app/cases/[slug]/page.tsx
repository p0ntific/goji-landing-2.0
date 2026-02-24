import { notFound, redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getCaseBySlug, getCaseContent, getCases } from "@/lib/cases";
import { CasePageClient } from "./CasePageClient";

const NDA_COOKIE_NAME = "nda_verified";

interface CasePageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CasePageProps) {
    const { slug } = await params;
    const caseMeta = getCaseBySlug(slug);
    if (!caseMeta) return { title: "Кейс не найден" };
    return {
        title: caseMeta.title,
        description: caseMeta.description ?? `Кейс: ${caseMeta.title}`,
    };
}

export default async function CasePage({ params }: CasePageProps) {
    const { slug } = await params;
    const caseMeta = getCaseBySlug(slug);

    if (!caseMeta) {
        notFound();
    }

    if (caseMeta.cardLayout === "external" && caseMeta.externalLink) {
        redirect(caseMeta.externalLink);
    }

    const content = getCaseContent(slug);
    const cookieStore = await cookies();
    const ndaVerified = cookieStore.get(NDA_COOKIE_NAME)?.value === "true";
    const otherCases = getCases();

    return (
        <CasePageClient
            caseMeta={caseMeta}
            content={content}
            ndaVerified={ndaVerified}
            otherCases={otherCases}
        />
    );
}
