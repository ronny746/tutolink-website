import React, { useState } from 'react';
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react';

export default function Faq({ onOpenDemoModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const customFaqs = [
    {
      q: 'How quickly can we start using TutoLink?',
      a: 'You can launch your institute portal in less than 10 minutes. Simply register, customize your institute name and logo, upload your batches, and invite your students.'
    },
    {
      q: 'Can our institute use its own branding?',
      a: 'Yes. TutoLink is built as a white-label technology platform. Your students see your institute logo, brand colors, custom subdomain (or domain), and institute announcements.'
    },
    {
      q: 'Can we conduct live classes and store recorded lectures?',
      a: 'Yes. You can host interactive live classes and automatically archive session recordings into organized batch playlists for 24/7 student revision.'
    },
    {
      q: 'Can we create CBT mock tests and test series?',
      a: 'Yes. TutoLink features a complete computer-based test (CBT) engine with full-screen exam mode, timers, subject sections, auto-grading, and instant rank analytics.'
    },
    {
      q: 'Can we sell online courses and test series beyond our city?',
      a: 'Yes. You can publish online courses, recorded masterclasses, and test series to attract and enroll outstation students beyond your physical classroom boundary.'
    },
    {
      q: 'Can students practice from our institute question bank?',
      a: 'Yes. You can upload or build your question bank and auto-generate Daily Practice Problems (DPPs), chapter exercises, or custom practice quizzes.'
    },
    {
      q: 'Can students access our public educational content?',
      a: 'Yes. You can publish free sample lectures, open demo tests, and study notes so prospective students can discover your teaching style before enrolling.'
    },
    {
      q: 'Can we manage existing offline students alongside digital learners?',
      a: 'Yes. TutoLink is designed for the modern hybrid coaching model, giving your offline students digital superpowers while allowing you to enroll online students.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#F8FAF5] border-t border-[#E2EBDC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B9D60]/15 text-[#2D3A30] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#7B9D60]/30">
            <HelpCircle className="w-3.5 h-3.5 text-[#7B9D60]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2922] tracking-tight">
            Clear Answers for Coaching Directors
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {customFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? 'border-[#7B9D60] shadow-md' : 'border-[#E2EBDC]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-[#1F2922]">
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform flex-shrink-0 ${
                    isOpen ? 'bg-[#7B9D60] text-white rotate-180' : 'bg-[#F8FAF5] text-[#7B9D60]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-[#2D3A30]/85 font-medium leading-relaxed border-t border-[#E2EBDC] bg-[#F8FAF5] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Callout */}
        <div className="mt-10 text-center bg-white p-6 rounded-2xl border border-[#E2EBDC] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#1F2922]">Have specific questions about your institute?</h4>
            <p className="text-xs text-[#2D3A30]/75 mt-0.5">Our EdTech specialists can help you configure your portal.</p>
          </div>
          <button
            onClick={onOpenDemoModal}
            className="px-5 py-2.5 rounded-xl bg-[#7B9D60] text-white font-bold text-xs hover:bg-[#6A8B50] transition-colors whitespace-nowrap shadow-xs inline-flex items-center gap-1.5"
          >
            <span>Speak with an Specialist</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
