"use client";

import { cn } from "@heroui/react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "bordered";
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "secondary",
  className,
  href,
  onClick,
}: ButtonProps) {
  const variantClasses = {
    primary: "bg-[#1A1A1A] text-white",
    secondary:
      "bg-gray-100 text-[#1A1A1A] border border-gray-200 hover:bg-gray-200",
    bordered:
      "bg-transparent border border-gray-300 text-[#1A1A1A] hover:bg-gray-50",
  };

  const baseClasses =
    "rounded-xl px-6 py-3 font-medium transition-colors";

  if (href) {
    return (
      <a
        href={href}
        className={cn(
          "inline-flex items-center justify-center",
          baseClasses,
          variantClasses[variant],
          className
        )}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
    >
      {children}
    </button>
  );
}
