"use client";

import { Container } from "@/components/ui/Container";
import { CONTENT } from "@/constants/content";
import { IMAGES } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="border-t border-gray-200 bg-white py-8 md:py-12">
            <Container className="px-[25px] md:px-12">
                {/* Desktop layout */}
                <div className="hidden md:grid grid-cols-[1fr_auto] gap-8 items-stretch">
                    <div className="flex flex-col gap-6">
                        <div className="flex h-24 items-center">
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
                        <div className="rounded-2xl border max-w-[400px] flex flex-col gap-2 border-gray-200 bg-white p-6">
                            <p className="font-semibold text-[#1A1A1A]">
                                {CONTENT.footer.companyName}
                            </p>
                            <p className="mt-2 text-sm text-gray-500">
                                {CONTENT.footer.address}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                {CONTENT.footer.phone}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 justify-between pt-8 text-right">
                        <p className="text-sm text-gray-500">
                            {CONTENT.footer.copyright}
                        </p>
                        <a
                            href={CONTENT.privacyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-600 underline hover:text-gray-800"
                        >
                            {CONTENT.footer.privacy}
                        </a>
                    </div>
                </div>

                {/* Mobile layout */}
                <div className="flex flex-col gap-6 md:hidden">
                    <div className="flex h-16 items-center">
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

                    <div className="flex flex-col gap-2">
                        <p className="text-sm text-gray-500">
                            {CONTENT.footer.copyright}
                        </p>
                        <a
                            href={CONTENT.privacyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-600 underline hover:text-gray-800"
                        >
                            {CONTENT.footer.privacy}
                        </a>
                    </div>

                    <div className="rounded-2xl border max-w-[400px] flex flex-col gap-2 border-gray-200 bg-white p-4">
                        <p className="font-semibold text-[#1A1A1A]">
                            {CONTENT.footer.companyName}
                        </p>
                        <p className="mt-2 text-sm text-gray-500">
                            {CONTENT.footer.address}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                            {CONTENT.footer.phone}
                        </p>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="flex justify-between items-center border p-3 text-sm font-medium rounded-xl bg-white text-[#101010] cursor-pointer transition-colors duration-200 hover:bg-gray-50 hover:border-[rgba(16,16,16,0.2)]"
                        style={{ borderColor: "rgba(16, 16, 16, 0.1)" }}
                    >
                        Вернуться наверх
                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#101010]">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 16V4M10 4L4 10M10 4L16 10"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    </button>
                </div>
            </Container>
        </footer>
    );
}
