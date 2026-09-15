import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Building,
  Phone,
  MapPin,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { heroData, categories } from '../data/landingData';

export default function Hero({ onOpenDemoModal, onSubmitLead }) {
  const [formData, setFormData] = useState({
    instituteName: '',
    ownerName: '',
    mobile: '',
    city: '',
    studentCount: '100 - 300'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.mobile || !formData.instituteName) {
      alert("Please enter Institute Name and Mobile Number!");
      return;
    }
    onSubmitLead(formData);
  };

  return (
    <section className="relative pt-6 pb-14 sm:pb-20 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-gradient opacity-70 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Headline Block */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF5E4] border border-[#C6E0B5] text-[#3F572E] text-xs font-bold mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#7CA45E]" />
            <span>All-In-One Coaching Operating System</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#14281B] tracking-tight font-heading leading-[1.15]">
            Digitize Your Coaching Institute In <span className="text-[#7CA45E] underline decoration-[#DDF269] decoration-wavy decoration-2">Under 10 Minutes</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-[#4E6B56] font-medium max-w-2xl mx-auto leading-relaxed">
            Eliminate paper registers &amp; fragmented apps. TutoLink provides your own White-Labeled App, 50,000+ Question CBT Test Engine, Live Classes, and Automated Fees.
          </p>

          {/* Exam Tag Cloud */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-1.5 sm:gap-2">
            <span className="text-xs font-bold text-[#658A4A] mr-1 uppercase tracking-wider">Exams:</span>
            {categories.slice(0, 6).map((cat, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white text-[#14281B] border border-[#D9E6D1] shadow-2xs"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Split Grid: Form & Visual Preview */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left: Quick Demo Lead Form */}
          <div className="lg:col-span-5 bg-white p-5 sm:p-7 rounded-3xl border border-[#D9E6D1] shadow-xl relative flex flex-col justify-between">
            <div className="absolute top-4 right-4">
              <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#3F572E] bg-[#EBF5E4] border border-[#C6E0B5] rounded-full">
                ⚡ Free Live Demo
              </span>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#14281B] font-heading">
                Book 15-Min Live Demo
              </h3>
              <p className="text-xs text-[#5F7A67] mt-0.5 font-medium mb-4">
                Get a personalized walkthrough for your coaching institute.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-[#14281B] mb-1">
                    Coaching Institute Name *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-[#7A937A] absolute left-3 top-3" />
                    <input
                      type="text"
                      name="instituteName"
                      required
                      placeholder="e.g. Apex Science Academy"
                      value={formData.instituteName}
                      onChange={handleChange}
                      className="w-full bg-[#FAFCF9] border border-[#D9E6D1] rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-[#1D3728] focus:outline-none focus:border-[#7CA45E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-xs font-bold text-[#14281B] mb-1">
                      Director Name
                    </label>
                    <input
                      type="text"
                      name="ownerName"
                      placeholder="Your Name"
                      value={formData.ownerName}
                      onChange={handleChange}
                      className="w-full bg-[#FAFCF9] border border-[#D9E6D1] rounded-xl px-3 py-2 text-xs sm:text-sm text-[#1D3728] focus:outline-none focus:border-[#7CA45E]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#14281B] mb-1">
                      City
                    </label>
                    <div className="relative">
                      <MapPin className="w-3.5 h-3.5 text-[#7A937A] absolute left-2.5 top-2.5" />
                      <input
                        type="text"
                        name="city"
                        placeholder="Lucknow, Kota, Patna..."
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full bg-[#FAFCF9] border border-[#D9E6D1] rounded-xl pl-8 pr-2 py-2 text-xs sm:text-sm text-[#1D3728] focus:outline-none focus:border-[#7CA45E]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#14281B] mb-1">
                    WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#7A937A] absolute left-3 top-3" />
                    <input
                      type="tel"
                      name="mobile"
                      required
                      placeholder="+91 70524 22066"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full bg-[#FAFCF9] border border-[#D9E6D1] rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-[#1D3728] focus:outline-none focus:border-[#7CA45E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#14281B] mb-1">
                    Approx Students
                  </label>
                  <select
                    name="studentCount"
                    value={formData.studentCount}
                    onChange={handleChange}
                    className="w-full bg-[#FAFCF9] border border-[#D9E6D1] rounded-xl px-3 py-2 text-xs sm:text-sm text-[#1D3728] focus:outline-none focus:border-[#7CA45E]"
                  >
                    <option value="Under 50">Under 50 Students</option>
                    <option value="50 - 200">50 - 200 Students</option>
                    <option value="200 - 500">200 - 500 Students</option>
                    <option value="500+">500+ Students</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full shimmer-btn text-white font-extrabold py-3 px-5 rounded-xl shadow-md flex items-center justify-center gap-2 hover:opacity-95 transition text-xs sm:text-sm mt-1"
                >
                  <span>Request Instant Demo Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            <div className="pt-3 border-t border-[#E8F0E3] mt-3 flex items-center justify-between text-[11px] text-[#5F7A67] font-semibold">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7CA45E]" />
                100% Private
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7493DB]" />
                Zero Setup Cost
              </span>
            </div>
          </div>

          {/* Right: Dashboard Preview & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-white p-2.5 rounded-3xl border border-[#D9E6D1] shadow-xl overflow-hidden">
              <div className="bg-[#FAFCF9] rounded-2xl overflow-hidden border border-[#D9E6D1]">
                
                {/* Browser top bar */}
                <div className="bg-white px-3 py-2 border-b border-[#D9E6D1] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[10px] text-[#7CA45E] font-bold">TutoLink Live Workspace</span>
                </div>

                {/* Dashboard Image */}
                <div className="relative">
                  <img
                    src="/assets/preview-dashboard.jpg"
                    alt="TutoLink Institute Dashboard Preview"
                    className="w-full h-auto object-cover rounded-b-xl"
                  />
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl border border-[#C6E0B5] flex items-center gap-2 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#7CA45E]" />
                    <div>
                      <p className="text-[10px] font-bold text-[#14281B]">Auto Attendance</p>
                      <p className="text-[9px] text-[#658A4A] font-semibold">94.6% Present Today</p>
                    </div>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl border border-[#C5D9F8] flex items-center gap-2 shadow-sm">
                    <TrendingUp className="w-4 h-4 text-[#7493DB]" />
                    <div>
                      <p className="text-[10px] font-bold text-[#14281B]">95% On-Time Fees</p>
                      <p className="text-[9px] text-[#4A69B8] font-semibold">Automated WhatsApp</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* 4 Core Stat Cards */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {heroData.stats.map((st, i) => (
                <div key={i} className="bg-white p-3 rounded-2xl text-center border border-[#D9E6D1] shadow-2xs">
                  <p className="text-xl sm:text-2xl font-black text-[#14281B] font-heading text-gradient-sage">
                    {st.value}
                  </p>
                  <p className="text-[10px] text-[#5F7A67] font-bold mt-0.5">
                    {st.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
