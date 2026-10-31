import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActionWidget from './components/FloatingActionWidget';
import LeadFormModal from './components/LeadFormModal';
import Toast from './components/Toast';
import { submitLeadToGoogleSheet } from './utils/leadCapture';

// Multi-Page Views
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import DemoPage from './pages/DemoPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  // Read initial page from hash or default to 'home'
  const getInitialPage = () => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '').trim();
      const validPages = ['home', 'features', 'demo', 'about', 'pricing', 'contact'];
      if (validPages.includes(hash)) return hash;
    }
    return 'home';
  };

  const [activePage, setActivePage] = useState(getInitialPage);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Synchronize hash with browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      const validPages = ['home', 'features', 'demo', 'about', 'pricing', 'contact'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  const handleSubmitLead = async (leadData) => {
    console.log("Lead captured:", leadData);
    await submitLeadToGoogleSheet(leadData);
    setToastMessage(`Thank you ${leadData.ownerName || leadData.instituteName}! Our Senior EdTech Advisor will connect with you at ${leadData.mobile}.`);
    setTimeout(() => {
      setToastMessage('');
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-[#fdfff9] text-[#28371B] selection:bg-[#7B9D60] selection:text-white font-sans antialiased overflow-x-hidden flex flex-col justify-between">
      
      {/* Top Header Navigation with Multi-Page Tabs */}
      <Navbar 
        activePage={activePage} 
        onNavigate={navigateTo} 
        onOpenDemoModal={handleOpenDemoModal} 
      />

      {/* Main Multi-Page View Container */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage 
            onNavigate={navigateTo} 
            onOpenDemoModal={handleOpenDemoModal} 
            onSubmitLead={handleSubmitLead} 
          />
        )}

        {activePage === 'features' && (
          <FeaturesPage 
            onNavigate={navigateTo} 
            onOpenDemoModal={handleOpenDemoModal} 
          />
        )}

        {activePage === 'demo' && (
          <DemoPage 
            onNavigate={navigateTo} 
            onOpenDemoModal={handleOpenDemoModal} 
          />
        )}

        {activePage === 'about' && (
          <AboutPage 
            onNavigate={navigateTo} 
            onOpenDemoModal={handleOpenDemoModal} 
          />
        )}

        {activePage === 'pricing' && (
          <PricingPage 
            onNavigate={navigateTo} 
            onOpenDemoModal={handleOpenDemoModal} 
          />
        )}

        {activePage === 'contact' && (
          <ContactPage 
            onNavigate={navigateTo} 
            onOpenDemoModal={handleOpenDemoModal} 
            onSubmitLead={handleSubmitLead} 
          />
        )}
      </main>

      {/* Enterprise Footer with Cross-Page Links */}
      <Footer 
        onNavigate={navigateTo} 
        onOpenDemoModal={handleOpenDemoModal} 
      />

      {/* Persistent Floating WhatsApp & Demo Action Widget */}
      <FloatingActionWidget onOpenDemoModal={handleOpenDemoModal} />

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
