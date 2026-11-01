import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import tutolinkLogo from '../assets/tutolink-full-logo.webp';

export default function Footer({ onNavigate }) {
  const whatsappUrl = "https://wa.me/917052422066?text=" + encodeURIComponent("Hi TutoLink Team, I want to book a free live demo for my coaching institute!");

  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'demo', label: 'Live Demo' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'Why Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-white border-t border-[#D9E8CA]/70 text-[#5A7446] text-xs py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Main Single Row / Flex Container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & One-Liner */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <button onClick={() => handleNav('home')} className="focus:outline-none cursor-pointer">
              <img 
                src={tutolinkLogo} 
                alt="TutoLink" 
                width="140"
                height="36"
                className="h-7 w-auto object-contain"
              />
            </button>
            <span className="hidden sm:inline text-[#D9E8CA]">|</span>
            <span className="text-xs text-[#5A7446] font-medium">
              The smart platform for coaching institutes &amp; tutors.
            </span>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-5 text-xs font-bold text-[#28371B]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="hover:text-[#7B9D60] transition cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Direct Quick Contact Icons */}
          <div className="flex items-center gap-2.5">
            <a 
              href="tel:+917052422066" 
              className="p-2 rounded-xl bg-[#ECF4E2] border border-[#C1DAB0] text-[#638249] hover:bg-[#7B9D60] hover:text-white transition cursor-pointer" 
              title="Call Us (+91 70524 22066)"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-xl bg-[#ECF4E2] border border-[#C1DAB0] text-[#25D366] hover:bg-[#25D366] hover:text-white transition cursor-pointer" 
              title="WhatsApp Us"
            >
              <MessageCircle className="w-3.5 h-3.5" />
            </a>
            <a 
              href="mailto:geniusattechie@gmail.com" 
              className="p-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white transition cursor-pointer" 
              title="Email Us"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Minimalist Bar */}
        <div className="pt-5 border-t border-[#D9E8CA]/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#5A7446] font-medium text-center sm:text-left">
          <p>© {new Date().getFullYear()} TutoLink. All rights reserved.</p>
          <div className="flex items-center gap-3 text-[11px]">
            <span>100% White-Labeled</span>
            <span>•</span>
            <span>0% Commission on Fees</span>
            <span>•</span>
            <span>Direct WhatsApp Support</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
