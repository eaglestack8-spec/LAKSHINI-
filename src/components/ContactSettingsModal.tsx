import React, { useState, useEffect } from 'react';
import { X, Save, Phone, Mail, MapPin, Check, RotateCcw } from 'lucide-react';
import { ClinicInfo } from '../types';

interface ContactSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  clinic: ClinicInfo;
  onSave: (updated: ClinicInfo) => void;
  onReset: () => void;
}

export const ContactSettingsModal: React.FC<ContactSettingsModalProps> = ({
  isOpen,
  onClose,
  clinic,
  onSave,
  onReset,
}) => {
  const [phone, setPhone] = useState(clinic.phone);
  const [alternatePhone, setAlternatePhone] = useState(clinic.alternatePhone);
  const [email, setEmail] = useState(clinic.email);
  const [morningTiming, setMorningTiming] = useState(clinic.timings.morning);
  const [eveningTiming, setEveningTiming] = useState(clinic.timings.evening);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setPhone(clinic.phone);
      setAlternatePhone(clinic.alternatePhone);
      setEmail(clinic.email);
      setMorningTiming(clinic.timings.morning);
      setEveningTiming(clinic.timings.evening);
    }
  }, [isOpen, clinic]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...clinic,
      phone,
      alternatePhone,
      email,
      timings: {
        ...clinic.timings,
        morning: morningTiming,
        evening: eveningTiming,
      },
    });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-settings-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
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
            <h3 id="contact-settings-modal-title" className="text-base font-light text-white font-heading">
              Update Clinic Contact Details
            </h3>
            <p className="text-xs text-white/50">
              Customize the phone and email placeholders across the website
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-white/80 mb-1">
              Primary Clinic Phone Number (Click to Call)
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-emerald-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98424 XXXXX"
                className="w-full bg-black/30 border border-white/20 rounded-xl pl-10 pr-3 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50"
                required
              />
            </div>
            <p className="text-[10px] text-white/50 mt-1">
              Used in all "Call Now" buttons and headers.
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/80 mb-1">
              Alternate / Landline Phone Number
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-emerald-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={alternatePhone}
                onChange={(e) => setAlternatePhone(e.target.value)}
                placeholder="+91 431 2700000"
                className="w-full bg-black/30 border border-white/20 rounded-xl pl-10 pr-3 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/80 mb-1">
              Clinic Email Address (Click to Email)
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-emerald-400 absolute left-3.5 top-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="contact@lakshiniskinandhair.com"
                className="w-full bg-black/30 border border-white/20 rounded-xl pl-10 pr-3 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/50"
                required
              />
            </div>
            <p className="text-[10px] text-white/50 mt-1">
              Used in all "Email Us" mailto links.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div>
              <label className="block text-xs font-semibold text-white/80 mb-1">
                Morning Hours
              </label>
              <input
                type="text"
                value={morningTiming}
                onChange={(e) => setMorningTiming(e.target.value)}
                className="w-full bg-black/30 border border-white/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-white/50"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/80 mb-1">
                Evening Hours
              </label>
              <input
                type="text"
                value={eveningTiming}
                onChange={(e) => setEveningTiming(e.target.value)}
                className="w-full bg-black/30 border border-white/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-white/50"
              />
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-white/10">
            <button
              type="button"
              onClick={() => {
                onReset();
                onClose();
              }}
              className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white bg-transparent hover:bg-white/5 px-3 py-2 rounded-full transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <button
              type="submit"
              className="flex items-center gap-2 bg-white text-[#0a4d33] hover:bg-opacity-90 active:scale-98 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-700" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 fill-[#0a4d33]" />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
