import Image from "next/image";
import { cn } from "@heroui/react";

interface CaseCardProps {
  title: string;
  image: string;
}

export function CaseCard({ title, image }: CaseCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-xl",
        "shadow-md transition-shadow hover:shadow-lg"
      )}
    >
      <div className="relative aspect-square w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <p className="mt-4 text-center text-lg font-medium text-[#1A1A1A]">
        {title}
      </p>
    </div>
  );
}
