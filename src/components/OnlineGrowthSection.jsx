import React from 'react';
import { Globe, BookOpen, Share2, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function OnlineGrowthSection({ onOpenDemoModal }) {
  const onlineFlow = [
    { title: 'Offline Coaching', desc: 'Your physical classroom & core batches' },
    { title: 'Online Courses', desc: 'Digital courses for outstation students' },
    { title: 'Recorded Classes', desc: 'Self-paced revision video modules' },
    { title: 'Test Series', desc: 'Standalone mock test packages' }
  ];

  const qbSteps = [
    'Question Bank',
    'Subject',
    'Chapter',
    'Topic',
    'Difficulty',
    'Count',
    'Generate Test',
    'Take Test',
    'Result'
  ];

  const discoverySteps = [
    'Free Content',
    'Student Discovery',
    'Institute Profile',
    'Enquiry',
    'Course / Test Series',
    'Enrollment'
  ];

  return (
    <section id="growth" className="py-20 md:py-28 bg-[#F8FAF5] border-b border-[#E2EBDC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Part 1: Online Course Business */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B9D60]/15 text-[#2D3A30] text-xs font-semibold uppercase tracking-wider border border-[#7B9D60]/30">
              <Globe className="w-3.5 h-3.5 text-[#7B9D60]" />
              <span>Revenue Beyond Offline Batches</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2922] tracking-tight leading-tight">
              Your Classroom Can Sell <br />
              <span className="text-[#7B9D60]">Beyond Your City.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#2D3A30]/85 leading-relaxed">
              Turn your expertise into online courses, recorded programs and test series that students can access wherever they are.
            </p>

            <div className="space-y-3 pt-2">
              {onlineFlow.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#E2EBDC]">
                  <CheckCircle2 className="w-5 h-5 text-[#7B9D60] flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-[#1F2922]">{item.title}</h4>
                    <p className="text-xs text-[#2D3A30]/75">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDemoModal}
                className="px-6 py-3 rounded-xl bg-[#7B9D60] text-white text-xs font-bold hover:bg-[#6A8B50] shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Launch Online Course Store</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E2EBDC] shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E2EBDC]">
                <span className="text-xs font-bold text-[#1F2922]">A Larger Digital Business</span>
                <span className="text-xs font-semibold text-[#7B9D60] bg-[#7B9D60]/15 px-2.5 py-0.5 rounded-full">
                  Unified Institute Dashboard
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAF5] border border-[#E2EBDC] space-y-3">
                <span className="text-[10px] uppercase font-bold text-[#7B9D60] bg-[#7B9D60]/10 px-2 py-0.5 rounded">Public Course Store</span>
                <h4 className="text-lg font-bold text-[#1F2922]">Apex Academy Kota — Master Series</h4>
                <p className="text-xs text-[#2D3A30]/80">Target JEE Advanced 2026 Mathematics & Physics Pack</p>
                <div className="pt-2 flex items-center justify-between text-xs border-t border-[#E2EBDC]">
                  <span className="font-mono text-[#7B9D60] font-bold">₹ 4,999 / Student</span>
                  <span className="bg-[#7B9D60] text-white px-3 py-1 rounded font-bold">Enroll Now</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-[#F8FAF5] border border-[#E2EBDC] text-center">
                  <p className="text-xs text-[#2D3A30]/70 font-semibold">Online Enrollments</p>
                  <p className="text-xl font-extrabold text-[#1F2922] mt-1">340+ Active</p>
                </div>
                <div className="p-4 rounded-xl bg-[#F8FAF5] border border-[#E2EBDC] text-center">
                  <p className="text-xs text-[#2D3A30]/70 font-semibold">Test Series Sales</p>
                  <p className="text-xl font-extrabold text-[#7B9D60] mt-1">1,280 Sold</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Part 2: Question Bank + Practice Engine */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E2EBDC] shadow-lg space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B9D60]/15 text-[#2D3A30] text-xs font-semibold uppercase tracking-wider border border-[#7B9D60]/30">
              <Layers className="w-3.5 h-3.5 text-[#7B9D60]" />
              <span>Smart Practice</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1F2922]">
              Let Students Practice Exactly What They Need.
            </h3>
            <p className="text-base sm:text-lg text-[#2D3A30]/85">
              Turn your institute's question bank into unlimited practice possibilities.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
            {qbSteps.map((step, idx) => (
              <div key={idx} className="bg-[#F8FAF5] p-3 rounded-xl border border-[#E2EBDC] text-center flex flex-col items-center justify-center gap-1">
                <span className="text-[10px] font-extrabold text-[#7B9D60]">{idx + 1}</span>
                <span className="text-xs font-bold text-[#1F2922]">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: Public Content / Discovery */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E2EBDC] space-y-8 shadow-xl">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B9D60]/15 text-[#2D3A30] text-xs font-semibold uppercase tracking-wider border border-[#7B9D60]/30">
              <Share2 className="w-3.5 h-3.5 text-[#7B9D60]" />
              <span>Student Discovery</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1F2922]">
              Teach. Get Discovered. Grow.
            </h3>
            <p className="text-base sm:text-lg text-[#2D3A30]/85">
              Publish free videos, study material, tests and educational content to let new students discover your institute before they join.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {discoverySteps.map((step, idx) => (
              <div key={idx} className="bg-[#F8FAF5] p-4 rounded-xl border border-[#E2EBDC] text-center flex flex-col items-center justify-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#7B9D60] text-white text-xs font-black flex items-center justify-center">
                  {idx + 1}
                </span>
                <span className="text-xs font-bold text-[#1F2922]">{step}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
