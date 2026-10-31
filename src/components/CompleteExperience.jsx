import React, { useState } from 'react';
import { 
  Video, 
  Edit3, 
  Award, 
  MessageSquare, 
  BarChart3, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function CompleteExperience({ onOpenDemoModal }) {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'teach',
      title: 'TEACH',
      subtitle: 'Low-Bandwidth HD Live & Encrypted Cloud Lectures',
      icon: Video,
      desc: 'Deliver crystal-clear live classes optimized for Indian student bandwidth. Session recordings are automatically archived into organized batch playlists with DRM anti-piracy protection.',
      highlights: [
        'Automatic live class recording & instant cloud processing',
        'Dynamic on-screen watermark to eliminate Telegram leaks',
        'One-click automated attendance with instant parent absent alerts',
        'Structured batch-wise PDF notes and chapter handout library'
      ],
      previewBadge: 'HD Streaming + Anti-Piracy'
    },
    {
      id: 'practice',
      title: 'PRACTICE',
      subtitle: '50,000+ Question Bank & 60-Second DPP Generator',
      icon: Edit3,
      desc: 'Never waste another weekend typing physics formulas or chemistry structures into MS Word. Generate customized Daily Practice Problems (DPPs) and chapter exercise sheets in 60 seconds.',
      highlights: [
        '50,000+ pre-tagged questions in Physics, Chemistry, Math & Biology',
        'Auto-generate 15-minute daily practice DPPs with 1 click',
        'Full LaTeX mathematical formula and chemical diagram support',
        'Custom institute question repository with easy Word/Excel upload'
      ],
      previewBadge: '50,000+ Pre-Tagged Questions'
    },
    {
      id: 'test',
      title: 'TEST',
      subtitle: 'NTA-Pattern Computer-Based Test (CBT) Engine',
      icon: Award,
      desc: 'Prepare your students on the exact screen and navigation palette used by NTA for JEE Main, NEET, and CUET. No more manual OMR checking delays — results and AIR ranks are instant.',
      highlights: [
        'Authentic NTA exam screen simulation with subject timers',
        'Question status palette: Answered, Review, Not Visited',
        'Instant All India Ranks, percentiles, and subject cutoffs',
        'Host public scholarship admission tests to acquire local leads'
      ],
      previewBadge: 'NTA JEE/NEET Exact Simulation'
    },
    {
      id: 'connect',
      title: 'CONNECT',
      subtitle: '24/7 Photo & Audio Doubt Resolution Desk',
      icon: MessageSquare,
      desc: 'Students snap a photo of a textbook question or record an audio note. Teachers resolve doubts batch-wise directly from their phone or laptop with text, voice notes, or annotated PDF solutions.',
      highlights: [
        'Photo & voice note doubt submission 24/7',
        'Automatic subject-wise faculty doubt routing',
        'Public batch discussion boards and broadcast notice alerts',
        'Doubt archive so students can review solved questions during revisions'
      ],
      previewBadge: 'Student Doubt Resolution Desk'
    },
    {
      id: 'track',
      title: 'TRACK & RECOVER',
      subtitle: 'Parent Transparency & 1-Click WhatsApp Fee Recovery',
      icon: BarChart3,
      desc: 'Give parents complete visibility into student attendance, test marks, and fee ledgers. Automated polite WhatsApp reminders with 1-click UPI links boost on-time fee recovery to 96.4%.',
      highlights: [
        'Automated polite WhatsApp fee due reminders with direct UPI links',
        'Instant digital fee receipt generation & parent transaction ledger',
        'Real-time absent SMS & WhatsApp alerts sent to parents',
        'Detailed student progress report cards with weak-chapter diagnostic'
      ],
      previewBadge: '96.4% On-Time Fee Collection'
    },
    {
      id: 'grow',
      title: 'GROW',
      subtitle: 'Online Course Store with 0% Revenue Cut',
      icon: TrendingUp,
      desc: 'Expand your offline reputation into an online revenue stream. Sell recorded masterclasses, chapter revision series, and mock test packages to outstation students — with zero revenue commission.',
      highlights: [
        '0% revenue commission on all courses and test series sold',
        'Public student feed to showcase faculty lectures and topper results',
        'Automated student admission enquiry forms & callback leads',
        'Instant student enrollment with integrated Razorpay / UPI gateways'
      ],
      previewBadge: '0% Commission Online Store'
    }
  ];

  const current = categories[activeCategory];
  const CurrentIcon = current.icon;

  return (
    <section id="features" className="py-20 md:py-28 bg-white border-b border-[#E2EBDC] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#7B9D60]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF4E3] text-[#1F2922] text-xs font-black uppercase tracking-wider border border-[#C8DCAE]">
            <Sparkles className="w-3.5 h-3.5 text-[#7B9D60]" />
            <span>The 6 Core Growth Pillars</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1F2922] font-heading tracking-tight leading-tight">
            Turn Your Coaching Into a <br className="hidden sm:inline" />
            <span className="text-[#7B9D60]">Complete Learning &amp; Growth Experience.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#576659] font-medium leading-relaxed">
            Everything you need to teach, practice, test, clear doubts, collect fees, and grow — seamlessly connected in one platform.
          </p>
        </div>

        {/* 6 Category Navigation Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
          {categories.map((cat, idx) => {
            const IconComponent = cat.icon;
            const isActive = activeCategory === idx;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(idx)}
                className={`p-3.5 rounded-2xl border transition-all text-center flex flex-col items-center justify-center gap-1.5 focus:outline-none ${
                  isActive
                    ? 'bg-[#1F2922] text-white border-[#1F2922] shadow-lg scale-102'
                    : 'bg-[#FAFDF8] text-[#1F2922] border-[#E2EBDC] hover:border-[#7B9D60] hover:bg-white'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                  isActive ? 'bg-[#7B9D60] text-white' : 'bg-[#EBF4E3] text-[#7B9D60]'
                }`}>
                  <IconComponent className="w-4 h-4 stroke-[2.2]" />
                </div>
                <span className="text-xs font-black uppercase tracking-wider font-heading">
                  {cat.title}
                </span>
                <span className={`text-[10px] font-semibold truncate max-w-full ${isActive ? 'text-white/80' : 'text-[#576659]'}`}>
                  {cat.id === 'teach' && 'Live & Notes'}
                  {cat.id === 'practice' && 'DPP Engine'}
                  {cat.id === 'test' && 'NTA CBT Mocks'}
                  {cat.id === 'connect' && 'Doubt Desk'}
                  {cat.id === 'track' && 'WhatsApp Fees'}
                  {cat.id === 'grow' && '0% Store'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Showcase Card */}
        <div className="bg-[#FAFDF8] rounded-3xl border border-[#C8DCAE] p-6 sm:p-10 lg:p-12 shadow-md">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#7B9D60] text-xs font-black uppercase tracking-wider border border-[#C8DCAE] shadow-2xs">
                <CurrentIcon className="w-3.5 h-3.5 text-[#7B9D60]" />
                <span>Pillar 0{activeCategory + 1}: {current.title}</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1F2922] font-heading tracking-tight">
                  {current.subtitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#576659] leading-relaxed font-medium mt-3">
                  {current.desc}
                </p>
              </div>

              {/* Highlights Bullet List */}
              <div className="space-y-3 pt-2">
                {current.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-[#E2EBDC] shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#7B9D60] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-bold text-[#1F2922]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Interactive CTA */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenDemoModal}
                  className="px-6 py-3 rounded-xl bg-[#7B9D60] hover:bg-[#68884E] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <span>Explore {current.title} in Live Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Visual Card Mockup */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-[#C8DCAE] shadow-xl p-5 space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-[#E2EBDC]">
                  <span className="text-xs font-black text-[#1F2922] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#7B9D60]" />
                    {current.previewBadge}
                  </span>
                  <span className="text-[10px] font-bold text-[#7B9D60] bg-[#EBF4E3] px-2 py-0.5 rounded">
                    Active System
                  </span>
                </div>

                {/* Dynamic Preview Graphic based on Active Pillar */}
                {activeCategory === 0 && (
                  <div className="space-y-3">
                    <div className="aspect-video bg-[#1F2922] rounded-xl flex flex-col items-center justify-center text-white p-4 relative overflow-hidden">
                      <div className="w-10 h-10 rounded-full bg-[#7B9D60] flex items-center justify-center mb-2 shadow-lg">
                        <Video className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs font-bold">Live Stream: JEE Advanced 2026</span>
                      <span className="text-[10px] text-white/70">Prof. Verma • 148 Students Live</span>
                      <span className="absolute bottom-2 right-2 text-[9px] bg-red-600 text-white px-2 py-0.5 rounded font-bold">
                        REC • DRM Encrypted
                      </span>
                    </div>
                    <div className="p-3 bg-[#FAFDF8] rounded-xl border border-[#E2EBDC] text-xs">
                      <p className="font-bold text-[#1F2922]">Automated Recording Processing</p>
                      <p className="text-[11px] text-[#576659] mt-0.5">Saved automatically to Batch Alpha Video Playlist.</p>
                    </div>
                  </div>
                )}

                {activeCategory === 1 && (
                  <div className="space-y-2 text-xs">
                    <div className="p-3 bg-[#FAFDF8] rounded-xl border border-[#C8DCAE]">
                      <span className="text-[10px] font-bold text-[#7B9D60] block">DPP GENERATOR</span>
                      <p className="font-bold text-[#1F2922] mt-0.5">Physics: Rotational Motion (15 Questions)</p>
                      <p className="text-[10px] text-[#576659]">Difficulty: Hard • Time Limit: 20 Mins</p>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#E2EBDC] space-y-1">
                      <p className="font-bold text-[#1F2922]">Q1. Calculate the Moment of Inertia of a solid cone...</p>
                      <p className="text-[10px] text-[#7B9D60] font-bold">LaTeX formula parsed • +4 / -1 Marking</p>
                    </div>
                  </div>
                )}

                {activeCategory === 2 && (
                  <div className="space-y-2 text-xs">
                    <div className="bg-[#1F2922] text-white p-3 rounded-xl flex justify-between items-center">
                      <span className="font-bold">NTA Full Mock #05</span>
                      <span className="text-[10px] bg-red-500 text-white px-2 py-0.5 rounded font-mono">01:58:32</span>
                    </div>
                    <div className="grid grid-cols-5 gap-1 text-center font-bold text-[10px]">
                      {[...Array(15)].map((_, i) => (
                        <div key={i} className={`p-1.5 rounded ${i < 8 ? 'bg-emerald-500 text-white' : i === 8 ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700'}`}>
                          {i + 1}
                        </div>
                      ))}
                    </div>
                    <div className="p-2 bg-[#FAFDF8] rounded-lg border border-[#E2EBDC] text-[10px] text-[#576659]">
                      Instant Auto-Grading &amp; AIR percentile rank upon submission.
                    </div>
                  </div>
                )}

                {activeCategory === 3 && (
                  <div className="space-y-2 text-xs">
                    <div className="p-3 bg-[#FAFDF8] rounded-xl border border-[#E2EBDC]">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#1F2922]">Doubt #1042: Organic Chemistry</span>
                        <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">Pending Faculty</span>
                      </div>
                      <p className="text-[11px] text-[#576659] mt-1">Photo attached: Sn1 vs Sn2 reaction mechanism query.</p>
                    </div>
                    <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 text-[11px] text-emerald-800">
                      ✓ Dr. Sharma sent an audio note explanation (01:14).
                    </div>
                  </div>
                )}

                {activeCategory === 4 && (
                  <div className="space-y-2 text-xs">
                    <div className="p-3 bg-[#FAFDF8] rounded-xl border border-[#E2EBDC]">
                      <p className="font-bold text-[#1F2922]">Automated WhatsApp Reminder Sent</p>
                      <p className="text-[10px] text-[#576659] mt-0.5">To: 84 Parents with pending 2nd installment.</p>
                    </div>
                    <div className="p-2.5 bg-[#25D366]/15 rounded-xl border border-[#25D366]/30 text-xs font-bold text-[#1F2922]">
                      ₹2,45,000 collected in 24 hours via UPI links!
                    </div>
                  </div>
                )}

                {activeCategory === 5 && (
                  <div className="space-y-2 text-xs">
                    <div className="p-3 bg-[#FAFDF8] rounded-xl border border-[#E2EBDC]">
                      <span className="text-[10px] font-bold text-[#7B9D60]">COURSE STORE</span>
                      <p className="font-bold text-[#1F2922] mt-0.5">Complete JEE 2026 Test Series Pack</p>
                      <p className="text-[10px] text-[#576659]">Price: ₹2,999 • 48 Outstation Students Enrolled</p>
                    </div>
                    <div className="p-2 bg-emerald-50 rounded-lg text-emerald-800 font-bold text-[10px]">
                      Your Cut: ₹1,43,952 (100% Kept • 0% Commission)
                    </div>
                  </div>
                )}

                <button
                  onClick={onOpenDemoModal}
                  className="w-full py-2.5 rounded-xl bg-[#F0F6EB] hover:bg-[#7B9D60] text-[#1F2922] hover:text-white font-extrabold text-xs transition border border-[#C8DCAE] hover:border-[#7B9D60] flex items-center justify-center gap-1.5"
                >
                  <span>See Live Interactive Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
