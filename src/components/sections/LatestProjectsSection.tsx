import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { PROJECTS } from "@/constants/projects";

export function LatestProjectsSection() {
    return (
        <Section>
            <Container className="flex flex-col gap-8">
                <h2 className="font-nevermind max-w-[640px] text-[40px] font-normal leading-tight ">
                    Последние проекты
                </h2>
                <div className="flex flex-col gap-8">
                    {PROJECTS.map((project, i) => (
                        <ProjectCard key={i} {...project} />
                    ))}
                </div>
            </Container>
        </Section>
    );
}
