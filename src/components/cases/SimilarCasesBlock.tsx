"use client";

import { CaseCardHalf } from "@/components/cases/CaseCardHalf";
import type { CaseMeta } from "@/lib/cases";

interface SimilarCasesBlockProps {
    cases: CaseMeta[];
    currentSlug: string;
}

export function SimilarCasesBlock({ cases, currentSlug }: SimilarCasesBlockProps) {
    const toShow = cases
        .filter((c) => c.cardLayout !== "external" && c.slug && c.slug !== currentSlug)
        .slice(0, 2);

    if (toShow.length === 0) return null;

    return (
        <div className="mt-16 pt-12 border-t border-[rgba(16,16,16,0.1)]">
            <h3 className="font-nevermind text-[18px] md:text-[24px] font-normal text-[#101010] mb-6">
                Похожие кейсы
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {toShow.map((c) => (
                    <CaseCardHalf key={c.slug} caseMeta={c} />
                ))}
            </div>
        </div>
    );
}
