import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function BannerCarousel({ onOpenDemoModal }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const bannerSlides = [
    {
      id: 1,
      tag: "⚡ 10-Minute Setup",
      title: "Transform Your Coaching Into A Branded Digital Powerhouse",
      subtitle: "Launch your custom coaching app with live streaming, automated attendance, and multi-branch student management.",
      cta: "Book 15-Min Live Demo",
      bgGradient: "from-[#526E3A] via-[#64844A] to-[#7B9D60]",
      image: "/assets/preview-dashboard.jpg",
      badge: "500+ Active Institutes"
    },
    {
      id: 2,
      tag: "📝 Exam & DPP Engine",
      title: "50,000+ Tagged Questions & Auto-Graded CBT Tests",
      subtitle: "Schedule JEE, NEET & Board exams in 2 mins. Auto grading with All India Ranks & chapter-wise analytics.",
      cta: "Explore Question Bank",
      bgGradient: "from-[#4D6737] via-[#5F7F46] to-[#7B9D60]",
      image: "/assets/preview-test.jpg",
      badge: "99.4% Grading Accuracy"
    },
    {
      id: 3,
      tag: "💰 Fast Fee Recovery",
      title: "Automated WhatsApp Fee Reminders & Parent App",
      subtitle: "Parent portal with attendance graphs, automated WhatsApp alerts, and instant online fee receipts.",
      cta: "See Parent App Demo",
      bgGradient: "from-[#57753C] via-[#698C4C] to-[#7B9D60]",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      badge: "95% On-Time Collection"
    },
    {
      id: 4,
      tag: "🚀 Student Acquisition",
      title: "Acquire Prospective Students Organically Via Public Feed",
      subtitle: "Promote free mock test series and study notes to local students to generate verified admission leads.",
      cta: "Get Student Leads",
      bgGradient: "from-[#486132] via-[#5B7B42] to-[#7B9D60]",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      badge: "40+ Leads/Month Avg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [bannerSlides.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % bannerSlides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  const activeSlide = bannerSlides[currentIndex];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-4 sm:pb-6">
      
      {/* Main Banner Box */}
      <div className={`relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r ${activeSlide.bgGradient} text-white shadow-xl border border-[#D9E6D1]/30 transition-all duration-700`}>
        
        {/* Subtle Overlay Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent)] pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-6 items-center p-4 sm:p-8 lg:p-10 relative z-10 w-full min-h-[300px] sm:min-h-[380px]">
          
          {/* Left Text & CTA */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-5">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-bold text-white shadow-xs">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>{activeSlide.tag}</span>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.2] font-heading">
              {activeSlide.title}
            </h2>

            <p className="text-xs sm:text-sm text-gray-200 font-medium leading-relaxed max-w-xl">
              {activeSlide.subtitle}
            </p>

            <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenDemoModal}
                className="shimmer-btn text-white font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                <span>{activeSlide.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="hidden xs:flex items-center gap-1.5 text-xs font-bold text-white/90 bg-black/20 backdrop-blur px-3 py-2 rounded-full border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{activeSlide.badge}</span>
              </div>
            </div>

          </div>

          {/* Right Image Graphic Shell */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-black/40 group">
              <img
                src={activeSlide.image}
                alt={activeSlide.title}
                className="w-full h-60 sm:h-64 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </div>
          </div>

        </div>

        {/* Carousel Prev/Next Arrows - Positioned cleanly */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md flex items-center justify-center transition-all active:scale-95 z-20 border border-white/20"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-md flex items-center justify-center transition-all active:scale-95 z-20 border border-white/20"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
          {bannerSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === currentIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

    </div>
  );
}
