"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, User, Phone, GraduationCap, Target, Calendar } from "lucide-react";
import { SITE } from "@/lib/site-data";

const schema = z.object({
  name: z.string().min(2, "Please enter the student's full name"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  studentClass: z.string().min(1, "Please select a class"),
  exam: z.string().min(1, "Please select a target exam"),
  batch: z.string().min(1, "Please select a preferred batch"),
});

type FormData = z.infer<typeof schema>;

export default function EnquiryForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const isDark = variant === "dark";
  
  // Refined input styles tailored to match the Hero's premium depth
  const inputClass = `w-full rounded-xl border pl-10 pr-4 py-3 text-sm font-medium outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-700 bg-white appearance-none ${
    isDark
      ? "border-slate-800 bg-slate-900 text-slate-100 placeholder:text-slate-500"
      : "border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white"
  }`;
  
  const labelClass = `mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider ${
    isDark ? "text-slate-400" : "text-slate-600"
  }`;

  const iconClass = `absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 transition-colors ${
    isDark ? "text-slate-500" : "text-slate-400"
  }`;

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl p-8 text-center animate-fadeIn">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
          <CheckCircle2 className="h-6 w-6 stroke-[2.5]" />
        </div>
        <h3 className={`text-xl font-serif font-black tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
          Enquiry Received!
        </h3>
        <p className={`text-xs leading-relaxed font-medium max-w-xs ${isDark ? "text-slate-400" : "text-slate-600"}`}>
          Our experienced admissions counsellor will reach out within 24 hours. Let's build your legacy!
        </p>
        <button 
          onClick={() => setStatus("idle")} 
          className="mt-4 px-5 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all active:scale-95"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {/* Name Input */}
      <div>
        <label className={labelClass} htmlFor="name">
          <span>Student Full Name</span>
        </label>
        <div className="relative">
          <User className={iconClass} />
          <input id="name" placeholder="e.g., Rohan Kumar" className={inputClass} {...register("name")} />
        </div>
        {errors.name && <p className="mt-1 text-xs font-semibold text-rose-600">{errors.name.message}</p>}
      </div>

      {/* Phone Input */}
      <div>
        <label className={labelClass} htmlFor="phone">
          <span>Contact Number</span>
        </label>
        <div className="relative">
          <Phone className={iconClass} />
          <input
            id="phone"
            type="tel"
            placeholder="10-digit mobile number"
            className={inputClass}
            {...register("phone")}
          />
        </div>
        {errors.phone && <p className="mt-1 text-xs font-semibold text-rose-600">{errors.phone.message}</p>}
      </div>

      {/* Grid Layout fields */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="studentClass">
            <span>Current Class</span>
          </label>
          <div className="relative">
            <GraduationCap className={iconClass} />
            <select id="studentClass" className={inputClass} {...register("studentClass")} defaultValue="">
              <option value="" disabled>Select</option>
              <option value="10th">Class 10th</option>
              <option value="11th">Class 11th</option>
              <option value="12th">Class 12th</option>
              <option value="Dropper">Dropper</option>
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400">▼</div>
          </div>
          {errors.studentClass && <p className="mt-1 text-xs font-semibold text-rose-600">{errors.studentClass.message}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="exam">
            <span>Target Exam</span>
          </label>
          <div className="relative">
            <Target className={iconClass} />
            <select id="exam" className={inputClass} {...register("exam")} defaultValue="">
              <option value="" disabled>Select</option>
              <option value="CLAT">CLAT</option>
              <option value="AILET">AILET</option>
              <option value="CUET">CUET</option>
              <option value="Not Sure">Not Sure</option>
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400">▼</div>
          </div>
          {errors.exam && <p className="mt-1 text-xs font-semibold text-rose-600">{errors.exam.message}</p>}
        </div>
      </div>

      {/* Batch Select */}
      <div>
        <label className={labelClass} htmlFor="batch">
          <span>Preferred Batch Timing</span>
        </label>
        <div className="relative">
          <Calendar className={iconClass} />
          <select id="batch" className={inputClass} {...register("batch")} defaultValue="">
            <option value="" disabled>Select preferred timing slot</option>
            <option value="Morning">Morning Batch</option>
            <option value="Afternoon">Afternoon Batch</option>
            <option value="Evening">Evening Batch</option>
            <option value="Weekend">Weekend Batch</option>
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400">▼</div>
        </div>
        {errors.batch && <p className="mt-1 text-xs font-semibold text-rose-600">{errors.batch.message}</p>}
      </div>

      {/* High-Impact Interactive Submit Button */}
      <button 
        type="submit" 
        disabled={status === "loading"} 
        className="group flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-blue-700 to-indigo-800 px-6 py-3.5 text-sm font-extrabold text-white transition-all duration-300 hover:from-blue-800 hover:to-indigo-900 hover:scale-[1.01] active:scale-[0.99] shadow-md shadow-blue-700/10"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin text-white" /> 
            <span>Processing Application...</span>
          </>
        ) : (
          <span>Book Free Counselling Session</span>
        )}
      </button>

      {status === "error" && (
        <p className="text-center text-xs font-bold text-rose-600 bg-rose-50 border border-rose-100 rounded-lg py-2">
          Something went wrong. Please connect instantly at {SITE.phoneHref ? "+91 72502 59005" : ""}.
        </p>
      )}

      <p className={`text-center text-[10px] font-medium leading-normal ${isDark ? "text-slate-500" : "text-slate-400"}`}>
        By submitting, you agree to receive strategic calls / WhatsApp updates regarding admissions.
      </p>
    </form>
  );
}