import { cn } from "@heroui/react";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function Container({ children, className }: ContainerProps) {
    return (
        <div
            className={cn(
                "mx-auto w-full max-w-[1280px]",
                className,
            )}
        >
            {children}
        </div>
    );
}
