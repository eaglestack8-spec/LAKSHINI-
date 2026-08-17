import React from 'react';
import { Phone, Mail, Clock, MapPin, Sparkles } from 'lucide-react';
import { ClinicInfo } from '../types';

interface HomeBottomCTAProps {
  clinic: ClinicInfo;
  onOpenEnquire?: () => void;
}

export const HomeBottomCTA: React.FC<HomeBottomCTAProps> = ({ clinic }) => {
  return (
    <section className="relative overflow-hidden bg-[#07301f] text-white py-16 sm:py-20 border-t border-white/10">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-[1px] w-6 bg-white/40" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/70">
            Direct Doctor Consultation
          </span>
          <div className="h-[1px] w-6 bg-white/40" />
        </div>

        {/* Heading */}
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
          Have a Skin or <span className="font-bold italic">Hair Concern?</span>
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Speak directly with Lakshini Skin & Hair Centre.
        </p>

        {/* Direct Contact Details Display */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 max-w-2xl mx-auto shadow-xl">
          <div className="text-white/60 text-xs font-medium mb-2 tracking-wide">
            Dr. M. Karthikeyan, MBBS., DD. • West Thillai Nagar, Tiruchirappalli
          </div>
          <div className="text-white text-base sm:text-lg font-bold flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-emerald-300" />
              <span>{clinic.phone}</span>
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-emerald-300" />
              <span className="text-sm sm:text-base">{clinic.email}</span>
            </span>
          </div>
        </div>

        {/* Buttons: "Call Now" and "Email Us" (NO Book Appointment) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            id="bottom-cta-call-now"
            href={`tel:${clinic.phone.replace(/[^0-9+]/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#0a4d33] hover:bg-opacity-90 active:scale-98 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md transition-all cursor-pointer"
          >
            <Phone className="w-4 h-4 fill-[#0a4d33] text-[#0a4d33]" />
            <span>Call Now</span>
          </a>

          <a
            id="bottom-cta-email-us"
            href={`mailto:${clinic.email}?subject=Inquiry%20-%20Lakshini%20Skin%20%26%20Hair%20Centre`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-white/30 hover:bg-white/5 text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4 text-white" />
            <span>Email Us</span>
          </a>
        </div>

        {/* Timings reminder */}
        <p className="text-xs text-white/50 mt-6 flex items-center justify-center gap-2">
          <Clock className="w-3.5 h-3.5 text-white/60" />
          <span>Consultation Timings: {clinic.timings.morning} & {clinic.timings.evening} (Mon–Sat)</span>
        </p>
      </div>
    </section>
  );
};
