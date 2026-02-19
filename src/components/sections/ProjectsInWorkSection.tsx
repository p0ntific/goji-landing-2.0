import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { TimeDisplay } from "@/components/shared/TimeDisplay";

export function ProjectsInWorkSection() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center text-center">
          <div className="relative inline-block">
            <div className="absolute left-1/2 -top-6 h-6 w-px -translate-x-1/2 bg-gray-300" />
            <h2 className="text-3xl font-bold leading-tight text-[#1A1A1A] md:text-4xl">
              Проекты над которыми мы работаем
            </h2>
            <div className="mx-auto mt-2 h-px w-[85%] bg-gray-200" />
            <h2 className="mt-1 text-3xl font-bold leading-tight text-[#1A1A1A] md:text-4xl">
              в настоящее время
            </h2>
            <div className="absolute -bottom-6 left-1/2 h-6 w-px -translate-x-1/2 bg-gray-300" />
            <div className="absolute right-8 top-6 h-1.5 w-1.5 rounded-full bg-blue-500" />
            <div
              className="absolute right-4 top-8 h-20 w-px bg-blue-200"
              style={{ transform: "rotate(45deg)", transformOrigin: "top right" }}
            />
          </div>
          <div className="mt-8">
            <TimeDisplay />
          </div>
        </div>
      </Container>
    </Section>
  );
}
