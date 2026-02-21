"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { TimeDisplay } from "@/components/shared/TimeDisplay";

export function ProjectsInWorkSection() {
    return (
        <Section>
            <Container>
                {/* Desktop */}
                <div className="hidden md:flex flex-col items-center text-center">
                    <TimeDisplay />
                </div>

                {/* Mobile */}
                <div className="md:hidden">
                    <TimeDisplay mobile />
                </div>
            </Container>
        </Section>
    );
}
