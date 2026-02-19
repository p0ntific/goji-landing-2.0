import Image from "next/image";
import { cn } from "@heroui/react";

interface CaseCardProps {
    title: string;
    image: string;
    className?: string;
}

export function CaseCard({ title, image, className }: CaseCardProps) {
    return (
        <div className={cn("flex cursor-pointer group flex-col", className)}>
            <div className="relative aspect-square w-[280px] h-[280px]">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-2xl w-[280px] h-[280px]"
                />
            </div>
            <p className="mt-4 text-center text-lg font-light text-[#1A1A1A]">
                {title}
            </p>
        </div>
    );
}
