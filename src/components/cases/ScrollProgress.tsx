"use client";

import { useEffect, useState } from "react";
import { Progress } from "@heroui/react";

export function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight;
            const innerHeight = window.innerHeight;
            const totalScroll = Math.max(1, scrollHeight - innerHeight);
            const value = Math.min(100, Math.max(0, (scrollTop / totalScroll) * 100));
            setProgress(value);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <Progress
                value={progress}
                size="md"
                radius="none"
                disableAnimation
                classNames={{
                    indicator: "bg-[#101010]",
                    track: "bg-[rgba(16,16,16,0.1)]",
                }}
                aria-label="Прогресс прокрутки"
            />
        </div>
    );
}
