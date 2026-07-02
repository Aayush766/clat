"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { SITE, NAV_LINKS, COURSES } from "@/lib/site-data";
import AnnouncementBar from "./AnnouncementBar";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm shadow-slate-100/40"
          : "bg-transparent"
      }`}
    >
      {/* Top Banner hidden when scrolling */}
      {!scrolled && <AnnouncementBar />}

      <nav className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-500 ${scrolled ? "py-2.5" : "py-4"}`}>
        
        {/* Brand Logo - Styled to dynamically frame beautifully onto light/clear headers */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="relative h-12 w-36 sm:w-44 shrink-0 transition-transform duration-300 group-hover:scale-[1.01]">
            <Image
              src="/images/career-heights-gaya-logo.png"
              alt="Career Heights Gaya Logo"
              width={190}
              height={60}
              priority
              className="h-auto w-full max-h-[48px] object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.filter((l) => l.label !== "Courses" && l.label !== "Home").map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-xs font-bold uppercase tracking-wider transition-colors duration-300 py-1.5 group/link ${
                scrolled ? "text-slate-600 hover:text-blue-800" : "text-slate-700 hover:text-slate-900"
              }`}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-700 to-indigo-800 transition-all duration-300 group-hover/link:w-full" />
            </a>
          ))}
          
          {/* Premium Courses Menu Dropdown Trigger */}
          <div
            className="relative"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <button className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider py-2 transition-colors duration-300 ${
              scrolled ? "text-slate-600 hover:text-blue-800" : "text-slate-700 hover:text-slate-900"
            }`}>
              <span>Courses</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${coursesOpen ? "rotate-180 text-blue-700" : ""}`} />
            </button>
            
            {/* Dropdown Options Container with Premium Soft Shadows */}
            <div
              className={`absolute left-1/2 top-full w-60 -translate-x-1/2 pt-2 transition-all duration-300 ${
                coursesOpen 
                  ? "opacity-100 scale-100 pointer-events-auto translate-y-0" 
                  : "opacity-0 scale-95 pointer-events-none -translate-y-2"
              }`}
            >
              <div className="rounded-2xl border border-slate-200/80 bg-white p-2 shadow-xl shadow-slate-200/60 backdrop-blur-lg">
                {COURSES.map((c) => (
                  <a
                    key={c.id}
                    href="#courses"
                    onClick={() => setCoursesOpen(false)}
                    className="group flex flex-col gap-0.5 rounded-xl px-4 py-2.5 text-left transition-all duration-200 hover:bg-slate-50"
                  >
                    <span className="text-xs font-bold text-slate-800 group-hover:text-blue-800 transition-colors">
                      {c.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold tracking-wide">
                      Premium Training Program
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Callouts — Restyled to use deep corporate blues & crisp emeralds */}
        <div className="hidden items-center gap-4 lg:flex whitespace-nowrap">
          <a
            href={SITE.phoneHref}
            className={`flex items-center gap-2 rounded-xl px-2 py-2 text-xs font-bold tracking-wide transition-colors duration-300 shrink-0 ${
              scrolled ? "text-slate-600 hover:text-blue-800" : "text-slate-700 hover:text-slate-900"
            }`}
          >
            <Phone className="h-3.5 w-3.5 text-blue-700 stroke-[2.5]" /> 
            <span>+91 7250259005</span>
          </a>
          
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50/50 text-emerald-600 transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 hover:scale-105 shrink-0"
            aria-label="Chat on WhatsApp"
          >
            <div className="flex h-4 w-4 items-center justify-center">
              <WhatsAppIcon className="h-full w-full object-contain" />
            </div>
          </a>
          
          <a 
            href="#contact" 
            className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-700 to-indigo-800 px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md shadow-blue-700/10 transition-all duration-300 hover:scale-[1.02] hover:from-blue-800 hover:to-indigo-900 active:scale-[0.98] shrink-0"
          >
            Enroll Now
          </a>
        </div>

        {/* Responsive Mobile Trigger button */}
        <button
          className={`rounded-xl p-2 lg:hidden transition-all duration-200 active:scale-90 ${
            scrolled ? "text-slate-800 hover:bg-slate-100" : "text-slate-800 hover:bg-slate-200/40"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Glass Menu Popover */}
      <div
        className={`fixed inset-x-4 top-24 rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-xl p-5 shadow-2xl shadow-slate-300/60 transition-all duration-300 lg:hidden ${
          open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-blue-800 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-5">
          <a 
            href={SITE.phoneHref} 
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-3 text-xs font-bold text-slate-700 active:bg-slate-100 transition-colors whitespace-nowrap px-1"
          >
            <Phone className="h-4 w-4 text-blue-700 shrink-0" /> 
            <span className="text-[11px]">+91 7250259005</span>
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-600/10 active:bg-emerald-700 transition-colors"
          >
            <div className="flex h-4 w-4 items-center justify-center shrink-0">
              <WhatsAppIcon className="h-full w-full object-contain" />
            </div>
            <span>WhatsApp</span>
          </a>
        </div>
        
        <a 
          href="#contact" 
          onClick={() => setOpen(false)} 
          className="mt-3 block w-full rounded-xl bg-gradient-to-r from-blue-700 to-indigo-800 py-3.5 text-center text-xs font-extrabold uppercase tracking-widest text-white shadow-md transition-all active:scale-[0.99]"
        >
          Enroll Now
        </a>
      </div>
    </header>
  );
}