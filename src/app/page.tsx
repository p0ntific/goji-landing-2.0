import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { DirectionsSection } from "@/components/sections/DirectionsSection";
import { ProjectsInWorkSection } from "@/components/sections/ProjectsInWorkSection";
import { CasesSection } from "@/components/sections/CasesSection";
import { LatestProjectsSection } from "@/components/sections/LatestProjectsSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { CalSection } from "@/components/sections/CalSection";
import { getCaseBySlug } from "@/lib/cases";

const ORBIT_CASE_SLUGS = [
    "ai-cosmetologist",
    "hr-platform",
    "cv-production",
] as const;

export default function Home() {
    const caseSlugs = ORBIT_CASE_SLUGS.flatMap((slug) => {
        const c = getCaseBySlug(slug);
        return c ? [c] : [];
    });

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Header />
            <main className="md:pt-20 pt-16">
                <HeroSection />
                <DirectionsSection />
                <LatestProjectsSection />
                <ProjectsInWorkSection />
                <CasesSection caseSlugs={caseSlugs} />
                <HowWeWorkSection />
                <CalSection />
            </main>
            <Footer />
        </div>
    );
}
