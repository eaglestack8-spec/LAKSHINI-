import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Navigation,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Building,
  Sparkles,
} from 'lucide-react';
import { ClinicInfo } from '../types';

interface ContactPageProps {
  clinic: ClinicInfo;
  onOpenSettings?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  clinic,
  onOpenSettings,
}) => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const fullAddressString = `${clinic.name}, Dr. M. Karthikeyan, MBBS., DD., ${clinic.address.line1}, ${clinic.address.line2}, ${clinic.address.city} – ${clinic.address.pincode}, ${clinic.address.state}, ${clinic.address.country}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddressString);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(clinic.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="bg-[#062b1b] text-white">
      {/* 1. Main Contact Header & Overview */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#042114] to-[#062b1b] border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <div className="h-[1px] w-6 bg-emerald-400/60" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-300">
              Direct Clinic Communications
            </span>
            <div className="h-[1px] w-6 bg-emerald-400/60" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl sm:text-6xl font-light text-white tracking-tight leading-tight"
          >
            Get in <span className="font-bold italic text-white">Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Have questions about your skin, hair, or scalp concerns? Contact Lakshini Skin & Hair Centre directly.
          </motion.p>

          {/* Clinic & Doctor Display Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4 max-w-xl mx-auto"
          >
            <div className="bg-white/5 p-6 rounded-3xl border border-white/15 shadow-xl text-center space-y-1 relative overflow-hidden backdrop-blur-xs">
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300">
                Specialist Dermatology Clinic
              </span>
              <h2 className="font-heading text-2xl font-light text-white tracking-tight">
                {clinic.name}
              </h2>
              <p className="text-sm font-bold text-white/90">
                {clinic.doctorName}, {clinic.degrees}
              </p>
              <p className="text-xs text-white/60">
                Senior Consultant Dermatologist & Hair Specialist • West Thillai Nagar, Trichy
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TWO PREMIUM CONTACT CARDS */}
      <section className="py-12 sm:py-20 bg-[#062b1b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Call the Clinic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 text-white rounded-3xl p-8 shadow-2xl border border-white/10 flex flex-col justify-between space-y-6 hover:bg-white/10 hover:border-emerald-400/30 hover:-translate-y-1.5 luxury-card-glow transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-emerald-300">
                  <Phone className="w-7 h-7 fill-emerald-300 text-emerald-300" />
                </div>

                <div>
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block">
                    Phone Consultation & Enquiry
                  </span>
                  <h3 className="font-heading text-2xl font-light text-white mt-1">
                    Call the <span className="font-bold italic">Clinic</span>
                  </h3>
                  <p className="text-xs text-white/70 mt-1">
                    Speak directly with our clinic desk regarding doctor availability and consultation timings.
                  </p>
                </div>

                {/* Primary Clinic Phone Number */}
                <div className="bg-black/30 p-5 rounded-2xl border border-white/10">
                  <div className="text-[11px] font-bold text-white/60 uppercase tracking-wider mb-1">
                    Clinic Primary Line:
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl sm:text-2xl font-extrabold text-white">
                      {clinic.phone}
                    </span>
                    <button
                      onClick={handleCopyPhone}
                      className="p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg border border-white/10 text-xs flex items-center gap-1.5 cursor-pointer transition-colors"
                      title="Copy phone number"
                    >
                      {copiedPhone ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-[11px] font-semibold text-emerald-300">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-[11px]">Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {clinic.alternatePhone && (
                    <div className="text-xs text-white/70 pt-2 border-t border-white/10 mt-2 flex justify-between">
                      <span>Alternate / Landline:</span>
                      <span className="font-semibold text-white">{clinic.alternatePhone}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Exact Button: "Call Now" */}
              <a
                id="contact-page-call-btn"
                href={`tel:${clinic.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-white hover:bg-emerald-50 active:scale-98 text-[#0a4d33] px-6 py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-[#0a4d33] text-[#0a4d33]" />
                <span>Call Clinic Now</span>
              </a>
            </motion.div>

            {/* Card 2: Email the Clinic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 text-white rounded-3xl p-8 shadow-2xl border border-white/10 flex flex-col justify-between space-y-6 hover:bg-white/10 hover:border-emerald-400/30 hover:-translate-y-1.5 luxury-card-glow transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-emerald-300">
                  <Mail className="w-7 h-7 text-emerald-300" />
                </div>

                <div>
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block">
                    Written Inquiries & Reports
                  </span>
                  <h3 className="font-heading text-2xl font-light text-white mt-1">
                    Email the <span className="font-bold italic">Clinic</span>
                  </h3>
                  <p className="text-xs text-white/70 mt-1">
                    Send detailed messages, treatment enquiries, or report questions directly to the clinic inbox.
                  </p>
                </div>

                {/* Clinic Email Address */}
                <div className="bg-black/30 p-5 rounded-2xl border border-white/10">
                  <div className="text-[11px] font-bold text-white/60 uppercase tracking-wider mb-1">
                    Clinic Official Email:
                  </div>
                  <div className="font-mono text-sm sm:text-base font-bold text-white truncate">
                    {clinic.email}
                  </div>
                  <div className="text-[11px] text-white/60 mt-1">
                    Responses managed by clinic administrative staff.
                  </div>
                </div>
              </div>

              {/* Exact Button: "Email Us" */}
              <a
                id="contact-page-email-btn"
                href={`mailto:${clinic.email}?subject=Inquiry%20from%20Patient%20-%20Lakshini%20Skin%20Centre`}
                className="w-full inline-flex items-center justify-center gap-2.5 border border-white/30 hover:bg-white/10 text-white px-6 py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg transition-all cursor-pointer active:scale-98"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>Email Us</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Address & Consultation Hours Detail Grid */}
      <section className="py-16 bg-[#042114] border-t border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-white/10 rounded-xl text-emerald-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white">
                    Clinic Address
                  </h3>
                </div>

                <button
                  onClick={handleCopyAddress}
                  className="text-xs text-white/80 hover:text-white bg-white/10 px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 cursor-pointer hover:bg-white/20 transition-colors"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Exact Address as specified */}
              <div className="text-white/80 text-sm sm:text-base leading-relaxed bg-black/25 p-4 rounded-2xl border border-white/10">
                <p className="font-bold text-white text-base mb-1">
                  Lakshini Skin & Hair Centre
                </p>
                <p className="text-white/70 text-xs font-semibold mb-2">
                  Dr. M. Karthikeyan, MBBS., DD.
                </p>
                <p>{clinic.address.line1},</p>
                <p>{clinic.address.line2},</p>
                <p>
                  {clinic.address.city} – {clinic.address.pincode},
                </p>
                <p>
                  {clinic.address.state}, {clinic.address.country}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={clinic.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 px-5 py-3 rounded-full border border-white/20 shadow transition-all hover:translate-x-1"
                >
                  <Navigation className="w-4 h-4 text-emerald-300" />
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-3 h-3 text-emerald-300" />
                </a>
              </div>
            </motion.div>

            {/* Consultation Timings Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-white/10 rounded-xl text-emerald-300">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white">
                  Consultation Timings
                </h3>
              </div>

              <div className="space-y-3">
                <div className="bg-black/25 p-4 rounded-2xl border border-white/10 space-y-2 text-sm">
                  <div className="flex justify-between items-center text-white/90">
                    <span className="font-semibold text-white">Morning Session:</span>
                    <span className="font-mono text-emerald-300 font-bold">
                      {clinic.timings.morning}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-white/90 pt-2 border-t border-white/10">
                    <span className="font-semibold text-white">Evening Session:</span>
                    <span className="font-mono text-emerald-300 font-bold">
                      {clinic.timings.evening}
                    </span>
                  </div>
                </div>

                <div className="bg-black/15 p-3.5 rounded-xl border border-white/10 text-xs text-white/80 space-y-1">
                  <p className="font-bold text-white">
                    Working Days: {clinic.timings.days}
                  </p>
                  <p className="text-emerald-300 font-medium">
                    {clinic.timings.sunday}
                  </p>
                </div>

                <p className="text-xs text-white/55 leading-relaxed pt-1">
                  Walk-in consultations are welcome during the above hours. You may call the clinic phone prior to your arrival to confirm current doctor availability.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. GOOGLE MAPS LOCATION SECTION */}
      <section className="py-16 sm:py-24 bg-[#062b1b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="font-heading text-2xl sm:text-4xl font-light text-white">
              Clinic Location <span className="font-bold italic text-white">Map</span>
            </h3>
            <p className="text-xs sm:text-sm text-white/60">
              West Thillai Nagar, Tiruchirappalli – 620018
            </p>
          </div>

          {/* Interactive Google Map Embed Card */}
          <div className="rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-black/40">
            <div className="bg-black/60 px-6 py-3.5 border-b border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-semibold text-white/85 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>B4, 19, 1st Cross Road, West Thillai Nagar, Trichy</span>
              </span>
              <a
                href={clinic.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-white font-bold flex items-center gap-1 transition-colors"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="relative w-full h-80 sm:h-96">
              <iframe
                title="Lakshini Skin & Hair Centre Location"
                src={clinic.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter brightness-95 contrast-105"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
