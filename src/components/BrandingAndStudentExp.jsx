import React from 'react';
import { Smartphone, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export default function BrandingAndStudentExp({ onOpenDemoModal }) {
  const brandList = [
    'Custom Brand Colors & Theme',
    'Institute Logo & Custom Domain',
    'Direct Announcements & Push Alerts',
    'Complete Content Privacy & Protection'
  ];

  const studentFlow = [
    { title: 'Discover', desc: 'Explore courses & free demo lectures' },
    { title: 'Join', desc: 'Enroll in offline or online batches' },
    { title: 'Learn', desc: 'Attend live classes & watch past recordings' },
    { title: 'Practice', desc: 'Attempt daily DPPs & chapter exercises' },
    { title: 'Test', desc: 'Take CBT mock exams with instant ranks' },
    { title: 'Improve', desc: 'Clear doubts & track topic score growth' }
  ];

  return (
    <section id="branding" className="py-20 md:py-28 bg-white border-b border-[#E2EBDC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Part 1: Institute Branding */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B9D60]/15 text-[#2D3A30] text-xs font-semibold uppercase tracking-wider border border-[#7B9D60]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#7B9D60]" />
              <span>White-Label Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2922] tracking-tight leading-tight">
              Your Institute. Your Brand. <br />
              <span className="text-[#7B9D60]">Your Digital Home.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#2D3A30]/85 leading-relaxed font-semibold">
              "TutoLink powers the technology. Your institute owns the experience your students see."
            </p>

            <div className="space-y-3 pt-2">
              {brandList.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-[#F8FAF5] border border-[#E2EBDC]">
                  <CheckCircle2 className="w-4 h-4 text-[#7B9D60] flex-shrink-0" />
                  <span className="text-sm font-bold text-[#1F2922]">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDemoModal}
                className="px-6 py-3 rounded-xl bg-[#7B9D60] text-white text-xs font-bold hover:bg-[#6A8B50] shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>See Branded App Preview</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-[#F8FAF5] p-6 sm:p-8 rounded-3xl border border-[#E2EBDC] shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-[#E2EBDC]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#7B9D60] text-white font-black flex items-center justify-center text-lg">
                    ABC
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#1F2922]">ABC Academy Kota</h4>
                    <p className="text-xs text-[#7B9D60] font-medium">abcacademy.tutolink.in</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#7B9D60]/20 text-[#2D3A30] text-xs font-bold">
                  Branded Portal
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-[#1F2922]">
                <div className="p-3 rounded-xl bg-white border border-[#E2EBDC]">Courses</div>
                <div className="p-3 rounded-xl bg-white border border-[#E2EBDC]">Live Classes</div>
                <div className="p-3 rounded-xl bg-white border border-[#E2EBDC]">CBT Mock Tests</div>
                <div className="p-3 rounded-xl bg-white border border-[#E2EBDC]">Study Material</div>
                <div className="p-3 rounded-xl bg-white border border-[#E2EBDC]">Announcements</div>
                <div className="p-3 rounded-xl bg-white border border-[#E2EBDC]">Doubt Chat</div>
              </div>
            </div>
          </div>

        </div>

        {/* Part 2: Student Experience */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F8FAF5] border border-[#E2EBDC] space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B9D60]/15 text-[#2D3A30] text-xs font-semibold uppercase tracking-wider border border-[#7B9D60]/30">
              <Smartphone className="w-3.5 h-3.5 text-[#7B9D60]" />
              <span>Unified Learning</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1F2922]">
              And When Class Ends, Learning Continues.
            </h3>
            <p className="text-base sm:text-lg text-[#2D3A30]/85">
              Give your students one single, modern mobile & web app for classes, DPPs, tests, doubts, and results.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {studentFlow.map((step, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-[#E2EBDC] text-center space-y-2 hover:border-[#7B9D60]/50 transition-colors">
                <span className="w-7 h-7 rounded-full bg-[#7B9D60]/15 text-[#7B9D60] text-xs font-black inline-flex items-center justify-center">
                  0{idx + 1}
                </span>
                <h4 className="text-sm font-bold text-[#1F2922]">{step.title}</h4>
                <p className="text-xs text-[#2D3A30]/75 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
