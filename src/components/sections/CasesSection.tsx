"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CaseCard } from "@/components/shared/CaseCard";
import { CONTENT } from "@/constants/content";
import type { CaseMeta } from "@/lib/cases";

const ORBIT_DEGREES = 30;
const CARD_SIZE = 280;
const CARD_HALF = CARD_SIZE / 2;

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

// Mobile: cards start at natural position, slide 150px in their direction on scroll
const MOBILE_SHIFT = 100; // px

interface CasesSectionProps {
    caseSlugs: CaseMeta[];
}

export function CasesSection({ caseSlugs }: CasesSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const mobileSectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const { scrollYProgress: mobileScrollY } = useScroll({
        target: mobileSectionRef,
        offset: ["start end", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 25,
        restDelta: 0.001,
    });

    const mobileSmooth = useSpring(mobileScrollY, {
        stiffness: 80,
        damping: 25,
        restDelta: 0.001,
    });

    const rotation = useTransform(smoothProgress, [0, 1], [0, ORBIT_DEGREES]);
    const counterRotation = useTransform(rotation, (v) => -v);

    // Mobile card horizontal shift based on scroll: left cards +150px, right cards -150px
    const card0X = useTransform(mobileSmooth, [0, 0.5], [0, MOBILE_SHIFT]);
    const card1X = useTransform(mobileSmooth, [0.1, 0.6], [0, -MOBILE_SHIFT]);
    const card2X = useTransform(mobileSmooth, [0.2, 0.7], [0, MOBILE_SHIFT]);
    const mobileCardX = [card0X, card1X, card2X];

    return (
        <Section>
            {/* Mobile layout */}
            <div ref={mobileSectionRef} className="md:hidden">
                <Container className="flex flex-col gap-6 px-[25px]">
                    <div className="flex flex-col gap-6 w-full">
                        {caseSlugs.slice(0, 3).map((c, i) => (
                            <motion.div
                                key={c.slug}
                                className={`w-[70%] ${i % 2 === 0 ? "self-start" : "self-end"}`}
                                style={{ x: mobileCardX[i] }}
                            >
                                <CaseCard
                                    title={c.title}
                                    image={c.image ?? "/case-01.png"}
                                    href={`/cases/${c.slug}`}
                                    mobile
                                />
                            </motion.div>
                        ))}
                    </div>
                    <Button
                        variant="bordered"
                        href={CONTENT.allCasesLink}
                        className="w-full text-center"
                    >
                        Все кейсы
                    </Button>
                </Container>
            </div>

            {/* Desktop layout */}
            <div ref={sectionRef} className="hidden md:block">
                <Container className="relative flex flex-col items-center w-full min-h-[900px] overflow-visible">
                    <div className="flex flex-col items-center mt-[450px] mb-[600px] z-10">
                        <Button variant="bordered" href={CONTENT.allCasesLink}>
                            Все кейсы
                        </Button>
                    </div>

                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            rotate: rotation,
                            transformOrigin: "50% 480px",
                        }}
                    >
                        {CARD_ORBITS.map((orbit, i) => {
                            const c = caseSlugs[i];
                            if (!c) return null;
                            const { x, y } = polarToXY(
                                orbit.angleDeg,
                                orbit.radius,
                            );
                            return (
                                <motion.div
                                    key={c.slug}
                                    className="absolute pointer-events-auto cursor-target"
                                    style={{
                                        left: `calc(50% + ${x - CARD_HALF}px)`,
                                        top: `calc(480px + ${y - CARD_HALF}px)`,
                                        rotate: counterRotation,
                                    }}
                                >
                                    <CaseCard
                                        title={c.title}
                                        image={c.image ?? "/case-01.png"}
                                        href={`/cases/${c.slug}`}
                                    />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </Container>
            </div>
        </Section>
    );
}
