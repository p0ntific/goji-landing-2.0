"use client";

import { useEffect, useState } from "react";

const CX = 330;
const CY = 292;
const SVG_SIZE_X = 660;
const SVG_SIZE_Y = 584;
const CENTER_R = 13; // 26px / 2
const HAND_FORWARD = 210; // forward from center
const HAND_TAIL = 35; // tail behind center

export function TimeDisplay() {
    const [date, setDate] = useState(() => new Date());

    useEffect(() => {
        const interval = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const moscowDate = new Date(
        date.toLocaleString("en-US", { timeZone: "Europe/Moscow" }),
    );
    const hours = moscowDate.getHours();
    const minutes = moscowDate.getMinutes();
    const seconds = moscowDate.getSeconds();

    const secondAngle = seconds * 6;

    const hoursStr = String(hours).padStart(2, "0");
    const minutesStr = String(minutes).padStart(2, "0");

    // Convert clock angle (0° = 12 o'clock) to SVG coords
    const toXY = (angleDeg: number, r: number) => {
        const rad = ((angleDeg - 90) * Math.PI) / 180;
        return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
    };

    const handTip = toXY(secondAngle, HAND_FORWARD);
    const handTail = toXY(secondAngle + 180, HAND_TAIL);

    return (
        <div className="flex flex-col items-center gap-3 relative">
            <svg
                width={SVG_SIZE_X}
                height={SVG_SIZE_Y}
                viewBox={`0 0 ${SVG_SIZE_X} ${SVG_SIZE_Y}`}
                aria-hidden
            >
                {/* 4 gray lines on all sides: 54px → 245px from center */}
                <line
                    x1={CX}
                    y1={CY - 245}
                    x2={CX}
                    y2={CY - 300}
                    stroke="#D1D5DB"
                    strokeWidth={2}
                />
                <line
                    x1={CX + 245}
                    y1={CY}
                    x2={CX + 300}
                    y2={CY}
                    stroke="#D1D5DB"
                    strokeWidth={2}
                />
                <line
                    x1={CX}
                    y1={CY + 245}
                    x2={CX}
                    y2={CY + 300}
                    stroke="#D1D5DB"
                    strokeWidth={2}
                />
                <line
                    x1={CX - 245}
                    y1={CY}
                    x2={CX - 300}
                    y2={CY}
                    stroke="#D1D5DB"
                    strokeWidth={2}
                />

                {/* Black line UP: gap 20px, ends at 65px from center */}
                <line
                    x1={CX}
                    y1={CY - 60}
                    x2={CX}
                    y2={CY - 185}
                    stroke="#101010"
                    strokeWidth={4}
                />
                {/* Black line LEFT: gap 20px, ends at 65px from center */}
                <line
                    x1={CX - 60}
                    y1={CY}
                    x2={CX - 185}
                    y2={CY}
                    stroke="#101010"
                    strokeWidth={4}
                />

                {/* Second hand — large, protrudes behind center */}
                <line
                    x1={handTail.x}
                    y1={handTail.y}
                    x2={handTip.x}
                    y2={handTip.y}
                    stroke="#3B82F6"
                    strokeWidth={2}
                    strokeLinecap="round"
                />

                {/* Center dot 26×26 */}
                <circle cx={CX} cy={CY} r={CENTER_R} fill="#3B82F6" />
            </svg>

            {/* Moscow + digital time */}
            <div className="flex flex-col w-[730px]  items-center z-10 gap-12 absolute top-1/2 -translate-y-1/3 left-1/2 -translate-x-1/2">
                <h2 className="font-nevermind text-[40px] leading-[80px] font-normal ">
                    Проекты над которыми мы работаем в настоящее время
                </h2>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">Moscow</span>
                    <span className="rounded-lg border bg-white border-gray-200 px-2.5 py-1.5 font-mono text-base font-semibold text-[#1A1A1A]">
                        {hoursStr}
                    </span>
                    <span className="font-mono text-base font-semibold text-[#1A1A1A]">
                        :
                    </span>
                    <span className="rounded-lg border bg-white border-gray-200 px-2.5 py-1.5 font-mono text-base font-semibold text-[#1A1A1A]">
                        {minutesStr}
                    </span>
                </div>
            </div>
        </div>
    );
}
