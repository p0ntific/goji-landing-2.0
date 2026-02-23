"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { Container } from "@/components/ui/Container";
import { IMAGES } from "@/constants/images";
import { CONTENT } from "@/constants/content";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white">
            <Container className="pb-8 pt-8 md:pb-12 md:pt-16">
                <div className="flex flex-col px-[25px] md:px-12 gap-6 md:gap-8 lg:flex-row items-start lg:items-end lg:justify-between">
                    <h1 className="font-nevermind max-w-[570px] text-[28px] md:text-[40px] font-normal leading-tight text-[#101010]">
                        Разрабатываем, поддерживаем и развиваем web & ai решения
                    </h1>
                    <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-auto">
                        <div className="flex shrink-0 gap-4">
                            <Image
                                src={IMAGES.manager}
                                alt="Егор"
                                width={52}
                                height={52}
                                className="h-10 w-10 md:h-[52px] md:w-[52px] rounded-full object-cover"
                            />
                            <div className="flex flex-col">
                                <span
                                    className="font-sans text-[16px] md:text-[18px] text-[#101010]"
                                    style={{ opacity: 0.6 }}
                                >
                                    Sales manager
                                </span>
                                <span className="font-sans text-[16px] md:text-[18px] font-medium text-[#101010]">
                                    Егор
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2">
                            <Link
                                href="#cal"
                                className="flex justify-between md:justify-start gap-3 md:gap-5 items-center border p-2 pl-3 md:pl-4 text-sm md:text-base font-medium rounded-xl bg-white text-[#101010] transition-colors duration-200 hover:bg-gray-50 hover:border-[rgba(16,16,16,0.2)]"
                                style={{ borderColor: "rgba(16, 16, 16, 0.1)" }}
                            >
                                Назначить созвон
                                <Image
                                    src={IMAGES.callIcon}
                                    alt=""
                                    width={32}
                                    height={32}
                                    className="h-7 w-7 md:h-8 md:w-8"
                                />
                            </Link>
                            <Link
                                href={CONTENT.writeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-between md:justify-start gap-3 md:gap-5 items-center border p-2 pl-3 md:pl-4 text-sm md:text-base font-medium rounded-xl bg-white text-[#101010] transition-colors duration-200 hover:bg-gray-50 hover:border-[rgba(16,16,16,0.2)]"
                                style={{ borderColor: "rgba(16, 16, 16, 0.1)" }}
                            >
                                Написать
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
                </div>

                <div className="relative md:mx-0 mt-10 md:mt-20 h-[680px] md:h-[480px] overflow-hidden rounded-2xl bg-[#000]">
                    <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-12">
                        <div>
                            <h2 className="font-nevermind max-w-[640px] text-[24px] md:text-[40px] font-normal leading-tight text-white">
                                Не перекладываем свои расходы в стоимость
                                разработки
                            </h2>
                            <p
                                className="font-sans mt-3 md:mt-4 max-w-xl text-[14px] md:text-[18px] text-white"
                                style={{ opacity: 0.6 }}
                            >
                                Нет офисов, сотрудники платят налоги
                                самостоятельно, оптимизируем время с помощью ии
                            </p>
                        </div>
                        <div className="mt-6 md:mt-8">
                            <Button
                                as="a"
                                href="#cal"
                                variant="bordered"
                                className="w-full md:w-auto text-white border-[rgba(255,255,255,0.2)] p-2 pl-3 md:pl-4 text-sm md:text-base"
                            >
                                Получить оценку проекта
                            </Button>
                        </div>
                    </div>

                    {/* Desktop background */}
                    <div className="absolute inset-0 z-1 hidden md:flex items-center justify-end">
                        <Image
                            src={IMAGES.mainBg}
                            alt=""
                            width={800}
                            height={480}
                            className="h-full w-auto max-w-full object-contain object-right"
                            sizes="(max-width: 1280px) 60vw, 800px"
                        />
                    </div>

                    {/* Mobile background */}
                    <div className="absolute inset-0 z-1 flex md:hidden items-end justify-end">
                        <Image
                            src={IMAGES.mainBgMobile}
                            alt=""
                            width={400}
                            height={520}
                            className="h-auto w-full object-contain object-right-bottom"
                            sizes="100vw"
                        />
                    </div>

                    {/* Desktop labels */}
                    <div className="pointer-events-none absolute inset-0 z-20 hidden md:block">
                        {/* Крупные студии — верхний пик графика */}
                        <div className="absolute right-[11%] top-[22%] flex flex-col justify-center items-center origin-center">
                            <span className="rounded-md bg-[#101010] border border-[rgba(255,255,255,0.2)] p-3 font-sans text-sm text-white">
                                Крупные студии
                            </span>
                            <div
                                className="h-[100px] w-[1px] bg-[rgba(255,255,255,0.2)]"
                                aria-hidden
                            />
                            <div className="h-[6px] w-[6px] bg-[rgba(255,255,255,0.2)] rounded-full" />
                        </div>
                        <div className="absolute right-[45%] bottom-[5%] flex flex-col justify-center items-center origin-center">
                            <span className="rounded-md bg-[#101010] border border-[rgba(255,255,255,0.2)] p-3 font-sans text-sm text-white">
                                Фрилансеры
                            </span>
                            <div
                                className="h-[100px] w-[1px] bg-[rgba(255,255,255,0.2)]"
                                aria-hidden
                            />
                            <div className="h-[6px] w-[6px] bg-[rgba(255,255,255,0.2)] rounded-full" />
                        </div>

                        {/* Студия goji — нижний пик (оптимальная зона) */}
                        <div className="absolute right-[27%] bottom-[18%] flex flex-col justify-center items-center origin-center">
                            <span className="rounded-md bg-[#FF4314] p-3 font-sans text-sm font-medium text-white">
                                Студия{" "}
                                <span className="font-soyuz font-bold">
                                    Годжи
                                </span>
                            </span>
                            <div
                                className="h-[100px] w-[1px] bg-[#FF4314]"
                                aria-hidden
                            />
                            <div className="h-[6px] w-[6px] bg-[#FF4314] rounded-full" />
                        </div>
                    </div>

                    {/* Mobile labels — always visible */}
                    <div className="pointer-events-none absolute inset-0 z-20 md:hidden">
                        <div className="absolute right-[36%] top-[34%] flex flex-col justify-center items-center">
                            <span className="rounded-md bg-[#101010] border border-[rgba(255,255,255,0.2)] p-2 font-sans text-xs text-white">
                                Крупные студии
                            </span>
                            <div
                                className="h-[60px] w-[1px] bg-[rgba(255,255,255,0.2)]"
                                aria-hidden
                            />
                            <div className="h-[5px] w-[5px] bg-[rgba(255,255,255,0.2)] rounded-full" />
                        </div>
                        <div className="absolute left-[6%] bottom-[30%] flex flex-col justify-center items-center">
                            <span className="rounded-md bg-[#101010] border border-[rgba(255,255,255,0.2)] p-2 font-sans text-xs text-white">
                                Фрилансеры
                            </span>
                            <div
                                className="h-[60px] w-[1px] bg-[rgba(255,255,255,0.2)]"
                                aria-hidden
                            />
                            <div className="h-[5px] w-[5px] bg-[rgba(255,255,255,0.2)] rounded-full" />
                        </div>
                        <div className="absolute right-[15%] bottom-[32%] flex flex-col justify-center items-center">
                            <span className="rounded-md bg-[#FF4314] p-2 font-sans text-xs font-medium text-white">
                                Студия{" "}
                                <span className="font-soyuz font-bold">
                                    Годжи
                                </span>
                            </span>
                            <div
                                className="h-[60px] w-[1px] bg-[#FF4314]"
                                aria-hidden
                            />
                            <div className="h-[5px] w-[5px] bg-[#FF4314] rounded-full" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
