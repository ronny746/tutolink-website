import React, { useState } from 'react';
import { X, Sparkles, ShieldCheck, CheckCircle2, Building, Phone, MapPin, User, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LeadFormModal({ isOpen, onClose, onSubmitLead }) {
  const [formData, setFormData] = useState({
    instituteName: '',
    ownerName: '',
    mobile: '',
    city: '',
    studentCount: '100 - 300',
    targetExam: 'JEE / NEET',
    preferredTime: 'Morning (10 AM - 1 PM)'
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.mobile || !formData.instituteName) {
      alert("Please enter Institute Name and Phone Number!");
      return;
    }

    // Trigger confetti celebrating demo registration!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    onSubmitLead(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      
      <div className="relative w-full max-w-xl bg-white rounded-3xl border border-[#D9E6D1] shadow-2xl p-5 sm:p-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-5 sm:mb-6 pr-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF5E4] border border-[#C6E0B5] text-[11px] font-bold text-[#3F572E] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#7CA45E] flex-shrink-0" />
            <span>Free 15-Minute Live Guided Demo</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#14281B] font-heading">
            Book Live Demo For Your Institute
          </h3>
          <p className="text-xs text-[#5F7A67] font-medium mt-1">
            Our EdTech team will showcase how your institute can transform into a digital powerhouse.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#14281B] mb-1">
                Coaching Institute Name *
              </label>
              <div className="relative">
                <Building className="w-4 h-4 text-[#7A937A] absolute left-3 top-3" />
                <input
                  type="text"
                  name="instituteName"
                  required
                  placeholder="e.g. Apex Science Classes"
                  value={formData.instituteName}
                  onChange={handleChange}
                  className="w-full bg-[#FAFCF9] border border-[#D9E6D1] rounded-xl pl-9 pr-3 py-2.5 text-xs sm:text-sm text-[#1D3728] focus:outline-none focus:border-[#7CA45E]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#14281B] mb-1">
                Director / Owner Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#7A937A] absolute left-3 top-3" />
                <input
                  type="text"
                  name="ownerName"
                  placeholder="Your Name"
                  value={formData.ownerName}
                  onChange={handleChange}
                  className="w-full bg-[#FAFCF9] border border-[#D9E6D1] rounded-xl pl-9 pr-3 py-2.5 text-xs sm:text-sm text-[#1D3728] focus:outline-none focus:border-[#7CA45E]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#14281B] mb-1">
                WhatsApp Mobile Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#7A937A] absolute left-3 top-3" />
                <input
                  type="tel"
                  name="mobile"
                  required
                  placeholder="+91 70524 22066"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full bg-[#FAFCF9] border border-[#D9E6D1] rounded-xl pl-9 pr-3 py-2.5 text-xs sm:text-sm text-[#1D3728] focus:outline-none focus:border-[#7CA45E]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#14281B] mb-1">
                City / Location
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-[#7A937A] absolute left-3 top-3" />
                <input
                  type="text"
                  name="city"
                  placeholder="e.g. Lucknow, Kota, Patna"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-[#FAFCF9] border border-[#D9E6D1] rounded-xl pl-9 pr-3 py-2.5 text-xs sm:text-sm text-[#1D3728] focus:outline-none focus:border-[#7CA45E]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#14281B] mb-1">
                Approx Student Capacity
              </label>
              <select
                name="studentCount"
                value={formData.studentCount}
                onChange={handleChange}
                className="w-full bg-[#FAFCF9] border border-[#D9E6D1] rounded-xl px-3 py-2.5 text-xs sm:text-sm text-[#1D3728] focus:outline-none focus:border-[#7CA45E]"
              >
                <option value="Under 50">Under 50 Students</option>
                <option value="50 - 200">50 - 200 Students</option>
                <option value="200 - 500">200 - 500 Students</option>
                <option value="500 - 1500">500 - 1,500 Students</option>
                <option value="1500+">1,500+ Students</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#14281B] mb-1">
                Primary Target Exam
              </label>
              <select
                name="targetExam"
                value={formData.targetExam}
                onChange={handleChange}
                className="w-full bg-[#FAFCF9] border border-[#D9E6D1] rounded-xl px-3 py-2.5 text-xs sm:text-sm text-[#1D3728] focus:outline-none focus:border-[#7CA45E]"
              >
                <option value="JEE / NEET">JEE Main / NEET Medical</option>
                <option value="CBSE / Board 8-12">CBSE &amp; State Boards (8th-12th)</option>
                <option value="Foundation 6-10">Foundation Class (6th-10th)</option>
                <option value="Competitive Exam">SSC / Banking / Railway / Defense</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#14281B] mb-1">
              Preferred Callback Time
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-[#7A937A] absolute left-3 top-3" />
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full bg-[#FAFCF9] border border-[#D9E6D1] rounded-xl pl-9 pr-3 py-2.5 text-xs sm:text-sm text-[#1D3728] focus:outline-none focus:border-[#7CA45E]"
              >
                <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM - 5 PM)</option>
                <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                <option value="Immediate (Asap)">Immediate Callback Requested</option>
              </select>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full shimmer-btn text-white font-bold py-3.5 px-6 rounded-full shadow-lg flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition text-xs sm:text-sm"
            >
              <span>Confirm Demo Booking &amp; Get Free Setup</span>
            </button>
          </div>

          <div className="pt-2 flex items-center justify-center gap-4 text-[10px] sm:text-[11px] text-[#5F7A67] font-medium flex-wrap">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#7CA45E]" />
              100% Data Confidential
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#7493DB]" />
              Free Assisted Setup
            </span>
          </div>

        </form>

      </div>
    </div>
  );
}
