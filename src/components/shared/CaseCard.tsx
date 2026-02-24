import Image from "next/image";
import Link from "next/link";
import { cn } from "@heroui/react";

interface CaseCardProps {
    title: string;
    image: string;
    href?: string;
    className?: string;
    mobile?: boolean;
}

export function CaseCard({ title, image, href, className, mobile }: CaseCardProps) {
    const content = (
        <div className={cn("flex cursor-pointer group flex-col transition-transform duration-200 hover:-translate-y-1", className)}>
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
                "mt-3 text-center font-nevermind font-normal text-[#101010]",
                mobile ? "text-base" : "mt-4 text-lg",
            )}>
                {title}
            </p>
        </div>
    );

    if (href) {
        return (
            <Link href={href} className="block">
                {content}
            </Link>
        );
    }
    return content;
}
