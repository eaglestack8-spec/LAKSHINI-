export interface ClinicInfo {
  name: string;
  tagline: string;
  tamilName?: string;
  doctorName: string;
  degrees: string;
  designation: string;
  experience: string;
  phone: string;
  alternatePhone: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    pincode: string;
    state: string;
    country: string;
    landmark?: string;
  };
  timings: {
    morning: string;
    evening: string;
    days: string;
    sunday: string;
  };
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
}

export interface ServiceItem {
  id: string;
  category: 'skin' | 'hair' | 'aesthetic' | 'procedures';
  title: string;
  subtitle: string;
  description: string;
  image: string;
  treats: string[];
  keyHighlights: string[];
}

export type PageTab = 'home' | 'about' | 'services' | 'contact';
