"use client";

import { Sparkles } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-50/90 via-indigo-50/80 to-blue-50/90 py-2 border-b border-slate-200/60 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 text-center text-[11px] font-bold tracking-wide uppercase text-slate-700 sm:text-xs">
        <Sparkles className="h-3.5 w-3.5 shrink-0 text-blue-700 animate-pulse" />
        <span>
          New CLAT / AILET / CUET batch starting soon in Gaya —{" "}
          <span className="bg-gradient-to-r from-blue-800 to-indigo-700 bg-clip-text font-black text-transparent">
            Limited Seats Available.
          </span>{" "}
          Enroll now to lock your spot.
        </span>
      </div>
    </div>
  );
}