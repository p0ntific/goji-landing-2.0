import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@heroui/react";

interface ProjectCardProps {
    headline: string;
    description: string;
    image: string;
    caseLink: string;
}

export function ProjectCard({
    headline,
    description,
    image,
    caseLink,
}: ProjectCardProps) {
    return (
        <div
            className={cn(
                "flex gap-8 rounded-2xl h-[420px] overflow-hidden border border-gray-200 bg-white ",
                "shadow-sm",
            )}
        >
            <div className="relative h-full w-[540px] shrink-0 overflow-hidden">
                <Image
                    src={image}
                    alt={headline}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-1 flex-col p-[60px] justify-center">
                <h2 className="font-nevermind text-[24px] font-normal leading-tight ">
                    {headline}
                </h2>
                <p className="mt-2 text-[rgba(16,16,16,0.6)] text-[18px]">
                    {description}
                </p>
                <div className="mt-auto">
                    <Button variant="bordered" href={caseLink}>
                        Читать кейс
                    </Button>
                </div>
            </div>
        </div>
    );
}
