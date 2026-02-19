"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { IMAGES } from "@/constants/images";
import Link from "next/link";

export function Header() {
    return (
        <header className="bg-white">
            <Container>
                <div className="flex h-24 px-12 items-center">
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
                </div>
            </Container>
        </header>
    );
}
