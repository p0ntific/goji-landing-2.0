"use client";

import Image from "next/image";
import { Card, CardBody, Divider } from "@heroui/react";
import { cn } from "@heroui/react";
import type { ContentBlock } from "@/lib/cases";

interface CaseContentRendererProps {
    blocks: ContentBlock[];
}

function BlockHeading({ block }: { block: ContentBlock }) {
    const level = (block.level as number) ?? 2;
    const text = block.text as string;

    const className = cn(
        "font-nevermind font-semibold leading-tight text-[#101010] mt-8 first:mt-0",
        level === 2 && "text-[28px] md:text-[38px]",
        level === 3 && "text-[24px] md:text-[30px]",
    );

    if (level === 3) {
        return <h3 className={className}>{text}</h3>;
    }
    return <h2 className={className}>{text}</h2>;
}

function BlockParagraph({ block }: { block: ContentBlock }) {
    const text = block.text as string;
    return (
        <p className="mt-4 text-[14px] md:text-[17px] text-[rgba(16,16,16,0.8)] leading-relaxed">
            {text}
        </p>
    );
}

function BlockImage({ block }: { block: ContentBlock }) {
    const src = block.src as string;
    const alt = (block.alt as string) ?? "";
    const caption = block.caption as string | undefined;
    const size = (block.size as "full" | "half") ?? "full";

    return (
        <figure className="mt-6">
            <div
                className={cn(
                    "relative overflow-hidden rounded-2xl",
                    size === "full" && "w-full h-[400px]",
                    size === "half" && "w-full md:w-[400px] h-[300px] md:h-[400px]",
                )}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                />
            </div>
            {caption && (
                <figcaption className="mt-2 text-[16px] text-[rgba(16,16,16,0.5)]">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}

export function BlockMetadata({ block }: { block: ContentBlock }) {
    const items = (block.items as Array<{ label: string; value: string }>)?.filter(
        (item) => item.label !== "Моя роль",
    ) ?? [];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {items?.map((item, i) => (
                <Card
                    key={i}
                    shadow="none"
                    radius="lg"
                    className="border border-[rgba(16,16,16,0.1)] bg-white"
                >
                    <CardBody className="p-4">
                        <p className="text-sm text-[rgba(16,16,16,0.6)]">
                            {item.label}
                        </p>
                        <p className="mt-1 font-medium text-[#101010]">
                            {item.value}
                        </p>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
}

function BlockBanner({ block }: { block: ContentBlock }) {
    const content = block.content as string;
    const variant = (block.variant as "card" | "highlight") ?? "card";

    return (
        <Card
            shadow="none"
            radius="lg"
            className={cn(
                "mt-6 border border-[rgba(16,16,16,0.1)]",
                variant === "highlight" && "bg-[rgba(16,16,16,0.03)]",
            )}
        >
            <CardBody className="p-6">
                <p className="text-[14px] md:text-[17px] text-[rgba(16,16,16,0.8)]">
                    {content}
                </p>
            </CardBody>
        </Card>
    );
}

function BlockDivider() {
    return <Divider className="my-8" />;
}

export function CaseContentRenderer({ blocks }: CaseContentRendererProps) {
    return (
        <div className="flex flex-col gap-0">
            {blocks.map((block, i) => {
                switch (block.type) {
                    case "heading":
                        return <BlockHeading key={i} block={block} />;
                    case "paragraph":
                        return <BlockParagraph key={i} block={block} />;
                    case "image":
                        return <BlockImage key={i} block={block} />;
                    case "metadata":
                        return <BlockMetadata key={i} block={block} />;
                    case "banner":
                        return <BlockBanner key={i} block={block} />;
                    case "divider":
                        return <BlockDivider key={i} />;
                    case "caseLink":
                        return null;
                    default:
                        return null;
                }
            })}
        </div>
    );
}
