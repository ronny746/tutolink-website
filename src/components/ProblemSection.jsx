import React from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  TrendingDown, 
  TrendingUp, 
  FileSpreadsheet, 
  Smartphone, 
  ShieldAlert, 
  Zap, 
  Sparkles,
  Users
} from 'lucide-react';

export default function ProblemSection({ onOpenDemoModal }) {
  const leaks = [
    {
      num: "01",
      title: "The Digital Deficit & Student Churn",
      problem: "Students study offline with you, but compare your coaching with multi-million dollar EdTech apps. Without a 24/7 mobile app, recorded lectures, and digital DPPs, students secretly migrate to online platforms.",
      solution: "Your Own Branded App in 10 Mins",
      solutionDesc: "Give students their official institute mobile & web app with live classes, cloud recorded lectures, daily DPP practice streaks, and instant doubt chat under your coaching's name and logo.",
      impact: "100% Student Retention After Class"
    },
    {
      num: "02",
      title: "The 25% Fee Delay & Cash Flow Drain",
      problem: "Tracking installment registers manually, losing paper cash receipts, and having teachers or front-desk staff make uncomfortable phone calls to parents to chase delayed fee dues.",
      solution: "Automated WhatsApp Fee Collection",
      solutionDesc: "Automated polite WhatsApp reminders sent directly to parents with 1-click UPI & Card payment links. Instant digital fee receipts generated and synced to your institute accounting ledger.",
      impact: "96.4% On-Time Fee Recovery"
    },
    {
      num: "03",
      title: "Manual Test Typing & OMR Fatigue",
      problem: "Faculty spending 12-15 hours every week typing questions into MS Word, paying local Xerox shops for paper prints, and taking 3-4 days to grade OMR sheets manually.",
      solution: "50,000+ Question Bank & Auto CBT",
      solutionDesc: "Create NTA-pattern JEE, NEET, or CBSE tests in under 2 minutes. Auto-graded in seconds with instant All India Ranks, percentiles, and chapter-wise weakness analytics.",
      impact: "Saves 14+ Faculty Hours / Week"
    },
    {
      num: "04",
      title: "The SaaS Revenue-Cut & Lock-In Trap",
      problem: "Generic EdTech software companies charging ₹40,000 - ₹1.5 Lakhs upfront, taking 10-15% cuts of your online course fees, and refusing to give back your student database if you leave.",
      solution: "0% Commission & Total Data Freedom",
      solutionDesc: "Keep 100% of your student fees. TutoLink operates on honest, flat SaaS pricing with zero revenue-sharing cuts and 1-click Excel export of your full database anytime.",
      impact: "Zero Commission • 100% Data Ownership"
    }
  ];

  return (
    <section id="why-tutolink" className="py-20 md:py-28 bg-[#F8FAF5] relative border-b border-[#E2EBDC]">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#7B9D60]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-red-700 text-xs font-black uppercase tracking-wider border border-red-200">
            <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
            <span>The Silent Crisis in Offline Coaching</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1F2922] font-heading tracking-tight leading-tight">
            The 4 Fatal Leaks Costing Coaching Institutes <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-amber-600 to-[#7B9D60]">
              Lakhs in Lost Revenue Every Year.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#576659] font-medium leading-relaxed">
            Your teaching is exceptional. But running your institute on fragmented WhatsApp groups, paper registers, and Xerox tests creates friction that bleeds students and cash flow.
          </p>
        </div>

        {/* 4 Leaks Grid: Problem vs Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {leaks.map((leak, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl border border-[#E2EBDC] hover:border-[#7B9D60] p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E2EBDC]">
                  <span className="text-xs font-black text-white bg-[#1F2922] px-3 py-1 rounded-lg">
                    LEAK #{leak.num}
                  </span>
                  <span className="text-xs font-extrabold text-[#7B9D60] bg-[#EBF4E3] px-3 py-1 rounded-full border border-[#C8DCAE]">
                    {leak.impact}
                  </span>
                </div>

                {/* Problem Statement */}
                <div>
                  <h3 className="text-xl font-black text-[#1F2922] font-heading mb-2">
                    {leak.title}
                  </h3>
                  <div className="bg-red-50/60 border border-red-100 rounded-2xl p-4 text-xs sm:text-sm text-red-900 leading-relaxed font-medium">
                    <div className="flex items-start gap-2.5">
                      <TrendingDown className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>{leak.problem}</span>
                    </div>
                  </div>
                </div>

                {/* The TutoLink Fix */}
                <div className="bg-[#FAFDF8] border border-[#C8DCAE] rounded-2xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-black text-[#1F2922] uppercase tracking-wide">
                    <CheckCircle2 className="w-4 h-4 text-[#7B9D60]" />
                    <span>The TutoLink Solution: {leak.solution}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#576659] leading-relaxed font-medium pl-6">
                    {leak.solutionDesc}
                  </p>
                </div>

              </div>

              {/* Quick Action Footer */}
              <div className="mt-6 pt-4 border-t border-[#E2EBDC] flex items-center justify-between">
                <span className="text-xs font-bold text-[#1F2922]">
                  Solve this in your institute:
                </span>
                <button
                  onClick={onOpenDemoModal}
                  className="text-xs font-extrabold text-[#7B9D60] hover:text-[#526E3A] flex items-center gap-1 group-hover:translate-x-1 transition-all"
                >
                  <span>See Live Fix</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner Transition */}
        <div className="mt-14 bg-gradient-to-r from-[#1F2922] via-[#2A3B2E] to-[#1F2922] rounded-3xl p-6 sm:p-10 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B9D60]/20 text-[#C8DCAE] text-xs font-bold border border-[#7B9D60]/30">
              <Zap className="w-3.5 h-3.5 text-[#7B9D60]" />
              <span>Zero Technical Knowledge Needed</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight">
              Plug Every Leak in Under 10 Minutes.
            </h3>
            <p className="text-sm text-white/80 max-w-xl font-medium">
              We handle the software setup, student roster migration, and branding customization for free. You simply start teaching.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#7B9D60] text-white font-extrabold text-sm hover:bg-[#68884E] transition-all shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Schedule 15-Min Live Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
