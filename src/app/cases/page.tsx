import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CasesGrid } from "@/components/cases/CasesGrid";
import { CasesHero } from "@/components/cases/CasesHero";
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
                <CasesHero />
                <Section className="pt-0">
                    <Container className="px-[25px] md:px-12">
                        <CasesGrid cases={cases} />
                    </Container>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
