import React, { useState } from 'react';
import { 
  Clock, 
  BookOpen,
  Users,
  Sparkles,
  Calendar,
  CheckCircle2,
  BookmarkCheck,
  Award,
  Layers,
  Flame,
  ArrowRight
} from 'lucide-react';
import { 
  KBM_CLASSES, 
  KBM_SPECIAL_AGENDA 
} from '../data/pesantrenData.ts';

export const DailyScheduleSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'kelas' | 'mingguan'>('kelas');
  const [selectedClassId, setSelectedClassId] = useState<'kelas-bawah' | 'kelas-atas'>('kelas-bawah');

  const selectedClass = KBM_CLASSES.find(c => c.id === selectedClassId) || KBM_CLASSES[0];

  return (
    <section id="jadwal" className="py-20 lg:py-24 bg-stone-50 border-b border-stone-200 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#047857_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300/70 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
            Sistem KBM & Jadwal Ngaji Mahasantri
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Kurikulum KBM Berjenjang & Rutinitas Ngaji
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Pembelajaran kitab turats diselaraskan dengan ritme perkuliahan mahasiswa: terbagi menjadi <strong>2 Kelas (Kelas Bawah & Kelas Atas)</strong>, dengan <strong>3 Sesi Ngaji Utama (Maghrib, Isya, Subuh)</strong> serta agenda agung mingguan.
          </p>
        </div>

        {/* Quick Highlights Summary Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10">
          <div className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wide">2 Jenjang Kelas</span>
              <p className="text-xs font-bold text-stone-900 leading-tight mt-0.5">
                Bawah (Smt 1-4) & Atas (Smt 5+)
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wide">3 Waktu Ngaji Harian</span>
              <p className="text-xs font-bold text-stone-900 leading-tight mt-0.5">
                Maghrib, Isya & Subuh
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-900 text-amber-300 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wide">Malam Kamis (Ba'da Isya)</span>
              <p className="text-xs font-bold text-stone-900 leading-tight mt-0.5">
                Ngaji Gabungan Seluruh Santri
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wide">Malam Jumat (Ba'da Isya)</span>
              <p className="text-xs font-bold text-stone-900 leading-tight mt-0.5">
                Barzanji & Marhaba (Shalawat)
              </p>
            </div>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('kelas')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'kelas'
                ? 'bg-emerald-800 text-white shadow-md'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
            id="tab-kbm-kelas"
          >
            <Layers className="w-4 h-4" />
            <span>1. Pembagian 2 Kelas KBM</span>
          </button>

          <button
            onClick={() => setActiveTab('mingguan')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'mingguan'
                ? 'bg-emerald-800 text-white shadow-md'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
            id="tab-kbm-mingguan"
          >
            <Calendar className="w-4 h-4" />
            <span>2. Agenda Malam Kamis & Malam Jumat</span>
          </button>
        </div>

        {/* TAB 1: PEMBAGIAN 2 KELAS */}
        {activeTab === 'kelas' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Class Selector Switcher */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {KBM_CLASSES.map((cls) => {
                const isSelected = selectedClassId === cls.id;
                return (
                  <button
                    key={cls.id}
                    onClick={() => setSelectedClassId(cls.id)}
                    className={`p-5 rounded-2xl text-left border transition-all cursor-pointer relative overflow-hidden ${
                      isSelected
                        ? 'bg-emerald-900 text-white border-emerald-700 shadow-lg'
                        : 'bg-white text-stone-800 border-stone-200 hover:border-emerald-300 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                        isSelected 
                          ? 'bg-amber-400 text-emerald-950' 
                          : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {cls.badge}
                      </span>
                      <span className={`font-arabic text-xs font-bold ${
                        isSelected ? 'text-amber-200' : 'text-stone-400'
                      }`}>
                        {cls.arabicName}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold">
                      {cls.name}
                    </h3>
                    <p className={`text-xs mt-1 font-medium ${
                      isSelected ? 'text-emerald-200' : 'text-stone-500'
                    }`}>
                      {cls.semesterRange}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Selected Class Details Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
              <div className="pb-6 border-b border-stone-100">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold mb-2">
                  <BookmarkCheck className="w-3.5 h-3.5 text-emerald-700" />
                  Target: {selectedClass.targetSantri}
                </div>
                <h3 className="text-2xl font-extrabold text-stone-900">
                  {selectedClass.name}
                </h3>
                <p className="text-stone-600 text-sm mt-1 max-w-2xl leading-relaxed">
                  {selectedClass.description}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
                {/* Fokus Kajian */}
                <div className="lg:col-span-5 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-emerald-700" />
                    Fokus Pembinaan & Capaian
                  </h4>
                  <div className="space-y-2.5">
                    {selectedClass.fokusKajian.map((fokus, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-xs sm:text-sm text-stone-800 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span className="font-medium leading-relaxed">{fokus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Kitab Rujukan Utama */}
                <div className="lg:col-span-7 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-amber-700" />
                    Kitab Kuning Rujukan Utama
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedClass.kitabRujukan.map((kitab, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 hover:border-emerald-300 transition-colors">
                        <span className="px-2 py-0.5 rounded-md bg-stone-200 text-stone-800 text-[10px] font-bold uppercase tracking-wide">
                          {kitab.bidang}
                        </span>
                        <h5 className="text-sm font-bold text-stone-900 mt-2">
                          {kitab.kitab}
                        </h5>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: AGENDA KHUSUS MINGGUAN */}
        {activeTab === 'mingguan' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {KBM_SPECIAL_AGENDA.map((agenda) => {
                const isKamis = agenda.id.includes('kamis');
                return (
                  <div 
                    key={agenda.id}
                    className={`rounded-3xl p-6 sm:p-8 border shadow-sm flex flex-col justify-between ${
                      isKamis 
                        ? 'bg-gradient-to-br from-emerald-900 to-emerald-950 text-white border-emerald-700'
                        : 'bg-gradient-to-br from-stone-900 to-stone-950 text-white border-amber-500/40'
                    }`}
                  >
                    <div>
                      {/* Top Bar */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                          isKamis 
                            ? 'bg-amber-400 text-emerald-950' 
                            : 'bg-amber-500 text-stone-950'
                        }`}>
                          {agenda.badge}
                        </span>
                        <span className="text-xs font-semibold text-emerald-200">
                          {agenda.hari}
                        </span>
                      </div>

                      <h3 className="text-2xl font-extrabold mt-2 leading-snug">
                        {agenda.nama}
                      </h3>
                      <p className="font-arabic text-amber-300 text-sm mt-1">
                        {agenda.arabicName}
                      </p>

                      <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 text-xs font-medium backdrop-blur-xs">
                        <Clock className="w-3.5 h-3.5 text-amber-300" />
                        <span>Waktu: {agenda.waktu}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-300 mt-4 leading-relaxed">
                        {agenda.deskripsi}
                      </p>

                      <div className="mt-5 pt-4 border-t border-white/10">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-2.5">
                          Rangkaian Pelaksanaan:
                        </h4>
                        <div className="space-y-2">
                          {agenda.detailKegiatan.map((item, idx) => (
                            <div key={idx} className="text-xs text-stone-200 flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
                      <span>Peserta: {agenda.peserta}</span>
                      <span className="text-amber-300 font-bold">Wajib Hadir</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
