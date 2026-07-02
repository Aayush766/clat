"use client";

import { CheckCircle2, ArrowUpRight, Sparkles } from "lucide-react";
import { COURSES } from "@/lib/site-data";

export default function Courses() {
  return (
    <section id="courses" className="relative w-full overflow-hidden bg-white py-0 sm:py-3">
      
      {/* Premium Blueprint Graphic Grid Mesh matching the UI Design System */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
        
        {/* Soft Premium Glow Accents */}
        <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 h-[600px] w-[600px] rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Structural Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-slate-200/80 pb-12">
          <div className="max-w-3xl space-y-4 text-center md:text-left mx-auto md:mx-0">
            
            {/* Elegant Context Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50/60 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-800 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              <span>Academic Programs</span>
            </div>
            
            {/* Premium H2 Header Block */}
            <h2 className="font-serif text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl leading-[1.15]">
              CLAT, AILET &amp; CUET Coaching in Gaya -{" "}
              <span className="bg-gradient-to-r from-blue-800 via-indigo-700 to-blue-600 bg-clip-text text-transparent">
                Programs We Offer
              </span>
            </h2>
            
            <p className="mx-auto md:mx-0 font-sans text-sm font-medium leading-relaxed text-slate-600 max-w-2xl sm:text-base">
              Whichever law entrance exam you&apos;re targeting, Career Heights has a structured, mentor-led program designed for it — providing premier law exam preparation right here in Gaya, Bihar.
            </p>
          </div>
        </div>

        {/* High-End Glassmorphic Course Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {COURSES.map((course) => (
            <a
              href="#contact"
              key={course.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 p-6 sm:p-8 backdrop-blur-md transition-all duration-500 hover:border-slate-300 hover:bg-white hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/50"
            >
              {/* Minimalist Top Micro Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transition-all duration-500 group-hover:via-blue-600/60" />
              
              {/* Card Top Block */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-md border border-amber-200 bg-amber-50/80 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-amber-800">
                    {course.short}
                  </span>
                  
                  {/* Interactive Framed Action Arrow Slot */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-700 group-hover:text-white group-hover:border-transparent group-hover:scale-110 shadow-sm">
                    <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                  </div>
                </div>

                {/* Info Text Elements */}
                <div className="space-y-3">
                  <h3 className="font-serif text-xl font-black tracking-tight text-slate-900 sm:text-2xl transition-colors duration-300 group-hover:text-blue-800">
                    {course.name}
                  </h3>
                  <p className="font-sans text-sm font-medium leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                    {course.description}
                  </p>
                </div>

                {/* Highlights Checklist Grid Section */}
                <ul className="grid grid-cols-1 gap-3.5 pt-6 border-t border-slate-100 sm:grid-cols-2">
                  {course.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-xs text-slate-600 font-medium transition-colors duration-300 group-hover:text-slate-800">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600 stroke-[2.5]" />
                      <span className="leading-normal">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Integration */}
              <div className="mt-8 pt-4 flex items-center justify-between border-t border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-700 transition-colors duration-300">
                <span className="tracking-widest">Enquire About Admission</span>
                <span className="text-[10px] font-black bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/60 text-slate-500 transition-all duration-300 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200/60">
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