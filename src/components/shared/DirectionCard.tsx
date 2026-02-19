import Image from "next/image";
import { cn } from "@heroui/react";

interface DirectionCardProps {
  title: string;
  description: string;
  image: string;
}

export function DirectionCard({ title, description, image }: DirectionCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-xl bg-white p-6 shadow-md",
        "border border-gray-100"
      )}
    >
      <h3 className="text-xl font-semibold text-[#1A1A1A]">{title}</h3>
      <p className="mt-2 flex-1 text-base text-gray-700">{description}</p>
      <div className="mt-6 flex justify-center">
        <div className="relative h-32 w-full max-w-[200px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
