import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { TimeDisplay } from "@/components/shared/TimeDisplay";

export function ProjectsInWorkSection() {
    return (
        <Section>
            <Container>
                <div className="flex flex-col items-center text-center">
                    <TimeDisplay />
                </div>
            </Container>
        </Section>
    );
}
