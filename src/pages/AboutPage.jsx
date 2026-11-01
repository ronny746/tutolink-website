import React from 'react';
import { 
  HeartHandshake, 
  Clock, 
  Code2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  AlertCircle, 
  Layers, 
  Cpu, 
  PhoneCall,
  Check
} from 'lucide-react';

export default function AboutPage({ onOpenDemoModal, onNavigate }) {
  const whatsappUrl = "https://wa.me/917052422066?text=" + encodeURIComponent("Hi TutoLink Team, I read the Why Us page on your website and want to discuss partnering with you for my coaching institute.");

  const honestPoints = [
    {
      title: "1. We Are a Fresh, Growing Team",
      desc: "We don't show fake numbers or claim to have thousands of coachings. We are a young, focused team that gives personal care and dedicated time to every single institute we onboard."
    },
    {
      title: "2. We Improve Features Every Single Week",
      desc: "All core tools (computer exams, WhatsApp fees, attendance, DPPs, and live classes) work smoothly. We listen to our partner coachings and regularly add new reports and features every week."
    },
    {
      title: "3. No Fake Promises or Sales Talk",
      desc: "If our software cannot do something your coaching needs right now, we tell you honestly on day one. We never make false promises just to sell you a subscription."
    }
  ];

  const advantages = [
    {
      icon: Code2,
      title: "1. Talk Directly With the Creators",
      desc: "You never have to deal with call center agents reciting scripts. You get direct WhatsApp and phone contact with the software engineers who actually write the code."
    },
    {
      icon: Clock,
      title: "2. Problems Fixed Within 12 Hours",
      desc: "If you face any issue during an exam, fee payment, or class, our team responds quickly and works to resolve it within 12 working hours."
    },
    {
      icon: Layers,
      title: "3. Real Offline Coaching Experience",
      desc: "Before launching TutoLink, we built private software for coaching institutes for years. We understand ground-level reality: batches, late fees, test checking, and parent calls."
    },
    {
      icon: Cpu,
      title: "4. Fast, Stable & Built From Scratch",
      desc: "We built our exam simulator, question bank upload, and live classes ourselves from scratch. We don't depend on fragile third-party tools, so your portal stays fast and reliable."
    },
    {
      icon: HeartHandshake,
      title: "5. We Build What You Actually Need",
      desc: "As our partner institute, your suggestions shape the software. If you need a special report card format, batch filter, or test style, tell us and we build it for you."
    },
    {
      icon: ShieldCheck,
      title: "6. You Own 100% of Your Data & Fees",
      desc: "We never take a cut or commission from student fees. Your question bank, student lists, and fee records belong entirely to you, exportable to Excel at any time."
    }
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 sm:space-y-20 font-sans">
      
      {/* 1. Header: Simple & Honest */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECF4E2] border border-[#C1DAB0] text-xs font-black uppercase text-[#638249] tracking-wider shadow-xs">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>Honest &amp; Clear • Built for Coaching Institutes</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-[#28371B] font-heading tracking-tight leading-tight">
          Built by Software Engineers Who <br className="hidden sm:inline" />
          <span className="relative inline-block text-[#28371B]">
            Actually Listen to Coaching Owners.
            <svg className="absolute -bottom-2 left-0 w-full h-2.5 text-[#7B9D60]/30 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <p className="text-sm sm:text-base text-[#5A7446] font-medium leading-relaxed max-w-2xl mx-auto">
          We built TutoLink to give coaching institutes their own modern digital platform. Here is the simple, honest story of who we are, what we do, and why coachings choose to partner with us.
        </p>
      </div>

      {/* 2. The Story Behind TutoLink */}
      <div className="bg-white rounded-3xl border border-[#D9E8CA] p-6 sm:p-10 shadow-sm max-w-5xl mx-auto space-y-5">
        <div className="space-y-1.5">
          <span className="text-[10px] font-black uppercase text-[#638249] tracking-wider">
            Our Story
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#28371B] font-heading">
            Why We Built TutoLink for Coachings
          </h2>
        </div>

        <div className="space-y-3.5 text-xs sm:text-sm text-[#5A7446] leading-relaxed font-medium">
          <p>
            Before starting TutoLink, our engineering team worked side-by-side with coaching directors, creating custom software systems for student batches, attendance, CBT exams, and live classes.
          </p>
          <p>
            Every single coaching owner told us the same problems: <strong className="text-[#28371B]">big EdTech software companies lock them into costly contracts</strong>, take cuts from their course sales, show unwanted ads to students, and take days to reply to basic support tickets through outsourced call centers.
          </p>
          <p>
            We knew coaching institutes deserved better: a fast, reliable system with your own institute branding, where you speak directly with the creators, and where 100% of your student data and fee money stays in your hands. That is why we built <strong className="text-[#28371B]">TutoLink</strong>.
          </p>
        </div>
      </div>

      {/* 3. Honest Facts (Where We Stand Today) */}
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold shrink-0">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-2xl font-black text-[#28371B] font-heading">
              3 Honest Facts About Where We Stand Today
            </h2>
            <p className="text-xs text-[#5A7446] font-medium">
              We believe real trust comes from truth, not exaggerated sales numbers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {honestPoints.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#FAFCF9] rounded-2xl border border-amber-300/80 p-5 sm:p-6 space-y-2.5 shadow-xs"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                <h3 className="text-sm font-black text-[#28371B] font-heading">{item.title}</h3>
              </div>
              <p className="text-xs text-[#5A7446] leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Why Coachings Choose Us (Simple Advantages) */}
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center font-bold shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-2xl font-black text-[#28371B] font-heading">
              6 Clear Reasons Why Coachings Choose TutoLink
            </h2>
            <p className="text-xs text-[#5A7446] font-medium">
              The real day-to-day benefits of partnering with our engineering team.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-[#D9E8CA] hover:border-[#7B9D60] p-5 sm:p-6 space-y-3 shadow-sm hover:shadow-md transition"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center font-bold">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-black text-[#28371B] font-heading">
                  {adv.title}
                </h3>
                <p className="text-xs text-[#5A7446] leading-relaxed font-medium">
                  {adv.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. Support Guarantee Banner */}
      <div className="bg-gradient-to-br from-[#28371B] via-[#3E552A] to-[#7B9D60] text-white rounded-3xl p-6 sm:p-10 shadow-xl max-w-5xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/15 text-amber-300 text-[11px] font-black uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" />
              <span>Fast Support Guarantee</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black font-heading text-white">
              Any Problem Fixed Within 12 Working Hours
            </h3>
            <p className="text-xs sm:text-sm text-white/85 max-w-xl font-medium leading-relaxed">
              When you use TutoLink, you get direct phone and WhatsApp access to our founders and engineers. If any problem arises during an exam, batch class, or fee payment, we reply quickly and work to fix it within 12 hours.
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-3 flex-shrink-0 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-md w-full sm:w-auto cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-slate-950" />
              <span>Chat With the Founders</span>
            </a>

            <a
              href="tel:+917052422066"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition flex items-center justify-center gap-2 border border-white/20 w-full sm:w-auto cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-white" />
              <span>Call: +91 70524 22066</span>
            </a>
          </div>
        </div>
      </div>

      {/* 6. Action Callout */}
      <div className="text-center pt-2 space-y-4">
        <p className="text-xs sm:text-sm text-[#5A7446] font-medium">
          Want to test the platform yourself right now without any sales calls?
        </p>
        <button
          onClick={() => onNavigate('demo')}
          className="px-8 py-4 rounded-2xl bg-[#7B9D60] hover:bg-[#638249] text-white font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
        >
          <span>Try the Live Demo (No Sign-Up Needed)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
