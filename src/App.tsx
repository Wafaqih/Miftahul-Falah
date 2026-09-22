import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { PrayerTimesWidget } from './components/PrayerTimesWidget.tsx';
import { LeadershipSection } from './components/LeadershipSection.tsx';
import { ProgramsSection } from './components/ProgramsSection.tsx';
import { BiayaSection } from './components/BiayaSection.tsx';
import { DailyScheduleSection } from './components/DailyScheduleSection.tsx';
import { DewanSantriSection } from './components/DewanSantriSection.tsx';
import { NewsSection } from './components/NewsSection.tsx';
import { FacilitiesGallery } from './components/FacilitiesGallery.tsx';
import { CampusProximitySection } from './components/CampusProximitySection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer.tsx';
import { PsbRegistrationModal } from './components/PsbRegistrationModal.tsx';
import { AdminDashboard } from './components/AdminDashboard.tsx';
import { ContactWhatsAppModal } from './components/ContactWhatsAppModal.tsx';
import { PesantrenProvider } from './context/PesantrenContext.tsx';
import { Sparkles, MessageCircle } from 'lucide-react';

export default function App() {
  const [isPsbModalOpen, setIsPsbModalOpen] = useState(false);
  const [psbModalTab, setPsbModalTab] = useState<'register' | 'status' | 'fees'>('register');
  const [selectedProgramName, setSelectedProgramName] = useState<string | undefined>(undefined);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenPsbRegister = (programName?: string) => {
    setSelectedProgramName(programName);
    setPsbModalTab('register');
    setIsPsbModalOpen(true);
  };

  const handleOpenCheckStatus = () => {
    setSelectedProgramName(undefined);
    setPsbModalTab('status');
    setIsPsbModalOpen(true);
  };

  const handleOpenFees = () => {
    setSelectedProgramName(undefined);
    setPsbModalTab('fees');
    setIsPsbModalOpen(true);
  };

  return (
    <PesantrenProvider>
      <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans selection:bg-emerald-700 selection:text-white">
        {/* Navigation Bar with Domain Verification */}
        <Navbar 
          onOpenPsb={() => handleOpenPsbRegister()} 
          onOpenCheckStatus={handleOpenCheckStatus} 
          onOpenAdmin={() => setIsAdminModalOpen(true)}
          onOpenContactWhatsapp={() => setIsContactModalOpen(true)}
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero 
            onOpenPsb={() => handleOpenPsbRegister()} 
            onOpenFees={handleOpenFees} 
          />

          {/* Real-time Prayer Times Widget */}
          <PrayerTimesWidget />

          {/* Profile & Kyai Pengasuh */}
          <LeadershipSection />

          {/* Educational Programs & Curriculum */}
          <ProgramsSection 
            onSelectProgramToRegister={(progName) => handleOpenPsbRegister(progName)} 
          />

          {/* Biaya Bulanan & Tahunan (Termurah se-Kabupaten Bandung) */}
          <BiayaSection 
            onOpenPsb={() => handleOpenPsbRegister()}
            onOpenFeesModal={handleOpenFees}
            onOpenWhatsapp={() => setIsContactModalOpen(true)}
          />

          {/* 24-Hour Santri Daily Routine */}
          <DailyScheduleSection />

          {/* Student Council Programs & Extracurricular Activities */}
          <DewanSantriSection />

          {/* Strategic Location & Proximity to 6 Bandung/Jatinangor Universities with Interactive Map */}
          <CampusProximitySection 
            onOpenPsb={(progName) => handleOpenPsbRegister(progName)} 
          />

          {/* Campus Facilities */}
          <FacilitiesGallery />

          {/* News & Islamic Study Articles */}
          <NewsSection />

          {/* FAQ */}
          <FaqSection />
        </main>

        {/* Institutional Footer */}
        <Footer 
          onOpenPsb={() => handleOpenPsbRegister()} 
          onOpenCheckStatus={handleOpenCheckStatus} 
          onOpenFees={handleOpenFees} 
          onOpenAdmin={() => setIsAdminModalOpen(true)}
          onOpenContactWhatsapp={() => setIsContactModalOpen(true)}
        />

        {/* Interactive PSB Online Modal (Registration, Check Status, Fees) */}
        <PsbRegistrationModal
          isOpen={isPsbModalOpen}
          onClose={() => setIsPsbModalOpen(false)}
          defaultTab={psbModalTab}
          initialProgramChoice={selectedProgramName}
        />

        {/* Admin Dashboard Modal */}
        <AdminDashboard
          isOpen={isAdminModalOpen}
          onClose={() => setIsAdminModalOpen(false)}
        />

        {/* Contact WhatsApp Modal (Official, Rois, Roisah) */}
        <ContactWhatsAppModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />

        {/* Mobile Floating Action Bar */}
        <div className="fixed bottom-4 right-4 z-30 flex flex-col gap-2.5 sm:hidden">
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl flex items-center justify-center border-2 border-white cursor-pointer"
            aria-label="Chat WhatsApp Pengurus"
          >
            <MessageCircle className="w-6 h-6" />
          </button>

          <button
            onClick={() => handleOpenPsbRegister()}
            className="px-4 py-2.5 rounded-full bg-amber-500 text-emerald-950 font-bold text-xs shadow-xl flex items-center gap-1.5 border-2 border-white cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Daftar PSB</span>
          </button>
        </div>
      </div>
    </PesantrenProvider>
  );
}
