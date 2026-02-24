"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/cases/ScrollProgress";
import {
    BlockMetadata,
    CaseContentRenderer,
} from "@/components/cases/CaseContentRenderer";
import { NdaGateInline } from "@/components/cases/NdaGateInline";
import { SimilarCasesBlock } from "@/components/cases/SimilarCasesBlock";
import type { CaseMeta, CaseContent } from "@/lib/cases";

interface CasePageClientProps {
    caseMeta: CaseMeta;
    content: CaseContent | null;
    ndaVerified: boolean;
    otherCases: CaseMeta[];
}

export function CasePageClient({
    caseMeta,
    content,
    ndaVerified,
    otherCases,
}: CasePageClientProps) {
    const [accessGranted, setAccessGranted] = useState(false);

    const isNda = caseMeta.isNda === true;
    const hasAccess = !isNda || ndaVerified || accessGranted;

    const router = useRouter();
    const handleNdaSuccess = () => {
        setAccessGranted(true);
    };

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <ScrollProgress />
            <Header />
            <main className="pt-20 md:pt-28 pb-12">
                <div className="max-w-[1000px] mx-auto px-6">
                    {(() => {
                        const firstBlock = content?.blocks?.[0];
                        const isMetadataFirst = firstBlock?.type === "metadata";
                        const headerBlocks = isMetadataFirst
                            ? content!.blocks.slice(0, 1)
                            : [];
                        const restBlocks = isMetadataFirst
                            ? content!.blocks.slice(1)
                            : (content?.blocks ?? []);
                        const headerBg = "rgba(16,16,16,0.02)";

                        return (
                            <>
                                <div
                                    className="rounded-2xl p-6 -mx-6"
                                    style={{ backgroundColor: headerBg }}
                                >
                                    <button
                                        type="button"
                                        onClick={() => router.back()}
                                        className="inline-flex items-center gap-2 text-[18px] text-[rgba(16,16,16,0.6)] hover:text-[#101010] transition-colors mb-6 cursor-pointer"
                                    >
                                        <ArrowLeft className="w-5 h-5" />
                                        Назад
                                    </button>
                                    <h1 className="font-nevermind text-[27px] md:text-[39px] font-normal leading-tight text-[#101010]">
                                        {caseMeta.title}
                                    </h1>
                                    {headerBlocks.length > 0 && (
                                        <BlockMetadata
                                            block={headerBlocks[0]}
                                        />
                                    )}
                                </div>

                                {hasAccess && content?.blocks ? (
                                    <div className="mt-8 font-nevermind">
                                        <CaseContentRenderer
                                            blocks={restBlocks}
                                        />
                                        <SimilarCasesBlock
                                            cases={otherCases}
                                            currentSlug={caseMeta.slug}
                                        />
                                    </div>
                                ) : hasAccess && !content?.blocks ? (
                                    <p className="mt-8 text-[20px] text-[rgba(16,16,16,0.6)]">
                                        Контент пока не добавлен.
                                    </p>
                                ) : isNda && !hasAccess ? (
                                    <div className="mt-8">
                                        <NdaGateInline
                                            caseTitle={caseMeta.title}
                                            currentSlug={caseMeta.slug}
                                            otherCases={otherCases}
                                            onSuccess={handleNdaSuccess}
                                        />
                                    </div>
                                ) : null}
                            </>
                        );
                    })()}
                </div>
            </main>
            <Footer />
        </div>
    );
}
