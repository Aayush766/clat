// components/AnnouncementBar.tsx
"use client";

import { Sparkles } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-[#0f2444] py-2 text-white border-b border-slate-800/40">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 text-center text-xs font-medium sm:text-sm">
        <Sparkles className="h-3.5 w-3.5 shrink-0 text-amber-400" />
        <span className="tracking-wide">
          New CLAT / AILET / CUET batch starting soon in Gaya —{" "}
          <span className="font-bold text-amber-400">Limited Seats Available.</span> Enroll now to lock your spot.
        </span>
      </div>
    </div>
  );
}