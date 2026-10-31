import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Play } from 'lucide-react';
import tutolinkLogo from '../assets/tutolink-full-logo.webp';

export default function Footer({ onNavigate, onOpenDemoModal }) {
  const whatsappUrl = "https://wa.me/917052422066?text=" + encodeURIComponent("Hi TutoLink Team, I want to book a free live demo for my coaching institute!");

  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#D9E8CA]/60 text-[#5A7446] text-xs pt-12 sm:pt-16 pb-28 sm:pb-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-[#D9E8CA]/60">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <button onClick={() => handleNav('home')} className="inline-block text-left">
              <img 
                src={tutolinkLogo} 
                alt="TutoLink - Connect to grow better" 
                width="192"
                height="48"
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </button>

            <p className="text-[#5A7446] leading-relaxed max-w-sm font-medium text-xs">
              TutoLink is India's next-gen coaching institute OS. Empowers educators to stream in-house live classes, conduct NTA CBT tests, generate DPPs, automate WhatsApp fees, and scale with 0% commission.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="tel:+917052422066" className="p-2.5 rounded-xl bg-[#ECF4E2] border border-[#C1DAB0] text-[#638249] hover:bg-[#7B9D60] hover:text-white transition" title="Call Us">
                <Phone className="w-4 h-4" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-[#ECF4E2] border border-[#C1DAB0] text-[#25D366] hover:bg-[#25D366] hover:text-white transition" title="WhatsApp Us">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="mailto:geniusattechie@gmail.com" className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white transition" title="Email Us">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Pages */}
          <div>
            <h4 className="text-sm font-bold text-[#28371B] mb-3 sm:mb-4 font-heading">Platform Pages</h4>
            <ul className="space-y-2.5 font-medium">
              <li><button onClick={() => handleNav('home')} className="hover:text-[#7B9D60] transition">Home</button></li>
              <li><button onClick={() => handleNav('features')} className="hover:text-[#7B9D60] transition">Features &amp; Engines</button></li>
              <li><button onClick={() => handleNav('demo')} className="hover:text-[#7B9D60] transition flex items-center gap-1.5"><Play className="w-3 h-3 text-[#7B9D60] fill-[#7B9D60]" /> Live Demo Sandbox</button></li>
              <li><button onClick={() => handleNav('about')} className="hover:text-[#7B9D60] transition">Why TutoLink (Our Story)</button></li>
              <li><button onClick={() => handleNav('pricing')} className="hover:text-[#7B9D60] transition">Transparent Pricing</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-[#7B9D60] transition">Contact &amp; Support</button></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-bold text-[#28371B] mb-3 sm:mb-4 font-heading">Exam Specializations</h4>
            <ul className="space-y-2.5 font-medium">
              <li><button onClick={() => handleNav('features')} className="hover:text-[#7B9D60] transition">JEE Main &amp; Advanced</button></li>
              <li><button onClick={() => handleNav('features')} className="hover:text-[#7B9D60] transition">NEET Medical Prep</button></li>
              <li><button onClick={() => handleNav('features')} className="hover:text-[#7B9D60] transition">CBSE Class 8 - 12</button></li>
              <li><button onClick={() => handleNav('features')} className="hover:text-[#7B9D60] transition">Foundation Courses</button></li>
              <li><button onClick={() => handleNav('features')} className="hover:text-[#7B9D60] transition">Commerce &amp; CA Foundation</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-[#28371B] mb-3 sm:mb-4 font-heading">Onboarding Support</h4>
            <ul className="space-y-3 font-medium">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#7B9D60] mt-0.5 flex-shrink-0" />
                <span>EdTech Hub, Gomti Nagar, Lucknow, Uttar Pradesh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#7B9D60] flex-shrink-0" />
                <a href="tel:+917052422066" className="hover:underline font-bold text-[#28371B]">+91 70524 22066</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:underline font-bold text-[#25D366]">Chat on WhatsApp</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#5A7446] font-medium text-[11px]">
          <p>© {new Date().getFullYear()} TutoLink Technologies Ltd. All Rights Reserved. Built for Indian Coaching Institutes.</p>
          <div className="flex items-center gap-4">
            <span>0% Commission Guarantee</span>
            <span>•</span>
            <span>100% Data Isolation</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
