import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function CasesHero() {
    return (
        <Section className="w-full bg-white" id="cases-hero">
            <Container className="px-[25px] md:px-12">
                {/* Основной текст на всю ширину */}
                <div className="p-6">
                    <h1 className="font-nevermind leading-[1.3] text-[28px] md:text-[40px] lg:text-[48px] font-normal leading-[1.2] text-[#101010] max-w-[900px]">
                        Привет! Мы —{" "}
                        <span className="font-semibold text-white bg-[rgb(255,67,20)] px-4 py-2 rounded-xl">
                            студия годжи
                        </span>
                        <br />
                        Делаем веб, дизайн и AI-решения для тех, кто ценит
                        качество и внимание к деталям ✨
                    </h1>
                </div>
            </Container>
        </Section>
    );
}
