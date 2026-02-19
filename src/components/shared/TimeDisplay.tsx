"use client";

import { useEffect, useState } from "react";

export function TimeDisplay() {
  const [time, setTime] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  });

  useEffect(() => {
    const now = new Date();
    setTime(
      now.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    );
    const interval = setInterval(() => {
      const n = new Date();
      setTime(
        n.toLocaleTimeString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500">Moscow</span>
      <span className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 font-mono text-lg font-semibold text-[#1A1A1A]">
        {time.replace(":", " : ")}
      </span>
    </div>
  );
}
