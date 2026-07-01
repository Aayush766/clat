"use client";

import { useEffect, useState } from "react";
import { X, Gift } from "lucide-react";
import { SITE } from "@/lib/site-data";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const alreadyShown = sessionStorage.getItem("ch_scholarship_popup_shown");
    if (alreadyShown) return;

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
        sessionStorage.setItem("ch_scholarship_popup_shown", "1");
      }
    };

    // Fallback for mobile: show after 25s of engagement
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("ch_scholarship_popup_shown")) {
        setShow(true);
        sessionStorage.setItem("ch_scholarship_popup_shown", "1");
      }
    }, 25000);

    document.addEventListener("mouseleave", onMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      clearTimeout(timer);
    };
  }, [dismissed]);

  if (!show || dismissed) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/70 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl">
        <button
          onClick={() => setDismissed(true)}
          aria-label="Close popup"
          className="absolute right-4 top-4 rounded-full p-1.5 text-navy-400 hover:bg-navy-50 hover:text-navy-800"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold-100 text-gold-600">
          <Gift className="h-7 w-7" />
        </div>

        <h3 className="font-display text-2xl font-extrabold text-navy-900">Wait! Special Scholarship Inside</h3>
        <p className="mt-2 text-sm text-navy-600">
          Get up to <span className="font-bold text-gold-600">25% scholarship</span> on CLAT, AILET & CUET
          coaching in Gaya — limited seats for the upcoming batch.
        </p>

        <a
          href="#contact"
          onClick={() => setDismissed(true)}
          className="btn-primary mt-6 w-full"
        >
          Claim My Scholarship Slot
        </a>
        <a href={SITE.phoneHref} className="mt-3 block text-xs font-semibold text-navy-500 hover:text-gold-600">
          Or call us directly at {SITE.phone}
        </a>
      </div>
    </div>
  );
}
