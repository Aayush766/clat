"use client";

import { Phone, MessageCircle, PenLine } from "lucide-react";
import { SITE } from "@/lib/site-data";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 border-t border-navy-100 bg-white shadow-[0_-4px_20px_rgba(15,36,68,0.08)] sm:hidden">
      <a href={SITE.phoneHref} className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-navy-800">
        <Phone className="h-[18px] w-[18px]" />
        <span className="text-[10px] font-semibold">Call</span>
      </a>
      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-0.5 border-x border-navy-100 py-2.5 text-green-600"
      >
        <MessageCircle className="h-[18px] w-[18px]" />
        <span className="text-[10px] font-semibold">WhatsApp</span>
      </a>
      <a href="#contact" className="flex flex-col items-center justify-center gap-0.5 bg-gold-500 py-2.5 text-navy-900">
        <PenLine className="h-[18px] w-[18px]" />
        <span className="text-[10px] font-semibold">Enroll Now</span>
      </a>
    </div>
  );
}
