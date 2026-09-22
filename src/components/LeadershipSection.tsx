import React from 'react';
import { 
  Quote, 
  Award,
  Sparkles,
  History,
  Calendar
} from 'lucide-react';
import { PESANTREN_INFO, SELAYANG_PANDANG, LEADERSHIP_LINEAGE } from '../data/pesantrenData.ts';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="profil" className="py-20 bg-stone-50 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <History className="w-3.5 h-3.5" />
            Selayang Pandang & Kepemimpinan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Menjaga Sanad Salafiyyah Sejak Sekitar Tahun 1922 M
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            Perjalanan satu abad Pondok Pesantren Miftahul Falah di Kampung Cikalang, Cileunyi dalam membina umat, santri mukim, dan mahasantri.
          </p>
        </div>

        {/* Card 1: Selayang Pandang Lengkap (Historical Narrative) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200 mb-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-stone-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                Sejarah Pesantren
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                {SELAYANG_PANDANG.title}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold">
                Berdiri ~1922 M
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-semibold">
                Kampung Cikalang, Cileunyi
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              {SELAYANG_PANDANG.summaryParagraphs.map((paragraf, idx) => (
                <p key={idx} className="text-justify">
                  {paragraf}
                </p>
              ))}

              <div className="mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-emerald-950 text-xs sm:text-sm flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block mb-0.5 text-emerald-900">Komitmen Pesantren Salafiyyah Kontemporer:</strong>
                  Memadukan otentisitas kitab kuning turats salaf dengan kenyamanan fasilitas modern, mendukung penuh santri reguler maupun santri mahasiswa dalam menggapai derajat insan muttaqin.
                </div>
              </div>
            </div>

            {/* Milestones Quick List */}
            <div className="lg:col-span-4 bg-stone-50 rounded-2xl p-5 border border-stone-200/90">
              <div className="flex items-center gap-2 text-stone-800 font-bold text-sm mb-4 pb-2 border-b border-stone-200">
                <Calendar className="w-4 h-4 text-emerald-700" />
                <span>Tonggak Sejarah (Milestones)</span>
              </div>
              <div className="space-y-4">
                {SELAYANG_PANDANG.milestones.map((ms, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-emerald-600 last:border-transparent pb-2">
                    <span className="absolute -left-[9px] top-0.5 w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-emerald-100 flex items-center justify-center text-[10px] text-white font-bold">
                      •
                    </span>
                    <span className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[11px] font-bold mb-1">
                      {ms.year}
                    </span>
                    <h4 className="text-xs font-bold text-stone-900 leading-snug">
                      {ms.title}
                    </h4>
                    <p className="text-[11px] text-stone-600 mt-0.5 leading-relaxed">
                      {ms.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Estafet Kepemimpinan (3 Generasi Pengasuh) */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
              Sanad & Silsilah
            </span>
            <h3 className="text-2xl font-bold text-stone-900">
              Estafet Kepemimpinan Miftahul Falah
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Tiga generasi alim ulama yang mendedikasikan usia dan ilmunya untuk keberkahan pesantren dan umat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEADERSHIP_LINEAGE.map((leader, index) => {
              const isCurrent = index === LEADERSHIP_LINEAGE.length - 1;
              return (
                <div 
                  key={leader.name} 
                  className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                    isCurrent 
                      ? 'bg-emerald-900 text-white shadow-md border-2 border-amber-400/60 ring-4 ring-emerald-800/20' 
                      : 'bg-white text-stone-900 shadow-sm border border-stone-200'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        isCurrent 
                          ? 'bg-amber-400 text-emerald-950' 
                          : 'bg-stone-100 text-stone-600 border border-stone-200'
                      }`}>
                        {leader.badge}
                      </span>
                      <span className={`text-xs font-mono font-bold ${isCurrent ? 'text-emerald-300' : 'text-emerald-700'}`}>
                        Generasi {index + 1}
                      </span>
                    </div>

                    <h4 className={`text-lg font-bold mb-1 leading-snug ${isCurrent ? 'text-amber-300' : 'text-stone-900'}`}>
                      {leader.name}
                    </h4>
                    <span className={`text-xs font-semibold block mb-2 ${isCurrent ? 'text-emerald-100' : 'text-emerald-800'}`}>
                      {leader.role}
                    </span>
                    <span className={`text-[11px] block mb-3 font-medium ${isCurrent ? 'text-emerald-200' : 'text-stone-500'}`}>
                      {leader.era}
                    </span>

                    <p className={`text-xs leading-relaxed mb-4 ${isCurrent ? 'text-emerald-100/90' : 'text-stone-600'}`}>
                      {leader.bio}
                    </p>
                  </div>

                  <div className={`pt-3 border-t text-[11px] ${isCurrent ? 'border-emerald-800/80 text-amber-200 font-semibold' : 'border-stone-100 text-stone-500'}`}>
                    {isCurrent ? '★ Pimpinan & Khadimul Ma\'had Aktif' : 'Al-Fatihah lil-Marhum'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Card 3: Sambutan Khadimul Ma'had Saat Ini */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/90 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Kyai Photo & Title */}
            <div className="lg:col-span-4 text-center">
              <div className="relative inline-block">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-emerald-700/20 mx-auto bg-stone-100">
                  <img 
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80" 
                    alt={PESANTREN_INFO.pengasuh}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-emerald-800 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                  Pimpinan Pesantren
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-bold text-stone-900">{PESANTREN_INFO.pengasuh}</h3>
                <p className="text-xs text-emerald-800 font-medium">{PESANTREN_INFO.pengasuhTitle}</p>
                <p className="text-[11px] text-stone-500 mt-0.5">Memimpin Pesantren Sejak 2004</p>
              </div>
            </div>

            {/* Sambutan & Pesan Khidmat */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-emerald-700">
                <Quote className="w-8 h-8 text-emerald-600/40 -scale-x-100" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Amanat Khadimul Ma'had</span>
              </div>
              
              <h4 className="text-xl sm:text-2xl font-bold text-stone-800 leading-snug">
                "Pesantren Bukan Sekadar Tempat Belajar, Tetapi Laboratorium Kehidupan & Tempat Menempa Hati"
              </h4>

              <div className="text-stone-600 space-y-3 text-sm sm:text-base leading-relaxed">
                <p>
                  <span className="font-arabic font-bold text-emerald-900 text-base">السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</span>
                </p>
                <p>
                  Segala puji bagi Allah SWT yang senantiasa melimpahkan hidayah dan taufiq-Nya. Sejak dirintis oleh al-maghfurlah Mama KH. Abdul Jalil pada tahun 1922, dilanjutkan oleh Mama KH. Endang Sajidin, Pondok Pesantren Miftahul Falah terus berikhtiar teguh menyebarkan ilmu yang bermanfaat bagi agama, nusa, dan bangsa.
                </p>
                <p>
                  Memondokkan putra-putri tercinta serta menuntut ilmu agama bagi para mahasiswa adalah ikhtiar terbaik di tengah tantangan zaman modern. Kami berkomitmen menyediakan pendidikan salafiyyah yang mendalam dengan biaya yang sangat terjangkau agar pintu berkah ilmu terbuka luas bagi siapa saja.
                </p>
                <p className="font-medium text-emerald-900">
                  Selamat datang di kampus peradaban santri Pondok Pesantren Miftahul Falah Cileunyi. Semoga Allah memberkahi niat dan langkah kita bersama.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-stone-100 text-xs text-stone-500">
                <span>Kampung Cikalang, Cileunyi Kulon, Kab. Bandung</span>
                <span className="font-mono text-emerald-800 font-semibold">{PESANTREN_INFO.domain}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Visi & Misi Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-emerald-900 text-white rounded-3xl p-8 shadow-sm relative overflow-hidden flex flex-col justify-between border border-emerald-800">
            <div className="absolute top-0 right-0 p-6 opacity-10 font-arabic text-7xl select-none pointer-events-none">
              الرؤية
            </div>
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-300 block">Visi Pesantren</span>
                <span className="font-arabic text-sm text-emerald-300 font-bold">رُؤْيَةُ الْمَعْهَدِ</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-4 leading-relaxed text-emerald-50">
                "Berperan aktif dalam membentangkan syi’ar Islam dan kerja sama dengan masyarakat yang diiringi pemahaman tata nilai ajaran Islam sebagai landasan dalam membentuk watak serta kepribadian umat Islam yang Islami dan berilmu."
              </h3>
            </div>
            <div className="pt-4 border-t border-emerald-800/80 text-xs text-emerald-200/90 leading-relaxed font-arabic">
              وَمَا كَانَ الْمُؤْمِنُونَ لِيَنفِرُوا كَافَّةً ۚ فَلَوْلَا نَفَرَ مِن كُلِّ فِرْقَةٍ مِّنْهُمْ طَائِفَةٌ لِّيَتَفَقَّهُوا فِي الدِّينِ
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block">Misi Pesantren</span>
                <span className="font-arabic text-sm text-stone-400 font-bold">رِسَالَةُ الْمَعْهَدِ</span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-5">Pilar Misi Pondok Pesantren:</h3>
              <ul className="space-y-3 text-sm text-stone-700">
                <li className="flex items-start gap-3 p-2 rounded-xl bg-stone-50 border border-stone-200/80 hover:border-emerald-200 transition-colors">
                  <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                    1
                  </span>
                  <span className="font-medium leading-relaxed">Mengamalkan ajaran Islam dengan baik dan benar</span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-xl bg-stone-50 border border-stone-200/80 hover:border-emerald-200 transition-colors">
                  <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                    2
                  </span>
                  <span className="font-medium leading-relaxed">Mengadakan kegiatan-kegiatan pendidikan</span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-xl bg-stone-50 border border-stone-200/80 hover:border-emerald-200 transition-colors">
                  <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                    3
                  </span>
                  <span className="font-medium leading-relaxed">Mengadakan kegiatan-kegiatan sosial kemasyarakatan</span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-xl bg-stone-50 border border-stone-200/80 hover:border-emerald-200 transition-colors">
                  <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                    4
                  </span>
                  <span className="font-medium leading-relaxed">Membentuk santri yang berkarakter</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
