import React from 'react';
import { Globe, Share2, Users, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function PublicContentSection({ onOpenDemoModal }) {
  const publicFeatures = [
    {
      icon: Globe,
      title: 'Public Micro-Landing Page',
      desc: 'Showcase your faculty profiles, batch timings, achievements, and course catalog to prospective students online.'
    },
    {
      icon: Share2,
      title: 'Free Sample Lectures & Demo Videos',
      desc: 'Let prospective students experience your teaching style before enrolling, building confidence and trust.'
    },
    {
      icon: FileText,
      title: 'Open Practice & Demo Tests',
      desc: 'Conduct free open mock tests for city or state-wide students to collect leads and convert top performers.'
    },
    {
      icon: Users,
      title: 'Direct Lead Generation & Registrations',
      desc: 'Collect student inquiries, phone numbers, and direct batch enrollments directly into your TutoLink admin dashboard.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E2EBDC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Illustration */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="bg-[#F8FAF5] border border-[#E2EBDC] rounded-3xl p-6 sm:p-8 shadow-lg relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#E2EBDC] mb-6">
                <span className="text-xs font-bold text-[#7B9D60] uppercase tracking-wider flex items-center gap-1.5">
                  <Globe className="w-4 h-4" />
                  Public Course Portal Preview
                </span>
                <span className="text-xs text-[#2D3A30]/70 font-medium">tutolink.in/coaching/apex-academy</span>
              </div>

              {/* Public Course Card Preview */}
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-[#E2EBDC] shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#7B9D60]/20 text-[#2D3A30] text-[11px] font-bold">
                      Open Batch • Free Access
                    </span>
                    <span className="text-xs text-[#7B9D60] font-bold">★ 4.9 (320 Reviews)</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#1F2922]">
                    JEE Main 2026 Physics Crash Course (Demoware)
                  </h4>
                  <p className="text-xs text-[#2D3A30]/80 mt-1">
                    Complete Optics & Modern Physics Revision Series • 12 Video Modules + 5 DPPs
                  </p>
                  
                  <div className="mt-4 pt-3 border-t border-[#E2EBDC] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#7B9D60] text-white flex items-center justify-center font-bold text-xs">
                        PK
                      </div>
                      <span className="text-xs font-semibold text-[#1F2922]">Prof. P. K. Sharma</span>
                    </div>
                    <button
                      onClick={onOpenDemoModal}
                      className="px-3.5 py-1.5 rounded-lg bg-[#7B9D60] text-white text-xs font-bold hover:bg-[#6A8B50] transition-colors"
                    >
                      Enroll Free Demo
                    </button>
                  </div>
                </div>

                {/* Lead Collection Bar */}
                <div className="p-4 rounded-xl bg-[#7B9D60]/10 border border-[#7B9D60]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-center sm:text-left">
                    <h5 className="text-xs font-bold text-[#1F2922]">Want to join full offline/online batch?</h5>
                    <p className="text-[11px] text-[#2D3A30]/70">Request a callback from Apex Academy counseling team.</p>
                  </div>
                  <button
                    onClick={onOpenDemoModal}
                    className="w-full sm:w-auto px-4 py-2 rounded-lg bg-[#1F2922] text-white text-xs font-bold hover:bg-[#2D3A30] transition-colors whitespace-nowrap"
                  >
                    Request Callback
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B9D60]/15 text-[#2D3A30] text-xs font-semibold uppercase tracking-wider border border-[#7B9D60]/30">
              <Share2 className="w-3.5 h-3.5 text-[#7B9D60]" />
              <span>Expand Your Reach</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2922] tracking-tight leading-tight">
              Teach Beyond <br />
              <span className="text-[#7B9D60]">Your Classroom Walls.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#2D3A30]/85 leading-relaxed">
              Why limit your teaching to 50 students per room? With TutoLink's public content engine, share sample lectures, open tests, and study resources to attract students across your city and region.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {publicFeatures.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-[#F8FAF5] border border-[#E2EBDC] hover:border-[#7B9D60]/50 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-[#7B9D60]/15 text-[#7B9D60] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-[#1F2922] mb-1">{item.title}</h4>
                    <p className="text-xs text-[#2D3A30]/75 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#7B9D60] hover:text-[#5F7D47] transition-colors group"
              >
                <span>See how public courses generate student leads</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
