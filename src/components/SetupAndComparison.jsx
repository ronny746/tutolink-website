import React from 'react';
import { Rocket, Check, X, ArrowRight, ShieldCheck } from 'lucide-react';

export default function SetupAndComparison({ onOpenDemoModal }) {
  const steps = [
    {
      num: '01',
      title: 'Create Your Institute',
      desc: 'Set up your institute portal, logo, brand theme, and subdomain in 2 minutes.'
    },
    {
      num: '02',
      title: 'Add Students & Content',
      desc: 'Upload study notes, batch schedules, question banks, and invite your students.'
    },
    {
      num: '03',
      title: 'Teach, Test & Scale',
      desc: 'Host live classes, assign DPPs, conduct CBT tests, and sell courses online.'
    }
  ];

  const comparisonRows = [
    {
      feature: 'Platform Architecture',
      traditional: 'Separate disconnected tools (WhatsApp, Drive, PDF apps)',
      tutolink: 'One connected digital ecosystem'
    },
    {
      feature: 'Brand Identity',
      traditional: 'Generic software branding / third-party logos',
      tutolink: '100% Institute-branded web & app experience'
    },
    {
      feature: 'Exam Testing',
      traditional: 'Manual paper tests & offline evaluation',
      tutolink: 'Full NTA/CBT-style digital exam simulation'
    },
    {
      feature: 'Student Engagement',
      traditional: 'Limited to physical classroom hours',
      tutolink: '24/7 learning, DPP practice, & doubt clearing'
    },
    {
      feature: 'Growth & Reach',
      traditional: 'Restricted to local city radius',
      tutolink: 'Sell courses, test series & public content anywhere'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAF5] border-b border-[#E2EBDC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Part 1: 10-Minute Setup */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B9D60]/15 text-[#2D3A30] text-xs font-semibold uppercase tracking-wider border border-[#7B9D60]/30">
              <Rocket className="w-3.5 h-3.5 text-[#7B9D60]" />
              <span>Rapid Onboarding</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2922] tracking-tight">
              From Classroom to Digital in 10 Minutes.
            </h2>
            <p className="text-base sm:text-lg text-[#2D3A30]/85">
              No complex software deployment. No long training needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-[#E2EBDC] shadow-md hover:border-[#7B9D60]/50 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-[#7B9D60]">{step.num}</span>
                  <h3 className="text-xl font-bold text-[#1F2922] mt-3 mb-2">{step.title}</h3>
                  <p className="text-sm text-[#2D3A30]/80 leading-relaxed">{step.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E2EBDC] flex items-center justify-between text-xs font-bold text-[#7B9D60]">
                  <span>Step {step.num} Complete</span>
                  <Check className="w-4 h-4 text-[#7B9D60]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Comparison Section */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E2EBDC] shadow-xl space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B9D60]/15 text-[#2D3A30] text-xs font-semibold uppercase tracking-wider border border-[#7B9D60]/30">
              <span>Smart Comparison</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1F2922]">
              Not Another Generic App.
            </h3>
            <p className="text-base sm:text-lg text-[#2D3A30]/85">
              See why leading coaching institutes choose TutoLink over fragmented tools.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-[#E2EBDC]">
                  <th className="py-3.5 px-4 text-xs font-bold text-[#2D3A30]/60 uppercase">Capability</th>
                  <th className="py-3.5 px-4 text-xs font-bold text-red-500/80 uppercase bg-red-50/50 rounded-t-xl">Traditional Setup</th>
                  <th className="py-3.5 px-4 text-xs font-bold text-[#7B9D60] uppercase bg-[#7B9D60]/10 rounded-t-xl">TutoLink Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2EBDC]">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F8FAF5] transition-colors">
                    <td className="py-4 px-4 text-sm font-bold text-[#1F2922]">{row.feature}</td>
                    <td className="py-4 px-4 text-xs text-gray-600 bg-red-50/30">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-xs font-semibold text-[#1F2922] bg-[#7B9D60]/5">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#7B9D60] flex-shrink-0 mt-0.5" />
                        <span>{row.tutolink}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pt-4 text-center">
            <button
              onClick={onOpenDemoModal}
              className="px-7 py-3 rounded-xl bg-[#7B9D60] text-white font-bold text-xs hover:bg-[#6A8B50] transition-colors shadow-md"
            >
              Upgrade Your Coaching to TutoLink
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
