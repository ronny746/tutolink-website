import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  FileQuestion, 
  CalendarDays, 
  Bell, 
  Play, 
  Check 
} from 'lucide-react';

export default function DashboardPreview() {
  const nav = [LayoutDashboard, Users, BookOpen, FileQuestion, CalendarDays];
  const labels = ["Dashboard", "People", "Courses", "Assessments", "Timetable"];

  return (
    <div className="relative mx-auto w-full max-w-[620px] rounded-[26px] border border-[#D2E2C4] bg-white p-3.5 sm:p-5 shadow-2xl shadow-emerald-950/10">
      
      {/* Top Header Bar */}
      <div className="flex items-center gap-2 border-b border-slate-100 pb-3 text-xs font-semibold text-slate-500">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#7B9D60] text-white font-bold">
          T
        </div>
        <span className="mr-auto font-bold text-slate-800">Verma Science Academy</span>
        <span className="flex items-center gap-1 text-[10px] font-bold text-[#7B9D60] bg-[#EBF4E3] px-2 py-0.5 rounded-full border border-[#C4DAAF]">
          ● Live Active
        </span>
        <Bell className="h-4 w-4 text-slate-400" />
      </div>

      {/* Main Preview Workspace Grid */}
      <div className="mt-3 grid grid-cols-[120px_1fr] gap-3 sm:grid-cols-[145px_1fr]">
        
        {/* Sidebar */}
        <aside className="rounded-2xl bg-[#ECF4E2] p-2 text-[10px] font-bold text-slate-600 sm:p-3 sm:text-xs border border-[#D2E2C4]">
          <p className="mb-2.5 px-1 text-[9px] font-black uppercase tracking-widest text-[#576659]">
            Workspace
          </p>
          {nav.map((Icon, i) => (
            <div 
              key={labels[i]} 
              className={`mb-1 flex items-center gap-2 rounded-xl px-2.5 py-2 transition-colors ${
                i === 0 
                  ? "bg-[#7B9D60] text-white font-bold shadow-xs" 
                  : "text-slate-600 hover:bg-[#EBF4E3]"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{labels[i]}</span>
            </div>
          ))}
        </aside>

        {/* Main Content Pane */}
        <main className="min-w-0 space-y-3">
          
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-400">Monday, 7 September</p>
              <h3 className="mt-0.5 text-xs sm:text-sm font-black text-slate-900 font-heading">
                Good morning, Er. Verma
              </h3>
            </div>
            <button className="rounded-lg bg-[#EBF4E3] border border-[#C4DAAF] px-2.5 py-1 text-[10px] font-extrabold text-[#7B9D60]">
              + Create
            </button>
          </div>

          {/* Metric Stats Cards */}
          <div className="grid grid-cols-3 gap-2">
            {[
              ["18", "Classes today"],
              ["426", "Active students"],
              ["12", "Doubts pending"]
            ].map(([number, label]) => (
              <div key={label} className="rounded-xl border border-slate-100 bg-[#F7FAF3] p-2 text-center">
                <p className="text-xs sm:text-sm font-black text-slate-900 font-heading">{number}</p>
                <p className="mt-0.5 text-[8px] sm:text-[9px] font-bold text-slate-500 leading-tight">{label}</p>
              </div>
            ))}
          </div>

          {/* Up Next Live Class Card */}
          <div className="rounded-xl bg-gradient-to-r from-[#64844A] to-[#7B9D60] p-3 text-white shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[8px] font-black uppercase tracking-wider text-emerald-100">UP NEXT LIVE</p>
                <p className="mt-0.5 text-xs font-black">Physics · Batch Alpha</p>
                <p className="mt-0.5 text-[9px] text-emerald-100 font-medium">10:00 AM — 11:30 AM</p>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#7B9D60] shadow-sm">
                <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
              </div>
            </div>
          </div>

          {/* Progress Tracker Card */}
          <div className="rounded-xl border border-slate-100 bg-white p-2.5">
            <div className="flex justify-between text-[10px]">
              <span className="font-bold text-slate-800">Today&apos;s Operations</span>
              <span className="font-bold text-[#7B9D60]">82% complete</span>
            </div>
            <div className="mt-1.5 h-1.5 rounded-full bg-slate-100">
              <div className="h-full w-[82%] rounded-full bg-[#7B9D60]" />
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-[9px] font-semibold text-slate-500">
              <Check className="h-3 w-3 rounded-full bg-emerald-100 p-0.5 text-emerald-600 flex-shrink-0" />
              <span>Unit Test 4 Results &amp; WhatsApp Reports Sent</span>
            </div>
          </div>

        </main>

      </div>
    </div>
  );
}
