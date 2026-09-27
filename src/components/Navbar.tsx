import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Clock, 
  BookOpen, 
  Menu, 
  X, 
  CheckCircle2, 
  Globe, 
  Sparkles,
  Search,
  Lock,
  MessageCircle,
  Instagram,
  Youtube
} from 'lucide-react';
import { PESANTREN_INFO } from '../data/pesantrenData.ts';
import { usePesantren } from '../context/PesantrenContext.tsx';

const TikTokNavIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.96-4.48V8.75a8.16 8.16 0 0 0 4.81 1.56v-3.62z"/>
  </svg>
);

interface NavbarProps {
  onOpenPsb: () => void;
  onOpenCheckStatus: () => void;
  onSelectProgram?: (programId: string) => void;
  onOpenAdmin?: () => void;
  onOpenContactWhatsapp?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenPsb, 
  onOpenCheckStatus,
  onOpenAdmin,
  onOpenContactWhatsapp
}) => {
  const { contacts } = usePesantren();
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 20);

      // Selalu tampil jika masih di bagian paling atas halaman
      if (currentY <= 60) {
        setIsVisible(true);
      } else if (currentY > lastY && currentY - lastY > 6) {
        // Scroll ke bawah: sembunyikan navbar (tidak sticky saat scroll ke bawah)
        setIsVisible(false);
        setMobileMenuOpen(false);
      } else if (currentY < lastY && lastY - currentY > 6) {
        // Scroll ke atas: tampilkan kembali navbar
        setIsVisible(true);
      }

      lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' WIB');
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Profil & Kyai', href: '#profil' },
    { label: 'Program Pendidikan', href: '#program' },
    { label: 'Jadwal Santri', href: '#jadwal' },
    { label: 'Dewan Santri', href: '#dewan-santri' },
    { label: 'Kampus Sekitar', href: '#kampus-sekitar' },
    { label: 'Fasilitas', href: '#fasilitas' },
    { label: 'Biaya Mondok', href: '#biaya' },
    { label: 'Warta & Berita', href: '#berita' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out ${
        isVisible || mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Top Notification & Domain Verification Bar */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 border-b border-emerald-800/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Domain & Verification */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-900/80 border border-emerald-700/50 text-emerald-200 font-mono font-medium tracking-wide">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              {PESANTREN_INFO.domain}
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            </span>
            <span className="hidden md:inline-block text-emerald-300/80">
              NSPP: {PESANTREN_INFO.nspp}
            </span>
            <span className="hidden lg:inline-block text-emerald-400/90 font-arabic text-sm">
              معهد مفتاح الفلاح الإسلامي
            </span>
          </div>

          {/* Time & Quick Contacts */}
          <div className="flex items-center gap-4 text-emerald-300">
            <div className="hidden sm:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentTime || 'Memuat waktu...'}</span>
            </div>
            <div className="flex items-center gap-3">
              {onOpenContactWhatsapp ? (
                <button
                  onClick={onOpenContactWhatsapp}
                  className="hover:text-amber-300 flex items-center gap-1 transition-colors cursor-pointer"
                  id="btn-nav-wa-modal"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline">Kontak Pengurus:</span> {contacts.officialWhatsapp}
                </button>
              ) : (
                <a 
                  href={`https://wa.me/${contacts.officialWhatsapp.replace(/[^0-9]/g, '')}?text=Assalamu'alaikum%20Admin%20Ponpes%20Miftahul%20Falah,%20saya%20ingin%20bertanya%20informasi%20pendaftaran`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 flex items-center gap-1 transition-colors"
                  id="btn-nav-wa"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline">Layanan Informasi:</span> {contacts.officialWhatsapp}
                </a>
              )}
              <button
                onClick={onOpenCheckStatus}
                className="hover:text-amber-300 underline font-medium text-xs text-amber-300/90 transition-colors"
                id="btn-nav-check-status"
              >
                Cek Status PSB
              </button>

              {/* Social Media Quick Links */}
              <div className="hidden lg:flex items-center gap-2 pl-2 border-l border-emerald-800/60 text-emerald-400">
                <a 
                  href="https://instagram.com/santri_mifa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-pink-300 transition-colors p-0.5"
                  title="Instagram @santri_mifa"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://www.tiktok.com/@santri_mifa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors p-0.5"
                  title="TikTok @santri_mifa"
                >
                  <TikTokNavIcon className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://www.youtube.com/@SantriMifaOfficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition-colors p-0.5"
                  title="YouTube Santri Mifa Official"
                >
                  <Youtube className="w-3.5 h-3.5" />
                </a>
              </div>

              {onOpenAdmin && (
                <button
                  onClick={onOpenAdmin}
                  className="hover:text-amber-300 p-1 text-emerald-400/90 transition-colors cursor-pointer"
                  title="Masuk ke Dashboard Admin"
                  id="btn-nav-admin-icon"
                >
                  <Lock className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-stone-200' 
            : 'bg-white py-4 border-b border-stone-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a 
            href="#beranda" 
            className="flex items-center gap-3 group"
            id="brand-logo-link"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-950 flex items-center justify-center text-amber-400 shadow-md border border-amber-400/30 group-hover:scale-105 transition-transform">
              {/* Islamic emblem with open book & star */}
              <BookOpen className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold tracking-wider text-emerald-800 uppercase">Pondok Pesantren</span>
              </div>
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-stone-900 leading-tight">
                MIFTAHUL FALAH
              </h1>
              <p className="text-[11px] text-emerald-700 font-medium font-mono">
                {PESANTREN_INFO.domain}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-6 text-sm font-medium text-stone-700">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-emerald-700 transition-colors cursor-pointer py-1 relative group"
                id={`nav-link-${link.href.replace('#', '')}`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {onOpenContactWhatsapp && (
              <button
                onClick={onOpenContactWhatsapp}
                className="p-2 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors cursor-pointer flex items-center justify-center"
                title="Layanan WhatsApp Resmi (Official, Rois, Roisah)"
                id="btn-header-wa"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
              </button>
            )}
            <button
              onClick={onOpenCheckStatus}
              className="px-3 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
              id="btn-header-cek-status"
            >
              <Search className="w-3.5 h-3.5 text-emerald-700" />
              Cek Status PSB
            </button>
            <button
              onClick={onOpenPsb}
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-800 hover:to-emerald-900 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer flex items-center gap-1.5 border border-emerald-600/30"
              id="btn-header-daftar-psb"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Daftar Santri Baru (PSB)
            </button>
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-200 rounded-lg transition-colors cursor-pointer flex items-center justify-center"
                title="Portal Admin Pengurus"
                id="btn-header-admin"
              >
                <Lock className="w-4 h-4 text-stone-600" />
              </button>
            )}
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onOpenPsb}
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-emerald-700 rounded-lg"
            >
              PSB Online
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label="Toggle Navigation Menu"
              id="btn-mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 mb-2">
              <div className="flex items-center justify-between text-xs text-emerald-900 font-medium">
                <span>Domain Resmi:</span>
                <span className="font-mono font-bold text-emerald-700">{PESANTREN_INFO.domain}</span>
              </div>
              <div className="text-[11px] text-stone-500 mt-1">
                Penerimaan Santri Baru (PSB) Tahun Ajaran 2026/2027 dibuka.
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 py-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-3 py-2 text-sm font-medium text-stone-700 hover:text-emerald-700 hover:bg-stone-50 rounded-lg"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPsb();
                }}
                className="w-full py-2.5 text-center text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-sm flex items-center justify-center gap-2"
                id="btn-mobile-daftar-psb"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                Daftar Santri Baru (PSB Online)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCheckStatus();
                }}
                className="w-full py-2 text-center text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-center gap-2"
                id="btn-mobile-status"
              >
                <Search className="w-4 h-4 text-emerald-700" />
                Cek Status Pendaftaran Calon Santri
              </button>
              {onOpenContactWhatsapp && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContactWhatsapp();
                  }}
                  className="w-full py-2 text-center text-sm font-medium text-emerald-900 bg-emerald-100/70 border border-emerald-200 rounded-xl flex items-center justify-center gap-2"
                  id="btn-mobile-wa"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  Hubungi Kontak Pengurus (Official / Rois / Roisah)
                </button>
              )}
              {onOpenAdmin && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmin();
                  }}
                  className="w-full py-2 text-center text-xs font-semibold text-stone-600 hover:text-stone-900 bg-stone-100 rounded-xl flex items-center justify-center gap-2"
                  id="btn-mobile-admin"
                >
                  <Lock className="w-3.5 h-3.5 text-amber-600" />
                  Portal Admin & Pengurus
                </button>
              )}

              {/* Mobile Social Media Links */}
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span className="text-[11px] font-medium text-stone-500">Media Sosial:</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com/santri_mifa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-pink-600 hover:text-pink-700"
                    title="Instagram @santri_mifa"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@santri_mifa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-stone-800 hover:text-stone-950"
                    title="TikTok @santri_mifa"
                  >
                    <TikTokNavIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://youtube.com/@SantriMifaOfficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-red-600 hover:text-red-700"
                    title="YouTube Santri Mifa Official"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linktr.ee/PonpesMiftahulFalah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold"
                  >
                    linktr.ee
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
