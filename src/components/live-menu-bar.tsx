"use client";

import { useEffect, useState } from "react";

const NOTES = [
  { icon: "❤️", text: "u", from: "Alex → Sam" },
  { icon: "🌙", text: "home", from: "Sam → Alex" },
  { icon: "☕", text: "?", from: "Alex → Sam" },
  { icon: "🛒", text: "milk", from: "Sam → Alex" },
  { icon: "😘", text: "9", from: "Alex → Sam" },
];

export function LiveMenuBar({ note }: { note?: { icon: string; text: string } }) {
  const [index, setIndex] = useState(0);
  const active = note ?? NOTES[index];
  const [time, setTime] = useState("9:41");

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }));
    tick();
    const clock = window.setInterval(tick, 1000);
    return () => window.clearInterval(clock);
  }, []);

  useEffect(() => {
    if (note) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % NOTES.length), 2800);
    return () => window.clearInterval(id);
  }, [note]);

  return (
    <div className="overflow-hidden rounded-t-[18px] bg-[#ece8e3] shadow-[0_20px_50px_rgba(44,34,24,0.18)] ring-1 ring-[#d7ccbe]">
      <div className="flex h-8 items-center justify-between px-3 text-[12px] text-[#2c2218]">
        <div className="flex items-center gap-3 font-medium">
          <span aria-hidden></span>
          <span className="font-semibold">Finder</span>
          <span className="hidden text-[#2c2218]/60 sm:inline">File</span>
          <span className="hidden text-[#2c2218]/60 md:inline">Edit</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-sm bg-[#9a3144] px-1.5 py-0.5 text-[12px] font-medium text-[#fff8ee] shadow-sm">
            {active.icon} {active.text}
          </span>
          <span className="tabular-nums">{time}</span>
        </div>
      </div>
      <div className="relative h-44 bg-gradient-to-br from-[#7aa7c7] via-[#c9d6c2] to-[#e8c9a8] sm:h-56">
        <p className="absolute bottom-4 left-5 max-w-[14rem] font-[family-name:var(--font-caveat)] text-3xl leading-none text-white/90 drop-shadow">
          two desks, one little note
        </p>
      </div>
    </div>
  );
}

export { NOTES };
