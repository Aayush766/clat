// components/Facilities.tsx
"use client";

import Image from "next/image";
import { BookOpen, Monitor, Users, ClipboardCheck, Sparkles } from "lucide-react";

const FACILITIES = [
  { 
    icon: BookOpen, 
    title: "Well-Equipped Classrooms", 
    description: "Comfortable, well-lit spaces designed for focused CLAT, AILET & CUET preparation.",
    accent: "group-hover:border-blue-500 group-hover:bg-blue-50/50 text-blue-600 bg-blue-50"
  },
  { 
    icon: Monitor, 
    title: "Digital Learning Aids", 
    description: "Smart ecosystems used to visually untangle complex legal and logical reasoning concepts.",
    accent: "group-hover:border-amber-500 group-hover:bg-amber-50/50 text-amber-600 bg-amber-50"
  },
  { 
    icon: Users, 
    title: "Small Batch Sizes", 
    description: "Strictly limited seating structures to guarantee deliberate personal mentorship for every student.",
    accent: "group-hover:border-emerald-500 group-hover:bg-emerald-50/50 text-emerald-600 bg-emerald-50"
  },
  { 
    icon: ClipboardCheck, 
    title: "Regular Mock Tests", 
    description: "Proctored mock series mimicking real formats with detailed analytics maps after each attempt.",
    accent: "group-hover:border-indigo-500 group-hover:bg-indigo-50/50 text-indigo-600 bg-indigo-50"
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="w-full py-12">
      <div className="mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Content Left Column */}
          <div className="space-y-10 lg:col-span-5 lg:sticky lg:top-24">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
                <Sparkles className="h-3 w-3 text-amber-400 fill-amber-400" />
                <span>Premium Ecosystem</span>
              </div>
              <h2 className="font-serif text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                A Learning Infrastructure Built For Focus
              </h2>
              <p className="text-sm leading-relaxed text-slate-500">
                Every square foot of our Gaya campus is optimized to limit external friction, helping serious legal aspirants remain driven, focused, and constantly mentored.
              </p>
            </div>

            {/* Interactive Feature Panel Cards */}
            <div className="space-y-3">
              {FACILITIES.map(({ icon: Icon, title, description, accent }) => (
                <div 
                  key={title} 
                  className="group flex gap-4 rounded-2xl border border-slate-100 bg-white p-4 transition-all duration-300 hover:border-slate-200 hover:shadow-md hover:shadow-slate-100/60"
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-transparent transition-all duration-300 ${accent}`}>
                    <Icon className="h-4 w-4 stroke-[2.25]" />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="font-serif text-sm font-bold tracking-tight text-slate-900 group-hover:text-slate-900 transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-500 transition-colors">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Asymmetric Overlapping Structural Layout Right Column */}
          <div className="grid grid-cols-12 gap-4 lg:col-span-7">
            {/* Main Cinematic Banner */}
            <div className="group relative col-span-12 aspect-[16/9] overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-sm">
              <span className="absolute left-4 top-4 z-10 rounded-md bg-slate-950/60 backdrop-blur-md px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                Smart Campus Interior
              </span>
              <Image
                src="/images/career-heights-gaya-facility-interior.webp"
                alt="Career Heights Gaya CLAT coaching institute facility interior"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            
            {/* Left Lower Box */}
            <div className="group relative col-span-6 aspect-[4/3] overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-sm">
              <span className="absolute left-4 top-4 z-10 rounded-md bg-slate-950/60 backdrop-blur-md px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                Proctored Testing
              </span>
              <Image
                src="/images/career-heights-gaya-mock-test-session.webp"
                alt="Career Heights Gaya CLAT mock test session"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Lower Box */}
            <div className="group relative col-span-6 aspect-[4/3] overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-sm">
              <span className="absolute left-4 top-4 z-10 rounded-md bg-slate-950/60 backdrop-blur-md px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                1:1 Clinic Room
              </span>
              <Image
                src="/images/career-heights-gaya-doubt-session.webp"
                alt="Career Heights Gaya CLAT doubt clearing session"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}