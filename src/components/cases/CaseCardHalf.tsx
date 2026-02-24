"use client";

import Image from "next/image";
import Link from "next/link";
import { Chip } from "@heroui/react";
import { cn } from "@heroui/react";
import type { CaseMeta } from "@/lib/cases";

interface CaseCardHalfProps {
    caseMeta: CaseMeta;
    className?: string;
}

export function CaseCardHalf({ caseMeta, className }: CaseCardHalfProps) {
    const { slug, title, badges, company, year, image, isNda } = caseMeta;

    return (
        <Link href={`/cases/${slug}`} className={cn("block transition-transform duration-200 hover:-translate-y-1", className)}>
            <div
                className={cn(
                    "relative overflow-hidden rounded-2xl border border-[rgba(16,16,16,0.1)] bg-white h-[400px]",
                )}
            >
                {image && (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 flex flex-col gap-2">
                    <div className="flex flex-wrap gap-2">
                        {isNda && (
                            <Chip
                                variant="flat"
                                size="sm"
                                radius="lg"
                                classNames={{
                                    base: "bg-[#ff4314]",
                                    content: "text-white font-medium",
                                }}
                            >
                                NDA
                            </Chip>
                        )}
                        {badges?.map((b) => (
                            <Chip
                                key={b}
                                variant="flat"
                                size="sm"
                                radius="lg"
                                classNames={{
                                    base: "bg-white text-[#101010]",
                                    content: "font-medium",
                                }}
                            >
                                {b}
                            </Chip>
                        ))}
                    </div>
                    {company && year && (
                        <p className="text-sm text-white/90">
                            {company} • {year}
                        </p>
                    )}
                    <h3 className="font-nevermind text-[25px] md:text-[32px] font-normal leading-tight text-white">
                        {title}
                    </h3>
                </div>
            </div>
        </Link>
    );
}
