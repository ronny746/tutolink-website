import React from 'react';
import { 
  Rocket, 
  Check, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Clock, 
  FileSpreadsheet, 
  Award, 
  Smartphone,
  Lock,
  Unlock
} from 'lucide-react';

export default function SetupAndComparison({ onOpenDemoModal }) {
  const steps = [
    {
      num: '01',
      title: 'Claim Your Institute Portal',
      time: '2 Minutes',
      desc: 'Pick your custom subdomain (e.g. apex.tutolink.in or your own .com), upload your coaching logo, and configure your brand color theme.'
    },
    {
      num: '02',
      title: '1-Click Excel Data Migration',
      time: '3 Minutes',
      desc: 'Seamlessly upload your existing student rosters, batch schedules, and custom study notes. Our support team assists your first upload.'
    },
    {
      num: '03',
      title: 'Assign Tests & Study Material',
      time: '3 Minutes',
      desc: 'Pick from 50,000+ pre-tagged JEE/NEET questions to create auto-graded CBT mock tests or generate 15-minute daily practice DPPs.'
    },
    {
      num: '04',
      title: 'Share Branded App & Scale',
      time: '2 Minutes',
      desc: 'Distribute your branded mobile & web link to students. Automate WhatsApp fee collection and start selling courses with 0% commission.'
    }
  ];

  const comparisonRows = [
    {
      metric: "Revenue Commission on Course & Test Sales",
      tutolink: { val: "0% Zero Commission (Keep 100%)", win: true },
      legacyEdtech: { val: "Takes up to 10-15%+ cut", win: false },
      schoolErp: { val: "School annual ERP model", win: false },
      fragmented: { val: "Payment gateway only (2%)", win: false }
    },
    {
      metric: "Pre-Loaded 50,000+ Question Bank & DPP Maker",
      tutolink: { val: "Included Free (JEE, NEET, CBSE)", win: true },
      legacyEdtech: { val: "Expensive paid add-on", win: false },
      schoolErp: { val: "Limited basic question bank", win: false },
      fragmented: { val: "Manual typing in MS Word", win: false }
    },
    {
      metric: "NTA-Standard CBT Mock Exam Simulation",
      tutolink: { val: "Exact JEE/NEET interface + AIR ranks", win: true },
      legacyEdtech: { val: "Simple quiz format only", win: false },
      schoolErp: { val: "School assignment style", win: false },
      fragmented: { val: "Physical OMRs (3-day delay)", win: false }
    },
    {
      metric: "Automated WhatsApp Fee Due Reminders",
      tutolink: { val: "Built-in 1-click UPI payment links", win: true },
      legacyEdtech: { val: "SMS alerts / Extra fee", win: false },
      schoolErp: { val: "Push notifications only", win: false },
      fragmented: { val: "Awkward phone calls to parents", win: false }
    },
    {
      metric: "White-Label Student & Parent Portal",
      tutolink: { val: "100% Your logo, colors & web domain", win: true },
      legacyEdtech: { val: "Branded mobile app, limited web", win: false },
      schoolErp: { val: "Vendor-branded interface", win: false },
      fragmented: { val: "Scattered Drive/Zoom links", win: false }
    },
    {
      metric: "Data Ownership & Easy Student Export",
      tutolink: { val: "100% Exportable anytime via Excel", win: true },
      legacyEdtech: { val: "High vendor lock-in", win: false },
      schoolErp: { val: "Enterprise migration required", win: false },
      fragmented: { val: "Messy spreadsheets", win: false }
    },
    {
      metric: "Upfront Setup Cost & Contracts",
      tutolink: { val: "Honest SaaS (No lock-in)", win: true },
      legacyEdtech: { val: "Often ₹40k - ₹1.5L upfront", win: false },
      schoolErp: { val: "High enterprise school contract", win: false },
      fragmented: { val: "Hidden costs across 5 tools", win: false }
    }
  ];

  return (
    <section id="comparison" className="py-20 md:py-28 bg-[#F8FAF5] border-b border-[#E2EBDC] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#7B9D60]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 relative z-10">
        
        {/* PART 1: 10-MINUTE RAPID ONBOARDING */}
        <div className="space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF4E3] text-[#1F2922] text-xs font-black uppercase tracking-wider border border-[#C8DCAE]">
              <Rocket className="w-3.5 h-3.5 text-[#7B9D60]" />
              <span>Rapid 10-Minute Onboarding</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1F2922] font-heading tracking-tight">
              From Physical Classroom to <br className="hidden sm:inline" />
              <span className="text-[#7B9D60]">Digital Powerhouse in 10 Minutes.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#576659] font-medium max-w-2xl mx-auto">
              No software engineers. No servers to manage. Zero coding required. Our dedicated team helps onboard your first batch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E2EBDC] hover:border-[#7B9D60] hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#7B9D60]">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-[#EBF4E3] text-[#7B9D60] border border-[#C8DCAE] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {step.time}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-[#1F2922] font-heading mb-2 group-hover:text-[#7B9D60] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#576659] leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2EBDC] flex items-center justify-between text-xs font-bold text-[#7B9D60]">
                  <span>Step {step.num} Ready</span>
                  <Check className="w-4 h-4 text-[#7B9D60]" />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* PART 2: THE UNBIASED COMPETITOR COMPARISON MATRIX */}
        <div className="space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#C8DCAE] text-[#1F2922] text-xs font-black uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#7B9D60]" />
              <span>Honest Competitor Breakdown</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-[#1F2922] font-heading tracking-tight">
              Why Leading Coaching Institutes <br className="hidden sm:inline" />
              <span className="text-[#7B9D60]">Choose TutoLink Over The Rest.</span>
            </h3>

            <p className="text-base sm:text-lg text-[#576659] font-medium max-w-2xl mx-auto">
              See how TutoLink stacks up against traditional single-purpose apps, expensive SaaS lock-ins, and chaotic offline tools.
            </p>
          </div>

          {/* Responsive Comparison Table Container */}
          <div className="bg-white rounded-3xl border border-[#C8DCAE] shadow-[0_16px_40px_rgba(123,157,96,0.1)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                
                {/* Table Header */}
                <thead>
                  <tr className="bg-[#FAFDF8] border-b border-[#E2EBDC] text-xs font-black text-[#1F2922] uppercase tracking-wider">
                    <th className="p-4 sm:p-5 w-2/5">Capability / Feature</th>
                    <th className="p-4 sm:p-5 w-1/4 bg-[#EBF4E3]/90 text-[#1F2922] border-x border-[#C8DCAE]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#7B9D60]" />
                        <span>TutoLink (Next-Gen)</span>
                      </div>
                    </th>
                    <th className="p-4 sm:p-5 text-gray-500">Legacy Vendors</th>
                    <th className="p-4 sm:p-5 text-gray-500">School ERPs</th>
                    <th className="p-4 sm:p-5 text-gray-500">WhatsApp / Zoom / Drive</th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-[#E2EBDC] text-xs sm:text-sm font-medium">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#FAFDF8]/50 transition-colors">
                      
                      {/* Metric Name */}
                      <td className="p-4 sm:p-5 font-bold text-[#1F2922]">
                        {row.metric}
                      </td>

                      {/* TutoLink (Featured Column) */}
                      <td className="p-4 sm:p-5 bg-[#EBF4E3]/40 border-x border-[#C8DCAE] font-bold text-[#1F2922]">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#7B9D60] flex-shrink-0" />
                          <span>{row.tutolink.val}</span>
                        </div>
                      </td>

                      {/* Legacy Vendors */}
                      <td className="p-4 sm:p-5 text-gray-600">
                        <div className="flex items-center gap-2">
                          <X className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                          <span>{row.legacyEdtech.val}</span>
                        </div>
                      </td>

                      {/* School ERPs */}
                      <td className="p-4 sm:p-5 text-gray-600">
                        <div className="flex items-center gap-2">
                          <X className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                          <span>{row.schoolErp.val}</span>
                        </div>
                      </td>

                      {/* Fragmented Tools */}
                      <td className="p-4 sm:p-5 text-gray-600">
                        <div className="flex items-center gap-2">
                          <X className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                          <span>{row.fragmented.val}</span>
                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>
            </div>

            {/* Bottom Callout in Comparison */}
            <div className="p-5 sm:p-6 bg-[#FAFDF8] border-t border-[#E2EBDC] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 text-xs text-[#576659]">
                <ShieldCheck className="w-5 h-5 text-[#7B9D60] flex-shrink-0" />
                <span>
                  <strong>Zero Risk Guarantee:</strong> 14-Day Full Free Access • Free Student Database Import • No Credit Card
                </span>
              </div>

              <button
                onClick={onOpenDemoModal}
                className="px-6 py-2.5 rounded-xl bg-[#7B9D60] hover:bg-[#68884E] text-white font-extrabold text-xs shadow-md transition-all flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Switch to TutoLink Today</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
