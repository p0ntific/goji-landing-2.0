import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { DirectionCard } from "@/components/shared/DirectionCard";
import { DIRECTIONS } from "@/constants/directions";

export function DirectionsSection() {
    return (
        <Section>
            <Container className="px-[25px] md:px-12 flex flex-col gap-4 md:gap-6">
                <h2 className="font-nevermind max-w-[640px] text-[28px] md:text-[40px] font-normal leading-tight text-black">
                    Основные направления
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {DIRECTIONS.slice(0, 3).map((item, i) => (
                        <DirectionCard
                            key={item.title}
                            {...item}
                            variant="vertical"
                            seed={i}
                        />
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {DIRECTIONS.slice(3, 6).map((item, i) => (
                        <DirectionCard
                            key={item.title}
                            {...item}
                            variant="horizontal"
                            seed={i + 3}
                        />
                    ))}
                </div>
            </Container>
        </Section>
    );
}
