import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, ChevronUp, Clock } from 'lucide-react';
import { ClinicInfo } from '../types';

interface QuickContactBarProps {
  clinic: ClinicInfo;
  onOpenEnquire: () => void;
}

export const QuickContactBar: React.FC<QuickContactBarProps> = ({
  clinic,
  onOpenEnquire,
}) => {
  return (
    <>
      {/* Mobile Fixed Bottom Bar (Call Now & Email Us) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#07301f]/95 backdrop-blur-md border-t border-white/15 p-3 sm:hidden shadow-2xl flex items-center gap-3">
        <a
          href={`tel:${clinic.phone.replace(/[^0-9+]/g, '')}`}
          className="flex-1 bg-white text-[#0a4d33] py-2.5 px-3 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-98 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 fill-[#0a4d33]" />
          <span>Call Now</span>
        </a>

        <a
          href={`mailto:${clinic.email}?subject=Inquiry%20from%20Website`}
          className="flex-1 bg-white/10 text-white border border-white/20 py-2.5 px-3 rounded-full font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow active:scale-98 transition-transform"
        >
          <Mail className="w-3.5 h-3.5 text-white" />
          <span>Email Us</span>
        </a>
      </div>

      {/* Desktop Floating Speed Dial Card */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-40">
        <div className="bg-[#07301f]/95 border border-white/15 rounded-2xl p-4 shadow-2xl space-y-3 max-w-xs text-white backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">
                Direct Contact
              </span>
            </div>
            <span className="text-[10px] text-white/50">Mon–Sat</span>
          </div>

          <div className="space-y-2">
            <a
              href={`tel:${clinic.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full flex items-center justify-between bg-white text-[#0a4d33] hover:bg-opacity-90 py-2.5 px-4 rounded-full font-bold text-xs transition-all shadow"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 fill-[#0a4d33]" />
                <span className="text-xs">{clinic.phone}</span>
              </div>
              <span className="text-[9px] bg-[#0a4d33] text-white px-2 py-0.5 rounded-full font-bold tracking-wider">
                DIAL
              </span>
            </a>

            <a
              href={`mailto:${clinic.email}`}
              className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 text-white border border-white/10 py-2 px-4 rounded-full text-xs font-medium transition-colors"
            >
              <div className="flex items-center gap-2 truncate">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate text-xs text-white/80">{clinic.email}</span>
              </div>
            </a>
          </div>

          <div className="pt-1 text-[10px] text-white/60 text-center flex items-center justify-center gap-1.5 font-medium">
            <Clock className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>{clinic.timings.morning} & {clinic.timings.evening}</span>
          </div>
        </div>
      </div>
    </>
  );
};
