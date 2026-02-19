import Image from "next/image";
import { cn } from "@heroui/react";

interface DirectionCardProps {
    title: string;
    description: string;
    image: string;
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
                "flex flex-col rounded-xl bg-white p-6",
                "border border-[rgba(16,16,16,0.1)]",
                variant === "vertical" ? "h-[400px]" : "h-[280px]",
            )}
        >
            <h3 className="font-nevermind text-[24px] font-normal leading-tight text-black">
                {title}
            </h3>
            <p className="mt-2 flex-1 text-[18px] text-[rgba(16,16,16,0.6)]">
                {description}
            </p>
            <div className="mt-6 flex justify-center">
                <div className="relative h-32 w-full max-w-[200px]">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
