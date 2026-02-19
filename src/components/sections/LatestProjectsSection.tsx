import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { PROJECTS } from "@/constants/projects";

export function LatestProjectsSection() {
  return (
    <Section>
      <Container>
        <Heading level={2} className="mb-12">
          Последние проекты
        </Heading>
        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
