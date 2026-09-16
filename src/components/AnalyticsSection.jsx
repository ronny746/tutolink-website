import React from 'react';
import { BarChart3, TrendingUp, AlertCircle, Award, Users, ArrowUpRight } from 'lucide-react';

export default function AnalyticsSection({ onOpenDemoModal }) {
  const analyticsFeatures = [
    {
      title: 'Subject & Chapter Score Insights',
      desc: 'Instantly pinpoint which topics (e.g. Organic Chemistry, Calculus) need revision across your batch.'
    },
    {
      title: 'Auto Rank Lists & Percentiles',
      desc: 'Generate instant batch rank lists, accuracy metrics, and speed analysis for JEE, NEET, and Board exams.'
    },
    {
      title: 'Automated Parent Updates',
      desc: 'Share clear performance summaries, attendance records, and test scorecards directly with parents.'
    },
    {
      title: 'Early Academic Risk Alerts',
      desc: 'Identify lagging students automatically before exam day so teachers can intervene with remedial support.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#E2EBDC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Dashboard Graphic */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="bg-[#F8FAF5] border border-[#E2EBDC] rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E2EBDC]">
                <div>
                  <h4 className="text-base font-bold text-[#1F2922]">Batch Analytics Overview</h4>
                  <p className="text-xs text-[#2D3A30]/70">Target JEE Main 2026 • 120 Students</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#7B9D60]/20 text-[#2D3A30] text-xs font-bold flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-[#7B9D60]" /> +12.4% Avg Score
                </span>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold text-[#1F2922] mb-1">
                    <span>Physics (Mechanics & Waves)</span>
                    <span className="text-[#7B9D60]">78% Mastery</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-[#E2EBDC] overflow-hidden">
                    <div className="h-full bg-[#7B9D60] rounded-full" style={{ width: '78%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-[#1F2922] mb-1">
                    <span>Mathematics (Calculus & Vectors)</span>
                    <span className="text-[#7B9D60]">84% Mastery</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-[#E2EBDC] overflow-hidden">
                    <div className="h-full bg-[#7B9D60] rounded-full" style={{ width: '84%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-[#1F2922] mb-1">
                    <span>Chemistry (Inorganic & Physical)</span>
                    <span className="text-amber-600">62% Needs Revision</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-[#E2EBDC] overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: '62%' }} />
                  </div>
                </div>
              </div>

              {/* Action Alert Card */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-amber-900">Remedial Action Recommended</h5>
                  <p className="text-[11px] text-amber-800 mt-0.5">
                    14 students scored below 40% in Electrochemistry DPP. Auto-schedule a doubt session for Saturday?
                  </p>
                </div>
              </div>

              {/* Top Performers Mini Leaderboard */}
              <div className="pt-2">
                <h5 className="text-xs font-bold text-[#1F2922] mb-3 uppercase tracking-wider">
                  Top Rankers in Mock Test 04
                </h5>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2.5 rounded-xl bg-white border border-[#E2EBDC] text-center">
                    <span className="text-[10px] font-bold text-[#7B9D60]">RANK 1</span>
                    <p className="text-xs font-bold text-[#1F2922] mt-0.5">Aarav Sharma</p>
                    <span className="text-[10px] text-[#2D3A30]/70">284/300</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#E2EBDC] text-center">
                    <span className="text-[10px] font-bold text-[#7B9D60]">RANK 2</span>
                    <p className="text-xs font-bold text-[#1F2922] mt-0.5">Priya Gupta</p>
                    <span className="text-[10px] text-[#2D3A30]/70">278/300</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#E2EBDC] text-center">
                    <span className="text-[10px] font-bold text-[#7B9D60]">RANK 3</span>
                    <p className="text-xs font-bold text-[#1F2922] mt-0.5">Rohan Verma</p>
                    <span className="text-[10px] text-[#2D3A30]/70">272/300</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B9D60]/15 text-[#2D3A30] text-xs font-semibold uppercase tracking-wider border border-[#7B9D60]/30">
              <BarChart3 className="w-3.5 h-3.5 text-[#7B9D60]" />
              <span>Performance Intelligence</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2922] tracking-tight leading-tight">
              Know How Your Students <br />
              <span className="text-[#7B9D60]">Are Doing. Always.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#2D3A30]/85 leading-relaxed">
              Never wait for term exams to discover where students are lagging. TutoLink gives you real-time analytics across daily attendance, DPP scores, and mock test trends.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {analyticsFeatures.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#F8FAF5] border border-[#E2EBDC] hover:border-[#7B9D60]/50 transition-colors">
                  <h4 className="text-sm font-bold text-[#1F2922] mb-1">{item.title}</h4>
                  <p className="text-xs text-[#2D3A30]/75 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDemoModal}
                className="px-7 py-3.5 rounded-xl bg-[#7B9D60] text-white font-bold text-sm hover:bg-[#6A8B50] shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Request Analytics Dashboard Walkthrough</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
