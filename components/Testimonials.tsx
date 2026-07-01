// components/Testimonials.tsx
"use client";

import Image from "next/image";
import { Star, MessageSquareQuote } from "lucide-react";
import { TESTIMONIALS, SITE } from "@/lib/site-data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Minimalist Split Header Block */}
        <div className="grid grid-cols-1 gap-6 border-b border-slate-100 pb-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-amber-700 border border-amber-500/20">
              <MessageSquareQuote className="h-3.5 w-3.5" />
              <span>Institutional Validation</span>
            </div>
            <h2 className="font-serif text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              What Our Students Say About Career Heights Gaya
            </h2>
          </div>
          
          {/* Real-time Google Reviews Tracker Badge */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 font-serif font-black text-sm">
                {SITE.rating.value}
              </div>
              <div>
                <div className="flex gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </div>
                <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wide mt-0.5">
                  Based on {SITE.rating.count} Google Reviews
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Multi-Variant Masonry Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.name}
              className={`group relative flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100/40 hover:-translate-y-1 ${
                idx === 1 ? "lg:scale-[1.02] lg:shadow-md lg:shadow-slate-100/50 z-10" : ""
              }`}
            >
              {/* Card Body Context */}
              <div className="space-y-4">
                {/* 5-Star Row & Quote Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                  <span className="font-mono text-[9px] font-bold text-slate-300 uppercase tracking-widest">
                    // verified_review
                  </span>
                </div>

                {/* Direct Narrative Quotation */}
                <p className="font-serif text-sm italic leading-relaxed text-slate-600 group-hover:text-slate-800 transition-colors duration-200">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Identity Footer Module */}
              <div className="mt-8 flex items-center gap-3 border-t border-slate-50 pt-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-slate-100 bg-slate-50 shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={t.image}
                    alt={`${t.name}, targeting ${t.exam} at Career Heights Gaya CLAT Hub`}
                    width={40}
                    height={40}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif text-sm font-bold tracking-tight text-slate-900 group-hover:text-[#0f2444] transition-colors">
                    {t.name}
                  </p>
                  <span className="inline-block rounded-md bg-slate-100 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-slate-500 mt-0.5 group-hover:bg-amber-500/10 group-hover:text-amber-700 transition-colors">
                    {t.exam}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}