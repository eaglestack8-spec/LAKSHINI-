import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  Mail,
  Award,
  ShieldCheck,
  HeartHandshake,
  MapPin,
  Clock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Stethoscope,
  Activity,
  ChevronDown,
  Info,
} from 'lucide-react';
import { ClinicInfo, PageTab, ServiceItem } from '../types';
import { HomeBottomCTA } from './HomeBottomCTA';

interface HomePageProps {
  clinic: ClinicInfo;
  services: ServiceItem[];
  setActiveTab: (tab: PageTab) => void;
  onOpenEnquire: (serviceName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  clinic,
  services,
  setActiveTab,
  onOpenEnquire,
}) => {
  const featuredServices = services.slice(0, 4);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="bg-[#062b1b] text-white">
      {/* 1. HERO SECTION - Sophisticated Dark Layout with Sequenced Entrance */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#042114] via-[#062b1b] to-[#062b1b]">
        {/* Subtle background ambient glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Sophisticated Dark Copy with Sequenced Animation */}
            <motion.div
              className="lg:col-span-7 space-y-6 text-left"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Eyebrow with hairline */}
              <motion.div variants={itemVariants} className="flex items-center gap-2.5">
                <div className="h-[1px] w-8 bg-emerald-400/60" />
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-300">
                  Dermatology & Trichology Centre
                </span>
                <div className="h-[1px] w-4 bg-emerald-400/40" />
              </motion.div>

              {/* Main Headline with high-contrast display typography */}
              <motion.h1
                variants={itemVariants}
                className="font-heading text-4xl sm:text-6xl lg:text-[64px] font-light leading-[1.08] text-white tracking-tight"
              >
                Clinical Skin & <br />
                <span className="font-bold italic text-white">Hair Care Excellence.</span>
              </motion.h1>

              {/* Doctor Details & Clinical Integrity */}
              <motion.div variants={itemVariants} className="space-y-2 pt-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {clinic.doctorName}
                  </p>
                  <span className="text-xs uppercase font-bold tracking-wider bg-white/10 px-2.5 py-1 rounded-full border border-white/20 text-emerald-200">
                    {clinic.degrees}
                  </span>
                </div>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                  Senior consultant dermatologist with 20+ years of clinical experience, providing ethical, evidence-based skin, hair, and scalp care in Tiruchirappalli.
                </p>
              </motion.div>

              {/* Action Buttons matching theme with micro-interactions */}
              <motion.div
                variants={itemVariants}
                className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <a
                  id="hero-call-now-btn"
                  href={`tel:${clinic.phone.replace(/[^0-9+]/g, '')}`}
                  className="group bg-white text-[#0a4d33] px-8 py-3.5 rounded-full font-bold uppercase text-xs tracking-widest inline-flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/40 hover:bg-opacity-95 active:scale-97 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-[#0a4d33] text-[#0a4d33] group-hover:rotate-12 transition-transform duration-300" />
                  <span>Call Clinic: {clinic.phone}</span>
                </a>

                <a
                  id="hero-email-us-btn"
                  href={`mailto:${clinic.email}?subject=Inquiry%20from%20Lakshini%20Skin%20Centre`}
                  className="border border-white/30 text-white px-8 py-3.5 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white/10 hover:border-white/50 active:scale-97 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-white/80" />
                  <span>Email Inquiries</span>
                </a>
              </motion.div>

              {/* Subtle timing and address badges */}
              <motion.div
                variants={itemVariants}
                className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-white/65"
              >
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  <Clock className="w-3.5 h-3.5 text-emerald-300" />
                  <span>
                    Sessions: {clinic.timings.morning} & {clinic.timings.evening}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-emerald-300" />
                  <span>West Thillai Nagar, Trichy</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Col: Hero Visual Card with gentle slow-moving floating effect & editorial image */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, scale: 1.03, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <div className="w-full min-h-[440px] rounded-3xl bg-gradient-to-br from-[#0a4d33] via-[#083a26] to-[#042114] border border-white/20 relative overflow-hidden flex flex-col justify-between p-8 shadow-2xl group animate-slow-float">
                {/* Dot Pattern Backdrop */}
                <div className="absolute inset-0 opacity-15 sophisticated-pattern" />

                {/* Subtle emerald ambient spotlight */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-emerald-400/10 blur-2xl animate-subtle-pulse pointer-events-none" />

                {/* Top Clinic Identification */}
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-emerald-300 font-bold block">
                      Consultant Dermatologist
                    </span>
                    <span className="text-base font-bold tracking-tight text-white">
                      Lakshini Skin & Hair Centre
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                    <span className="font-brand font-bold text-lg text-emerald-200">L</span>
                  </div>
                </div>

                {/* Aesthetic Center Emblem & Visual Focal Point */}
                <div className="relative z-10 my-auto py-6 text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md shadow-inner text-emerald-200">
                    <Stethoscope className="w-10 h-10 text-emerald-300 stroke-[1.5]" />
                  </div>

                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold tracking-wider font-brand text-white">
                      LAKSHINI
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-semibold mt-1">
                      Trichy • Established Clinical Care
                    </div>
                  </div>
                </div>

                {/* Bottom Glass Badge with Doctor Quick Info & Direct Action */}
                <div className="relative z-10 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 shadow-lg">
                  <div className="flex justify-between items-center gap-3">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-emerald-300 font-semibold">
                        In-Person Consultations
                      </div>
                      <div className="text-sm font-bold text-white">
                        {clinic.doctorName}, {clinic.degrees}
                      </div>
                    </div>
                    <button
                      onClick={() => onOpenEnquire()}
                      className="text-xs uppercase tracking-wider font-bold text-[#0a4d33] bg-white hover:bg-emerald-50 px-4 py-2 rounded-full shadow transition-all active:scale-95 cursor-pointer whitespace-nowrap"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. DOCTOR & CLINICAL EXCELLENCE SPOTLIGHT (Scroll Reveal) */}
      <motion.section
        className="py-16 sm:py-24 bg-[#042114] border-b border-white/10 relative"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Doctor Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <div className="h-[1px] w-6 bg-emerald-400/60" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-300">
                  Medical Leadership & Expertise
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-5xl font-light text-white leading-tight">
                {clinic.doctorName},{' '}
                <span className="font-bold italic text-white">{clinic.degrees}</span>
              </h2>

              <p className="text-white/75 text-base sm:text-lg leading-relaxed font-normal">
                With over two decades of dedicated medical dermatology practice, <strong>Dr. M. Karthikeyan</strong> provides expert clinical diagnosis and individualized therapeutic management for complex skin, hair, and nail disorders.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center gap-3 text-xs text-white/90 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Clinical Dermatology & Eczema</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/90 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Trichology & Hair Restoration</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/90 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Acne Scar & Pigmentation Care</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/90 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Minor Dermatosurgery & Tag Removal</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setActiveTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white border-b-2 border-emerald-400/70 hover:border-emerald-300 pb-1 hover:translate-x-1 transition-all cursor-pointer"
                >
                  <span>Read Doctor Profile & Clinic Background</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-300" />
                </button>
              </div>
            </div>

            {/* Quick Clinic Info Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0a4d33] to-[#042114] p-8 rounded-3xl border border-white/15 shadow-2xl space-y-6">
              <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-emerald-300 font-bold block">
                    Direct Consultation
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white tracking-wide">
                    Clinic Details & Timings
                  </h3>
                </div>
                <span className="text-[10px] tracking-widest uppercase text-white/80 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                  Walk-in / Call
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-white/50 font-bold uppercase text-[10px] tracking-wider block mb-1">
                    Clinic Location
                  </span>
                  <p className="text-white/90 font-medium leading-relaxed">
                    B4, 19, 1st Cross Road, West Thillai Nagar,<br />
                    Tiruchirappalli – 620018, Tamil Nadu, India
                  </p>
                </div>

                <div className="bg-black/30 p-4 rounded-2xl border border-white/10 space-y-2">
                  <span className="text-emerald-300 font-bold uppercase text-[10px] tracking-wider block">
                    Consultation Hours (Mon–Sat)
                  </span>
                  <div className="flex justify-between text-white/90">
                    <span className="font-medium">Morning Session:</span>
                    <span className="font-mono font-semibold text-white">{clinic.timings.morning}</span>
                  </div>
                  <div className="flex justify-between text-white/90 pt-1.5 border-t border-white/10">
                    <span className="font-medium">Evening Session:</span>
                    <span className="font-mono font-semibold text-white">{clinic.timings.evening}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`tel:${clinic.phone.replace(/[^0-9+]/g, '')}`}
                    className="w-full text-center bg-white text-[#0a4d33] hover:bg-opacity-95 active:scale-98 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <Phone className="w-4 h-4 fill-[#0a4d33]" />
                    <span>Call Clinic: {clinic.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. CORE DERMATOLOGY & HAIR SERVICES (Interactive Cards with Hover Lift) */}
      <section className="py-16 sm:py-24 bg-[#062b1b] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-[1px] w-6 bg-emerald-400/60" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-300">
                  Specialized Protocols
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-light text-white">
                Clinical Skin & <span className="font-bold italic">Hair Treatments</span>
              </h2>
            </div>

            <button
              id="view-all-services-btn"
              onClick={() => {
                setActiveTab('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold uppercase tracking-wider text-white border-b-2 border-white/40 hover:border-white pb-1 self-start sm:self-auto transition-all flex items-center gap-1.5 cursor-pointer hover:translate-x-1"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Service Cards Grid with Hover Lift & Glow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex flex-col justify-between hover:bg-white/10 hover:border-emerald-400/40 hover:-translate-y-1.5 luxury-card-glow transition-all duration-300 cursor-pointer shadow-lg"
                onClick={() => onOpenEnquire(service.title)}
              >
                <div>
                  {/* Service Photo Thumbnail */}
                  <div className="relative h-44 w-full overflow-hidden bg-black/40">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={(e) => {
                        // Graceful fallback to dark botanical gradient
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062b1b] via-[#062b1b]/40 to-transparent" />
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full border border-white/20">
                      0{idx + 1}. Specialized
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-heading text-xl font-bold text-white group-hover:text-emerald-200 transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs text-white/70 leading-relaxed line-clamp-3 font-normal">
                      {service.description}
                    </p>

                    {/* Conditions List */}
                    <div className="pt-2 border-t border-white/10 space-y-1">
                      {service.treats.slice(0, 2).map((t, i) => (
                        <div key={i} className="text-xs text-white/80 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                          <span className="truncate">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Subtle Enquire Link */}
                <div className="p-6 pt-0 mt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE LAKSHINI (Staggered Grid) */}
      <section className="py-16 sm:py-24 bg-[#042114] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="h-[1px] w-6 bg-emerald-400/60" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-300">
                Ethical Standards
              </span>
              <div className="h-[1px] w-6 bg-emerald-400/60" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-white">
              Why Patients Choose <span className="font-bold italic">Lakshini</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/65 mt-2">
              Principled clinical medicine, transparent communication, and individualized dermatological therapies in Tiruchirappalli.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-white/5 p-7 rounded-2xl border border-white/10 space-y-3 hover:bg-white/10 hover:border-emerald-400/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-emerald-300">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                Senior Specialist
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Consult directly with Dr. M. Karthikeyan, MBBS., DD., bringing decades of dedicated clinical expertise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 p-7 rounded-2xl border border-white/10 space-y-3 hover:bg-white/10 hover:border-emerald-400/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-emerald-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                Medical Integrity
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Evidence-based diagnostic evaluation with no unnecessary procedures or unverified commercial packages.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 p-7 rounded-2xl border border-white/10 space-y-3 hover:bg-white/10 hover:border-emerald-400/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-emerald-300">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                Patient-Centred Care
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Detailed explanations of root causes, treatment timelines, preventive routines, and lifestyle adjustments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 p-7 rounded-2xl border border-white/10 space-y-3 hover:bg-white/10 hover:border-emerald-400/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-emerald-300">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                Central Location
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Easily accessible clinic at 1st Cross Road, West Thillai Nagar, Tiruchirappalli with convenient road access.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CONSULTATION ADVISORY FAQ ACCORDION */}
      <section className="py-16 sm:py-20 bg-[#062b1b] border-b border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="h-[1px] w-6 bg-emerald-400/60" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-300">
                Patient Guidelines
              </span>
              <div className="h-[1px] w-6 bg-emerald-400/60" />
            </div>
            <h3 className="font-heading text-2xl sm:text-4xl font-light text-white">
              Visiting the Clinic: <span className="font-bold italic">Quick FAQ</span>
            </h3>
          </div>

          <div className="space-y-4">
            <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2.5">
                  <span className="text-emerald-400 font-mono font-bold">01.</span>
                  <span>Do I need an online appointment or can I walk in directly?</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-emerald-300 transition-transform duration-300 shrink-0 ${
                    openFaq === 0 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === 0 && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-white/75 leading-relaxed border-t border-white/5">
                  You can walk in directly during the designated consultation hours ({clinic.timings.morning} & {clinic.timings.evening}, {clinic.timings.days}). For queries or Sunday timings, simply call the clinic directly at <strong>{clinic.phone}</strong>.
                </div>
              )}
            </div>

            <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2.5">
                  <span className="text-emerald-400 font-mono font-bold">02.</span>
                  <span>What should I bring for my dermatology or hair consultation?</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-emerald-300 transition-transform duration-300 shrink-0 ${
                    openFaq === 1 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === 1 && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-white/75 leading-relaxed border-t border-white/5">
                  Please bring previous prescriptions, records of existing medications, any recent blood test reports, and names of topical creams or shampoos you have recently used.
                </div>
              )}
            </div>

            <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2.5">
                  <span className="text-emerald-400 font-mono font-bold">03.</span>
                  <span>How can I reach the clinic for immediate assistance?</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-emerald-300 transition-transform duration-300 shrink-0 ${
                    openFaq === 2 ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === 2 && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-white/75 leading-relaxed border-t border-white/5">
                  You can call our primary phone line at <strong>{clinic.phone}</strong> or send an email to <strong>{clinic.email}</strong>. Our staff in West Thillai Nagar will be happy to assist you.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOME PAGE CONTACT CTA AT BOTTOM */}
      <HomeBottomCTA clinic={clinic} onOpenEnquire={onOpenEnquire} />
    </div>
  );
};
