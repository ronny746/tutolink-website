import React from 'react';
import { ArrowRight, CheckCircle2, PlayCircle, Sparkles, MessageCircle, Phone, ShieldCheck } from 'lucide-react';

export default function CtaSection({ onOpenDemoModal }) {
  const highlights = [
    'No credit card required',
    'Free 14-day full platform access',
    'Free 1-on-1 guided migration assistance',
    '100% white-label brand & data ownership',
    'Zero commission on course sales'
  ];

  const whatsappUrl = "https://wa.me/917052422066?text=" + encodeURIComponent("Hi TutoLink Team, I am ready to digitize my coaching institute. Can we start?");

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-[#E2EBDC]">
      
      {/* Decorative ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-[#7B9D60]/12 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF4E3] text-[#1F2922] text-xs font-black uppercase tracking-wider border border-[#C8DCAE] shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#7B9D60]" />
          <span>Start Scaling Your Institute In 10 Mins</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#1F2922] tracking-tight leading-[1.12] font-heading">
          Your Classroom Teaching Built Your Name. <br className="hidden sm:inline" />
          <span className="text-[#7B9D60]">Now Give It The Digital Scale It Deserves.</span>
        </h2>

        <p className="text-base sm:text-xl text-[#576659] max-w-3xl mx-auto leading-relaxed font-medium">
          Join 500+ leading coaching institutes across India that stopped leaking students to EdTech giants, automated their fee collection on WhatsApp, and launched their own NTA CBT test engine.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm font-bold text-[#1F2922] pt-2">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-1.5 bg-[#FAFDF8] px-3.5 py-1.5 rounded-full border border-[#E2EBDC] shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#7B9D60] flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#7B9D60] text-white font-extrabold text-sm sm:text-base hover:bg-[#68884E] shadow-[0_12px_28px_rgba(123,157,96,0.25)] hover:shadow-[0_16px_36px_rgba(123,157,96,0.35)] transition-all flex items-center justify-center gap-2 group"
          >
            <span>Book 15-Minute Live Guided Demo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat With Senior EdTech Advisor</span>
          </a>
        </div>

        {/* Direct Call Line */}
        <div className="pt-4 flex items-center justify-center gap-2 text-xs font-bold text-[#576659]">
          <Phone className="w-4 h-4 text-[#7B9D60]" />
          <span>Prefer a phone conversation? Call direct:</span>
          <a href="tel:+917052422066" className="text-[#1F2922] hover:text-[#7B9D60] font-black underline">
            +91 70524 22066
          </a>
        </div>

        {/* Tagline */}
        <div className="mt-12 pt-8 border-t border-[#E2EBDC] inline-block">
          <p className="text-sm font-black text-[#7B9D60] tracking-wide uppercase font-heading">
            "Connect to What Helps You Grow."
          </p>
          <p className="text-xs text-[#576659] mt-1 font-medium">
            TutoLink — The Premier Operating System for Progressive Coaching Institutes.
          </p>
        </div>

      </div>
    </section>
  );
}
