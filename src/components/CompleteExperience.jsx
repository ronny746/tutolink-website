import React, { useState } from 'react';
import { Video, Edit3, Award, MessageSquare, BarChart3, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CompleteExperience({ onOpenDemoModal }) {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'teach',
      title: 'TEACH',
      subtitle: 'Structured Digital Instruction',
      icon: Video,
      desc: 'Deliver live interactive lectures, store organized batch recordings, distribute class notes and PDF study materials.',
      items: [
        'Live Interactive Classes',
        'Batch-wise Recorded Library',
        'Structured PDF Study Material',
        'Course & Lecture Scheduling'
      ]
    },
    {
      id: 'practice',
      title: 'PRACTICE',
      subtitle: 'Daily Retention & Question Banks',
      icon: Edit3,
      desc: 'Build custom institute question banks, assign Daily Practice Problems (DPPs), and enable chapter & topic exercises.',
      items: [
        'Institute Question Bank Builder',
        'Daily Practice Problems (DPP)',
        'Chapter & Topic Practice Sheets',
        'Custom Auto-graded Quizzes'
      ]
    },
    {
      id: 'test',
      title: 'TEST',
      subtitle: 'Realistic Exam Simulation',
      icon: Award,
      desc: 'Conduct computer-based mock exams (CBT), JEE/NEET pattern tests, live scholarship entrance tests, and test series.',
      items: [
        'CBT Full-screen Test Environment',
        'Live Scholarship & Admission Exams',
        'Custom Test Series Management',
        'Instant Auto-Grading & Answer Keys'
      ]
    },
    {
      id: 'connect',
      title: 'CONNECT',
      subtitle: 'Communication & Doubt Support',
      icon: MessageSquare,
      desc: 'Resolve student doubts in real-time, broadcast batch updates, send push notifications, and build student engagement.',
      items: [
        '1-on-1 & Batch Doubt Resolution',
        'Direct Chat & Discussion Forum',
        'Institute Notice Board Alerts',
        'Automated Push Notifications'
      ]
    },
    {
      id: 'track',
      title: 'TRACK',
      subtitle: 'Performance Intelligence',
      icon: BarChart3,
      desc: 'Monitor batch-wise scores, calculate subject percentiles, flag low-performing students early, and update parents.',
      items: [
        'Instant Batch Rank Lists',
        'Subject & Topic Mastery Graphs',
        'Early Warning Risk Alerts',
        'Parent Scorecard Reports'
      ]
    },
    {
      id: 'grow',
      title: 'GROW',
      subtitle: 'Online Reach & Course Sales',
      icon: TrendingUp,
      desc: 'Publish public demo lectures, sell online courses & test series beyond your city, and attract new student admissions.',
      items: [
        'Online Course & Test Series Store',
        'Public Demo Lectures & Sample DPPs',
        'Institute Micro-Landing Page',
        'Direct Student Admissions Engine'
      ]
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-[#F8FAF5] border-b border-[#E2EBDC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B9D60]/15 text-[#2D3A30] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#7B9D60]/30">
            6 Connected Pillars
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2922] tracking-tight leading-tight">
            Turn Your Coaching Into a <br />
            <span className="text-[#7B9D60]">Complete Learning Experience.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2D3A30]/80">
            TutoLink organizes all essential educational operations into 6 interconnected categories designed for growth.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 mb-10 justify-start md:justify-center">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isActive = activeCategory === idx;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(idx)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-extrabold text-xs whitespace-nowrap transition-all flex-shrink-0 border ${
                  isActive
                    ? 'bg-[#7B9D60] text-white border-[#7B9D60] shadow-md scale-[1.02]'
                    : 'bg-white text-[#2D3A30] border-[#E2EBDC] hover:bg-[#F0F6EB] hover:border-[#7B9D60]/40'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#7B9D60]'}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Showcase Card */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#E2EBDC] shadow-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Category Details */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B9D60]/15 text-[#7B9D60] text-xs font-bold uppercase tracking-wider">
                {categories[activeCategory].subtitle}
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1F2922]">
                {categories[activeCategory].title} — {categories[activeCategory].subtitle}
              </h3>

              <p className="text-sm sm:text-base text-[#2D3A30]/85 leading-relaxed">
                {categories[activeCategory].desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {categories[activeCategory].items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAF5] border border-[#E2EBDC]">
                    <CheckCircle2 className="w-4 h-4 text-[#7B9D60] flex-shrink-0" />
                    <span className="text-xs font-bold text-[#1F2922]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenDemoModal}
                  className="px-6 py-3 rounded-xl bg-[#7B9D60] text-white text-xs font-bold hover:bg-[#6A8B50] shadow-md transition-all inline-flex items-center gap-2"
                >
                  <span>Explore {categories[activeCategory].title} Workflow</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual Representation Grid */}
            <div className="lg:col-span-6">
              <div className="bg-[#F8FAF5] p-6 sm:p-8 rounded-2xl border border-[#E2EBDC] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E2EBDC]">
                  <span className="text-xs font-bold text-[#1F2922]">TutoLink Engine</span>
                  <span className="text-xs font-semibold text-[#7B9D60]">{categories[activeCategory].title} Module</span>
                </div>

                <div className="space-y-3">
                  {categories[activeCategory].items.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white border border-[#E2EBDC] flex items-center justify-between hover:border-[#7B9D60]/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#7B9D60]" />
                        <span className="text-xs font-bold text-[#1F2922]">{item}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#7B9D60]">Active</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-[#7B9D60]/10 border border-[#7B9D60]/30 text-center">
                  <p className="text-xs text-[#2D3A30] font-medium">
                    Fully synchronized across Web Portal & Mobile App.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
