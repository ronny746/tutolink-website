import React, { useState } from 'react';
import { 
  Building2, 
  Video, 
  FileCheck, 
  MessageSquare, 
  Users, 
  Rocket,
  Check,
  ArrowRight
} from 'lucide-react';
import { features } from '../data/landingData';

const iconMap = {
  Building2: Building2,
  Video: Video,
  FileCheck: FileCheck,
  MessageSquare: MessageSquare,
  Users: Users,
  Rocket: Rocket
};

export default function FeatureTabs({ onOpenDemoModal }) {
  const [activeTabId, setActiveTabId] = useState(features[0].id);

  const activeFeature = features.find(f => f.id === activeTabId) || features[0];
  const ActiveIcon = iconMap[activeFeature.iconName] || Building2;

  return (
    <section id="features" className="py-16 relative bg-[#F4F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-bold text-[#7CA45E] uppercase tracking-wider mb-2">
            Powerful Platform Capabilities
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#14281B] tracking-tight font-heading">
            Everything Your Coaching Needs To Run Smoothly
          </h2>
        </div>

        {/* Tab Selection Row */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 mb-8 justify-start sm:justify-center">
          {features.map((item) => {
            const IconComponent = iconMap[item.iconName] || Building2;
            const isActive = item.id === activeTabId;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTabId(item.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs whitespace-nowrap transition-all flex-shrink-0 ${
                  isActive
                    ? 'bg-[#14281B] text-white shadow-md'
                    : 'bg-white text-[#5F7A67] border border-[#D9E6D1] hover:bg-[#FAFCF9]'
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#DDF269]' : 'text-[#7CA45E]'}`} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Feature Detail Card */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#D9E6D1] shadow-lg">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF5E4] border border-[#C6E0B5] text-xs font-bold text-[#3F572E]">
                <ActiveIcon className="w-3.5 h-3.5 text-[#7CA45E]" />
                {activeFeature.badge}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14281B] font-heading">
                {activeFeature.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-[#5F7A67] font-medium leading-relaxed">
                {activeFeature.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {activeFeature.highlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2 bg-[#FAFCF9] p-2.5 rounded-xl border border-[#E8F0E3]">
                    <Check className="w-3.5 h-3.5 text-[#7CA45E] flex-shrink-0" />
                    <span className="text-xs text-[#1D3728] font-semibold line-clamp-1">{hl}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <button
                  onClick={onOpenDemoModal}
                  className="shimmer-btn text-white font-bold px-5 py-2.5 rounded-xl shadow-md inline-flex items-center gap-2 text-xs sm:text-sm hover:opacity-95 transition"
                >
                  <span>See {activeFeature.title} In Action</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Artwork */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-[#D9E6D1] bg-[#FAFCF9] p-2 shadow-inner">
                <img
                  src={activeFeature.previewImage}
                  alt={activeFeature.title}
                  className="w-full h-56 sm:h-72 object-cover rounded-xl"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
