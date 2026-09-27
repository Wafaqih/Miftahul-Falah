import React from 'react';
import { 
  BookOpen, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ShieldCheck, 
  ArrowUp,
  Heart,
  ExternalLink,
  Lock,
  MessageCircle,
  Users,
  Instagram,
  Facebook,
  Youtube,
  Share2,
  Sparkles
} from 'lucide-react';
import { PESANTREN_INFO, SOCIAL_MEDIA_LIST } from '../data/pesantrenData.ts';
import { usePesantren } from '../context/PesantrenContext.tsx';

// Crisp SVG Icons for TikTok and Linktree
const TikTokIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.96-4.48V8.75a8.16 8.16 0 0 0 4.81 1.56v-3.62z"/>
  </svg>
);

const LinktreeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.736 5.853l4.005-4.117 2.325 2.38-4.2 4.007h5.908v3.305h-5.937l4.229 4.108-2.325 2.38-4.005-4.117v7.974h-3.473v-7.974l-4.005 4.117-2.325-2.38 4.229-4.108h-5.937v-3.305h5.908l-4.2-4.007 2.325-2.38 4.005 4.117v-5.853h3.473v5.853z"/>
  </svg>
);

interface FooterProps {
  onOpenPsb: () => void;
  onOpenCheckStatus: () => void;
  onOpenFees: () => void;
  onOpenAdmin: () => void;
  onOpenContactWhatsapp?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenPsb, 
  onOpenCheckStatus, 
  onOpenFees,
  onOpenAdmin,
  onOpenContactWhatsapp 
}) => {
  const { contacts } = usePesantren();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      
      {/* Top Banner with Domain & Trust */}
      <div className="bg-emerald-950/90 border-b border-emerald-900 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-sm sm:text-base">Domain Resmi Terdaftar:</span>
                <span className="font-mono text-amber-300 font-bold text-sm sm:text-base bg-emerald-900/90 px-2 py-0.5 rounded border border-amber-400/30">
                  {PESANTREN_INFO.domain}
                </span>
              </div>
              <p className="text-xs text-emerald-300 mt-0.5">
                Pastikan seluruh transaksi pendaftaran santri dan infaq hanya melalui informasi resmi di domain ini.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenPsb}
            className="px-6 py-2.5 bg-amber-400 hover:bg-amber-500 text-emerald-950 text-xs font-black rounded-xl cursor-pointer shadow-md transition-all whitespace-nowrap"
          >
            Daftar Santri Baru (PSB 2026)
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Identity & Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-900 flex items-center justify-center text-amber-400 border border-amber-400/30">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  PONDOK PESANTREN
                </h3>
                <h4 className="text-sm font-black text-amber-400 tracking-wider">
                  MIFTAHUL FALAH
                </h4>
              </div>
            </div>

            <p className="font-arabic text-emerald-400 text-sm">
              معهد مفتاح الفلاح الإسلامي كارانج جايا
            </p>

            <p className="text-xs text-stone-400 leading-relaxed">
              Lembaga Pendidikan Islam yang menyelenggarakan Pengkajian Kitab Kuning Turats Salafiyah, Pembinaan Mahasantri Mahasiswa, serta Madrasah Diniyah.
            </p>

            <div className="p-3.5 rounded-2xl bg-stone-900 border border-stone-800 text-[11px] space-y-1 font-mono">
              <div className="flex justify-between">
                <span className="text-stone-500">NSPP Kemenag:</span>
                <span className="text-stone-300 font-bold">{PESANTREN_INFO.nspp}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Tahun Berdiri:</span>
                <span className="text-stone-300">1922 M (Mama KH. Abdul Jalil)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-stone-800 pb-2">
              Jelajahi Portal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#beranda" className="hover:text-amber-400 transition-colors">Beranda Utama</a>
              </li>
              <li>
                <a href="#profil" className="hover:text-amber-400 transition-colors">Profil Khadimul Ma'had</a>
              </li>
              <li>
                <a href="#program" className="hover:text-amber-400 transition-colors">Program Pendidikan</a>
              </li>
              <li>
                <a href="#biaya" className="hover:text-amber-400 text-amber-300 font-semibold transition-colors">Rincian Biaya & Infaq Mondok</a>
              </li>
              <li>
                <a href="#jadwal" className="hover:text-amber-400 transition-colors">24 Jam Santri</a>
              </li>
              <li>
                <a href="#dewan-santri" className="hover:text-amber-400 text-amber-300 font-medium transition-colors">Dewan Santri & Proker</a>
              </li>
              <li>
                <a href="#berita" className="hover:text-amber-400 transition-colors">Warta & Kajian Islam</a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-amber-400 transition-colors">Fasilitas Kampus</a>
              </li>
              <li>
                <a href="#kampus-sekitar" className="hover:text-amber-400 text-emerald-400 font-semibold transition-colors">Akses 8 Kampus Terdekat</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">FAQ / Tanya Jawab</a>
              </li>
            </ul>
          </div>

          {/* Col 3: PSB & Layanan (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-stone-800 pb-2">
              Penerimaan Santri (PSB)
            </h4>
            <div className="space-y-2.5">
              <button
                onClick={onOpenPsb}
                className="w-full py-2 px-3 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-white text-xs font-bold text-left border border-emerald-700/50 cursor-pointer block"
              >
                &rarr; Formulir Pendaftaran Online 2026
              </button>

              <button
                onClick={onOpenCheckStatus}
                className="w-full py-2 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-200 text-xs font-semibold text-left border border-stone-800 cursor-pointer block"
              >
                &rarr; Cek Status Pendaftaran & Kartu
              </button>

              <button
                onClick={onOpenFees}
                className="w-full py-2 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-200 text-xs font-semibold text-left border border-stone-800 cursor-pointer block"
              >
                &rarr; Rincian Biaya (Rp 120rb/bln)
              </button>

              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-[11px] text-emerald-200">
                <span className="font-bold text-amber-300 block mb-0.5">Gelombang II Sedang Dibuka:</span>
                1 Februari - 30 April 2026. Kuota asrama putra & putri terbatas.
              </div>
            </div>
          </div>

          {/* Col 4: Kontak & Lokasi (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-stone-800 pb-2">
              Sekretariat & Lokasi
            </h4>
            
            <div className="space-y-3 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-200">{PESANTREN_INFO.address}</span>
                  <div className="mt-1.5 flex items-center gap-1.5 text-[11px] font-mono text-amber-300">
                    <span className="text-stone-400">Plus Code:</span>
                    <span className="bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-800 text-amber-400 font-bold">
                      {PESANTREN_INFO.plusCode}
                    </span>
                  </div>
                  <span className="block text-[11px] text-emerald-400/90 mt-1 font-medium">
                    (Dekat UIN SGD, UM Bandung, ITB, Unpad, Ikopin & UPI)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-stone-400">WhatsApp Official:</span>
                  <a 
                    href={`https://wa.me/${contacts.officialWhatsapp.replace(/[^0-9]/g, '')}`} 
                    className="hover:text-amber-400 transition-colors font-mono text-emerald-300 font-bold"
                  >
                    {contacts.officialWhatsapp}
                  </a>
                </div>
              </div>

              {onOpenContactWhatsapp && (
                <div className="pt-1">
                  <button
                    onClick={onOpenContactWhatsapp}
                    className="w-full py-2 px-3 rounded-xl bg-emerald-900/60 hover:bg-emerald-900 text-emerald-200 hover:text-white text-xs font-semibold border border-emerald-700/60 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Hubungi Pengurus (Official / Rois / Roisah)</span>
                  </button>
                </div>
              )}

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{PESANTREN_INFO.email}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono text-emerald-400">{PESANTREN_INFO.domain}</span>
              </div>
            </div>

            {/* Map Direction Link */}
            <div className="pt-2">
              <a
                href={PESANTREN_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white text-xs border border-stone-800 transition-colors"
              >
                <span>Buka Petunjuk Arah di Google Maps</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Media Sosial Resmi (Singkat & Rapi) */}
        <div className="mt-10 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-semibold text-stone-300">Media Sosial Santri Mifa:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              href="https://instagram.com/santri_mifa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-pink-500/50 text-stone-300 hover:text-pink-300 transition-all font-medium"
              title="Instagram @santri_mifa"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>@santri_mifa</span>
            </a>

            <a
              href="https://www.tiktok.com/@santri_mifa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-cyan-500/50 text-stone-300 hover:text-cyan-300 transition-all font-medium"
              title="TikTok @santri_mifa"
            >
              <TikTokIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>@santri_mifa</span>
            </a>

            <a
              href="https://facebook.com/PonpesMiftahulFalah"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-blue-500/50 text-stone-300 hover:text-blue-300 transition-all font-medium"
              title="Facebook Ponpes Miftahul Falah"
            >
              <Facebook className="w-3.5 h-3.5 text-blue-400" />
              <span>Ponpes Miftahul Falah</span>
            </a>

            <a
              href="https://www.youtube.com/@SantriMifaOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-red-500/50 text-stone-300 hover:text-red-300 transition-all font-medium"
              title="YouTube Santri Mifa Official"
            >
              <Youtube className="w-3.5 h-3.5 text-red-400" />
              <span>Santri Mifa Official</span>
            </a>

            <a
              href="https://linktr.ee/PonpesMiftahulFalah"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950 hover:bg-emerald-900 border border-emerald-700/60 hover:border-emerald-500 text-emerald-300 hover:text-emerald-100 transition-all font-bold"
              title="Linktree Resmi"
            >
              <LinktreeIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>linktr.ee</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
            </a>
          </div>
        </div>

        {/* Islamic Du'a & Closing */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-xs text-stone-500">
            <p className="font-arabic text-sm text-emerald-400/90 mb-1">
              اللَّهُمَّ فَقِّهْنَا فِي الدِّينِ وَعَلِّمْنَا التَّأْوِيلَ وَاجْعَلْنَا مِنْ أَهْلِ الْقُرْآنِ
            </p>
            <p>© {new Date().getFullYear()} {PESANTREN_INFO.name}. Hak Cipta Dilindungi Undang-Undang.</p>
            <div className="flex flex-wrap items-center gap-2 text-[11px] text-stone-600 mt-1">
              <span>Portal Resmi: <span className="font-mono text-emerald-400">{PESANTREN_INFO.domain}</span></span>
              <span>&bull;</span>
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1.5 text-stone-400 hover:text-amber-400 transition-colors cursor-pointer font-medium"
                id="btn-footer-admin-login"
                title="Buka Dashboard Admin Pengurus"
              >
                <Lock className="w-3 h-3 text-amber-400" />
                <span>Dashboard Admin Pengurus</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenAdmin}
              className="px-3 py-2 rounded-xl bg-stone-900 hover:bg-emerald-950 text-stone-400 hover:text-amber-300 border border-stone-800 hover:border-emerald-700/60 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
              id="btn-footer-portal-admin"
            >
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>Portal Admin</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 transition-colors cursor-pointer flex items-center gap-2 text-xs"
              title="Kembali ke atas"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
