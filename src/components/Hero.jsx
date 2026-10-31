import React, { useState } from 'react';
import { 
  Building2, 
  Smartphone, 
  Video, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle,
  Clock,
  ShieldCheck,
  TrendingUp,
  FileCheck2,
  Bell,
  Star
} from 'lucide-react';

export default function Hero({ onOpenDemoModal, onSubmitLead }) {
  const [mobileNumber, setMobileNumber] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'cbt' | 'student' | 'whatsapp'

  const handleQuickLeadSubmit = (e) => {
    e.preventDefault();
    if (!mobileNumber) return;
    if (onSubmitLead) {
      onSubmitLead({
        ownerName: ownerName || 'Coaching Director',
        mobile: mobileNumber,
        source: 'Hero Quick Form'
      });
    }
    setMobileNumber('');
    setOwnerName('');
  };

  const whatsappUrl = "https://wa.me/917052422066?text=" + encodeURIComponent("Hi TutoLink Team, I am interested in digitizing my coaching institute. Can you share a live demo?");

  return (
    <section id="hero" className="relative pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24 bg-[#F8FAF5] overflow-hidden border-b border-[#E2EBDC]">
      
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#7B9D60]/12 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-80 right-10 w-[400px] h-[400px] bg-[#64844A]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Pill */}
        <div className="text-center mb-6">
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C8DCAE] text-[#1F2922] text-xs font-bold shadow-xs hover:border-[#7B9D60] transition-colors cursor-pointer" 
            onClick={onOpenDemoModal}
          >
            <span className="w-2 h-2 rounded-full bg-[#7B9D60] animate-pulse" />
            <span className="text-[#7B9D60] font-extrabold">NEW:</span>
            <span>Auto-Generate JEE &amp; NEET DPPs in 60 Secs • 0% Course Commission</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#7B9D60]" />
          </div>
        </div>

        {/* Main Headline & Benefit Subhead */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#1F2922] tracking-tight leading-[1.12] font-heading">
            The Complete Operating System For <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1F2922] via-[#7B9D60] to-[#55753C]">
              Coaching Institutes
            </span> That Want to Scale.
          </h1>

          <p className="text-base sm:text-xl font-bold text-[#3B4D3F] max-w-3xl mx-auto leading-relaxed pt-1">
            "Your classroom teaching built your reputation. Now deliver the 24/7 branded mobile app, NTA-pattern CBT tests, and automated WhatsApp fee recovery your students and parents expect — under your own brand with <span className="text-[#7B9D60] underline decoration-[#7B9D60]/40 decoration-2">0% revenue cut</span>."
          </p>
        </div>

        {/* Quick Lead Capture Box */}
        <div className="mt-8 max-w-2xl mx-auto">
          <form 
            onSubmit={handleQuickLeadSubmit} 
            className="bg-white p-2.5 sm:p-3 rounded-2xl border border-[#C8DCAE] shadow-[0_12px_32px_rgba(123,157,96,0.12)] flex flex-col sm:flex-row gap-2.5"
          >
            <div className="flex-1 relative">
              <Building2 className="w-4 h-4 text-[#7B9D60] absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Coaching Name / Director Name"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                className="w-full pl-10 pr-3 py-3 text-xs sm:text-sm text-[#1F2922] bg-[#FAFDF8] rounded-xl border border-[#E2EBDC] focus:outline-none focus:border-[#7B9D60] placeholder:text-[#576659]/70 font-medium"
              />
            </div>
            <div className="flex-1 relative">
              <Smartphone className="w-4 h-4 text-[#7B9D60] absolute left-3.5 top-3.5" />
              <input
                type="tel"
                required
                placeholder="WhatsApp Number (e.g. 98765 43210)"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full pl-10 pr-3 py-3 text-xs sm:text-sm text-[#1F2922] bg-[#FAFDF8] rounded-xl border border-[#E2EBDC] focus:outline-none focus:border-[#7B9D60] placeholder:text-[#576659]/70 font-medium"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-[#7B9D60] text-white font-extrabold text-xs sm:text-sm hover:bg-[#68884E] active:scale-95 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
            >
              <span>Book Free Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Social Proof & Trust Tickers */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-xs font-semibold text-[#576659]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[#2E7D32] hover:text-[#1B5E20] font-bold transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-[#2E7D32] text-white" />
              <span>Chat on WhatsApp</span>
            </a>
            <span className="hidden sm:inline text-[#C8DCAE]">•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#7B9D60]" />
              Setup in 10 Minutes
            </span>
            <span className="hidden sm:inline text-[#C8DCAE]">•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#7B9D60]" />
              Zero Platform Commission
            </span>
            <span className="hidden sm:inline text-[#C8DCAE]">•</span>
            <span>Free Student Migration</span>
          </div>
        </div>

        {/* Interactive Product Mockup & Command Center */}
        <div className="mt-12 max-w-5xl mx-auto">
          
          {/* Interactive Screen Tab Switcher */}
          <div className="flex items-center justify-center gap-2 mb-4 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'dashboard'
                  ? 'bg-[#1F2922] text-white shadow-md'
                  : 'bg-white text-[#576659] border border-[#E2EBDC] hover:border-[#7B9D60]'
              }`}
            >
              <Building2 className="w-4 h-4 text-[#7B9D60]" />
              <span>Admin Command Center</span>
            </button>

            <button
              onClick={() => setActiveTab('cbt')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'cbt'
                  ? 'bg-[#1F2922] text-white shadow-md'
                  : 'bg-white text-[#576659] border border-[#E2EBDC] hover:border-[#7B9D60]'
              }`}
            >
              <Award className="w-4 h-4 text-[#7B9D60]" />
              <span>NTA CBT Test Engine</span>
            </button>

            <button
              onClick={() => setActiveTab('student')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'student'
                  ? 'bg-[#1F2922] text-white shadow-md'
                  : 'bg-white text-[#576659] border border-[#E2EBDC] hover:border-[#7B9D60]'
              }`}
            >
              <Smartphone className="w-4 h-4 text-[#7B9D60]" />
              <span>Branded Student App</span>
            </button>

            <button
              onClick={() => setActiveTab('whatsapp')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'whatsapp'
                  ? 'bg-[#1F2922] text-white shadow-md'
                  : 'bg-white text-[#576659] border border-[#E2EBDC] hover:border-[#7B9D60]'
              }`}
            >
              <MessageCircle className="w-4 h-4 text-[#2E7D32]" />
              <span>WhatsApp Fee Desk</span>
            </button>
          </div>

          {/* Interactive Screen Display Container */}
          <div className="bg-white rounded-3xl border border-[#C8DCAE] shadow-[0_20px_50px_rgba(123,157,96,0.15)] overflow-hidden">
            
            {/* Top Browser Bar */}
            <div className="bg-[#FAFDF8] border-b border-[#E2EBDC] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="text-[11px] font-mono text-[#576659] ml-2 hidden sm:inline">
                  https://portal.apexacademy-kota.tutolink.in
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EBF4E3] border border-[#C8DCAE] text-[10px] font-bold text-[#1F2922] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7B9D60] animate-ping" />
                  Live Institute Environment
                </span>
              </div>
            </div>

            {/* TAB 1: ADMIN COMMAND CENTER */}
            {activeTab === 'dashboard' && (
              <div className="p-4 sm:p-6 md:p-8 space-y-6 animate-fadeIn">
                
                {/* Institute Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#E2EBDC]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1F2922] to-[#7B9D60] text-white font-black flex items-center justify-center text-xl shadow-md">
                      AA
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base sm:text-lg font-black text-[#1F2922]">
                          Apex IIT-JEE &amp; NEET Academy
                        </h3>
                        <span className="px-2 py-0.5 rounded-md bg-[#EBF4E3] text-[#7B9D60] font-bold text-[10px]">
                          Kota Center #1
                        </span>
                      </div>
                      <p className="text-xs text-[#576659] font-medium">
                        850 Active Enrolled Students • 14 Faculty Members • White-Label Pro Active
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button onClick={onOpenDemoModal} className="px-3 py-1.5 rounded-xl bg-[#7B9D60] text-white text-xs font-bold hover:bg-[#68884E] transition shadow-xs">
                      + Create New CBT Test
                    </button>
                  </div>
                </div>

                {/* 4 Metric KPI Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  
                  <div className="bg-[#FAFDF8] border border-[#E2EBDC] p-3.5 sm:p-4 rounded-2xl">
                    <div className="flex items-center justify-between text-[#576659] text-xs font-semibold mb-1">
                      <span>Monthly Fees Collected</span>
                      <TrendingUp className="w-4 h-4 text-[#7B9D60]" />
                    </div>
                    <div className="text-lg sm:text-2xl font-black text-[#1F2922]">
                      ₹18,45,000
                    </div>
                    <div className="text-[11px] text-[#7B9D60] font-bold mt-1 flex items-center gap-1">
                      <span>✓ 96.4% on-time</span>
                      <span className="text-[#576659] font-normal">• 0% cut</span>
                    </div>
                  </div>

                  <div className="bg-[#FAFDF8] border border-[#E2EBDC] p-3.5 sm:p-4 rounded-2xl">
                    <div className="flex items-center justify-between text-[#576659] text-xs font-semibold mb-1">
                      <span>Active Tests Today</span>
                      <Award className="w-4 h-4 text-[#7B9D60]" />
                    </div>
                    <div className="text-lg sm:text-2xl font-black text-[#1F2922]">
                      3 CBT Tests
                    </div>
                    <div className="text-[11px] text-[#576659] font-medium mt-1">
                      412 students submitted live
                    </div>
                  </div>

                  <div className="bg-[#FAFDF8] border border-[#E2EBDC] p-3.5 sm:p-4 rounded-2xl">
                    <div className="flex items-center justify-between text-[#576659] text-xs font-semibold mb-1">
                      <span>Live Lecture Status</span>
                      <Video className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="text-lg sm:text-2xl font-black text-[#1F2922] flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Now
                    </div>
                    <div className="text-[11px] text-[#576659] font-medium mt-1 truncate">
                      Prof. Verma • Physics (148 live)
                    </div>
                  </div>

                  <div className="bg-[#FAFDF8] border border-[#E2EBDC] p-3.5 sm:p-4 rounded-2xl">
                    <div className="flex items-center justify-between text-[#576659] text-xs font-semibold mb-1">
                      <span>Parent WhatsApp Sync</span>
                      <Bell className="w-4 h-4 text-[#7B9D60]" />
                    </div>
                    <div className="text-lg sm:text-2xl font-black text-[#1F2922]">
                      100% Synced
                    </div>
                    <div className="text-[11px] text-[#7B9D60] font-bold mt-1">
                      Auto-absence alerts enabled
                    </div>
                  </div>

                </div>

                {/* Sub-Panels: Live Batch Schedule & Recent Test Leaderboard */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  
                  {/* Today's Schedule */}
                  <div className="bg-[#FAFDF8] border border-[#E2EBDC] p-4 rounded-2xl">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xs font-bold text-[#1F2922] uppercase tracking-wider">
                        Today's Batches &amp; Timetable
                      </h4>
                      <span className="text-[11px] text-[#7B9D60] font-bold">5 Batches Today</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-white border border-[#E2EBDC] flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <div>
                            <p className="font-bold text-[#1F2922]">JEE Advanced 2027 (Batch Alpha)</p>
                            <p className="text-[10px] text-[#576659]">Physics: Rotational Dynamics • Er. Rajesh Verma</p>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-[#EBF4E3] text-[#7B9D60] font-bold text-[10px]">
                          10:00 AM - 12:00 PM
                        </span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white border border-[#E2EBDC] flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-amber-500" />
                          <div>
                            <p className="font-bold text-[#1F2922]">NEET Target 2026 (Batch Med-1)</p>
                            <p className="text-[10px] text-[#576659]">Chemistry: Chemical Bonding • Dr. Ananya Sharma</p>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-700 font-bold text-[10px]">
                          02:00 PM - 04:00 PM
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Instant AIR Rank Analytics */}
                  <div className="bg-[#FAFDF8] border border-[#E2EBDC] p-4 rounded-2xl">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xs font-bold text-[#1F2922] uppercase tracking-wider">
                        Latest CBT Test: Full Mock #07 (JEE Main)
                      </h4>
                      <span className="text-[11px] text-[#7B9D60] font-bold">AIR Generated</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-2 rounded-xl bg-white border border-[#E2EBDC] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 font-black text-[10px] flex items-center justify-center">
                            1
                          </span>
                          <span className="font-bold text-[#1F2922]">Aarav Singhania</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-extrabold text-[#7B9D60]">284 / 300</span>
                          <span className="text-[10px] font-bold bg-[#EBF4E3] text-[#7B9D60] px-2 py-0.5 rounded">
                            99.86%ile
                          </span>
                        </div>
                      </div>

                      <div className="p-2 rounded-xl bg-white border border-[#E2EBDC] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-gray-200 text-gray-700 font-black text-[10px] flex items-center justify-center">
                            2
                          </span>
                          <span className="font-bold text-[#1F2922]">Priya Deshmukh</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-extrabold text-[#7B9D60]">276 / 300</span>
                          <span className="text-[10px] font-bold bg-[#EBF4E3] text-[#7B9D60] px-2 py-0.5 rounded">
                            99.42%ile
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            )}

            {/* TAB 2: NTA CBT EXAM SIMULATOR */}
            {activeTab === 'cbt' && (
              <div className="p-4 sm:p-6 md:p-8 space-y-4 animate-fadeIn bg-white">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-[#E2EBDC]">
                  <div>
                    <span className="text-[10px] font-black uppercase text-[#7B9D60] tracking-wider">
                      National Testing Agency (NTA) Exact Pattern
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-[#1F2922]">
                      JEE Main 2026 All India Full Mock #04
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-lg bg-red-50 text-red-600 font-mono font-bold text-xs border border-red-200 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> 02:44:18 Remaining
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#EBF4E3] text-[#7B9D60] font-bold text-xs">
                      Section: Physics
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Question Box */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center justify-between text-xs text-[#576659]">
                      <span className="font-bold text-[#1F2922]">Question 18 of 75 (Single Choice)</span>
                      <span className="font-bold text-[#7B9D60]">+4 Correct / -1 Negative</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FAFDF8] border border-[#E2EBDC] text-xs sm:text-sm font-medium text-[#1F2922] leading-relaxed">
                      A uniform cylinder of mass <span className="font-mono font-bold">M</span> and radius <span className="font-mono font-bold">R</span> rolls down an inclined plane of inclination <span className="font-mono font-bold">θ</span> without slipping. The magnitude of frictional force acting on the cylinder is:
                    </div>

                    {/* Options */}
                    <div className="space-y-2 text-xs">
                      <div className="p-3 rounded-xl border border-[#E2EBDC] hover:border-[#7B9D60] cursor-pointer bg-white transition flex items-center justify-between">
                        <span>(A) (1/2) Mg sin θ</span>
                      </div>
                      <div className="p-3 rounded-xl border-2 border-[#7B9D60] bg-[#EBF4E3]/70 font-bold text-[#1F2922] flex items-center justify-between">
                        <span>(B) (1/3) Mg sin θ  ✓ Selected</span>
                        <CheckCircle2 className="w-4 h-4 text-[#7B9D60]" />
                      </div>
                      <div className="p-3 rounded-xl border border-[#E2EBDC] hover:border-[#7B9D60] cursor-pointer bg-white transition">
                        <span>(C) (2/3) Mg sin θ</span>
                      </div>
                      <div className="p-3 rounded-xl border border-[#E2EBDC] hover:border-[#7B9D60] cursor-pointer bg-white transition">
                        <span>(D) Mg sin θ</span>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-2 flex items-center justify-between gap-2 border-t border-[#E2EBDC] text-xs">
                      <button className="px-4 py-2 rounded-xl bg-[#7B9D60] text-white font-bold hover:bg-[#68884E]">
                        Save &amp; Next
                      </button>
                      <button className="px-3.5 py-2 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 font-bold">
                        Mark for Review
                      </button>
                      <button className="px-3 py-2 rounded-xl bg-gray-100 text-gray-600 font-medium">
                        Clear Response
                      </button>
                    </div>
                  </div>

                  {/* Question Palette */}
                  <div className="lg:col-span-4 bg-[#FAFDF8] p-4 rounded-2xl border border-[#E2EBDC] space-y-3">
                    <h4 className="text-xs font-bold text-[#1F2922] uppercase tracking-wider">
                      Question Palette (Physics)
                    </h4>
                    <div className="grid grid-cols-5 gap-1.5 text-xs font-bold text-center">
                      {[...Array(25)].map((_, i) => {
                        const num = i + 1;
                        let statusColor = "bg-gray-100 text-gray-600";
                        if (num < 15) statusColor = "bg-emerald-500 text-white"; // Answered
                        else if (num === 18) statusColor = "bg-emerald-600 text-white ring-2 ring-[#7B9D60]";
                        else if (num === 16 || num === 17) statusColor = "bg-red-500 text-white"; // Not answered
                        else if (num === 19) statusColor = "bg-purple-600 text-white"; // Review

                        return (
                          <div key={i} className={`p-2 rounded-lg ${statusColor} cursor-pointer`}>
                            {num}
                          </div>
                        );
                      })}
                    </div>
                    <div className="pt-2 text-[10px] text-[#576659] space-y-1 font-medium">
                      <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-emerald-500" /> Answered (14)</div>
                      <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-red-500" /> Not Answered (2)</div>
                      <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-purple-600" /> Marked for Review (1)</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: BRANDED STUDENT APP */}
            {activeTab === 'student' && (
              <div className="p-4 sm:p-6 md:p-8 animate-fadeIn bg-white">
                <div className="max-w-md mx-auto bg-[#FAFDF8] border-2 border-[#1F2922] rounded-[36px] p-4 shadow-2xl space-y-4">
                  {/* Phone Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-[#E2EBDC]">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-xl bg-[#7B9D60] text-white font-black text-xs flex items-center justify-center">
                        AA
                      </div>
                      <div>
                        <p className="text-xs font-black text-[#1F2922]">Apex Academy App</p>
                        <p className="text-[10px] text-[#7B9D60]">Welcome, Rahul Sharma (12th-A)</p>
                      </div>
                    </div>
                    <Bell className="w-4 h-4 text-[#576659]" />
                  </div>

                  {/* Daily Practice Streak */}
                  <div className="bg-gradient-to-r from-[#1F2922] to-[#7B9D60] text-white p-3.5 rounded-2xl shadow-md">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold flex items-center gap-1">🔥 14-Day DPP Streak!</span>
                      <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">Top 5% Batch</span>
                    </div>
                    <p className="text-[11px] text-white/90 mt-1 font-medium">
                      Daily Practice Problem #42 (Electrostatics) is ready for you.
                    </p>
                    <button onClick={onOpenDemoModal} className="mt-2 text-[10px] font-bold bg-white text-[#1F2922] px-3 py-1 rounded-lg">
                      Start 15-Min DPP →
                    </button>
                  </div>

                  {/* 4 Feature Tiles */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-bold text-[#1F2922]">
                    <div className="p-3 bg-white rounded-xl border border-[#E2EBDC] hover:border-[#7B9D60] cursor-pointer">
                      <Video className="w-4 h-4 text-[#7B9D60] mb-1" />
                      <span>Live Classes &amp; Recordings</span>
                      <span className="block text-[9px] text-[#576659] font-normal">24 Encrypted lectures</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#E2EBDC] hover:border-[#7B9D60] cursor-pointer">
                      <Award className="w-4 h-4 text-[#7B9D60] mb-1" />
                      <span>CBT Mock Tests</span>
                      <span className="block text-[9px] text-[#576659] font-normal">Rank 4 in last test</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#E2EBDC] hover:border-[#7B9D60] cursor-pointer">
                      <FileCheck2 className="w-4 h-4 text-[#7B9D60] mb-1" />
                      <span>DPPs &amp; Question Bank</span>
                      <span className="block text-[9px] text-[#576659] font-normal">50,000+ Questions</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#E2EBDC] hover:border-[#7B9D60] cursor-pointer">
                      <MessageCircle className="w-4 h-4 text-[#7B9D60] mb-1" />
                      <span>Ask Doubt (24/7)</span>
                      <span className="block text-[9px] text-[#576659] font-normal">Faculty responds fast</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: WHATSAPP FEE DESK */}
            {activeTab === 'whatsapp' && (
              <div className="p-4 sm:p-6 md:p-8 animate-fadeIn bg-[#ECE5DD]/40">
                <div className="max-w-lg mx-auto bg-white rounded-2xl border border-[#E2EBDC] shadow-lg overflow-hidden">
                  {/* WhatsApp Header */}
                  <div className="bg-[#075E54] text-white p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-[#128C7E] flex items-center justify-center font-bold text-xs text-white">
                        AA
                      </div>
                      <div>
                        <h4 className="text-xs font-bold flex items-center gap-1">
                          Apex Academy Official
                          <span className="text-[10px] text-emerald-300">✓ Verified</span>
                        </h4>
                        <p className="text-[10px] text-white/80">Automated Parent Desk • WhatsApp Business</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-white/70">10:45 AM</span>
                  </div>

                  {/* Messages Stream */}
                  <div className="p-4 space-y-3 bg-[#E5DDD5]/30 text-xs">
                    
                    {/* Attendance Alert */}
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-black/5 shadow-xs max-w-[90%]">
                      <p className="font-bold text-[#1F2922]">📢 Daily Attendance Alert</p>
                      <p className="text-[11px] text-gray-700 mt-1">
                        Dear Mr. Sharma, your ward <span className="font-bold">Rahul Sharma</span> marked present for today's Physics class at 10:02 AM.
                      </p>
                      <span className="text-[9px] text-gray-400 block text-right mt-1">10:03 AM ✓✓</span>
                    </div>

                    {/* Fee Reminder Message with 1-Click Pay */}
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-black/5 shadow-xs max-w-[90%]">
                      <p className="font-bold text-[#1F2922]">💳 Installment Due Reminder</p>
                      <p className="text-[11px] text-gray-700 mt-1">
                        Dear Parent, 2nd Quarter Tuition Fee (₹12,500) for Rahul (Batch Alpha) is due on 5th Nov.
                      </p>
                      <div className="mt-2.5 pt-2 border-t border-gray-100 flex flex-col gap-1.5">
                        <a 
                          href="#pricing"
                          onClick={(e) => { e.preventDefault(); onOpenDemoModal(); }}
                          className="w-full py-2 bg-[#25D366] text-white font-extrabold text-xs text-center rounded-xl shadow-xs hover:bg-[#1EBE5D] transition flex items-center justify-center gap-1.5"
                        >
                          <span>Pay ₹12,500 via UPI / Card</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                        <span className="text-[9px] text-gray-400 text-center">
                          Instant official receipt generated &amp; saved to student ledger.
                        </span>
                      </div>
                      <span className="text-[9px] text-gray-400 block text-right mt-1">10:45 AM ✓✓</span>
                    </div>

                  </div>
                </div>
              </div>
            )}

            {/* Bottom Proof Strip */}
            <div className="bg-[#FAFDF8] border-t border-[#E2EBDC] px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-[#576659]">
              <div className="flex items-center gap-2">
                <span className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                </span>
                <span className="font-bold text-[#1F2922]">4.9/5 Rating</span>
                <span>by 500+ Coaching Directors across India</span>
              </div>
              <button
                onClick={onOpenDemoModal}
                className="text-[#7B9D60] font-bold hover:underline flex items-center gap-1 text-xs"
              >
                <span>Schedule a 1-on-1 Guided Walkthrough</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
