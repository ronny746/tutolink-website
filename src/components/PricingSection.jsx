import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, Globe, Star, ShieldCheck, Zap, HelpCircle } from 'lucide-react';

export default function PricingSection({ onOpenDemoModal }) {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      id: "essential",
      name: "Essential Plan",
      badge: "For Solo Educators & Tutors",
      monthlyPrice: 1299,
      annualPrice: 999,
      students: "Up to 100 Students",
      desc: "Perfect for independent tutors and growing tuition centers looking to digitize their classroom operations.",
      features: [
        "100% White-Labeled Institute Web Portal",
        "Student & Batch Roster Management",
        "Encrypted PDF Notes & Study Material Library",
        "Basic Online Quizzes & Homework Assignment",
        "Parent Mobile View & Attendance Register",
        "Unlimited Teacher & Typist Logins",
        "Free 1-Click Excel Student Migration"
      ],
      popular: false,
      ctaText: "Start With Essential"
    },
    {
      id: "growth-pro",
      name: "Growth Pro",
      badge: "Most Popular For Institutes",
      monthlyPrice: 3199,
      annualPrice: 2499,
      students: "Up to 350 Students",
      desc: "The complete competitive operating system for JEE, NEET, and Board coaching institutes.",
      features: [
        "Everything in Essential, plus:",
        "50,000+ Pre-Tagged Question Bank (JEE/NEET)",
        "NTA-Pattern CBT Exam Engine with AIR Ranks",
        "Daily Practice Problems (DPP) Auto-Generator",
        "Automated WhatsApp Fee Due Reminders + UPI",
        "Low-Bandwidth HD Live Classes + Auto-Attendance",
        "Encrypted Anti-Piracy Cloud Lecture Archiving",
        "Online Course Store & Test Series (0% Commission)",
        "Priority Phone & WhatsApp Support"
      ],
      popular: true,
      ctaText: "Start 14-Day Free Trial"
    },
    {
      id: "scale-enterprise",
      name: "Scale Enterprise",
      badge: "Multi-Branch Academies",
      monthlyPrice: 6999,
      annualPrice: 5499,
      students: "1,000+ Students (Expandable)",
      desc: "For premier coaching institutes and multi-branch academies requiring dedicated infrastructure.",
      features: [
        "Everything in Growth Pro, plus:",
        "Custom Branded Android & iOS Mobile App",
        "Multi-Branch Central Administrative Dashboard",
        "Custom Institute Domain (e.g. youracademy.com)",
        "Advanced AI Anti-Cheating & Exam Proctoring",
        "Automated Biometric Machine Sync Support",
        "Dedicated Account Manager & Fast-Track Migration",
        "Custom API & Payment Gateway Integrations"
      ],
      popular: false,
      ctaText: "Contact Enterprise Sales"
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#F8FAF5] border-b border-[#E2EBDC] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#7B9D60]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#C8DCAE] text-[#1F2922] text-xs font-black uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#7B9D60]" />
            <span>Honest &amp; Transparent Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1F2922] font-heading tracking-tight leading-tight">
            Start Small. <span className="text-[#7B9D60]">Scale Exponentially.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#576659] font-medium">
            No hidden setup fees. No long-term lock-in. And most importantly: <br className="hidden sm:inline" />
            <strong className="text-[#1F2922] font-black">0% commission on your course sales.</strong>
          </p>

          {/* Monthly vs Annual Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-xs sm:text-sm font-bold ${!isAnnual ? 'text-[#1F2922]' : 'text-[#576659]'}`}>
              Monthly Billing
            </span>

            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 rounded-full bg-[#1F2922] p-1 transition-colors relative focus:outline-none"
              aria-label="Toggle annual billing"
            >
              <div 
                className={`w-5 h-5 rounded-full bg-[#7B9D60] transition-transform duration-300 ${
                  isAnnual ? 'translate-x-7' : 'translate-x-0'
                }`} 
              />
            </button>

            <span className={`text-xs sm:text-sm font-bold flex items-center gap-1.5 ${isAnnual ? 'text-[#1F2922]' : 'text-[#576659]'}`}>
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full bg-[#EBF4E3] text-[#7B9D60] text-[10px] font-black border border-[#C8DCAE]">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'border-2 border-[#7B9D60] shadow-[0_20px_50px_rgba(123,157,96,0.18)] lg:-translate-y-2'
                    : 'border border-[#E2EBDC] shadow-sm hover:border-[#7B9D60]/50 hover:shadow-lg'
                }`}
              >
                {/* Most Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#7B9D60] text-white text-[11px] font-black uppercase px-4 py-1 rounded-full tracking-wider flex items-center gap-1 shadow-md">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    Most Popular Choice
                  </div>
                )}

                <div className="space-y-6">
                  
                  {/* Plan Header */}
                  <div>
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-[#FAFDF8] text-[#7B9D60] border border-[#E2EBDC]">
                      {plan.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#1F2922] font-heading mt-3">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#576659] mt-1.5 leading-relaxed font-medium">
                      {plan.desc}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pt-2 border-t border-[#E2EBDC]">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-black text-[#1F2922] font-heading">
                        ₹{price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-[#576659] font-bold">/ month</span>
                    </div>
                    <p className="text-[11px] text-[#7B9D60] font-bold mt-1">
                      {plan.students} • Billed {isAnnual ? 'annually' : 'monthly'}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="pt-4 border-t border-[#E2EBDC] space-y-2.5 text-xs">
                    <p className="text-[11px] font-black text-[#1F2922] uppercase tracking-wider">
                      Included in this plan:
                    </p>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 font-medium text-[#1F2922]">
                        <Check className="w-4 h-4 text-[#7B9D60] flex-shrink-0 mt-0.5" />
                        <span className={idx === 0 && plan.popular ? "font-bold text-[#7B9D60]" : ""}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Plan Action CTA */}
                <div className="pt-8">
                  <button
                    onClick={onOpenDemoModal}
                    className={`w-full py-3.5 px-6 rounded-2xl font-extrabold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-xs group ${
                      plan.popular
                        ? 'bg-[#7B9D60] hover:bg-[#68884E] text-white shadow-md'
                        : 'bg-[#FAFDF8] hover:bg-[#7B9D60] text-[#1F2922] hover:text-white border border-[#E2EBDC] hover:border-[#7B9D60]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Zero Commission Guarantee Banner */}
        <div className="mt-14 max-w-4xl mx-auto bg-gradient-to-r from-[#1F2922] to-[#2E4233] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#7B9D60] text-white flex items-center justify-center font-black text-xl flex-shrink-0 shadow-md">
              0%
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black font-heading">
                Zero Commission on Online Course &amp; Test Sales
              </h4>
              <p className="text-xs text-white/80 mt-0.5 font-medium">
                Unlike other platforms that deduct 10-15% of your student fees, with TutoLink 100% of your earnings stay with your institute.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenDemoModal}
            className="px-5 py-2.5 rounded-xl bg-white text-[#1F2922] font-extrabold text-xs hover:bg-[#FAFDF8] transition whitespace-nowrap shadow-sm"
          >
            Claim 0% Commission
          </button>
        </div>

      </div>
    </section>
  );
}
