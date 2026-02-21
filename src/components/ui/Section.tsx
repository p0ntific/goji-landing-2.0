import { cn } from "@heroui/react";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className, id }: SectionProps) {
    return (
        <section id={id} className={cn("py-10 md:py-12", className)}>
            {children}
        </section>
    );
}
