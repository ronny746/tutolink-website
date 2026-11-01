import React, { useState } from 'react';
import { 
  Monitor, 
  Video, 
  IndianRupee, 
  Smartphone, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Check, 
  MessageCircle, 
  Clock, 
  Lock, 
  BarChart3, 
  Users, 
  FileText, 
  Building2, 
  Play,
  FileCheck,
  UserCheck,
  MessageSquare,
  Mic,
  BookOpen,
  Trophy,
  Target,
  Boxes,
  Globe,
  ShoppingCart,
  ShieldAlert,
  Flame,
  Zap
} from 'lucide-react';

export default function FeaturesPage({ onOpenDemoModal, onNavigate }) {
  const [filterTab, setFilterTab] = useState('all');

  const mainFeatures = [
    {
      id: "cbt",
      tag: "CORE 01",
      badge: "CBT Exams",
      title: "Real NTA Computer Exam Engine",
      icon: Monitor,
      color: "emerald",
      points: [
        "Exact NTA layout for JEE Main, NEET & CUET",
        "4-Color question palette (Answered, Review, Not Visited)",
        "Instant scorecards, percentiles & LaTeX solutions",
        "Fullscreen lock & tab-switch anti-cheat alerts"
      ],
      demoLink: "student",
      demoAction: "Test Exam Player"
    },
    {
      id: "fees",
      tag: "CORE 02",
      badge: "Fee Automation",
      title: "WhatsApp Fee Collection & 1-Tap UPI",
      icon: IndianRupee,
      color: "amber",
      points: [
        "Automated polite WhatsApp fee due reminders",
        "1-Tap UPI payments (GPay, PhonePe, Paytm, BHIM)",
        "0% Commission — 100% money direct to your account",
        "Instant stamped PDF fee receipts for parents"
      ],
      demoLink: "parent",
      demoAction: "See Parent Fees"
    },
    {
      id: "live",
      tag: "CORE 03",
      badge: "Live Video",
      title: "HD Live Lectures & Revision Library",
      icon: Video,
      color: "blue",
      points: [
        "Works smoothly even on standard mobile internet",
        "Automatic cloud class recording for 24/7 revision",
        "Dynamic on-screen roll number anti-leak watermark",
        "Interactive whiteboard, screen share & live chat"
      ],
      demoLink: "teacher",
      demoAction: "Launch Live Studio"
    },
    {
      id: "app",
      tag: "CORE 04",
      badge: "Your Brand",
      title: "Your Own Branded Android App",
      icon: Smartphone,
      color: "purple",
      points: [
        "Your logo, app icon & color theme on Google Play",
        "Your custom web link (classes.yourcoaching.com)",
        "Zero competitor ads or outside branding shown",
        "Instant push notifications for tests & announcements"
      ],
      demoLink: "student",
      demoAction: "View Mobile App"
    },
    {
      id: "attendance",
      tag: "CORE 05",
      badge: "Attendance",
      title: "5-Second Attendance & Absent Alerts",
      icon: UserCheck,
      color: "teal",
      points: [
        "Mark whole batch attendance in under 5 seconds",
        "Instant WhatsApp absent alert sent to parents",
        "Visual attendance % tracking for every student",
        "Reduces student bunking and builds parent trust"
      ],
      demoLink: "parent",
      demoAction: "Check Parent Desk"
    },
    {
      id: "admin",
      tag: "CORE 06",
      badge: "Director Desk",
      title: "Director Command Center & Batch Matrix",
      icon: Building2,
      color: "slate",
      points: [
        "Complete overview of active students, tests & fees",
        "Staff role permissions (Faculty, Accountant, Typist)",
        "Multi-branch management under a single login",
        "1-Click Excel student roster import & export"
      ],
      demoLink: "admin",
      demoAction: "Open Director Desk"
    }
  ];

  const additionalTools = [
    {
      title: "Voice & Photo Doubts Desk",
      category: "Doubt Solving",
      icon: Mic,
      desc: "Students record voice notes or upload photo doubts; teachers reply with audio or LaTeX."
    },
    {
      title: "Batch Chats & Live Polls",
      category: "Class Engagement",
      icon: MessageSquare,
      desc: "Official announcement channels, peer batch groups, and interactive classroom polls."
    },
    {
      title: "Protected PDF Study Materials",
      category: "Notes Library",
      icon: BookOpen,
      desc: "In-browser secured PDF reader with download and screenshot blocking to stop leaks."
    },
    {
      title: "60-Second AI Question Paper Maker",
      category: "AI Automation",
      icon: Zap,
      desc: "Auto-generates balanced JEE/NEET papers (40% Easy, 40% Med, 20% Hard) with solutions."
    },
    {
      title: "Daily Practice Problems (DPP)",
      category: "Daily Homework",
      icon: Target,
      desc: "15-minute daily practice problem sheets with study streak counters to build daily discipline."
    },
    {
      title: "Self-Paced Topic Practice",
      category: "Exam Prep",
      icon: FileCheck,
      desc: "Topic-wise MCQ drills with instant right/wrong green/red validation and bookmarked questions."
    },
    {
      title: "Weakness Diagnostic Heatmaps",
      category: "Analytics",
      icon: BarChart3,
      desc: "Visual analytics showing subject-wise weak chapters so teachers know where to help."
    },
    {
      title: "Batch Leaderboards & Ranks",
      category: "Motivation",
      icon: Trophy,
      desc: "Healthy peer competition with All-India ranks, percentile scorecards, and topper badges."
    },
    {
      title: "Walk-in Inquiry & Admissions CRM",
      category: "Growth & Sales",
      icon: Users,
      desc: "Track new student inquiries, follow-up dates, demo classes, and counselor assignments."
    },
    {
      title: "Public Scholarship & Talent Tests",
      category: "Lead Capture",
      icon: Globe,
      desc: "Conduct open online talent search exams with public links (/e/[id]) to attract new admissions."
    },
    {
      title: "Online Course Sales Store",
      category: "Direct Sales",
      icon: ShoppingCart,
      desc: "Public course sales pages (/course/[id]) with multi-validity tiers and instant UPI checkout."
    },
    {
      title: "Books, Uniforms & Inventory Store",
      category: "Operations",
      icon: Boxes,
      desc: "Track printed modules, bags, uniforms, OMR sheets, and RFID student ID cards with stock alerts."
    },
    {
      title: "Single-Tab Anti-Sharing Lock",
      category: "Security",
      icon: ShieldAlert,
      desc: "Prevents multiple students from sharing a single paid login across different phones or tabs."
    },
    {
      title: "Live Exam WebCam & Tab Proctoring",
      category: "Integrity",
      icon: Lock,
      desc: "Live proctor monitor showing student webcam snapshots and tab-switch cheating violations."
    },
    {
      title: "Custom Discount Coupon Generator",
      category: "Marketing",
      icon: Flame,
      desc: "Create flat-amount or percentage-off promo coupon codes with expiry dates and usage limits."
    },
    {
      title: "Your Private Question Bank Vault",
      category: "Question Vault",
      icon: FileText,
      desc: "Upload and organize your coaching's questions in Word (.docx) or Excel with full LaTeX formula support."
    }
  ];

  const roleSummary = [
    {
      role: "Directors & Owners",
      badge: "Control & Profit",
      icon: Building2,
      points: [
        "100% White-labeled under your brand",
        "0% Commission on student fees",
        "Inquiry CRM & multi-branch matrix",
        "Direct WhatsApp software support"
      ]
    },
    {
      role: "Teachers & Faculty",
      badge: "Save 15+ Hours/Week",
      icon: Users,
      points: [
        "Zero manual paper typing or checking",
        "Auto-graded NTA computer exams",
        "5-Second 1-tap batch attendance",
        "Voice note doubt resolution desk"
      ]
    },
    {
      role: "Students",
      badge: "Top Exam Rank Practice",
      icon: Monitor,
      points: [
        "Authentic NTA computer test practice",
        "24/7 video revision batch library",
        "Daily practice sheets with solutions",
        "Ask doubts with audio and photos"
      ]
    },
    {
      role: "Parents",
      badge: "100% Peace of Mind",
      icon: ShieldCheck,
      points: [
        "Instant WhatsApp absent alerts",
        "Clear test score & progress graphs",
        "1-Tap UPI fee payments in 10s",
        "Official stamped fee receipts PDF"
      ]
    }
  ];

  const whatsappDirectUrl = "https://wa.me/917052422066?text=" + encodeURIComponent("Hi TutoLink Team, I want to see a live demo of all features for my coaching institute.");

  return (
    <div className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* 1. Header: Short, Crisp, No Fluff */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECF4E2] border border-[#C1DAB0] text-xs font-black uppercase text-[#638249] tracking-wider shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Complete Coaching Operating System</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-[#28371B] font-heading tracking-tight leading-tight">
          Every Feature You Need. <br className="hidden sm:inline" />
          <span className="relative inline-block text-[#28371B]">
            Zero Unnecessary Complications.
            <svg className="absolute -bottom-2 left-0 w-full h-2.5 text-[#7B9D60]/30 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <p className="text-xs sm:text-sm text-[#5A7446] font-medium leading-relaxed max-w-xl mx-auto">
          Fast to learn, built for Indian coaching institutes and tutors. Start with the basics, expand anytime.
        </p>

        {/* 4 Micro Trust Badges */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-bold text-[#5A7446]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#7B9D60]" />
            <span>2-Hour Setup</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#7B9D60]" />
            <span>0% Commission</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#7B9D60]" />
            <span>100% Your Brand</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#7B9D60]" />
            <span>12-Hour Support</span>
          </span>
        </div>
      </div>

      {/* 2. SECTION 1: THE 6 CORE SHOWSTOPPER ENGINES */}
      <div className="space-y-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between border-b border-[#D9E8CA] pb-3">
          <div>
            <span className="text-[10px] font-black uppercase text-[#638249] tracking-wider block">
              Core Showstoppers
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#28371B] font-heading">
              The 6 Primary Pillars
            </h2>
          </div>
          <button
            onClick={() => onNavigate('demo')}
            className="text-xs font-black text-[#638249] hover:text-[#28371B] flex items-center gap-1 cursor-pointer"
          >
            <span>Try Live Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {mainFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div 
                key={feat.id}
                className="bg-white rounded-3xl p-6 border border-[#D9E8CA] hover:border-[#7B9D60] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#D9E8CA]/60">
                    <div className="w-10 h-10 rounded-2xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#ECF4E2] text-[#638249] border border-[#C1DAB0]">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-[#28371B] font-heading leading-snug">
                    {feat.title}
                  </h3>

                  <div className="space-y-2 pt-1 text-xs text-[#28371B] font-semibold">
                    {feat.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#7B9D60] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#D9E8CA]/60">
                  <button
                    onClick={() => onNavigate('demo')}
                    className="w-full py-2 px-3 rounded-xl bg-[#FAFCF9] hover:bg-[#ECF4E2] text-[#28371B] hover:text-[#638249] border border-[#D9E8CA] text-xs font-black transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Play className="w-3 h-3 text-[#7B9D60] fill-[#7B9D60]" />
                    <span>{feat.demoAction}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. SECTION 2: ALL OTHER BUILT-IN POWER TOOLS (Clean Title Grid) */}
      <div className="space-y-6 max-w-6xl mx-auto pt-4">
        <div className="border-b border-[#D9E8CA] pb-3">
          <span className="text-[10px] font-black uppercase text-[#638249] tracking-wider block">
            Everything Included
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#28371B] font-heading">
            16 Additional Built-in Power Features
          </h2>
          <p className="text-xs text-[#5A7446] font-medium pt-0.5">
            No expensive third-party plugins needed. Every tool below is already active in your portal:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {additionalTools.map((tool, idx) => {
            const ToolIcon = tool.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-[#D9E8CA] shadow-xs hover:border-[#7B9D60]/70 hover:shadow-sm transition space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center">
                      <ToolIcon className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-md bg-[#FAFCF9] text-[#5A7446] border border-[#D9E8CA]">
                      {tool.category}
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-black text-[#28371B] font-heading leading-snug">
                    {tool.title}
                  </h4>

                  <p className="text-[11px] text-[#5A7446] font-medium leading-relaxed">
                    {tool.desc}
                  </p>
                </div>

                <div className="pt-2 text-[10px] font-black text-[#638249] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#7B9D60]" />
                  <span>Active in Portal</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. SECTION 3: ROLE-BASED QUICK BREAKDOWN (Who Gets What) */}
      <div className="max-w-6xl mx-auto space-y-6 pt-6">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-[10px] font-black uppercase text-[#638249] tracking-wider block">
            Unified Workflow
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#28371B] font-heading">
            Built For Everyone In Your Coaching
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {roleSummary.map((r, i) => {
            const RoleIcon = r.icon;
            return (
              <div 
                key={i} 
                className="bg-white rounded-3xl p-5 border border-[#D9E8CA] shadow-xs space-y-3.5 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="w-9 h-9 rounded-2xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center font-bold">
                    <RoleIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase text-[#638249] tracking-wider block">
                      {r.badge}
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-[#28371B] font-heading">
                      {r.role}
                    </h3>
                  </div>

                  <div className="space-y-1.5 pt-1 text-xs text-[#28371B] font-semibold">
                    {r.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-1.5">
                        <Check className="w-3 h-3 text-[#7B9D60] flex-shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-tight">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. BOTTOM CTA: High-Converting, Direct & Action-Focused */}
      <div className="max-w-5xl mx-auto rounded-3xl p-7 sm:p-11 bg-gradient-to-br from-[#28371B] via-[#4D6736] to-[#7B9D60] text-white text-center space-y-5 shadow-xl relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-black text-amber-200">
          <Sparkles size={13} />
          <span>Launch Your Coaching in Under 2 Hours</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black font-heading text-white max-w-xl mx-auto leading-tight">
          Ready to See All These Features Live in Action?
        </h3>

        <p className="text-xs sm:text-sm text-white/85 max-w-lg mx-auto font-medium leading-relaxed">
          No signups or credit cards needed. Click below to test all portals right in your browser.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('demo')}
            className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-slate-950" />
            <span>Try Live Demo (No Signup)</span>
          </button>

          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
}
