import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { TimeDisplay } from "@/components/shared/TimeDisplay";

export function ProjectsInWorkSection() {
    return (
        <Section>
            <Container>
                <div className="flex flex-col items-center text-center">
                    <div className="relative inline-block">
                        <h2 className="text-3xl font-bold leading-tight text-[#1A1A1A] md:text-4xl">
                            Проекты над которыми мы работаем
                        </h2>
                        <div className="mx-auto mt-2 h-px w-[85%] bg-gray-200" />
                        <h2 className="mt-1 text-3xl font-bold leading-tight text-[#1A1A1A] md:text-4xl">
                            в настоящее время
                        </h2>
                    </div>
                    <div className="mt-8">
                        <TimeDisplay />
                    </div>
                </div>
            </Container>
        </Section>
    );
}
