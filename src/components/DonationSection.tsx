import React from 'react';
import { 
  HeartHandshake, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';
import { WAQF_PROGRAMS, PESANTREN_INFO } from '../data/pesantrenData.ts';

export const DonationSection: React.FC = () => {
  return (
    <section id="wakaf" className="py-20 bg-emerald-950 text-white relative overflow-hidden border-b border-emerald-900">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            Amal Jariyah & Wakaf Produktif
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Investasi Abadi untuk Peradaban Santri
          </h2>
          <p className="mt-3 text-emerald-200 text-base sm:text-lg">
            Salurkan infaq dan wakaf terbaik Anda untuk melahirkan generasi ulama penerus dan memperluas fasilitas tarbiyah santri.
          </p>

          {/* Hadits Jariyah */}
          <div className="mt-6 p-4 rounded-2xl bg-emerald-900/80 border border-emerald-800 text-center max-w-2xl mx-auto">
            <p className="font-arabic text-lg sm:text-xl text-amber-300 font-bold mb-1">
              إِذَا مَاتَ ابْنُ آدَمَ انْقَطَعَ عَمَلُهُ إِلَّا مِنْ ثَلَاثٍ: صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ
            </p>
            <p className="text-xs text-emerald-200 italic">
              "Jika seseorang meninggal dunia, maka terputuslah amalnya kecuali tiga perkara: sedekah jariyah, ilmu yang bermanfaat, atau doa anak yang sholeh." (HR. Muslim)
            </p>
          </div>
        </div>

        {/* Ongoing Waqf Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {WAQF_PROGRAMS.map((prog) => (
            <div 
              key={prog.id}
              className="bg-emerald-900/60 rounded-3xl p-6 sm:p-8 border border-emerald-800/80 shadow-lg space-y-4 backdrop-blur-xs"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold">
                  Program Sedang Berjalan
                </span>
                <span className="text-xs text-emerald-300 font-mono">
                  {prog.donorsCount} Muwakif Terdaftar
                </span>
              </div>

              <h3 className="text-xl font-bold text-white leading-snug">
                {prog.title}
              </h3>

              <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
                {prog.description}
              </p>

              {/* Progress Bar */}
              <div className="space-y-1.5 pt-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-emerald-300">Terkumpul: <strong className="text-amber-400 font-mono">{prog.collected}</strong></span>
                  <span className="font-mono text-stone-300">Target: {prog.target}</span>
                </div>
                <div className="w-full h-3 rounded-full bg-emerald-950 overflow-hidden p-0.5 border border-emerald-800">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-1000"
                    style={{ width: `${prog.percent}%` }}
                  ></div>
                </div>
                <div className="text-right text-[11px] font-bold text-amber-300">
                  {prog.percent}% Tercapai
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Consultation Callout */}
        <div className="text-center pt-2">
          <a
            href={`https://wa.me/${PESANTREN_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Assalamu'alaikum%20Pengurus%20Wakaf%20Miftahul%20Falah,%20saya%20ingin%20berkonsultasi%20mengenai%20program%20wakaf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm shadow-md transition-colors"
            id="btn-confirm-waqf-wa"
          >
            <span>Konsultasi & Informasi Program Wakaf</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
