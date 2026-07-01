// components/TrustBar.tsx
"use client";

import { Star, Users, Award, TrendingUp } from "lucide-react";

const STATS = [
  { 
    icon: Star, 
    value: "5.0", 
    label: "Google Rating", 
    sublabel: "47 Verified Reviews",
    iconColor: "text-amber-500 bg-amber-50"
  },
  { 
    icon: Users, 
    value: "500+", 
    label: "Students Trained", 
    sublabel: "Locally in Gaya Hub",
    iconColor: "text-blue-600 bg-blue-5" 
  },
  { 
    icon: Award, 
    value: "8+ Yrs", 
    label: "Expert Faculty", 
    sublabel: "Core Law Mentorship",
    iconColor: "text-indigo-600 bg-indigo-50"
  },
  { 
    icon: TrendingUp, 
    value: "100%", 
    label: "Success Focus", 
    sublabel: "Result-Oriented System",
    iconColor: "text-emerald-600 bg-emerald-50"
  },
];

export default function TrustBar() {
  return (
    <div className="w-full bg-white rounded-xl divide-y divide-slate-100 lg:divide-y-0 lg:divide-x lg:grid lg:grid-cols-4 py-2">
      {STATS.map(({ icon: Icon, value, label, sublabel, iconColor }) => (
        <div 
          key={label} 
          className="group flex items-center gap-4 px-6 py-5 lg:py-4 transition-all duration-300 hover:bg-slate-50/60 first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-r-none lg:last:rounded-r-xl lg:last:rounded-b-none"
        >
          {/* Animated Icon Frame */}
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-semibold transition-transform duration-300 group-hover:scale-110 ${iconColor}`}>
            <Icon className="h-5 w-5 stroke-[2.25]" />
          </div>

          {/* Data Presentation */}
          <div className="space-y-0.5">
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                {value}
              </span>
              {label === "Google Rating" && (
                <div className="flex gap-0.5 text-amber-500 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </div>
              )}
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
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