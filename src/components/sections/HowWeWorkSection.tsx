"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ACCORDION_ITEMS } from "@/constants/accordion";
import Image from "next/image";
import { IMAGES } from "@/constants/images";
import Link from "next/link";

export function HowWeWorkSection() {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <Section>
            <Container className="px-12">
                <div className="grid grid-cols-2 gap-16 h-[580px]">
                    <div className="flex flex-col gap-6 justify-between">
                        <h2 className="font-nevermind max-w-[640px] text-[40px] font-normal leading-tight ">
                            Как мы работаем
                        </h2>
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
                                    style={{
                                        borderColor: "rgba(16, 16, 16, 0.1)",
                                    }}
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
                                    style={{
                                        borderColor: "rgba(16, 16, 16, 0.1)",
                                    }}
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
                    <div
                        className="flex flex-col rounded-xl border h-full overflow-hidden"
                        style={{ borderColor: "rgba(16, 16, 16, 0.1)" }}
                    >
                        {ACCORDION_ITEMS.map((item, i) => {
                            const isActive = activeIndex === i;
                            const prevActive = activeIndex === i + 1;

                            return (
                                <div
                                    key={i}
                                    className={`flex flex-col min-h-0 overflow-hidden transition-[flex] duration-300 ease-in-out ${isActive ? "rounded-xl border border-[#101010]" : ""}`}
                                    style={{
                                        flex: isActive ? "1 1 0%" : "0 0 auto",
                                    }}
                                >
                                    {i > 0 && !isActive && !prevActive && (
                                        <div className="rounded-xl shrink-0" />
                                    )}
                                    <button
                                        onClick={() =>
                                            setActiveIndex(isActive ? -1 : i)
                                        }
                                        style={
                                            i < ACCORDION_ITEMS.length - 1 &&
                                            !prevActive &&
                                            !isActive
                                                ? {
                                                      borderRadius: "12px",
                                                      borderBottom:
                                                          "1px solid rgba(16, 16, 16, 0.1)",
                                                  }
                                                : {}
                                        }
                                        className="flex items-center justify-between w-full h-[90px] shrink-0 px-5 cursor-pointer"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="text-[#101010] opacity-40 font-sans text-[16px] tabular-nums">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <span className="font-sans text-[18px] text-[#101010]">
                                                {item.title}
                                            </span>
                                        </div>
                                        <span className="text-[#101010] text-[28px] font-extralight leading-none select-none">
                                            {isActive ? "−" : "+"}
                                        </span>
                                    </button>
                                    {isActive && item.content && (
                                        <p className="text-[#101010] opacity-60 text-[16px] px-5 pl-[52px]">
                                            {item.content}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
