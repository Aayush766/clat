import { GraduationCap, HeartHandshake, NotebookPen, MapPin, Users2, Trophy } from "lucide-react";

const REASONS = [
  {
    icon: GraduationCap,
    title: "Expert, Experienced Faculty",
    description:
      "Our faculty team, led by GATE-qualified director Avinash Kumar, brings 8+ years of teaching experience in competitive exam preparation.",
  },
  {
    icon: HeartHandshake,
    title: "'Students First' Philosophy",
    description:
      "Every student gets individual attention, structured study plans, and constant mentorship — not just exam prep, but real career guidance.",
  },
  {
    icon: NotebookPen,
    title: "Structured CLAT, AILET & CUET Curriculum",
    description:
      "A curriculum built around the latest exam patterns, with regular mock tests, doubt-clearing sessions, and performance tracking.",
  },
  {
    icon: MapPin,
    title: "Right Here in Gaya, Bihar",
    description:
      "Big-city quality CLAT coaching without leaving home. Students from across Gaya and Bihar choose Career Heights for local, trusted coaching.",
  },
  {
    icon: Users2,
    title: "Small Batch, Personal Mentorship",
    description:
      "Focused batch sizes ensure every student is seen, heard, and guided — not lost in a crowd of hundreds.",
  },
  {
    icon: Trophy,
    title: "Proven Track Record of Results",
    description:
      "A results-driven approach with a growing list of selections and rank improvements across CLAT, AILET, and CUET.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-amber-600 bg-amber-500/5 px-3 py-1 rounded-md border border-amber-500/10">
            The Career Heights Edge
          </span>
          
          {/* H2 Heading Optimized as per SEO Report Blueprint (H2 #1) */}
          <h2 className="font-serif text-3xl font-black tracking-tight text-slate-900 sm:text-4xl mt-4 leading-tight">
            Why Career Heights is Gaya&apos;s Most Trusted CLAT Coaching Institute
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
            We&apos;re not just another coaching centre — we&apos;re Bihar&apos;s dedicated law entrance
            partner, built for students in Gaya who deserve city-level preparation, close to home.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {REASONS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 shadow-sm shadow-slate-100/40 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/30 hover:-translate-y-1"
            >
              {/* Animated Icon Container */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f2444]/5 text-[#0f2444] transition-all duration-300 group-hover:bg-[#0f2444] group-hover:text-white group-hover:scale-105 shadow-inner">
                <Icon className="h-5 w-5 stroke-[1.5]" />
              </div>
              
              {/* Content block */}
              <h3 className="font-serif text-lg font-bold text-slate-900 tracking-tight transition-colors duration-300 group-hover:text-[#0f2444]">
                {title}
              </h3>
              
              <p className="mt-3 text-sm leading-relaxed text-slate-500 font-light">
                {description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}