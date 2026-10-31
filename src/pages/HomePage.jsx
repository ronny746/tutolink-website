import React, { useState } from 'react';
import { 
  Building2, 
  GraduationCap, 
  Users, 
  User, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Video, 
  Smartphone, 
  DollarSign, 
  Play, 
  Monitor, 
  Clock, 
  HeartHandshake,
  Check,
  Lock,
  ChevronRight
} from 'lucide-react';

export default function HomePage({ onNavigate, onOpenDemoModal }) {
  const [activeDemoRole, setActiveDemoRole] = useState('admin');
  const [heroPreviewTab, setHeroPreviewTab] = useState('admin');

  const demoAppUrl = import.meta.env.VITE_APP_URL || "https://app.tutolink.in";

  const demoRoles = {
    admin: {
      title: "Institute Director & Admin Portal",
      badge: "Complete Institute Operations",
      icon: Building2,
      headline: "Command center for batches, admissions, fee cashflow & staff control",
      highlights: [
        "Create & allocate batches (offline, online, or hybrid) with assigned faculties",
        "Automated installment fee schedules with instant digital PDF receipts",
        "NTA CBT mock tests with instant auto-grading & All India Ranks",
        "100% white-labeled under your coaching's name, logo & domain"
      ],
      demoLink: `${demoAppUrl}/skd-admin?demo=true`
    },
    teacher: {
      title: "Faculty & Teacher Workspace",
      badge: "Classroom & Academics",
      icon: Users,
      headline: "Interactive live lectures, rapid DPP generation & student doubt resolution",
      highlights: [
        "In-house HD live classes with auto-recorded batch lecture archives",
        "Generate 15-min DPP practice sheets in 60s from pre-tagged question banks",
        "Answer student doubt tickets with mathematical LaTeX formula formatting",
        "Quick batch attendance with instant absent alerts to parents via WhatsApp"
      ],
      demoLink: `${demoAppUrl}/skd-teacher?demo=true`
    },
    student: {
      title: "Student Mobile & Web App",
      badge: "High-Rank Exam Prep",
      icon: GraduationCap,
      headline: "Authentic NTA exam simulator, video lectures & chapter practice streaks",
      highlights: [
        "Real JEE Main & NEET CBT exam interface with question status palette & timers",
        "24/7 access to batch lecture recordings and protected PDF formula sheets",
        "Daily practice problems (DPP) with step-by-step LaTeX solutions",
        "Instant doubt submission desk with direct teacher annotations"
      ],
      demoLink: `${demoAppUrl}/student/dashboard?demo=true`
    },
    parent: {
      title: "Parent Transparency Desk",
      badge: "Parent Trust & Accountability",
      icon: User,
      headline: "Real-time attendance check-in alerts, scorecards & digital fee receipts",
      highlights: [
        "Instant absent alerts via WhatsApp whenever a class or test is missed",
        "Visual report cards showing test marks, percentiles and rank trajectory",
        "1-click fee payments via UPI (Google Pay, PhonePe, Paytm, BHIM)",
        "Official stamped PDF fee receipts generated instantly for taxation records"
      ],
      demoLink: `${demoAppUrl}/parent/dashboard?demo=true`
    }
  };

  const activeRoleData = demoRoles[activeDemoRole];
  const ActiveIcon = activeRoleData.icon;

  const whatsappUrl = "https://wa.me/917052422066?text=" + encodeURIComponent("Hi TutoLink Team, I tried the live demo on your website and want to discuss setting this up for my coaching.");

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      
      {/* 1. HERO SECTION (Matching new-tuto layout & dot grid) */}
      <section className="relative px-5 pt-28 pb-16 sm:pt-32 sm:pb-24 lg:px-8 border-b border-[#D9E8CA]/70 overflow-hidden bg-gradient-to-b from-[#ECF4E2]/40 via-[#fdfff9] to-[#fdfff9]">
        {/* Subtle dot pattern from new-tuto */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none" 
          style={{ backgroundImage: "radial-gradient(#7B9D60 1px, transparent 1px)", backgroundSize: "32px 32px" }} 
        />

        <div className="relative mx-auto max-w-5xl text-center space-y-6">
          
          {/* Top Pill from new-tuto */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C1DAB0] bg-white px-3.5 py-1.5 text-xs font-extrabold text-[#638249] shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#7B9D60]" />
            <span>The Operating System for Modern Coaching Institutes</span>
          </div>

          {/* Main Headline with new-tuto style */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-[#28371B] tracking-tight font-heading">
            Scale Your Coaching Institute <br className="hidden sm:inline" />
            With Your <span className="text-[#7B9D60] underline decoration-[#7B9D60]/30 underline-offset-8">Own Branded Platform.</span>
          </h1>

          {/* Benefit Subhead */}
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Stop juggling disconnected apps. Tutolink combines <strong>NTA-style CBT Online Tests</strong>, <strong>In-House Live Classes</strong>, <strong>Automated WhatsApp Fee Recovery</strong>, and <strong>Parent Scorecard Alerts</strong> under your institute's name.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              onClick={() => onOpenDemoModal()}
              className="px-6 py-3.5 rounded-2xl bg-[#7B9D60] hover:bg-[#638249] text-white text-xs sm:text-sm font-black shadow-lg shadow-emerald-800/15 transition-all flex items-center gap-2 hover:-translate-y-0.5"
            >
              <span>Schedule 1-on-1 Institute Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#demo-sandbox"
              className="px-5 py-3.5 rounded-2xl bg-white border border-[#C1DAB0] text-[#28371B] text-xs sm:text-sm font-bold hover:bg-[#ECF4E2]/50 transition flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5 text-[#7B9D60] fill-[#7B9D60]" />
              <span>Test Drive Live Demo</span>
            </a>
          </div>

          {/* Trust Highlights from new-tuto */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#7B9D60]" />
              <span>Live in 24 Hours</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#7B9D60]" />
              <span>100% White-Labeled</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#7B9D60]" />
              <span>0% Platform Commission</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#7B9D60]" />
              <span>12-Hour Support Commitment</span>
            </span>
          </div>

        </div>

        {/* Minimalist Dashboard Showcase Card from new-tuto */}
        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div className="rounded-3xl border border-[#C1DAB0] bg-white p-3 sm:p-5 shadow-2xl space-y-4">
            
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3 px-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="text-xs font-bold text-slate-400 ml-2">Tutolink Academy Hub • Live Snapshot</span>
              </div>
              <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-bold">
                <button
                  onClick={() => setHeroPreviewTab('admin')}
                  className={`px-3 py-1 rounded-lg transition ${heroPreviewTab === 'admin' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'}`}
                >
                  Admin Operations
                </button>
                <button
                  onClick={() => setHeroPreviewTab('cbt')}
                  className={`px-3 py-1 rounded-lg transition ${heroPreviewTab === 'cbt' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'}`}
                >
                  CBT Exams Engine
                </button>
                <button
                  onClick={() => setHeroPreviewTab('fees')}
                  className={`px-3 py-1 rounded-lg transition ${heroPreviewTab === 'fees' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'}`}
                >
                  Fee Cashflow
                </button>
              </div>
            </div>

            {/* Dashboard Content Simulation from new-tuto */}
            {heroPreviewTab === 'admin' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-2">
                <div className="p-4 rounded-2xl bg-[#ECF4E2]/50 border border-[#C1DAB0] space-y-1">
                  <p className="text-[11px] font-bold text-[#638249] uppercase">Enrolled Students</p>
                  <p className="text-2xl font-black text-[#28371B]">1,280</p>
                  <p className="text-[10px] text-emerald-700 font-semibold">+18% this month</p>
                </div>
                <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-1">
                  <p className="text-[11px] font-bold text-blue-700 uppercase">Active Batches</p>
                  <p className="text-2xl font-black text-slate-800">14</p>
                  <p className="text-[10px] text-slate-500 font-semibold">NEET &amp; JEE Droppers</p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1">
                  <p className="text-[11px] font-bold text-amber-700 uppercase">Today Attendance</p>
                  <p className="text-2xl font-black text-slate-800">94.8%</p>
                  <p className="text-[10px] text-amber-800 font-semibold">RFID &amp; QR Verified</p>
                </div>
                <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-200 space-y-1">
                  <p className="text-[11px] font-bold text-purple-700 uppercase">Live Classes Today</p>
                  <p className="text-2xl font-black text-slate-800">8 Sessions</p>
                  <p className="text-[10px] text-purple-800 font-semibold">In-House Streaming Active</p>
                </div>
              </div>
            )}

            {heroPreviewTab === 'cbt' && (
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">NTA Standard Mock Test Simulation: All India NEET Minor #4</span>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">+4 / -1 Rules</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">Test Format</span>
                    <span className="font-bold text-slate-800">Physics, Chemistry, Botany, Zoology</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">Question Palette</span>
                    <span className="font-bold text-slate-800">Answered, Marked, Unvisited</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">Result Deliverable</span>
                    <span className="font-bold text-slate-800">Instant Percentile &amp; Weak Topic Card</span>
                  </div>
                </div>
              </div>
            )}

            {heroPreviewTab === 'fees' && (
              <div className="p-4 rounded-2xl bg-emerald-50/40 border border-emerald-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-950">Automated Installment Billing &amp; Digital Receipts</span>
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 bg-[#7B9D60] text-white rounded-full">UPI Enabled</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-emerald-100">
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">Collection Rate</span>
                    <span className="font-black text-emerald-800 text-base">98.4%</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-emerald-100">
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">Automated Reminders</span>
                    <span className="font-bold text-slate-800">WhatsApp 3 Days Prior</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-emerald-100">
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">Official Receipts</span>
                    <span className="font-bold text-slate-800">Instant PDF with Institute Stamp</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </section>

      {/* 2. LIVE UNGATED DEMO SANDBOX (Matching new-tuto lines 546-662) */}
      <section id="demo-sandbox" className="py-16 sm:py-20 px-5 lg:px-8 bg-[#ECF4E2]/50 border-y border-[#D9E8CA]">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C1DAB0] text-xs font-extrabold text-[#638249]">
              <Sparkles size={13} className="text-[#7B9D60]" />
              <span>Interactive Live Demo Sandbox</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#28371B] tracking-tight font-heading">
              Test Drive Tutolink in Your Browser Right Now
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Experience the actual platform with pre-configured JEE &amp; NEET sample data. Select any role below to launch directly into that workspace.
            </p>
          </div>

          {/* Minimalist 4-Role Switcher from new-tuto */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white rounded-2xl border border-[#D9E8CA] max-w-xl mx-auto shadow-sm">
            {[
              { id: 'admin', label: 'Institute Admin' },
              { id: 'teacher', label: 'Teacher' },
              { id: 'student', label: 'Student' },
              { id: 'parent', label: 'Parent' }
            ].map((r) => (
              <button
                key={r.id}
                onClick={() => setActiveDemoRole(r.id)}
                className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs font-extrabold transition capitalize ${
                  activeDemoRole === r.id
                    ? 'bg-[#7B9D60] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          {/* Active Sandbox Presentation Box from new-tuto */}
          <div className="bg-white rounded-3xl border border-[#D9E8CA] p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECF4E2] text-[#638249] text-xs font-bold border border-[#C1DAB0]">
                <ActiveIcon size={14} />
                <span>{activeRoleData.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-heading">
                {activeRoleData.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {activeRoleData.headline}
              </p>

              <div className="space-y-2.5 pt-2">
                {activeRoleData.highlights.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-semibold">
                    <CheckCircle2 size={16} className="text-[#7B9D60] flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={activeRoleData.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#7B9D60] hover:bg-[#638249] text-white text-xs sm:text-sm font-black shadow-md transition flex items-center gap-2"
                >
                  <Sparkles size={15} />
                  <span>1-Click Launch {activeDemoRole.toUpperCase()} Demo</span>
                </a>

                <button
                  onClick={() => onNavigate('demo')}
                  className="px-4 py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold transition"
                >
                  View All 4 Sandbox Roles
                </button>
              </div>
            </div>

            {/* Sandbox Notice & Safety Guarantee Card from new-tuto */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#28371B] to-[#4D6736] p-6 sm:p-8 rounded-3xl text-white shadow-inner space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">Public Sandbox Mode</span>
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold">Live Data Active</span>
              </div>

              <p className="text-xs text-white/80 leading-relaxed font-medium">
                You can freely explore, test features, create sample batches, and evaluate tests in this live trial instance.
              </p>

              <div className="space-y-2 pt-1 text-xs text-white/90 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Pre-loaded NEET &amp; JEE mock batches and exams</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Test creation and report generation fully enabled</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Deletion locked to preserve shared sandbox data</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10">
                <button
                  onClick={onOpenDemoModal}
                  className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black transition text-center shadow-xs"
                >
                  Request a Private Institute Trial
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. THE 4 ENGINES (Matching new-tuto lines 395-543) */}
      <section id="features" className="py-16 px-5 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-extrabold text-[#7B9D60] uppercase tracking-wider">Everything Under One Roof</span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#28371B] tracking-tight font-heading">
            The 4 Engines Built to Grow Your Coaching Institute
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Replace multiple disconnected subscriptions with one unified institute operating platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Pillar 1 */}
          <div className="bg-white rounded-3xl p-8 border border-[#D9E8CA] shadow-sm hover:shadow-md transition space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-700 flex items-center justify-center">
                <Monitor size={24} />
              </div>
              <h3 className="text-xl font-black text-slate-900 font-heading">1. Real NTA CBT Exam Simulator &amp; DPP Generator</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Give your students authentic entrance exam practice. Build JEE, NEET, and Board pattern tests with LaTeX formulas, diagrams, +4/-1 negative marking, section switching, and instant percentile rank scorecards.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60]" />
                  <span>Timed Full-Screen Online Mock Tests</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60]" />
                  <span>Topic-wise Daily Practice Problems (DPP) with solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60]" />
                  <span>Automated Chapter Weakness &amp; Time-Spent Analytics</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('features')}
              className="text-xs font-extrabold text-[#7B9D60] hover:text-[#638249] flex items-center gap-1.5 self-start pt-2"
            >
              <span>Explore Exam Engine Capabilities</span>
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-3xl p-8 border border-[#D9E8CA] shadow-sm hover:shadow-md transition space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Video size={24} />
              </div>
              <h3 className="text-xl font-black text-slate-900 font-heading">2. In-House Live Classes &amp; Protected Study Notes</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Host interactive video lectures directly in your portal. Classes automatically save into the batch recordings library, and chapter PDF workbooks remain shielded from unauthorized downloads.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60]" />
                  <span>Low-latency live lectures with in-stream student chat</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60]" />
                  <span>Batch-wise recorded video archives for 24/7 student revision</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60]" />
                  <span>Anti-piracy protected chapter PDF notes &amp; formula sheets</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('features')}
              className="text-xs font-extrabold text-[#7B9D60] hover:text-[#638249] flex items-center gap-1.5 self-start pt-2"
            >
              <span>See Content Protection Details</span>
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-3xl p-8 border border-[#D9E8CA] shadow-sm hover:shadow-md transition space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <DollarSign size={24} />
              </div>
              <h3 className="text-xl font-black text-slate-900 font-heading">3. Automated Fee Installments &amp; Zero Commission</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Never lose track of pending fees again. Configure custom installment plans per student, automate WhatsApp due date reminders with 1-click UPI links, and issue official stamped PDF receipts.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60]" />
                  <span>Automated installment schedules with polite WhatsApp reminders</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60]" />
                  <span>Official branded PDF fee receipts issued instantly with stamp</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60]" />
                  <span>0% commission — 100% of student fees go straight to your bank</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('features')}
              className="text-xs font-extrabold text-[#7B9D60] hover:text-[#638249] flex items-center gap-1.5 self-start pt-2"
            >
              <span>View Fee Automation Features</span>
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white rounded-3xl p-8 border border-[#D9E8CA] shadow-sm hover:shadow-md transition space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <Smartphone size={24} />
              </div>
              <h3 className="text-xl font-black text-slate-900 font-heading">4. Parent Mobile Connect &amp; Instant Attendance</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Delighted parents refer more students. Provide parents with direct mobile visibility into real-time attendance check-ins, exam rank progress cards, and faculty feedback notes.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60]" />
                  <span>Instant student absent alerts sent via WhatsApp</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60]" />
                  <span>Visual scorecards showing rank trajectory and percentiles</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60]" />
                  <span>24/7 one-to-one student doubt resolution ticket desk</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('features')}
              className="text-xs font-extrabold text-[#7B9D60] hover:text-[#638249] flex items-center gap-1.5 self-start pt-2"
            >
              <span>Explore Parent Experience</span>
              <ChevronRight size={14} />
            </button>
          </div>

        </div>
      </section>

      {/* 4. RADICAL HONESTY & THE FOUNDER PROMISE */}
      <section className="px-5 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl border border-[#D9E8CA] p-6 sm:p-10 shadow-sm space-y-6">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center flex-shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase text-[#7B9D60] tracking-wider block">
                The Founder Promise
              </span>
              <h3 className="text-lg sm:text-xl font-black text-[#28371B] font-heading">
                We Are Honest: We Are Newly Launching, Dedicated &amp; Personally Here For You
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            Unlike giant EdTech companies with hundreds of faceless tele-calling agents who forget you once you pay, <strong>we are an engineering-led team</strong>. Previously, we built custom, tailor-made software systems directly for individual coaching institutes. We packaged all those real operational learnings into TutoLink.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1 text-xs">
            <div className="p-4 bg-[#fdfff9] rounded-2xl border border-[#D9E8CA] space-y-1">
              <span className="font-bold text-[#28371B] block">🚀 Direct Engineering Attention</span>
              <span className="text-slate-500 text-[11px]">When you need help or a custom feature, you speak directly to the software builders.</span>
            </div>

            <div className="p-4 bg-[#fdfff9] rounded-2xl border border-[#D9E8CA] space-y-1">
              <span className="font-bold text-[#28371B] block">⏱️ 12-Hour Support Response</span>
              <span className="text-slate-500 text-[11px]">Any operational issue or question is addressed within 12 working hours. Guaranteed.</span>
            </div>

            <div className="p-4 bg-[#fdfff9] rounded-2xl border border-[#D9E8CA] space-y-1">
              <span className="font-bold text-[#28371B] block">🤝 Evolving With Your Feedback</span>
              <span className="text-slate-500 text-[11px]">We ship improvements weekly based on your exact teaching and batch needs.</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#D9E8CA]">
            <span className="text-xs font-bold text-[#28371B]">
              Want to see how TutoLink can work for your specific coaching setup?
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-xs shadow-xs transition flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Talk Directly With Us</span>
            </a>
          </div>

        </div>
      </section>

      {/* 5. FINAL CONVERSION CTA (Matching new-tuto lines 769-800) */}
      <section className="px-5 lg:px-8 max-w-6xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-[#28371B] via-[#4D6736] to-[#7B9D60] text-white shadow-2xl text-center space-y-6 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-bold text-amber-200">
            <Sparkles size={14} />
            <span>Ready to Modernize Your Coaching Institute?</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight max-w-2xl mx-auto leading-tight font-heading">
            Give Your Institute the Technology Advantage It Deserves.
          </h2>

          <p className="text-white/80 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-medium">
            Fair, transparent subscription tailored to your student strength with 0% commission. Includes a 14-day free risk-free trial.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={onOpenDemoModal}
              className="px-7 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-black shadow-lg transition flex items-center gap-2"
            >
              <span>Book a Free Live Demo</span>
              <ArrowRight size={15} />
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/30 text-white text-xs sm:text-sm font-bold transition"
            >
              How Pricing Works
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
