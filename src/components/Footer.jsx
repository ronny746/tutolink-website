import React from 'react';
import { Sparkles, Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenDemoModal }) {
  const whatsappUrl = "https://wa.me/917052422066?text=" + encodeURIComponent("Hi TutoLink Team, I want to book a free live demo for my coaching institute!");

  return (
    <footer className="bg-white border-t border-[#D9E6D1] text-[#5F7A67] text-xs pt-12 sm:pt-16 pb-28 sm:pb-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-[#D9E6D1]">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#7CA45E] to-[#7493DB] p-0.5">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#7CA45E]" />
                </div>
              </div>
              <span className="text-xl font-black text-[#14281B] tracking-tight font-heading">
                Tuto<span className="text-gradient-primary">Link</span>
              </span>
            </div>

            <p className="text-[#5F7A67] leading-relaxed max-w-sm font-medium text-xs sm:text-xs">
              TutoLink is India's premier multi-tenant coaching institute OS. Empowers educators to stream live classes, conduct CBT tests, generate DPPs, manage parent transparency, and acquire new student leads.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="tel:+917052422066" className="p-2.5 rounded-xl bg-[#EBF5E4] border border-[#C6E0B5] text-[#3F572E] hover:bg-[#7CA45E] hover:text-white transition">
                <Phone className="w-4 h-4" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-[#EAF5E1] border border-[#C6E0B5] text-[#388E3C] hover:bg-[#388E3C] hover:text-white transition">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="mailto:geniusattechie@gmail.com" className="p-2.5 rounded-xl bg-[#E4EEFB] border border-[#C5D9F8] text-[#3B5298] hover:bg-[#7493DB] hover:text-white transition">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-[#14281B] mb-3 sm:mb-4 font-heading">Product Features</h4>
            <ul className="space-y-2.5 font-semibold">
              <li><a href="#features" className="hover:text-[#7CA45E] transition">Institute Branding</a></li>
              <li><a href="#features" className="hover:text-[#7CA45E] transition">Interactive Live Classes</a></li>
              <li><a href="#features" className="hover:text-[#7CA45E] transition">Online Question Bank</a></li>
              <li><a href="#features" className="hover:text-[#7CA45E] transition">DPP &amp; Exam Engine</a></li>
              <li><a href="#features" className="hover:text-[#7CA45E] transition">Parent Portal &amp; Fees</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-bold text-[#14281B] mb-3 sm:mb-4 font-heading">Exam Target Solutions</h4>
            <ul className="space-y-2.5 font-semibold">
              <li><a href="#hero" className="hover:text-[#7CA45E] transition">JEE Main &amp; Advanced</a></li>
              <li><a href="#hero" className="hover:text-[#7CA45E] transition">NEET Medical Prep</a></li>
              <li><a href="#hero" className="hover:text-[#7CA45E] transition">CBSE Class 8 - 12</a></li>
              <li><a href="#hero" className="hover:text-[#7CA45E] transition">Foundation Courses</a></li>
              <li><a href="#hero" className="hover:text-[#7CA45E] transition">State Board Exams</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-[#14281B] mb-3 sm:mb-4 font-heading">Onboarding Support</h4>
            <ul className="space-y-3 font-medium">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#7CA45E] mt-0.5 flex-shrink-0" />
                <span>EdTech Hub, Gomti Nagar, Lucknow, Uttar Pradesh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#7CA45E] flex-shrink-0" />
                <a href="tel:+917052422066" className="hover:text-[#14281B] font-bold">+91 70524 22066</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#7493DB] flex-shrink-0" />
                <a href="mailto:geniusattechie@gmail.com" className="hover:text-[#14281B] font-bold">geniusattechie@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#5F7A67] font-semibold text-center sm:text-left">
          <p>© {new Date().getFullYear()} TutoLink Technologies Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-[#14281B]">Privacy Policy</a>
            <a href="#" className="hover:text-[#14281B]">Terms of Service</a>
            <a href="#" className="hover:text-[#14281B]">Security Isolation</a>
          </div>
        </div>

      </div>

      {/* Floating Sticky Quick Action Bar */}
      <div className="fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-40 bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-2 rounded-full border border-[#D9E6D1] shadow-2xl flex items-center gap-2 sm:gap-3 animate-fadeIn max-w-[95vw] sm:max-w-none">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EAF5E1] text-[#388E3C] border border-[#C6E0B5] hover:bg-[#388E3C] hover:text-white transition text-[11px] sm:text-xs font-bold whitespace-nowrap"
        >
          <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
          <span className="hidden xs:inline">WhatsApp Support</span>
          <span className="xs:hidden">WhatsApp</span>
        </a>

        <button
          onClick={onOpenDemoModal}
          className="shimmer-btn text-white font-bold px-4 sm:px-5 py-1.5 rounded-full text-[11px] sm:text-xs flex items-center gap-1 shadow-md whitespace-nowrap"
        >
          <span>Book Free Live Demo</span>
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
        </button>
      </div>

    </footer>
  );
}
