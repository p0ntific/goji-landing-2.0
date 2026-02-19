import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { DirectionCard } from "@/components/shared/DirectionCard";
import { DIRECTIONS } from "@/constants/directions";

export function DirectionsSection() {
  return (
    <Section>
      <Container>
        <Heading level={2} className="mb-12">
          Основные направления
        </Heading>
        <div className="grid grid-cols-3 gap-8">
          {DIRECTIONS.map((item) => (
            <DirectionCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
