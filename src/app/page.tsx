import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { DirectionsSection } from "@/components/sections/DirectionsSection";
import { ProjectsInWorkSection } from "@/components/sections/ProjectsInWorkSection";
import { CasesSection } from "@/components/sections/CasesSection";
import { LatestProjectsSection } from "@/components/sections/LatestProjectsSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { CalSection } from "@/components/sections/CalSection";

export default function Home() {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Header />
            <main>
                <HeroSection />
                <DirectionsSection />
                <LatestProjectsSection />
                <ProjectsInWorkSection />
                <CasesSection />
                <HowWeWorkSection />
                <CalSection />
            </main>
            <Footer />
        </div>
    );
}
