"use client";

import { Star, Users, Award, TrendingUp } from "lucide-react";

const STATS = [
  { 
    icon: Star, 
    value: "5.0", 
    label: "Google Rating", 
    sublabel: "47 Verified Reviews",
    iconColor: "text-amber-600 bg-amber-50 border-amber-100/70"
  },
  { 
    icon: Users, 
    value: "500+", 
    label: "Students Trained", 
    sublabel: "Locally in Gaya Hub",
    iconColor: "text-blue-700 bg-blue-50 border-blue-100/70" 
  },
  { 
    icon: Award, 
    value: "8+ Yrs", 
    label: "Expert Faculty", 
    sublabel: "Core Law Mentorship",
    iconColor: "text-indigo-700 bg-indigo-50 border-indigo-100/70"
  },
  { 
    icon: TrendingUp, 
    value: "100%", 
    label: "Success Focus", 
    sublabel: "Result-Oriented System",
    iconColor: "text-emerald-700 bg-emerald-50 border-emerald-100/70"
  },
];

export default function TrustBar() {
  return (
    <div className="w-full bg-white/70 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-xl shadow-slate-200/40 divide-y divide-slate-100 lg:divide-y-0 lg:divide-x lg:grid lg:grid-cols-4 p-1">
      {STATS.map(({ icon: Icon, value, label, sublabel, iconColor }) => (
        <div 
          key={label} 
          className="group flex items-center gap-4 px-6 py-5 lg:py-4 transition-all duration-300 hover:bg-white/90 first:rounded-t-2xl last:rounded-b-2xl lg:first:rounded-l-2xl lg:first:rounded-r-none lg:last:rounded-r-2xl lg:last:rounded-b-none"
        >
          {/* Enhanced Premium Icon Frame */}
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border font-semibold transition-all duration-300 group-hover:scale-105 group-hover:shadow-sm ${iconColor}`}>
            <Icon className="h-5 w-5 stroke-[2.25]" />
          </div>

          {/* Clean Visual Hierarchy Data Presentation */}
          <div className="space-y-0.5">
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                {value}
              </span>
              {label === "Google Rating" && (
                <div className="flex gap-0.5 text-amber-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </div>
              )}
            </div>
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700">
                {label}
              </p>
              <p className="text-[11px] font-medium text-slate-400">
                {sublabel}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}