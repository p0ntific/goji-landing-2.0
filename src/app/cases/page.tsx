import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CasesGrid } from "@/components/cases/CasesGrid";
import { getCases } from "@/lib/cases";

export const metadata = {
    title: "Кейсы",
    description:
        "Кейсы и проекты студии годжи — веб-разработка, AI решения, дизайн",
};

export default function CasesPage() {
    const cases = getCases();

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Header />
            <main className="md:pt-20 pt-16">
                <Section>
                    <Container className="px-[25px] md:px-12">
                        <div className="mb-8 md:mb-10">
                            <p className="font-nevermind text-[24px] md:text-[32px] font-normal leading-tight text-[#101010] max-w-[560px]">
                                Привет! Мы — студия годжи. Разрабатываем веб и
                                AI решения: от сайтов до нейросетей и аналитики.
                            </p>
                            <div className="mt-4 p-5 rounded-2xl bg-[rgba(16,16,16,0.04)] border border-[rgba(16,16,16,0.08)] max-w-[560px]">
                                <p className="text-[16px] md:text-[18px] text-[rgba(16,16,16,0.8)] leading-relaxed">
                                    Ниже — наши кейсы и проекты. Каждый
                                    рассказывает, как мы решали задачи клиентов
                                    и что из этого вышло.
                                </p>
                            </div>
                        </div>
                        <CasesGrid cases={cases} />
                    </Container>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
