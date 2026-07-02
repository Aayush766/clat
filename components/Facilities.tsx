"use client";

import Image from "next/image";
import { BookOpen, Monitor, Users, ClipboardCheck, Sparkles } from "lucide-react";

const FACILITIES = [
  { 
    icon: BookOpen, 
    title: "Well-Equipped Classrooms", 
    description: "Comfortable, well-lit spaces designed for focused CLAT, AILET & CUET preparation.",
    accent: "group-hover:border-blue-500 group-hover:bg-blue-50 text-blue-600 bg-slate-50"
  },
  { 
    icon: Monitor, 
    title: "Digital Learning Aids", 
    description: "Smart ecosystems used to visually untangle complex legal and logical reasoning concepts.",
    accent: "group-hover:border-amber-500 group-hover:bg-amber-50 text-amber-600 bg-slate-50"
  },
  { 
    icon: Users, 
    title: "Small Batch Sizes", 
    description: "Strictly limited seating structures to guarantee deliberate personal mentorship for every student.",
    accent: "group-hover:border-emerald-500 group-hover:bg-emerald-50 text-emerald-600 bg-slate-50"
  },
  { 
    icon: ClipboardCheck, 
    title: "Regular Mock Tests", 
    description: "Proctored mock series mimicking real formats with detailed analytics maps after each attempt.",
    accent: "group-hover:border-indigo-500 group-hover:bg-indigo-50 text-indigo-600 bg-slate-50"
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="w-full py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-start">
          
          {/* Content Left Column */}
          <div className="space-y-12 lg:col-span-5 lg:sticky lg:top-28">
            <div className="space-y-6">
              
              {/* Premium Context Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50/60 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-800 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                <span>Premium Ecosystem</span>
              </div>
              
              {/* Large, Authoritative Founder Headline */}
              <h2 className="font-serif text-4xl font-black tracking-tight text-slate-900 sm:text-5xl leading-[1.15]">
                A Learning Infrastructure{" "}
                <span className="bg-gradient-to-r from-blue-800 to-indigo-600 bg-clip-text text-transparent">
                  Built For Focus
                </span>
              </h2>
              
              <p className="font-sans text-base font-medium leading-relaxed text-slate-600">
                Every square foot of our Gaya campus is optimized to limit external friction, helping serious legal aspirants remain driven, focused, and constantly mentored under an elite environment.
              </p>
            </div>

            {/* Substantial, Large Rounded Feature Panel Cards */}
            <div className="space-y-4">
              {FACILITIES.map(({ icon: Icon, title, description, accent }) => (
                <div 
                  key={title} 
                  className="group flex gap-5 rounded-3xl border border-slate-200/60 bg-white/80 p-5 backdrop-blur-sm transition-all duration-500 hover:border-slate-300 hover:bg-white hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-100/80"
                >
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-100 transition-all duration-300 ${accent} shadow-inner`}>
                    <Icon className="h-5 w-5 stroke-[2.25]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-base font-black tracking-tight text-slate-900 transition-colors">
                      {title}
                    </h3>
                    <p className="font-sans text-xs font-medium leading-relaxed text-slate-500 transition-colors group-hover:text-slate-600">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Asymmetric Overlapping Structural Layout Right Column */}
          <div className="grid grid-cols-12 gap-5 lg:col-span-7">
            
            {/* Main Cinematic Banner (Big & Substantial) */}
            <div className="group relative col-span-12 aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50 shadow-md">
              <span className="absolute left-5 top-5 z-10 rounded-lg bg-slate-900/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                Smart Campus Interior
              </span>
              <Image
                src="/images/career-heights-gaya-facility-interior.webp"
                alt="Career Heights Gaya CLAT coaching institute facility interior"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Left Lower Box */}
            <div className="group relative col-span-6 aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50 shadow-md">
              <span className="absolute left-5 top-5 z-10 rounded-lg bg-slate-900/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                Proctored Testing
              </span>
              <Image
                src="/images/career-heights-gaya-mock-test-session.webp"
                alt="Career Heights Gaya CLAT mock test session"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 50vw, 28vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Right Lower Box */}
            <div className="group relative col-span-6 aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50 shadow-md">
              <span className="absolute left-5 top-5 z-10 rounded-lg bg-slate-900/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                1:1 Clinic Room
              </span>
              <Image
                src="/images/career-heights-gaya-doubt-session.webp"
                alt="Career Heights Gaya CLAT doubt clearing session"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 50vw, 28vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}