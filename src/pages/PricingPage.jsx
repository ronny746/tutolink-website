import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  MessageCircle, 
  Phone, 
  HelpCircle, 
  Server, 
  Video, 
  Monitor, 
  IndianRupee, 
  Smartphone, 
  Users, 
  Clock, 
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

export default function PricingPage({ onOpenDemoModal }) {
  // Interactive requirements estimator
  const [studentCount, setStudentCount] = useState(150);
  const [needsLiveStream, setNeedsLiveStream] = useState(false);
  const [needsBrandedApp, setNeedsBrandedApp] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  // Generate dynamic WhatsApp message with selections
  const generateWhatsAppUrl = () => {
    let msg = `Hi TutoLink Team, I want to get a custom pricing quote for my coaching institute:\n`;
    msg += `• Approximate Students: ${studentCount}\n`;
    msg += `• Core Suite (CBT Exams + WhatsApp Fees + Web Portal): Included\n`;
    msg += `• In-House Live Streaming & Cloud Recording: ${needsLiveStream ? 'Yes' : 'Not needed right now'}\n`;
    msg += `• Branded Android App APK: ${needsBrandedApp ? 'Yes' : 'Web portal only'}\n`;
    msg += `Please provide an honest quote and details for the 14-day free trial.`;
    return "https://wa.me/917052422066?text=" + encodeURIComponent(msg);
  };

  const pricingFaqs = [
    {
      q: "How do we get an exact price quote for our coaching institute?",
      a: "Simply click 'Get Quote on WhatsApp' or call us directly at +91 70524 22066. Share your student strength and whether you need live streaming. Our engineering team will calculate your server and database requirements and provide a transparent, written quote within 10 minutes."
    },
    {
      q: "Why don't you show fixed price cards like ₹999 or ₹2,499 per month?",
      a: "Because fixed pricing cards are either overpriced for small institutes or filled with hidden fees later. Some institutes only need offline batch rosters, CBT exams, and WhatsApp fees, which have light server costs. Others need our custom in-house live streaming and recorded lecture storage, which runs on dedicated low-latency media servers and cloud storage. We only charge you for what you actually use."
    },
    {
      q: "Is there any upfront setup or data migration fee?",
      a: "Zero setup fees. We set up your white-labeled portal and assist you in importing your existing student rosters and batches from Excel or previous software at absolutely no cost."
    },
    {
      q: "Can we test the platform before making any financial commitment?",
      a: "Yes! Every institute receives a 14-Day Risk-Free Trial. You can test exams with your teachers and conduct live batches with your students before paying anything."
    },
    {
      q: "Do you take any percentage or commission on student fees?",
      a: "Zero commission. 100% of the tuition fees and course admissions paid by parents go straight to your own UPI QR code or institute bank account."
    },
    {
      q: "What happens if we need support or an issue occurs during a class?",
      a: "Every partner institute receives our 12 Working Hours Resolution Guarantee. You have direct WhatsApp and phone access to our core engineering team."
    }
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* 1. Header: Transparent Pricing Philosophy */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECF4E2] border border-[#C1DAB0] text-xs font-black uppercase text-[#638249] tracking-wider shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transparent &amp; Fair Pricing</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-[#28371B] font-heading tracking-tight leading-tight">
          No Rigid Packages. No Overpaying. <br className="hidden sm:inline" />
          <span className="relative inline-block text-[#28371B]">
            Pay Only for What You Actually Use.
            <svg className="absolute -bottom-2 left-0 w-full h-2.5 text-[#7B9D60]/30 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <p className="text-sm sm:text-base text-[#5A7446] font-medium leading-relaxed">
          Every coaching institute has unique batch sizes and technology requirements. Instead of forcing you into an overpriced rigid tier, we craft an honest, tailored subscription for your center.
        </p>
      </div>

      {/* 2. The 3 Factors That Determine Your Price */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-[#D9E8CA] p-6 sm:p-10 shadow-sm space-y-8">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-[10px] font-black uppercase text-[#638249] tracking-wider">
            Pricing Transparency
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#28371B] font-heading">
            How We Calculate Your Fair Subscription
          </h2>
          <p className="text-xs text-[#5A7446]">
            We believe in complete transparency. Your subscription is calculated purely based on two honest factors:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Factor 1 */}
          <div className="p-6 rounded-2xl bg-[#FAFCF9] border border-[#D9E8CA] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-black text-[#28371B] font-heading">
              1. Your Active Student Strength
            </h3>
            <p className="text-xs text-[#5A7446] leading-relaxed font-medium">
              A 50-student tuition center shouldn't pay the same price as an 800-student competitive coaching academy. Pricing scales gently with your student count, ensuring you can start small and only pay more as your revenue grows.
            </p>
          </div>

          {/* Factor 2 */}
          <div className="p-6 rounded-2xl bg-[#FAFCF9] border border-[#D9E8CA] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center font-bold">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-base font-black text-[#28371B] font-heading">
              2. Live Streaming &amp; Storage Infrastructure
            </h3>
            <p className="text-xs text-[#5A7446] leading-relaxed font-medium">
              We engineered our HD live classes and lecture recording archiving in-house from scratch on dedicated low-latency media servers. If you only need offline batch rosters and CBT exams, you don't pay for video bandwidth. If you need live streaming, we allocate dedicated media server capacity.
            </p>
          </div>

        </div>
      </div>

      {/* 3. Interactive Requirements Estimator & Instant WhatsApp Quote */}
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-white via-[#FAFCF9] to-[#ECF4E2]/30 rounded-3xl border border-[#D9E8CA] p-6 sm:p-10 shadow-sm space-y-8">
        
        <div className="border-b border-[#D9E8CA]/60 pb-4">
          <span className="text-[10px] font-black uppercase text-[#638249] tracking-wider">
            Quick Estimate Configurator
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#28371B] font-heading mt-0.5">
            Select Your Coaching Requirements
          </h2>
          <p className="text-xs text-[#5A7446] font-medium mt-1">
            Toggle your needs below to generate an instant consultation message directly to our engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Controls */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Student Slider */}
            <div className="space-y-3 bg-white p-5 rounded-2xl border border-[#D9E8CA]">
              <div className="flex justify-between items-center">
                <label className="text-xs sm:text-sm font-bold text-[#28371B] flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#7B9D60]" />
                  <span>Total Enrolled Students:</span>
                </label>
                <span className="px-3.5 py-1 bg-[#ECF4E2] border border-[#C1DAB0] rounded-xl text-[#638249] font-black text-sm">
                  {studentCount} Students
                </span>
              </div>

              <input
                type="range"
                min="30"
                max="1000"
                step="10"
                value={studentCount}
                onChange={(e) => setStudentCount(parseInt(e.target.value))}
                className="w-full h-2 bg-[#D9E8CA]/60 rounded-lg appearance-none cursor-pointer accent-[#7B9D60]"
              />

              <div className="flex justify-between text-[11px] text-[#5A7446] font-semibold">
                <span>30 (Solo Tutor)</span>
                <span>250 (Mid-Size)</span>
                <span>1,000+ (Academy)</span>
              </div>
            </div>

            {/* Feature Modules Toggles */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#28371B] block">Select Technology Modules:</span>
              
              {/* Always included Core module */}
              <div className="p-4 rounded-xl bg-white border border-[#D9E8CA] flex items-start gap-3">
                <div className="w-5 h-5 rounded-md bg-[#7B9D60] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#28371B]">Core Academic &amp; Operating Suite</span>
                    <span className="text-[10px] bg-[#ECF4E2] text-[#638249] border border-[#C1DAB0] px-2 py-0.2 rounded-full font-black">ALWAYS INCLUDED</span>
                  </div>
                  <p className="text-[11px] text-[#5A7446] mt-0.5">
                    NTA CBT exam engine, 50,000+ question bank, DPP generator, automated WhatsApp fee due notices, UPI receipts, student &amp; parent web portals.
                  </p>
                </div>
              </div>

              {/* In-House Live Streaming Toggle */}
              <div 
                onClick={() => setNeedsLiveStream(!needsLiveStream)}
                className={`p-4 rounded-xl border cursor-pointer transition flex items-start gap-3 ${
                  needsLiveStream 
                    ? 'bg-white border-[#7B9D60] shadow-sm' 
                    : 'bg-white/70 border-[#D9E8CA] hover:border-[#7B9D60]/50'
                }`}
              >
                <input 
                  type="checkbox" 
                  checked={needsLiveStream} 
                  onChange={() => {}}
                  className="w-4 h-4 rounded text-[#7B9D60] focus:ring-0 mt-1 cursor-pointer accent-[#7B9D60]" 
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#28371B]">In-House HD Live Classes &amp; Cloud Video Library</span>
                    <span className="text-[10px] bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.2 rounded-full font-black">MEDIA SERVER</span>
                  </div>
                  <p className="text-[11px] text-[#5A7446] mt-0.5">
                    Includes low-bandwidth live broadcasts, automatic class recording, encrypted anti-piracy cloud storage for student revision.
                  </p>
                </div>
              </div>

              {/* Branded Mobile App Toggle */}
              <div 
                onClick={() => setNeedsBrandedApp(!needsBrandedApp)}
                className={`p-4 rounded-xl border cursor-pointer transition flex items-start gap-3 ${
                  needsBrandedApp 
                    ? 'bg-white border-[#7B9D60] shadow-sm' 
                    : 'bg-white/70 border-[#D9E8CA] hover:border-[#7B9D60]/50'
                }`}
              >
                <input 
                  type="checkbox" 
                  checked={needsBrandedApp} 
                  onChange={() => {}}
                  className="w-4 h-4 rounded text-[#7B9D60] focus:ring-0 mt-1 cursor-pointer accent-[#7B9D60]" 
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#28371B]">Custom Branded Android Mobile App (APK)</span>
                    <span className="text-[10px] bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.2 rounded-full font-black">WHITE-LABEL</span>
                  </div>
                  <p className="text-[11px] text-[#5A7446] mt-0.5">
                    Your own coaching institute Android application published with your icon and brand name.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right: Summary & Action Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-[#D9E8CA] shadow-sm space-y-5">
            
            <div className="border-b border-[#D9E8CA]/60 pb-3">
              <span className="text-[10px] font-black uppercase text-[#638249] tracking-wider">
                Your Tailored Plan Summary
              </span>
              <h3 className="text-lg font-black text-[#28371B] mt-0.5 font-heading">
                Ready for Honest Consultation
              </h3>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between py-1 border-b border-[#D9E8CA]/40">
                <span className="text-[#5A7446]">Student Tier:</span>
                <span className="font-black text-[#28371B]">{studentCount} Active Students</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#D9E8CA]/40">
                <span className="text-[#5A7446]">CBT Exams &amp; Fees:</span>
                <span className="font-bold text-[#7B9D60]">Included Free</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#D9E8CA]/40">
                <span className="text-[#5A7446]">Live Class Server:</span>
                <span className={`font-bold ${needsLiveStream ? 'text-[#28371B]' : 'text-gray-400'}`}>
                  {needsLiveStream ? 'Dedicated Media Server' : 'Not Requested'}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#D9E8CA]/40">
                <span className="text-[#5A7446]">Mobile App:</span>
                <span className={`font-bold ${needsBrandedApp ? 'text-[#28371B]' : 'text-gray-400'}`}>
                  {needsBrandedApp ? 'Custom Branded APK' : 'Responsive Web Portal'}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#D9E8CA]/40">
                <span className="text-[#5A7446]">Free Trial:</span>
                <span className="font-black text-[#7B9D60]">14 Days (100% Free)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#5A7446]">Platform Commission:</span>
                <span className="font-black text-[#28371B]">0% (Keep 100% Fees)</span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-slate-950" />
                <span>Get Instant Quote on WhatsApp</span>
              </a>

              <button
                onClick={onOpenDemoModal}
                className="w-full py-3.5 px-4 rounded-xl bg-[#28371B] hover:bg-[#3d512a] text-white font-extrabold text-xs sm:text-sm transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#7B9D60]" />
                <span>Request 1-on-1 Call &amp; Demo</span>
              </button>
            </div>

            <p className="text-[11px] text-[#5A7446] text-center font-medium">
              ⚡ We respond with a customized written proposal within 10 minutes.
            </p>

          </div>

        </div>

      </div>

      {/* 4. The 4 Guaranteed Commitments on Every Plan */}
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xl sm:text-2xl font-black text-[#28371B] font-heading">
            Guaranteed With Every Single TutoLink Setup
          </h2>
          <p className="text-xs text-[#5A7446]">
            Regardless of your institute size, these commitments are non-negotiable standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-white p-5 rounded-2xl border border-[#D9E8CA] space-y-2">
            <div className="w-8 h-8 rounded-xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center font-bold">
              <IndianRupee className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-black text-[#28371B]">0% Commission Cut</h3>
            <p className="text-xs text-[#5A7446] leading-relaxed">
              We never take a percentage of your student admissions or course sales. 100% goes directly to your bank account.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#D9E8CA] space-y-2">
            <div className="w-8 h-8 rounded-xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-black text-[#28371B]">14-Day Free Trial</h3>
            <p className="text-xs text-[#5A7446] leading-relaxed">
              Test-drive the complete software in your institute with actual batches and tests before paying any subscription fee.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#D9E8CA] space-y-2">
            <div className="w-8 h-8 rounded-xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center font-bold">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-black text-[#28371B]">Free Excel Migration</h3>
            <p className="text-xs text-[#5A7446] leading-relaxed">
              Zero setup fees. Simply hand over your Excel roster; our engineering team imports all your students and batches.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#D9E8CA] space-y-2">
            <div className="w-8 h-8 rounded-xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center font-bold">
              <Clock className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-black text-[#28371B]">12-Hour Resolution</h3>
            <p className="text-xs text-[#5A7446] leading-relaxed">
              Direct access to the software engineers. Any technical or operational issue is addressed within 12 working hours.
            </p>
          </div>

        </div>
      </div>

      {/* 5. Pricing FAQs */}
      <div className="max-w-4xl mx-auto space-y-6 pt-4">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#ECF4E2] border border-[#C1DAB0] text-[#638249] text-xs font-black uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-[#7B9D60]" />
            <span>Pricing &amp; Billing FAQs</span>
          </div>
          <h2 className="text-2xl font-black text-[#28371B] font-heading">
            Common Questions About Our Pricing
          </h2>
        </div>

        <div className="space-y-3">
          {pricingFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? 'border-[#7B9D60] shadow-sm' : 'border-[#D9E8CA] hover:border-[#7B9D60]/50'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm font-bold text-[#28371B] font-heading pr-2">
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform flex-shrink-0 ${
                    isOpen ? 'bg-[#7B9D60] text-white rotate-180' : 'bg-[#FAFCF9] text-[#5A7446] border border-[#D9E8CA]'
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-[#5A7446] leading-relaxed border-t border-[#D9E8CA]/40 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 6. Bottom Fast Hotline Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#28371B] via-[#4D6736] to-[#7B9D60] text-white text-center max-w-4xl mx-auto space-y-4 shadow-xl">
        <h3 className="text-lg sm:text-2xl font-black font-heading text-white">
          Prefer a Direct Conversation Over Reading?
        </h3>
        <p className="text-xs sm:text-sm text-white/85 max-w-lg mx-auto font-medium">
          Call or message us directly. We will answer all your questions about server capacities, live classes, and custom white-label setups.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href="tel:+917052422066"
            className="px-6 py-3 rounded-xl bg-white text-[#28371B] hover:bg-gray-100 font-black text-xs sm:text-sm transition shadow-sm flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#7B9D60]" />
            <span>Call: +91 70524 22066</span>
          </a>

          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm transition shadow-sm flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-slate-950" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
}
