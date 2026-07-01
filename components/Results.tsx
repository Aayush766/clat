// components/Results.tsx
"use client";

import Image from "next/image";
import { Award, Trophy, Users, Star, Flame } from "lucide-react";
import Counter from "./Counter";

const RESULT_STATS = [
  { target: 500, suffix: "+", label: "Students Mentored", icon: Users, color: "text-blue-600 bg-blue-50" },
  { target: 8, suffix: "+", label: "Years of Excellence", icon: Award, color: "text-amber-600 bg-amber-50" },
  { target: 47, suffix: "+", label: "5-Star Google Reviews", icon: Star, color: "text-indigo-600 bg-indigo-50" },
  { target: 100, suffix: "%", label: "Dedicated Mentorship", icon: Flame, color: "text-emerald-600 bg-emerald-50" },
];

const RESULT_IMAGES = [
  {
    src: "/images/career-heights-gaya-topper-felicitation.webp",
    alt: "Career Heights Gaya CLAT topper felicitation ceremony",
    span: "md:col-span-2 aspect-[16/10]",
    badge: "Topper Felicitation"
  },
  {
    src: "/images/career-heights-gaya-result-celebration.webp",
    alt: "Career Heights Gaya students celebrating CLAT coaching results",
    span: "md:col-span-1 aspect-square md:aspect-auto md:h-full",
    badge: "Campus Celebration"
  },
  {
    src: "/images/career-heights-gaya-news-coverage-bihar.webp",
    alt: "Career Heights Gaya featured in Bihar local news for CLAT coaching results",
    span: "md:col-span-3 aspect-[21/9]",
    badge: "Media & Press Coverage"
  },
];

export default function Results() {
  return (
    <section id="results" className="w-full py-6">
      <div className="mx-auto max-w-7xl space-y-16">
        
        {/* Split Header Layout */}
        <div className="grid grid-cols-1 gap-6 border-b border-slate-100 pb-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-amber-700 border border-amber-500/20">
              <Trophy className="h-3.5 w-3.5" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="font-serif text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Results That Speak For Bihar&apos;s Best CLAT Coaching
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-slate-500 lg:border-l lg:border-slate-200 lg:pl-6">
              Numbers tell part of the story, but true impact is shaped in the classrooms of Gaya. 
              Explore the raw milestones and authentic celebratory moments from our historical batches.
            </p>
          </div>
        </div>

        {/* Dynamic Horizontal Stats Strip */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {RESULT_STATS.map((s) => {
            const Icon = s.icon;
            return (
              <div 
                key={s.label} 
                className="group flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-slate-200 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-xl transition-transform duration-300 group-hover:scale-110 ${s.color}`}>
                    <Icon className="h-4 w-4 stroke-[2.5]" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-300 group-hover:text-slate-400 font-mono">
                    // ACTV
                  </span>
                </div>
                <div className="mt-6 space-y-0.5">
                  <p className="font-serif text-2xl font-black tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                    <Counter target={s.target} suffix={s.suffix} />
                  </p>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-500 transition-colors">
                    {s.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Asymmetric Media Collage */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          {RESULT_IMAGES.map((img) => (
            <div 
              key={img.src} 
              className={`group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-sm ${img.span}`}
            >
              {/* Context Tag overlay */}
              <div className="absolute left-4 top-4 z-10 rounded-md bg-slate-950/60 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm opacity-90 transition-opacity group-hover:opacity-100">
                {img.badge}
              </div>

              {/* Enhanced High Resolution Image Viewport */}
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-0.5"
              />

              {/* Sophisticated Dark Gradient Shadow Veil */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}