import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { IMAGES } from "@/constants/images";
import { CONTENT } from "@/constants/content";
import Link from "next/link";

export function CalSection() {
    return (
        <Section>
            <Container className="relative rounded-[48px] overflow-hidden py-24 flex flex-col gap-6">
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
                            <h2 className="font-nevermind text-[40px] font-normal leading-tight text-white">
                                Обсудим вашу задачу — это бесплатно
                            </h2>
                            <p className="mt-8 mb-16 max-w-2xl text-[rgba(255,255,255,0.6)]">
                                Даже если вы пока не понимаете что вам нужно, мы
                                можем сами подумать как можно решить вашу задачу
                                и предложить пути решения вместе с планом
                            </p>
                            <iframe
                                src={CONTENT.calLink}
                                className="h-[500px] rounded-2xl w-[1000px] border-0"
                                title="Cal.com Scheduling"
                            />
                            <Link
                                href="#"
                                className="flex gap-5 items-center border mt-20 border-[rgba(255,255,255,0.1)] p-2 pl-4 font-medium rounded-xl text-white"
                            >
                                Обсудить в переписке
                                <Image
                                    src={IMAGES.messageIcon}
                                    alt="Message us"
                                    width={32}
                                    height={32}
                                />
                            </Link>
                        </div>
                    </Container>
                </div>
            </Container>
        </Section>
    );
}
