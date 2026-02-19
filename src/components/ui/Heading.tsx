import { cn } from "@heroui/react";

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
}

export function Heading({ children, level = 2, className }: HeadingProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3";
  const sizeClasses = {
    1: "text-4xl md:text-5xl font-bold",
    2: "text-3xl md:text-4xl font-bold",
    3: "text-xl md:text-2xl font-semibold",
  };
  return (
    <Tag
      className={cn(
        "text-[#1A1A1A] font-sans",
        sizeClasses[level],
        className
      )}
    >
      {children}
    </Tag>
  );
}
