import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CaseCard } from "@/components/shared/CaseCard";
import { CASES } from "@/constants/cases";
import { CONTENT } from "@/constants/content";

export function CasesSection() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-3 gap-8">
          <div className="flex items-center justify-center">
            <CaseCard {...CASES[0]} />
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <Button variant="bordered" href={CONTENT.allCasesLink}>
              Все кейсы
            </Button>
            <CaseCard {...CASES[1]} />
          </div>
          <div className="flex items-end justify-center">
            <CaseCard {...CASES[2]} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
