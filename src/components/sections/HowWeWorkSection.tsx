"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { ContactCard } from "@/components/shared/ContactCard";
import { ACCORDION_ITEMS } from "@/constants/accordion";

export function HowWeWorkSection() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-2 gap-16">
          <div>
            <Heading level={2} className="mb-8">
              Как мы работаем
            </Heading>
            <ContactCard />
          </div>
          <div>
            <Accordion selectionMode="multiple" defaultExpandedKeys={["cost-estimate"]}>
              {ACCORDION_ITEMS.map((item, i) => (
                <AccordionItem
                  key={i === 1 ? "cost-estimate" : `item-${i}`}
                  aria-label={item.title}
                  title={item.title}
                  className="rounded-xl border border-gray-200 px-4"
                >
                  {item.content && (
                    <p className="text-gray-600">{item.content}</p>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </Section>
  );
}
