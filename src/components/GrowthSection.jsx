import React from 'react';
import { Search, WalletCards, ArrowRight, Sparkles } from 'lucide-react';

export default function GrowthSection({ onOpenDemoModal }) {
  return (
    <section id="growth" className="mx-4 sm:mx-6 lg:mx-auto max-w-7xl my-16 sm:my-24">
      <div className="rounded-[28px] bg-gradient-to-r from-[#DDF269] to-[#CBE652] px-6 py-12 sm:px-12 lg:px-16 lg:py-16 shadow-xl border border-[#C6E0B5]">
        <div className="grid items-center gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#173F39]/10 px-3 py-1 text-xs font-extrabold text-[#173F39] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#173F39]" />
              <span>Built For The Next Stage Too</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#173F39] font-heading leading-tight">
              Turn Great Teaching Into Sustainable Growth.
            </h2>
            
            <p className="mt-4 max-w-xl text-sm sm:text-base leading-7 text-[#28564D] font-medium">
              Publish public study materials and free sample mock tests, showcase your coaching profile, and let prospective students discover what makes your institute stand out.
            </p>

            <div className="mt-6">
              <button
                onClick={onOpenDemoModal}
                className="rounded-full bg-[#173F39] px-6 py-3 text-xs sm:text-sm font-extrabold text-white hover:bg-[#28564D] transition-colors shadow-md inline-flex items-center gap-2"
              >
                <span>Book Growth Strategy Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3.5 sm:flex-row lg:flex-col">
            <div className="rounded-2xl bg-white/70 backdrop-blur-md p-4.5 border border-white/40 shadow-sm">
              <Search className="h-6 w-6 text-[#174F46]" />
              <p className="mt-2 text-sm font-extrabold text-[#174F46] font-heading">
                Public Organic Discovery
              </p>
              <p className="mt-1 text-xs leading-5 text-[#386A51] font-medium">
                Institute profiles, public feed, and free sample test series.
              </p>
            </div>

            <div className="rounded-2xl bg-white/70 backdrop-blur-md p-4.5 border border-white/40 shadow-sm">
              <WalletCards className="h-6 w-6 text-[#174F46]" />
              <p className="mt-2 text-sm font-extrabold text-[#174F46] font-heading">
                Sales &amp; Admission Ready
              </p>
              <p className="mt-1 text-xs leading-5 text-[#386A51] font-medium">
                Paid courses, test series, coupon offers, and instant leads.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
