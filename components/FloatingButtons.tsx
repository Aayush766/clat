"use client";

import { Phone } from "lucide-react";
import { SITE } from "@/lib/site-data";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-24 right-4 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={`https://wa.me/${SITE.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20CLAT%20coaching%20in%20Gaya`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 p-3.5 text-white shadow-lg transition-transform duration-300 hover:scale-110 animate-[pulse_2.5s_ease-in-out_infinite]"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
      <a
        href={SITE.phoneHref}
        aria-label="Call Career Heights Gaya"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-800 p-3.5 text-white shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
