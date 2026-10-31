import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  GraduationCap, 
  User, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Play, 
  Monitor, 
  ShieldCheck, 
  Lock, 
  Unlock,
  MessageCircle,
  HelpCircle,
  Clock,
  Award,
  Video,
  FileCheck2
} from 'lucide-react';

export default function DemoPage({ onOpenDemoModal }) {
  const [activeRole, setActiveRole] = useState('admin');

  const demoAppUrl = import.meta.env.VITE_APP_URL || "https://app.tutolink.in";

  const roles = [
    {
      id: 'admin',
      name: 'Institute Director / Admin',
      badge: 'Full Operational Control',
      icon: Building2,
      subtitle: 'Complete central command center for batches, finances, exams, and staff permissions',
      keyModules: [
        { title: 'AI Exam & Paper Generator', desc: 'Create balanced JEE/NEET test papers in 60s with automatic LaTeX solutions' },
        { title: 'Automated Fee Desk & Receipts', desc: 'Installment schedules, WhatsApp due reminders, and instant stamped PDF receipts' },
        { title: 'Multi-Batch & Branch Control', desc: 'Allocate teachers to batches (offline, online, or hybrid) with custom time tables' },
        { title: 'Question Bank Management', desc: '50,000+ pre-tagged questions with one-click chapter search and difficulty filters' }
      ],
      demoLink: `${demoAppUrl}/skd-admin?demo=true`,
      directAction: 'Launch Director Workspace'
    },
    {
      id: 'teacher',
      name: 'Faculty & Teacher',
      badge: 'Classroom & Academics',
      icon: Users,
      subtitle: 'Interactive live teaching, rapid DPP generation, and fast student doubt clearing',
      keyModules: [
        { title: 'HD Live Class Studio', desc: 'Low-latency live lectures automatically archived to batch video playlists' },
        { title: '60-Second DPP Auto-Maker', desc: 'Generate 15-minute daily practice problem sheets directly from tagged question banks' },
        { title: 'Photo & Audio Doubt Desk', desc: 'Review doubts batch-wise and reply with annotated solution images or voice notes' },
        { title: 'Smart Batch Attendance', desc: 'Take attendance in seconds with automatic WhatsApp absent notifications to parents' }
      ],
      demoLink: `${demoAppUrl}/skd-teacher?demo=true`,
      directAction: 'Launch Teacher Workspace'
    },
    {
      id: 'student',
      name: 'Student Portal & Mobile App',
      badge: 'Real Exam Preparation',
      icon: GraduationCap,
      subtitle: 'NTA-grade computer-based tests, timed practice streaks, and revision video archives',
      keyModules: [
        { title: 'Authentic NTA CBT Simulator', desc: 'Real JEE/NEET test screen with question status palette, timers, and +4/-1 marking' },
        { title: 'Batch Lecture Video Library', desc: 'Encrypted revision lectures protected against screen recording and unauthorized downloads' },
        { title: 'Daily Practice DPP Streaks', desc: 'Attempt daily chapter practice tests and track topic-wise speed and accuracy' },
        { title: '24/7 Doubt Ticket Submission', desc: 'Snap a picture of a difficult question and receive fast solutions from faculty' }
      ],
      demoLink: `${demoAppUrl}/student/dashboard?demo=true`,
      directAction: 'Launch Student Experience'
    },
    {
      id: 'parent',
      name: 'Parent Transparency Desk',
      badge: 'Parent Trust & Accountability',
      icon: User,
      subtitle: 'Complete visibility into child attendance, test marks, and instant fee receipts',
      keyModules: [
        { title: 'Real-Time Attendance Alerts', desc: 'Instant WhatsApp notification whenever a student enters class or is marked absent' },
        { title: 'Visual Performance Report Cards', desc: 'Follow All India Ranks, percentiles, and subject strength trajectory over time' },
        { title: '1-Click UPI Fee Payments', desc: 'Pay upcoming tuition installments securely via Google Pay, PhonePe, UPI, or Cards' },
        { title: 'Digital Fee Receipt Ledger', desc: 'Download official stamped fee receipts anytime for accounting or taxation records' }
      ],
      demoLink: `${demoAppUrl}/parent/dashboard?demo=true`,
      directAction: 'Launch Parent Portal'
    }
  ];

  const currentRole = roles.find(r => r.id === activeRole) || roles[0];
  const CurrentIcon = currentRole.icon;

  const whatsappUrl = "https://wa.me/917052422066?text=" + encodeURIComponent("Hi TutoLink Team, I tested the demo on your website and want to set this up for my coaching.");

  return (
    <div className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECF4E2] border border-[#C1DAB0] text-xs font-black uppercase text-[#638249] tracking-wider shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Live Product Sandbox</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-[#28371B] font-heading tracking-tight leading-tight">
          Test-Drive TutoLink Live <br className="hidden sm:inline" />
          <span className="relative inline-block text-[#28371B]">
            Without Sharing Your Personal Info.
            <svg className="absolute -bottom-2 left-0 w-full h-2.5 text-[#7B9D60]/30 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <p className="text-sm sm:text-base text-[#5A7446] font-medium leading-relaxed">
          We respect coaching directors. We don't hide our product behind aggressive sales tele-callers. Choose any role below to experience the real software running with live NEET &amp; JEE sample data:
        </p>
      </div>

      {/* 4 Role Selector Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
        {roles.map((r) => {
          const Icon = r.icon;
          const isActive = activeRole === r.id;
          return (
            <button
              key={r.id}
              onClick={() => setActiveRole(r.id)}
              className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 ${
                isActive
                  ? 'bg-[#28371B] text-white border-[#28371B] shadow-md scale-102'
                  : 'bg-white text-[#28371B] border-[#D9E8CA] hover:border-[#7B9D60] hover:bg-[#F6F9F3]'
              }`}
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                isActive ? 'bg-[#7B9D60] text-white' : 'bg-[#ECF4E2] text-[#638249]'
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-black font-heading leading-tight">{r.name}</span>
            </button>
          );
        })}
      </div>

      {/* Deep Role Workbench Presentation Box */}
      <div className="bg-white rounded-3xl border border-[#D9E8CA] p-6 sm:p-10 shadow-sm space-y-8 max-w-5xl mx-auto">
        
        {/* Top Role Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#D9E8CA]/60">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center shadow-xs flex-shrink-0">
              <CurrentIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase text-[#638249] tracking-wider block">
                {currentRole.badge}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#28371B] font-heading">
                {currentRole.name}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={currentRole.demoLink}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-[#7B9D60] hover:bg-[#638249] text-white text-xs sm:text-sm font-black shadow-md transition flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{currentRole.directAction}</span>
            </a>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#5A7446] font-medium leading-relaxed">
          {currentRole.subtitle}
        </p>

        {/* 4 Feature Modules Grid for Selected Role */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {currentRole.keyModules.map((mod, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-[#FAFCF9] border border-[#D9E8CA] space-y-1 hover:border-[#7B9D60] transition">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7B9D60] flex-shrink-0" />
                <h3 className="text-xs sm:text-sm font-black text-[#28371B] font-heading">
                  {mod.title}
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs text-[#5A7446] leading-relaxed font-medium pl-6">
                {mod.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Sandbox Guarantee Strip */}
        <div className="bg-[#ECF4E2]/40 p-4 rounded-2xl border border-[#D9E8CA] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-[#5A7446]">
            <ShieldCheck className="w-5 h-5 text-[#7B9D60] flex-shrink-0" />
            <span>
              <strong className="text-[#28371B]">Safe Sandbox Guarantee:</strong> You can create test batches, generate sample tests, and edit data. Data wipes automatically every 24 hours.
            </span>
          </div>

          <button
            onClick={onOpenDemoModal}
            className="text-xs font-bold text-[#638249] hover:text-[#28371B] whitespace-nowrap flex items-center gap-1"
          >
            <span>Need a custom walkthrough?</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Conversion Banner: Ready to Setup Your Institute */}
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#28371B] via-[#4D6736] to-[#7B9D60] rounded-3xl p-6 sm:p-10 text-white shadow-xl text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
          Ready to Claim Your Institute's Branded Platform?
        </h3>
        <p className="text-xs sm:text-sm text-white/85 max-w-xl mx-auto font-medium">
          We configure your coaching logo, brand color theme, and subdomain in under 10 minutes. 100% free data migration of your existing students.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenDemoModal}
            className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-md transition"
          >
            Claim Your Institute Portal
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3.5 rounded-xl bg-white text-[#28371B] hover:bg-gray-100 font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Chat on WhatsApp (+91 70524 22066)</span>
          </a>
        </div>
      </div>

    </div>
  );
}

