"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input, Button, Chip } from "@heroui/react";
import { CONTENT } from "@/constants/content";
import type { CaseMeta } from "@/lib/cases";

interface NdaGateInlineProps {
    caseTitle: string;
    currentSlug: string;
    otherCases: CaseMeta[];
    onSuccess: () => void;
}

export function NdaGateInline({ caseTitle, currentSlug, otherCases, onSuccess }: NdaGateInlineProps) {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await fetch("/api/cases/verify-nda", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });

            const data = await res.json();

            if (data.success) {
                onSuccess();
            } else {
                setError("Неверный пароль");
            }
        } catch {
            setError("Ошибка проверки");
        } finally {
            setLoading(false);
        }
    };

    const casesToShow = otherCases
        .filter((c) => c.cardLayout !== "external" && c.slug && c.slug !== currentSlug)
                        .slice(0, 2);

    return (
        <div className="flex flex-col gap-12 mt-8">
            <div className="flex flex-col md:flex-row md:items-center md:gap-12 max-w-[800px] mx-auto">
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                    <Chip
                        variant="flat"
                        size="lg"
                        radius="lg"
                        classNames={{
                            base: "bg-[#ff4314]",
                            content: "text-white font-medium",
                        }}
                    >
                        {caseTitle}
                    </Chip>
                    <h2 className="mt-4 font-nevermind text-[32px] md:text-[42px] font-normal leading-tight text-[#101010]">
                        Этот кейс под NDA
                    </h2>
                    <p className="mt-4 text-[18px] md:text-[22px] text-[rgba(16,16,16,0.7)] leading-relaxed">
                        Рады, что вам интересен этот проект! Введите пароль, который вы получили от нас. Если пароля нет — напишите нам.
                    </p>

                    <form onSubmit={handleSubmit} className="w-full max-w-[360px] mt-8 flex flex-col gap-4">
                    <Input
                        type="password"
                        placeholder="Пароль"
                        value={password}
                        onValueChange={setPassword}
                        isInvalid={!!error}
                        errorMessage={error}
                        variant="bordered"
                        radius="lg"
                        size="lg"
                        classNames={{
                            input: "text-[#101010] text-lg",
                            inputWrapper: "border-[rgba(16,16,16,0.2)]",
                        }}
                        autoFocus
                    />
                    <Button
                        type="submit"
                        isLoading={loading}
                        size="lg"
                        className="bg-[#101010] text-white rounded-xl text-lg"
                    >
                        Войти
                    </Button>
                </form>
                </div>
                <div className="flex-shrink-0 w-full md:w-[280px] aspect-square rounded-2xl overflow-hidden bg-[rgba(16,16,16,0.06)]">
                    <div className="w-full h-full flex items-center justify-center text-[rgba(16,16,16,0.2)]">
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
                <a
                    href={CONTENT.writeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-[rgba(16,16,16,0.06)] text-[#101010] font-medium hover:bg-[rgba(16,16,16,0.1)] transition-colors"
                >
                    Telegram
                </a>
                <Link
                    href="/cases"
                    className="px-5 py-3 rounded-xl bg-[rgba(16,16,16,0.06)] text-[#101010] font-medium hover:bg-[rgba(16,16,16,0.1)] transition-colors"
                >
                    Все кейсы
                </Link>
            </div>

            {casesToShow.length > 0 && (
                <div className="mt-12">
                    <h3 className="font-nevermind text-[18px] md:text-[24px] font-normal text-[#101010] mb-6">
                        Похожие кейсы
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {casesToShow.map((c) => (
                            <Link key={c.slug} href={`/cases/${c.slug}`} className="block transition-transform duration-200 hover:-translate-y-1">
                                <div className="h-[400px] rounded-2xl border border-[rgba(16,16,16,0.1)] bg-white overflow-hidden">
                                    {c.image ? (
                                        <div className="relative h-[220px] w-full">
                                            <Image src={c.image} alt={c.title} fill className="object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                            <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-wrap gap-2">
                                                {c.badges?.map((b) => (
                                                    <span key={b} className="px-3 py-1 rounded-lg bg-white text-[#101010] text-sm font-medium">
                                                        {b}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="h-[220px] bg-[rgba(16,16,16,0.04)] flex items-center justify-center">
                                            <span className="text-[rgba(16,16,16,0.3)] text-sm">{c.title}</span>
                                        </div>
                                    )}
                                    <div className="p-6">
                                        {c.company && c.year && (
                                            <p className="text-sm text-[rgba(16,16,16,0.6)] mb-1">
                                                {c.company} • {c.year}
                                            </p>
                                        )}
                                        <p className="font-nevermind text-[17px] md:text-[21px] font-normal text-[#101010]">
                                            {c.title}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
