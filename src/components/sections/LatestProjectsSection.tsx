import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { PROJECTS } from "@/constants/projects";

export function LatestProjectsSection() {
    return (
        <Section>
            <Container className="flex flex-col gap-6 md:gap-8 px-4 md:px-12">
                <h2 className="font-nevermind max-w-[640px] text-[28px] md:text-[40px] font-normal leading-tight">
                    Последние проекты
                </h2>
                <div className="flex flex-col gap-6 md:gap-8">
                    {PROJECTS.map((project, i) => (
                        <ProjectCard key={i} {...project} />
                    ))}
                </div>
            </Container>
        </Section>
    );
}
