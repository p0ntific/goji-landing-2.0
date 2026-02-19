import { Container } from "@/components/ui/Container";
import { CONTENT } from "@/constants/content";
import { IMAGES } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white py-12">
            <Container className="px-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-stretch">
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
                            className="text-sm text-gray-600 underline hover:text-gray-800"
                        >
                            {CONTENT.footer.privacy}
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
