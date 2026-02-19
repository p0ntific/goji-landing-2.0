import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@heroui/react";

interface ProjectCardProps {
  headline: string;
  description: string;
  image: string;
  caseLink: string;
}

export function ProjectCard({
  headline,
  description,
  image,
  caseLink,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "flex gap-8 rounded-xl border border-gray-200 bg-white p-6",
        "shadow-sm"
      )}
    >
      <div className="relative h-64 w-1/2 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={headline}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <h3 className="text-xl font-bold text-[#1A1A1A]">{headline}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-6">
          <Button variant="bordered" href={caseLink}>
            Читать кейс
          </Button>
        </div>
      </div>
    </div>
  );
}
