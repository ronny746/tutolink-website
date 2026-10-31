import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, MessageCircle, Play, Sparkles } from 'lucide-react';
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
    { id: 'features', name: "Platform Features" },
    { id: 'demo', name: "Interactive Sandbox", isLive: true },
    { id: 'about', name: "Why TutoLink" },
    { id: 'pricing', name: "Pricing" },
    { id: 'contact', name: "Contact" },
  ];

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = "https://wa.me/917052422066?text=" + encodeURIComponent("Hi TutoLink Team, I want to book a live demo for my coaching institute.");

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
      scrolled 
        ? 'border-[#D9E8CA] bg-[#fdfff9]/95 backdrop-blur-md shadow-xs py-2.5' 
        : 'border-[#D9E8CA]/80 bg-[#fdfff9]/90 backdrop-blur-md py-3.5'
    }`}>
      <div className="mx-auto flex h-[50px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo & Tag from new-tuto */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center group flex-shrink-0 focus:outline-none"
          >
            <img 
              src={tutolinkLogo} 
              alt="TutoLink" 
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
            />
          </button>
          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full bg-[#ECF4E2] text-[#638249] text-[10px] font-extrabold uppercase tracking-wider border border-[#C1DAB0]">
            Coaching Platform
          </span>
        </div>

        {/* Minimalist Nav Links from new-tuto */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-bold text-slate-700">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors flex items-center gap-1.5 focus:outline-none ${
                  isActive
                    ? 'text-[#7B9D60] font-black'
                    : 'hover:text-[#7B9D60] text-slate-700 font-bold'
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

        {/* Clean Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="tel:+917052422066"
            className="p-2 rounded-xl text-slate-600 hover:text-[#7B9D60] hover:bg-[#ECF4E2]/60 transition border border-[#D9E8CA] bg-white"
            title="Call +91 70524 22066"
          >
            <Phone className="w-4 h-4 text-[#7B9D60]" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl text-[#25D366] hover:bg-[#EAF5E1] transition border border-[#D9E8CA] bg-white"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <button
            onClick={() => handleNavClick('demo')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border ${
              activePage === 'demo'
                ? 'border-[#7B9D60] bg-[#ECF4E2] text-[#638249]'
                : 'border-[#C1DAB0] bg-white text-[#28371B] hover:bg-[#ECF4E2]/50'
            }`}
          >
            <Play className="w-3.5 h-3.5 text-[#7B9D60] fill-[#7B9D60]" />
            <span>Test Drive</span>
          </button>

          <button
            onClick={onOpenDemoModal}
            className="rounded-xl bg-[#7B9D60] px-4 sm:px-5 py-2.5 text-xs font-extrabold text-white shadow-md hover:bg-[#638249] hover:shadow-lg transition flex items-center gap-1.5"
          >
            <span>Book a Free Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => handleNavClick('demo')}
            className="px-3 py-1.5 rounded-xl bg-[#ECF4E2] text-[#638249] border border-[#C1DAB0] text-xs font-extrabold flex items-center gap-1"
          >
            <Play className="w-3 h-3 fill-[#638249]" />
            <span>Demo</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#28371B] hover:bg-[#ECF4E2] focus:outline-none border border-[#D9E8CA]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#D9E8CA] px-5 pt-3 pb-6 mt-2 space-y-4 shadow-xl animate-fadeIn">
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
