import React from 'react';
import { Award, Clock, CheckCircle2, Shield, Sparkles, UserPlus, ArrowRight, Monitor } from 'lucide-react';

export default function CbtAndGrowthTesting({ onOpenDemoModal }) {
  const cbtFeatures = [
    'Full-screen CBT Exam Interface',
    'Real-time Subject & Section Timers',
    'Question Navigation Palette (Visited/Answered/Marked)',
    'Instant Auto-Submission & Evaluation',
    'Secure Examination & Anti-Cheat Controls',
    'Detailed Scorecard & Percentile Rank'
  ];

  const scholarshipSteps = [
    'Create Test',
    'Publish Link',
    'Students Join',
    'Live Test',
    'Results & Ranks',
    'Scholarship / Enquiry',
    'New Enrollments'
  ];

  return (
    <section id="cbt-exams" className="py-20 md:py-28 bg-white border-b border-[#E2EBDC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Part 1: CBT Exam Preparation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B9D60]/15 text-[#2D3A30] text-xs font-semibold uppercase tracking-wider border border-[#7B9D60]/30">
              <Monitor className="w-3.5 h-3.5 text-[#7B9D60]" />
              <span>Real Exam Simulation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2922] tracking-tight leading-tight">
              Prepare Your Students for <br />
              <span className="text-[#7B9D60]">CBT Exams & NTA Patterns.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#2D3A30]/85 leading-relaxed">
              Give students realistic computer-based mock-test experiences so they can practice not only the questions, but the way modern entrance examinations are delivered.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {cbtFeatures.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAF5] border border-[#E2EBDC]">
                  <CheckCircle2 className="w-4 h-4 text-[#7B9D60] flex-shrink-0" />
                  <span className="text-xs font-bold text-[#1F2922]">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDemoModal}
                className="px-6 py-3 rounded-xl bg-[#7B9D60] text-white text-xs font-bold hover:bg-[#6A8B50] shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Launch CBT Exam Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right CBT Screen Interface Mockup (Light Modern Theme) */}
          <div className="lg:col-span-6">
            <div className="bg-[#F8FAF5] rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-[#E2EBDC]">
              <div className="flex items-center justify-between pb-4 border-b border-[#E2EBDC] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-xs font-bold text-[#7B9D60] tracking-wide ml-2">CBT TEST ENVIRONMENT</span>
                </div>
                <span className="text-xs text-[#2D3A30] font-mono flex items-center gap-1 bg-white px-2.5 py-1 rounded border border-[#E2EBDC]">
                  <Clock className="w-3.5 h-3.5 text-[#7B9D60]" /> 01:45:22 Left
                </span>
              </div>

              {/* Question Screen Mockup */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#2D3A30]/70 font-medium">
                  <span>Physics • Question 14 of 75</span>
                  <span className="text-[#7B9D60] font-bold">+4 / -1 Marking</span>
                </div>

                <p className="text-sm font-semibold text-[#1F2922] leading-relaxed bg-white p-4 rounded-xl border border-[#E2EBDC]">
                  A parallel plate capacitor is charged and then disconnected from the battery. If the distance between plates is doubled, the potential difference across plates will be:
                </p>

                <div className="space-y-2 text-xs font-medium">
                  <div className="p-3 rounded-xl bg-white border border-[#E2EBDC] hover:border-[#7B9D60] cursor-pointer text-[#2D3A30]">
                    (A) Doubled
                  </div>
                  <div className="p-3 rounded-xl bg-[#7B9D60]/20 border border-[#7B9D60] text-[#1F2922] font-bold">
                    (B) Halved ✓ Marked Answer
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-[#E2EBDC] hover:border-[#7B9D60] cursor-pointer text-[#2D3A30]">
                    (C) Quadrupled
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-[#E2EBDC] hover:border-[#7B9D60] cursor-pointer text-[#2D3A30]">
                    (D) Unchanged
                  </div>
                </div>

                {/* Bottom Test Palette Controls */}
                <div className="pt-3 border-t border-[#E2EBDC] flex items-center justify-between text-[11px]">
                  <span className="px-3 py-1 rounded bg-[#7B9D60] text-white font-bold">Save & Next</span>
                  <span className="px-3 py-1 rounded bg-white text-[#2D3A30] border border-[#E2EBDC] font-medium">Mark for Review</span>
                  <span className="px-3 py-1 rounded bg-red-50 text-red-600 font-bold border border-red-200">Clear Response</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Part 2: Live Scholarship Tests */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F8FAF5] border border-[#E2EBDC] space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B9D60]/15 text-[#2D3A30] text-xs font-semibold uppercase tracking-wider border border-[#7B9D60]/30">
              <UserPlus className="w-3.5 h-3.5 text-[#7B9D60]" />
              <span>Growth Tool</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1F2922]">
              Turn Tests Into Opportunities.
            </h3>
            <p className="text-base sm:text-lg text-[#2D3A30]/85">
              Conduct live scholarship tests, admission tests and mock exams — and bring new students into your coaching ecosystem.
            </p>
          </div>

          {/* Visual Step-by-Step Flow */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {scholarshipSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-3.5 rounded-xl border border-[#E2EBDC] text-center flex flex-col items-center justify-center gap-1.5 shadow-xs">
                <span className="w-6 h-6 rounded-full bg-[#7B9D60]/15 text-[#7B9D60] text-xs font-black flex items-center justify-center">
                  {idx + 1}
                </span>
                <span className="text-xs font-bold text-[#1F2922]">{step}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={onOpenDemoModal}
              className="px-7 py-3 rounded-xl bg-[#7B9D60] text-white font-bold text-xs hover:bg-[#6A8B50] transition-colors shadow-md"
            >
              Host a Scholarship Test for Your Institute
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
