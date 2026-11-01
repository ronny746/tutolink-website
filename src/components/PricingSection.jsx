import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, Globe, Star, ShieldCheck, Zap, HelpCircle, HardDrive, Smartphone, Video } from 'lucide-react';

export default function PricingSection({ onOpenDemoModal }) {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      id: "cbt-core",
      name: "CBT Test Series & DPP Engine",
      badge: "For Exam Centers & Tutors",
      monthlyPrice: 1299,
      annualPrice: 999,
      storage: "10 GB Cloud Storage",
      desc: "Perfect for coaching centers focusing on JEE, NEET, and Board computer exams without heavy video costs.",
      features: [
        "Real NTA-Pattern Computer Exam Engine (+4 / -1 Marking)",
        "Upload Private Question Bank via Word or Excel",
        "Automated Daily Practice Problems (DPP) Generator",
        "10 GB Cloud Storage (Question bank & 5+ yrs test logs)",
        "Student & Parent Web Login Portals",
        "Instant Percentile Rank Cards & Time Analytics",
        "Free 1-Click Excel Student Batch Migration"
      ],
      popular: false,
      ctaText: "Start at ₹999/month"
    },
    {
      id: "academic-ops",
      name: "Academic Operations & Fees",
      badge: "Most Popular For Coachings",
      monthlyPrice: 2299,
      annualPrice: 1799,
      storage: "50 GB Cloud Storage",
      desc: "The complete coaching operating system for student batches, WhatsApp fee automation, and protected study notes.",
      features: [
        "Everything in CBT Test Series, plus:",
        "Automated WhatsApp Fee Due Reminders with 1-Tap UPI",
        "Instant Digital PDF Receipts with Custom Institute Stamp",
        "1-Tap Batch Attendance with Instant WhatsApp Absent Alerts",
        "Protected Study Material Bank (Watermarked Chapter PDFs)",
        "50 GB High-Speed Document & Notes Cloud Storage",
        "Staff Roles: Director, Faculty, Typist, Accountant",
        "Director Dynamic Controls: Doubt chat on/off anytime"
      ],
      popular: true,
      ctaText: "Start 14-Day Free Trial"
    },
    {
      id: "hybrid-academy",
      name: "Hybrid Academy & Personal App",
      badge: "Full Digital Growth",
      monthlyPrice: 3699,
      annualPrice: 2999,
      storage: "200 GB Dedicated Media Storage",
      desc: "Broadcast HD live classes, archive lecture recordings, and get your own personal branded mobile app.",
      features: [
        "Everything in Academic Operations, plus:",
        "In-House HD Live Class Studio with Digital Whiteboard",
        "Automatic Class Recording & Anti-Piracy Cloud Library",
        "200 GB Dedicated Media & Video Storage Quota",
        "Public Course & Test Series Store (0% Commission)",
        "Automated Payment Gateway & Student Self-Enrolment",
        "Custom Website Domain (portal.yourcoaching.com)",
        "Personal Branded Android Mobile App (Play Store APK)"
      ],
      popular: false,
      ctaText: "Start Live Academy"
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#F8FAF5] border-b border-[#E2EBDC] relative overflow-hidden font-sans">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#7B9D60]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#C8DCAE] text-[#28371B] text-xs font-black uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#7B9D60]" />
            <span>Fair &amp; Modular SaaS • Starts at Just ₹999/Month</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#28371B] font-heading tracking-tight leading-tight">
            Pay Only for What You Use. <br className="hidden sm:inline" />
            <span className="text-[#7B9D60]">Zero Hidden Markups.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5A7446] font-medium">
            No forced packages. Every plan includes dedicated cloud storage and 
            <strong className="text-[#28371B] font-black"> 0% commission on your student fees.</strong>
          </p>

          {/* Monthly vs Annual Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-xs sm:text-sm font-bold ${!isAnnual ? 'text-[#28371B]' : 'text-[#5A7446]'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 rounded-full bg-[#7B9D60] p-1 transition-colors relative cursor-pointer"
              aria-label="Toggle annual billing"
            >
              <div className={`w-5 h-5 rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={`text-xs sm:text-sm font-bold flex items-center gap-1.5 ${isAnnual ? 'text-[#28371B]' : 'text-[#5A7446]'}`}>
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wide">
                Save 25%
              </span>
            </span>
          </div>
        </div>

        {/* 3 Modular Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'bg-white border-2 border-[#7B9D60] shadow-xl shadow-[#7B9D60]/10 ring-4 ring-[#7B9D60]/10 -translate-y-1'
                    : 'bg-white border border-[#D9E8CA] hover:border-[#7B9D60]/60 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#7B9D60] text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-5">
                  <div>
                    {!plan.popular && (
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#ECF4E2] text-[#638249] text-[10px] font-black uppercase tracking-wider mb-2">
                        {plan.badge}
                      </span>
                    )}
                    <h3 className="text-xl sm:text-2xl font-black text-[#28371B] font-heading">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#5A7446] font-medium mt-1 leading-relaxed">
                      {plan.desc}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="p-4 rounded-2xl bg-[#FAFCF9] border border-[#D9E8CA]/80 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-[#5A7446] tracking-wider block">
                      Starting At
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-black text-[#28371B]">
                        ₹{price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-[#5A7446] font-bold">
                        / month
                      </span>
                    </div>
                    <span className="text-[11px] text-[#5A7446] block font-medium">
                      {isAnnual ? 'Billed annually' : 'Billed monthly'} • 0% Commission
                    </span>
                  </div>

                  {/* Storage Quota Callout */}
                  <div className="p-3 rounded-xl bg-[#ECF4E2]/70 border border-[#C1DAB0] flex items-center gap-2.5">
                    <HardDrive className="w-4 h-4 text-[#638249] shrink-0" />
                    <span className="text-xs font-black text-[#28371B]">
                      Includes {plan.storage}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2.5 pt-1">
                    <span className="text-[11px] font-black uppercase text-[#28371B] tracking-wider block">
                      Included In This Plan:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#28371B]">
                        <div className="w-4 h-4 rounded-full bg-[#ECF4E2] text-[#638249] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 mt-6 border-t border-[#D9E8CA]/60 space-y-2">
                  <button
                    onClick={onOpenDemoModal}
                    className={`w-full py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm transition flex items-center justify-center gap-2 cursor-pointer ${
                      plan.popular
                        ? 'bg-[#7B9D60] hover:bg-[#638249] text-white shadow-md'
                        : 'bg-[#28371B] hover:bg-[#3d512a] text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-center text-[#5A7446] font-medium">
                    14-Day Free Risk-Free Trial Included
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
