import React from 'react';

export default function TrustStrip({ onOpenDemoModal }) {
  const exams = [
    { name: "JEE Main & Advanced", category: "Engineering", tag: "NTA Full Pattern" },
    { name: "NEET-UG Medical", category: "Medical Prep", tag: "Bio, Chem, Phys" },
    { name: "CBSE Class 8 - 12", category: "Board Prep", tag: "NCERT Aligned" },
    { name: "Foundation (6th-10th)", category: "Olympiad / NTSE", tag: "Early Edge" },
    { name: "CUET UG Entrance", category: "University Prep", tag: "General & Domain" },
    { name: "Commerce / CA Foundation", category: "Commerce", tag: "Accounts & Law" },
    { name: "NDA / Defense / Police", category: "Govt. Exams", tag: "CBT Ready" },
    { name: "State Boards (UP, Bihar, MH)", category: "Regional", tag: "Bilingual" }
  ];

  const metrics = [
    { label: "Platform Revenue Cut", value: "0%", detail: "Keep 100% of student fees" },
    { label: "Proprietary Tech", value: "100%", detail: "In-house live streaming & CBT" },
    { label: "Support Resolution", value: "12 Hrs", detail: "Direct developer guarantee" },
    { label: "Risk-Free Trial", value: "14 Days", detail: "Test with your actual batches" },
    { label: "Assisted Migration", value: "< 10 Mins", detail: "1-click Excel student upload" }
  ];

  const cities = ["Kota", "Patna", "Lucknow", "Delhi NCR", "Jaipur", "Hyderabad", "Prayagraj", "Indore", "Pune", "Bhopal"];

  return (
    <section className="bg-white border-b border-[#E2EBDC] py-10 sm:py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Metric Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 pb-10 border-b border-[#E2EBDC]">
          {metrics.map((m, idx) => (
            <div key={idx} className="text-center sm:text-left space-y-1">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1F2922] font-heading tracking-tight">
                {m.value}
              </p>
              <p className="text-xs font-bold text-[#1F2922]">
                {m.label}
              </p>
              <p className="text-[11px] text-[#576659]">
                {m.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Supported Exam Ecosystem Banner */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] font-black uppercase text-[#7B9D60] tracking-wider">
                Built For Competitive Exam Coaches
              </span>
              <h3 className="text-lg sm:text-xl font-black text-[#1F2922] mt-0.5">
                Pre-Loaded Syllabus &amp; CBT Test Pattern For Every Major Indian Exam
              </h3>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-[#576659]">
              <span className="font-semibold">Trusted in:</span>
              <div className="flex flex-wrap gap-1.5 font-bold text-[#1F2922]">
                {cities.map((city, i) => (
                  <span key={i} className="px-2 py-0.5 bg-[#F8FAF5] rounded-md border border-[#E2EBDC] text-[10px]">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Exam Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {exams.map((exam, idx) => (
              <div 
                key={idx}
                className="bg-[#FAFDF8] p-3 rounded-xl border border-[#E2EBDC] hover:border-[#7B9D60] hover:shadow-xs transition group cursor-pointer"
                onClick={onOpenDemoModal}
              >
                <span className="text-[9px] font-bold uppercase text-[#7B9D60] block tracking-tight">
                  {exam.category}
                </span>
                <p className="text-xs font-bold text-[#1F2922] mt-0.5 group-hover:text-[#7B9D60] transition-colors leading-snug">
                  {exam.name}
                </p>
                <span className="inline-block mt-2 text-[9px] font-semibold px-1.5 py-0.5 rounded bg-white border border-[#E2EBDC] text-[#576659]">
                  {exam.tag}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
