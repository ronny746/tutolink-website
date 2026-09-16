import React from 'react';
import { Video, MessageSquare, Edit3, Award, BarChart3, TrendingUp, ChevronRight } from 'lucide-react';

export default function MoreThanClassroom({ onOpenDemoModal }) {
  const journeySteps = [
    { name: 'Teach', desc: 'Live & recorded lectures', icon: Video, color: 'text-[#7B9D60]' },
    { name: 'Connect', desc: 'Doubts & student chat', icon: MessageSquare, color: 'text-[#7B9D60]' },
    { name: 'Practice', desc: 'DPPs & exercise sheets', icon: Edit3, color: 'text-[#7B9D60]' },
    { name: 'Test', desc: 'CBT & scholarship exams', icon: Award, color: 'text-[#7B9D60]' },
    { name: 'Track', desc: 'Analytics & rank reports', icon: BarChart3, color: 'text-[#7B9D60]' },
    { name: 'Grow', desc: 'Public courses & admissions', icon: TrendingUp, color: 'text-[#7B9D60]' }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#E2EBDC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B9D60]/15 text-[#2D3A30] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#7B9D60]/30">
            Strategic Shift
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2922] tracking-tight">
            More Than a Classroom.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#2D3A30]/80 font-medium">
            "Your students don't stop learning when the class ends. Neither should your coaching."
          </p>
        </div>

        {/* 6-Step Connected Journey */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative">
          {journeySteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-[#F8FAF5] p-5 rounded-2xl border border-[#E2EBDC] hover:border-[#7B9D60]/50 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#7B9D60]/15 flex items-center justify-center mb-4 text-[#7B9D60] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <span className="text-[11px] font-bold text-[#7B9D60] uppercase tracking-wider">
                    Step 0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-[#1F2922] mt-0.5 mb-1 group-hover:text-[#7B9D60] transition-colors">
                    {step.name}
                  </h3>
                  <p className="text-xs text-[#2D3A30]/70 font-medium">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E2EBDC] flex items-center justify-between text-xs font-semibold text-[#7B9D60]">
                  <span>Explore</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Strategic Takeaway Note */}
        <div className="mt-10 p-6 rounded-2xl bg-[#F8FAF5] border border-[#E2EBDC] text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#1F2922]">Don't just buy management software.</h4>
            <p className="text-xs text-[#2D3A30]/80 mt-0.5">Build a complete digital ecosystem around your faculty and student community.</p>
          </div>
          <button
            onClick={onOpenDemoModal}
            className="px-5 py-2.5 rounded-xl bg-[#7B9D60] text-white text-xs font-bold hover:bg-[#6A8B50] transition-colors whitespace-nowrap shadow-xs"
          >
            See Platform Demo
          </button>
        </div>

      </div>
    </section>
  );
}
