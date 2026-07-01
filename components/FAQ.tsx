// components/FAQ.tsx
"use client";

import { useState } from "react";
import { HelpCircle, Plus } from "lucide-react";
import { FAQS } from "@/lib/site-data";
import { faqSchema } from "@/lib/schema";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full py-12">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
      />
      
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Left Sticky Context Column */}
          <div className="space-y-4 lg:col-span-5 lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-800">
              <HelpCircle className="h-3 w-3 text-slate-600" />
              <span>Information Desk</span>
            </div>
            <h2 className="font-serif text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="text-sm leading-relaxed text-slate-500 max-w-sm">
              Clear, transparent answers to what Gaya students and parents ask most about our CLAT, AILET, and CUET coaching paradigms.
            </p>
          </div>

          {/* Right Structured Accordion Column */}
          <div className="space-y-3 lg:col-span-7">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div 
                  key={faq.q} 
                  className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen 
                      ? "border-slate-300 bg-white shadow-md shadow-slate-100/80" 
                      : "border-slate-100 bg-white hover:border-slate-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex gap-4">
                      {/* Monospaced Numeric Bullet */}
                      <span className={`font-mono text-xs font-bold tracking-wider pt-0.5 transition-colors duration-300 ${
                        isOpen ? "text-amber-600" : "text-slate-300 group-hover:text-slate-400"
                      }`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`font-serif text-sm font-bold tracking-tight transition-colors duration-300 md:text-base ${
                        isOpen ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"
                      }`}>
                        {faq.q}
                      </span>
                    </div>

                    {/* Smooth Rotating Cross Indicator */}
                    <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-slate-400 transition-all duration-300 ${
                      isOpen 
                        ? "rotate-45 border-slate-900 bg-slate-900 text-white" 
                        : "border-slate-100 bg-slate-50 group-hover:border-slate-200 group-hover:text-slate-600"
                    }`}>
                      <Plus className="h-3 w-3 stroke-[2.5]" />
                    </div>
                  </button>

                  {/* Collapsible Content Wrapper */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-slate-50 pl-[42px] pr-5 pb-5 pt-3">
                        <p className="text-sm leading-relaxed text-slate-500">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}