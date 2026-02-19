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
                "flex flex-col rounded-xl border border-[rgba(16,16,16,0.1)] bg-white p-6",
                "bg-no-repeat bg-size-[100%] bg-position-[bottom_center]",
                variant === "vertical"
                    ? "h-[400px] pb-[160px]"
                    : "h-[280px] pb-[160px]",
            )}
            style={{ backgroundImage: `url(${image})` }}
        >
            <h3 className="font-nevermind text-[24px] font-normal leading-tight text-black">
                {title}
            </h3>
            <p className="mt-2 flex-1 text-[18px] text-[rgba(16,16,16,0.6)]">
                {description}
            </p>
        </div>
    );
}
