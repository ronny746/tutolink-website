import React, { useState } from 'react';
import { Calculator, Sparkles, Clock, TrendingUp, Users, ArrowRight } from 'lucide-react';

export default function RoiCalculator({ onOpenDemoModal }) {
  const [students, setStudents] = useState(250);

  const hoursSaved = Math.round(students * 0.14);
  const additionalFeeRecovered = Math.round(students * 2500 * 0.22);
  const estimatedNewLeads = Math.max(15, Math.round(students * 0.12));

  return (
    <section id="roi-calculator" className="py-14 bg-[#F4F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-xs font-bold text-[#7CA45E] uppercase tracking-wider mb-2">
            Interactive ROI Estimator
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#14281B] tracking-tight font-heading">
            See How Much Time &amp; Fee Revenue You Save
          </h2>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#D9E6D1] shadow-md max-w-4xl mx-auto">
          <div className="space-y-6">
            
            {/* Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs sm:text-sm font-bold text-[#14281B] flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#7CA45E]" />
                  Drag To Select Student Count:
                </label>
                <span className="px-3 py-1 bg-[#EBF5E4] border border-[#C6E0B5] rounded-xl text-[#3F572E] font-black text-xs sm:text-sm">
                  {students} Students
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="1200"
                step="10"
                value={students}
                onChange={(e) => setStudents(parseInt(e.target.value))}
                className="w-full accent-[#7CA45E]"
              />
              <div className="flex justify-between text-[11px] text-[#5F7A67] font-semibold">
                <span>20 Students</span>
                <span>600 Students</span>
                <span>1,200+ Students</span>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-[#FAFCF9] border border-[#D9E6D1]">
                <div className="flex items-center gap-1.5 text-[#4A69B8] mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold">Admin Hours Saved</span>
                </div>
                <p className="text-xl font-black text-[#14281B] font-heading">
                  {hoursSaved} Hours / mo
                </p>
                <p className="text-[10px] text-[#5F7A67] mt-0.5">Automated registers &amp; tests</p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAFCF9] border border-[#D9E6D1]">
                <div className="flex items-center gap-1.5 text-[#7CA45E] mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs font-bold">Accelerated Fees</span>
                </div>
                <p className="text-xl font-black text-[#3F572E] font-heading">
                  ₹{additionalFeeRecovered.toLocaleString('en-IN')}
                </p>
                <p className="text-[10px] text-[#5F7A67] mt-0.5">Automated WhatsApp reminders</p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAFCF9] border border-[#D9E6D1]">
                <div className="flex items-center gap-1.5 text-[#7CA45E] mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold">New Leads</span>
                </div>
                <p className="text-xl font-black text-[#14281B] font-heading">
                  ~{estimatedNewLeads} Leads / mo
                </p>
                <p className="text-[10px] text-[#5F7A67] mt-0.5">Via Public Feed free mocks</p>
              </div>
            </div>

            <button
              onClick={onOpenDemoModal}
              className="w-full shimmer-btn text-white font-bold py-3 px-5 rounded-xl shadow-sm flex items-center justify-center gap-2 text-xs sm:text-sm"
            >
              <span>Book Growth Strategy Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
