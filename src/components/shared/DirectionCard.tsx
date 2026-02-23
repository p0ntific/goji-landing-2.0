"use client";

import { cn } from "@heroui/react";

interface DirectionCardProps {
    title: string;
    description: string;
    image?: string;
    variant: "vertical" | "horizontal";
}

export function DirectionCard({
    title,
    description,
    image,
    variant,
}: DirectionCardProps) {
    return (
        <div
            className={cn(
                "relative flex flex-col overflow-hidden rounded-xl border border-[rgba(16,16,16,0.1)] bg-white p-4 md:p-6",
                "bg-no-repeat bg-[length:65%] md:bg-[length:100%] bg-[position:bottom_center]",
                variant === "vertical"
                    ? "h-[220px] md:h-[400px] pb-[90px] md:pb-[160px]"
                    : "h-[200px] md:h-[280px] pb-[90px] md:pb-[160px]",
            )}
            style={image ? { backgroundImage: `url(${image})` } : undefined}
        >
            <div className="relative z-10">
                <h3 className="font-nevermind text-[16px] md:text-[24px] font-normal leading-tight text-black">
                    {title}
                </h3>
                <p className="mt-1 md:mt-2 flex-1 text-[12px] md:text-[18px] text-[rgba(16,16,16,0.6)]">
                    {description}
                </p>
            </div>
        </div>
    );
}
