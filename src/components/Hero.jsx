import React, { useState } from 'react';
import { 
  Building2, 
  UserCheck, 
  Smartphone, 
  Video, 
  Edit3, 
  Award, 
  TrendingUp, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  PlayCircle
} from 'lucide-react';

export default function Hero({ onOpenDemoModal, onSubmitLead }) {
  const [mobileNumber, setMobileNumber] = useState('');
  const [ownerName, setOwnerName] = useState('');

  const handleQuickLeadSubmit = (e) => {
    e.preventDefault();
    if (!mobileNumber) return;
    if (onSubmitLead) {
      onSubmitLead({
        ownerName: ownerName || 'Coaching Director',
        mobile: mobileNumber,
        source: 'Hero Quick Form'
      });
    }
    setMobileNumber('');
    setOwnerName('');
  };

  const storySteps = [
    { label: 'PHYSICAL CLASSROOM', icon: Building2 },
    { label: 'STUDENT', icon: UserCheck },
    { label: 'TutoLink APP', icon: Smartphone },
    { label: 'LIVE CLASS', icon: Video },
    { label: 'PRACTICE', icon: Edit3 },
    { label: 'CBT MOCK TEST', icon: Award },
    { label: 'RESULT & PROGRESS', icon: TrendingUp },
    { label: 'MORE STUDENTS', icon: Users },
  ];

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 bg-[#F8FAF5] overflow-hidden border-b border-[#E2EBDC]">
      
      {/* Soft Calming Ambient Background Blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-[#7B9D60]/12 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tagline Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7B9D60]/15 border border-[#7B9D60]/30 text-[#2D3A30] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#7B9D60]" />
            <span>Connect to What Helps You Grow.</span>
          </div>
        </div>

        {/* Main Headline & Supporting Subhead */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1F2922] tracking-tight leading-[1.15]">
            Digitize & Scale Your Coaching Institute in <span className="text-[#7B9D60]">10 Minutes</span>
          </h1>

          <p className="text-xl sm:text-2xl font-bold text-[#7B9D60] tracking-tight pt-1">
            "Your classroom doesn't have to end at the classroom."
          </p>

          <p className="text-base sm:text-lg text-[#2D3A30]/85 max-w-3xl mx-auto leading-relaxed pt-1">
            Bring your teaching, students, courses, classes, tests, study material and communication together — and create a digital experience your students can keep learning from.
          </p>
        </div>

        {/* CTAs & Quick Lead Capture Form */}
        <div className="mt-8 max-w-xl mx-auto">
          <form onSubmit={handleQuickLeadSubmit} className="bg-white p-2.5 sm:p-3 rounded-2xl border border-[#E2EBDC] shadow-lg flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Your Name (e.g. Prof. Sharma)"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              className="flex-1 px-4 py-3 text-sm text-[#1F2922] bg-[#F8FAF5] rounded-xl border border-[#E2EBDC] focus:outline-none focus:border-[#7B9D60]"
            />
            <input
              type="tel"
              required
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="flex-1 px-4 py-3 text-sm text-[#1F2922] bg-[#F8FAF5] rounded-xl border border-[#E2EBDC] focus:outline-none focus:border-[#7B9D60]"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-[#7B9D60] text-white font-bold text-sm hover:bg-[#6A8B50] shadow-md transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#2D3A30]/80">
            <button
              onClick={onOpenDemoModal}
              className="inline-flex items-center gap-1.5 text-[#7B9D60] hover:text-[#5F7D47] font-bold transition-colors"
            >
              <PlayCircle className="w-4 h-4" />
              <span>Book a Demo</span>
            </button>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#7B9D60]" />
              No credit card required
            </span>
            <span>•</span>
            <span>Instant setup support</span>
          </div>
        </div>

        {/* Visual Story Sequence Ribbon */}
        <div className="mt-14 pt-8 border-t border-[#E2EBDC]">
          <p className="text-center text-xs font-bold text-[#7B9D60] uppercase tracking-wider mb-6">
            The Complete Digital Journey for Modern Coaching
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3">
            {storySteps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-3 rounded-xl border border-[#E2EBDC] hover:border-[#7B9D60]/50 hover:shadow-xs transition-all text-center flex flex-col items-center justify-center gap-2 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#7B9D60]/15 text-[#7B9D60] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-[#1F2922] leading-tight uppercase tracking-tight">
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
