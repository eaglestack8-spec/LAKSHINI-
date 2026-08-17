import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Phone,
  Mail,
  CheckCircle2,
  Filter,
  ShieldAlert,
  Info,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import { ClinicInfo, PageTab, ServiceItem } from '../types';
import { HomeBottomCTA } from './HomeBottomCTA';

interface ServicesPageProps {
  clinic: ClinicInfo;
  services: ServiceItem[];
  setActiveTab: (tab: PageTab) => void;
  onOpenEnquire: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  clinic,
  services,
  setActiveTab,
  onOpenEnquire,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'skin', label: 'Clinical Skin Care' },
    { id: 'hair', label: 'Hair & Scalp (Trichology)' },
    { id: 'aesthetic', label: 'Medical Peels & Glow' },
    { id: 'procedures', label: 'Minor Dermatosurgery' },
  ];

  const filteredServices =
    selectedCategory === 'all'
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <div className="bg-[#062b1b] text-white">
      {/* 1. Header Hero for Services */}
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
              Clinical & Aesthetic Treatments
            </span>
            <div className="h-[1px] w-6 bg-emerald-400/60" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl sm:text-6xl font-light text-white tracking-tight leading-tight"
          >
            Dermatology & <span className="font-bold italic text-white">Hair Care Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            All services are provided and supervised directly by Dr. M. Karthikeyan, MBBS., DD. at Lakshini Skin & Hair Centre in West Thillai Nagar.
          </motion.p>

          {/* Quick Notice Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/75 text-xs px-4 py-2 rounded-full mt-2"
          >
            <Info className="w-4 h-4 text-emerald-300 shrink-0" />
            <span>Informational overview only. Enquire via phone or email for consultation guidance.</span>
          </motion.div>
        </div>
      </section>

      {/* 2. Category Filter Navigation */}
      <section className="py-4 bg-[#042114]/90 backdrop-blur-md border-b border-white/10 sticky top-20 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <span className="text-xs font-bold text-white/60 uppercase tracking-wider mr-2 hidden sm:flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-emerald-400" />
              <span>Filter:</span>
            </span>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`filter-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#0a4d33] font-bold shadow-md shadow-black/20'
                      : 'bg-white/5 text-white/80 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Detailed Services Grid */}
      <section className="py-16 sm:py-24 bg-[#062b1b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                  className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden shadow-xl flex flex-col justify-between group hover:bg-white/10 hover:border-emerald-400/30 hover:-translate-y-1.5 luxury-card-glow transition-all duration-300"
                >
                  <div>
                    {/* Service Photo Header */}
                    <div className="relative h-60 w-full overflow-hidden bg-black/40">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#062b1b] via-[#062b1b]/40 to-transparent" />
                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-xs text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-white/20">
                        {service.subtitle}
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="p-6 sm:p-8 space-y-4">
                      <div className="text-xs font-bold uppercase tracking-widest text-emerald-300 font-mono">
                        0{index + 1}. Specialized Protocol
                      </div>

                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-200 transition-colors leading-snug">
                        {service.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                        {service.description}
                      </p>

                      {/* Conditions Treated */}
                      <div className="pt-3 border-t border-white/10">
                        <h4 className="text-xs font-bold text-white/60 uppercase tracking-wider mb-2">
                          Conditions Addressed:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {service.treats.map((item, i) => (
                            <div key={i} className="text-xs text-white/80 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                              <span className="truncate">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Clinical Approach Highlights */}
                      <div className="bg-black/25 p-4 rounded-2xl border border-white/10 space-y-2">
                        <div className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider">
                          Doctor-Supervised Protocol:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-white/75">
                          {service.keyHighlights.map((hl, idx) => (
                            <div key={idx} className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enquire Now Action Bar */}
                  <div className="p-6 sm:p-8 pt-0 border-t border-white/10 mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="text-xs text-white/50">
                      Direct Consultation by Dr. M. Karthikeyan
                    </div>

                    <button
                      id={`service-enquire-${service.id}`}
                      onClick={() => onOpenEnquire(service.title)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0a4d33] hover:bg-emerald-50 active:scale-97 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5 fill-[#0a4d33]" />
                      <span>Enquire Now</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Medical Disclaimer & Note */}
      <section className="py-12 bg-[#042114] border-t border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-white/70 space-y-2">
          <p className="font-bold text-white text-sm">
            Ethical Dermatology & In-Person Assessment
          </p>
          <p className="leading-relaxed font-normal">
            Medical treatments, medication dosages, and procedural decisions require an in-person clinical assessment of the patient's lesions, medical history, and skin tolerance. Please call the clinic directly to verify consultation hours or speak with our desk.
          </p>
        </div>
      </section>

      {/* 5. Bottom CTA Section */}
      <HomeBottomCTA clinic={clinic} onOpenEnquire={onOpenEnquire} />
    </div>
  );
};
