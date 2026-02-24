"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { IMAGES } from "@/constants/images";
import Link from "next/link";

export function Header() {
    return (
        <header className="sticky top-0 z-40 bg-white border-b border-[rgba(16,16,16,0.06)]">
            <Container>
                <div className="flex h-16 md:h-24 px-[25px] md:px-12 items-center justify-between">
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
                            className="text-[#101010] font-medium hover:opacity-80 transition-opacity"
                        >
                            Кейсы
                        </Link>
                    </nav>
                </div>
            </Container>
        </header>
    );
}
