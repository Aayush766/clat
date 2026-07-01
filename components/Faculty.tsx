// components/Faculty.tsx
"use client";

import Image from "next/image";
import { ArrowUpRight, Scale } from "lucide-react";
import { FACULTY } from "@/lib/site-data";

export default function Faculty() {
  return (
    <section id="faculty" className="w-full py-12">
      <div className="mx-auto max-w-7xl">
        
        {/* Minimalist Split Header */}
        <div className="grid grid-cols-1 gap-6 border-b border-slate-200 pb-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7 space-y-2">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-600 flex items-center gap-2">
              <Scale className="h-3.5 w-3.5 stroke-[2.5]" /> Academic Board
            </span>
            <h2 className="font-serif text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              The Minds Steering Your Success
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-slate-500 lg:border-l lg:border-slate-200 lg:pl-6">
              Led by a GATE-qualified director with a corporate engineering background, our faculty 
              team combines subject mastery with premium law school entrance mentorship in Gaya.
            </p>
          </div>
        </div>

        {/* Minimalist Row Directory */}
        <div className="divide-y divide-slate-100">
          {FACULTY.map((f, i) => (
            <div
              key={f.name}
              className="group grid grid-cols-1 gap-6 py-8 transition-colors duration-300 hover:bg-slate-50/50 sm:grid-cols-12 sm:items-start lg:gap-8"
            >
              {/* Column 1: Index Number & Image */}
              <div className="flex items-center gap-4 sm:col-span-3 lg:col-span-2">
                <span className="font-mono text-xs font-bold text-slate-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-slate-100 border border-slate-200/60 shadow-sm">
                  <Image
                    src={f.image}
                    alt={f.name}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Column 2: Identity & Credentials */}
              <div className="space-y-1 sm:col-span-4 lg:col-span-3">
                <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-[#0f2444] transition-colors">
                  {f.name}
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-600">
                    {f.role}
                  </span>
                  <span className="h-3 w-px bg-slate-200" />
                  <span className="text-[11px] font-medium text-slate-400">
                    {f.credentials}
                  </span>
                </div>
              </div>

              {/* Column 3: The Profile Narrative */}
              <div className="sm:col-span-4 lg:col-span-6">
                <p className="text-xs leading-relaxed text-slate-500 group-hover:text-slate-600 transition-colors">
                  {f.bio}
                </p>
              </div>

              {/* Column 4: Contextual Link Hook */}
              <div className="hidden sm:col-span-1 sm:flex sm:justify-end lg:col-span-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:border-slate-300 group-hover:text-slate-700">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

            </div>
          ))}
        </div>
        
        {/* Subtle Bottom Boundary Line */}
        <div className="border-t border-slate-200" />

      </div>
    </section>
  );
}