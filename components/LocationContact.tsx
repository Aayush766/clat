// components/LocationContact.tsx
"use client";

import { MapPin, Phone, Mail, Clock, ArrowUpRight, Compass } from "lucide-react";
import { SITE } from "@/lib/site-data";
import EnquiryForm from "./EnquiryForm";

export default function LocationContact() {
  const mapQuery = encodeURIComponent(`${SITE.name}, ${SITE.address.full}`);

  return (
    <section id="contact" className="w-full py-16 lg:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Modern Minimalist Header Block */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-amber-600">
            <Compass className="h-3 w-3 stroke-[2.5]" />
            <span>Campus Location & Intake Portal</span>
          </div>
          <h2 className="font-serif text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Connect With Our Gaya Center
          </h2>
          <p className="text-sm leading-relaxed text-slate-500 max-w-xl font-normal">
            Centrally situated in Kautilyapuri Colony, Gaya. Drop by for real-time diagnostic admission testing, counselor matching, and material reference analysis.
          </p>
        </div>

        {/* Master Command Center Matrix Panel */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-stretch overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-100/50">
          
          {/* Left Column: Full-Height Immersive Interactive Map */}
          <div className="relative min-h-[350px] lg:col-span-6 lg:h-auto border-b border-slate-100 lg:border-b-0 lg:border-r">
            <iframe
              title="Career Heights Gaya location map"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="absolute inset-0 h-full w-full border-0 grayscale-[10%] contrast-[110%] transition-all duration-500 focus:grayscale-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Right Column: Unified Communication & Intake Node */}
          <div className="p-6 sm:p-10 lg:col-span-6 flex flex-col justify-between divide-y divide-slate-100 gap-8">
            
            {/* Upper Subsection: High-Density Directory Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 pb-8">
              
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 text-slate-600">
                  <MapPin className="h-4 w-4 stroke-[2]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Main Campus</h4>
                  <p className="text-xs font-medium leading-relaxed text-slate-700">{SITE.address.full}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 text-slate-600">
                  <Phone className="h-4 w-4 stroke-[2]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Direct Helpline</h4>
                  <a href={SITE.phoneHref} className="text-xs font-bold text-slate-900 transition-colors hover:text-amber-600 block">
                    {SITE.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 text-slate-600">
                  <Mail className="h-4 w-4 stroke-[2]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Admissions Office</h4>
                  <a href={`mailto:${SITE.email}`} className="text-xs font-medium text-slate-700 transition-colors hover:text-amber-600 block break-all">
                    {SITE.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 text-slate-600">
                  <Clock className="h-4 w-4 stroke-[2]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Counseling Desk</h4>
                  <p className="text-xs font-medium text-slate-700">{SITE.hours}</p>
                </div>
              </div>

            </div>

            {/* Lower Subsection: Integrated Intake Application Form */}
            <div className="pt-8 space-y-6">
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-bold tracking-tight text-slate-900">
                  Initiate Evaluation
                </h3>
                <p className="text-xs text-slate-400 font-normal">
                  Submit your details below to schedule an on-campus prep analysis loop with our senior legal advisory panel.
                </p>
              </div>

              <div className="rounded-xl bg-slate-50/70 p-4 sm:p-6 border border-slate-100">
                <EnquiryForm variant="light" />
              </div>

              {/* Action Blueprint Button */}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-between rounded-xl bg-slate-900 px-5 py-3.5 text-xs font-bold text-white transition-all duration-300 hover:bg-slate-800"
              >
                <span className="tracking-wide">Launch Native Navigation Route</span>
                <ArrowUpRight className="h-4 w-4 stroke-[2.5] text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}