import React, { useState } from 'react';
import { ChevronDown, ArrowRight, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';

export default function Faq({ onOpenDemoModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const customFaqs = [
    {
      q: 'How quickly can we migrate our existing students and question papers to TutoLink?',
      a: 'In less than 10 minutes. TutoLink includes a 1-Click Excel Migration tool. Simply export your student list or batch roster from Excel, Google Sheets, or your previous software, and upload it. Our dedicated onboarding team also provides free guided assistance to set up your first batch and test.'
    },
    {
      q: 'Will students and parents see TutoLink, or our own institute branding?',
      a: '100% your institute branding. TutoLink is a true white-label platform. Your students log into your portal with your coaching logo, your institute brand color palette, and your custom subdomain (e.g., yourcoaching.tutolink.in or your own .com). Students never see third-party ads or competitor promotions.'
    },
    {
      q: 'How does TutoLink protect our video lectures and study material from piracy?',
      a: 'We use enterprise-grade encrypted video streaming with dynamic DRM watermarking (displaying the student’s phone number and roll code on screen). Screen-recording and video downloading are strictly prevented across our mobile app and web platform, ensuring your proprietary lectures never leak onto Telegram or YouTube.'
    },
    {
      q: 'How does automated WhatsApp fee collection work, and does it increase on-time payment?',
      a: 'TutoLink connects with official WhatsApp Business API to send scheduled, polite fee due reminders to parents along with a 1-click UPI and Card payment link. When the parent pays, an official digital receipt is instantly generated, and your ledger updates automatically, eliminating awkward manual follow-ups.'
    },
    {
      q: 'Does TutoLink charge any commission or revenue cut on our course sales?',
      a: 'ZERO commission. Unlike legacy platforms that take 10% to 15% cuts of your student enrollments, TutoLink charges 0% commission. 100% of your student tuition fees and course revenue go straight to your own UPI or institute bank account.'
    },
    {
      q: 'Our teachers and staff are non-technical. Can they create CBT mock tests easily?',
      a: 'Absolutely. We built the test engine specifically for non-technical teachers. You can auto-generate a 30-question Daily Practice Problem (DPP) in 60 seconds by simply selecting the Subject, Chapter, and Difficulty from our 50,000+ pre-tagged question bank. Teachers can also upload custom questions in Word or Excel.'
    },
    {
      q: 'Can parents monitor attendance and test progress without bothering our teachers?',
      a: 'Yes. Parents receive a dedicated login or direct WhatsApp performance alerts. Every time attendance is marked, parents receive an instant notification if their child is absent. After every CBT test, parents can view the student’s scorecard, percentile rank, and chapter-wise strength analysis.'
    },
    {
      q: 'What hardware or servers do we need to run TutoLink in our coaching center?',
      a: 'Zero servers or expensive hardware needed. TutoLink is a 100% cloud-native SaaS that runs seamlessly on any standard laptop, desktop computer, Android smartphone, iPad, or tablet. All class recordings and student records are securely backed up in the cloud.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const whatsappUrl = "https://wa.me/917052422066?text=" + encodeURIComponent("Hi TutoLink Team, I have a few questions regarding the coaching platform.");

  return (
    <section id="faq" className="py-20 md:py-28 bg-transparent border-t border-[#D9E8CA]/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECF4E2] border border-[#C1DAB0] text-[#638249] text-xs font-black uppercase tracking-wider shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#7B9D60]" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#28371B] font-heading tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-[#5A7446] font-medium">
            Everything you need to know about digitizing your coaching institute with TutoLink.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {customFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#7B9D60] shadow-sm' : 'border-[#D9E8CA] hover:border-[#7B9D60]/50'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-[#28371B] font-heading pr-2">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform flex-shrink-0 ${
                    isOpen ? 'bg-[#7B9D60] text-white rotate-180' : 'bg-[#FAFCF9] text-[#5A7446] border border-[#D9E8CA]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5A7446] leading-relaxed border-t border-[#D9E8CA]/40 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-[#D9E8CA] shadow-sm text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center mx-auto">
            <MessageCircle className="w-6 h-6" />
          </div>

          <h3 className="text-lg sm:text-xl font-black text-[#28371B] font-heading">
            Still Have Questions About Your Specific Coaching Setup?
          </h3>

          <p className="text-xs sm:text-sm text-[#5A7446] max-w-lg mx-auto font-medium">
            Speak directly with our engineering and product team. We will walk you through a live setup configured for your exact batch size and examination focus.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm transition shadow-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-slate-950" />
              <span>Chat on WhatsApp (+91 70524 22066)</span>
            </a>

            <button
              onClick={onOpenDemoModal}
              className="px-6 py-3 rounded-xl bg-[#28371B] hover:bg-[#3d512a] text-white font-extrabold text-xs sm:text-sm transition shadow-sm flex items-center gap-2"
            >
              <span>Book Guided Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
