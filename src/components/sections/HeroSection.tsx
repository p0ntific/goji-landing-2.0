"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { Container } from "@/components/ui/Container";
import { IMAGES } from "@/constants/images";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white">
            <Container className="pb-12 pt-16">
                <div className="flex flex-col px-12 gap-8 lg:flex-row lg:items-start lg:justify-between">
                    <h1 className="font-nevermind max-w-[570px] text-[40px] font-normal leading-tight text-[#101010]">
                        Разрабатываем, поддерживаем и развиваем web & ai решения
                    </h1>
                    <div className="flex flex-col gap-6">
                        <div className="flex shrink-0 gap-4">
                            <Image
                                src={IMAGES.manager}
                                alt="Егор"
                                width={52}
                                height={52}
                                className="rounded-full object-cover"
                            />
                            <div className="flex flex-col">
                                <span
                                    className="font-sans text-[18px] text-[#101010]"
                                    style={{ opacity: 0.6 }}
                                >
                                    Sales manager
                                </span>
                                <span className="font-sans text-[18px] font-medium text-[#101010]">
                                    Егор
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Link
                                href="#"
                                className="flex gap-5 items-center border p-2 pl-4 font-medium rounded-xl bg-white text-[#101010]"
                                style={{ borderColor: "rgba(16, 16, 16, 0.1)" }}
                            >
                                Назначить созвон
                                <Image
                                    src={IMAGES.callIcon}
                                    alt="Telemost"
                                    width={32}
                                    height={32}
                                />
                            </Link>
                            <Link
                                href="#"
                                className="flex gap-5 items-center border p-2 pl-4 font-medium rounded-xl bg-white text-[#101010]"
                                style={{ borderColor: "rgba(16, 16, 16, 0.1)" }}
                            >
                                Написать
                                <Image
                                    src={IMAGES.messageIcon}
                                    alt="Message us"
                                    width={32}
                                    height={32}
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="relative mt-20 h-[480px] overflow-hidden rounded-2xl bg-[#000] group">
                    <div className="relative z-10 flex h-full flex-col justify-between p-10 md:p-12">
                        <div>
                            <h2 className="font-nevermind max-w-[640px] text-[40px] font-normal leading-tight text-white">
                                Не перекладываем свои расходы в стоимость
                                разработки
                            </h2>
                            <p
                                className="font-sans mt-4 max-w-xl text-[18px] text-white"
                                style={{ opacity: 0.6 }}
                            >
                                Нет офисов, сотрудники платят налоги
                                самостоятельно, оптимизируем время с помощью ии
                            </p>
                        </div>
                        <div className="mt-8">
                            <Button
                                as="a"
                                href="#"
                                variant="bordered"
                                className="text-white border-[rgba(255,255,255,0.1)] p-4"
                            >
                                Получить оценку проекта
                            </Button>
                        </div>
                    </div>

                    <div className="absolute inset-0 z-1 flex items-center justify-end ">
                        <Image
                            src={IMAGES.mainBg}
                            alt=""
                            width={800}
                            height={480}
                            className="h-full w-auto max-w-full object-contain object-right"
                            sizes="(max-width: 1280px) 60vw, 800px"
                        />
                    </div>

                    <div className="pointer-events-none absolute inset-0 z-20 ">
                        {/* Крупные студии — верхний пик графика */}
                        <div className="absolute right-[11%] top-[22%] flex flex-col justify-center items-center">
                            <span className="rounded-md group-hover:scale-105 delay-100 transition-all bg-[#101010] border border-[rgba(255,255,255,0.2)] p-3 font-sans text-sm text-white">
                                Крупные студии
                            </span>
                            <div
                                className="h-[100px] w-[1px] bg-[rgba(255,255,255,0.2)]"
                                aria-hidden
                            />
                            <div className="h-[6px] w-[6px] bg-[rgba(255,255,255,0.2)] rounded-full"></div>
                        </div>
                        <div className="absolute right-[45%] bottom-[5%] flex flex-col justify-center items-center">
                            <span className="rounded-md group-hover:scale-105 delay-300 transition-all bg-[#101010] border border-[rgba(255,255,255,0.2)] p-3 font-sans text-sm text-white">
                                Фрилансеры
                            </span>
                            <div
                                className="h-[100px] w-[1px] bg-[rgba(255,255,255,0.2)]"
                                aria-hidden
                            />
                            <div className="h-[6px] w-[6px] bg-[rgba(255,255,255,0.2)] rounded-full"></div>
                        </div>

                        {/* Студия goji — нижний пик (оптимальная зона) */}
                        <div className="absolute right-[27%] bottom-[18%] flex flex-col justify-center items-center">
                            <span className="rounded-md group-hover:scale-105 delay-500 transition-all bg-[#FF4314] p-3 font-sans text-sm font-medium text-white">
                                Студия{" "}
                                <span className="font-soyuz font-bold">
                                    Годжи
                                </span>
                            </span>
                            <div
                                className="h-[100px] w-[1px] bg-[#FF4314]"
                                aria-hidden
                            />
                            <div className="h-[6px] w-[6px] bg-[#FF4314] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
