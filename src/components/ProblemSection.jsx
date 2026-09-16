import React from 'react';
import { 
  Video, 
  BookOpen, 
  FileCheck2, 
  MessageSquare, 
  TrendingUp, 
  Bell, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export default function ProblemSection({ onOpenDemoModal }) {
  const elements = [
    { title: "Classes", desc: "Live stream & archived recorded lectures", icon: Video },
    { title: "Study Material", desc: "Digital notes, DPPs & PDF ebooks", icon: BookOpen },
    { title: "Practice", desc: "Custom topic DPPs & question bank", icon: FileCheck2 },
    { title: "Tests", desc: "CBT exam engine with All India Ranks", icon: TrendingUp },
    { title: "Doubts", desc: "24/7 student-teacher photo & audio desk", icon: MessageSquare },
    { title: "Communication", desc: "Automated WhatsApp announcements & fees", icon: Bell },
    { title: "Progress", desc: "Parent visibility trend graphs & analytics", icon: CheckCircle2 },
  ];

  return (
    <section id="problem" className="py-16 sm:py-24 bg-[#F8FAF5] relative border-t border-[#E2EBDC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Marketing Hook Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#7B9D60] bg-[#F0F6EB] px-3.5 py-1.5 rounded-full border border-[#C8DCAE]">
            Changing Student Dynamics
          </span>
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F2922] font-heading tracking-tight mt-4 leading-tight">
            The way students learn has changed. <br className="hidden sm:inline" />
            <span className="text-[#7B9D60]">Has your coaching?</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#576659] font-medium leading-relaxed max-w-2xl mx-auto">
            Your classroom is still important. But learning doesn't stop when the class ends. Students today expect continuous access to their batch notes, tests, doubt solving, and practice from their phones.
          </p>
        </div>

        {/* Visual Stack: Classroom Elements Connecting into TutoLink */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#E2EBDC] shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-lg sm:text-2xl font-bold text-[#1F2922] font-heading">
              Everything happens after the lecture ends:
            </h3>
            <p className="text-xs sm:text-sm text-[#576659] mt-1 font-medium">
              TutoLink brings all 7 essential learning touchpoints into one connected digital home.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
            {elements.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#FAFDF8] border border-[#E2EBDC] p-4 rounded-2xl text-center hover:border-[#7B9D60] hover:shadow-md transition-all group flex flex-col items-center justify-between"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F0F6EB] border border-[#C8DCAE] flex items-center justify-center text-[#7B9D60] mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-[#1F2922] font-heading">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-[#576659] mt-1 font-medium line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Transition Banner */}
          <div className="mt-8 pt-6 border-t border-[#E2EBDC] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#F0F6EB]/60 p-4 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#7B9D60] text-white flex items-center justify-center font-bold text-xs">
                ✓
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#1F2922]">
                Expand physical teaching into your institute's official digital platform.
              </p>
            </div>

            <button
              onClick={onOpenDemoModal}
              className="shimmer-btn text-white font-extrabold px-5 py-2.5 rounded-full text-xs flex items-center gap-1.5 whitespace-nowrap shadow-sm"
            >
              <span>See How It Works</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
