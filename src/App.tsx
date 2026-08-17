/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CLINIC_DETAILS, SERVICES_LIST } from './data/clinicData';
import { PageTab, ClinicInfo } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { ContactPage } from './components/ContactPage';
import { EnquireModal } from './components/EnquireModal';
import { ContactSettingsModal } from './components/ContactSettingsModal';
import { QuickContactBar } from './components/QuickContactBar';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [isLoading, setIsLoading] = useState(true);
  const [clinic, setClinic] = useState<ClinicInfo>(() => {
    try {
      const saved = localStorage.getItem('lakshini_clinic_config');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.phone === '+91 98424 00000') {
          parsed.phone = CLINIC_DETAILS.phone;
        }
        if (!parsed.timings || parsed.timings.evening !== CLINIC_DETAILS.timings.evening || parsed.timings.morning !== CLINIC_DETAILS.timings.morning) {
          parsed.timings = {
            ...CLINIC_DETAILS.timings,
            ...(parsed.timings || {}),
            morning: CLINIC_DETAILS.timings.morning,
            evening: CLINIC_DETAILS.timings.evening,
          };
        }
        return parsed;
      }
    } catch {
      // fallback
    }
    return CLINIC_DETAILS;
  });

  const [enquireModalOpen, setEnquireModalOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string | undefined>(undefined);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);

  // Short initial luxury loading experience (< 850ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 850);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenEnquire = (serviceName?: string) => {
    setSelectedServiceTitle(serviceName);
    setEnquireModalOpen(true);
  };

  const handleSaveClinicSettings = (updated: ClinicInfo) => {
    setClinic(updated);
    try {
      localStorage.setItem('lakshini_clinic_config', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleResetDefaults = () => {
    setClinic(CLINIC_DETAILS);
    try {
      localStorage.removeItem('lakshini_clinic_config');
    } catch {
      // ignore
    }
  };

  // Scroll to top whenever tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#062b1b] text-white flex flex-col font-sans selection:bg-emerald-500 selection:text-white relative">
      {/* Initial Luxury Brand Intro Loader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="luxury-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
            className="fixed inset-0 z-50 bg-[#042114] flex flex-col items-center justify-center pointer-events-none"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-4 text-center px-4"
            >
              {/* Emblem with subtle glowing ring */}
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-2xl backdrop-blur-md">
                  <span className="font-brand font-bold text-3xl text-emerald-200">L</span>
                </div>
                <div className="absolute inset-0 rounded-2xl border border-emerald-400/40 animate-ping opacity-40" />
              </div>

              <div>
                <h1 className="font-brand font-bold text-2xl tracking-widest text-white">
                  LAKSHINI
                </h1>
                <p className="text-[10px] tracking-[0.3em] uppercase text-emerald-300/80 font-medium mt-1">
                  Skin & Hair Centre
                </p>
              </div>

              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent mt-1" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Header / Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        clinic={clinic}
        onOpenEnquire={handleOpenEnquire}
      />

      {/* 2. Main Page Content View with smooth Tab Transitions */}
      <main className="flex-1 pb-16 sm:pb-0 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {activeTab === 'home' && (
              <HomePage
                clinic={clinic}
                services={SERVICES_LIST}
                setActiveTab={setActiveTab}
                onOpenEnquire={handleOpenEnquire}
              />
            )}

            {activeTab === 'about' && (
              <AboutPage
                clinic={clinic}
                setActiveTab={setActiveTab}
                onOpenEnquire={handleOpenEnquire}
              />
            )}

            {activeTab === 'services' && (
              <ServicesPage
                clinic={clinic}
                services={SERVICES_LIST}
                setActiveTab={setActiveTab}
                onOpenEnquire={handleOpenEnquire}
              />
            )}

            {activeTab === 'contact' && (
              <ContactPage
                clinic={clinic}
                onOpenSettings={() => setSettingsModalOpen(true)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Footer */}
      <Footer
        clinic={clinic}
        setActiveTab={setActiveTab}
        onOpenSettings={() => setSettingsModalOpen(true)}
      />

      {/* 4. Speed Dial / Quick Contact Floater */}
      <QuickContactBar
        clinic={clinic}
        onOpenEnquire={() => handleOpenEnquire()}
      />

      {/* 5. Enquire Now Modal (Direct Call & Direct Email - NO online booking) */}
      <EnquireModal
        isOpen={enquireModalOpen}
        onClose={() => setEnquireModalOpen(false)}
        serviceTitle={selectedServiceTitle}
        clinic={clinic}
      />

      {/* 6. Settings Modal to customize editable phone/email placeholder */}
      <ContactSettingsModal
        isOpen={settingsModalOpen}
        onClose={() => setSettingsModalOpen(false)}
        clinic={clinic}
        onSave={handleSaveClinicSettings}
        onReset={handleResetDefaults}
      />
    </div>
  );
}
