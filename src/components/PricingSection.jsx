import React from 'react';
import { Check, Sparkles, ArrowRight, Globe, Star } from 'lucide-react';

export default function PricingSection({ onOpenDemoModal }) {
  const starterFeatures = [
    'Student management',
    'Courses & batches',
    'Study material',
    'Tests & question bank',
    'Basic communication'
  ];

  const completeFeatures = [
    'Live classes',
    'CBT-style / secure tests',
    'DPP & question bank',
    'Analytics',
    'Online course & test-series selling',
    'Public content & student discovery',
    'FREE branded institute website'
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#F8FAF5] border-b border-[#E2EBDC] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#7B9D60]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7B9D60]/15 text-[#2D3A30] text-xs font-semibold uppercase tracking-wider border border-[#7B9D60]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#7B9D60]" />
            <span>Simple, Transparent Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2922] tracking-tight leading-tight">
            Start Small. <span className="text-[#7B9D60]">Grow Big.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-bold text-[#2D3A30]/85">
            Start your digital journey with TutoLink from just <span className="text-[#7B9D60]">₹999/month</span>.
          </p>
        </div>

        {/* 2 Simple Option Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Card 1: Start With What You Need */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E2EBDC] shadow-lg flex flex-col justify-between hover:border-[#7B9D60]/40 transition-all duration-300">
            <div className="space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#F0F6EB] text-[#7B9D60] text-xs font-extrabold uppercase tracking-wider">
                  Essential Plan
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1F2922] mt-3">
                  Start With What You Need
                </h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-[#7B9D60]">From ₹999</span>
                  <span className="text-xs text-[#2D3A30]/70 font-semibold">/ month</span>
                </div>
                <p className="text-xs sm:text-sm text-[#2D3A30]/80 mt-2 leading-relaxed font-medium">
                  For institutes that want the essential features and can upgrade as they grow.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2EBDC] space-y-3">
                <p className="text-xs font-extrabold text-[#1F2922] uppercase tracking-wider">Included Features:</p>
                {starterFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#7B9D60]/15 text-[#7B9D60] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#1F2922]">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={onOpenDemoModal}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#F0F6EB] hover:bg-[#7B9D60] text-[#1F2922] hover:text-white font-extrabold text-sm transition-all duration-200 border border-[#E2EBDC] hover:border-[#7B9D60] flex items-center justify-center gap-2 shadow-xs group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Go All In (Featured Card) */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border-2 border-[#7B9D60] shadow-2xl flex flex-col justify-between relative overflow-hidden scale-[1.02]">
            
            {/* Featured Badge */}
            <div className="absolute top-0 right-0 bg-[#7B9D60] text-white text-[11px] font-black uppercase px-4 py-1.5 rounded-bl-2xl tracking-wider flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-white" />
              Most Popular
            </div>

            <div className="space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#7B9D60]/15 text-[#7B9D60] text-xs font-extrabold uppercase tracking-wider">
                  Full Ecosystem
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1F2922] mt-3">
                  Go All In
                </h3>
                <p className="text-sm font-bold text-[#7B9D60] mt-1">
                  Complete TutoLink Solution
                </p>
                <p className="text-xs sm:text-sm text-[#2D3A30]/80 mt-2 leading-relaxed font-medium">
                  Everything you need to digitize, test, teach, sell online courses, and scale your coaching.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2EBDC] space-y-3">
                <p className="text-xs font-extrabold text-[#1F2922] uppercase tracking-wider">Everything in Essential, Plus:</p>
                {completeFeatures.map((feat, idx) => {
                  const isFreeWeb = feat.includes('FREE branded institute website');
                  return (
                    <div key={idx} className={`flex items-center gap-3 ${isFreeWeb ? 'p-2.5 rounded-xl bg-[#7B9D60]/10 border border-[#7B9D60]/30' : ''}`}>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isFreeWeb ? 'bg-[#7B9D60] text-white' : 'bg-[#7B9D60]/15 text-[#7B9D60]'}`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className={`text-xs sm:text-sm font-bold ${isFreeWeb ? 'text-[#7B9D60] font-extrabold' : 'text-[#1F2922]'}`}>
                        {feat}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Strongly Highlighted Free Branded Website Card */}
              <div className="p-4 rounded-2xl bg-[#FAFDF8] border border-[#7B9D60]/40 space-y-1.5 shadow-xs">
                <div className="flex items-center gap-2 text-[#7B9D60]">
                  <Globe className="w-4 h-4" />
                  <span className="text-xs font-extrabold uppercase tracking-wider">Included Free</span>
                </div>
                <p className="text-xs font-bold text-[#1F2922] italic leading-relaxed">
                  "Your logo. Your colors. Your courses. Your faculty. Your results."
                </p>
              </div>

            </div>

            <div className="pt-8">
              <button
                onClick={onOpenDemoModal}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#7B9D60] hover:bg-[#6A8B50] text-white font-extrabold text-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

        {/* Small Bottom Tagline */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm font-bold text-[#576659]">
            Start with what you need. Upgrade as your institute grows.
          </p>
        </div>

      </div>
    </section>
  );
}
