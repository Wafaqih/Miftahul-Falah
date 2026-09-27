import React, { useState } from 'react';
import { 
  BadgePercent, 
  ShieldCheck, 
  HeartHandshake, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  Calculator, 
  HelpCircle,
  Clock,
  BookOpen,
  Building2,
  Coins
} from 'lucide-react';
import { PERSUASIVE_FEE_DATA, PSB_FEES, PSB_TOTAL_ENTRY_FEE, PESANTREN_INFO } from '../data/pesantrenData.ts';

interface BiayaSectionProps {
  onOpenPsb: () => void;
  onOpenFeesModal?: () => void;
  onOpenWhatsapp?: () => void;
}

export const BiayaSection: React.FC<BiayaSectionProps> = ({
  onOpenPsb,
  onOpenFeesModal,
  onOpenWhatsapp
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'breakdown'>('overview');

  const handleConsultWa = () => {
    if (onOpenWhatsapp) {
      onOpenWhatsapp();
    } else {
      const text = encodeURIComponent(
        `Assalamu'alaikum Wr. Wb. Panitia PSB Ponpes Miftahul Falah, saya ingin konsultasi mengenai pendaftaran santri baru dan rincian biaya bulanan (Rp 120.000) serta biaya tahunan (Rp 150.000). Mohon informasi persyaratannya. Terima kasih.`
      );
      window.open(`https://wa.me/${PESANTREN_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
    }
  };

  return (
    <section id="biaya" className="py-16 sm:py-20 bg-gradient-to-b from-stone-50 via-emerald-50/30 to-stone-50 border-y border-stone-200/80 relative overflow-hidden">
      {/* Background Islamic Geometric Watermark Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Prominent Superlative Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold tracking-wide shadow-xs mb-4">
            <BadgePercent className="w-4 h-4 text-emerald-700" />
            <span>INFAQ PENDIDIKAN TERJANGKAU & PENUH KEBERKAHAN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Pendidikan Pesantren Luhur, <br />
            <span className="text-emerald-800">Biaya Paling Ringan & Penuh Berkah</span>
          </h2>

          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Menuntut ilmu agama adalah hak setiap generasi muslim tanpa terhalang tembok biaya. 
            Di <strong>Pondok Pesantren Miftahul Falah Cileunyi</strong>, kami memegang teguh amanah khidmah para pendiri: 
            menghadirkan pembinaan Al-Qur'an dan kitab kuning berkualitas dengan komitmen biaya yang ramah bagi seluruh keluarga.
          </p>

          {/* Quick Toggle Tabs */}
          <div className="mt-6 inline-flex p-1 rounded-xl bg-stone-200/80 border border-stone-300/80">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-white text-emerald-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Komitmen Biaya & Nilai Manfaat
            </button>
            <button
              onClick={() => setActiveTab('breakdown')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'breakdown'
                  ? 'bg-white text-emerald-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Rincian Transparansi PSB
            </button>
          </div>
        </div>

        {/* 2 Main Highlight Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          
          {/* Card 1: Biaya Bulanan (Termurah se-Kabupaten Bandung) */}
          <div className="relative rounded-3xl bg-white border-2 border-emerald-600 shadow-xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
            {/* Ribbon Tag */}
            <div className="absolute top-0 right-0">
              <div className="bg-emerald-600 text-white font-extrabold text-[11px] tracking-wider uppercase py-1.5 px-6 rounded-bl-2xl shadow-sm flex items-center gap-1.5 mb-0">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Sangat Terjangkau di Kab. Bandung</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2.5 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-2">
                <Coins className="w-4 h-4 text-emerald-600" />
                <span>Syahriah / Infaq Bulanan Santri</span>
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tight font-mono">
                  {PERSUASIVE_FEE_DATA.monthlyFee}
                </span>
                <span className="text-base sm:text-lg font-bold text-stone-500">
                  {PERSUASIVE_FEE_DATA.monthlyFeePeriod}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200 mb-6">
                <Calculator className="w-3.5 h-3.5 text-emerald-600" />
                <span>Setara hanya <strong>± Rp 4.000 / hari</strong> (Lebih murah dari secangkir teh)</span>
              </div>

              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Sudah Mencakup Seluruh Fasilitas Berikut:</span>
              </h4>

              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600">
                {PERSUASIVE_FEE_DATA.monthlyIncludes.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                      ✓
                    </span>
                    <span className="leading-snug">{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Persuasive Footer Note */}
            <div className="mt-8 pt-5 border-t border-stone-100 bg-stone-50 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-5 sm:p-6 rounded-b-3xl">
              <p className="text-xs text-stone-600 italic leading-relaxed">
                "Dengan Rp 120.000/bulan, putra-putri Anda dibimbing shalat berjamaah 5 waktu, tahajud, mengaji kitab kuning, dan menghafal Al-Qur'an dalam naungan asrama yang aman dari pergaulan bebas."
              </p>
            </div>
          </div>

          {/* Card 2: Biaya Tahunan (Infaq Operasional Tahunan) */}
          <div className="relative rounded-3xl bg-white border border-stone-300 hover:border-amber-400 transition-colors shadow-md hover:shadow-lg p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
            {/* Ribbon Tag */}
            <div className="absolute top-0 right-0">
              <div className="bg-amber-500 text-emerald-950 font-bold text-[11px] tracking-wider uppercase py-1.5 px-6 rounded-bl-2xl shadow-sm flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-900" />
                <span>Hanya 1x Per Tahun</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2.5 text-amber-800 font-bold text-xs uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4 text-amber-600" />
                <span>Infaq Operasional & Pemeliharaan</span>
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tight font-mono">
                  {PERSUASIVE_FEE_DATA.annualFee}
                </span>
                <span className="text-base sm:text-lg font-bold text-stone-500">
                  {PERSUASIVE_FEE_DATA.annualFeePeriod}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 text-amber-900 text-xs font-semibold border border-amber-200 mb-6">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>100% Bebas Biaya Siluman & Pungutan Tersembunyi</span>
              </div>

              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>Alokasi Pemanfaatan Infaq Tahunan:</span>
              </h4>

              <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600">
                {PERSUASIVE_FEE_DATA.annualIncludes.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                      ✓
                    </span>
                    <span className="leading-snug">{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Persuasive Footer Note */}
            <div className="mt-8 pt-5 border-t border-stone-100 bg-stone-50 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-5 sm:p-6 rounded-b-3xl">
              <p className="text-xs text-stone-600 italic leading-relaxed">
                "Sangat bersahabat dan terencana. Orang tua santri tidak lagi dipusingkan iuran mendadak setiap bulan. Segalanya terkelola transparan untuk kemaslahatan santri."
              </p>
            </div>
          </div>

        </div>

        {/* Tab Content: Breakdown vs Overview Persuasive Reasons */}
        {activeTab === 'overview' ? (
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                4 Alasan Kuat Mengapa Memilih Mondok di Miftahul Falah
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Kombinasi keluhuran sanad pesantren salaf dengan kemudahan akses dan pembiayaan paling terjangkau.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {PERSUASIVE_FEE_DATA.persuasiveReasons.map((reason) => (
                <div 
                  key={reason.id}
                  className="bg-white rounded-2xl p-5 border border-stone-200 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                      {reason.id === 'termurah' && <BadgePercent className="w-5 h-5 text-emerald-600" />}
                      {reason.id === 'tahunan-ringan' && <ShieldCheck className="w-5 h-5 text-emerald-600" />}
                      {reason.id === 'khidmah' && <HeartHandshake className="w-5 h-5 text-emerald-600" />}
                      {reason.id === 'hemat-mahasiswa' && <GraduationCap className="w-5 h-5 text-emerald-600" />}
                    </div>
                    <span className="inline-block text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md mb-1.5 font-mono">
                      {reason.nominal}
                    </span>
                    <h4 className="text-sm font-bold text-stone-900 leading-snug">
                      {reason.title}
                    </h4>
                    <p className="text-xs text-stone-500 font-medium mt-0.5 mb-2">
                      {reason.subtitle}
                    </p>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-4">
              <div>
                <h3 className="text-lg font-bold text-stone-900">
                  Tabel Transparansi Biaya Pendidikan Santri Baru (PSB 2026/2027)
                </h3>
                <p className="text-xs text-stone-500">
                  Semua komponen biaya dijelaskan di awal pendaftaran tanpa ada pungutan tak terduga.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 self-start sm:self-auto">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Akuntabel & Amanah</span>
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-stone-200 text-stone-500 font-bold uppercase text-[11px]">
                    <th className="py-3 px-3">Komponen Pembiayaan</th>
                    <th className="py-3 px-3">Nominal</th>
                    <th className="py-3 px-3">Keterangan & Fasilitas</th>
                    <th className="py-3 px-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {PSB_FEES.map((fee, idx) => (
                    <tr key={idx} className={fee.highlight ? 'bg-emerald-50/60 font-medium' : 'hover:bg-stone-50'}>
                      <td className="py-3.5 px-3 font-semibold text-stone-900 flex items-center gap-2">
                        {fee.highlight && <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />}
                        <span>{fee.item}</span>
                      </td>
                      <td className="py-3.5 px-3 font-mono font-bold text-emerald-800 shrink-0">
                        {fee.nominal}
                      </td>
                      <td className="py-3.5 px-3 text-stone-600 text-xs">
                        {fee.note}
                      </td>
                      <td className="py-3.5 px-3 text-right">
                        {fee.badge ? (
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
                            {fee.badge}
                          </span>
                        ) : (
                          <span className="text-stone-400 text-xs">Reguler</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Total Biaya Awal Masuk & Tidak Ada Biaya Tambahan */}
            <div className="space-y-4 pt-2">
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-800 to-teal-900 text-white shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-700/80 border border-emerald-500/50 text-[10px] font-bold uppercase tracking-wider text-emerald-200 mb-2">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>Transparansi Total Biaya Masuk</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Total Biaya Awal Masuk: <span className="text-amber-300 font-mono font-black">{PSB_TOTAL_ENTRY_FEE.total}</span>
                  </h4>
                  <p className="text-xs text-emerald-100/90 mt-1">
                    {PSB_TOTAL_ENTRY_FEE.description}. Rincian: Ta'aruf & Jas Almamater (Rp 300.000) + Biaya Tahunan (Rp 150.000) + Biaya Bulanan (Rp 120.000) + Kartu Tanda Santri (Rp 20.000).
                  </p>
                </div>
                <div className="text-left sm:text-right shrink-0 bg-emerald-950/40 border border-emerald-700/50 p-3 rounded-xl">
                  <div className="text-[11px] text-emerald-200 font-medium">Biaya Masuk Pertama</div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-amber-300">
                    {PSB_TOTAL_ENTRY_FEE.total}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-emerald-950">
                    Tidak Ada Biaya Tambahan / Bangunan
                  </h5>
                  <p className="text-xs text-emerald-800/90 mt-0.5 leading-relaxed">
                    Pesantren Miftahul Falah memegang teguh komitmen amanah: 100% bebas uang gedung/bangunan, bebas biaya pendaftaran terselubung, dan tidak ada pungutan liar di kemudian hari.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Persuasive Call to Action Banner */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Background decorative ring */}
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-700/80 border border-emerald-500/50 text-emerald-200 text-xs font-semibold mb-3">
              <BookOpen className="w-3.5 h-3.5 text-amber-300" />
              <span>Tahun Ajaran Baru 2026/2027 — Kuota Asrama Terbatas</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Jangan Tunda Niat Baik. <br />
              Wujudkan Generasi Qur'ani Berakhlak Mulia Bersama MIFA.
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              Daftarkan putra-putri Anda sekarang atau konsultasikan langsung dengan pengurus pesantren. 
              Dapatkan ketenangan mondok dengan <strong>biaya bulanan Rp 120.000</strong> dan <strong>biaya tahunan Rp 150.000</strong> yang sangat terjangkau serta penuh keberkahan ilmu.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenPsb}
                className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-emerald-950 font-extrabold text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-amber-500/30 transition-all flex items-center gap-2 cursor-pointer border border-amber-300 group"
                id="btn-biaya-daftar"
              >
                <span>Daftar Santri Baru (PSB Online)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleConsultWa}
                className="px-5 py-3 bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm rounded-xl border border-white/20 transition-all flex items-center gap-2 cursor-pointer backdrop-blur-sm"
                id="btn-biaya-wa"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Tanya Pengurus via WhatsApp</span>
              </button>

              {onOpenFeesModal && (
                <button
                  onClick={onOpenFeesModal}
                  className="px-4 py-3 text-emerald-200 hover:text-white text-xs font-semibold underline underline-offset-4 cursor-pointer"
                >
                  Buka Brosur Rincian Modal
                </button>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
