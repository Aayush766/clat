"use client";

import { CheckCircle2, ArrowUpRight, GraduationCap, Sparkles } from "lucide-react";
import { COURSES } from "@/lib/site-data";

export default function Courses() {
  return (
    <section id="courses" className="relative w-full overflow-hidden bg-slate-950 py-20 sm:py-28">
      
      {/* Background Graphic Grid System Mesh to match Hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Structural Header Grid */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-slate-900 pb-10">
          <div className="max-w-3xl space-y-4 text-center md:text-left">
            
            {/* Elegant Location Badge mirroring Hero styling */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-4 py-1.5 text-xs font-semibold tracking-wide text-amber-500 shadow-inner">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              <span>Academic Programs</span>
            </div>
            
            {/* H2 Heading Optimized as per SEO Report Blueprint (H2 #2) */}
            <h2 className="font-serif text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
              CLAT, AILET &amp; CUET Coaching in Gaya - Programs We Offer
            </h2>
            
            <p className="mx-auto md:mx-0 font-sans text-sm font-normal leading-relaxed text-slate-400 max-w-2xl sm:text-base">
              Whichever law entrance exam you&apos;re targeting, Career Heights has a structured, 
              mentor-led program designed for it — providing premier law exam preparation right here in Gaya, Bihar.
            </p>
          </div>
        </div>

        {/* High-End Premium Glassmorphic Course Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {COURSES.map((course) => (
            <a
              href="#contact"
              key={course.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-900 bg-slate-950/40 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-slate-800/80 hover:bg-slate-950/80 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60"
            >
              {/* Subtle Top Accent Border matching the Hero Form wrapper asset */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent transition-all duration-300 group-hover:via-amber-500/60" />
              
              {/* Top Row / Badges & Info */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-md border border-amber-500/10 bg-amber-500/5 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-amber-400">
                    {course.short}
                  </span>
                  
                  {/* Sunken slate card icon slot mapping */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-900 bg-slate-900 text-slate-400 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-[#0f2444] group-hover:border-amber-500 shadow-inner">
                    <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <h3 className="font-serif text-xl font-bold tracking-tight text-white sm:text-2xl transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:via-amber-200 group-hover:to-amber-500">
                    {course.name}
                  </h3>
                  <p className="font-sans text-sm font-normal leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                    {course.description}
                  </p>
                </div>

                {/* Course Highlights Checklist Container */}
                <ul className="grid grid-cols-1 gap-3.5 pt-5 border-t border-slate-900/80 sm:grid-cols-2">
                  {course.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-xs text-slate-400 font-medium transition-colors duration-300 group-hover:text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500 stroke-[2.5]" />
                      <span className="leading-normal">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Row / Call To Action Footer Component */}
              <div className="mt-8 pt-4 flex items-center justify-between border-t border-slate-900/60 text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-amber-400 transition-colors">
                <span className="tracking-widest">Enquire About Admission</span>
                <span className="text-[10px] font-semibold bg-slate-950 px-2.5 py-1 rounded-md border border-slate-900 text-slate-400 transition-all group-hover:bg-amber-500/5 group-hover:text-amber-400 group-hover:border-amber-500/30">
                  Gaya Batches
                </span>
              </div>
            </a>
          ))}
        </div>
        
      </div>
    </section>
  );
}