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
  Play, 
  Clock, 
  HeartHandshake,
  Check,
  FileCheck,
  Phone,
  HelpCircle,
  Quote,
  AlertCircle,
  TrendingUp,
  Flame
} from 'lucide-react';

export default function HomePage({ onNavigate, onOpenDemoModal }) {
  // Live Demo Sandbox Role
  const [activeDemoRole, setActiveDemoRole] = useState('admin');

  // Interactive Simple Estimator
  const [studentCount, setStudentCount] = useState(120);
  const [needsLiveStreaming, setNeedsLiveStreaming] = useState(false);
  const [needsBrandedApp, setNeedsBrandedApp] = useState(false);

  const demoAppUrl = import.meta.env.VITE_APP_URL || "https://tutolink.in";

  // Calculate estimated price
  const calculateEstimatedPrice = () => {
    let base = 1299;
    if (studentCount > 300) {
      base = 2499;
    } else if (studentCount > 150) {
      base = 1799;
    }

    let liveAddon = needsLiveStreaming ? 1200 : 0;
    let appAddon = needsBrandedApp ? 1500 : 0;

    return base + liveAddon + appAddon;
  };

  const generateWhatsAppQuoteUrl = () => {
    let msg = `Hi TutoLink Team, I calculated my coaching requirements on your website:\n`;
    msg += `• Total Students: ${studentCount}\n`;
    msg += `• Core Toolkit (Computer Tests + DPPs + WhatsApp Fees): Included\n`;
    msg += `• Live Video Classes: ${needsLiveStreaming ? 'Yes' : 'Not needed right now'}\n`;
    msg += `• Branded Mobile App: ${needsBrandedApp ? 'Yes' : 'Web portal only'}\n`;
    msg += `• Estimated Plan: ~₹${calculateEstimatedPrice().toLocaleString('en-IN')}/mo\n`;
    msg += `Please send me the written proposal and details for the 14-day free trial.`;
    return "https://wa.me/917052422066?text=" + encodeURIComponent(msg);
  };

  const demoRoles = {
    admin: {
      title: "Institute Director & Admin Desk",
      badge: "Complete Institute Control",
      icon: Building2,
      headline: "Everything you need to run your center smoothly — batches, fees, and staff.",
      highlights: [
        "Manage batches (offline, online, or hybrid) with assigned teachers",
        "Polite automated WhatsApp fee reminders with instant stamped PDF receipts",
        "Create real computer-based mock tests with instant auto-checking & rank lists",
        "100% white-labeled under your coaching's name and logo"
      ],
      demoLink: `${demoAppUrl}/skd-admin?demo=true`
    },
    teacher: {
      title: "Teacher & Faculty Workspace",
      badge: "Classroom & Teaching",
      icon: Users,
      headline: "Spend less time checking papers and more time inspiring students.",
      highlights: [
        "Host live video lectures with automatic recording for student revision",
        "Create 15-minute daily practice problem sheets (DPP) in under 60 seconds",
        "Answer student doubt questions with voice notes or annotated photos",
        "Mark batch attendance in 5 seconds with automatic absent alerts to parents"
      ],
      demoLink: `${demoAppUrl}/skd-teacher?demo=true`
    },
    student: {
      title: "Student Mobile & Web Portal",
      badge: "Real Exam Practice",
      icon: GraduationCap,
      headline: "Give your students the exact computer test practice used in JEE & NEET.",
      highlights: [
        "Real NTA computer exam screen with question status colors and timers",
        "Watch past class recordings anytime from home for easy revision",
        "Daily practice tests with step-by-step mathematical solutions",
        "Ask doubt questions directly to teachers with photo uploads"
      ],
      demoLink: `${demoAppUrl}/student/dashboard?demo=true`
    },
    parent: {
      title: "Parent Transparency Desk",
      badge: "Parent Trust & Peace of Mind",
      icon: User,
      headline: "Parents stay informed without having to call your teachers repeatedly.",
      highlights: [
        "Instant WhatsApp alert whenever a child enters class or is marked absent",
        "Clear visual report cards showing test marks, rank, and progress over time",
        "1-click fee payments via UPI (Google Pay, PhonePe, Paytm, BHIM)",
        "Instant official fee receipts saved on mobile for tax records"
      ],
      demoLink: `${demoAppUrl}/parent/dashboard?demo=true`
    }
  };

  const activeRoleData = demoRoles[activeDemoRole];
  const ActiveIcon = activeRoleData.icon;

  const whatsappDirectUrl = "https://wa.me/917052422066?text=" + encodeURIComponent("Hi TutoLink Team, I want to book a live demo and discuss setting up my coaching institute.");

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO SECTION (Simple, Warm, Inspiring) */}
      <section className="relative px-4 pt-28 pb-14 sm:pt-36 sm:pb-20 lg:px-8 border-b border-[#D9E8CA]/70 overflow-hidden bg-gradient-to-b from-[#ECF4E2]/45 via-[#fdfff9] to-[#fdfff9]">
        
        {/* Soft dot pattern */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none" 
          style={{ backgroundImage: "radial-gradient(#7B9D60 1px, transparent 1px)", backgroundSize: "32px 32px" }} 
        />

        <div className="relative mx-auto max-w-4xl text-center space-y-6">
          
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C1DAB0] bg-white px-4 py-1.5 text-xs font-black text-[#638249] shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#7B9D60]" />
            <span>The Smart Platform for Coaching Institutes</span>
          </div>

          {/* Main Headline - Short, Catchy, High Impact */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-[#28371B] tracking-tight font-heading">
            Your Coaching. Your Brand. <br className="hidden sm:inline" />
            <span className="relative inline-block text-[#28371B]">
              Zero Tech Headache.
              <svg className="absolute -bottom-2 left-0 w-full h-2.5 text-[#7B9D60]/30 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Subhead - Short, Single Punchy Sentence */}
          <p className="text-sm sm:text-base text-[#5A7446] max-w-xl mx-auto leading-relaxed font-medium">
            Real computer mock tests, polite WhatsApp fee collection, and live classes — all automated under your coaching's name.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              onClick={() => onOpenDemoModal()}
              className="px-7 py-3.5 rounded-xl bg-[#7B9D60] hover:bg-[#638249] text-white text-xs sm:text-sm font-black shadow-md hover:shadow-lg transition-all flex items-center gap-2 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Book a Free 15-Min Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#demo-sandbox"
              className="px-6 py-3.5 rounded-xl bg-white border border-[#C1DAB0] text-[#28371B] text-xs sm:text-sm font-black hover:bg-[#ECF4E2]/50 transition flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 text-[#7B9D60] fill-[#7B9D60]" />
              <span>Try Live Demo (No Signup Needed)</span>
            </a>
          </div>

          {/* 4 Trust Highlights */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs font-bold text-[#5A7446]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#7B9D60]" />
              <span>14-Day Free Trial</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#7B9D60]" />
              <span>0% Commission on Fees</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#7B9D60]" />
              <span>Your Own Logo &amp; Name</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#7B9D60]" />
              <span>12-Hour Support Commitment</span>
            </span>
          </div>

        </div>
      </section>


      {/* 2. INSPIRING QUOTE CALLOUT */}
      <section className="px-4 lg:px-8 max-w-4xl mx-auto -mt-6 sm:-mt-10 relative z-10">
        <div className="bg-white rounded-2xl border border-[#D9E8CA] p-6 sm:p-8 shadow-sm text-center space-y-3">
          <Quote className="w-6 h-6 text-[#7B9D60] mx-auto opacity-70" />
          <p className="text-sm sm:text-base font-bold text-[#28371B] leading-relaxed italic font-heading">
            “Education is not a mass-market commodity. Real learning happens when a dedicated teacher connects with a student who is known, heard, and guided. We exist to bridge the digital divide for coaching institutes — so dedication defeats corporate scale, and everyone grows better together.”
          </p>
          <span className="text-xs text-[#5A7446] font-extrabold tracking-wide block">
            — TutoLink • Connect to grow better
          </span>
        </div>
      </section>


      {/* 2.5 THE DIGITAL SHIFT & FOMO SECTION (Students Don't Leave Good Teachers) */}
      <section className="px-4 lg:px-8 max-w-6xl mx-auto space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-black uppercase text-amber-900 tracking-wider shadow-xs">
            <Flame className="w-3.5 h-3.5 text-amber-600" />
            <span>The 2026 Education Reality</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#28371B] font-heading tracking-tight leading-tight">
            Students Don’t Leave Good Teachers. <br className="hidden sm:inline" />
            <span className="text-amber-800">They Leave Outdated Systems.</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#5A7446] font-medium leading-relaxed max-w-2xl mx-auto">
            Whether you teach 15 students in a personal tutorial or run a 500-student coaching institute — in today's digital world, great teaching alone is no longer enough. If your coaching is absent on mobile after 7 PM, you are quietly losing students to competitors.
          </p>
        </div>

        {/* 3 Reality Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: The 7 PM Drop-off */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D9E8CA] shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between group">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between pb-3 border-b border-[#D9E8CA]/60">
                <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                  REALITY #1
                </span>
                <span className="text-[11px] font-bold text-amber-800">Evening Study Gap</span>
              </div>

              <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
                <Smartphone className="w-5 h-5 text-amber-700" />
              </div>

              <h3 className="text-base sm:text-lg font-black text-[#28371B] font-heading leading-snug">
                Where do your students go after 7 PM?
              </h3>

              <p className="text-xs text-[#5A7446] leading-relaxed font-medium">
                When classroom doors close, student self-study begins. If you don't offer recorded lecture revisions and phone test series, they open YouTube and rival apps — gradually disconnecting from your coaching.
              </p>
            </div>

            <div className="pt-3 border-t border-[#D9E8CA]/60">
              <div className="flex items-center gap-2 text-[11px] font-bold text-amber-900 bg-amber-50/80 px-3 py-1.5 rounded-xl border border-amber-200/60">
                <AlertCircle className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                <span>78% of students revise via apps every night</span>
              </div>
            </div>
          </div>

          {/* Card 2: Exams Went Computer-Based */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D9E8CA] shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between group">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between pb-3 border-b border-[#D9E8CA]/60">
                <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-[#ECF4E2] text-[#638249] border border-[#C1DAB0]">
                  REALITY #2
                </span>
                <span className="text-[11px] font-bold text-[#638249]">Exam Shift</span>
              </div>

              <div className="w-10 h-10 rounded-2xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center font-bold">
                <FileCheck className="w-5 h-5 text-[#7B9D60]" />
              </div>

              <h3 className="text-base sm:text-lg font-black text-[#28371B] font-heading leading-snug">
                Paper tests can’t prepare for online exams
              </h3>

              <p className="text-xs text-[#5A7446] leading-relaxed font-medium">
                JEE, NEET, CUET, and government exams are 100% computer-based with strict timers and negative marking. Parents refuse to pay full fees for coachings that still hand out xeroxed papers with delayed checking.
              </p>
            </div>

            <div className="pt-3 border-t border-[#D9E8CA]/60">
              <div className="flex items-center gap-2 text-[11px] font-bold text-[#638249] bg-[#ECF4E2]/70 px-3 py-1.5 rounded-xl border border-[#C1DAB0]/60">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7B9D60] flex-shrink-0" />
                <span>NTA &amp; CUET require real computer mock drill</span>
              </div>
            </div>
          </div>

          {/* Card 3: The Tech-Enabled Academy Next Door */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D9E8CA] shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between group">
            <div className="space-y-3.5">
              <div className="flex items-center justify-between pb-3 border-b border-[#D9E8CA]/60">
                <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-blue-100 text-blue-900 border border-blue-200">
                  REALITY #3
                </span>
                <span className="text-[11px] font-bold text-blue-800">Admission Battle</span>
              </div>

              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-800 flex items-center justify-center font-bold">
                <TrendingUp className="w-5 h-5 text-blue-700" />
              </div>

              <h3 className="text-base sm:text-lg font-black text-[#28371B] font-heading leading-snug">
                Tech-ready coachings are taking the admissions
              </h3>

              <p className="text-xs text-[#5A7446] leading-relaxed font-medium">
                When parents compare two local teachers of equal talent, they consistently choose the one offering a dedicated mobile app, transparent WhatsApp reports, and instant fee receipts. Technology creates instant prestige.
              </p>
            </div>

            <div className="pt-3 border-t border-[#D9E8CA]/60">
              <div className="flex items-center gap-2 text-[11px] font-bold text-blue-900 bg-blue-50/80 px-3 py-1.5 rounded-xl border border-blue-200/60">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                <span>85% of parents favor institutes with an app</span>
              </div>
            </div>
          </div>

        </div>

        {/* Wake-Up Conversion Strip */}
        <div className="bg-gradient-to-r from-[#28371B] via-[#3C5229] to-[#28371B] rounded-3xl p-6 sm:p-8 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6 border border-[#4D6736]">
          <div className="space-y-1.5 text-center md:text-left max-w-2xl">
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-300">
              Don’t Lose Your Hard-Earned Reputation
            </span>
            <h4 className="text-base sm:text-xl font-black font-heading leading-snug text-white">
              You built your teaching trust over years. Don't let a lack of software hand your students to competitors.
            </h4>
            <p className="text-xs text-white/80 font-medium">
              Launch your coaching's branded tests, live classes, and WhatsApp updates in under 2 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto flex-shrink-0">
            <button
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Protect Your Batches Free</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </button>
            <a
              href="#modular-architecture"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>See Starting Prices</span>
            </a>
          </div>
        </div>

      </section>


      {/* 3. "START SIMPLE, GROW AT YOUR OWN PACE" (Simple 3-Part Modular Setup) */}
      <section id="modular-architecture" className="px-4 lg:px-8 max-w-6xl mx-auto space-y-12">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECF4E2] border border-[#C1DAB0] text-xs font-black uppercase text-[#638249] tracking-wider shadow-xs">
            <span>Modular &amp; Fair</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#28371B] font-heading tracking-tight">
            Pay For What You Use. <br className="hidden sm:inline" />
            Nothing More.
          </h2>

          <p className="text-xs sm:text-sm text-[#5A7446] font-medium leading-relaxed">
            Start with tests and fee collection. Add live classes or your own mobile app whenever you are ready.
          </p>
        </div>

        {/* 3 Simple Options Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Daily Essentials */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D9E8CA] shadow-sm hover:shadow-md transition space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#D9E8CA]/60">
                <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-[#ECF4E2] text-[#638249] border border-[#C1DAB0]">
                  STEP 1 • ESSENTIALS
                </span>
                <span className="text-xs font-black text-[#7B9D60]">Always Included</span>
              </div>

              <div className="w-10 h-10 rounded-xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center font-bold">
                <FileCheck className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-black text-[#28371B] font-heading">
                Offline Coaching Core
              </h3>

              <p className="text-xs text-[#5A7446] leading-relaxed font-medium">
                The daily toolkit to automate tests, stop manual paper checking, and collect student fees on time.
              </p>

              <div className="space-y-2.5 pt-2 text-xs font-semibold text-[#28371B]">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60] flex-shrink-0 mt-0.5" />
                  <span>Real Computer Tests (NTA screen with +4 / -1 rules)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60] flex-shrink-0 mt-0.5" />
                  <span>Upload Your Question Bank (Word/Excel) &amp; 1-Min Practice Sheet Maker</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60] flex-shrink-0 mt-0.5" />
                  <span>Polite WhatsApp Fee Reminders with 1-Tap UPI Links</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60] flex-shrink-0 mt-0.5" />
                  <span>Official Stamped PDF Fee Receipts for Parents</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60] flex-shrink-0 mt-0.5" />
                  <span>1-Tap Attendance with Instant Absent Alerts to Parents</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D9E8CA]/60 text-[11px] font-bold text-[#638249]">
              ✓ Perfect for offline tuition &amp; exam test centers
            </div>
          </div>

          {/* Card 2: Live Video & Recordings */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#7B9D60] shadow-md transition space-y-5 flex flex-col justify-between relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7B9D60] text-white text-[10px] font-black uppercase px-3 py-0.5 rounded-full shadow-xs tracking-wider">
              ⭐ MOST POPULAR
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#D9E8CA]/60">
                <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                  STEP 2 • LIVE CLASSES
                </span>
                <span className="text-xs font-bold text-[#5A7446]">Add Anytime</span>
              </div>

              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
                <Video className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-black text-[#28371B] font-heading">
                Live Classes &amp; Revision Library
              </h3>

              <p className="text-xs text-[#5A7446] leading-relaxed font-medium">
                Host smooth interactive lectures that save automatically for 24/7 student revision.
              </p>

              <div className="space-y-2.5 pt-2 text-xs font-semibold text-[#28371B]">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60] flex-shrink-0 mt-0.5" />
                  <span>Clear HD Live Classes (Works even on normal mobile internet)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60] flex-shrink-0 mt-0.5" />
                  <span>Automatic Class Recording saved in batch library</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60] flex-shrink-0 mt-0.5" />
                  <span>Anti-Leak Watermark (Shows student roll code on screen)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60] flex-shrink-0 mt-0.5" />
                  <span>Protected PDF Chapter Notes (Prevent unauthorized download)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60] flex-shrink-0 mt-0.5" />
                  <span>Audio Doubt Desk (Students can record voice questions)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D9E8CA]/60 text-[11px] font-bold text-[#638249]">
              ✓ For evening batches &amp; hybrid NEET/JEE coaching
            </div>
          </div>

          {/* Card 3: Your Own Branded App */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#D9E8CA] shadow-sm hover:shadow-md transition space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#D9E8CA]/60">
                <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                  STEP 3 • BRAND POWER
                </span>
                <span className="text-xs font-bold text-[#5A7446]">Growth Scale</span>
              </div>

              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center font-bold">
                <Smartphone className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-black text-[#28371B] font-heading">
                Your Own Mobile App
              </h3>

              <p className="text-xs text-[#5A7446] leading-relaxed font-medium">
                Put your coaching app on students' phones with your own icon, brand colors, and full pride.
              </p>

              <div className="space-y-2.5 pt-2 text-xs font-semibold text-[#28371B]">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60] flex-shrink-0 mt-0.5" />
                  <span>Your Android App published with your coaching icon</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60] flex-shrink-0 mt-0.5" />
                  <span>Your website link (e.g. classes.yourcoaching.com)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60] flex-shrink-0 mt-0.5" />
                  <span>Keep 100% Fees — We never take a cut or commission</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60] flex-shrink-0 mt-0.5" />
                  <span>New Student Inquiry Manager so no walk-in lead is lost</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#7B9D60] flex-shrink-0 mt-0.5" />
                  <span>Branch matrix to manage multiple centers easily</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D9E8CA]/60 text-[11px] font-bold text-[#638249]">
              ✓ For academies looking to dominate their city
            </div>
          </div>

        </div>

        {/* Quick Quotation Estimator Box (Simple & Clear) */}
        <div className="bg-gradient-to-br from-white via-[#FAFCF9] to-[#ECF4E2]/30 rounded-3xl border border-[#D9E8CA] p-6 sm:p-10 shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D9E8CA]/60 pb-4">
            <div>
              <span className="text-[10px] font-black uppercase text-[#638249] tracking-wider block">
                Simple Price Calculator
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#28371B] font-heading">
                Calculate What Fits Your Coaching
              </h3>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-[11px] text-[#5A7446] font-bold block">Estimated Monthly Cost:</span>
              <span className="text-2xl sm:text-3xl font-black text-[#28371B] font-heading">
                ~₹{calculateEstimatedPrice().toLocaleString('en-IN')}<span className="text-xs font-bold text-[#5A7446]">/mo</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Slider */}
              <div className="space-y-3 bg-white p-5 rounded-2xl border border-[#D9E8CA]">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-[#28371B] flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#7B9D60]" />
                    <span>How many students do you teach?</span>
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
                  <span>30 (Small Batch)</span>
                  <span>250 (Growing Institute)</span>
                  <span>1,000+ (Large Academy)</span>
                </div>
              </div>

              {/* Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div 
                  onClick={() => setNeedsLiveStreaming(!needsLiveStreaming)}
                  className={`p-4 rounded-2xl border cursor-pointer transition flex items-start gap-3 ${
                    needsLiveStreaming ? 'bg-white border-[#7B9D60] shadow-sm' : 'bg-white/70 border-[#D9E8CA] hover:border-[#7B9D60]/50'
                  }`}
                >
                  <input 
                    type="checkbox" 
                    checked={needsLiveStreaming} 
                    onChange={() => {}}
                    className="w-4 h-4 rounded text-[#7B9D60] focus:ring-0 mt-0.5 cursor-pointer accent-[#7B9D60]" 
                  />
                  <div>
                    <span className="text-xs font-bold text-[#28371B] block">Need Live Video Classes?</span>
                    <span className="text-[11px] text-[#5A7446]">With automatic class recordings</span>
                  </div>
                </div>

                <div 
                  onClick={() => setNeedsBrandedApp(!needsBrandedApp)}
                  className={`p-4 rounded-2xl border cursor-pointer transition flex items-start gap-3 ${
                    needsBrandedApp ? 'bg-white border-[#7B9D60] shadow-sm' : 'bg-white/70 border-[#D9E8CA] hover:border-[#7B9D60]/50'
                  }`}
                >
                  <input 
                    type="checkbox" 
                    checked={needsBrandedApp} 
                    onChange={() => {}}
                    className="w-4 h-4 rounded text-[#7B9D60] focus:ring-0 mt-0.5 cursor-pointer accent-[#7B9D60]" 
                  />
                  <div>
                    <span className="text-xs font-bold text-[#28371B] block">Need Your Own Mobile App?</span>
                    <span className="text-[11px] text-[#5A7446]">Published on Google Play Store</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Action */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#D9E8CA] shadow-sm space-y-4 text-center">
              <span className="text-xs font-black text-[#638249] uppercase tracking-wider block">
                Instant Written Quote
              </span>
              <h4 className="text-base font-black text-[#28371B]">
                Want an Exact Written Proposal?
              </h4>
              <p className="text-xs text-[#5A7446] font-medium leading-relaxed">
                Connect directly with our engineering team on WhatsApp. We will reply within 10 minutes with a transparent written quote.
              </p>
              <a
                href={generateWhatsAppQuoteUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-slate-950" />
                <span>Get Exact Proposal on WhatsApp</span>
              </a>
              <p className="text-[10px] text-[#5A7446]">
                ⚡ 0% commission on fees • Free 14-day setup included
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* 4. 1-CLICK UNGATED LIVE DEMO (Seeing is Believing) */}
      <section id="demo-sandbox" className="py-16 sm:py-20 px-4 lg:px-8 bg-[#ECF4E2]/40 border-y border-[#D9E8CA]">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#C1DAB0] text-xs font-black text-[#638249]">
              <Sparkles size={13} className="text-[#7B9D60]" />
              <span>Instant Live Demo</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#28371B] tracking-tight font-heading">
              No Calls. No Forms. <br className="hidden sm:inline" />
              Just Test Drive.
            </h2>
            <p className="text-xs sm:text-sm text-[#5A7446] font-medium">
              Tap any portal below to explore the live system with sample NEET &amp; JEE batches:
            </p>
          </div>

          {/* 4-Role Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white rounded-2xl border border-[#D9E8CA] max-w-xl mx-auto shadow-sm">
            {[
              { id: 'admin', label: 'Director Desk' },
              { id: 'teacher', label: 'Teacher Desk' },
              { id: 'student', label: 'Student View' },
              { id: 'parent', label: 'Parent Desk' }
            ].map((r) => (
              <button
                key={r.id}
                onClick={() => setActiveDemoRole(r.id)}
                className={`flex-1 min-w-[110px] py-2.5 px-3 rounded-xl text-xs font-black transition capitalize cursor-pointer ${
                  activeDemoRole === r.id
                    ? 'bg-[#7B9D60] text-white shadow-sm'
                    : 'text-[#28371B] hover:text-[#7B9D60]'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          {/* Active Sandbox Presentation Box */}
          <div className="bg-white rounded-3xl border border-[#D9E8CA] p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECF4E2] text-[#638249] text-xs font-black border border-[#C1DAB0]">
                <ActiveIcon size={14} />
                <span>{activeRoleData.badge}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#28371B] tracking-tight font-heading">
                {activeRoleData.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#5A7446] leading-relaxed font-medium">
                {activeRoleData.headline}
              </p>

              <div className="space-y-2.5 pt-2">
                {activeRoleData.highlights.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#28371B] font-semibold">
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
                  className="px-6 py-3.5 rounded-xl bg-[#7B9D60] hover:bg-[#638249] text-white text-xs sm:text-sm font-black shadow-md transition flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles size={15} />
                  <span>Launch Live {activeDemoRole.toUpperCase()} Workspace</span>
                </a>

                <button
                  onClick={() => onNavigate('demo')}
                  className="px-4 py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-[#D9E8CA] text-[#28371B] text-xs font-bold transition cursor-pointer"
                >
                  View All 4 Portals
                </button>
              </div>
            </div>

            {/* Sandbox Notice & Safety Guarantee Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#28371B] via-[#4D6736] to-[#7B9D60] p-6 sm:p-8 rounded-3xl text-white shadow-md space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-black text-amber-300 uppercase tracking-wider">Live Sandbox Mode</span>
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold">Sample Batches Active</span>
              </div>

              <p className="text-xs text-white/85 leading-relaxed font-medium">
                You can freely create sample tests, grade student submissions, attempt mock exams, and generate practice sheets in this demo.
              </p>

              <div className="space-y-2 pt-1 text-xs text-white/90 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Pre-loaded JEE &amp; NEET question banks and tests</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Instant scorecard and percentile ranking enabled</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  <span>Data resets safely every 24 hours</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10">
                <button
                  onClick={onOpenDemoModal}
                  className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black transition text-center shadow-md cursor-pointer"
                >
                  Request a Private 14-Day Free Setup
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 5. THE 14-DAY FREE TRIAL (Zero Risk, Experience Everything) */}
      <section className="px-4 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl border border-[#D9E8CA] p-6 sm:p-10 shadow-sm space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D9E8CA]/60 pb-4">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase text-[#638249] tracking-wider block">
                100% Risk-Free Guarantee
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#28371B] font-heading">
                Try Free For 14 Days in Your Coaching
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECF4E2] text-[#638249] border border-[#C1DAB0] text-xs font-black">
              <ShieldCheck className="w-4 h-4" />
              <span>No Credit Card Needed</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#5A7446] leading-relaxed font-medium">
            Run real computer tests and live classes with your actual students before paying a single rupee.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            <div className="p-4 bg-[#FAFCF9] rounded-2xl border border-[#D9E8CA] space-y-1.5">
              <div className="w-8 h-8 rounded-xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h4 className="font-black text-[#28371B] text-xs sm:text-sm">We Set Up Your Batches</h4>
              <p className="text-[11px] text-[#5A7446] font-medium leading-relaxed">
                Send your student list on WhatsApp or Excel. We create your portal in 2 hours.
              </p>
            </div>

            <div className="p-4 bg-[#FAFCF9] rounded-2xl border border-[#D9E8CA] space-y-1.5">
              <div className="w-8 h-8 rounded-xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h4 className="font-black text-[#28371B] text-xs sm:text-sm">Test Real Classes &amp; Exams</h4>
              <p className="text-[11px] text-[#5A7446] font-medium leading-relaxed">
                Host live lectures and conduct mock tests with your actual students.
              </p>
            </div>

            <div className="p-4 bg-[#FAFCF9] rounded-2xl border border-[#D9E8CA] space-y-1.5">
              <div className="w-8 h-8 rounded-xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h4 className="font-black text-[#28371B] text-xs sm:text-sm">Decide With Peace of Mind</h4>
              <p className="text-[11px] text-[#5A7446] font-medium leading-relaxed">
                Continue only if you love it. No contracts, no forced commitments.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#D9E8CA]/60">
            <span className="text-xs font-bold text-[#28371B]">
              Ready to claim your 14-day assisted institute setup?
            </span>
            <button
              onClick={onOpenDemoModal}
              className="px-6 py-2.5 rounded-xl bg-[#7B9D60] hover:bg-[#638249] text-white font-black text-xs shadow-xs transition flex items-center gap-1.5 cursor-pointer"
            >
              <span>Activate 14-Day Free Setup</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>


      {/* 6. RADICAL HONESTY & THE FOUNDER PROMISE */}
      <section className="px-4 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl border border-[#D9E8CA] p-6 sm:p-10 shadow-sm space-y-6">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center flex-shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase text-[#638249] tracking-wider block">
                The Founder Promise
              </span>
              <h3 className="text-lg sm:text-xl font-black text-[#28371B] font-heading">
                Built by Software Engineers, Not Sales Telecallers
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#5A7446] leading-relaxed font-medium">
            We are engineering founders who previously built custom software for coaching institutes. When you message us, you talk directly with the engineers who write the code.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1 text-xs">
            <div className="p-4 bg-[#FAFCF9] rounded-2xl border border-[#D9E8CA] space-y-1">
              <span className="font-black text-[#28371B] block">🚀 Direct Developer Chat</span>
              <span className="text-[#5A7446] text-[11px] font-medium leading-relaxed">
                Connect directly with our engineering team on WhatsApp — no junior call center scripts.
              </span>
            </div>

            <div className="p-4 bg-[#FAFCF9] rounded-2xl border border-[#D9E8CA] space-y-1">
              <span className="font-black text-[#28371B] block">⏱️ 12-Hour Support Commitment</span>
              <span className="text-[#5A7446] text-[11px] font-medium leading-relaxed">
                Any technical question or issue during a class or exam is resolved within 12 working hours.
              </span>
            </div>

            <div className="p-4 bg-[#FAFCF9] rounded-2xl border border-[#D9E8CA] space-y-1">
              <span className="font-black text-[#28371B] block">🤝 Built Around Your Needs</span>
              <span className="text-[#5A7446] text-[11px] font-medium leading-relaxed">
                Need a custom report or test format? We gladly build features requested by our partner institutes.
              </span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#D9E8CA]/60">
            <span className="text-xs font-bold text-[#28371B]">
              Want to speak directly with our core engineering team?
            </span>
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shadow-xs transition flex items-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-slate-950" />
              <span>Talk Directly With Us on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>


      {/* 7. WARM & CONVERTING BOTTOM BANNER */}
      <section className="px-4 lg:px-8 max-w-6xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-[#28371B] via-[#4D6736] to-[#7B9D60] text-white shadow-xl text-center space-y-6 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-black text-amber-200">
            <Sparkles size={14} />
            <span>Start Simple • Grow Fast</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight max-w-2xl mx-auto leading-tight font-heading text-white">
            Focus on Teaching. We’ll Handle the Tech.
          </h2>

          <p className="text-white/85 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-medium">
            Save 15+ hours every week. Try TutoLink free for 14 days — no credit card, no risk.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={onOpenDemoModal}
              className="px-7 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-black shadow-lg transition flex items-center gap-2 cursor-pointer"
            >
              <span>Book a Free Demo</span>
              <ArrowRight size={15} />
            </button>
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/30 text-white text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
