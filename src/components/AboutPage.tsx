import React from 'react';
import { motion } from 'motion/react';
import {
  Award,
  ShieldCheck,
  Stethoscope,
  BookOpen,
  Heart,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Users,
  Building2,
  GraduationCap,
} from 'lucide-react';
import { ClinicInfo, PageTab } from '../types';
import { HomeBottomCTA } from './HomeBottomCTA';

interface AboutPageProps {
  clinic: ClinicInfo;
  setActiveTab: (tab: PageTab) => void;
  onOpenEnquire: (serviceName?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  clinic,
  setActiveTab,
  onOpenEnquire,
}) => {
  return (
    <div className="bg-[#062b1b] text-white">
      {/* 1. Header Hero for About */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#042114] to-[#062b1b] border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 right-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <div className="h-[1px] w-6 bg-emerald-400/60" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-300">
              Senior Practice & Background
            </span>
            <div className="h-[1px] w-6 bg-emerald-400/60" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl sm:text-6xl font-light text-white tracking-tight leading-tight"
          >
            About Lakshini <span className="font-bold italic text-white">Skin & Hair Centre</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Dedicated to ethical, evidence-based dermatological, trichological, and dermatosurgical care in Tiruchirappalli under the leadership of Dr. M. Karthikeyan.
          </motion.p>
        </div>
      </section>

      {/* 2. Doctor In-Depth Profile */}
      <section className="py-16 sm:py-24 bg-[#042114] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Doctor Card */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-[#0a4d33] via-[#083a26] to-[#042114] rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 sophisticated-pattern pointer-events-none" />

                <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mx-auto shadow-inner">
                  <Stethoscope className="w-10 h-10 text-emerald-300" />
                </div>

                <div className="text-center space-y-1 relative z-10">
                  <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-[0.25em] block">
                    Chief Dermatologist & Founder
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-light text-white">
                    {clinic.doctorName}
                  </h2>
                  <p className="text-sm font-bold text-white/90">
                    {clinic.degrees}
                  </p>
                  <p className="text-xs text-white/60 pt-1">
                    Senior Consultant Dermatologist & Hair Specialist
                  </p>
                </div>

                <div className="space-y-3 pt-2 text-xs relative z-10">
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 flex justify-between items-center">
                    <span className="text-white/60 font-medium">Qualifications:</span>
                    <span className="text-white font-bold">MBBS., DD.</span>
                  </div>
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 flex justify-between items-center">
                    <span className="text-white/60 font-medium">Clinical Practice:</span>
                    <span className="text-emerald-300 font-bold">20+ Years Experience</span>
                  </div>
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 flex justify-between items-center">
                    <span className="text-white/60 font-medium">Core Scope:</span>
                    <span className="text-white font-bold">Clinical Dermatology & Trichology</span>
                  </div>
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 flex justify-between items-center">
                    <span className="text-white/60 font-medium">Location:</span>
                    <span className="text-white font-bold">West Thillai Nagar, Trichy</span>
                  </div>
                </div>

                {/* Direct Call from Doctor Card */}
                <div className="pt-2 relative z-10">
                  <a
                    href={`tel:${clinic.phone.replace(/[^0-9+]/g, '')}`}
                    className="w-full py-3.5 rounded-full bg-white text-[#0a4d33] hover:bg-opacity-95 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer active:scale-98"
                  >
                    <Phone className="w-4 h-4 fill-[#0a4d33]" />
                    <span>Call Clinic: {clinic.phone}</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Doctor Bio Narrative */}
            <motion.div
              className="lg:col-span-7 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-2">
                <div className="h-[1px] w-6 bg-emerald-400/60" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-300">
                  Doctor's Background
                </span>
              </div>

              <h2 className="font-heading text-2xl sm:text-4xl font-light text-white tracking-tight leading-tight">
                Two Decades of Dedicated <br />
                <span className="font-bold italic">Clinical Dermatology</span>
              </h2>

              <div className="space-y-4 text-white/75 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  <strong>Dr. M. Karthikeyan</strong> (MBBS., DD.) is a senior dermatologist who established <strong>Lakshini Skin & Hair Centre</strong> with the vision of providing ethical, scientific, and patient-first cutaneous care to the residents of Tiruchirappalli and surrounding districts.
                </p>
                <p>
                  Having earned his MBBS and post-graduate Diploma in Dermatology (DD), Dr. Karthikeyan has treated tens of thousands of complex dermatological presentations ranging from refractory acne and severe eczema to chronic psoriasis, alopecia areata, melasma, and viral infections.
                </p>
                <p>
                  His clinical philosophy centres on meticulous differential diagnosis, ensuring that treatment targets the physiological root cause rather than offering superficial symptom masking.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                  <h4 className="text-white font-bold text-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-300" />
                    <span>Ethical Medicine</span>
                  </h4>
                  <p className="text-xs text-white/60">
                    No unnecessary procedures or aggressive sales packages. Pure clinical prescriptions tailored to each patient.
                  </p>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                  <h4 className="text-white font-bold text-sm flex items-center gap-2">
                    <Heart className="w-4 h-4 text-emerald-300" />
                    <span>Patient Education</span>
                  </h4>
                  <p className="text-xs text-white/60">
                    Patients receive clear guidance regarding lifestyle, dietary triggers, sun protection, and barrier maintenance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Core Pillars of Practice */}
      <section className="py-16 sm:py-24 bg-[#062b1b] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="h-[1px] w-6 bg-emerald-400/60" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-300">
                Guiding Principles
              </span>
              <div className="h-[1px] w-6 bg-emerald-400/60" />
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl font-light text-white">
              Our Clinical <span className="font-bold italic">Practice Standards</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/60 mt-2">
              How we approach skin and hair health at Lakshini Skin & Hair Centre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 hover:bg-white/10 hover:border-emerald-400/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-emerald-300 font-bold text-lg font-mono">
                01
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                Accurate Clinical Diagnosis
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Detailed visual and dermoscopic inspection of lesions, hair follicles, scalp health, and nail structures to establish precise diagnosis before initiating any regimen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 hover:bg-white/10 hover:border-emerald-400/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-emerald-300 font-bold text-lg font-mono">
                02
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                Individualized Therapies
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Every skin type and scalp condition is unique. Prescriptions, topicals, and in-clinic procedures are specifically calibrated for South Indian skin phototypes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 hover:bg-white/10 hover:border-emerald-400/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-emerald-300 font-bold text-lg font-mono">
                03
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                Long-Term Health & Maintenance
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Emphasis on recurrence prevention, barrier repair, non-comedogenic skin routines, and sustainable hair preservation strategies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <HomeBottomCTA clinic={clinic} onOpenEnquire={onOpenEnquire} />
    </div>
  );
};
