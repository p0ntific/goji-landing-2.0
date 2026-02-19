"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CaseCard } from "@/components/shared/CaseCard";
import { CASES } from "@/constants/cases";
import { CONTENT } from "@/constants/content";

const ORBIT_DEGREES = 30;
const CARD_SIZE = 280;
const CARD_HALF = CARD_SIZE / 2;

// Полярные координаты карточек относительно центра кнопки (угол в градусах, радиус в px)
const CARD_ORBITS = [
    { angleDeg: 203, radius: 539 },
    { angleDeg: -18, radius: 525 },
    { angleDeg: 132, radius: 447 },
] as const;

function polarToXY(angleDeg: number, radius: number) {
    const rad = (angleDeg * Math.PI) / 180;
    return {
        x: radius * Math.cos(rad),
        y: radius * Math.sin(rad),
    };
}

export function CasesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 25,
        restDelta: 0.001,
    });

    const rotation = useTransform(smoothProgress, [0, 1], [0, ORBIT_DEGREES]);
    const counterRotation = useTransform(rotation, (v) => -v);

    return (
        <Section>
            <div ref={sectionRef}>
                <Container className="relative flex flex-col items-center w-full min-h-[900px] overflow-visible">
                    {/* Статичная кнопка по центру */}
                    <div className="flex flex-col items-center mt-[450px] mb-[600px] z-10">
                        <Button
                            variant="bordered"
                            href={CONTENT.allCasesLink}
                        >
                            Все кейсы
                        </Button>
                    </div>

                    {/* Орбитальный контейнер — вращается вокруг центра кнопки */}
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            rotate: rotation,
                            transformOrigin: "50% 480px",
                        }}
                    >
                        {CARD_ORBITS.map((orbit, i) => {
                            const { x, y } = polarToXY(
                                orbit.angleDeg,
                                orbit.radius,
                            );
                            return (
                                <motion.div
                                    key={i}
                                    className="absolute pointer-events-auto"
                                    style={{
                                        left: `calc(50% + ${x - CARD_HALF}px)`,
                                        top: `calc(480px + ${y - CARD_HALF}px)`,
                                        rotate: counterRotation,
                                    }}
                                >
                                    <CaseCard {...CASES[i]} />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </Container>
            </div>
        </Section>
    );
}
