import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BannerCarousel from './components/BannerCarousel';
import Hero from './components/Hero';
import FeatureTabs from './components/FeatureTabs';
import RolesSection from './components/RolesSection';
import RoiCalculator from './components/RoiCalculator';
import HowItWorks from './components/HowItWorks';
import GrowthSection from './components/GrowthSection';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
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
    <div className="min-h-screen bg-[#F4F7F2] text-[#1D3728] selection:bg-[#7CA45E] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Navigation */}
      <Navbar onOpenDemoModal={handleOpenDemoModal} />

      {/* Top Banner Carousel */}
      <BannerCarousel onOpenDemoModal={handleOpenDemoModal} />

      {/* Cleaned Hero & Quick Lead Capture Section */}
      <Hero 
        onOpenDemoModal={handleOpenDemoModal} 
        onSubmitLead={handleSubmitLead} 
      />

      {/* Interactive Feature Tabs */}
      <FeatureTabs onOpenDemoModal={handleOpenDemoModal} />

      {/* Role-Based Workspaces Section */}
      <RolesSection onOpenDemoModal={handleOpenDemoModal} />

      {/* 4-Step Onboarding Workflow */}
      <HowItWorks onOpenDemoModal={handleOpenDemoModal} />

      {/* ROI & Savings Calculator */}
      <RoiCalculator onOpenDemoModal={handleOpenDemoModal} />

      {/* Organic Growth & Admissions Section */}
      <GrowthSection onOpenDemoModal={handleOpenDemoModal} />

      {/* Comparison Table */}
      <Comparison onOpenDemoModal={handleOpenDemoModal} />

      {/* Social Proof & Testimonials */}
      <Testimonials onOpenDemoModal={handleOpenDemoModal} />

      {/* FAQ Accordion */}
      <Faq onOpenDemoModal={handleOpenDemoModal} />

      {/* Footer */}
      <Footer onOpenDemoModal={handleOpenDemoModal} />

      {/* Auto-opening Lead Generation Dialog Modal */}
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
