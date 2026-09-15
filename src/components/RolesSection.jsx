import React from 'react';
import { UserCheck, ShieldCheck, GraduationCap, Users, User, ArrowRight } from 'lucide-react';

export default function RolesSection({ onOpenDemoModal }) {
  const roles = [
    {
      role: "Superadmin",
      copy: "Create multi-branch institutes, manage global access, and provide secure system support.",
      icon: ShieldCheck,
      highlight: false
    },
    {
      role: "Institute Admin",
      copy: "Run your people, academics, daily operations, white-label branding, and student growth.",
      icon: UserCheck,
      highlight: true
    },
    {
      role: "Teacher",
      copy: "Teach assigned batches, publish study materials, conduct tests, and resolve student doubts.",
      icon: Users,
      highlight: false
    },
    {
      role: "Student",
      copy: "Learn, practise DPP papers, track progress, save study notes, and ask questions 24/7.",
      icon: GraduationCap,
      highlight: false
    },
    {
      role: "Parent",
      copy: "Follow real-time attendance, test marks, online fee receipts, notices, and child progress.",
      icon: User,
      highlight: false
    }
  ];

  return (
    <section id="for-everyone" className="bg-[#173F39] text-white px-5 py-20 lg:px-8 lg:py-28 relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7CA45E]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center relative z-10">
        
        {/* Left Column Header */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#DDF269]">
            Built Around Real Roles
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl font-heading leading-tight">
            A Clear Workspace For Every Person In The Learning Journey.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-emerald-50/80 font-medium">
            Access is securely scoped based on each person&apos;s role and institute. Teachers see their assigned batches, students access enrolled courses, and parents receive transparent progress updates.
          </p>
          <div className="mt-8">
            <button
              onClick={onOpenDemoModal}
              className="rounded-full bg-[#DDF269] px-6 py-3.5 text-xs sm:text-sm font-extrabold text-[#173F39] hover:bg-white transition-colors shadow-lg flex items-center gap-2"
            >
              <span>Explore Role Permissions</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right Column Roles Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {roles.map(({ role, copy, icon: Icon, highlight }, index) => (
            <div 
              key={role} 
              className={`rounded-2xl border p-5 transition-all ${
                highlight 
                  ? "border-[#DDF269]/60 bg-[#28564D] shadow-xl scale-[1.02]" 
                  : "border-white/10 bg-white/5 hover:bg-white/10"
              }`}
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className={`p-2 rounded-lg ${highlight ? "bg-[#DDF269] text-[#173F39]" : "bg-white/10 text-emerald-300"}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <p className="text-base font-extrabold font-heading">{role}</p>
              </div>
              <p className="mt-2 text-xs leading-6 text-emerald-50/75 font-medium">{copy}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
