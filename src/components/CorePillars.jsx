import React from 'react';
import { Video, Edit3, Award, MessageSquare, TrendingUp, ChevronRight } from 'lucide-react';

export default function CorePillars({ onOpenDemoModal }) {
  const pillars = [
    {
      id: 'teach',
      num: '01',
      title: 'Teach',
      icon: Video,
      subtitle: 'Structured Digital Classrooms',
      description: 'Host live classes, upload batchwise recordings, organize study material, and deliver structured notes seamlessly.',
      highlights: ['Live & Recorded Lectures', 'Batch-wise Study Material', 'Structured Notes & PDFs']
    },
    {
      id: 'practice',
      num: '02',
      title: 'Practice',
      icon: Edit3,
      subtitle: 'Daily Practice & Retention',
      description: 'Assign Daily Practice Problems (DPPs), chapter-wise exercises, and homework to ensure concepts stick.',
      highlights: ['Topic & Chapter DPPs', 'Instant Solution Keys', 'Self-paced Exercises']
    },
    {
      id: 'test',
      num: '03',
      title: 'Test',
      icon: Award,
      subtitle: 'Real Exam Simulation',
      description: 'Conduct NTA-pattern JEE/NEET, CUET, and custom board tests with auto-grading and subject-wise rank lists.',
      highlights: ['JEE/NEET & Custom Patterns', 'Instant Automated Evaluation', 'Scorecards & Rank Analytics']
    },
    {
      id: 'connect',
      num: '04',
      title: 'Connect',
      icon: MessageSquare,
      subtitle: 'Doubt Resolution & Community',
      description: 'Resolve student doubts in real-time, broadcast institute updates, and build a vibrant peer-learning community.',
      highlights: ['1-on-1 & Batch Doubt Clearing', 'Notice Board & Announcements', 'Student Engagement Hub']
    },
    {
      id: 'grow',
      num: '05',
      title: 'Grow',
      icon: TrendingUp,
      subtitle: 'Branded Growth & Reach',
      description: 'Publish open courses, showcase institute achievements on your custom micro-landing page, and attract new enrollments.',
      highlights: ['Branded Micro-Landing Page', 'Public Demo Lectures & Samples', 'Direct Student Inquiries']
    }
  ];

  return (
    <section id="pillars" className="py-20 md:py-28 bg-[#F8FAF5] relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#7B9D60]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B9D60]/15 text-[#2D3A30] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#7B9D60]/30">
            5 Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2922] tracking-tight leading-tight">
            Everything your coaching needs to <span className="text-[#7B9D60]">Teach, Engage & Scale</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2D3A30]/80">
            TutoLink brings all 5 essential pillars of modern coaching into one unified digital ecosystem designed specifically for institutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isFeatured = idx === 4; // Grow card highlight
            return (
              <div
                key={pillar.id}
                className={`group relative rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between border ${
                  isFeatured
                    ? 'bg-gradient-to-br from-[#7B9D60]/15 via-white to-[#F0F5EC] border-[#7B9D60]/40 shadow-lg hover:shadow-xl md:col-span-2 lg:col-span-1'
                    : 'bg-white border-[#E2EBDC] hover:border-[#7B9D60]/50 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#7B9D60]/15 text-[#7B9D60] flex items-center justify-center font-bold transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-2xl font-black text-[#7B9D60]/30 group-hover:text-[#7B9D60]/60 transition-colors">
                      {pillar.num}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-[#7B9D60] uppercase tracking-wider">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-[#1F2922] mt-1 mb-3 group-hover:text-[#7B9D60] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#2D3A30]/80 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2EBDC] mt-auto">
                  <ul className="space-y-2 mb-6">
                    {pillar.highlights.map((item, i) => (
                      <li key={i} className="flex items-center text-xs text-[#2D3A30] font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#7B9D60] mr-2.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={onOpenDemoModal}
                    className="inline-flex items-center text-xs font-bold text-[#7B9D60] group-hover:text-[#5F7D47] transition-colors gap-1"
                  >
                    <span>Explore {pillar.title} Features</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
