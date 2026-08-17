import React, { useEffect } from 'react';
import { X, Phone, Mail, Clock, MapPin, CheckCircle2, Shield } from 'lucide-react';
import { ClinicInfo } from '../types';

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
  clinic: ClinicInfo;
}

export const EnquireModal: React.FC<EnquireModalProps> = ({
  isOpen,
  onClose,
  serviceTitle,
  clinic,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquire-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-lg bg-[#07301f] text-white rounded-2xl border border-white/15 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-black/20 px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">
              Direct Clinic Enquiry
            </span>
            <h3 id="enquire-modal-title" className="text-lg font-light text-white font-heading">
              {serviceTitle ? `Enquire about: ${serviceTitle}` : 'Contact the Clinic'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
            <div className="text-white font-bold text-sm">Lakshini Skin & Hair Centre</div>
            <div className="text-white/80 text-xs font-medium">
              Dr. M. Karthikeyan, MBBS., DD. • Dermatologist & Cosmetologist
            </div>
            <div className="text-white/50 text-[11px] mt-1">
              B4, 19, 1st Cross Road, West Thillai Nagar, Tiruchirappalli
            </div>
          </div>

          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Please call or email the clinic directly to check doctor availability, consultation hours, or ask questions regarding {serviceTitle || 'treatments'}.
          </p>

          {/* Primary Direct Actions */}
          <div className="space-y-3">
            {/* Call Now Button */}
            <a
              id="modal-call-button"
              href={`tel:${clinic.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full flex items-center justify-between bg-white text-[#0a4d33] hover:bg-opacity-90 active:scale-98 px-5 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0a4d33] text-white flex items-center justify-center">
                  <Phone className="w-4 h-4 fill-white" />
                </div>
                <div className="text-left">
                  <div className="text-[9px] text-[#0a4d33]/70 font-bold tracking-widest">
                    Call Now (Direct Line)
                  </div>
                  <div className="text-sm font-bold text-[#0a4d33]">{clinic.phone}</div>
                </div>
              </div>
              <span className="text-[10px] bg-[#0a4d33] text-white px-3 py-1.5 rounded-full group-hover:bg-[#07301f] transition-colors">
                Dial Now
              </span>
            </a>

            {/* Email Us Button */}
            <a
              id="modal-email-button"
              href={`mailto:${clinic.email}?subject=${encodeURIComponent(
                serviceTitle ? `Inquiry regarding ${serviceTitle} - Lakshini Skin & Hair Centre` : 'Inquiry - Lakshini Skin & Hair Centre'
              )}`}
              className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 text-white border border-white/20 px-5 py-3.5 rounded-full font-semibold text-xs transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[9px] text-white/50 font-bold uppercase tracking-widest">
                    Email Clinic
                  </div>
                  <div className="text-xs text-white truncate max-w-[180px] sm:max-w-xs">{clinic.email}</div>
                </div>
              </div>
              <span className="text-[10px] bg-white/10 text-white px-3 py-1.5 rounded-full group-hover:bg-white/20 transition-colors uppercase tracking-wider">
                Send Email
              </span>
            </a>
          </div>

          {/* Timings summary */}
          <div className="p-3.5 bg-black/20 rounded-xl border border-white/10 text-xs space-y-1">
            <div className="flex items-center gap-1.5 text-white/70 font-semibold">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Consultation Timings</span>
            </div>
            <div className="flex justify-between text-white/60 pl-5 text-[11px]">
              <span>Morning: {clinic.timings.morning}</span>
              <span>Evening: {clinic.timings.evening}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-black/20 px-6 py-3 border-t border-white/10 text-center">
          <p className="text-[10px] text-white/50">
            No online booking or payment required • Walk-in & direct phone enquiries welcome
          </p>
        </div>
      </div>
    </div>
  );
};
