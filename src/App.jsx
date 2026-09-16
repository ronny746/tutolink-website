import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BannerCarousel from './components/BannerCarousel';
import Hero from './components/Hero';
import RolesSection from './components/RolesSection';
import MoreThanClassroom from './components/MoreThanClassroom';
import CompleteExperience from './components/CompleteExperience';
import CbtAndGrowthTesting from './components/CbtAndGrowthTesting';
import OnlineGrowthSection from './components/OnlineGrowthSection';
import BrandingAndStudentExp from './components/BrandingAndStudentExp';
import SetupAndComparison from './components/SetupAndComparison';
import PricingSection from './components/PricingSection';
import Faq from './components/Faq';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import LeadFormModal from './components/LeadFormModal';
import Toast from './components/Toast';
import { submitLeadToGoogleSheet } from './utils/leadCapture';

export default function App() {
  // Open lead form modal automatically as soon as website loads
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(true);
  const [toastMessage, setToastMessage] = useState('');

  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  const handleSubmitLead = async (leadData) => {
    console.log("Lead captured:", leadData);
    await submitLeadToGoogleSheet(leadData);
    setToastMessage(`Thank you ${leadData.ownerName || leadData.instituteName}! Our EdTech team will contact you shortly at ${leadData.mobile}.`);
    setTimeout(() => {
      setToastMessage('');
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAF5] text-[#2D3A30] selection:bg-[#7B9D60] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Top Header Navigation */}
      <Navbar onOpenDemoModal={handleOpenDemoModal} />

      {/* Top Announcement Ribbon */}
      <BannerCarousel onOpenDemoModal={handleOpenDemoModal} />

      {/* Hero & Storyline */}
      <Hero 
        onOpenDemoModal={handleOpenDemoModal} 
        onSubmitLead={handleSubmitLead} 
      />

      {/* Section 1: "More Than a Classroom." Strategic Journey */}
      <MoreThanClassroom onOpenDemoModal={handleOpenDemoModal} />

      {/* Section 2: 5 Workspace Roles (Admin, Superadmin, Teacher, Student, Parent) */}
      <RolesSection onOpenDemoModal={handleOpenDemoModal} />

      {/* Section 3: "Turn Your Coaching Into a Complete Learning Experience." (6 Categories) */}
      <CompleteExperience onOpenDemoModal={handleOpenDemoModal} />

      {/* Section 4: CBT Exam Prep & Live Scholarship Growth Tests */}
      <CbtAndGrowthTesting onOpenDemoModal={handleOpenDemoModal} />

      {/* Section 5: Online Course Sales, Question Bank Practice, & Public Content */}
      <OnlineGrowthSection onOpenDemoModal={handleOpenDemoModal} />

      {/* Section 6: Institute White-Label Branding & Unified Student Experience */}
      <BrandingAndStudentExp onOpenDemoModal={handleOpenDemoModal} />

      {/* Section 7: 10-Minute Setup & Comparison */}
      <SetupAndComparison onOpenDemoModal={handleOpenDemoModal} />

      {/* Section 8: Transparent Pricing */}
      <PricingSection onOpenDemoModal={handleOpenDemoModal} />

      {/* Section 9: FAQ Accordion */}
      <Faq onOpenDemoModal={handleOpenDemoModal} />

      {/* Section 10: Final Call to Action */}
      <CtaSection onOpenDemoModal={handleOpenDemoModal} />

      {/* Footer */}
      <Footer onOpenDemoModal={handleOpenDemoModal} />

      {/* Lead Generation Dialog Modal */}
      <LeadFormModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemoModal}
        onSubmitLead={handleSubmitLead}
      />

      {/* Toast Notification */}
      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage('')} 
      />

    </div>
  );
}
