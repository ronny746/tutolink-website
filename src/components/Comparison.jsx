import React from 'react';
import { Check, X, ShieldAlert, Sparkles, Award } from 'lucide-react';
import { comparisonData } from '../data/landingData';

export default function Comparison({ onOpenDemoModal }) {
  return (
    <section id="comparison" className="py-24 relative bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E4EEFB] border border-[#C5D9F8] mb-4">
            <Award className="w-4 h-4 text-[#7493DB]" />
            <span className="text-xs font-bold text-[#3B5298] uppercase tracking-wider">
              Feature &amp; Value Comparison
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#14281B] tracking-tight font-heading">
            Why TutoLink Is The Premier Choice <br className="hidden sm:inline" />
            <span className="text-gradient-blue">For Coaching Directors</span>
          </h2>
          <p className="mt-4 text-[#5F7A67] text-sm sm:text-base font-medium">
            Compare TutoLink OS against traditional offline paperwork and expensive generic software solutions.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl border border-[#D9E6D1] overflow-hidden shadow-[0_16px_36px_rgba(116,147,91,0.1)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              
              {/* Header */}
              <thead>
                <tr className="bg-[#FAFCF9] border-b border-[#D9E6D1]">
                  <th className="p-5 text-sm font-bold text-[#14281B] w-2/5 font-heading">
                    Feature &amp; Requirement
                  </th>
                  <th className="p-5 text-sm font-black text-[#3F572E] bg-[#EBF5E4] w-1/5 border-x border-[#C6E0B5] font-heading">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#7CA45E]" />
                      TutoLink OS
                    </div>
                  </th>
                  <th className="p-5 text-sm font-bold text-[#5F7A67] w-1/5 font-heading">
                    Offline Paperwork
                  </th>
                  <th className="p-5 text-sm font-bold text-[#5F7A67] w-1/5 font-heading">
                    Other Expensive Apps
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="divide-y divide-[#D9E6D1]">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAFCF9] transition-colors">
                    <td className="p-5 text-xs sm:text-sm font-bold text-[#14281B]">
                      {row.feature}
                    </td>

                    {/* TutoLink Column */}
                    <td className="p-5 text-xs sm:text-sm font-black text-[#3F572E] bg-[#EBF5E4]/40 border-x border-[#C6E0B5]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#7CA45E] flex items-center justify-center shadow-sm">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span>{row.tutolink}</span>
                      </div>
                    </td>

                    {/* Offline Column */}
                    <td className="p-5 text-xs sm:text-sm text-[#5F7A67] font-medium">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-500" />
                        <span>{row.offlineOnly}</span>
                      </div>
                    </td>

                    {/* Other Apps Column */}
                    <td className="p-5 text-xs sm:text-sm text-[#5F7A67] font-medium">
                      <div className="flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4 text-amber-500" />
                        <span>{row.otherApps}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          <div className="p-6 bg-[#FAFCF9] border-t border-[#D9E6D1] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#5F7A67] font-bold">
              ⚡ Zero Setup Fees • Unlimited Student Bandwidth • Dedicated Support Account Manager
            </p>
            <button
              onClick={onOpenDemoModal}
              className="shimmer-btn text-white font-bold px-6 py-2.5 rounded-full text-xs shadow-lg"
            >
              Get Custom Pricing Plan
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
