import React from 'react';
import { Star, Quote, CheckCircle, Building2, Sparkles } from 'lucide-react';
import { testimonials } from '../data/landingData';

export default function Testimonials({ onOpenDemoModal }) {
  return (
    <section id="testimonials" className="py-14 bg-[#F4F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-bold text-[#7CA45E] uppercase tracking-wider mb-2">
            Trusted By 500+ Institutes
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#14281B] tracking-tight font-heading">
            What Top Educators Say About TutoLink
          </h2>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-2xl border border-[#D9E6D1] shadow-2xs flex flex-col justify-between relative group hover:border-[#7CA45E] transition"
            >
              <Quote className="w-8 h-8 text-[#7CA45E]/15 absolute top-5 right-5" />

              <div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-[#1D3728] text-xs leading-relaxed italic font-medium mb-4">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#D9E6D1]">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#C6E0B5]"
                />
                <div>
                  <h4 className="text-xs font-bold text-[#14281B] font-heading flex items-center gap-1">
                    {item.name}
                    <CheckCircle className="w-3 h-3 text-[#7CA45E]" />
                  </h4>
                  <p className="text-[10px] text-[#4A69B8] font-semibold">
                    {item.coaching}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
