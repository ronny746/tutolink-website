import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Faq from '../components/Faq';

export default function ContactPage({ onOpenDemoModal, onSubmitLead }) {
  const [formData, setFormData] = useState({
    instituteName: '',
    ownerName: '',
    mobile: '',
    city: '',
    studentCount: '100 - 300',
    targetExam: 'JEE / NEET'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.mobile || !formData.instituteName) return;
    if (onSubmitLead) {
      onSubmitLead(formData);
    }
    setSubmitted(true);
  };

  const whatsappUrl = "https://wa.me/917052422066?text=" + encodeURIComponent("Hi TutoLink Team, I want to discuss digitizing my coaching institute.");

  return (
    <div className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECF4E2] border border-[#C1DAB0] text-xs font-black uppercase text-[#638249] tracking-wider shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>We're Here to Help Your Coaching Grow</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-[#28371B] font-heading tracking-tight leading-tight">
          Talk to Our Core <br className="hidden sm:inline" />
          <span className="relative inline-block text-[#28371B]">
            Engineering &amp; Product Team.
            <svg className="absolute -bottom-2 left-0 w-full h-2.5 text-[#7B9D60]/30 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <p className="text-sm sm:text-base text-[#5A7446] font-medium leading-relaxed">
          Whether you want a tailored live walkthrough, need help migrating student data, or have specific feature questions, our team is ready.
        </p>
      </div>

      {/* Main Grid: Direct Contact Channels & Guided Booking Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
        
        {/* Left: Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#D9E8CA] shadow-sm space-y-6">
            <h2 className="text-xl font-black text-[#28371B] font-heading">
              Direct Contact Channels
            </h2>

            <div className="space-y-4 text-xs sm:text-sm">
              
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#ECF4E2] border border-[#C1DAB0] hover:border-[#25D366] transition group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-black text-[#28371B]">Instant WhatsApp Advisor</p>
                  <p className="text-[#638249] font-bold">+91 70524 22066 (Fastest Reply)</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+917052422066"
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAFCF9] border border-[#D9E8CA] hover:border-[#7B9D60] transition group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-black text-[#28371B]">Phone Consultation</p>
                  <p className="text-[#5A7446] font-bold">+91 70524 22066 (Mon–Sat, 9AM–8PM)</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:geniusattechie@gmail.com"
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#FAFCF9] border border-[#D9E8CA] hover:border-[#7B9D60] transition group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-black text-[#28371B]">Email Support</p>
                  <p className="text-[#5A7446] font-medium">geniusattechie@gmail.com</p>
                </div>
              </a>

              {/* HQ Address */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FAFCF9] border border-[#D9E8CA]">
                <div className="w-10 h-10 rounded-xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-black text-[#28371B]">Lucknow EdTech HQ</p>
                  <p className="text-[#5A7446] text-xs leading-relaxed mt-0.5">
                    Gomti Nagar, Lucknow, Uttar Pradesh — 226010, India
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right: Lead & Onboarding Form */}
        <div className="lg:col-span-7">
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#D9E8CA] shadow-sm space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#28371B] font-heading">
                Book a 15-Minute Guided Live Walkthrough
              </h2>
              <p className="text-xs text-[#5A7446] mt-1 font-medium">
                Our EdTech specialist will configure a demo tailored to your exact batch size and exam focus.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#ECF4E2] rounded-2xl border border-[#C1DAB0] text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-[#7B9D60] text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-[#28371B]">
                  Thank You, {formData.ownerName || formData.instituteName}!
                </h3>
                <p className="text-xs text-[#5A7446] font-medium">
                  We have received your demo request. Our senior advisor will call or WhatsApp you at <strong>{formData.mobile}</strong> within 15 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#28371B] mb-1">Coaching Institute Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Verma Science Classes"
                      value={formData.instituteName}
                      onChange={(e) => setFormData({ ...formData, instituteName: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAFCF9] border border-[#D9E8CA] rounded-xl focus:outline-none focus:border-[#7B9D60]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#28371B] mb-1">Director / Contact Person Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAFCF9] border border-[#D9E8CA] rounded-xl focus:outline-none focus:border-[#7B9D60]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#28371B] mb-1">WhatsApp Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAFCF9] border border-[#D9E8CA] rounded-xl focus:outline-none focus:border-[#7B9D60]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#28371B] mb-1">City / Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Kota, Patna, Lucknow"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAFCF9] border border-[#D9E8CA] rounded-xl focus:outline-none focus:border-[#7B9D60]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#28371B] mb-1">Student Capacity</label>
                    <select
                      value={formData.studentCount}
                      onChange={(e) => setFormData({ ...formData, studentCount: e.target.value })}
                      className="w-full px-3 py-3 bg-[#FAFCF9] border border-[#D9E8CA] rounded-xl focus:outline-none focus:border-[#7B9D60]"
                    >
                      <option value="Under 50">Under 50 Students</option>
                      <option value="50 - 200">50 - 200 Students</option>
                      <option value="200 - 500">200 - 500 Students</option>
                      <option value="500 - 1500">500 - 1,500 Students</option>
                      <option value="1500+">1,500+ Students</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-[#28371B] mb-1">Primary Exam Focus</label>
                    <select
                      value={formData.targetExam}
                      onChange={(e) => setFormData({ ...formData, targetExam: e.target.value })}
                      className="w-full px-3 py-3 bg-[#FAFCF9] border border-[#D9E8CA] rounded-xl focus:outline-none focus:border-[#7B9D60]"
                    >
                      <option value="JEE / NEET">JEE / NEET Entrance</option>
                      <option value="CBSE / ICSE Boards">CBSE / ICSE (Class 8-12)</option>
                      <option value="Foundation & Olympiad">Foundation & Olympiad (6-10)</option>
                      <option value="Commerce & CA">Commerce & CA Foundation</option>
                      <option value="CUET / Govt Exams">CUET / Govt & Defense</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#7B9D60] hover:bg-[#638249] text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Guided Walkthrough &amp; Free 14-Day Setup</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-[#5A7446] text-center font-medium">
                  🔒 Zero spam. We only contact you to demonstrate the platform and answer your setup questions.
                </p>
              </form>
            )}

          </div>
        </div>

      </div>

      {/* Embedded FAQ Accordion */}
      <Faq onOpenDemoModal={onOpenDemoModal} />

    </div>
  );
}
