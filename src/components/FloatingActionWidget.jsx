import React from 'react';
import { MessageCircle, Phone, Calendar, ArrowRight } from 'lucide-react';

export default function FloatingActionWidget({ onOpenDemoModal }) {
  const whatsappUrl = "https://wa.me/917052422066?text=" + encodeURIComponent("Hi TutoLink Team, I am browsing your website and want to book a demo for my coaching institute.");

  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
      
      {/* Quick Demo Booking Pill */}
      <button
        onClick={onOpenDemoModal}
        className="hidden sm:flex items-center gap-2 px-4 py-3 rounded-full bg-[#0E1F15] text-white text-xs font-black shadow-[0_8px_24px_rgba(14,31,21,0.3)] hover:bg-[#1A3825] transition-all hover:scale-105 active:scale-95 border border-[#246F46]/40"
      >
        <Calendar className="w-4 h-4 text-[#34D399]" />
        <span>Book Live Demo</span>
      </button>

      {/* Direct WhatsApp Contact Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white text-xs font-black shadow-[0_8px_24px_rgba(37,211,102,0.35)] hover:bg-[#1EBE5D] transition-all hover:scale-105 active:scale-95 group"
        title="Chat with EdTech Advisor on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
        <span className="hidden md:inline font-bold">WhatsApp Advisor</span>
        <span className="md:hidden font-bold">WhatsApp</span>
      </a>

    </div>
  );
}

