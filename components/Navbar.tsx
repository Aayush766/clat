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
          ? "bg-slate-950/70 backdrop-blur-xl border-b border-slate-900/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-gradient-to-b from-slate-950/60 via-slate-950/10 to-transparent border-b border-white/[0.03]"
      }`}
    >
      {/* Top Banner hidden when scrolling */}
      {!scrolled && <AnnouncementBar />}

      <nav className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
        
        {/* Brand Logo & Title Area - Increased Logo and Clean Visibility */}
        <Link href="#home" className="flex items-center gap-3.5 group">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white p-1.5 border border-slate-800 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:border-amber-500/50">
            <Image
              src="/images/career-heights-gaya-logo.png"
              alt="Career Heights Gaya Logo"
              fill
              priority
              className="object-contain p-0.5 transition-all duration-300 group-hover:scale-110 h-[100%] w-[100%]"
            />
          </div>
          {/* <div className="flex flex-col">
            <span className="font-serif text-lg font-black tracking-tight text-white sm:text-2xl transition-colors duration-300 group-hover:text-amber-400 leading-none">
              Career Heights
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-500 mt-1.5 flex items-center gap-1 leading-none">
              <span className="h-1 w-1 rounded-full bg-amber-500 animate-pulse" />
              Gaya Center
            </span>
          </div> */}
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.filter((l) => l.label !== "Courses").map((link) =>
            link.label === "Home" ? null : (
              <a
                key={link.href}
                href={link.href}
                className="relative text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white transition-colors duration-300 py-1.5 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-gradient-to-r after:from-amber-500 after:to-amber-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            )
          )}
          
          {/* Premium Courses Dropdown Trigger */}
          <div
            className="relative"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <button className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white py-2 transition-colors duration-300">
              <span>Courses</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${coursesOpen ? "rotate-180 text-amber-500" : ""}`} />
            </button>
            
            {/* Dropdown Options Box */}
            <div
              className={`absolute left-1/2 top-full w-64 -translate-x-1/2 pt-2 transition-all duration-300 ${
                coursesOpen 
                  ? "opacity-100 scale-100 pointer-events-auto translate-y-0" 
                  : "opacity-0 scale-95 pointer-events-none -translate-y-2"
              }`}
            >
              <div className="rounded-xl border border-slate-800/80 bg-slate-950/95 p-1.5 shadow-2xl backdrop-blur-xl">
                {COURSES.map((c) => (
                  <a
                    key={c.id}
                    href="#courses"
                    onClick={() => setCoursesOpen(false)}
                    className="group flex flex-col gap-0.5 rounded-lg px-3.5 py-2.5 text-left transition-all duration-200 hover:bg-slate-900/60"
                  >
                    <span className="text-xs font-bold text-slate-200 group-hover:text-amber-400 transition-colors">
                      {c.name}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium tracking-wide">
                      Available in Gaya Center
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Button Layout - Fixed Phone Number and Icon Centering */}
        <div className="hidden items-center gap-4 lg:flex whitespace-nowrap">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 rounded-xl px-2 py-2 text-xs font-bold tracking-wide text-slate-300 hover:text-amber-400 transition-colors duration-300 shrink-0"
          >
            <Phone className="h-3.5 w-3.5 text-amber-500 stroke-[2.5]" /> 
            <span>+91 72502 59005</span>
          </a>
          
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/40 text-emerald-400 transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 hover:scale-105 shrink-0"
            aria-label="Chat on WhatsApp"
          >
            <div className="flex h-4 w-4 items-center justify-center">
              <WhatsAppIcon className="h-full w-full object-contain" />
            </div>
          </a>
          
          <a 
            href="#contact" 
            className="relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-slate-950 shadow-md shadow-amber-500/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-amber-500/20 active:scale-[0.98] shrink-0"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className={`rounded-xl p-2 lg:hidden transition-all duration-200 active:scale-90 ${
            scrolled ? "text-white hover:bg-slate-900" : "text-white hover:bg-white/5"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu Glass Overlay */}
      <div
        className={`fixed inset-x-4 top-24 rounded-2xl border border-slate-900 bg-slate-950/98 backdrop-blur-xl p-5 shadow-2xl transition-all duration-300 lg:hidden ${
          open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-900/50 hover:text-amber-400 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-900 pt-5">
          <a 
            href={SITE.phoneHref} 
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/30 py-3 text-xs font-bold text-slate-300 active:bg-slate-900 transition-colors whitespace-nowrap px-1"
          >
            <Phone className="h-4 w-4 text-amber-500 shrink-0" /> <span className="text-[11px]">+91 72502 59005</span>
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600/90 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-600/10 active:bg-emerald-700 transition-colors"
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
          className="mt-3 block w-full rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 py-3.5 text-center text-xs font-black uppercase tracking-widest text-slate-950 shadow-md transition-colors"
        >
          Enroll Now
        </a>
      </div>
    </header>
  );
}