import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { faqs } from '../data/landingData';

export default function Faq({ onOpenDemoModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="py-14 bg-[#F4F7F2]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold text-[#7CA45E] uppercase tracking-wider mb-2">
            Frequently Asked Questions
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14281B] tracking-tight font-heading">
            Clear Answers To Your Questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`bg-white rounded-xl border transition-all overflow-hidden ${
                  isOpen ? 'border-[#7CA45E] shadow-2xs' : 'border-[#D9E6D1]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 flex items-center justify-between gap-3 focus:outline-none"
                >
                  <span className="text-xs sm:text-sm font-bold text-[#14281B] font-heading">
                    {faq.q}
                  </span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform flex-shrink-0 ${
                    isOpen ? 'bg-[#7CA45E] text-white rotate-180' : 'bg-[#EBF5E4] text-[#4F6E39]'
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-0 text-xs text-[#5F7A67] font-medium leading-relaxed bg-[#FAFCF9] border-t border-[#E8F0E3]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Callout */}
        <div className="mt-8 text-center bg-white p-4 rounded-xl border border-[#D9E6D1] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-bold text-[#14281B]">
            Have additional questions for your institute setup?
          </p>
          <button
            onClick={onOpenDemoModal}
            className="shimmer-btn text-white font-bold px-4 py-2 rounded-xl text-xs flex-shrink-0 inline-flex items-center gap-1.5"
          >
            <span>Talk To EdTech Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
