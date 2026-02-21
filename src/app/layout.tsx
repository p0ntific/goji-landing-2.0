import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { CookieConsent } from "@/components/shared/CookieConsent";
import { YandexMetrika } from "@/components/shared/YandexMetrika";
import { StructuredData } from "@/components/shared/StructuredData";

const onest = Onest({
    variable: "--font-onest",
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: {
        default: "годжи — Студия веб-разработки и AI решений",
        template: "%s | годжи",
    },
    description:
        "Студия годжи — разрабатываем, поддерживаем и развиваем web и AI решения. Веб-разработка, нейросети, аналитика данных, дизайн и Telegram-разработка. ИП Игитов Максим Дмитриевич.",
    keywords: [
        "веб-разработка",
        "студия разработки",
        "AI решения",
        "нейросети",
        "разработка сайтов",
        "годжи",
        "годжи студия",
        "аналитика данных",
        "Telegram разработка",
        "дизайн",
        "компьютерное зрение",
    ],
    authors: [{ name: "годжи" }],
    creator: "годжи",
    publisher: "ИП Игитов Максим Дмитриевич",
    metadataBase: new URL("https://goji.studio"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "ru_RU",
        url: "https://goji.studio",
        siteName: "годжи",
        title: "годжи — Студия веб-разработки и AI решений",
        description:
            "Разрабатываем, поддерживаем и развиваем web и AI решения. Веб-разработка, нейросети, аналитика данных, дизайн.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "годжи — Студия разработки",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "годжи — Студия веб-разработки и AI решений",
        description:
            "Разрабатываем, поддерживаем и развиваем web и AI решения.",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <head>
                <link rel="preconnect" href="https://cdn.jsdelivr.net" />
                <StructuredData />
            </head>
            <body className={`${onest.variable} font-sans antialiased`}>
                <Providers>{children}</Providers>
                <CookieConsent />
                <YandexMetrika />
            </body>
        </html>
    );
}
