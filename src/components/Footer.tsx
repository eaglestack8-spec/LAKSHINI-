import React from 'react';
import { Phone, Mail, MapPin, Clock, Shield, Award, ChevronRight, Edit3 } from 'lucide-react';
import { ClinicInfo, PageTab } from '../types';

interface FooterProps {
  clinic: ClinicInfo;
  setActiveTab: (tab: PageTab) => void;
  onOpenSettings?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  clinic,
  setActiveTab,
  onOpenSettings,
}) => {
  const handleNav = (tab: PageTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#052216] text-white border-t border-white/10 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Doctor Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <span className="font-heading font-bold text-lg text-white">L</span>
              </div>
              <div>
                <h3 className="font-heading font-light tracking-wide text-lg text-white">
                  LAKSHINI
                </h3>
                <p className="text-[10px] text-white/60 tracking-widest uppercase">Skin & Hair Centre</p>
              </div>
            </div>

            <div className="bg-white/5 p-3.5 rounded-2xl border border-white/10">
              <p className="text-white font-bold text-sm">{clinic.doctorName}</p>
              <p className="text-white/80 text-xs font-semibold">{clinic.degrees}</p>
              <p className="text-white/60 text-xs mt-1">{clinic.designation}</p>
            </div>

            <p className="text-xs text-white/60 leading-relaxed">
              Dedicated clinical dermatology, evidence-based hair loss treatments, and safe aesthetic dermatology in Tiruchirappalli.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-bold text-white/50 uppercase tracking-widest">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-white/70 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-white/70 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                  <span>About Doctor & Clinic</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="text-white/70 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                  <span>Dermatology Services</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-white/70 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                  <span>Contact & Clinic Location</span>
                </button>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={clinic.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-white/80 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10 transition-colors"
              >
                <MapPin className="w-3 h-3 text-emerald-400" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Col 3: Clinic Location & Address */}
          <div className="space-y-4">
            <h4 className="font-heading text-xs font-bold text-white/50 uppercase tracking-widest">
              Clinic Address
            </h4>
            <div className="text-xs text-white/75 space-y-1.5 leading-relaxed bg-white/5 p-3.5 rounded-2xl border border-white/10">
              <p className="font-semibold text-white">{clinic.name}</p>
              <p>{clinic.address.line1}</p>
              <p>{clinic.address.line2}</p>
              <p>
                {clinic.address.city} – {clinic.address.pincode}
              </p>
              <p>{clinic.address.state}, {clinic.address.country}</p>
            </div>
          </div>

          {/* Col 4: Direct Contact & Hours */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-heading text-xs font-bold text-white/50 uppercase tracking-widest">
                Direct Contact
              </h4>
              {onOpenSettings && (
                <button
                  onClick={onOpenSettings}
                  className="text-[10px] text-white/60 hover:text-white flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-full border border-white/10 transition-colors cursor-pointer"
                  title="Configure Contact Numbers"
                >
                  <Edit3 className="w-2.5 h-2.5" />
                  <span>Edit</span>
                </button>
              )}
            </div>

            <div className="space-y-2.5">
              <a
                href={`tel:${clinic.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-3 p-2.5 rounded-full bg-white text-[#0a4d33] hover:bg-opacity-90 transition-all font-bold text-xs shadow-md"
              >
                <div className="w-7 h-7 rounded-full bg-[#0a4d33] text-white flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 fill-white" />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-wider text-[#0a4d33]/70 font-bold">Call Clinic</div>
                  <div className="text-xs">{clinic.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${clinic.email}`}
                className="flex items-center gap-3 p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all text-xs font-medium"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="truncate">
                  <div className="text-[9px] uppercase tracking-wider text-white/50 font-bold">Email Clinic</div>
                  <div className="truncate text-xs">{clinic.email}</div>
                </div>
              </a>
            </div>

            <div className="pt-1 text-xs text-white/70">
              <p className="font-semibold text-white flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Consultation Hours:</span>
              </p>
              <p className="mt-1 ml-5 text-white/60 font-mono text-[11px]">
                {clinic.timings.morning}
              </p>
              <p className="ml-5 text-white/60 font-mono text-[11px]">
                {clinic.timings.evening}
              </p>
            </div>
          </div>
        </div>

        {/* Informational Disclaimer Banner */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center text-xs text-white/60 mb-8 max-w-4xl mx-auto">
          <p className="font-semibold text-white mb-1">
            Informational & Direct Contact Medical Portal
          </p>
          <p>
            This website provides educational and clinic contact information only. No online booking or online financial transactions are handled on this website. For diagnosis, consultation, and prescriptions, kindly visit Lakshini Skin & Hair Centre directly during consultation hours.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-3">
          <p>
            © {new Date().getFullYear()} Lakshini Skin & Hair Centre. All rights reserved. Dr. M. Karthikeyan, MBBS., DD.
          </p>
          <p className="text-white/40">
            West Thillai Nagar, Tiruchirappalli – 620018
          </p>
        </div>
      </div>
    </footer>
  );
};
