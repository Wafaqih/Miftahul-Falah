export interface SantriRegistration {
  id: string;
  registrationNumber: string;
  fullName: string;
  gender: 'putra' | 'putri';
  nisn?: string;
  nik: string;
  birthPlace: string;
  birthDate: string;
  previousSchool: string;
  santriPhone?: string;
  programChoice?: 'tahfidz_30_juz' | 'mts_terpadu' | 'ma_keagamaan' | 'salafiyah_murni';
  registrationTrack?: 'reguler' | 'prestasi' | 'beasiswa_yatim';
  fatherName: string;
  motherName: string;
  parentPhone: string;
  address: string;
  city: string;
  status: 'Menunggu Verifikasi' | 'Terverifikasi';
  registeredAt: string;
  verifiedAt?: string;
  verifiedBy?: string;
  verificationNotes?: string;
}

export interface PesantrenContacts {
  officialPhone: string;
  officialWhatsapp: string;
  officialEmail: string;
  roisName: string;
  roisTitle: string;
  roisWhatsapp: string;
  roisahName: string;
  roisahTitle: string;
  roisahWhatsapp: string;
}

export interface PrayerTimeItem {
  name: string;
  arabicName: string;
  time: string;
  iconName: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  subtitle: string;
  arabicTitle: string;
  description: string;
  category: 'tahfidz' | 'salaf' | 'formal' | 'bahasa';
  badge: string;
  highlights: string[];
  targetHafalan?: string;
  kurikulum: string[];
  outputLulusan: string[];
  image: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Kabar Pesantren' | 'Kajian & Tausiyah' | 'Prestasi' | 'Pengumuman';
  date: string;
  author: string;
  summary: string;
  content: string;
  arabicQuote?: {
    text: string;
    translation: string;
  };
  image: string;
  readTime: string;
}

export interface ScheduleItem {
  time: string;
  activity: string;
  arabicName: string;
  category: 'ibadah' | 'belajar' | 'tahfidz' | 'istirahat' | 'kemandirian';
  description: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  category: 'ibadah' | 'asrama' | 'akademik' | 'administrasi' | 'olahraga' | 'kesehatan';
  description: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface NearbyCampus {
  id: string;
  name: string;
  shortName: string;
  nickname: string;
  distanceKm: number;
  distanceDisplay: string;
  travelTimeMotor: string;
  travelTimePublic: string;
  travelTimeCar: string;
  routePrimary: string;
  routeDetails: string;
  category: 'negeri' | 'swasta' | 'kedinasan';
  badge: string;
  plusCode?: string;
  popularMajors: string[];
  mahasantriProgram: string;
  mapCoordinates: {
    svgX: number; // percentage in SVG coordinate space (0 - 100)
    svgY: number; // percentage in SVG coordinate space (0 - 100)
    lat: number;
    lng: number;
  };
  googleMapsUrl: string;
  description: string;
  accentColor: string;
  bgLight: string;
  borderLight: string;
}

export interface DewanSantriProgram {
  id: string;
  title: string;
  bidangId: 'psdm' | 'pendidikan' | 'medinfo';
  bidangName: string;
  badge: string;
  tagline: string;
  description: string;
  objectives: string[];
  targetSkills: string[];
  executionNote: string;
  icon: string;
}

export interface PsbFeeItem {
  item: string;
  nominal: string;
  note: string;
  badge?: string;
  highlight?: boolean;
}

export interface KbmClassLevel {
  id: 'kelas-bawah' | 'kelas-atas';
  name: string;
  semesterRange: string;
  arabicName: string;
  badge: string;
  targetSantri: string;
  description: string;
  fokusKajian: string[];
  kitabRujukan: {
    bidang: string;
    kitab: string;
    deskripsi?: string;
  }[];
  metode: string[];
}

export interface KbmNgajiSession {
  waktu: 'Maghrib' | 'Isya' | 'Subuh';
  jam: string;
  arabicName: string;
  iconName: string;
  kelasBawahFocus: string;
  kelasAtasFocus: string;
  keterangan: string;
}

export interface KbmSpecialAgenda {
  id: string;
  hari: string;
  waktu: string;
  nama: string;
  arabicName: string;
  peserta: string;
  deskripsi: string;
  detailKegiatan: string[];
  badge: string;
  accentColor: string;
}

