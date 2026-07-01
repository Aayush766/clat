// components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight, Shield } from "lucide-react";
import { SITE, COURSES, NAV_LINKS } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 font-sans border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Upper Subsection: Editorial Matrix */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-12 lg:gap-8">
          
          {/* Main Brand Column Block */}
          <div className="space-y-6 md:col-span-12 lg:col-span-5">
            <Link href="/#home" className="flex items-center gap-3 group">
              <div className="relative h-9 w-9 overflow-hidden rounded-lg bg-slate-900 p-1 border border-slate-800">
                <Image
                  src="/images/career-heights-gaya-logo.png"
                  alt="Career Heights Gaya Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="font-serif text-lg font-black tracking-tight text-white transition-colors group-hover:text-amber-500">
                Career Heights
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Shaping Bihar&apos;s legal mindsets since 2023. Providing structured legal reasoning frameworks, comprehensive mock analysis, and premium exam preparation modules for CLAT, AILET, and CUET aspirants.
            </p>
            
            {/* Minimalist Text-Based Social Links */}
            <div className="flex items-center gap-4 font-mono text-[10px] font-bold uppercase tracking-wider">
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                // Facebook
              </a>
              <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                // Youtube
              </a>
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                // Instagram
              </a>
            </div>
          </div>

          {/* Quick Navigation Links Array */}
          <div className="space-y-4 md:col-span-4 lg:col-span-2">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group">
                    <span>{l.label}</span>
                    <ArrowUpRight className="h-2.5 w-2.5 opacity-0 -translate-y-0.5 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Modules Links Array */}
          <div className="space-y-4 md:col-span-4 lg:col-span-2">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Programs
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {COURSES.map((c) => (
                <li key={c.id}>
                  <a href="#courses" className="text-slate-400 hover:text-white transition-colors block">
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reference Contacts Column Block */}
          <div className="space-y-4 md:col-span-4 lg:col-span-3">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Center Reference
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-600" />
                <span className="leading-relaxed">{SITE.address.full}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0 text-slate-600" />
                <a href={SITE.phoneHref} className="text-slate-300 font-bold hover:text-white transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0 text-slate-600" />
                <a href={`mailto:${SITE.email}`} className="text-slate-400 hover:text-white transition-colors break-all font-mono text-[11px]">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Subsection: Regulatory Metadata & Copyright Ledger */}
        <div className="border-t border-slate-900 py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-[11px] font-medium tracking-wide text-slate-500">
          <div className="flex flex-col gap-1.5 md:flex-row md:items-center md:gap-4">
            <p>© 2026 Career Heights Gaya.</p>
            <span className="hidden md:inline text-slate-800">|</span>
            <p className="flex items-center gap-1">
              <Shield className="h-3 w-3 stroke-[2]" /> Official Institutional Directory
            </p>
          </div>
          <p className="font-serif text-slate-600 italic text-xs md:text-right">
            Premium Exam Infrastructure for Law Aspirants across Bihar
          </p>
        </div>

      </div>
    </footer>
  );
}