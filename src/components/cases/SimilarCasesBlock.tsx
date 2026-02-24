"use client";

import Image from "next/image";
import Link from "next/link";
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
                    <Link
                        key={c.slug}
                        href={`/cases/${c.slug}`}
                        className="block transition-transform duration-200 hover:-translate-y-1"
                    >
                        <div className="h-[400px] rounded-2xl border border-[rgba(16,16,16,0.1)] bg-white overflow-hidden">
                            {c.image ? (
                                <div className="relative h-[220px] w-full">
                                    <Image
                                        src={c.image}
                                        alt={c.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-wrap gap-2">
                                        {c.badges?.map((b) => (
                                            <span
                                                key={b}
                                                className="px-3 py-1 rounded-lg bg-white text-[#101010] text-sm font-medium"
                                            >
                                                {b}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="h-[220px] bg-[rgba(16,16,16,0.04)] flex items-center justify-center">
                                    <span className="text-[rgba(16,16,16,0.3)] text-sm">
                                        {c.title}
                                    </span>
                                </div>
                            )}
                            <div className="p-6">
                                {c.company && c.year && (
                                    <p className="text-sm text-[rgba(16,16,16,0.6)] mb-1">
                                        {c.company} • {c.year}
                                    </p>
                                )}
                                <p className="font-nevermind text-[17px] md:text-[21px] font-normal text-[#101010]">
                                    {c.title}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
