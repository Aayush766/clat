"use client";

import Image from "next/image";
import { ArrowRight, Phone, Sparkles, GraduationCap, Clock } from "lucide-react";
import { SITE, TRUST_BADGES } from "@/lib/site-data";
import EnquiryForm from "./EnquiryForm";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-slate-950 pt-28 pb-16 lg:pt-36 lg:pb-24">
      
      {/* Background Graphic and Overlay */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/images/clat-coaching-institute-gaya-career-heights.webp"
          alt="Career Heights Gaya — Best CLAT Coaching Institute in Gaya, Bihar"
          fill
          priority
          className="object-cover opacity-[0.08] mix-blend-luminosity grayscale filter"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-9">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Heading and Brand Introduction */}
          <div className="space-y-8 text-center lg:col-span-7 lg:text-left">
            
            {/* Elegant Location Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-4 py-1.5 text-xs font-semibold tracking-wide text-amber-500 shadow-inner">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              <span>Gaya&apos;s Most Trusted CLAT Coaching Institute</span>
            </div>

            {/* Typography Hierarchy (Optimized H1) */}
            <div className="space-y-5">
              <h1 className="font-serif text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-[3.8rem] lg:leading-[1.15]">
                Gaya&apos;s #1 CLAT <br className="hidden lg:block"/>
                Coaching Institute <br />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
                  Shaping Bihar&apos;s Future Lawyers.
                </span>
              </h1>
              
              <p className="mx-auto max-w-xl font-sans text-sm font-normal leading-relaxed text-slate-400 lg:mx-0 sm:text-base">
                Welcome to <strong className="text-white font-semibold">Career Heights Gaya</strong> — proudly preparing Bihar&apos;s future lawyers, judges, and legal professionals since 2023. Led by Avinash Kumar (BTech, MTech, GATE Qualified | 8+ years of experience), we offer personalized, expert-driven coaching for <strong className="text-white font-semibold">CLAT, AILET, and CUET</strong> right here in Gaya, so you don&apos;t need to leave home for premium law entrance preparation.
              </p>
            </div>

            {/* Local NAP Signals (Crucial for Local SEO) */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400 lg:justify-start border-t border-b border-slate-900 py-3">
              <div className="flex items-center gap-2">
                <span className="text-amber-500">📍</span>
                <span>Kautilyapuri Colony, Gaya, Bihar 823001</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-amber-500" />
                <span>Open 9 AM - 7 PM</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-semibold tracking-wide text-slate-400 lg:justify-start">
              {TRUST_BADGES.map((badge) => (
                <div key={badge} className="flex items-center gap-2 transition-colors hover:text-slate-200">
                  <span className="text-amber-500 font-bold">✓</span>
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 lg:justify-start">
              <a 
                href={SITE.phoneHref}
                className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-white px-6 py-4 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/5"
              >
                <Phone className="h-4 w-4 stroke-[2.5]" />
                <span>Call Admissions</span>
              </a>
              
              <a 
                href={`https://wa.me/${SITE.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20the%20Best%20CLAT%20Coaching%20in%20Gaya`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/40 px-6 py-4 text-sm font-bold text-emerald-400 transition-all duration-300 hover:bg-slate-900 hover:border-slate-700 hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Enquiry Form Container */}
          <div className="mx-auto w-full max-w-md lg:col-span-5 lg:mr-0">
            <div className="relative overflow-hidden rounded-2xl border border-slate-900 bg-slate-950 p-6 shadow-2xl shadow-black/80 sm:p-8">
              
              {/* Subtle Top Accent Border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
              
              <div className="mb-6 space-y-2 text-center">
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 shadow-inner">
                  <GraduationCap className="h-5 w-5 stroke-[2]" />
                </div>
                <h2 className="font-serif text-xl font-bold tracking-tight text-white">
                  Enroll for CLAT 2025 Batch
                </h2>
                <p className="mx-auto max-w-[280px] text-xs text-amber-500 font-medium animate-pulse">
                  Limited Seats Available. Book a Free Session!
                </p>
              </div>

              <div className="relative rounded-xl border border-slate-900 bg-slate-900/20 p-2">
                <EnquiryForm variant="dark" />
              </div>

              <a 
                href="#enquiry" 
                className="mt-5 group flex items-center justify-between px-1 text-xs font-semibold text-slate-500 transition-colors hover:text-amber-500"
              >
                <span>View course fees & eligibility</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}