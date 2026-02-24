"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@heroui/react";
import { ArrowUpRight, Download, Info } from "lucide-react";
import { CaseChart } from "@/components/cases/CaseChart";
import type { ContentBlock } from "@/lib/cases";

interface CaseContentRendererProps {
    blocks: ContentBlock[];
}

function BlockHeading({ block }: { block: ContentBlock }) {
    const level = (block.level as number) ?? 2;
    const text = block.text as string;

    const className = cn(
        "font-nevermind font-semibold leading-[1.15] text-[#101010] mt-12 first:mt-0",
        level === 2 && "text-[26px] md:text-[36px]",
        level === 3 && "text-[22px] md:text-[28px]",
    );

    if (level === 3) {
        return <h3 className={className}>{text}</h3>;
    }
    return <h2 className={className}>{text}</h2>;
}

function BlockParagraph({ block }: { block: ContentBlock }) {
    const text = block.text as string;
    return (
        <p className="mt-5 text-[16px] md:text-[18px] text-[rgba(16,16,16,0.7)] leading-[1.7]">
            {text}
        </p>
    );
}

function BlockList({ block }: { block: ContentBlock }) {
    const items = (block.items as string[]) ?? [];
    const ordered = (block.ordered as boolean) ?? false;

    return (
        <div className="mt-6 space-y-3">
            {items.map((item, i) => (
                <div key={i} className="flex items-baseline gap-4">
                    <span className="text-[14px] text-[rgba(16,16,16,0.3)] font-medium tabular-nums min-w-[20px]">
                        {ordered ? `${i + 1}.` : "—"}
                    </span>
                    <p className="text-[16px] md:text-[18px] text-[rgba(16,16,16,0.7)] leading-[1.6]">
                        {item}
                    </p>
                </div>
            ))}
        </div>
    );
}

function BlockImage({ block }: { block: ContentBlock }) {
    const src = block.src as string;
    const alt = (block.alt as string) ?? "";
    const caption = block.caption as string | undefined;

    return (
        <figure className="mt-10">
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-[rgba(16,16,16,0.03)]">
                <Image src={src} alt={alt} fill className="object-cover" />
            </div>
            {caption && (
                <figcaption className="mt-3 text-[14px] text-[rgba(16,16,16,0.4)]">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}
export function BlockMetadata({ block }: { block: ContentBlock }) {
    const items =
        (block.items as Array<{ label: string; value: string }>)?.filter(
            (item) => item.label !== "Моя роль",
        ) ?? [];

    return (
        <div className="mt-8 flex flex-col md:flex-row rounded-2xl overflow-hidden">
            {items.map((item, i) => {
                return (
                    <div
                        key={i}
                        className={cn(
                            "p-5 md:p-6 flex-1",
                            i % 2 === 0 ? "bg-blue-500" : "bg-blue-600",
                        )}
                    >
                        <p className="text-[12px] uppercase tracking-wider text-white/60 mb-2 font-medium">
                            {item.label}
                        </p>
                        <p className="font-nevermind text-[18px] md:text-[22px] font-semibold text-white">
                            {item.value}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

function BlockBanner({ block }: { block: ContentBlock }) {
    const content = block.content as string;

    return (
        <div className="mt-8 p-6 md:p-8 rounded-2xl bg-[#101010] flex gap-4 items-start">
            <Info className="w-5 h-5 text-white/50 shrink-0 mt-0.5" />
            <p className="text-[16px] md:text-[18px] text-white/90 leading-[1.7]">
                {content}
            </p>
        </div>
    );
}

function BlockDivider() {
    return <div className="my-12 border-t border-[rgba(16,16,16,0.08)]" />;
}

function BlockLink({ block }: { block: ContentBlock }) {
    const href = block.href as string;
    const text = block.text as string;
    const external = (block.external as boolean) ?? false;

    return (
        <p className="mt-5">
            <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-[16px] md:text-[18px] text-[#101010] underline underline-offset-4 decoration-[rgba(16,16,16,0.3)] hover:opacity-60 transition-opacity"
            >
                {text}
            </a>
        </p>
    );
}

function BlockDownload({ block }: { block: ContentBlock }) {
    const label = block.label as string;
    const href = block.href as string;

    return (
        <div className="mt-8">
            <a
                href={href}
                download
                className="inline-flex items-center gap-3 px-5 py-4 rounded-2xl bg-[rgba(16,16,16,0.04)] hover:bg-[rgba(16,16,16,0.06)] transition-colors"
            >
                <Download className="w-5 h-5 text-[rgba(16,16,16,0.5)]" />
                <span className="text-[16px] text-[#101010]">{label}</span>
            </a>
        </div>
    );
}
function BlockFaq({ block }: { block: ContentBlock }) {
    const items =
        (block.items as Array<{ question: string; answer: string }>) ?? [];
    const title = block.title as string | undefined;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="mt-8 max-w-[700px] mx-auto">
            {title && (
                <h3 className="font-nevermind text-[22px] md:text-[28px] font-semibold text-[#101010] mb-6 text-center">
                    {title}
                </h3>
            )}
            {items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                    <div
                        key={i}
                        className={cn(
                            "border-b border-[rgba(16,16,16,0.1)]",
                            i === 0 && "border-t",
                        )}
                    >
                        <button
                            type="button"
                            onClick={() => setOpenIndex(isOpen ? null : i)}
                            className="w-full flex justify-between items-center gap-4 py-5 md:py-6 text-left cursor-pointer group"
                        >
                            <span className="font-nevermind font-medium text-[16px] md:text-[18px] text-[#101010] group-hover:opacity-70 transition-opacity">
                                {item.question}
                            </span>
                            <span className="w-6 h-6 flex items-center justify-center text-[20px] text-[rgba(16,16,16,0.4)] shrink-0">
                                {isOpen ? "−" : "+"}
                            </span>
                        </button>
                        <div
                            className={cn(
                                "grid transition-all duration-300 ease-out",
                                isOpen
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0",
                            )}
                        >
                            <div className="overflow-hidden">
                                <p className="pb-5 md:pb-6 pr-10 text-[16px] md:text-[17px] text-[rgba(16,16,16,0.7)] leading-[1.7]">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

function BlockTable({ block }: { block: ContentBlock }) {
    const headers = (block.headers as string[]) ?? [];
    const rows = (block.rows as string[][]) ?? [];

    return (
        <div className="mt-8 overflow-x-auto rounded-2xl border border-[rgba(16,16,16,0.1)]">
            <table className="w-full min-w-[400px]">
                <thead>
                    <tr className="border-b border-[rgba(16,16,16,0.1)] bg-[rgba(16,16,16,0.03)]">
                        {headers.map((h, i) => (
                            <th
                                key={i}
                                className="px-5 md:px-6 py-4 text-left text-[12px] uppercase tracking-wider text-[rgba(16,16,16,0.5)]"
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, ri) => (
                        <tr
                            key={ri}
                            className={cn(
                                ri % 2 === 1 && "bg-[rgba(16,16,16,0.02)]",
                                ri !== rows.length - 1 &&
                                    "border-b border-[rgba(16,16,16,0.04)]",
                            )}
                        >
                            {row.map((cell, ci) => (
                                <td
                                    key={ci}
                                    className="px-5 md:px-6 py-4 text-[15px] md:text-[16px] text-[rgba(16,16,16,0.8)]"
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function BlockCaseLink({ block }: { block: ContentBlock }) {
    const slug = block.slug as string;
    const title = block.title as string;
    if (!slug || !title) return null;

    return (
        <div className="mt-8">
            <Link
                href={`/cases/${slug}`}
                className="group inline-flex items-center gap-3 px-6 py-5 rounded-2xl bg-[rgba(16,16,16,0.04)] hover:bg-[rgba(16,16,16,0.06)] transition-colors"
            >
                <span className="font-nevermind text-[17px] md:text-[19px] text-[#101010]">
                    {title}
                </span>
                <ArrowUpRight className="w-5 h-5 text-[rgba(16,16,16,0.4)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
        </div>
    );
}

export function CaseContentRenderer({ blocks }: CaseContentRendererProps) {
    return (
        <div className="flex flex-col">
            {blocks.map((block, i) => {
                switch (block.type) {
                    case "heading":
                        return <BlockHeading key={i} block={block} />;
                    case "paragraph":
                        return <BlockParagraph key={i} block={block} />;
                    case "list":
                        return <BlockList key={i} block={block} />;
                    case "image":
                        return <BlockImage key={i} block={block} />;
                    case "metadata":
                        return <BlockMetadata key={i} block={block} />;
                    case "banner":
                        return <BlockBanner key={i} block={block} />;
                    case "link":
                        return <BlockLink key={i} block={block} />;
                    case "download":
                        return <BlockDownload key={i} block={block} />;
                    case "faq":
                        return <BlockFaq key={i} block={block} />;
                    case "table":
                        return <BlockTable key={i} block={block} />;
                    case "chart":
                        return <CaseChart key={i} block={block} />;
                    case "divider":
                        return <BlockDivider key={i} />;
                    case "caseLink":
                        return <BlockCaseLink key={i} block={block} />;
                    default:
                        return null;
                }
            })}
        </div>
    );
}
