import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, Menu, X, ArrowRight } from 'lucide-react';
import tutolinkLogo from '../assets/tutolink-full-logo.jpg';

export default function Navbar({ onOpenDemoModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Workspaces", href: "#for-everyone" },
    { name: "6 Core Pillars", href: "#features" },
    { name: "Prepare for CBT Exams", href: "#cbt-exams" },
    { name: "Course Store", href: "#growth" },
    { name: "White-Label App", href: "#branding" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-[#D2E2C4] py-2.5 shadow-[0_4px_20px_rgba(123,157,96,0.08)]' 
        : 'bg-white/90 backdrop-blur-md border-b border-[#D2E2C4]/80 py-3 shadow-xs'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center group flex-shrink-0">
            <img 
              src={tutolinkLogo} 
              alt="TutoLink - Connect to grow better" 
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 bg-[#FAFDF8] border border-[#E2EBDC] px-6 py-2 rounded-full shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-bold text-[#1F2922] hover:text-[#7B9D60] transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call & Demo CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDemoModal}
              className="text-xs xl:text-sm font-bold text-[#1F2922] hover:text-[#7B9D60] px-3.5 py-2 rounded-xl transition whitespace-nowrap"
            >
              Login
            </button>

            <button
              onClick={onOpenDemoModal}
              className="shimmer-btn text-white font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-full flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all shadow-md whitespace-nowrap"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onOpenDemoModal}
              className="shimmer-btn text-white font-extrabold text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1 shadow-sm"
            >
              <span>Demo</span>
              <ArrowRight className="w-3 h-3" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#1F2922] hover:bg-[#EBF4E3] focus:outline-none border border-[#D2E2C4]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#D2E2C4] px-4 pt-3 pb-6 mt-2 space-y-4 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-[#1F2922] hover:text-[#7B9D60] py-2 border-b border-[#D2E2C4]/60 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#576659]" />
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="tel:+917052422066"
              className="flex items-center justify-center gap-2 text-xs font-bold text-[#7B9D60] bg-[#EBF4E3] border border-[#C4DAAF] py-2.5 rounded-xl"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us: +91 70524 22066</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full shimmer-btn text-white font-bold py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 text-xs"
            >
              <span>Book Free Live Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
