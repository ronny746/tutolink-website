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
  ChevronDown,
  HardDrive,
  Globe,
  Sliders,
  FileText,
  BookOpen,
  Lock,
  Zap,
  Layers,
  Database,
  ShoppingBag,
  ExternalLink
} from 'lucide-react';

export default function PricingPage({ onNavigate, onOpenDemoModal }) {
  // Billing cycle toggle: monthly or annual (with discount)
  const [isAnnual, setIsAnnual] = useState(true);

  // Interactive Modular Configurator State
  const [selectedModule, setSelectedModule] = useState('academic'); // 'cbt' | 'academic' | 'hybrid'
  const [studentTier, setStudentTier] = useState(150); // 50, 150, 300, 500
  const [includeApp, setIncludeApp] = useState(false);
  const [includeCourseStore, setIncludeCourseStore] = useState(false);
  const [includeDoubtChat, setIncludeDoubtChat] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);

  // Modular starting prices
  const basePrices = {
    cbt: { name: 'CBT Test Series & DPP Engine', monthly: 1299, annual: 999, storage: '10 GB Cloud Storage' },
    academic: { name: 'Academic Operations & Fees', monthly: 2299, annual: 1799, storage: '50 GB Cloud Storage' },
    hybrid: { name: 'Hybrid Academy & Live Video', monthly: 3699, annual: 2999, storage: '200 GB Dedicated Media Storage' },
  };

  // Calculate dynamic starting estimate
  const calculateDynamicEstimate = () => {
    const base = isAnnual ? basePrices[selectedModule].annual : basePrices[selectedModule].monthly;
    
    // Student scale multiplier
    let studentAddon = 0;
    if (studentTier === 300) studentAddon = isAnnual ? 500 : 700;
    else if (studentTier === 500) studentAddon = isAnnual ? 1100 : 1500;
    else if (studentTier === 1000) studentAddon = isAnnual ? 2000 : 2600;

    // Optional addons
    let appCost = includeApp ? (isAnnual ? 1200 : 1500) : 0;
    let storeCost = includeCourseStore ? (isAnnual ? 500 : 700) : 0;

    return base + studentAddon + appCost + storeCost;
  };

  // Generate dynamic WhatsApp consultation link
  const generateConfigWhatsAppUrl = () => {
    let msg = `Hi TutoLink Engineering Team, I configured my coaching plan on your pricing page:\n\n`;
    msg += `• Core Module: ${basePrices[selectedModule].name}\n`;
    msg += `• Enrolled Students: ~${studentTier} Students\n`;
    msg += `• Included Storage: ${basePrices[selectedModule].storage}\n`;
    msg += `• Custom Branded Android App: ${includeApp ? 'Yes (Personal Play Store APK)' : 'Responsive Web Portal'}\n`;
    msg += `• Public Course Store & Payment Gateway: ${includeCourseStore ? 'Yes' : 'Not required'}\n`;
    msg += `• Doubt Chat System: ${includeDoubtChat ? 'Enabled' : 'Disabled (Broadcast only)'}\n`;
    msg += `• Billing Cycle: ${isAnnual ? 'Annual (Best Value)' : 'Monthly'}\n`;
    msg += `• Estimated Plan: Starts from ~₹${calculateDynamicEstimate().toLocaleString('en-IN')}/month\n\n`;
    msg += `Please confirm the exact setup proposal and provide details for our 14-day free trial.`;
    return "https://wa.me/917052422066?text=" + encodeURIComponent(msg);
  };

  const starterPackages = [
    {
      id: 'cbt',
      title: 'CBT Test Series & DPP Engine',
      badge: 'Test Prep & Practice',
      targetAudience: 'For institutes focused on JEE, NEET, CUET & Board mock exams',
      startingPrice: isAnnual ? 999 : 1299,
      storageQuota: '10 GB Cloud Storage',
      storageDetail: 'Fast MongoDB indexing for question banks, LaTeX formulas, student test submissions & answer keys.',
      description: 'Run authentic computer-based exams and automatically generate subject practice problems from your own questions.',
      highlights: [
        'Real NTA-pattern CBT Exam Simulator (+4 / -1 marking, palettes, timers)',
        'Upload your own private Question Bank in Word or Excel',
        'Daily Practice Problems (DPP) builder with timed drills',
        'Automated AIR rank lists, percentiles & time-per-question analytics',
        'Student & Parent web login portals',
        'Zero setup fee & 1-Click Excel student batch import'
      ],
      btnText: 'Start Test Series at ₹999/mo',
      featured: false
    },
    {
      id: 'academic',
      title: 'Academic Operations & Fees',
      badge: 'Most Popular For Coachings',
      targetAudience: 'For single & multi-batch coaching centers replacing paper diaries & registers',
      startingPrice: isAnnual ? 1799 : 2299,
      storageQuota: '50 GB High-Speed Cloud Storage',
      storageDetail: 'Encrypted document vault for chapter PDF notes, formula sheets, student fee records & batch registers.',
      description: 'The complete operating system for batches, automated WhatsApp fees, attendance, and study materials.',
      highlights: [
        'Everything in CBT Test Series Suite, plus:',
        'Automated WhatsApp fee due reminders with 1-tap UPI payment links',
        'Instant digital PDF receipts with official coaching stamp & serial numbers',
        '1-Tap batch attendance with instant WhatsApp absence alerts to parents',
        'Protected Study Material Bank (watermarked PDFs with anti-download)',
        'Multi-role staff access: Director, Faculty, Typist, Accountant & Branch Admin',
        'Director dynamic toggles: Enable doubts, disable student-to-student chats'
      ],
      btnText: 'Start Academic Suite at ₹1,799/mo',
      featured: true
    },
    {
      id: 'hybrid',
      title: 'Hybrid Academy & Live Streaming',
      badge: 'Full Digital Scale',
      targetAudience: 'For growing institutes broadcasting live classes or selling courses online',
      startingPrice: isAnnual ? 2999 : 3699,
      storageQuota: '200 GB Dedicated Media Storage',
      storageDetail: 'Dedicated low-latency media servers for live broadcasts & encrypted S3 cloud lecture archives.',
      description: 'Host interactive live video lectures, archive recorded classes, and sell course admissions online.',
      highlights: [
        'Everything in Academic Operations Suite, plus:',
        'In-house HD Live Class Studio with whiteboard & student chat',
        'Automated class recording with encrypted anti-piracy cloud archive',
        'Anti-piracy protection: dynamic student watermarks & screen-capture blocking',
        'Public Course & Test Series Store (0% Commission — keep 100% fees)',
        'Automated student payment gateway checkout & instant enrolment',
        'Priority phone & direct engineer WhatsApp support'
      ],
      btnText: 'Start Live Academy at ₹2,999/mo',
      featured: false
    }
  ];

  const pricingFaqs = [
    {
      q: "Why do your plans start at ₹999/month instead of one rigid price?",
      a: "Every coaching institute has completely different requirements. An offline coaching that only needs computer-based tests and DPPs has minimal server usage, so they shouldn't be forced to pay for expensive video streaming servers. We let you start at just ₹999/month for what you actually use, with 0% commission on your fees."
    },
    {
      q: "How does the storage limit work, and what happens if we need more?",
      a: "Real cloud storage (AWS S3) and database servers (MongoDB) cost actual money. Instead of making false 'unlimited' claims like aggregators and then throttling your account, we include generous storage (10 GB to 200 GB) that easily covers 95%+ of coaching institutes. If your video library exceeds 200 GB, we pass through raw cloud storage at wholesale rates (just ₹40/month per additional 25 GB) with zero penalties."
    },
    {
      q: "How do we get our own custom website and personal mobile app?",
      a: "For white-labeling, we configure your portal on your own domain (e.g. portal.youracademy.com or youracademy.in). We also compile and publish a personal branded Android mobile app (APK & Google Play Store release) featuring your coaching's name, logo, and brand colors. Your students never see TutoLink branding."
    },
    {
      q: "Do you take any percentage or commission when students pay fees or buy courses?",
      a: "Zero commission. 100% of all student tuition fees, offline installments, and online course payments go directly to your institute's UPI QR code or bank account. We make money purely on transparent software subscriptions."
    },
    {
      q: "Can we control features like disabling student chats or restricting DPP creation?",
      a: "Yes! TutoLink is 100% dynamic. From the Director portal, you can disable 1-on-1 private messaging between students to avoid classroom distractions, allow only teachers to build DPPs, or control who can view question banks and fee ledgers."
    },
    {
      q: "Is there any setup fee or data migration charge?",
      a: "Zero setup fees. Simply hand over your student lists in Excel or from your previous software. Our engineering team imports all your student rosters, batches, and subjects at no cost during your onboarding."
    },
    {
      q: "Can we test the platform before paying anything?",
      a: "Yes! Every institute receives a 14-Day 100% Risk-Free Trial. You can upload questions, create real tests, and conduct batches before making any financial commitment."
    }
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 sm:space-y-20 font-sans">
      
      {/* 1. Header: Transparent Modular Philosophy */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECF4E2] border border-[#C1DAB0] text-xs font-black uppercase text-[#638249] tracking-wider shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Fair &amp; Modular SaaS • Plans Start at Just ₹999/Month</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-[#28371B] font-heading tracking-tight leading-tight">
          Pay Only for What Your Coaching <br className="hidden sm:inline" />
          <span className="relative inline-block text-[#28371B]">
            Actually Uses. No Inflated Bundles.
            <svg className="absolute -bottom-2 left-0 w-full h-2.5 text-[#7B9D60]/30 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <p className="text-sm sm:text-base text-[#5A7446] font-medium leading-relaxed max-w-2xl mx-auto">
          Need only CBT exam practice? Pay for test series. Need full batch fee automation and study materials? Upgrade seamlessly. Every plan includes dedicated cloud storage with 0% commission.
        </p>

        {/* Annual vs Monthly Billing Toggle */}
        <div className="pt-4 flex items-center justify-center gap-3">
          <span className={`text-xs sm:text-sm font-bold ${!isAnnual ? 'text-[#28371B]' : 'text-[#5A7446]'}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-7 rounded-full bg-[#7B9D60] p-1 transition-colors relative cursor-pointer"
            aria-label="Toggle annual billing"
          >
            <div className={`w-5 h-5 rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`} />
          </button>
          <span className={`text-xs sm:text-sm font-bold flex items-center gap-1.5 ${isAnnual ? 'text-[#28371B]' : 'text-[#5A7446]'}`}>
            <span>Annual Billing</span>
            <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wide">
              Save 25%
            </span>
          </span>
        </div>
      </div>

      {/* 2. Three Modular Starter Packages */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {starterPackages.map((pkg) => {
          return (
            <div
              key={pkg.id}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.featured
                  ? 'bg-white border-2 border-[#7B9D60] shadow-xl shadow-[#7B9D60]/10 ring-4 ring-[#7B9D60]/10 -translate-y-1'
                  : 'bg-white border border-[#D9E8CA] hover:border-[#7B9D60]/60 shadow-sm'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#7B9D60] text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
                  {pkg.badge}
                </div>
              )}

              <div className="space-y-5">
                <div>
                  {!pkg.featured && (
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#ECF4E2] text-[#638249] text-[10px] font-black uppercase tracking-wider mb-2">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="text-xl sm:text-2xl font-black text-[#28371B] font-heading">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-[#5A7446] font-medium mt-1 leading-relaxed">
                    {pkg.targetAudience}
                  </p>
                </div>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-[#FAFCF9] border border-[#D9E8CA]/80 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#5A7446] tracking-wider block">
                    Starting At
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-[#28371B]">
                      ₹{pkg.startingPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-[#5A7446] font-bold">
                      / month
                    </span>
                  </div>
                  <span className="text-[11px] text-[#5A7446] block font-medium">
                    {isAnnual ? 'Billed annually (Best Value)' : 'Billed monthly'} • 0% Commission
                  </span>
                </div>

                {/* Dedicated Storage Quota Callout */}
                <div className="p-3.5 rounded-xl bg-[#ECF4E2]/70 border border-[#C1DAB0] flex items-start gap-3">
                  <HardDrive className="w-4 h-4 text-[#638249] flex-shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-xs font-black text-[#28371B] block">
                      Includes {pkg.storageQuota}
                    </span>
                    <p className="text-[11px] text-[#5A7446] leading-tight">
                      {pkg.storageDetail}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-[11px] font-black uppercase text-[#28371B] tracking-wider block">
                    Key Inclusions:
                  </span>
                  {pkg.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#28371B]">
                      <div className="w-4 h-4 rounded-full bg-[#ECF4E2] text-[#638249] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-[#D9E8CA]/60 space-y-2">
                <button
                  onClick={onOpenDemoModal}
                  className={`w-full py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                    pkg.featured
                      ? 'bg-[#7B9D60] hover:bg-[#638249] text-white shadow-md'
                      : 'bg-[#28371B] hover:bg-[#3d512a] text-white'
                  }`}
                >
                  <span>{pkg.btnText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-center text-[#5A7446] font-medium">
                  Includes 14-Day Free Risk-Free Trial
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. White-Label Custom Website & Personal Mobile App Showcase */}
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#28371B] via-[#354824] to-[#4D6736] rounded-3xl p-6 sm:p-10 text-white shadow-xl space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/15 pb-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5 text-amber-300" />
              <span>100% White-Label Commitment</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-white">
              Your Coaching Name Everywhere. Not Ours.
            </h2>
            <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed">
              We never promote competitor coachings, display third-party advertisements, or hide your identity. Your students and parents see only your coaching brand.
            </p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-4 text-center sm:text-right shrink-0">
            <span className="text-[10px] uppercase font-bold text-white/70 block">Available For All Institutes</span>
            <span className="text-lg sm:text-xl font-black text-amber-300 block">Custom Domain + Personal App</span>
            <span className="text-[11px] text-white/80 block mt-0.5">Android APK &amp; Play Store Release</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Custom Website */}
          <div className="p-5 rounded-2xl bg-white/10 border border-white/15 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 text-amber-300 flex items-center justify-center font-bold">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-base font-black text-white font-heading">
              1. Custom Web Domain (`portal.yourcoaching.com`)
            </h3>
            <p className="text-xs text-white/80 leading-relaxed font-medium">
              We point your portal to your exact institute website domain or provide a branded subdomain (`apex.tutolink.in`) with free SSL encryption, institute logo, and custom theme colors.
            </p>
          </div>

          {/* Personal Mobile App */}
          <div className="p-5 rounded-2xl bg-white/10 border border-white/15 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 text-amber-300 flex items-center justify-center font-bold">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-black text-white font-heading">
              2. Personal Android Mobile App (Play Store)
            </h3>
            <p className="text-xs text-white/80 leading-relaxed font-medium">
              We build a dedicated native Android application compiled with your app icon, splash screen, and coaching title. Students download your app directly for exams, DPPs, and video lectures.
            </p>
          </div>

        </div>
      </div>

      {/* 4. The Cloud Storage & Infrastructure Reality Callout */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-[#D9E8CA] p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center flex-shrink-0">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase text-[#638249] tracking-wider block">
              Infrastructure Honesty
            </span>
            <h2 className="text-lg sm:text-2xl font-black text-[#28371B] font-heading">
              Why We Detail Cloud Storage Limits (and Avoid Fake "Unlimited" Claims)
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#5A7446] leading-relaxed font-medium">
          Many software aggregators claim to offer "unlimited video &amp; question storage", only to hit coaching directors with hidden server maintenance bills, download throttling, or sudden account freezes. Real cloud servers—high-speed MongoDB databases, encrypted AWS S3 document vaults, and low-latency live video broadcasters—incur actual server costs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-[#FAFCF9] border border-[#D9E8CA] space-y-1.5">
            <span className="text-xs font-black text-[#28371B] block">10 GB (Test Prep Quota)</span>
            <p className="text-[11px] text-[#5A7446] leading-relaxed">
              Holds over <strong>40,000+ question bank items</strong>, mathematical LaTeX equations, answer diagrams, and 5+ years of student test result logs.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAFCF9] border border-[#D9E8CA] space-y-1.5">
            <span className="text-xs font-black text-[#28371B] block">50 GB (Operations Quota)</span>
            <p className="text-[11px] text-[#5A7446] leading-relaxed">
              Stores hundreds of <strong>full-length chapter PDF notes</strong>, formula books, batch attendance registers, and official PDF fee receipts.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAFCF9] border border-[#D9E8CA] space-y-1.5">
            <span className="text-xs font-black text-[#28371B] block">200 GB+ (Media Streaming)</span>
            <p className="text-[11px] text-[#5A7446] leading-relaxed">
              Stores <strong>250+ hours of encrypted class recordings</strong>. Need more? We pass through raw AWS storage at just ₹40/mo per 25 GB with zero markups.
            </p>
          </div>
        </div>
      </div>

      {/* 5. Interactive "Build Your Institute Subscription" Configurator */}
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-white via-[#FAFCF9] to-[#ECF4E2]/40 rounded-3xl border border-[#D9E8CA] p-6 sm:p-10 shadow-sm space-y-8">
        
        <div className="border-b border-[#D9E8CA]/70 pb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#ECF4E2] border border-[#C1DAB0] text-[#638249] text-[10px] font-black uppercase tracking-wider mb-2">
            <Sliders className="w-3 h-3 text-[#7B9D60]" />
            <span>Interactive Plan Builder</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-[#28371B] font-heading">
            Configure Your Coaching Requirements &amp; Get an Instant Proposal
          </h2>
          <p className="text-xs text-[#5A7446] font-medium mt-1">
            Pick what your institute actually needs. Send your custom configuration directly to our engineering team on WhatsApp for guaranteed 10-minute turnaround.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Selectors */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Core Module Selection */}
            <div className="space-y-3">
              <label className="text-xs sm:text-sm font-bold text-[#28371B] block">
                1. Select Your Primary Operational Focus:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'cbt', label: 'CBT Tests Only', sub: 'Starts ₹999/mo', tag: '10 GB' },
                  { id: 'academic', label: 'Academic & Fees', sub: 'Starts ₹1,799/mo', tag: '50 GB' },
                  { id: 'hybrid', label: 'Live Video + Store', sub: 'Starts ₹2,999/mo', tag: '200 GB' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedModule(item.id)}
                    className={`p-3.5 rounded-2xl border text-left transition cursor-pointer flex flex-col justify-between ${
                      selectedModule === item.id
                        ? 'bg-white border-[#7B9D60] shadow-md ring-2 ring-[#7B9D60]/20'
                        : 'bg-white/80 border-[#D9E8CA] hover:border-[#7B9D60]/60'
                    }`}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span className="text-xs font-black text-[#28371B]">{item.label}</span>
                      <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-[#ECF4E2] text-[#638249]">
                        {item.tag}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#5A7446] font-bold mt-2">
                      {item.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Student Strength */}
            <div className="space-y-3 bg-white p-5 rounded-2xl border border-[#D9E8CA]">
              <div className="flex justify-between items-center">
                <label className="text-xs sm:text-sm font-bold text-[#28371B] flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#7B9D60]" />
                  <span>2. Total Enrolled Students:</span>
                </label>
                <span className="px-3.5 py-1 bg-[#ECF4E2] border border-[#C1DAB0] rounded-xl text-[#638249] font-black text-xs sm:text-sm">
                  {studentTier} Active Students
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 pt-1">
                {[50, 150, 300, 500].map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setStudentTier(tier)}
                    className={`py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                      studentTier === tier
                        ? 'bg-[#7B9D60] text-white border-[#7B9D60] shadow-xs'
                        : 'bg-[#FAFCF9] text-[#28371B] border-[#D9E8CA] hover:border-[#7B9D60]'
                    }`}
                  >
                    {tier} Students
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Add-on Modules */}
            <div className="space-y-3">
              <label className="text-xs sm:text-sm font-bold text-[#28371B] block">
                3. Optional Feature Add-ons:
              </label>

              {/* Personal Mobile App */}
              <div
                onClick={() => setIncludeApp(!includeApp)}
                className={`p-3.5 rounded-2xl border cursor-pointer transition flex items-start gap-3 ${
                  includeApp 
                    ? 'bg-white border-[#7B9D60] shadow-xs' 
                    : 'bg-white/80 border-[#D9E8CA] hover:border-[#7B9D60]/50'
                }`}
              >
                <input
                  type="checkbox"
                  checked={includeApp}
                  onChange={() => {}}
                  className="w-4 h-4 rounded text-[#7B9D60] focus:ring-0 mt-0.5 cursor-pointer accent-[#7B9D60]"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#28371B]">Personal Branded Android App (Play Store APK)</span>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                      +₹1,200/mo
                    </span>
                  </div>
                  <p className="text-[11px] text-[#5A7446] mt-0.5">
                    Your own native app with your coaching icon, splash screen, and push notification system.
                  </p>
                </div>
              </div>

              {/* Public Course Selling & Payment Gateway */}
              <div
                onClick={() => setIncludeCourseStore(!includeCourseStore)}
                className={`p-3.5 rounded-2xl border cursor-pointer transition flex items-start gap-3 ${
                  includeCourseStore 
                    ? 'bg-white border-[#7B9D60] shadow-xs' 
                    : 'bg-white/80 border-[#D9E8CA] hover:border-[#7B9D60]/50'
                }`}
              >
                <input
                  type="checkbox"
                  checked={includeCourseStore}
                  onChange={() => {}}
                  className="w-4 h-4 rounded text-[#7B9D60] focus:ring-0 mt-0.5 cursor-pointer accent-[#7B9D60]"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#28371B]">Public Course Store &amp; Automated Enrolments</span>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                      +₹500/mo
                    </span>
                  </div>
                  <p className="text-[11px] text-[#5A7446] mt-0.5">
                    Sell courses &amp; test series directly online with automated payment processing &amp; instant login issuance (0% Commission).
                  </p>
                </div>
              </div>

              {/* Doubt Chat Control */}
              <div
                onClick={() => setIncludeDoubtChat(!includeDoubtChat)}
                className={`p-3.5 rounded-2xl border cursor-pointer transition flex items-start gap-3 ${
                  includeDoubtChat 
                    ? 'bg-white border-[#7B9D60] shadow-xs' 
                    : 'bg-white/80 border-[#D9E8CA] hover:border-[#7B9D60]/50'
                }`}
              >
                <input
                  type="checkbox"
                  checked={includeDoubtChat}
                  onChange={() => {}}
                  className="w-4 h-4 rounded text-[#7B9D60] focus:ring-0 mt-0.5 cursor-pointer accent-[#7B9D60]"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#28371B]">Institute Doubt Resolution Chat</span>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                      INCLUDED FREE
                    </span>
                  </div>
                  <p className="text-[11px] text-[#5A7446] mt-0.5">
                    Students can submit audio voice notes and photo doubts. Director can toggle student-to-student chats on/off anytime.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right: Summary Card & Instant Consultation Action */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-3xl border border-[#D9E8CA] shadow-sm space-y-5">
            
            <div className="border-b border-[#D9E8CA]/70 pb-3 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase text-[#638249] tracking-wider block">
                  Tailored Plan Estimate
                </span>
                <h3 className="text-lg font-black text-[#28371B] mt-0.5 font-heading">
                  Your Configuration
                </h3>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-[#5A7446] font-bold block">Estimated:</span>
                <span className="text-2xl font-black text-[#28371B]">
                  ~₹{calculateDynamicEstimate().toLocaleString('en-IN')}<span className="text-xs font-bold text-[#5A7446]">/mo</span>
                </span>
              </div>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between py-1 border-b border-[#D9E8CA]/40">
                <span className="text-[#5A7446]">Selected Base Suite:</span>
                <span className="font-black text-[#28371B]">{basePrices[selectedModule].name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#D9E8CA]/40">
                <span className="text-[#5A7446]">Student Strength:</span>
                <span className="font-bold text-[#28371B]">{studentTier} Enrolled Students</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#D9E8CA]/40">
                <span className="text-[#5A7446]">Cloud Storage Quota:</span>
                <span className="font-bold text-[#7B9D60]">{basePrices[selectedModule].storage}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#D9E8CA]/40">
                <span className="text-[#5A7446]">Branded Android App:</span>
                <span className={`font-bold ${includeApp ? 'text-[#28371B]' : 'text-gray-400'}`}>
                  {includeApp ? 'Custom Play Store APK' : 'Responsive Web Portal'}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#D9E8CA]/40">
                <span className="text-[#5A7446]">Public Course Store:</span>
                <span className={`font-bold ${includeCourseStore ? 'text-[#28371B]' : 'text-gray-400'}`}>
                  {includeCourseStore ? 'Automated Checkout' : 'Not Requested'}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#D9E8CA]/40">
                <span className="text-[#5A7446]">Doubt Chat System:</span>
                <span className="font-bold text-[#7B9D60]">
                  {includeDoubtChat ? 'Enabled (Director Controlled)' : 'Broadcast Channels Only'}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#D9E8CA]/40">
                <span className="text-[#5A7446]">Risk-Free Trial:</span>
                <span className="font-black text-[#7B9D60]">14 Days (100% Free)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#5A7446]">Course Fee Commission:</span>
                <span className="font-black text-[#28371B]">0% (Keep 100% Revenue)</span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <a
                href={generateConfigWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-slate-950" />
                <span>Send Configuration on WhatsApp</span>
              </a>

              <button
                onClick={onOpenDemoModal}
                className="w-full py-3.5 px-4 rounded-xl bg-[#28371B] hover:bg-[#3d512a] text-white font-extrabold text-xs sm:text-sm transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#7B9D60]" />
                <span>Request 1-on-1 Call With Founders</span>
              </button>
            </div>

            <p className="text-[11px] text-[#5A7446] text-center font-medium">
              ⚡ Guaranteed written proposal &amp; consultation within 10 minutes.
            </p>

          </div>

        </div>

      </div>

      {/* 6. Honest Comparison: TutoLink vs Aggregators */}
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-black uppercase text-[#638249] tracking-wider block">
            Vendor Comparison
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#28371B] font-heading">
            Why Coaching Directors Switch to TutoLink
          </h2>
          <p className="text-xs text-[#5A7446]">
            See how our transparent software partnership compares to traditional coaching apps.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-[#D9E8CA] overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAFCF9] border-b border-[#D9E8CA] text-[#28371B]">
                <tr>
                  <th className="py-4 px-6 font-black">Feature / Policy</th>
                  <th className="py-4 px-6 font-black text-[#638249] bg-[#ECF4E2]/50">TutoLink Coaching OS</th>
                  <th className="py-4 px-6 font-bold text-gray-500">Traditional App Aggregators</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D9E8CA]/60 text-[#28371B]">
                <tr>
                  <td className="py-3.5 px-6 font-bold">Starting Price</td>
                  <td className="py-3.5 px-6 font-black text-[#638249] bg-[#ECF4E2]/30">Starts at just ₹999/month</td>
                  <td className="py-3.5 px-6 text-gray-600">Hidden pricing (₹25,000 to ₹60,000 upfront)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-bold">Commission on Course Sales</td>
                  <td className="py-3.5 px-6 font-black text-[#638249] bg-[#ECF4E2]/30">0% (Keep 100% of all fees)</td>
                  <td className="py-3.5 px-6 text-gray-600">5% to 15% cut on every student transaction</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-bold">Student Data &amp; Question Bank</td>
                  <td className="py-3.5 px-6 font-black text-[#638249] bg-[#ECF4E2]/30">100% Private (Your own Word/Excel vault)</td>
                  <td className="py-3.5 px-6 text-gray-600">Locked into vendor format (no easy export)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-bold">Cloud Storage Policy</td>
                  <td className="py-3.5 px-6 font-black text-[#638249] bg-[#ECF4E2]/30">Transparent quota (10 to 200 GB + ₹40/mo wholesale)</td>
                  <td className="py-3.5 px-6 text-gray-600">Fake 'unlimited' with sudden throttling &amp; penalties</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-bold">Customer Support Channel</td>
                  <td className="py-3.5 px-6 font-black text-[#638249] bg-[#ECF4E2]/30">Direct WhatsApp to Core Software Engineers</td>
                  <td className="py-3.5 px-6 text-gray-600">Generic call center ticketing queue (2-5 days wait)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-bold">Dynamic Feature Control</td>
                  <td className="py-3.5 px-6 font-black text-[#638249] bg-[#ECF4E2]/30">Director controls chat, DPP rights &amp; staff roles</td>
                  <td className="py-3.5 px-6 text-gray-600">Rigid one-size-fits-all settings</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 7. Pricing FAQs */}
      <div className="max-w-4xl mx-auto space-y-6 pt-4">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#ECF4E2] border border-[#C1DAB0] text-[#638249] text-xs font-black uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-[#7B9D60]" />
            <span>Billing &amp; Storage FAQs</span>
          </div>
          <h2 className="text-2xl font-black text-[#28371B] font-heading">
            Frequently Asked Questions
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
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
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

      {/* 8. Bottom Hotline Callout */}
      <div className="p-6 sm:p-9 rounded-3xl bg-gradient-to-br from-[#28371B] via-[#3E552A] to-[#7B9D60] text-white text-center max-w-4xl mx-auto space-y-4 shadow-xl">
        <h3 className="text-xl sm:text-2xl font-black font-heading text-white">
          Want a Custom Setup for Your Coaching?
        </h3>
        <p className="text-xs sm:text-sm text-white/85 max-w-lg mx-auto font-medium leading-relaxed">
          Talk directly to our founders and engineering team. We will calculate your exact server requirements and give you a written 14-day free setup proposal.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href="tel:+917052422066"
            className="px-6 py-3 rounded-xl bg-white text-[#28371B] hover:bg-gray-100 font-black text-xs sm:text-sm transition shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#7B9D60]" />
            <span>Call: +91 70524 22066</span>
          </a>

          <a
            href={generateConfigWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm transition shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-slate-950" />
            <span>Discuss on WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
}
