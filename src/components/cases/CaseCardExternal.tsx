"use client";

import Image from "next/image";
import { cn } from "@heroui/react";
import type { CaseMeta } from "@/lib/cases";

interface CaseCardExternalProps {
    caseMeta: CaseMeta;
    className?: string;
}

export function CaseCardExternal({
    caseMeta,
    className,
}: CaseCardExternalProps) {
    const {
        title,
        description,
        externalLink,
        publicationName,
        publicationLogo,
    } = caseMeta;

    const content = (
        <div
            className={cn(
                "flex flex-col h-[400px] p-6 rounded-2xl group",
                "bg-[rgba(16,16,16,0.04)] transition-all duration-400 hover:-translate-y-2",
                "hover:bg-[rgba(16,16,16,0.06)]",
                className,
            )}
        >
            <h3 className="font-nevermind text-[25px] md:text-[32px] font-normal leading-tight text-[#101010]">
                {title}
            </h3>
            {description && (
                <p className="mt-3 text-[19px] md:text-[23px] text-[rgba(16,16,16,0.6)] flex-1 leading-relaxed">
                    {description}
                </p>
            )}
            {publicationName && (
                <div className="flex items-center gap-3 mt-auto pt-6 border-t border-[rgba(16,16,16,0.1)]">
                    {publicationLogo && (
                        <Image
                            src={publicationLogo}
                            alt={publicationName}
                            width={32}
                            height={32}
                            className="object-contain"
                        />
                    )}
                    <span className="text-[16px] md:text-[18px] text-[rgba(16,16,16,0.6)]">
                        Опубликовано в {publicationName}
                    </span>
                </div>
            )}
        </div>
    );

    if (externalLink) {
        return (
            <a
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                {content}
            </a>
        );
    }

    return content;
}
