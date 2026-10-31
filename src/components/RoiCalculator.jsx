import React, { useState } from 'react';
import { 
  Calculator, 
  Clock, 
  TrendingUp, 
  Users, 
  ArrowRight, 
  IndianRupee, 
  ShieldCheck, 
  CheckCircle2
} from 'lucide-react';

export default function RoiCalculator({ onOpenDemoModal }) {
  const [students, setStudents] = useState(250);
  const [avgFee, setAvgFee] = useState(2500);

  // Dynamic calculations based on Indian coaching institute operational benchmarks
  const totalMonthlyFeeVolume = students * avgFee;
  // Typically, 22% of fees are delayed or defaulted in traditional offline coaching; automated WhatsApp recovers ~75% of those
  const feeRecoveredPerMonth = Math.round(totalMonthlyFeeVolume * 0.16);
  // Faculty & Admin hours saved per month (test typing, manual OMR grading, call chasing)
  const hoursSavedPerMonth = Math.round(students * 0.22);
  // Estimated platform commission saved compared to 10% commission platforms
  const commissionSaved = Math.round(totalMonthlyFeeVolume * 0.10);

  return (
    <section id="roi-calculator" className="py-20 md:py-28 bg-[#F0F6EB] border-y border-[#E2EBDC] relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#7B9D60]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#C8DCAE] text-[#1F2922] text-xs font-black uppercase tracking-wider shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-[#7B9D60]" />
            <span>Interactive ROI &amp; Revenue Estimator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1F2922] font-heading tracking-tight leading-tight">
            See Exactly How Much Time &amp; Money <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F2922] via-[#7B9D60] to-[#55753C]">
              TutoLink Unlocks For Your Institute.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#576659] font-medium leading-relaxed">
            Move the sliders to match your coaching institute size. Watch your recovered fees and saved faculty hours update in real-time.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white rounded-3xl border border-[#C8DCAE] shadow-[0_16px_40px_rgba(123,157,96,0.12)] max-w-5xl mx-auto p-6 sm:p-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Controls: Sliders */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Slider 1: Number of Students */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-[#1F2922] flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#7B9D60]" />
                    <span>Total Active Students:</span>
                  </label>
                  <span className="px-3.5 py-1 bg-[#EBF4E3] border border-[#C8DCAE] rounded-xl text-[#1F2922] font-black text-sm sm:text-base">
                    {students} Students
                  </span>
                </div>

                <input
                  type="range"
                  min="30"
                  max="1500"
                  step="10"
                  value={students}
                  onChange={(e) => setStudents(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-[#E2EBDC] rounded-lg appearance-none cursor-pointer accent-[#7B9D60]"
                />

                <div className="flex justify-between text-[11px] text-[#576659] font-bold">
                  <span>30 Students (Solo Tutor)</span>
                  <span>500 Students</span>
                  <span>1,500+ Students (Academy)</span>
                </div>
              </div>

              {/* Slider 2: Average Monthly Fee */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-[#1F2922] flex items-center gap-2">
                    <IndianRupee className="w-4 h-4 text-[#7B9D60]" />
                    <span>Avg. Monthly Tuition Fee / Student:</span>
                  </label>
                  <span className="px-3.5 py-1 bg-[#EBF4E3] border border-[#C8DCAE] rounded-xl text-[#1F2922] font-black text-sm sm:text-base">
                    ₹{avgFee.toLocaleString('en-IN')} / mo
                  </span>
                </div>

                <input
                  type="range"
                  min="800"
                  max="10000"
                  step="200"
                  value={avgFee}
                  onChange={(e) => setAvgFee(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-[#E2EBDC] rounded-lg appearance-none cursor-pointer accent-[#7B9D60]"
                />

                <div className="flex justify-between text-[11px] text-[#576659] font-bold">
                  <span>₹800 (Foundation/Boards)</span>
                  <span>₹3,500 (JEE/NEET)</span>
                  <span>₹10,000+ (Premium Dropper)</span>
                </div>
              </div>

              {/* Trust Box */}
              <div className="p-4 rounded-2xl bg-[#FAFDF8] border border-[#E2EBDC] space-y-2 text-xs text-[#576659]">
                <div className="flex items-center gap-2 font-bold text-[#1F2922]">
                  <CheckCircle2 className="w-4 h-4 text-[#7B9D60]" />
                  <span>How This ROI Is Achieved:</span>
                </div>
                <p className="leading-relaxed pl-6">
                  By eliminating manual test typing with 50,000+ pre-loaded questions, replacing paper OMRs with instant CBT evaluation, and automating WhatsApp fee collection with 1-click UPI links.
                </p>
              </div>

            </div>

            {/* Right: Real-Time Results Cards */}
            <div className="lg:col-span-6 bg-[#FAFDF8] p-6 sm:p-8 rounded-3xl border border-[#C8DCAE] space-y-6">
              
              <div className="border-b border-[#E2EBDC] pb-4">
                <span className="text-[10px] font-black uppercase text-[#7B9D60] tracking-wider">
                  Estimated Value Unlocked
                </span>
                <h3 className="text-xl font-black text-[#1F2922] mt-0.5">
                  Your Monthly Institute Growth
                </h3>
              </div>

              {/* 3 Metric Rows */}
              <div className="space-y-4">
                
                {/* Metric 1: Fee Recovery */}
                <div className="bg-white p-4 rounded-2xl border border-[#E2EBDC] shadow-xs flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#1F2922]">
                      <TrendingUp className="w-4 h-4 text-[#7B9D60]" />
                      <span>Pending Fees Recovered</span>
                    </div>
                    <p className="text-[11px] text-[#576659]">Via automated WhatsApp reminders</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl sm:text-2xl font-black text-[#7B9D60]">
                      +₹{feeRecoveredPerMonth.toLocaleString('en-IN')}
                    </span>
                    <span className="block text-[10px] text-[#576659] font-bold">/ month recovered</span>
                  </div>
                </div>

                {/* Metric 2: Hours Saved */}
                <div className="bg-white p-4 rounded-2xl border border-[#E2EBDC] shadow-xs flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#1F2922]">
                      <Clock className="w-4 h-4 text-[#7B9D60]" />
                      <span>Faculty &amp; Staff Time Saved</span>
                    </div>
                    <p className="text-[11px] text-[#576659]">Zero test typing &amp; instant grading</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl sm:text-2xl font-black text-[#1F2922]">
                      {hoursSavedPerMonth} Hours
                    </span>
                    <span className="block text-[10px] text-[#576659] font-bold">/ month saved</span>
                  </div>
                </div>

                {/* Metric 3: Zero Commission Advantage */}
                <div className="bg-white p-4 rounded-2xl border border-[#E2EBDC] shadow-xs flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#1F2922]">
                      <ShieldCheck className="w-4 h-4 text-[#7B9D60]" />
                      <span>Saved from 10% Platform Commission</span>
                    </div>
                    <p className="text-[11px] text-[#576659]">TutoLink charges 0% revenue cut</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl sm:text-2xl font-black text-[#1F2922]">
                      ₹{commissionSaved.toLocaleString('en-IN')}
                    </span>
                    <span className="block text-[10px] text-[#7B9D60] font-bold">100% kept by you</span>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenDemoModal}
                  className="w-full py-4 px-6 rounded-2xl bg-[#7B9D60] hover:bg-[#68884E] text-white font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Claim Your Free 14-Day Growth Trial</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-[11px] text-[#576659] mt-2 font-medium">
                  Includes complete assisted data migration &amp; your branded portal setup.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
