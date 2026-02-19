import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { IMAGES } from "@/constants/images";
import { CONTENT } from "@/constants/content";

export function CalSection() {
  return (
    <Section className="relative overflow-hidden py-24">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.calBackground}
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10">
        <Container>
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Обсудим вашу задачу — это бесплатно
            </h2>
            <p className="mb-12 max-w-2xl text-gray-200">
              Даже если вы пока не понимаете что вам нужно, мы можем сами
              подумать как можно решить вашу задачу и предложить пути решения
              вместе с планом
            </p>
            <div className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white/5 backdrop-blur">
              <iframe
                src={CONTENT.calLink}
                className="h-[700px] w-full border-0"
                title="Cal.com Scheduling"
              />
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
