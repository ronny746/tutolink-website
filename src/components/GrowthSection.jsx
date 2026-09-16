import React from 'react';
import { Search, WalletCards, ArrowRight, Sparkles } from 'lucide-react';

export default function GrowthSection({ onOpenDemoModal }) {
  return (
    <section id="growth" className="mx-4 sm:mx-6 lg:mx-auto max-w-7xl my-16 sm:my-24">
      <div className="rounded-[28px] bg-gradient-to-r from-[#64844A] to-[#7B9D60] px-6 py-12 sm:px-12 lg:px-16 lg:py-16 shadow-xl border border-[#C4DAAF]">
        <div className="grid items-center gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-extrabold text-white mb-3">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Built For The Next Stage Too</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-heading leading-tight">
              Turn Great Teaching Into Sustainable Growth.
            </h2>
            
            <p className="mt-4 max-w-xl text-sm sm:text-base leading-7 text-white/90 font-medium">
              Publish public study materials and free sample mock tests, showcase your coaching profile, and let prospective students discover what makes your institute stand out.
            </p>

            <div className="mt-6">
              <button
                onClick={onOpenDemoModal}
                className="rounded-full bg-white px-6 py-3 text-xs sm:text-sm font-extrabold text-[#7B9D60] hover:bg-[#EBF4E3] transition-colors shadow-md inline-flex items-center gap-2"
              >
                <span>Book Growth Strategy Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3.5 sm:flex-row lg:flex-col">
            <div className="rounded-2xl bg-white/90 backdrop-blur-md p-4.5 border border-white/50 shadow-sm">
              <Search className="h-6 w-6 text-[#7B9D60]" />
              <p className="mt-2 text-sm font-extrabold text-[#1F2922] font-heading">
                Public Organic Discovery
              </p>
              <p className="mt-1 text-xs leading-5 text-[#576659] font-medium">
                Institute profiles, public feed, and free sample test series.
              </p>
            </div>

            <div className="rounded-2xl bg-white/90 backdrop-blur-md p-4.5 border border-white/50 shadow-sm">
              <WalletCards className="h-6 w-6 text-[#7B9D60]" />
              <p className="mt-2 text-sm font-extrabold text-[#1F2922] font-heading">
                Sales &amp; Admission Ready
              </p>
              <p className="mt-1 text-xs leading-5 text-[#576659] font-medium">
                Paid courses, test series, coupon offers, and instant leads.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
