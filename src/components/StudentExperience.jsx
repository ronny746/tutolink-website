import React, { useState } from 'react';
import { BookOpen, CheckCircle, HelpCircle, BarChart3, Award, Sparkles } from 'lucide-react';

export default function StudentExperience({ onOpenDemoModal }) {
  const [activeStep, setActiveStep] = useState(0);

  const studentSteps = [
    {
      id: 'discover',
      step: '01',
      title: 'Discover & Enroll',
      icon: BookOpen,
      desc: 'Browse batch schedules, view free sample lectures, and easily register for coaching courses.',
      screenTitle: 'Student Course Feed',
      screenContent: 'Target NEET 2026 Morning Batch • Enrolled'
    },
    {
      id: 'learn',
      step: '02',
      title: 'Attend & Revisit',
      icon: BookOpen,
      desc: 'Watch live classes or access recorded lectures and class notes anytime on mobile or laptop.',
      screenTitle: 'Interactive Video Player',
      screenContent: 'Organic Chemistry - Session 14 • Class Notes Attached'
    },
    {
      id: 'practice',
      step: '03',
      title: 'Daily Practice (DPP)',
      icon: CheckCircle,
      desc: 'Solve daily practice problems with timer, instant feedback, and detailed answer explanations.',
      screenTitle: 'DPP #18 Submitted',
      screenContent: 'Score: 18/20 • 90% Accuracy • Time Spent: 24 mins'
    },
    {
      id: 'test',
      step: '04',
      title: 'Real Test Simulation',
      icon: Award,
      desc: 'Take NTA-style online tests with negative marking, subject timers, and instant scorecard.',
      screenTitle: 'All India Test Series 03',
      screenContent: 'Rank #4 in Batch • AIR Projection Available'
    },
    {
      id: 'doubt',
      step: '05',
      title: 'Instant Doubt Support',
      icon: HelpCircle,
      desc: 'Snap questions or post in batch discussion forums for faculty & peer solutions.',
      screenTitle: 'Doubt Resolved',
      screenContent: 'Faculty reply: "Use Faraday’s 2nd Law equation here..."'
    },
    {
      id: 'track',
      step: '06',
      title: 'Progress Analytics',
      icon: BarChart3,
      desc: 'Track weak topics, speed per question, and continuous score improvement week over week.',
      screenTitle: 'Student Growth Matrix',
      screenContent: '+14% Accuracy boost in Physics over last 3 weeks'
    }
  ];

  return (
    <section id="for-students" className="py-20 md:py-28 bg-[#F8FAF5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B9D60]/15 text-[#2D3A30] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#7B9D60]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#7B9D60]" />
            <span>Unified Student Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2922] tracking-tight leading-tight">
            And for your students? <br className="hidden sm:inline" />
            <span className="text-[#7B9D60]">Everything stays connected.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2D3A30]/80">
            No more scattered WhatsApp groups, lost PDF notes, or separate exam portals. Students get one clean app for their entire learning journey.
          </p>
        </div>

        {/* Interactive Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Steps List */}
          <div className="lg:col-span-6 space-y-3">
            {studentSteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? 'bg-white border-[#7B9D60] shadow-md scale-[1.01]'
                      : 'bg-white/60 border-[#E2EBDC] hover:bg-white hover:border-[#7B9D60]/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm ${
                        isActive ? 'bg-[#7B9D60] text-white' : 'bg-[#7B9D60]/10 text-[#7B9D60]'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#1F2922] flex items-center gap-2">
                          <span className="text-xs font-bold text-[#7B9D60]">{step.step}</span>
                          {step.title}
                        </h4>
                      </div>
                    </div>
                    {isActive && (
                      <span className="text-xs font-semibold text-[#7B9D60] bg-[#7B9D60]/10 px-2.5 py-1 rounded-full">
                        Active Step
                      </span>
                    )}
                  </div>
                  {isActive && (
                    <p className="text-xs sm:text-sm text-[#2D3A30]/80 mt-3 pt-3 border-t border-[#E2EBDC] leading-relaxed">
                      {step.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Mobile / Tablet Interactive Preview */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-[#E2EBDC] rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-[#E2EBDC] mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs font-bold text-[#2D3A30]/70 uppercase tracking-wider">
                  Student Portal View
                </span>
              </div>

              {/* Active Step Content Highlight */}
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-[#7B9D60]/15 border border-[#7B9D60]/30">
                  <span className="text-xs font-extrabold text-[#7B9D60] uppercase tracking-wider">
                    Step {studentSteps[activeStep].step} — {studentSteps[activeStep].title}
                  </span>
                  <h3 className="text-xl font-bold text-[#1F2922] mt-1">
                    {studentSteps[activeStep].screenTitle}
                  </h3>
                  <p className="text-sm font-medium text-[#2D3A30] mt-2 bg-white/80 p-3 rounded-xl border border-[#E2EBDC]">
                    {studentSteps[activeStep].screenContent}
                  </p>
                </div>

                {/* Simulated Student Dashboard Cards */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#F8FAF5] border border-[#E2EBDC]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#7B9D60]/20 flex items-center justify-center text-[#7B9D60] font-bold text-xs">
                        LIVE
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#1F2922]">Maths Revision Batch</p>
                        <p className="text-[11px] text-[#2D3A30]/70">Vectors & 3D Geometry</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#7B9D60]">Join Now →</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#F8FAF5] border border-[#E2EBDC]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#7B9D60]/20 flex items-center justify-center text-[#7B9D60] font-bold text-xs">
                        DPP
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#1F2922]">Daily Practice Problem #22</p>
                        <p className="text-[11px] text-[#2D3A30]/70">15 Questions • Due 10:00 PM</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#2D3A30]">Attempt</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#F8FAF5] border border-[#E2EBDC]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#7B9D60]/20 flex items-center justify-center text-[#7B9D60] font-bold text-xs">
                        TEST
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#1F2922]">Full Mock Test #05</p>
                        <p className="text-[11px] text-[#2D3A30]/70">JEE Main Pattern • 3 Hours</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#7B9D60]">View Result</span>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <button
                    onClick={onOpenDemoModal}
                    className="w-full py-3 rounded-xl bg-[#7B9D60] text-white text-xs font-bold hover:bg-[#6A8B50] transition-colors"
                  >
                    Experience Student App Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
