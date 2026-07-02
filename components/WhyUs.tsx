"use client";

import { GraduationCap, HeartHandshake, NotebookPen, MapPin, Users2, Trophy } from "lucide-react";

const REASONS = [
  {
    icon: GraduationCap,
    title: "Expert, Experienced Faculty",
    description:
      "Our faculty team, led by GATE-qualified director Avinash Kumar, brings 8+ years of teaching experience in competitive exam preparation.",
    colorClass: "from-blue-600 to-indigo-700 text-blue-700 bg-blue-50 border-blue-100/70"
  },
  {
    icon: HeartHandshake,
    title: "'Students First' Philosophy",
    description:
      "Every student gets individual attention, structured study plans, and constant mentorship — not just exam prep, but real career guidance.",
    colorClass: "from-indigo-600 to-purple-700 text-indigo-700 bg-indigo-50 border-indigo-100/70"
  },
  {
    icon: NotebookPen,
    title: "Structured Law Curriculum",
    description:
      "A curriculum built around the latest exam patterns, with regular mock tests, doubt-clearing sessions, and performance tracking.",
    colorClass: "from-blue-600 to-cyan-600 text-cyan-700 bg-cyan-50/70 border-cyan-100/70"
  },
  {
    icon: MapPin,
    title: "Right Here in Gaya, Bihar",
    description:
      "Big-city quality CLAT coaching without leaving home. Students from across Gaya and Bihar choose Career Heights for local, trusted coaching.",
    colorClass: "from-orange-500 to-amber-600 text-orange-700 bg-orange-50/80 border-orange-100/70"
  },
  {
    icon: Users2,
    title: "Small Batch, Personal Mentorship",
    description:
      "Focused batch sizes ensure every student is seen, heard, and guided — not lost in a crowd of hundreds.",
    colorClass: "from-violet-600 to-purple-700 text-violet-700 bg-violet-50 border-violet-100/70"
  },
  {
    icon: Trophy,
    title: "Proven Track Record of Results",
    description:
      "A results-driven approach with a growing list of selections and rank improvements across CLAT, AILET, and CUET.",
    colorClass: "from-emerald-600 to-teal-700 text-emerald-700 bg-emerald-50 border-emerald-100/70"
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-white via-slate-50/40 to-white">
      
      {/* Soft background glow to maintain consistency with the Hero style */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-100/20 to-indigo-100/0 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50/60 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-800 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>The Career Heights Edge</span>
          </div>
          
          <h2 className="font-serif text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem] leading-[1.2]">
            Why Career Heights is Gaya&apos;s Most Trusted CLAT Coaching Institute
          </h2>
          
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            We&apos;re not just another coaching centre — we&apos;re Bihar&apos;s dedicated law entrance
            partner, built for students in Gaya who deserve city-level preparation, close to home.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {REASONS.map(({ icon: Icon, title, description, colorClass }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-6 sm:p-8 shadow-sm shadow-slate-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/40 hover:-translate-y-1"
            >
              {/* Premium Gradient Accent Line on Card Hover */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${colorClass.split(" ")[0]} ${colorClass.split(" ")[1]} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              
              {/* Elegant Framed Icon Container */}
              <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl border font-semibold transition-all duration-300 group-hover:scale-105 ${colorClass}`}>
                <Icon className="h-5 w-5 stroke-[2]" />
              </div>
              
              {/* Content Block */}
              <div className="space-y-2.5">
                <h3 className="font-serif text-lg font-black text-slate-900 tracking-tight transition-colors duration-300 group-hover:text-blue-800">
                  {title}
                </h3>
                
                <p className="text-sm leading-relaxed text-slate-600 font-medium">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}