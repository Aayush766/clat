"use client";

import Image from "next/image";
import { ArrowRight, Phone, Sparkles, GraduationCap, Clock, CheckCircle2 } from "lucide-react";
import { SITE, TRUST_BADGES } from "@/lib/site-data";
import EnquiryForm from "./EnquiryForm";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-28 pb-20 lg:pt-40 lg:pb-28">
      
      {/* Visual Depth Gradients & Elements */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/clat-coaching-institute-gaya-career-heights.webp"
          alt="Career Heights Gaya — Best CLAT Coaching Institute in Gaya, Bihar"
          fill
          priority
          className="object-cover opacity-[0.03] mix-blend-luminosity grayscale"
          sizes="100vw"
        />
        {/* Modern decorative glowing blobs to add premium depth */}
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-amber-200/20 to-orange-200/0 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-200/20 to-indigo-200/0 blur-3xl" />
        
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_60%,transparent_100%)] opacity-70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Branding, Impactful Typography & Trust */}
          <div className="space-y-8 text-center lg:col-span-7 lg:text-left">
            
            {/* Logo Wrapper with elegant layout spacing */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative rounded-2xl bg-white/80 p-3 shadow-md shadow-slate-200/50 backdrop-blur-sm border border-slate-100/80 transition-transform duration-300 hover:scale-[1.01]">
                <Image 
                  src="/images/career-heights-gaya-logo.png" 
                  alt="Career Heights Logo" 
                  width={240} 
                  height={76} 
                  className="h-auto w-auto max-h-[68px] object-contain"
                  priority
                />
              </div>
            </div>

            {/* Premium Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/70 bg-gradient-to-r from-orange-50 to-amber-50 px-4 py-1.5 text-xs font-bold tracking-wide text-orange-800 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              <Sparkles className="h-3.5 w-3.5 text-orange-600" />
              <span className="uppercase tracking-wider">Gaya&apos;s Premium Law Academy</span>
            </div>

            {/* Bold Typography Hierarchy */}
            <div className="space-y-5">
              <h1 className="font-serif text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-[3.75rem] lg:leading-[1.12]">
                Gaya&apos;s #1 CLAT <br className="hidden lg:block"/>
                Coaching Institute <br />
                <span className="relative mt-1 inline-block pb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-indigo-700 to-orange-600">
                  Shaping Bihar&apos;s Future Lawyers.
                  <span className="absolute bottom-0 left-0 h-[3px] w-1/3 rounded-full bg-gradient-to-r from-blue-700 to-orange-500 hidden lg:block" />
                </span>
              </h1>
              
              <p className="mx-auto max-w-xl font-sans text-sm font-normal leading-relaxed text-slate-600 lg:mx-0 sm:text-base">
                Welcome to <strong className="text-slate-900 font-semibold">Career Heights Gaya</strong> — proudly preparing Bihar&apos;s future lawyers, judges, and legal professionals since 2023. Led by Avinash Kumar (BTech, MTech, GATE Qualified | 8+ years of experience), we offer personalized, expert-driven coaching for <strong className="text-slate-900 font-semibold">CLAT, AILET, and CUET</strong> right here in Gaya, eliminating the need to leave home for tier-1 law entrance preparation.
              </p>
            </div>

            {/* Compact NAP Box */}
            <div className="inline-grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mx-auto lg:mx-0 rounded-2xl border border-slate-200/60 bg-white/60 p-4 shadow-sm backdrop-blur-sm text-xs font-bold text-slate-700">
              <div className="flex items-center justify-center lg:justify-start gap-3 border-b sm:border-b-0 sm:border-r border-slate-200/80 pb-2 sm:pb-0 sm:pr-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-orange-700 text-sm">📍</span>
                <span className="text-left">Kautilyapuri Colony, Gaya, Bihar 823001</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 pt-2 sm:pt-0 sm:pl-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <Clock className="h-4 w-4" />
                </span>
                <span className="text-left">Admissions Open: 9 AM - 7 PM</span>
              </div>
            </div>

            {/* Redesigned Premium Trust Checkmarks */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-bold uppercase tracking-wider text-slate-600 lg:justify-start">
              {TRUST_BADGES.map((badge) => (
                <div key={badge} className="flex items-center gap-2 group">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 transition-transform group-hover:scale-110" strokeWidth={2.5} />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* High-Impact Visual Call To Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:justify-start pt-2">
              <a 
                href={SITE.phoneHref}
                className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-800 px-7 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:from-blue-800 hover:to-indigo-900 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-700/20"
              >
                <Phone className="h-4 w-4 stroke-[2.5] transition-transform group-hover:rotate-12" />
                <span>Call Admissions Desk</span>
              </a>
              
              <a 
                href={`https://wa.me/${SITE.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20the%20Best%20CLAT%20Coaching%20in%20Gaya`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl border-2 border-emerald-500/30 bg-emerald-50/40 px-7 py-4 text-sm font-extrabold text-emerald-700 transition-all duration-300 hover:bg-emerald-50 hover:border-emerald-500 hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Inquire via WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-Conversion Container Card */}
          <div className="mx-auto w-full max-w-md lg:col-span-5 lg:mr-0">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-2xl shadow-slate-300/70 sm:p-8">
              
              {/* Eye-catching Top Decorative Color Split */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-blue-700 via-indigo-600 to-orange-500" />
              
              <div className="mb-6 space-y-2 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-700 shadow-inner border border-blue-100/50">
                  <GraduationCap className="h-6 w-6 stroke-[2]" />
                </div>
                <h2 className="font-serif text-2xl font-black tracking-tight text-slate-900">
                  Secure Your Seat
                </h2>
                <div className="inline-block rounded-full bg-orange-50 px-3 py-1 border border-orange-100 animate-pulse">
                  <p className="text-[11px] text-orange-700 font-extrabold uppercase tracking-wider">
                    CLAT 2025 Batch • Limited Intake
                  </p>
                </div>
              </div>

              {/* Form container wrapping with slight depth styling */}
              <div className="relative rounded-2xl border border-slate-100 bg-slate-50/60 p-2.5 shadow-inner">
                <EnquiryForm variant="light" />
              </div>

              <a 
                href="#enquiry" 
                className="mt-6 group flex items-center justify-between rounded-xl bg-slate-50 hover:bg-blue-50/50 px-4 py-3 text-xs font-bold text-slate-600 transition-all duration-300 hover:text-blue-700 border border-slate-100"
              >
                <span>View batch details, fees & eligibility</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 text-slate-400 group-hover:text-blue-700" />
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}