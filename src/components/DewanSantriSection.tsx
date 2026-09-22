import React, { useState } from 'react';
import { 
  Palette, 
  Music, 
  BookOpen, 
  Mic, 
  Users, 
  Moon, 
  Newspaper, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Award,
  ChevronRight,
  Info,
  CalendarClock
} from 'lucide-react';
import { DEWAN_SANTRI_BIDANG } from '../data/pesantrenData.ts';
import { DewanSantriProgram } from '../types.ts';
import { usePesantren } from '../context/PesantrenContext.tsx';

export const DewanSantriSection: React.FC = () => {
  const { proker } = usePesantren();
  const [selectedBidang, setSelectedBidang] = useState<'all' | 'psdm' | 'pendidikan' | 'medinfo'>('all');
  const [activeModalProgram, setActiveModalProgram] = useState<DewanSantriProgram | null>(null);

  const filteredPrograms = selectedBidang === 'all'
    ? proker
    : proker.filter(p => p.bidangId === selectedBidang);

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-6 h-6 text-emerald-600" />;
      case 'Music':
        return <Music className="w-6 h-6 text-amber-600" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-teal-600" />;
      case 'Mic':
        return <Mic className="w-6 h-6 text-blue-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-emerald-700" />;
      case 'Moon':
        return <Moon className="w-6 h-6 text-indigo-600" />;
      case 'Newspaper':
        return <Newspaper className="w-6 h-6 text-orange-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-emerald-600" />;
    }
  };

  const getBidangBadgeColor = (bidangId: string) => {
    switch (bidangId) {
      case 'psdm':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'pendidikan':
        return 'bg-amber-50 text-amber-900 border-amber-200';
      case 'medinfo':
        return 'bg-blue-50 text-blue-900 border-blue-200';
      default:
        return 'bg-stone-100 text-stone-800 border-stone-200';
    }
  };

  const currentBidangInfo = DEWAN_SANTRI_BIDANG.find(b => b.id === selectedBidang);

  return (
    <section id="dewan-santri" className="py-20 bg-stone-50 text-stone-900 border-b border-stone-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3.5 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            Organisasi & Pengembangan Santri
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Program Kerja Dewan Santri
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
            Wadah aktualisasi minat, bakat, keilmuan, dan kepemimpinan santri Pondok Pesantren Miftahul Falah untuk melahirkan generasi yang berakhlak mulia, cakap, dan berdaya saing.
          </p>
        </div>

        {/* Bidang Tabs / Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          {DEWAN_SANTRI_BIDANG.map((bidang) => {
            const isSelected = selectedBidang === bidang.id;
            const count = bidang.id === 'all' 
              ? proker.length 
              : proker.filter(p => p.bidangId === bidang.id).length;

            return (
              <button
                key={bidang.id}
                onClick={() => setSelectedBidang(bidang.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border shadow-xs ${
                  isSelected
                    ? 'bg-emerald-800 text-white border-emerald-800 shadow-emerald-800/10'
                    : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                <span>{bidang.shortName}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[11px] font-bold ${
                  isSelected 
                    ? 'bg-emerald-950 text-emerald-200' 
                    : 'bg-stone-100 text-stone-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bidang Summary Description Card */}
        {currentBidangInfo && (
          <div className="mb-10 bg-white border border-stone-200/90 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                <Award className="w-5 h-5 text-emerald-800" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-stone-900">
                  {currentBidangInfo.name} {('fullName' in currentBidangInfo) && `(${currentBidangInfo.fullName})`}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                  {currentBidangInfo.description}
                </p>
              </div>
            </div>
            <div className="shrink-0 text-xs font-medium text-amber-800 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-700" />
              <span>Jadwal: Menyesuaikan agenda pengurus</span>
            </div>
          </div>
        )}

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-2xl border border-stone-200/90 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-emerald-300"
            >
              <div>
                {/* Header Item */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-200/80 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    {getProgramIcon(prog.icon)}
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${getBidangBadgeColor(prog.bidangId)}`}>
                    {prog.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                  {prog.title}
                </h3>
                <p className="text-xs font-medium text-emerald-700 italic mt-0.5 mb-3">
                  "{prog.tagline}"
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {prog.description}
                </p>

                {/* Target & Objectives List */}
                <div className="space-y-2 mb-4 pt-3 border-t border-stone-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
                    Sasaran & Manfaat Pembinaan:
                  </span>
                  {prog.objectives.map((obj, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-stone-100 mt-2 space-y-3">
                {/* Skill Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {prog.targetSkills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 border border-stone-200/60"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>

                {/* Schedule Notice */}
                <div className="flex items-center justify-between text-[11px] text-stone-500 bg-stone-50 px-2.5 py-1.5 rounded-lg border border-stone-200/70">
                  <div className="flex items-center gap-1.5">
                    <CalendarClock className="w-3.5 h-3.5 text-amber-600" />
                    <span>{prog.executionNote}</span>
                  </div>
                  <button
                    onClick={() => setActiveModalProgram(prog)}
                    className="text-emerald-700 hover:text-emerald-900 font-bold flex items-center gap-0.5 text-[11px]"
                  >
                    <span>Detail</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Footer Note */}
        <div className="mt-12 bg-emerald-900 text-emerald-50 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-800">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Sinergi Belajar Agama, Keterampilan & Karakter Santri
            </h4>
            <p className="text-xs sm:text-sm text-emerald-200 max-w-2xl">
              Setiap santri didorong untuk aktif berpartisipasi dalam program kerja bidang sesuai minat dan bakat masing-masing tanpa mengganggu intensitas ngaji kitab kuning dan ibadah harian.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#program"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs sm:text-sm shadow-md transition-colors"
            >
              <span>Lihat Kurikulum Pondok</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Program Detail Modal */}
      {activeModalProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in duration-200">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center">
                  {getProgramIcon(activeModalProgram.icon)}
                </div>
                <div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getBidangBadgeColor(activeModalProgram.bidangId)}`}>
                    {activeModalProgram.bidangName}
                  </span>
                  <h3 className="text-lg font-extrabold text-stone-900 mt-1">
                    {activeModalProgram.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setActiveModalProgram(null)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <p className="text-xs font-semibold text-emerald-700 italic mb-3">
              "{activeModalProgram.tagline}"
            </p>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
              {activeModalProgram.description}
            </p>

            <div className="space-y-2 mb-4 bg-stone-50 p-4 rounded-xl border border-stone-200/70">
              <span className="text-xs font-bold text-stone-900 block">
                Target & Capaian Santri:
              </span>
              {activeModalProgram.objectives.map((obj, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </div>
              ))}
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2 mb-6">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold">Waktu Pelaksanaan:</strong>
                <span>Jadwal resmi pelatihan dan kegiatan akan diumumkan secara berkala oleh pengurus Dewan Santri Miftahul Falah melalui maklumat pesantren.</span>
              </div>
            </div>

            <button
              onClick={() => setActiveModalProgram(null)}
              className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm transition-colors"
            >
              Tutup Penjelasan
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
