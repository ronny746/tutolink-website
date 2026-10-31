import React from 'react';
import { 
  Monitor, 
  Video, 
  IndianRupee, 
  Smartphone, 
  Brain, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';

export default function FeaturesPage({ onOpenDemoModal, onNavigate }) {
  const featuresList = [
    {
      num: "01",
      title: "Real NTA CBT Exam Simulator & DPP Generator",
      tag: "50,000+ Pre-Tagged Questions",
      icon: Monitor,
      desc: "Give your students authentic entrance exam practice on the exact computer-based test screen used by NTA for JEE Main, NEET, and CUET. Say goodbye to manual paper typing and 3-day OMR grading delays.",
      points: [
        "Full-screen examination mode with subject timers and anti-cheating controls",
        "Authentic NTA question palette: Answered (Green), Review (Purple), Not Visited",
        "Instant auto-grading with All India Ranks, percentiles, and subject cutoffs",
        "60-second Daily Practice Problem (DPP) generator with step-by-step LaTeX solutions"
      ]
    },
    {
      num: "02",
      title: "Automated WhatsApp Fee Collection & Receipts",
      tag: "Direct UPI & 0% Cut",
      icon: IndianRupee,
      desc: "Never chase parents with awkward phone calls again. TutoLink automates scheduled polite WhatsApp fee reminders with direct UPI, Card, and Net Banking payment links.",
      points: [
        "Automated WhatsApp fee due notices sent 3 days before installment due dates",
        "1-click UPI payments (Google Pay, PhonePe, Paytm, BHIM) with zero friction",
        "Instant official PDF fee receipts generated with institute stamp and GST ledger",
        "Parent transaction history synced directly into your coaching accounting ledger"
      ]
    },
    {
      num: "03",
      title: "Interactive Live Classes & Anti-Piracy DRM",
      tag: "Zero Screen Recording Leakage",
      icon: Video,
      desc: "Deliver crystal-clear live interactive lectures optimized for Tier-2 and Tier-3 internet bandwidth. Classes are automatically archived into organized batch playlists for 24/7 revision.",
      points: [
        "Low-bandwidth HD streaming with dynamic bitrate scaling for mobile networks",
        "Dynamic DRM watermark with student roll code to eliminate Telegram piracy",
        "One-click automated attendance with instant absent SMS and WhatsApp alerts to parents",
        "Encrypted PDF chapter notes and study materials protected against unauthorized download"
      ]
    },
    {
      num: "04",
      title: "100% White-Labeled Web & Mobile Experience",
      tag: "Your Brand First",
      icon: Smartphone,
      desc: "TutoLink powers the technology behind the scenes, but your students and parents see 100% of your institute's identity. Custom colors, logo, and subdomain.",
      points: [
        "Custom subdomain (e.g. yourcoaching.tutolink.in) or custom domain (youracademy.com)",
        "Branded student and parent Android & Web apps with your institute logo and palette",
        "0% commission on your online courses, test series, and student fee collections",
        "Zero competitor ads or third-party marketing shown to your enrolled students"
      ]
    },
    {
      num: "05",
      title: "GenAI Question Paper Generator & Blueprinting",
      tag: "Trained on 25+ Years PYQ",
      icon: Brain,
      desc: "Generate balanced JEE, NEET, and Board question papers in under 60 seconds. Choose chapters, difficulty distribution, and question types to auto-generate original papers.",
      points: [
        "Difficulty balancing: 40% Easy, 40% Medium, 20% Hard NTA distribution",
        "Automatic generation of detailed step-by-step mathematical reasoning and solutions",
        "Export papers to clean formatted PDFs with your institute header and watermark",
        "Save faculty 15+ hours every week spent on typing and formatting papers"
      ]
    },
    {
      num: "06",
      title: "Multi-Batch & Branch Admin Control Matrix",
      tag: "Enterprise Scalability",
      icon: ShieldCheck,
      desc: "Run 1 center or 20 branches with complete central visibility. Role-based access control for Directors, Teachers, Typists, and Accountants.",
      points: [
        "Role-based permission matrix: Teachers only see assigned batches and tests",
        "Central financial and academic reporting across multiple city branches",
        "1-Click Excel import and export for effortless student roster migration",
        "Dedicated cloud database isolation for complete tenant data privacy"
      ]
    }
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECF4E2] border border-[#C1DAB0] text-xs font-black uppercase text-[#638249] tracking-wider shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Complete Feature Ecosystem</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-[#28371B] font-heading tracking-tight leading-tight">
          Everything You Need to Run &amp; Scale <br className="hidden sm:inline" />
          <span className="relative inline-block text-[#28371B]">
            A Modern Coaching Institute.
            <svg className="absolute -bottom-2 left-0 w-full h-2.5 text-[#7B9D60]/30 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <p className="text-sm sm:text-base text-[#5A7446] font-medium leading-relaxed">
          Explore the 6 core engines engineered specifically for Indian competitive exam and tuition coaching centers.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {featuresList.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div 
              key={idx}
              className="bg-white rounded-3xl border border-[#D9E8CA] hover:border-[#7B9D60] p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#D9E8CA]/60">
                  <div className="w-10 h-10 rounded-xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-[#ECF4E2] border border-[#C1DAB0] text-[#638249]">
                    {feat.tag}
                  </span>
                </div>

                <h2 className="text-xl font-black text-[#28371B] font-heading">
                  {feat.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#5A7446] leading-relaxed font-medium">
                  {feat.desc}
                </p>

                <div className="space-y-2 pt-2">
                  {feat.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#28371B] font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#7B9D60] flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#D9E8CA]/60 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('demo')}
                  className="text-xs font-bold text-[#638249] hover:text-[#28371B] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Test-drive this feature in Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#28371B] via-[#4D6736] to-[#7B9D60] text-white text-center space-y-4 shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
          See All 6 Engines in Action Right Now
        </h3>
        <p className="text-xs sm:text-sm text-white/85 max-w-lg mx-auto font-medium">
          Zero sign-ups required. Test our live NTA exam engine, DPP maker, and batch rosters using sample NEET and JEE data.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('demo')}
            className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-md transition"
          >
            Open Interactive Demo Sandbox
          </button>
          <button
            onClick={onOpenDemoModal}
            className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs sm:text-sm border border-white/20 transition inline-flex items-center gap-2"
          >
            <span>Schedule Guided Walkthrough</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
