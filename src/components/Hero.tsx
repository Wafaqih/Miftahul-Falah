import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  BookOpen, 
  GraduationCap, 
  Users, 
  CheckCircle,
  FileText
} from 'lucide-react';
import { PESANTREN_INFO } from '../data/pesantrenData.ts';

interface HeroProps {
  onOpenPsb: () => void;
  onOpenFees: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPsb, onOpenFees }) => {
  return (
    <section id="beranda" className="relative pt-44 pb-20 sm:pt-48 lg:pt-52 lg:pb-28 overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white">
      {/* Background Decor - Arabesque Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          
          {/* Arabic Bismillah */}
          <div className="inline-block pt-2 sm:pt-4">
            <span className="font-arabic text-2xl sm:text-3xl lg:text-4xl text-amber-300 font-bold tracking-wider block">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Membentuk Generasi <span className="text-amber-400">Qur'ani</span>, Berakhlakul Karimah, & Berwawasan Global
          </h1>

          {/* Subtitle description */}
          <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl leading-relaxed mx-auto">
            Pondok Pesantren Miftahul Falah memadukan kedalaman tradisi keilmuan Islam salaf (Kajian Kitab Kuning) dengan pembinaan karakter mandiri serta keselarasan studi akademik perkuliahan.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              onClick={onOpenPsb}
              className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-emerald-950 font-bold rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer border border-amber-300/40 group"
              id="btn-hero-daftar"
            >
              <span>Daftar Santri Baru (PSB Online)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenFees}
              className="w-full sm:w-auto px-6 py-3.5 bg-emerald-800/80 hover:bg-emerald-800 text-white font-semibold rounded-xl border border-emerald-600/50 hover:border-emerald-500 transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer shadow-sm"
              id="btn-hero-biaya"
            >
              <FileText className="w-4 h-4 text-amber-300" />
              <span>Rincian Biaya & Brosur</span>
            </button>
          </div>

          {/* Key trust bullets */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-emerald-200">
            <span className="flex items-center gap-1.5 font-medium text-amber-300">
              <CheckCircle className="w-4 h-4 text-amber-400" />
              Biaya Bulanan Rp 120.000 (Sangat Terjangkau)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-amber-400" />
              Biaya Tahunan Rp 150.000
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-amber-400" />
              Asrama Putra-Putri Terpisah
            </span>
          </div>
        </div>

        {/* Bottom Quick Stats Row */}
        <div className="mt-16 pt-8 border-t border-emerald-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-800/80 border border-emerald-700 flex items-center justify-center text-amber-400">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[17px] font-bold text-white block">{PESANTREN_INFO.stats.santriCount}</span>
              <span className="text-xs text-emerald-200">Santri Putra & Putri</span>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-800/80 border border-emerald-700 flex items-center justify-center text-amber-400">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[17px] font-bold text-white block">{PESANTREN_INFO.stats.asatidzCount} Asatidz</span>
              <span className="text-xs text-emerald-200">Dewan Guru & Pengasuh</span>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-800/80 border border-emerald-700 flex items-center justify-center text-amber-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold text-white block">{PESANTREN_INFO.stats.alumniCount}</span>
              <span className="text-xs text-emerald-200">Alumni Tersebar</span>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-800/80 border border-emerald-700 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[17px] font-bold text-white block">Sejak 1922 M</span>
              <span className="text-xs text-emerald-200">Satu Abad Lebih Melayani Umat</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
