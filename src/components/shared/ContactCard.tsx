"use client";

import { Avatar } from "@heroui/react";
import { Button } from "@/components/ui/Button";
import { CONTENT } from "@/constants/content";

export function ContactCard() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <div className="flex items-start gap-4">
        <Avatar
          name={CONTENT.contact.name}
          className="h-12 w-12"
        />
        <div className="flex flex-col">
          <span className="text-sm text-gray-500">{CONTENT.contact.role}</span>
          <span className="text-lg font-semibold text-[#1A1A1A]">
            {CONTENT.contact.name}
          </span>
        </div>
      </div>
      <div className="mt-6 flex gap-3">
        <Button
          variant="secondary"
          href="https://cal.com/demo"
          className="flex items-center gap-2"
        >
          {CONTENT.contact.scheduleCall}
          <span className="h-2 w-2 rounded-full bg-green-500" />
        </Button>
        <Button
          variant="secondary"
          href={CONTENT.writeLink}
          className="flex items-center gap-2"
        >
          {CONTENT.contact.write}
          <span className="h-2 w-2 rounded-full bg-blue-500" />
        </Button>
      </div>
    </div>
  );
}
