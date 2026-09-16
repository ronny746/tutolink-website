import React from 'react';
import { Building2, Wifi, Shield, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';

export default function HybridClassroomSection({ onOpenDemoModal }) {
  const hybridBenefits = [
    {
      icon: Building2,
      title: 'Enhance Your Physical Classroom',
      desc: 'Keep teaching on whiteboards or smartboards. TutoLink acts as the digital backbone that extends your physical lectures.'
    },
    {
      icon: RefreshCw,
      title: 'Zero Class Loss for Absent Students',
      desc: 'When students miss class due to illness or travel, they catch up via recorded sessions and notes instead of falling behind.'
    },
    {
      icon: Shield,
      title: 'Digital Backup & Revision Library',
      desc: 'Build an organized library of past lectures, revision notes, and exam solution videos accessible 24/7.'
    },
    {
      icon: Wifi,
      title: 'Hybrid Exam & Homework Model',
      desc: 'Conduct physical classroom tests or assign digital DPPs seamlessly—all results aggregate into one student profile.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAF5] border-b border-[#E2EBDC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B9D60]/15 text-[#2D3A30] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#7B9D60]/30">
            <span>The Modern Hybrid Coaching Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2922] tracking-tight leading-tight">
            Keep Your Classroom. <br />
            <span className="text-[#7B9D60]">Expand It Beyond Boundaries.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2D3A30]/80">
            You don't have to choose between offline and online. TutoLink empowers offline coaching institutes with digital superpowers.
          </p>
        </div>

        {/* 2x2 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {hybridBenefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-7 rounded-2xl border border-[#E2EBDC] hover:border-[#7B9D60]/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#7B9D60]/15 text-[#7B9D60] flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2922] mb-2">{item.title}</h3>
                <p className="text-sm text-[#2D3A30]/80 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-[#1F2922] to-[#2D3A30] text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-xl font-bold">Ready to make your coaching hybrid-ready?</h4>
            <p className="text-sm text-white/80 mt-1">Set up your institute portal in less than 10 minutes with expert support.</p>
          </div>
          <button
            onClick={onOpenDemoModal}
            className="px-6 py-3 rounded-xl bg-[#7B9D60] text-white font-bold text-sm hover:bg-[#6A8B50] transition-colors whitespace-nowrap flex items-center gap-2 shadow-md"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
