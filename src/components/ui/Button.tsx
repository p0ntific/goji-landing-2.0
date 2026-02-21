"use client";

import { cn } from "@heroui/react";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "bordered";
    className?: string;
    isDisabled?: boolean;
    href?: string;
    onClick?: () => void;
}

export function Button({
    children,
    variant = "secondary",
    className,
    isDisabled,
    href,
    onClick,
}: ButtonProps) {
    const variantClasses = {
        primary: isDisabled
            ? "bg-[#1A1A1A] text-white opacity-50"
            : "bg-[#1A1A1A] text-white",
        secondary: isDisabled
            ? "bg-gray-100 text-[#1A1A1A] border border-gray-200 opacity-50"
            : "bg-gray-100 text-[#1A1A1A] border border-gray-200 hover:bg-gray-200",
        bordered: isDisabled
            ? "bg-transparent border border-gray-300 text-[#1A1A1A] opacity-50"
            : "bg-transparent border border-gray-300 text-[#1A1A1A] hover:bg-gray-50",
    };

    const baseClasses =
        "rounded-xl px-6 py-3 font-medium transition-colors" +
        (isDisabled ? " cursor-not-allowed" : "");

    if (href) {
        return (
            <a
                href={isDisabled ? "#" : href}
                className={cn(
                    "inline-flex items-center justify-center",
                    baseClasses,
                    variantClasses[variant],
                    className,
                )}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type="button"
            disabled={isDisabled}
            onClick={onClick}
            className={cn(baseClasses, variantClasses[variant], className)}
        >
            {children}
        </button>
    );
}
