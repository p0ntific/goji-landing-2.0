import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { DirectionCard } from "@/components/shared/DirectionCard";
import { DIRECTIONS } from "@/constants/directions";

export function DirectionsSection() {
    return (
        <Section>
            <Container className="flex flex-col gap-6">
                <h2 className="font-nevermind max-w-[640px] text-[40px] font-normal leading-tight text-black">
                    Основные направления
                </h2>
                <div className="grid grid-cols-3 gap-6">
                    {DIRECTIONS.slice(0, 3).map((item, i) => (
                        <DirectionCard
                            key={item.title}
                            {...item}
                            variant="vertical"
                            seed={i}
                        />
                    ))}
                </div>
                <div className="grid grid-cols-2 gap-6">
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
