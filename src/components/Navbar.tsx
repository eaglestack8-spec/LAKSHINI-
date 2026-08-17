import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Menu, X, MapPin } from 'lucide-react';
import { PageTab, ClinicInfo } from '../types';

interface NavbarProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  clinic: ClinicInfo;
  onOpenEnquire: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  clinic,
  onOpenEnquire,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems: { id: PageTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 text-white transition-all duration-300 ${
        isScrolled
          ? 'bg-[#042114]/95 backdrop-blur-md border-b border-white/10 shadow-xl'
          : 'bg-[#062e1e] border-b border-white/10'
      }`}
    >
      {/* Top micro bar with address hint and quick hours - collapses or remains compact */}
      <div className="bg-[#03190f] text-white/70 text-xs py-1.5 px-4 hidden sm:block border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-white/80">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              West Thillai Nagar, Tiruchirappalli – 620018
            </span>
            <span className="hidden md:inline text-white/50">
              • Hours: {clinic.timings.morning} & {clinic.timings.evening}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={`mailto:${clinic.email}`}
              className="hover:text-white transition-colors flex items-center gap-1 text-white/70 hover:underline"
              title="Email the clinic"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{clinic.email}</span>
            </a>
            <span className="text-white/30">|</span>
            <a
              href={`tel:${clinic.phone.replace(/[^0-9+]/g, '')}`}
              className="hover:text-white transition-colors flex items-center gap-1 font-semibold text-white hover:underline"
              title="Call the clinic"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{clinic.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}
        >
          {/* Logo / Brand Header with subtle entrance animation */}
          <motion.button
            id="nav-brand-logo"
            onClick={() => handleNavClick('home')}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
          >
            {/* Medical Emblem */}
            <div
              className={`rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-inner group-hover:bg-white/15 transition-all ${
                isScrolled ? 'w-9 h-9' : 'w-11 h-11'
              }`}
            >
              <span
                className={`font-brand font-bold tracking-wider text-emerald-200 ${
                  isScrolled ? 'text-xl' : 'text-2xl'
                }`}
              >
                L
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span
                  className={`font-brand font-bold tracking-tight text-white group-hover:text-emerald-100 transition-colors ${
                    isScrolled ? 'text-xl' : 'text-2xl'
                  }`}
                >
                  LAKSHINI
                </span>
                <span className="text-[9px] tracking-widest uppercase bg-white/10 text-white/90 font-semibold px-2 py-0.5 rounded-full border border-white/20">
                  Centre
                </span>
              </div>
              <span className="text-[10px] tracking-[0.22em] uppercase text-white/60 font-medium -mt-0.5">
                Skin & Hair • Dr. M. Karthikeyan
              </span>
            </div>
          </motion.button>

          {/* Desktop Navigation Links (Home | About | Services | Contact) */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-wider uppercase">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1.5 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Call Now button (Micro-interaction enhanced) */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              id="nav-call-now-button"
              href={`tel:${clinic.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0a4d33] hover:bg-opacity-95 hover:shadow-lg hover:shadow-emerald-950/40 active:scale-97 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 fill-[#0a4d33] text-[#0a4d33]" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${clinic.phone.replace(/[^0-9+]/g, '')}`}
              className="p-2 bg-white text-[#0a4d33] rounded-full font-bold text-xs flex items-center gap-1 shadow active:scale-95 transition-transform"
              aria-label="Call clinic"
            >
              <Phone className="w-3.5 h-3.5 fill-[#0a4d33]" />
              <span>Call</span>
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 focus:outline-none border border-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden bg-[#042114] border-t border-white/10 px-4 pt-3 pb-6 space-y-3 shadow-2xl"
        >
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-white text-[#0a4d33] font-bold shadow'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#0a4d33]" />}
                </button>
              );
            })}
          </div>

          {/* Mobile Direct Action Buttons */}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              id="mobile-nav-call-btn"
              href={`tel:${clinic.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full flex items-center justify-center gap-2 bg-white text-[#0a4d33] py-3 rounded-full font-bold text-xs uppercase tracking-wider text-center shadow active:scale-98 transition-transform"
            >
              <Phone className="w-4 h-4 fill-[#0a4d33]" />
              <span>Call Now ({clinic.phone})</span>
            </a>
            <a
              id="mobile-nav-email-btn"
              href={`mailto:${clinic.email}`}
              className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 py-2.5 rounded-full font-semibold text-center text-xs uppercase tracking-wider transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email Us</span>
            </a>
          </div>

          <div className="text-center pt-2 text-xs text-white/50">
            <p className="font-semibold text-white/80">{clinic.doctorName}, {clinic.degrees}</p>
            <p>West Thillai Nagar, Tiruchirappalli</p>
          </div>
        </motion.div>
      )}
    </header>
  );
};
