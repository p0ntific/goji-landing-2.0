import Image from "next/image";
import { cn } from "@heroui/react";

interface CaseCardProps {
    title: string;
    image: string;
    className?: string;
    mobile?: boolean;
}

export function CaseCard({ title, image, className, mobile }: CaseCardProps) {
    return (
        <div className={cn("flex cursor-pointer group flex-col", className)}>
            <div
                className={cn(
                    "relative aspect-square",
                    mobile ? "w-full h-auto" : "w-[280px] h-[280px]",
                )}
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    className={cn(
                        "object-cover group-hover:scale-105 transition-transform duration-300 rounded-2xl",
                        !mobile && "w-[280px] h-[280px]",
                    )}
                />
            </div>
            <p className={cn(
                "mt-3 text-center font-light text-[#1A1A1A]",
                mobile ? "text-base" : "mt-4 text-lg",
            )}>
                {title}
            </p>
        </div>
    );
}
