import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Printer, 
  Search, 
  FileText, 
  User, 
  Phone, 
  ShieldCheck,
  AlertCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { PESANTREN_INFO, PSB_FEES, PSB_TOTAL_ENTRY_FEE } from '../data/pesantrenData.ts';
import { SantriRegistration } from '../types.ts';
import { usePesantren } from '../context/PesantrenContext.tsx';

interface PsbRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'register' | 'status' | 'fees';
  initialProgramChoice?: string;
}

export const PsbRegistrationModal: React.FC<PsbRegistrationModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'register',
}) => {
  const { registrations, addRegistration } = usePesantren();
  const [activeTab, setActiveTab] = useState<'register' | 'status' | 'fees'>(defaultTab);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    gender: 'putra' as 'putra' | 'putri',
    nisn: '',
    nik: '',
    birthPlace: '',
    birthDate: '',
    previousSchool: '',
    santriPhone: '',
    fatherName: '',
    motherName: '',
    parentPhone: '',
    address: '',
    city: '',
  });

  const [submittedCard, setSubmittedCard] = useState<SantriRegistration | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedResult, setSearchedResult] = useState<SantriRegistration | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Sync tab with props
  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName || !formData.parentPhone || !formData.birthPlace || !formData.birthDate) {
      setErrorMessage('Mohon lengkapi seluruh kolom formulir wajib yang bertanda bintang (*).');
      return;
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const regNo = `MF-2026-${randomSuffix}`;

    const newRecord: SantriRegistration = {
      id: `reg-${Date.now()}`,
      registrationNumber: regNo,
      fullName: formData.fullName,
      gender: formData.gender,
      nisn: formData.nisn || '320' + Math.floor(1000000 + Math.random() * 9000000),
      nik: formData.nik || '3204' + Math.floor(100000000000 + Math.random() * 900000000000),
      birthPlace: formData.birthPlace,
      birthDate: formData.birthDate,
      previousSchool: formData.previousSchool || '-',
      santriPhone: formData.santriPhone || '-',
      fatherName: formData.fatherName || 'Bapak Wali',
      motherName: formData.motherName || 'Ibu Wali',
      parentPhone: formData.parentPhone,
      address: formData.address || 'Alamat Lengkap',
      city: formData.city || 'Jawa Barat',
      status: 'Menunggu Verifikasi',
      registeredAt: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
    };

    // Save to PesantrenContext
    addRegistration(newRecord);
    setSubmittedCard(newRecord);
  };

  const handleSearchStatus = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    setSearchedResult(null);

    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    const found = registrations.find(
      item => 
        item.registrationNumber.toLowerCase().includes(query) ||
        item.fullName.toLowerCase().includes(query) ||
        item.parentPhone.includes(query) ||
        (item.santriPhone && item.santriPhone.includes(query))
    );
    if (found) {
      setSearchedResult(found);
    }
  };

  const getProgramLabel = (code?: string) => {
    switch (code) {
      case 'tahfidz_30_juz': return 'Takhassus Tahfidzul Qur\'an 30 Juz';
      case 'mts_terpadu': return 'MTs Terpadu Miftahul Falah (Kurikulum Kemenag)';
      case 'ma_keagamaan': return 'MA Miftahul Falah (Keagamaan & Sains)';
      case 'salafiyah_murni': return 'Kulliyatul Mu\'allimin Salafiyah (Kitab Kuning)';
      default: return code || '-';
    }
  };

  const printCard = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200 flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950 p-6 text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-emerald-200 hover:text-white hover:bg-emerald-800/80 transition-colors cursor-pointer"
            aria-label="Tutup"
            id="btn-close-psb-modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-emerald-950 text-[10px] font-extrabold uppercase tracking-wider">
              Portal PSB Online
            </span>
            <span className="text-xs text-emerald-200 font-mono">
              {PESANTREN_INFO.domain}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mt-1 text-white">
            Penerimaan Santri Baru (PSB) TA 2026/2027
          </h2>
          <p className="text-xs text-emerald-200 mt-0.5">
            Pondok Pesantren Miftahul Falah - Gelombang 2 (1 Februari - 30 April 2026)
          </p>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 mt-5 border-t border-emerald-700/60 pt-3">
            <button
              onClick={() => { setActiveTab('register'); setSubmittedCard(null); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'register'
                  ? 'bg-amber-400 text-emerald-950 shadow-sm'
                  : 'bg-emerald-950/50 text-emerald-200 hover:bg-emerald-950/80'
              }`}
              id="tab-btn-register"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Formulir Pendaftaran</span>
            </button>

            <button
              onClick={() => setActiveTab('status')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'status'
                  ? 'bg-amber-400 text-emerald-950 shadow-sm'
                  : 'bg-emerald-950/50 text-emerald-200 hover:bg-emerald-950/80'
              }`}
              id="tab-btn-status"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Cek Status & Kartu</span>
            </button>

            <button
              onClick={() => setActiveTab('fees')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'fees'
                  ? 'bg-amber-400 text-emerald-950 shadow-sm'
                  : 'bg-emerald-950/50 text-emerald-200 hover:bg-emerald-950/80'
              }`}
              id="tab-btn-fees"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Rincian Biaya</span>
            </button>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">

          {/* TAB 1: REGISTRATION FORM / SUBMISSION SUCCESS CARD */}
          {activeTab === 'register' && (
            <div>
              {submittedCard ? (
                /* Registration Success Card */
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                    <div>
                      <h3 className="text-sm font-bold text-emerald-900">Alhamdulillah! Pendaftaran Berhasil Dikirim</h3>
                      <p className="text-xs text-emerald-700 mt-0.5">
                        Data calon santri telah tersimpan secara resmi di sistem PSB Ponpes Miftahul Falah ({PESANTREN_INFO.domain}).
                      </p>
                    </div>
                  </div>

                  {/* Printable Registration Card Element */}
                  <div id="printable-card" className="bg-stone-50 border-2 border-dashed border-emerald-800/50 rounded-3xl p-6 sm:p-8 space-y-6 relative">
                    <div className="flex flex-col sm:flex-row items-center justify-between border-b border-stone-200 pb-4 gap-3">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-800 block">KARTU BUKTI PENDAFTARAN RESMI</span>
                        <h4 className="text-lg font-black text-stone-900">{PESANTREN_INFO.name}</h4>
                        <p className="text-xs text-stone-500 font-mono">Domain: {PESANTREN_INFO.domain} | NSPP: {PESANTREN_INFO.nspp}</p>
                      </div>
                      <div className="text-center sm:text-right bg-emerald-800 text-white px-4 py-2 rounded-xl">
                        <span className="text-[10px] text-amber-300 font-bold block uppercase tracking-wider">Nomor Registrasi</span>
                        <span className="text-base sm:text-lg font-mono font-black">{submittedCard.registrationNumber}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-stone-400 block font-medium">Nama Calon Santri:</span>
                        <span className="text-sm font-bold text-stone-900">{submittedCard.fullName} ({submittedCard.gender === 'putra' ? 'Santri' : 'Santriwati'})</span>
                        {submittedCard.santriPhone && submittedCard.santriPhone !== '-' && (
                          <span className="text-[11px] text-emerald-800 font-mono block mt-0.5">WA Santri: {submittedCard.santriPhone}</span>
                        )}
                      </div>

                      <div>
                        <span className="text-stone-400 block font-medium">Tempat, Tanggal Lahir:</span>
                        <span className="font-semibold text-stone-800">{submittedCard.birthPlace}, {submittedCard.birthDate}</span>
                      </div>

                      <div>
                        <span className="text-stone-400 block font-medium">Nama Wali & Kontak WhatsApp:</span>
                        <span className="font-semibold text-stone-800">{submittedCard.fatherName} ({submittedCard.parentPhone})</span>
                      </div>

                      <div>
                        <span className="text-stone-400 block font-medium">Universitas / Asal Sekolah & Kota:</span>
                        <span className="font-semibold text-stone-800">{submittedCard.previousSchool}, {submittedCard.city}</span>
                      </div>

                      {submittedCard.address && (
                        <div className="sm:col-span-2">
                          <span className="text-stone-400 block font-medium">Alamat Lengkap:</span>
                          <span className="font-semibold text-stone-800">{submittedCard.address}</span>
                        </div>
                      )}
                    </div>

                    {/* Verification Status Box */}
                    <div className={`p-4 rounded-2xl border text-xs space-y-1 ${
                      submittedCard.status === 'Terverifikasi'
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                        : 'bg-amber-50 border-amber-300 text-amber-950'
                    }`}>
                      <div className="flex items-center gap-1.5 font-bold">
                        {submittedCard.status === 'Terverifikasi' ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                            <span className="text-emerald-900">Status: Berkas Resmi DIVERIFIKASI</span>
                          </>
                        ) : (
                          <>
                            <Clock className="w-4 h-4 text-amber-700 shrink-0" />
                            <span className="text-amber-900">Status: Pendaftaran Masuk &bull; Menunggu Verifikasi Sekretariat</span>
                          </>
                        )}
                      </div>
                      <p className="text-[11px] leading-relaxed">
                        {submittedCard.status === 'Terverifikasi' 
                          ? 'Data dan berkas calon santri telah divalidasi dan diverifikasi resmi oleh Sekretariat Pondok Pesantren Miftahul Falah.' 
                          : 'Data calon santri telah tersimpan di sistem PSB kami. Panitia sekretariat pondok akan melakukan verifikasi berkas dan menghubungi nomor wali santri.'}
                      </p>
                      <p className="text-[10px] text-stone-500 pt-1">
                        *Simpan Nomor Registrasi ({submittedCard.registrationNumber}) untuk mengecek pembaruan status verifikasi pada tab "Cek Status Pendaftaran".
                      </p>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <button
                        onClick={printCard}
                        className="w-full sm:w-auto px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                        id="btn-print-psb-card"
                      >
                        <Printer className="w-4 h-4" />
                        <span>Cetak / Unduh Kartu PDF</span>
                      </button>

                      <button
                        onClick={() => {
                          setSubmittedCard(null);
                          setFormData({
                            fullName: '',
                            gender: 'putra',
                            nisn: '',
                            nik: '',
                            birthPlace: '',
                            birthDate: '',
                            previousSchool: '',
                            santriPhone: '',
                            fatherName: '',
                            motherName: '',
                            parentPhone: '',
                            address: '',
                            city: '',
                          });
                        }}
                        className="text-xs font-semibold text-stone-500 hover:text-stone-800 cursor-pointer"
                      >
                        + Daftarkan Santri Baru Lainnya
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Application Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Section 1: Data Calon Santri */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      1. Data Diri Calon Santri
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="sm:col-span-2">
                        <label className="text-xs font-semibold text-stone-700 block mb-1">
                          Nama Lengkap Calon Santri (Sesuai Akta Kelahiran) *
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Contoh: Muhammad Rayhan Al-Fatih"
                          className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">
                          Jenis Kelamin *
                        </label>
                        <div className="flex gap-4 p-2 bg-stone-50 rounded-xl border border-stone-300 text-xs">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="gender"
                              value="putra"
                              checked={formData.gender === 'putra'}
                              onChange={() => setFormData({ ...formData, gender: 'putra' })}
                              className="text-emerald-600"
                            />
                            <span>Santri (Putra)</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="gender"
                              value="putri"
                              checked={formData.gender === 'putri'}
                              onChange={() => setFormData({ ...formData, gender: 'putri' })}
                              className="text-emerald-600"
                            />
                            <span>Santriwati (Putri)</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">
                          Universitas - Jurusan (opsional)
                        </label>
                        <input
                          type="text"
                          value={formData.previousSchool}
                          onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                          placeholder="Contoh: UIN Sunan Gunung Djati - KPI / UNPAD / Sekolah Asal"
                          className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">
                          Tempat Lahir *
                        </label>
                        <input
                          type="text"
                          value={formData.birthPlace}
                          onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                          placeholder="Contoh: Bandung / Tasikmalaya"
                          className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">
                          Tanggal Lahir *
                        </label>
                        <input
                          type="date"
                          value={formData.birthDate}
                          onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                          className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">
                          Nomor WhatsApp Santri
                        </label>
                        <input
                          type="tel"
                          value={formData.santriPhone}
                          onChange={(e) => setFormData({ ...formData, santriPhone: e.target.value })}
                          placeholder="Contoh: 081234567890"
                          className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">
                          NIK Calon Santri (Nomor KK)
                        </label>
                        <input
                          type="text"
                          value={formData.nik}
                          onChange={(e) => setFormData({ ...formData, nik: e.target.value })}
                          placeholder="16 digit angka"
                          className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Data Wali & Kontak */}
                  <div className="space-y-3 pt-2 border-t border-stone-200">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      2. Data Orang Tua / Wali & Kontak
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">
                          Nama Ayah Kandung / Wali *
                        </label>
                        <input
                          type="text"
                          value={formData.fatherName}
                          onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                          placeholder="Nama lengkap ayah"
                          className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">
                          Nama Ibu Kandung *
                        </label>
                        <input
                          type="text"
                          value={formData.motherName}
                          onChange={(e) => setFormData({ ...formData, motherName: e.target.value })}
                          placeholder="Nama lengkap ibu"
                          className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
                          required
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">
                          Nomor WhatsApp Aktif Wali *
                        </label>
                        <input
                          type="tel"
                          value={formData.parentPhone}
                          onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                          placeholder="Contoh: 081234567890"
                          className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
                          required
                        />
                        <span className="text-[10px] text-stone-500 mt-0.5 block">
                          Untuk pengiriman jadwal tes seleksi dan pengumuman hasil.
                        </span>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-stone-700 block mb-1">
                          Kota / Kabupaten Domisili *
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="Contoh: Bandung / Jakarta Selatan"
                          className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
                          required
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="text-xs font-semibold text-stone-700 block mb-1">
                          Alamat Lengkap Domisili
                        </label>
                        <input
                          type="text"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          placeholder="Jalan, RT/RW, Kelurahan, Kecamatan"
                          className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submission Button */}
                  <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-[11px] text-stone-500">
                      Dengan menekan tombol, data akan diverifikasi panitia PSB resmi ({PESANTREN_INFO.domain}).
                    </p>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-emerald-700 to-emerald-900 hover:from-emerald-800 hover:to-emerald-950 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-2"
                      id="btn-submit-psb-form"
                    >
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>Kirim Formulir Pendaftaran</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: CHECK REGISTRATION STATUS */}
          {activeTab === 'status' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <h3 className="text-sm font-bold text-stone-900 mb-1">
                  Pencarian Status Registrasi Santri
                </h3>
                <p className="text-xs text-stone-600 mb-3">
                  Masukkan Nomor Registrasi (contoh: <code className="bg-stone-200 px-1.5 py-0.5 rounded text-emerald-800 font-mono">MF-2026-0108</code>), Nama Calon Santri, atau No. WhatsApp wali.
                </p>

                <form onSubmit={handleSearchStatus} className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Masukkan No. Registrasi atau Nama Santri..."
                      className="w-full pl-9 pr-3 py-2.5 bg-white border border-stone-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl cursor-pointer"
                  >
                    Cari Status
                  </button>
                </form>
              </div>

              {/* Search Result */}
              {hasSearched && (
                <div>
                  {searchedResult ? (
                    <div className="bg-white rounded-2xl p-6 border-2 border-emerald-600/30 shadow-md space-y-4">
                      <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                        <div>
                          <span className="text-[10px] text-stone-400 font-bold uppercase block">Hasil Ditemukan</span>
                          <h4 className="text-base font-bold text-stone-900">{searchedResult.fullName}</h4>
                          <span className="text-xs font-mono text-emerald-800 font-bold">{searchedResult.registrationNumber}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          searchedResult.status === 'Terverifikasi' 
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                            : 'bg-amber-100 text-amber-800 border border-amber-300'
                        }`}>
                          {searchedResult.status}
                        </span>
                      </div>

                      {/* Verification Status Banner */}
                      <div className={`p-4 rounded-2xl border text-xs space-y-1.5 ${
                        searchedResult.status === 'Terverifikasi'
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                          : 'bg-amber-50 border-amber-200 text-amber-950'
                      }`}>
                        <div className="flex items-center gap-1.5 font-bold">
                          {searchedResult.status === 'Terverifikasi' ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                              <span className="text-emerald-900">Berkas Terverifikasi Resmi</span>
                            </>
                          ) : (
                            <>
                              <Clock className="w-4 h-4 text-amber-700 shrink-0" />
                              <span className="text-amber-900">Dalam Proses Verifikasi Panitia</span>
                            </>
                          )}
                        </div>
                        <p className="text-[11px] leading-relaxed text-stone-700">
                          {searchedResult.status === 'Terverifikasi'
                            ? 'Alhamdulillah, berkas data pendaftaran calon santri telah lengkap dan divalidasi oleh panitia Sekretariat Pondok Pesantren Miftahul Falah.'
                            : 'Data pendaftaran calon santri telah masuk ke sistem kami. Tim panitia PSB akan memverifikasi kelengkapan berkas.'}
                        </p>
                        {searchedResult.verifiedAt && (
                          <p className="text-[10px] text-emerald-800 font-semibold pt-0.5">
                            Diverifikasi pada: {searchedResult.verifiedAt} ({searchedResult.verifiedBy || 'Sekretariat PSB'})
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                        <div>
                          <span className="text-stone-400 block">Tanggal Registrasi:</span>
                          <span className="font-semibold text-stone-800">{searchedResult.registeredAt}</span>
                        </div>
                        <div>
                          <span className="text-stone-400 block">Kota & Sekolah Asal:</span>
                          <span className="font-semibold text-stone-800">{searchedResult.city || '-'} ({searchedResult.previousSchool || '-'})</span>
                        </div>
                        <div>
                          <span className="text-stone-400 block">Nama Wali:</span>
                          <span className="font-semibold text-stone-800">{searchedResult.fatherName || '-'}</span>
                        </div>
                        <div>
                          <span className="text-stone-400 block">Kontak WhatsApp:</span>
                          <div className="space-y-0.5">
                            <span className="font-semibold text-emerald-800 font-mono block">Wali: {searchedResult.parentPhone}</span>
                            {searchedResult.santriPhone && searchedResult.santriPhone !== '-' && (
                              <span className="font-semibold text-emerald-700 font-mono block text-[11px]">Santri: {searchedResult.santriPhone}</span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-stone-100 flex justify-end">
                        <button
                          onClick={() => {
                            setSubmittedCard(searchedResult);
                            setActiveTab('register');
                          }}
                          className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl flex items-center gap-1.5"
                        >
                          <Printer className="w-3.5 h-3.5" />
                          <span>Buka & Cetak Kartu Registrasi</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="p-8 text-center bg-stone-50 rounded-2xl border border-stone-200 text-stone-500">
                      <AlertCircle className="w-8 h-8 mx-auto text-stone-400 mb-2" />
                      <p className="text-xs font-semibold text-stone-700">Data registrasi tidak ditemukan.</p>
                      <p className="text-[11px] text-stone-500 mt-1">
                        Pastikan Nomor Registrasi ditulis lengkap (contoh: MF-2026-0108).
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: TRANSPARENCY OF FEES */}
          {activeTab === 'fees' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-900 text-[11px] font-bold mb-1">
                    <Sparkles className="w-3 h-3 text-emerald-700" />
                    <span>Infaq Pendidikan Sangat Terjangkau</span>
                  </div>
                  <h3 className="text-base font-bold text-stone-900">
                    Rincian Transparansi Pembiayaan Pendidikan MIFA
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Tahun Ajaran 2026/2027 Pondok Pesantren Miftahul Falah. Bebas biaya tersembunyi.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {PSB_FEES.map((fee, idx) => (
                  <div 
                    key={idx} 
                    className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                      fee.highlight 
                        ? 'bg-emerald-50/50 border-emerald-300' 
                        : 'bg-stone-50 border-stone-200'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs sm:text-sm font-bold text-stone-900">{fee.item}</h4>
                        {fee.badge && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                            {fee.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-stone-500 mt-0.5">{fee.note}</p>
                    </div>
                    <span className="text-sm sm:text-base font-bold font-mono text-emerald-800 shrink-0">
                      {fee.nominal}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total Biaya Awal Masuk & Tidak Ada Biaya Tambahan */}
              <div className="space-y-3">
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-800 to-teal-900 text-white shadow-md relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-700/80 border border-emerald-500/50 text-[10px] font-bold uppercase tracking-wider text-emerald-200 mb-1.5">
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        <span>Transparansi Biaya Awal</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-white">
                        Total Biaya Awal Masuk
                      </h4>
                      <p className="text-xs text-emerald-100/90 mt-0.5">
                        {PSB_TOTAL_ENTRY_FEE.description}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-emerald-200">
                        {PSB_TOTAL_ENTRY_FEE.breakdown.map((item, i) => (
                          <span key={i} className="bg-emerald-950/40 px-2 py-0.5 rounded-md border border-emerald-700/50">
                            {item.name}: <strong>{item.amount}</strong>
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="sm:text-right shrink-0">
                      <div className="text-xs text-emerald-200 font-medium">Total Pertama Kali</div>
                      <div className="text-2xl sm:text-3xl font-black font-mono text-amber-300">
                        {PSB_TOTAL_ENTRY_FEE.total}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-emerald-950">
                      Tidak Ada Biaya Tambahan / Bangunan
                    </h5>
                    <p className="text-xs text-emerald-800/90 mt-0.5 leading-relaxed">
                      Pondok Pesantren Miftahul Falah menegaskan tidak ada pungutan uang gedung/bangunan, tidak ada biaya pendaftaran terselubung, dan bebas biaya siluman. Biaya pendidikan transparan dan amanah.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setActiveTab('register')}
                  className="px-6 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Lanjut Mengisi Formulir PSB</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
