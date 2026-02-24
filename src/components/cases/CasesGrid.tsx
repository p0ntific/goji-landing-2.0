"use client";

import { CaseCardFull } from "./CaseCardFull";
import { CaseCardHalf } from "./CaseCardHalf";
import { CaseCardExternal } from "./CaseCardExternal";
import type { CaseMeta } from "@/lib/cases";

interface CasesGridProps {
    cases: CaseMeta[];
}

export function CasesGrid({ cases }: CasesGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {cases.map((caseMeta) => {
                const { slug, cardLayout } = caseMeta;

                if (cardLayout === "external") {
                    return (
                        <div key={slug}>
                            <CaseCardExternal caseMeta={caseMeta} />
                        </div>
                    );
                }

                if (cardLayout === "half") {
                    return (
                        <div key={slug}>
                            <CaseCardHalf caseMeta={caseMeta} />
                        </div>
                    );
                }

                return (
                    <div key={slug} className="md:col-span-2">
                        <CaseCardFull caseMeta={caseMeta} />
                    </div>
                );
            })}
        </div>
    );
}
