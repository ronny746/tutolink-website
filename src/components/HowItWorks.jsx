import React from 'react';
import { 
  Building, 
  UserPlus, 
  UploadCloud, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { onboardingSteps } from '../data/landingData';

const iconMap = {
  Building: Building,
  UserPlus: UserPlus,
  UploadCloud: UploadCloud,
  Sparkles: Sparkles
};

export default function HowItWorks({ onOpenDemoModal }) {
  return (
    <section id="how-it-works" className="py-14 bg-[#F4F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-bold text-[#7CA45E] uppercase tracking-wider mb-2">
            Simple 4-Step Onboarding
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#14281B] tracking-tight font-heading">
            Go Live In Under 10 Minutes
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {onboardingSteps.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || Building;

            return (
              <div 
                key={idx}
                className="bg-white p-5 rounded-2xl border border-[#D9E6D1] shadow-2xs hover:border-[#7CA45E] transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black text-[#7CA45E] font-heading">
                    {item.step}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#EBF5E4] flex items-center justify-center text-[#7CA45E]">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-sm font-extrabold text-[#14281B] font-heading mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5F7A67] font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Callout */}
        <div className="mt-8 bg-[#EBF5E4] p-4 sm:p-5 rounded-2xl border border-[#C6E0B5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#7CA45E] flex-shrink-0" />
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#14281B]">
                Free Guided Data Migration Included
              </p>
              <p className="text-[11px] text-[#5F7A67]">
                Our team imports your Excel rosters, question papers, and student records for free.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenDemoModal}
            className="shimmer-btn text-white font-bold px-4 py-2 rounded-xl shadow-xs text-xs whitespace-nowrap flex-shrink-0 flex items-center gap-1.5"
          >
            <span>Book Guided Setup</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
