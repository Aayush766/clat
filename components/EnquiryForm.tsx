"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";

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
  const inputClass = `w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-gold-400 ${
    isDark
      ? "border-white/20 bg-white/10 text-white placeholder:text-white/50"
      : "border-navy-100 bg-navy-50/50 text-navy-900 placeholder:text-navy-400"
  }`;
  const labelClass = `mb-1.5 block text-xs font-semibold uppercase tracking-wide ${
    isDark ? "text-white/70" : "text-navy-500"
  }`;

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-gold-400" />
        <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-navy-900"}`}>
          Enquiry Received!
        </h3>
        <p className={isDark ? "text-white/70" : "text-navy-600"}>
          Our admission counsellor will call you within 24 hours. You can also WhatsApp us anytime.
        </p>
        <button onClick={() => setStatus("idle")} className="btn-outline mt-2">
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div>
        <label className={labelClass} htmlFor="name">
          Student Name
        </label>
        <input id="name" placeholder="Enter full name" className={inputClass} {...register("name")} />
        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
      </div>

      <div>
        <label className={labelClass} htmlFor="phone">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="10-digit mobile number"
          className={inputClass}
          {...register("phone")}
        />
        {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="studentClass">
            Class
          </label>
          <select id="studentClass" className={inputClass} {...register("studentClass")} defaultValue="">
            <option value="" disabled>
              Select
            </option>
            <option value="10th">Class 10th</option>
            <option value="11th">Class 11th</option>
            <option value="12th">Class 12th</option>
            <option value="Dropper">Dropper / Repeater</option>
          </select>
          {errors.studentClass && <p className="mt-1 text-xs text-red-400">{errors.studentClass.message}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="exam">
            Target Exam
          </label>
          <select id="exam" className={inputClass} {...register("exam")} defaultValue="">
            <option value="" disabled>
              Select
            </option>
            <option value="CLAT">CLAT</option>
            <option value="AILET">AILET</option>
            <option value="CUET">CUET</option>
            <option value="Not Sure">Not Sure Yet</option>
          </select>
          {errors.exam && <p className="mt-1 text-xs text-red-400">{errors.exam.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="batch">
          Preferred Batch
        </label>
        <select id="batch" className={inputClass} {...register("batch")} defaultValue="">
          <option value="" disabled>
            Select preferred timing
          </option>
          <option value="Morning">Morning Batch</option>
          <option value="Afternoon">Afternoon Batch</option>
          <option value="Evening">Evening Batch</option>
          <option value="Weekend">Weekend Batch</option>
        </select>
        {errors.batch && <p className="mt-1 text-xs text-red-400">{errors.batch.message}</p>}
      </div>

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full">
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
          </>
        ) : (
          "Book Free Counselling Session"
        )}
      </button>

      {status === "error" && (
        <p className="text-center text-xs text-red-400">
          Something went wrong. Please call us directly at +91 91999 72878.
        </p>
      )}

      <p className={`text-center text-[11px] ${isDark ? "text-white/50" : "text-navy-400"}`}>
        By submitting, you agree to be contacted via call / WhatsApp / SMS regarding admissions.
      </p>
    </form>
  );
}
