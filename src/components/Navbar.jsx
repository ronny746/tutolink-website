import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import tutolinkLogo from '../assets/tutolink-full-logo.webp';

export default function Navbar({ activePage = 'home', onNavigate, onOpenDemoModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', name: "Home" },
    { id: 'features', name: "Features" },
    { id: 'demo', name: "Live Demo", isLive: true },
    { id: 'pricing', name: "Pricing" },
    { id: 'about', name: "Why Us" },
    { id: 'contact', name: "Contact" },
  ];

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = "https://wa.me/917052422066?text=" + encodeURIComponent("Hi TutoLink Team, I want to see a live demo for my coaching institute.");

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
      scrolled 
        ? 'border-[#D9E8CA] bg-[#fdfff9]/95 backdrop-blur-md shadow-xs py-2.5' 
        : 'border-[#D9E8CA]/70 bg-[#fdfff9]/90 backdrop-blur-md py-3'
    }`}>
      <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo - Crisp & Single Line */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center flex-shrink-0 focus:outline-none cursor-pointer"
        >
          <img 
            src={tutolinkLogo} 
            alt="TutoLink" 
            className="h-7 sm:h-8 w-auto object-contain"
          />
        </button>

        {/* Minimalist, Single-Line Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-bold text-slate-700">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors flex items-center gap-1.5 focus:outline-none cursor-pointer ${
                  isActive
                    ? 'text-[#7B9D60] font-black'
                    : 'hover:text-[#7B9D60] text-slate-600 font-bold'
                }`}
              >
                {link.isLive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                )}
                <span>{link.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Clean, Non-Congested Right Action Area (Only 1 primary button + 1 quick chat icon) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl text-[#25D366] hover:bg-[#ECF4E2] transition border border-[#D9E8CA] bg-white cursor-pointer"
            title="Chat on WhatsApp (+91 70524 22066)"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenDemoModal}
            className="rounded-xl bg-[#7B9D60] px-4 py-2 text-xs font-black text-white shadow-xs hover:bg-[#638249] hover:shadow-md transition flex items-center gap-1.5 cursor-pointer"
          >
            <span>Book a Free Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenDemoModal}
            className="rounded-lg bg-[#7B9D60] px-3 py-1.5 text-[11px] font-black text-white"
          >
            Book Demo
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-[#28371B] hover:bg-[#ECF4E2] focus:outline-none border border-[#D9E8CA]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#D9E8CA] px-5 pt-3 pb-6 mt-2 space-y-4 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-sm font-bold py-2.5 px-3.5 rounded-xl transition flex items-center justify-between ${
                    isActive
                      ? 'bg-[#ECF4E2] text-[#638249] font-black'
                      : 'text-slate-700 hover:bg-[#fdfff9]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {link.isLive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
                    <span>{link.name}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#D9E8CA] flex flex-col gap-2.5">
            <a
              href="tel:+917052422066"
              className="w-full py-2.5 px-4 rounded-xl border border-[#D9E8CA] text-xs font-bold text-slate-700 flex items-center justify-center gap-2 bg-[#fdfff9]"
            >
              <Phone className="w-4 h-4 text-[#7B9D60]" />
              <span>Call: +91 70524 22066</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDemoModal(); }}
              className="w-full py-3 rounded-xl bg-[#7B9D60] hover:bg-[#638249] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition"
            >
              <span>Book a Free Live Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
