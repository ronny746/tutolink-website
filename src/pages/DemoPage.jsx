import React from 'react';
import { 
  Building2, 
  Users, 
  GraduationCap, 
  User, 
  ExternalLink, 
  Sparkles, 
  Check, 
  ShieldCheck, 
  MessageCircle, 
  ArrowRight,
  Zap,
  Sliders,
  Lock,
  FileText,
  BookOpen,
  HeartHandshake
} from 'lucide-react';

export default function DemoPage({ onOpenDemoModal }) {
  const demoAppUrl = import.meta.env.VITE_APP_URL || "https://tutolink.in";

  const portals = [
    {
      id: 'admin',
      role: 'Director / Owner',
      badge: 'Full Command Center',
      tagColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
      icon: Building2,
      headline: 'Director Desk',
      sub: 'Total control over student batches, fee collections, staff permissions, and dynamic settings.',
      highlights: [
        'Live student rosters & fee ledger (1-Click Excel import)',
        'Upload your own private question bank in Word or Excel',
        'Dynamic control toggles: Turn off student peer chats, restrict DPP creation',
        'Staff roles: Director, Faculty, Typist, Accountant & multi-branch',
        'WhatsApp fee reminders with 1-tap UPI & official stamped receipts'
      ],
      link: `${demoAppUrl}/skd-admin?demo=true`,
      btnText: 'Launch Director Portal',
      btnColor: 'bg-[#7B9D60] hover:bg-[#638249] text-white',
      featured: true
    },
    {
      id: 'teacher',
      role: 'Teacher / Faculty',
      badge: 'Classroom & Academics',
      tagColor: 'bg-amber-100 text-amber-900 border-amber-200',
      icon: Users,
      headline: 'Teacher Workspace',
      sub: 'Conduct live interactive lectures, mark attendance in 5 seconds, and grade exams.',
      highlights: [
        'Live class studio with anti-leak student watermark & whiteboard',
        'Fast DPP & CBT exam maker from your coaching question bank',
        'Live proctor monitor (webcam snapshots & tab-switch alerts)',
        'Audio voice note & photo doubt resolution desk',
        '5-Second 1-tap batch attendance with automated absent alerts'
      ],
      link: `${demoAppUrl}/skd-teacher?demo=true`,
      btnText: 'Launch Teacher Portal',
      btnColor: 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-black',
      featured: false
    },
    {
      id: 'student',
      role: 'Student View',
      badge: 'Real Exam & Learning',
      tagColor: 'bg-blue-100 text-blue-900 border-blue-200',
      icon: GraduationCap,
      headline: 'Student & Exam Portal',
      sub: 'Practice on real computer exams, access protected study materials, and watch class recordings.',
      highlights: [
        'Real NTA computer exam screen (+4 / -1 rules, palettes & timers)',
        'Protected Study Materials Bank (formula sheets & chapter PDFs)',
        '24/7 video lecture library with past class recordings',
        'Daily Practice Problems (DPP) & self-paced topic drills with streaks',
        'Ask doubts with in-browser voice note audio & photo uploads',
        'Official batch announcement channel & interactive class polls'
      ],
      link: `${demoAppUrl}/student/dashboard?demo=true`,
      btnText: 'Launch Student Portal',
      btnColor: 'bg-[#28371B] hover:bg-[#3C5229] text-white',
      featured: false
    },
    {
      id: 'parent',
      role: 'Parent Desk',
      badge: 'Trust & Peace of Mind',
      tagColor: 'bg-purple-100 text-purple-900 border-purple-200',
      icon: User,
      headline: 'Parent Transparency Desk',
      sub: 'Build deep parent trust with instant WhatsApp alerts, clear report cards, and 1-tap fee payments.',
      highlights: [
        'Instant WhatsApp alert whenever child enters class or is absent',
        'Transparent visual report cards with subject percentiles & ranks',
        '1-Tap UPI fee payments with instant stamped PDF receipts',
        'Upcoming test schedules, exam dates & direct teacher contacts'
      ],
      link: `${demoAppUrl}/parent/dashboard?demo=true`,
      btnText: 'Launch Parent Portal',
      btnColor: 'bg-slate-800 hover:bg-slate-900 text-white',
      featured: false
    }
  ];

  const dynamicControls = [
    {
      icon: MessageCircle,
      title: "Student Chat & Communication Controls",
      tag: "Discipline",
      desc: "Prevent classroom distractions. The director can disable 1-on-1 private messaging between students, restricting chats to broadcast-only channels or teacher doubts."
    },
    {
      icon: Sliders,
      title: "Flexible DPP & Test Creation Access",
      tag: "Academic Control",
      desc: "Decide who builds practice tests. You can allow teachers only to generate DPPs, or grant students self-paced practice access from your institute's question vault."
    },
    {
      icon: FileText,
      title: "100% Private Question Bank Ownership",
      tag: "Your Content",
      desc: "We don't force generic questions. Upload your own coaching question bank in Word or Excel with LaTeX formulas. Your questions stay strictly private to your institute."
    },
    {
      icon: Lock,
      title: "Automated Fee-Based Gatekeeping",
      tag: "Revenue Protection",
      desc: "Protect institute revenue automatically. Instantly lock mock exams, live lecture streams, or study material downloads if student installment fees are overdue."
    },
    {
      icon: HeartHandshake,
      title: "Founder-Level Custom Engineering",
      tag: "We Build What You Need",
      desc: "As software founders who write the code, we can customize feature switches, grading formats, and workflows tailored to your coaching's exact requirements."
    }
  ];

  const whatsappUrl = "https://wa.me/917052422066?text=" + encodeURIComponent("Hi TutoLink Team, I tested the live demo on your website and want to discuss custom settings for my coaching.");

  return (
    <div className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* 1. Direct, Action-Oriented Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECF4E2] border border-[#C1DAB0] text-xs font-black text-[#638249] shadow-xs">
          <Zap size={14} className="text-[#7B9D60] fill-[#7B9D60]" />
          <span>1-Click Live Product Sandbox</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-[#28371B] font-heading tracking-tight leading-tight">
          Click Any Portal to Open <br className="hidden sm:inline" />
          <span className="relative inline-block text-[#28371B]">
            The Real Platform.
            <svg className="absolute -bottom-2 left-0 w-full h-2.5 text-[#7B9D60]/30 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <p className="text-xs sm:text-sm text-[#5A7446] font-medium leading-relaxed max-w-2xl mx-auto">
          No signups. No passwords. No telemarketer calls. Tap any role below to launch the live system preloaded with real sample batches:
        </p>
      </div>

      {/* 2. The 4 Direct 1-Click Launchpads (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {portals.map((portal) => {
          const Icon = portal.icon;
          return (
            <div 
              key={portal.id}
              className={`bg-white rounded-3xl p-6 border transition-all duration-200 flex flex-col justify-between space-y-5 hover:-translate-y-1 hover:shadow-lg ${
                portal.featured 
                  ? 'border-2 border-[#7B9D60] shadow-md relative' 
                  : 'border-[#D9E8CA] shadow-xs hover:border-[#7B9D60]'
              }`}
            >
              {portal.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7B9D60] text-white text-[10px] font-black uppercase px-3 py-0.5 rounded-full shadow-xs tracking-wider">
                  ⭐ MOST POPULAR
                </div>
              )}

              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center font-bold shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border ${portal.tagColor}`}>
                    {portal.badge}
                  </span>
                </div>

                {/* Title & One-Liner */}
                <div>
                  <span className="text-[10px] font-black uppercase text-[#638249] tracking-wider block">
                    {portal.role}
                  </span>
                  <h3 className="text-lg font-black text-[#28371B] font-heading leading-snug">
                    {portal.headline}
                  </h3>
                </div>

                <p className="text-xs text-[#5A7446] font-medium leading-relaxed">
                  {portal.sub}
                </p>

                {/* Concrete Core Feature Bullets */}
                <div className="space-y-2 pt-1 border-t border-[#D9E8CA]/60 text-xs text-[#28371B] font-semibold">
                  {portal.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#7B9D60] flex-shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-tight">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Big Direct Launcher Button */}
              <div className="pt-2">
                <a
                  href={portal.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-black shadow-md transition flex items-center justify-center gap-2 cursor-pointer ${portal.btnColor}`}
                >
                  <span>{portal.btnText}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <span className="text-[10px] text-center text-[#5A7446] font-bold block pt-1.5">
                  ⚡ Auto-logged in (No password needed)
                </span>
              </div>

            </div>
          );
        })}
      </div>

      {/* 3. 100% DYNAMIC & CONFIGURABLE: YOU CONTROL EVERY SINGLE PERMISSION */}
      <div className="max-w-6xl mx-auto space-y-8 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECF4E2] border border-[#C1DAB0] text-xs font-black uppercase text-[#638249] tracking-wider shadow-xs">
            <Sliders className="w-3.5 h-3.5" />
            <span>100% Dynamic &amp; Customizable</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#28371B] font-heading tracking-tight">
            You Control Every Permission. We Adapt to Your Rules.
          </h2>
          <p className="text-xs sm:text-sm text-[#5A7446] font-medium leading-relaxed">
            No two coaching institutes operate the same way. Every single feature can be toggled on or off by the Director, or customized by our engineering founders:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {dynamicControls.map((ctrl, i) => {
            const CtrlIcon = ctrl.icon;
            return (
              <div 
                key={i}
                className="bg-white rounded-3xl p-6 border border-[#D9E8CA] shadow-xs hover:border-[#7B9D60] hover:shadow-sm transition space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center font-bold">
                      <CtrlIcon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-[#FAFCF9] text-[#638249] border border-[#D9E8CA]">
                      {ctrl.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-[#28371B] font-heading leading-snug">
                    {ctrl.title}
                  </h3>

                  <p className="text-xs text-[#5A7446] font-medium leading-relaxed">
                    {ctrl.desc}
                  </p>
                </div>

                <div className="pt-2 text-[11px] font-black text-[#638249] flex items-center gap-1.5 border-t border-[#D9E8CA]/60">
                  <Check className="w-3.5 h-3.5 text-[#7B9D60]" />
                  <span>Dynamic Switch Enabled</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Safe Sandbox Guarantee Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#D9E8CA] p-5 sm:p-7 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-10 h-10 rounded-2xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-black text-[#28371B]">
              100% Free Live Sandbox Guarantee
            </h4>
            <p className="text-[11px] text-[#5A7446] font-medium leading-relaxed">
              Feel free to create test batches, attempt exams, or generate DPPs. All demo test data safely resets every 24 hours.
            </p>
          </div>
        </div>

        <button
          onClick={onOpenDemoModal}
          className="px-5 py-2.5 rounded-xl bg-[#ECF4E2] hover:bg-[#D9E8CA] text-[#28371B] text-xs font-black transition whitespace-nowrap cursor-pointer"
        >
          Want a Guided Call Instead?
        </button>
      </div>

      {/* 5. Bottom Quick Conversion Strip */}
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#28371B] via-[#4D6736] to-[#7B9D60] rounded-3xl p-7 sm:p-11 text-white shadow-xl text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
          Like What You See in the Live Demo?
        </h3>
        <p className="text-xs sm:text-sm text-white/85 max-w-lg mx-auto font-medium leading-relaxed">
          Get your coaching's own private portal with your logo, brand colors, and student batches configured in under 2 hours. Free 14-day trial included.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenDemoModal}
            className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-md transition cursor-pointer"
          >
            Claim 14-Day Free Private Setup
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat With Engineers on WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
}
