import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CalEmbed } from "@/components/shared/CalEmbed";
import { IMAGES } from "@/constants/images";
import { CONTENT } from "@/constants/content";
import Link from "next/link";

export function CalSection() {
    return (
        <Section id="cal">
            <Container className="relative dark-cursor rounded-3xl md:rounded-[48px] overflow-hidden py-12 md:py-24 flex flex-col gap-6">
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
                        <div className="flex flex-col items-start md:items-center text-left md:text-center">
                            <div className="px-[25px] md:px-0">
                                <h2 className="font-nevermind text-[24px] md:text-[40px] font-normal leading-tight text-white">
                                    Обсудим вашу задачу — это бесплатно
                                </h2>
                                <p className="mt-4 md:mt-8 mb-8 md:mb-16 max-w-2xl text-sm md:text-base text-[rgba(255,255,255,0.6)]">
                                    Даже если вы пока не понимаете что вам
                                    нужно, мы можем сами подумать как можно
                                    решить вашу задачу и предложить пути решения
                                    вместе с планом
                                </p>
                            </div>
                            <CalEmbed calLink={CONTENT.calLink} />
                            <p className=" mt-4 text-xs md:text-sm text-[rgba(255,255,255,0.4)] text-center max-w-2xl px-[25px] md:px-0">
                                Создавая встречу, вы соглашаетесь на{" "}
                                <a
                                    href="/documents/Согласие_на_обработку_персональных_данных1.docx"
                                    className="cursor-target underline hover:text-[rgba(255,255,255,0.6)] transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    обработку персональных данных
                                </a>
                            </p>
                            <div className="px-[25px] md:px-0 w-full md:w-auto">
                                <Link
                                    href={CONTENT.writeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-target flex justify-between md:justify-start w-full md:w-auto gap-3 md:gap-5 items-center border mt-10 md:mt-20 border-[rgba(255,255,255,0.1)] p-2 pl-3 md:pl-4 text-sm md:text-base font-medium rounded-xl text-white transition-colors duration-200 hover:bg-white/10 hover:border-white/20"
                                >
                                    Обсудить в переписке
                                    <Image
                                        src={IMAGES.messageIcon}
                                        alt=""
                                        width={32}
                                        height={32}
                                        className="h-7 w-7 md:h-8 md:w-8"
                                    />
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </Container>
        </Section>
    );
}
