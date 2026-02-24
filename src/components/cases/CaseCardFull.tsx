"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, Chip } from "@heroui/react";
import { cn } from "@heroui/react";
import type { CaseMeta } from "@/lib/cases";

interface CaseCardFullProps {
    caseMeta: CaseMeta;
    className?: string;
}

const DEFAULT_CARD_HOVER_BG = "rgba(16,16,16,0.03)";

export function CaseCardFull({ caseMeta, className }: CaseCardFullProps) {
    const {
        slug,
        title,
        description,
        badges,
        company,
        year,
        image,
        isNda,
        cardHoverBg,
    } = caseMeta;
    const hoverBg = cardHoverBg ?? DEFAULT_CARD_HOVER_BG;

    return (
        <Link
            href={`/cases/${slug}`}
            className={cn(
                "block transition-transform duration-400 hover:-translate-y-2 group",
                className,
            )}
        >
            <Card
                className={cn(
                    "flex flex-col md:flex-row md:h-[400px]",
                    "rounded-2xl border border-[rgba(16,16,16,0.1)] bg-white",
                )}
                shadow="none"
                radius="lg"
            >
                <div className="relative h-[220px] md:h-full w-full md:w-[400px] shrink-0">
                    {image && (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    )}
                </div>
                <CardBody
                    className={cn(
                        "flex flex-1 flex-col p-6 md:p-[60px] justify-center gap-4 overflow-hidden transition-colors duration-200",
                        "group-hover:bg-[var(--card-hover-bg)] ",
                    )}
                    style={
                        {
                            ["--card-hover-bg" as string]: hoverBg,
                        } as React.CSSProperties
                    }
                >
                    <div className="case-badges flex flex-wrap gap-2">
                        {isNda && (
                            <Chip
                                variant="flat"
                                size="sm"
                                radius="lg"
                                classNames={{
                                    base: "bg-[#ff4314] group-hover:bg-white group-hover:text-[#101010]",
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
                                    base: "bg-[#e5e5e5]",
                                    content: "text-[#101010] font-medium",
                                }}
                            >
                                {b}
                            </Chip>
                        ))}
                    </div>
                    {company && year && (
                        <p className="text-sm text-[rgba(16,16,16,0.6)]">
                            {company} • {year}
                        </p>
                    )}
                    <h3 className="font-nevermind text-[27px] md:text-[36px] font-normal leading-tight text-[#101010]">
                        {title}
                    </h3>
                    {description && (
                        <p className="text-[16px] md:text-[18px] text-[rgba(16,16,16,0.6)] leading-relaxed">
                            {description}
                        </p>
                    )}
                </CardBody>
            </Card>
        </Link>
    );
}
