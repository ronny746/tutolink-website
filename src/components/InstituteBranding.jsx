import React from 'react';
import { ShieldCheck, Sparkles, Smartphone, Globe, Layers, CheckCircle2 } from 'lucide-react';

export default function InstituteBranding({ onOpenDemoModal }) {
  const brandFeatures = [
    {
      title: 'Custom Brand Identity',
      desc: 'Your institute name, logo, banner & custom theme colors across student web portals and mobile apps.'
    },
    {
      title: 'Custom Subdomain & Domain Support',
      desc: 'Give students your own URL (e.g., yourcoaching.tutolink.in or custom domain) to build trust and authority.'
    },
    {
      title: 'Direct Institute Communication',
      desc: 'Send notifications, announcements, test alerts, and timetable updates straight under your own brand banner.'
    },
    {
      title: 'Complete Content Privacy & Security',
      desc: 'Watermarked notes, DRM-protected video links, and batch-wise access rules to protect your intellectual property.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-y border-[#E2EBDC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B9D60]/15 text-[#2D3A30] text-xs font-semibold uppercase tracking-wider border border-[#7B9D60]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#7B9D60]" />
              <span>White-Label Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2922] tracking-tight leading-tight">
              Your Institute. Your Brand. <br className="hidden sm:inline" />
              <span className="text-[#7B9D60]">Your Digital World.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#2D3A30]/85 leading-relaxed">
              Don't lose your identity to generic platforms. TutoLink puts your institute’s brand at the center, creating a professional digital ecosystem that builds student loyalty and parent trust.
            </p>

            <div className="space-y-4 pt-2">
              {brandFeatures.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#F8FAF5] transition-colors border border-transparent hover:border-[#E2EBDC]">
                  <CheckCircle2 className="w-5 h-5 text-[#7B9D60] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-[#1F2922]">{item.title}</h4>
                    <p className="text-sm text-[#2D3A30]/80 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenDemoModal}
                className="px-7 py-3.5 rounded-xl bg-[#7B9D60] text-white font-bold text-sm hover:bg-[#6A8B50] shadow-md hover:shadow-lg transition-all"
              >
                Launch Your Branded Portal
              </button>
              <div className="flex items-center gap-2 text-xs text-[#2D3A30]/70">
                <ShieldCheck className="w-4 h-4 text-[#7B9D60]" />
                <span>100% Data & Content Ownership</span>
              </div>
            </div>
          </div>

          {/* Right Visual Interactive Mockup */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Card Mockup */}
              <div className="bg-[#F8FAF5] border border-[#E2EBDC] rounded-3xl p-6 sm:p-8 shadow-xl relative z-10">
                {/* Top Mockup Header */}
                <div className="flex items-center justify-between pb-6 border-b border-[#E2EBDC]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#7B9D60] text-white font-black flex items-center justify-center text-lg shadow-sm">
                      A
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#1F2922]">Apex Academy Kota</h4>
                      <p className="text-xs text-[#7B9D60] font-medium flex items-center gap-1">
                        <Globe className="w-3 h-3" />
                        apex.tutolink.in
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#7B9D60]/20 text-[#2D3A30] text-xs font-semibold">
                    Verified Portal
                  </span>
                </div>

                {/* Dashboard Screen Content */}
                <div className="mt-6 space-y-4">
                  {/* Hero Banner inside preview */}
                  <div className="bg-gradient-to-r from-[#1F2922] to-[#2D3A30] text-white rounded-2xl p-5 relative overflow-hidden">
                    <div className="relative z-10">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#7B9D60] bg-white/10 px-2 py-0.5 rounded">
                        Target JEE 2026 Batch
                      </span>
                      <h5 className="text-lg font-bold mt-2">Physics Live Revision: Electrodynamics</h5>
                      <p className="text-xs text-white/70 mt-1">Starts Today @ 5:00 PM • Prof. R. K. Verma</p>
                    </div>
                  </div>

                  {/* Micro grid inside preview */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-white border border-[#E2EBDC]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-[#2D3A30]/70 font-medium">Batch Students</span>
                        <Smartphone className="w-4 h-4 text-[#7B9D60]" />
                      </div>
                      <p className="text-xl font-extrabold text-[#1F2922]">480 Active</p>
                      <span className="text-[10px] text-[#7B9D60] font-semibold">98.4% Attendance Rate</span>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-[#E2EBDC]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-[#2D3A30]/70 font-medium">DPP Submissions</span>
                        <Layers className="w-4 h-4 text-[#7B9D60]" />
                      </div>
                      <p className="text-xl font-extrabold text-[#1F2922]">1,240 Today</p>
                      <span className="text-[10px] text-[#7B9D60] font-semibold">Auto-graded & tracked</span>
                    </div>
                  </div>

                  {/* Sample Announcement */}
                  <div className="p-4 rounded-xl bg-[#7B9D60]/10 border border-[#7B9D60]/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#7B9D60] animate-pulse" />
                      <span className="text-xs font-semibold text-[#1F2922]">
                        Weekly Mock Test 04 Scorecard Released
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-[#7B9D60] hover:underline cursor-pointer">
                      View Rank List →
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Accent Glow */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#7B9D60]/15 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
