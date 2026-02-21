"use client";

import { cn } from "@heroui/react";
import dynamic from "next/dynamic";
const FaultyTerminal = dynamic(
    () => import("@/components/ui/FaultyTerminal").then((m) => m.default),
    { ssr: false },
);

interface DirectionCardProps {
    title: string;
    description: string;
    image?: string;
    variant: "vertical" | "horizontal";
    seed?: number;
}

export function DirectionCard({
    title,
    description,
    image,
    variant,
    seed = 0,
}: DirectionCardProps) {
    return (
        <div
            className={cn(
                "group relative flex flex-col overflow-hidden rounded-xl border border-[rgba(16,16,16,0.1)] bg-white p-4 md:p-6",
                "bg-no-repeat bg-[length:65%] md:bg-[length:100%] bg-[position:bottom_center]",
                variant === "vertical"
                    ? "h-[220px] md:h-[400px] pb-[90px] md:pb-[160px]"
                    : "h-[200px] md:h-[280px] pb-[90px] md:pb-[160px]",
            )}
            style={image ? { backgroundImage: `url(${image})` } : undefined}
        >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <FaultyTerminal
                    seed={seed}
                    scale={1.1}
                    gridMul={[1, 0.55]}
                    digitSize={1.2}
                    timeScale={0.25}
                    scanlineIntensity={0.2}
                    glitchAmount={0.8}
                    flickerAmount={0.7}
                    curvature={0.08}
                    tint="#22c55e"
                    mouseReact={true}
                    mouseStrength={0.15}
                    pageLoadAnimation={false}
                    brightness={0.5}
                    className="rounded-xl"
                />
            </div>
            <div className="relative z-10 group-hover:text-white">
                <h3 className="font-nevermind text-[16px] md:text-[24px] font-normal leading-tight text-black group-hover:text-white">
                    {title}
                </h3>
                <p className="mt-1 md:mt-2 flex-1 text-[12px] md:text-[18px] text-[rgba(16,16,16,0.6)] group-hover:text-white/90">
                    {description}
                </p>
            </div>
        </div>
    );
}
