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
            const value = Math.min(
                100,
                Math.max(0, (scrollTop / totalScroll) * 100),
            );
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
        <div className="fixed top-20 left-0 right-0 z-50">
            <Progress
                value={progress}
                radius="none"
                disableAnimation
                classNames={{
                    track: "bg-[rgba(16,16,16,0.1)] h-2",
                    indicator: "bg-[#101010] h-2",
                }}
                aria-label="Прогресс прокрутки"
            />
        </div>
    );
}
