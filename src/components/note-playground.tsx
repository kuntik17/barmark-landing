"use client";

import { LiveMenuBar, NOTES } from "@/components/live-menu-bar";
import { useState } from "react";

const STICKIES = [
  { rotate: "-rotate-2", color: "bg-[#fff1a8]", note: NOTES[0], caption: "the I miss you" },
  { rotate: "rotate-1", color: "bg-[#ffd4dc]", note: NOTES[1], caption: "the on my way" },
  { rotate: "-rotate-1", color: "bg-[#d9f0e3]", note: NOTES[3], caption: "the don’t forget" },
  { rotate: "rotate-2", color: "bg-[#e4d7ff]", note: NOTES[4], caption: "the see you at" },
];

export function NotePlayground() {
  const [selected, setSelected] = useState<(typeof NOTES)[number] | undefined>(undefined);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <LiveMenuBar note={selected} />
      <div>
        <p className="text-sm font-medium tracking-wide text-[#9a3144] uppercase">Try a note</p>
        <h2 className="mt-1 font-[family-name:var(--font-fraunces)] text-3xl font-medium tracking-tight">
          Stick it on their menu bar.
        </h2>
        <p className="mt-2 text-[#6d5c4d]">
          Tap a scrap. It lands next to the clock — on your Mac and theirs. No chat thread to bury it. No login.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {STICKIES.map((item) => (
            <button
              key={item.caption}
              type="button"
              onClick={() => setSelected(item.note)}
              className={`${item.color} ${item.rotate} rounded-sm p-4 text-left shadow-md ring-1 ring-black/5 transition hover:-translate-y-0.5`}
            >
              <p className="font-[family-name:var(--font-caveat)] text-3xl">
                {item.note.icon} {item.note.text}
              </p>
              <p className="mt-2 text-xs tracking-wide text-[#6d5c4d] uppercase">{item.caption}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
