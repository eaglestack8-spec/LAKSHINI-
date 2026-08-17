import { ClinicInfo, ServiceItem } from '../types';
import acneScarTreatmentImg from '../assets/images/acne_scar_treatment_1786949663480.jpg';

export const CLINIC_DETAILS: ClinicInfo = {
  name: 'Lakshini Skin & Hair Centre',
  tagline: 'Centre for Advanced Clinical Dermatology & Trichology',
  tamilName: 'லக்ஷினி தோல் மற்றும் முடி சிகிச்சை மையம்',
  doctorName: 'Dr. M. Karthikeyan',
  degrees: 'MBBS., DD.',
  designation: 'Senior Consultant Dermatologist & Hair Specialist',
  experience: '20+ Years of Clinical Dermatological Excellence',
  phone: '+91 74487 24435',
  alternatePhone: '+91 431 2700000', // Landline
  email: 'contact@lakshiniskinandhair.com', // Editable placeholder
  address: {
    line1: 'B4, 19, 1st Cross Road',
    line2: 'West Thillai Nagar',
    city: 'Tiruchirappalli',
    pincode: '620018',
    state: 'Tamil Nadu',
    country: 'India',
    landmark: 'Near Thillai Nagar Main Road'
  },
  timings: {
    morning: '10:00 AM – 01:30 PM',
    evening: '05:30 PM – 08:30 PM',
    days: 'Monday to Saturday',
    sunday: 'Sunday: Prior Phone Confirmation'
  },
  googleMapsUrl: 'https://maps.google.com/?q=B4+19+1st+Cross+Road+West+Thillai+Nagar+Tiruchirappalli+620018+Tamil+Nadu',
  // Clean embed URL for Tiruchirappalli West Thillai Nagar
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7335686008064!2d78.6835158!3d10.8317134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf567ec6b8969%3A0xb6975a6c11dbbe7e!2sThillai%20Nagar%2C%20Tiruchirappalli%2C%20Tamil%20Nadu%20620018!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'acne-and-scars',
    category: 'skin',
    title: 'Acne & Acne Scar Treatment',
    subtitle: 'Comprehensive Medical Acne Therapy & Scar Revision',
    description: 'Specialized clinical protocol targeting active breakout control, sebum regulation, bacterial reduction, and state-of-the-art scar revision procedures to restore smooth skin texture.',
    image: acneScarTreatmentImg,
    treats: ['Cystic Acne & Blackheads', 'Post-Acne Pigmentation', 'Ice Pick & Boxcar Scars', 'Adult Hormonal Acne'],
    keyHighlights: ['Individualized Medical Regimens', 'Chemical Peels & Derma Roller', 'Subcision & Laser Scar Smoothing', 'Maintenance & Relapse Prevention']
  },
  {
    id: 'hair-loss-trichology',
    category: 'hair',
    title: 'Hair Fall & Scalp Disorders',
    subtitle: 'Evidence-Based Trichology & Hair Restoration',
    description: 'In-depth diagnostic evaluation of hair thinning, pattern baldness, shedding disorders, and scalp inflammation, followed by customized clinical restoration therapies.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    treats: ['Androgenetic Alopecia (Male/Female)', 'Telogen Effluvium (Excessive Shedding)', 'Alopecia Areata (Patchy Hair Loss)', 'Chronic Dandruff & Seborrheic Dermatitis'],
    keyHighlights: ['Trichoscopic Scalp Analysis', 'Mesotherapy & Growth Factor Formulations', 'Nutritional & Hormonal Mapping', 'Medical Scalp Anti-Inflammatory Protocols']
  },
  {
    id: 'pigmentation-melasma',
    category: 'skin',
    title: 'Pigmentation & Melasma Management',
    subtitle: 'Targeted Melanin Regulation & Skin Tone Correction',
    description: 'Targeted clinical therapies for deep epidermal and dermal pigmentation, hyperpigmentation, sun damage, and recalcitrant melasma using dermatologically validated formulations.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    treats: ['Melasma & Chloasma', 'Post-Inflammatory Hyperpigmentation', 'Sun Spots & Freckles', 'Uneven Skin Tone & Tan'],
    keyHighlights: ['Medical Grade Depigmentation', 'Targeted Peels for Melanin Suppression', 'Sun Protection & Barrier Repair Guidance', 'Safe for Indian Skin Phenotypes']
  },
  {
    id: 'psoriasis-eczema-allergies',
    category: 'skin',
    title: 'Eczema, Psoriasis & Skin Allergies',
    subtitle: 'Chronic Dermatological Disease Management',
    description: 'Compassionate, long-term therapeutic care for complex, chronic skin conditions including atopic dermatitis, plaque psoriasis, urticaria (hives), and contact allergies.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    treats: ['Atopic & Contact Eczema', 'Psoriasis (Plaque & Scalp)', 'Chronic Urticaria (Hives)', 'Fungal & Bacterial Skin Infections'],
    keyHighlights: ['Detailed Allergy & Trigger Identification', 'Topical & Systemic Immunomodulators', 'Barrier Restoration & Emollient Regimens', 'Long-term Remission Strategies']
  },
  {
    id: 'aesthetic-peels-glow',
    category: 'aesthetic',
    title: 'Medical Peels & Skin Rejuvenation',
    subtitle: 'Doctor-Supervised Exfoliation & Radiance Care',
    description: 'Clinical exfoliation treatments utilizing AHA, BHA, and fruit acid formulations to gently eliminate dead cellular layers, stimulate collagen, and enhance cellular turnover.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    treats: ['Dull & Fatigued Skin', 'Enlarged Pores & Fine Texture', 'Superficial Blemishes', 'Pre-Occasion Skin Brightening'],
    keyHighlights: ['Supervised Dermatologist Application', 'Customized Acid Strengths & Cocktails', 'Minimal Downtime Protocols', 'Deep Cellular Hydration']
  },
  {
    id: 'minor-dermatosurgery',
    category: 'procedures',
    title: 'Minor Dermatosurgery & Tag Removal',
    subtitle: 'Radiofrequency, Electrocautery & Excision',
    description: 'Precise, safe in-clinic minor surgical procedures under local anesthesia for the removal of benign cutaneous growths with optimal cosmetic healing.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    treats: ['Skin Tags (Acrochordons)', 'Viral Warts & Molluscum', 'Seborrheic Keratosis & Moles', 'Corns & Calluses'],
    keyHighlights: ['Radiofrequency Electrosurgery', 'Rapid In-Clinic Procedure', 'Minimal Scarring Technique', 'Complete Post-Procedure Wound Care']
  },
  {
    id: 'anti-aging-wrinkles',
    category: 'aesthetic',
    title: 'Anti-Aging & Skin Firming',
    subtitle: 'Preventative & Restorative Skin Longevity Care',
    description: 'Scientific anti-aging strategies combining topical retinoid science, antioxidant protection, and collagen-boosting protocols to soften fine lines and maintain elasticity.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    treats: ['Fine Lines & Wrinkles', 'Loss of Skin Elasticity', 'Age Spots & Photo-Aging', 'Skin Thinning & Dullness'],
    keyHighlights: ['Collagen Stimulation Therapies', 'Advanced Medical Skincare Formulations', 'Non-Invasive Skin Firming', 'Personalized Age-Defense Protocols']
  },
  {
    id: 'pediatric-dermatology',
    category: 'skin',
    title: 'Pediatric Dermatology & Infant Care',
    subtitle: 'Gentle, Specialized Care for Young Skin',
    description: 'Tender and precise dermatological care for infants, children, and adolescents dealing with diaper dermatitis, birthmarks, viral rashes, and childhood eczema.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    treats: ['Infantile Atopic Dermatitis', 'Diaper Rash & Heat Rash', 'Viral Warts & Molluscum in Kids', 'Cradle Cap & Fungal Scalp Rings'],
    keyHighlights: ['Child-Safe Medications', 'Gentle Non-Invasive Approaches', 'Comprehensive Parent Counseling', 'Calm & Friendly Environment']
  }
];

export const CLINIC_HIGHLIGHTS = [
  {
    title: 'Clinical Experience',
    description: 'Over 20 years of dedicated dermatological practice under Dr. M. Karthikeyan, MBBS., DD.',
    iconName: 'Award'
  },
  {
    title: 'Evidence-Based Science',
    description: 'Proven dermatological science and standardized medical protocols tailored for Indian skin & hair.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Zero Hidden Agendas',
    description: 'Pure medical consultation focused on root-cause diagnosis without aggressive commercial upselling.',
    iconName: 'HeartHandshake'
  },
  {
    title: 'Prime Thillai Nagar Location',
    description: 'Conveniently situated in West Thillai Nagar, Tiruchirappalli with ample accessibility.',
    iconName: 'MapPin'
  }
];
