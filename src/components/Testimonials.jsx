import React from 'react';
import { Star, Quote, CheckCircle, Sparkles, TrendingUp, Clock, ShieldCheck } from 'lucide-react';

export default function Testimonials({ onOpenDemoModal }) {
  const caseStudies = [
    {
      name: "Er. Rajesh Verma",
      role: "Founder & Director",
      coaching: "Verma Science Classes, Kota",
      target: "JEE Main, Advanced & NEET",
      students: "850+ Enrolled Students",
      quote: "We used to spend endless hours grading OMR sheets and following up on pending fee dues. With TutoLink, our fee collection rate reached 96.4% on-time via automated WhatsApp reminders, and student test performance improved dramatically!",
      metricBadge: "₹4.2 Lakhs Fees Recovered in 45 Days",
      metricIcon: TrendingUp,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      name: "Dr. Ananya Sharma",
      role: "Academic Director",
      coaching: "Apex Medical Academy, Patna",
      target: "NEET-UG & Foundation",
      students: "1,200+ Enrolled Students",
      quote: "The built-in Question Bank and DPP engine are exceptional. Having 50,000+ pre-tagged Physics, Chemistry and Biology questions saves our faculty over 15 hours every single week. We schedule NTA CBT tests in under 2 minutes.",
      metricBadge: "Saved 15+ Faculty Hours / Week",
      metricIcon: Clock,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      name: "Prof. Amit Kumar",
      role: "Managing Director",
      coaching: "Target Commerce & CA Academy, Delhi",
      target: "CA Foundation, Class 11-12 & CUET",
      students: "450+ Enrolled Students",
      quote: "We were tired of paying 10-15% revenue cuts on our course sales to third-party vendors. TutoLink gave us 100% white-label branding, 0% commission, and our students love the clean modern web & mobile interface.",
      metricBadge: "Saved ₹85,000 in Course Commissions",
      metricIcon: ShieldCheck,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      name: "Er. Santosh Tripathi",
      role: "Director",
      coaching: "Prayag IIT Hub, Prayagraj & Lucknow",
      target: "JEE Dropper & Target Batches",
      students: "680+ Enrolled Students",
      quote: "Parents in UP want accountability. TutoLink's WhatsApp integration automatically alerts parents when a student enters the batch or misses a class. Parents love the instant test scorecards and rank cards on their phones.",
      metricBadge: "98% Parent Satisfaction Rating",
      metricIcon: CheckCircle,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F8FAF5] relative border-b border-[#E2EBDC] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#7B9D60]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#C8DCAE] text-[#1F2922] text-xs font-black uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#7B9D60]" />
            <span>Trusted by 500+ Coaching Directors</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1F2922] font-heading tracking-tight leading-tight">
            Hear From Directors Who <br className="hidden sm:inline" />
            <span className="text-[#7B9D60]">Transformed Their Coaching With TutoLink.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#576659] font-medium max-w-2xl mx-auto">
            Real coaching directors from Kota, Patna, Delhi, and Lucknow sharing their tangible growth numbers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {caseStudies.map((item, idx) => {
            const MetricIcon = item.metricIcon;
            return (
              <div 
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E2EBDC] hover:border-[#7B9D60] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Top Bar with Stars & Metric Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-[#E2EBDC]">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF4E3] text-[#7B9D60] border border-[#C8DCAE] text-xs font-bold">
                      <MetricIcon className="w-3.5 h-3.5" />
                      <span>{item.metricBadge}</span>
                    </div>
                  </div>

                  {/* Quote Body */}
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-[#7B9D60]/20 absolute -top-2 -left-2" />
                    <p className="text-xs sm:text-sm text-[#2D3A30] leading-relaxed font-medium pl-6 italic">
                      "{item.quote}"
                    </p>
                  </div>

                </div>

                {/* Director Profile Footer */}
                <div className="pt-4 border-t border-[#E2EBDC] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-[#C8DCAE] shadow-xs"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm font-black text-[#1F2922] font-heading flex items-center gap-1">
                        {item.name}
                        <CheckCircle className="w-3.5 h-3.5 text-[#7B9D60]" />
                      </h4>
                      <p className="text-[11px] font-bold text-[#7B9D60]">
                        {item.coaching}
                      </p>
                      <p className="text-[10px] text-[#576659]">
                        {item.target} • {item.students}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold bg-[#FAFDF8] text-[#576659] px-2.5 py-1 rounded-lg border border-[#E2EBDC] hidden sm:inline">
                    Verified Director
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Video / Walkthrough Banner */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenDemoModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FAFDF8] border border-[#C8DCAE] hover:border-[#7B9D60] text-xs sm:text-sm font-extrabold text-[#1F2922] shadow-sm hover:shadow-md transition-all group"
          >
            <span>Want to see how it works for your specific institute?</span>
            <span className="text-[#7B9D60] font-black group-hover:translate-x-1 transition-transform flex items-center gap-1">
              Book a 15-Minute Tailored Demo →
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
