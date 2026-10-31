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
  PhoneCall
} from 'lucide-react';

export default function AboutPage({ onOpenDemoModal, onNavigate }) {
  const whatsappUrl = "https://wa.me/917052422066?text=" + encodeURIComponent("Hi TutoLink Team, I read your story on the website and want to discuss partnering with you for my coaching institute.");

  const shortcomings = [
    {
      title: "We Are Newly Launching",
      desc: "We don't pretend to have thousands of coaching institutes or inflated vanity metrics. We are starting fresh and focused on quality over noise."
    },
    {
      title: "Continuously Refining Features",
      desc: "Our core engines (CBT, WhatsApp fees, Live streaming, DPPs) are robust, but we are actively refining edge-case workflows and adding new report formats weekly."
    },
    {
      title: "Zero Sales Fluff or False Promises",
      desc: "If a specific niche feature isn't supported yet, we'll tell you directly on day one rather than making false promises just to close an account."
    }
  ];

  const advantages = [
    {
      icon: Code2,
      title: "Direct Engineering Access",
      desc: "You don't talk to junior support reps reciting canned scripts. You communicate directly with the software engineers who write the code."
    },
    {
      icon: Clock,
      title: "Guaranteed 12-Hour Resolution",
      desc: "If you face an operational hurdle, a bug, or have a question, our engineering team will respond and work towards resolving it within 12 working hours."
    },
    {
      icon: Layers,
      title: "Bespoke System Pedigree",
      desc: "Before launching TutoLink, we built custom, full-stack management and classroom platforms privately for coaching institutes. We understand real ground-level coaching operations."
    },
    {
      icon: Cpu,
      title: "In-House Proprietary Tech",
      desc: "We built our live classes and exam simulators in-house from the ground up without relying on fragile third-party wrappers, ensuring high reliability."
    },
    {
      icon: HeartHandshake,
      title: "Co-Build With Us",
      desc: "As an early partner institute, your feedback directly shapes our product roadmap. If you need a specific batch filter or test format, we listen and adapt."
    },
    {
      icon: ShieldCheck,
      title: "100% Data Sovereignty & 0% Cut",
      desc: "We never take a cut of your student fees. Your student lists, test banks, and fee ledgers belong solely to you, exportable to Excel at any moment."
    }
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* 1. Header: Radical Honesty */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECF4E2] border border-[#C1DAB0] text-xs font-black uppercase text-[#638249] tracking-wider shadow-xs">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>Radical Honesty &amp; Transparency</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-[#28371B] font-heading tracking-tight leading-tight">
          Built by Engineers Who <br className="hidden sm:inline" />
          <span className="relative inline-block text-[#28371B]">
            Actually Listen to Coaching Owners.
            <svg className="absolute -bottom-2 left-0 w-full h-2.5 text-[#7B9D60]/30 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <p className="text-sm sm:text-base text-[#5A7446] font-medium leading-relaxed">
          We are launching TutoLink as a modern, unified coaching platform. Here is the unfiltered truth about who we are, where we are right now, and why working with us is different.
        </p>
      </div>

      {/* 2. The Backstory */}
      <div className="bg-white rounded-3xl border border-[#D9E8CA] p-6 sm:p-10 shadow-sm max-w-5xl mx-auto space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase text-[#638249] tracking-wider">
            Our Background &amp; Story
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#28371B] font-heading">
            From Building Custom Coaching Systems to TutoLink
          </h2>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#5A7446] leading-relaxed font-medium">
          <p>
            Before launching TutoLink, our engineering team worked directly with coaching institute directors, building custom, full-stack management, attendance, CBT testing, and live learning systems tailored to their individual institutes.
          </p>
          <p>
            During this journey, we heard the exact same frustrations repeatedly: <strong className="text-[#28371B]">directors felt trapped</strong> by large EdTech software providers who locked them into multi-year contracts, took cuts of their course sales, pushed clunky apps full of ads, and took days to answer basic support tickets through outsourced call centers.
          </p>
          <p>
            We realized coaching institutes deserved something better: a lightning-fast, 100% white-labeled system where directors speak directly with the engineers, and where every fee and student record remains 100% owned by the institute. That is why we built <strong className="text-[#28371B]">TutoLink</strong>.
          </p>
        </div>
      </div>

      {/* 3. Transparent Section: Our Shortcomings */}
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-black text-[#28371B] font-heading">
              Our Honest Shortcomings (Where We Stand Today)
            </h2>
            <p className="text-xs text-[#5A7446]">
              We believe trust is earned through truth, not inflated marketing claims.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {shortcomings.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#FAFCF9] rounded-2xl border border-amber-300/80 p-5 space-y-2"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <h3 className="text-sm font-black text-[#28371B]">{item.title}</h3>
              </div>
              <p className="text-xs text-[#5A7446] leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Our Real Advantages */}
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center font-bold">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-black text-[#28371B] font-heading">
              Why Forward-Thinking Institutes Choose TutoLink
            </h2>
            <p className="text-xs text-[#5A7446]">
              The real operational advantages of working with an agile, engineering-led team.
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
                <div className="w-10 h-10 rounded-xl bg-[#ECF4E2] text-[#638249] flex items-center justify-center">
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

      {/* 5. The 12-Hour Support Commitment */}
      <div className="bg-gradient-to-br from-[#28371B] via-[#4D6736] to-[#7B9D60] text-white rounded-3xl p-6 sm:p-10 shadow-xl max-w-5xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/15 text-amber-300 text-[11px] font-black uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" />
              <span>Guaranteed Response Window</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black font-heading text-white">
              The 12 Working Hours Resolution Guarantee
            </h3>
            <p className="text-xs sm:text-sm text-white/85 max-w-xl font-medium leading-relaxed">
              When you adopt TutoLink, you receive direct phone and WhatsApp contact with our core team. If any operational issue arises during a test or class, we respond and work toward a fix within 12 working hours.
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-3 flex-shrink-0 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-md w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 text-slate-950" />
              <span>Talk Directly With Founders</span>
            </a>

            <a
              href="tel:+917052422066"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition flex items-center justify-center gap-2 border border-white/20 w-full sm:w-auto"
            >
              <PhoneCall className="w-4 h-4 text-white" />
              <span>Call: +91 70524 22066</span>
            </a>
          </div>
        </div>
      </div>

      {/* 6. Action Callout */}
      <div className="text-center pt-4 space-y-4">
        <p className="text-xs sm:text-sm text-[#5A7446] font-medium">
          Ready to experience the platform yourself without speaking to any sales person?
        </p>
        <button
          onClick={() => onNavigate('demo')}
          className="px-8 py-4 rounded-2xl bg-[#7B9D60] hover:bg-[#638249] text-white font-black text-sm shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
        >
          <span>Test-Drive the 1-Click Interactive Demo</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}

