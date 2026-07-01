// components/Gallery.tsx
"use client";

import Image from "next/image";
import { Camera, ArrowUpRight } from "lucide-react";

const GALLERY_IMAGES = [
  { 
    src: "/images/career-heights-gaya-classroom-session-1.webp", 
    alt: "CLAT coaching classroom session at Career Heights Gaya, Bihar",
    span: "md:col-span-2 aspect-[16/10] md:aspect-auto",
    tag: "Lecture Hall"
  },
  { 
    src: "/images/career-heights-gaya-classroom-session-2.webp", 
    alt: "Career Heights Gaya CLAT classroom teaching session",
    span: "md:col-span-1 aspect-square md:aspect-auto",
    tag: "Interactive Session"
  },
  { 
    src: "/images/career-heights-gaya-students-studying.webp", 
    alt: "Career Heights Gaya students studying for CLAT exam",
    span: "md:col-span-1 aspect-square md:aspect-auto",
    tag: "Co-Working Hub"
  },
  { 
    src: "/images/career-heights-gaya-clat-batch-photo.webp", 
    alt: "Career Heights Gaya CLAT coaching batch group photo",
    span: "md:col-span-2 aspect-[16/10] md:aspect-auto",
    tag: "Cohort Milestones"
  },
  { 
    src: "/images/career-heights-gaya-faculty-teaching.webp", 
    alt: "Career Heights Gaya faculty teaching CLAT students",
    span: "md:col-span-2 aspect-[16/10] md:aspect-auto",
    tag: "Expert Legal Clinics"
  },
  { 
    src: "/images/clat-classroom-gaya-bihar-career-heights.webp", 
    alt: "CLAT classroom at Career Heights Gaya, Bihar",
    span: "md:col-span-1 aspect-square md:aspect-auto",
    tag: "Study Infrastructure"
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="w-full py-12">
      <div className="mx-auto max-w-7xl space-y-12">
        
        {/* Typographic Section Intro */}
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-800">
            <Camera className="h-3 w-3 text-slate-600" />
            <span>Campus Chronicle</span>
          </div>
          <h2 className="font-serif text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Life At Career Heights Gaya
          </h2>
          <p className="text-sm leading-relaxed text-slate-500 max-w-lg mx-auto">
            A window into our daily environment: intense testing, collaborative law bootcamps, and a continuous culture of academic drive.
          </p>
        </div>

        {/* Interlocking Modular Asymmetric Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 md:auto-rows-[280px] lg:auto-rows-[320px]">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-sm ${img.span}`}
            >
              {/* Context Tag and Callout Anchor */}
              <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between p-5 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="rounded-lg bg-white/90 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow-sm">
                  {img.tag}
                </span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-900 shadow-sm opacity-90 hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              {/* High-Contrast Interactive Lens Viewport */}
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover grayscale-[25%] contrast-[1.02] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
              />

              {/* Shading scrim mapping layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-slate-950/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}