"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { IMAGES } from "@/constants/images";
import Link from "next/link";

export function Header() {
    return (
        <header className="fixed w-full left-0 right-0 top-0 z-40 bg-white border-b border-[rgba(16,16,16,0.06)]">
            <Container>
                <div className="flex h-16 md:h-20 px-[25px] md:px-12 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src={IMAGES.logo}
                            alt="Годжи"
                            width={40}
                            height={40}
                            className="h-10 w-10 shrink-0 object-contain"
                        />
                        <span className="font-soyuz text-[40px] font-bold text-[#101010]">
                            годжи
                        </span>
                    </Link>
                    <nav>
                        <Link
                            href="/cases"
                            className="cursor-target group inline-flex items-center gap-2
                 text-[#101010] font-medium text-lg
                 hover:opacity-70
                 transition-opacity duration-200"
                        >
                            {/* Звезда */}
                            <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
                            </svg>

                            <span>Портфолио</span>
                        </Link>
                    </nav>
                </div>
            </Container>
        </header>
    );
}
