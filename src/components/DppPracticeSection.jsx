import React from 'react';
import { FileCheck, Sparkles, CheckCircle2, Clock, Zap, Target } from 'lucide-react';

export default function DppPracticeSection({ onOpenDemoModal }) {
  const dppPoints = [
    {
      title: 'Chapter & Topic-wise DPP Assignment',
      desc: 'Assign Daily Practice Problems linked directly to today’s lecture topic so students practice immediately.'
    },
    {
      title: 'Flexible Formats (PDF + Online)',
      desc: 'Upload printable PDF sheets or create timed interactive online quizzes with instant automated scoring.'
    },
    {
      title: 'Detailed Answer Keys & Video Explanations',
      desc: 'Attach step-by-step solution PDFs or video walkthroughs for every problem so doubts are resolved early.'
    },
    {
      title: 'Real-time Submission & Regularity Tracking',
      desc: 'Track which students completed their DPP on time, who struggled, and auto-flag irregular students.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAF5] border-b border-[#E2EBDC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B9D60]/15 text-[#2D3A30] text-xs font-semibold uppercase tracking-wider border border-[#7B9D60]/30">
              <FileCheck className="w-3.5 h-3.5 text-[#7B9D60]" />
              <span>Smart Practice Engine</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2922] tracking-tight leading-tight">
              Practice Your Way. <br />
              <span className="text-[#7B9D60]">Turn Concepts Into Mastery.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#2D3A30]/85 leading-relaxed">
              Lectures deliver concepts, but practice builds top ranks. TutoLink automates daily homework, practice sheets, and question banks so your faculty saves hours every week.
            </p>

            <div className="space-y-4 pt-2">
              {dppPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-[#E2EBDC] hover:border-[#7B9D60]/50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#7B9D60] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-[#1F2922]">{item.title}</h4>
                    <p className="text-sm text-[#2D3A30]/80 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDemoModal}
                className="px-7 py-3.5 rounded-xl bg-[#7B9D60] text-white font-bold text-sm hover:bg-[#6A8B50] shadow-md transition-all"
              >
                Explore DPP & Question Bank Workflow
              </button>
            </div>
          </div>

          {/* Right Visual Mockup */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-[#E2EBDC] rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E2EBDC]">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#7B9D60]" />
                  <h4 className="text-base font-bold text-[#1F2922]">Daily Practice Problem #14</h4>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#7B9D60]/20 text-[#2D3A30] text-xs font-bold">
                  Physics: Rotational Motion
                </span>
              </div>

              {/* Sample Question Mockup */}
              <div className="p-4 rounded-2xl bg-[#F8FAF5] border border-[#E2EBDC] space-y-3">
                <div className="flex items-center justify-between text-xs text-[#2D3A30]/70 font-semibold">
                  <span>Question 3 of 10</span>
                  <span className="flex items-center gap-1 text-[#7B9D60]">
                    <Clock className="w-3.5 h-3.5" /> 02:45 Left
                  </span>
                </div>
                <p className="text-sm font-bold text-[#1F2922]">
                  A solid sphere rolls without slipping down an inclined plane of height h. Find its velocity at the bottom.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium">
                  <div className="p-2.5 rounded-lg bg-white border border-[#E2EBDC] hover:border-[#7B9D60] cursor-pointer text-[#2D3A30]">
                    (A) √(2gh)
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#7B9D60]/20 border border-[#7B9D60] text-[#1F2922] font-bold">
                    (B) √(10gh / 7) ✓ Correct
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-[#E2EBDC] hover:border-[#7B9D60] cursor-pointer text-[#2D3A30]">
                    (C) √(4gh / 3)
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-[#E2EBDC] hover:border-[#7B9D60] cursor-pointer text-[#2D3A30]">
                    (D) √(gh / 2)
                  </div>
                </div>
              </div>

              {/* Solution & Explanation Box */}
              <div className="p-4 rounded-xl bg-[#7B9D60]/10 border border-[#7B9D60]/30 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-[#7B9D60]">
                  <span className="flex items-center gap-1">
                    <Zap className="w-4 h-4" /> Instant Solution Key
                  </span>
                  <span>PDF + Video Available</span>
                </div>
                <p className="text-xs text-[#2D3A30]/80">
                  Using conservation of mechanical energy: mgh = ½ mv² + ½ Iω². For solid sphere I = ⅖ mr². Substituting gives v = √(10gh/7).
                </p>
              </div>

              {/* Batch Submission Stats */}
              <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#2D3A30]/80">
                <span>Batch Completion: 92% (44/48 Students)</span>
                <span className="text-[#7B9D60]">Avg Score: 8.2 / 10</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
