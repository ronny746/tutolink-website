import React from 'react';
import { ArrowRight, CheckCircle2, PlayCircle, Sparkles } from 'lucide-react';

export default function CtaSection({ onOpenDemoModal }) {
  const highlights = [
    'No setup fee required',
    'Free 14-day trial for institutes',
    '1-on-1 onboarding support',
    '100% Data & Brand Ownership'
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-[#E2EBDC]">
      {/* Decorative ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-[#7B9D60]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B9D60]/15 text-[#2D3A30] text-xs font-semibold uppercase tracking-wider border border-[#7B9D60]/30">
          <Sparkles className="w-3.5 h-3.5 text-[#7B9D60]" />
          <span>Transform Your Coaching Today</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2922] tracking-tight leading-tight">
          Your Classroom Is <br />
          <span className="text-[#7B9D60]">Only the Beginning.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#2D3A30]/85 max-w-2xl mx-auto leading-relaxed">
          Give your coaching a digital experience that helps you teach, connect, sell, test and grow.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs sm:text-sm font-semibold text-[#2D3A30] pt-2">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-[#F8FAF5] px-3.5 py-1.5 rounded-full border border-[#E2EBDC]">
              <CheckCircle2 className="w-4 h-4 text-[#7B9D60]" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#7B9D60] text-white font-bold text-base hover:bg-[#6A8B50] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <span>Start Your Institute</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#F8FAF5] text-[#1F2922] font-bold text-base hover:bg-[#E2EBDC] border border-[#E2EBDC] transition-all flex items-center justify-center gap-2"
          >
            <PlayCircle className="w-4 h-4 text-[#7B9D60]" />
            <span>Book a Demo</span>
          </button>
        </div>

        {/* Tagline */}
        <div className="mt-12 pt-8 border-t border-[#E2EBDC] inline-block">
          <p className="text-sm font-bold text-[#7B9D60] tracking-wide uppercase">
            "Connect to What Helps You Grow."
          </p>
          <p className="text-xs text-[#2D3A30]/60 mt-1">
            TutoLink — The Digital Home for Progressive Coaching Institutes.
          </p>
        </div>

      </div>
    </section>
  );
}
