import { cn } from "@heroui/react";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function Container({ children, className }: ContainerProps) {
    return (
        <div
            className={cn(
                "mx-auto w-full md:min-w-[1280px] max-w-[1280px] px-6",
                className,
            )}
        >
            {children}
        </div>
    );
}
