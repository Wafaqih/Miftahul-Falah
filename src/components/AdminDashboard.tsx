import React, { useState } from 'react';
import { 
  Lock, 
  Unlock, 
  X, 
  LayoutDashboard, 
  UserCheck, 
  Newspaper, 
  Layers, 
  Building2, 
  PhoneCall, 
  Search, 
  CheckCircle2, 
  Clock, 
  Trash2, 
  Edit3, 
  Plus, 
  Download, 
  Eye, 
  RefreshCw, 
  MessageSquare, 
  ExternalLink,
  Save,
  Check,
  User,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';
import { usePesantren } from '../context/PesantrenContext.tsx';
import { 
  SantriRegistration, 
  NewsItem, 
  DewanSantriProgram, 
  FacilityItem, 
  PesantrenContacts 
} from '../types.ts';
import { PESANTREN_INFO } from '../data/pesantrenData.ts';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ isOpen, onClose }) => {
  const {
    contacts,
    updateContacts,
    resetContacts,
    news,
    addNews,
    updateNews,
    deleteNews,
    proker,
    addProker,
    updateProker,
    deleteProker,
    facilities,
    addFacility,
    updateFacility,
    deleteFacility,
    registrations,
    verifyRegistration,
    unverifyRegistration,
    deleteRegistration,
    resetAllDataToDefault
  } = usePesantren();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('mf_admin_auth') === 'true';
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  // Active Tab
  const [activeTab, setActiveTab] = useState<'overview' | 'psb' | 'news' | 'proker' | 'facilities' | 'contacts'>('overview');

  // Success Notification
  const [toastMessage, setToastMessage] = useState('');
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // --- PSB State ---
  const [psbSearch, setPsbSearch] = useState('');
  const [psbFilter, setPsbFilter] = useState<'all' | 'menunggu' | 'terverifikasi'>('all');
  const [viewingSantri, setViewingSantri] = useState<SantriRegistration | null>(null);

  // --- News Form State ---
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [newsFormData, setNewsFormData] = useState<Omit<NewsItem, 'id'>>({
    title: '',
    category: 'Kabar Pesantren',
    date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    author: 'Humas Ponpes Miftahul Falah',
    readTime: '3 menit baca',
    summary: '',
    content: '',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80'
  });

  // --- Proker Form State ---
  const [isProkerModalOpen, setIsProkerModalOpen] = useState(false);
  const [editingProker, setEditingProker] = useState<DewanSantriProgram | null>(null);
  const [prokerFormData, setProkerFormData] = useState<Omit<DewanSantriProgram, 'id'>>({
    title: '',
    bidangId: 'psdm',
    bidangName: 'Bidang PSDM (Pengembangan Sumber Daya Manusia)',
    badge: 'Kreatif Santri',
    tagline: '',
    description: '',
    objectives: [''],
    targetSkills: [''],
    executionNote: 'Waktu pelaksanaan akan diumumkan oleh pengurus',
    icon: 'Sparkles'
  });

  // --- Facilities Form State ---
  const [isFacilityModalOpen, setIsFacilityModalOpen] = useState(false);
  const [editingFacility, setEditingFacility] = useState<FacilityItem | null>(null);
  const [facilityFormData, setFacilityFormData] = useState<Omit<FacilityItem, 'id'>>({
    title: '',
    category: 'ibadah',
    description: '',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80'
  });

  // --- Contacts Form State ---
  const [contactFormData, setContactFormData] = useState<PesantrenContacts>(contacts);

  // Sync contact form when context contacts changes
  React.useEffect(() => {
    setContactFormData(contacts);
  }, [contacts]);

  if (!isOpen) return null;

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'admin123' || passwordInput === 'miftahulfalah2026') {
      setIsAuthenticated(true);
      localStorage.setItem('mf_admin_auth', 'true');
      setAuthError('');
      setPasswordInput('');
      showToast('Berhasil masuk ke Dashboard Admin Pengurus!');
    } else {
      setAuthError('Kata sandi salah. Gunakan sandi default pengurus: admin123');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('mf_admin_auth');
    showToast('Anda telah keluar dari panel admin.');
  };

  // --- Export PSB to CSV ---
  const handleExportPsbCsv = () => {
    if (registrations.length === 0) {
      alert('Belum ada data pendaftar untuk diekspor.');
      return;
    }

    const headers = [
      'No. Registrasi',
      'Nama Lengkap',
      'Jenis Kelamin',
      'NISN',
      'NIK',
      'Tempat Lahir',
      'Tanggal Lahir',
      'Sekolah/Kampus Asal',
      'No. WA Santri',
      'Nama Ayah',
      'Nama Ibu',
      'No. WA Wali',
      'Kota',
      'Alamat',
      'Status Verifikasi',
      'Tanggal Daftar',
      'Tanggal Verifikasi',
      'Diverifikasi Oleh'
    ];

    const rows = registrations.map(r => [
      `"${r.registrationNumber}"`,
      `"${r.fullName}"`,
      `"${r.gender}"`,
      `"${r.nisn || '-'}"`,
      `"${r.nik || '-'}"`,
      `"${r.birthPlace}"`,
      `"${r.birthDate}"`,
      `"${r.previousSchool || '-'}"`,
      `"${r.santriPhone || '-'}"`,
      `"${r.fatherName || '-'}"`,
      `"${r.motherName || '-'}"`,
      `"${r.parentPhone}"`,
      `"${r.city || '-'}"`,
      `"${(r.address || '-').replace(/"/g, '""')}"`,
      `"${r.status}"`,
      `"${r.registeredAt}"`,
      `"${r.verifiedAt || '-'}"`,
      `"${r.verifiedBy || '-'}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `data_pendaftar_psb_miftahulfalah_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Data calon santri berhasil diunduh dalam format CSV!');
  };

  // --- Filtered PSB ---
  const filteredRegistrations = registrations.filter(item => {
    const matchesSearch = 
      item.fullName.toLowerCase().includes(psbSearch.toLowerCase()) ||
      item.registrationNumber.toLowerCase().includes(psbSearch.toLowerCase()) ||
      item.parentPhone.includes(psbSearch) ||
      (item.santriPhone && item.santriPhone.includes(psbSearch)) ||
      (item.city && item.city.toLowerCase().includes(psbSearch.toLowerCase()));

    if (psbFilter === 'menunggu') {
      return matchesSearch && item.status === 'Menunggu Verifikasi';
    }
    if (psbFilter === 'terverifikasi') {
      return matchesSearch && item.status === 'Terverifikasi';
    }
    return matchesSearch;
  });

  // --- News Handlers ---
  const handleOpenAddNews = () => {
    setEditingNews(null);
    setNewsFormData({
      title: '',
      category: 'Kabar Pesantren',
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      author: 'Humas Ponpes Miftahul Falah',
      readTime: '3 menit baca',
      summary: '',
      content: '',
      image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80'
    });
    setIsNewsModalOpen(true);
  };

  const handleOpenEditNews = (item: NewsItem) => {
    setEditingNews(item);
    setNewsFormData({
      title: item.title,
      category: item.category,
      date: item.date,
      author: item.author,
      readTime: item.readTime,
      summary: item.summary,
      content: item.content,
      image: item.image,
      arabicQuote: item.arabicQuote
    });
    setIsNewsModalOpen(true);
  };

  const handleSaveNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsFormData.title || !newsFormData.content) {
      alert('Judul dan isi berita wajib diisi.');
      return;
    }

    if (editingNews) {
      updateNews(editingNews.id, newsFormData);
      showToast('Berita berhasil diperbarui!');
    } else {
      addNews(newsFormData);
      showToast('Berita baru berhasil ditambahkan!');
    }
    setIsNewsModalOpen(false);
  };

  // --- Proker Handlers ---
  const handleOpenAddProker = () => {
    setEditingProker(null);
    setProkerFormData({
      title: '',
      bidangId: 'psdm',
      bidangName: 'Bidang PSDM (Pengembangan Sumber Daya Manusia)',
      badge: 'Kreatif Santri',
      tagline: '',
      description: '',
      objectives: ['Meningkatkan keterampilan praktis santri'],
      targetSkills: ['Keahlian Santri', 'Kolaborasi Tim'],
      executionNote: 'Waktu pelaksanaan akan diumumkan oleh pengurus',
      icon: 'Sparkles'
    });
    setIsProkerModalOpen(true);
  };

  const handleOpenEditProker = (item: DewanSantriProgram) => {
    setEditingProker(item);
    setProkerFormData({
      title: item.title,
      bidangId: item.bidangId,
      bidangName: item.bidangName,
      badge: item.badge,
      tagline: item.tagline,
      description: item.description,
      objectives: [...item.objectives],
      targetSkills: [...item.targetSkills],
      executionNote: item.executionNote,
      icon: item.icon
    });
    setIsProkerModalOpen(true);
  };

  const handleSaveProker = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prokerFormData.title || !prokerFormData.description) {
      alert('Judul dan deskripsi program kerja wajib diisi.');
      return;
    }

    // Auto set bidangName based on bidangId
    let bName = 'Bidang PSDM (Pengembangan Sumber Daya Manusia)';
    if (prokerFormData.bidangId === 'pendidikan') bName = 'Bidang Pendidikan';
    if (prokerFormData.bidangId === 'medinfo') bName = 'Bidang Medinfo (Media Informasi)';

    const payload = {
      ...prokerFormData,
      bidangName: bName
    };

    if (editingProker) {
      updateProker(editingProker.id, payload);
      showToast('Program kerja berhasil diperbarui!');
    } else {
      addProker(payload);
      showToast('Program kerja baru berhasil ditambahkan!');
    }
    setIsProkerModalOpen(false);
  };

  // --- Facilities Handlers ---
  const handleOpenAddFacility = () => {
    setEditingFacility(null);
    setFacilityFormData({
      title: '',
      category: 'ibadah',
      description: '',
      image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80'
    });
    setIsFacilityModalOpen(true);
  };

  const handleOpenEditFacility = (item: FacilityItem) => {
    setEditingFacility(item);
    setFacilityFormData({
      title: item.title,
      category: item.category,
      description: item.description,
      image: item.image
    });
    setIsFacilityModalOpen(true);
  };

  const handleSaveFacility = (e: React.FormEvent) => {
    e.preventDefault();
    if (!facilityFormData.title || !facilityFormData.description) {
      alert('Nama fasilitas dan deskripsi wajib diisi.');
      return;
    }

    if (editingFacility) {
      updateFacility(editingFacility.id, facilityFormData);
      showToast('Data & foto fasilitas berhasil diperbarui!');
    } else {
      addFacility(facilityFormData);
      showToast('Fasilitas baru berhasil ditambahkan!');
    }
    setIsFacilityModalOpen(false);
  };

  // --- Contacts Handlers ---
  const handleSaveContacts = (e: React.FormEvent) => {
    e.preventDefault();
    updateContacts(contactFormData);
    showToast('Nomor WhatsApp dan kontak pengurus berhasil diperbarui!');
  };

  // Stats calculation
  const totalPendaftar = registrations.length;
  const totalTerverifikasi = registrations.filter(r => r.status === 'Terverifikasi').length;
  const totalMenunggu = registrations.filter(r => r.status === 'Menunggu Verifikasi').length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-stone-950/80 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[94vh] overflow-y-auto shadow-2xl border border-stone-300 flex flex-col">
        
        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed top-6 right-6 z-60 bg-emerald-900 text-white px-4 py-3 rounded-2xl shadow-xl border border-emerald-700 flex items-center gap-2 text-xs font-semibold animate-in slide-in-from-top-4">
            <CheckCircle2 className="w-4 h-4 text-emerald-300" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-emerald-950 text-white p-5 sm:p-6 shrink-0 relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-700">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-stone-950 text-[10px] font-extrabold uppercase tracking-wider">
                Panel Admin Pengurus
              </span>
              <span className="text-xs text-stone-300">
                {PESANTREN_INFO.shortName}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mt-1 text-white flex items-center gap-2">
              <LayoutDashboard className="w-5 h-5 text-amber-400" />
              Sistem Manajemen & Verifikasi Pondok
            </h2>
            <p className="text-xs text-stone-400 mt-0.5">
              Kelola verifikasi PSB, warta/berita pesantren, program kerja santri, foto fasilitas, dan kontak WhatsApp.
            </p>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="px-3 py-1.5 rounded-xl bg-red-900/60 hover:bg-red-800 text-red-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Keluar dari mode admin"
              >
                <Unlock className="w-3.5 h-3.5" />
                <span>Keluar</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* If Not Authenticated: Login Screen */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center max-w-md mx-auto text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center border border-amber-200 shadow-inner">
              <Lock className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-stone-900">Akses Masuk Pengurus Pesantren</h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1.5">
                Masukkan kata sandi pengurus untuk mengakses verifikasi santri, update berita, proker, foto fasilitas, dan kontak WhatsApp.
              </p>
            </div>

            <form onSubmit={handleLogin} className="w-full space-y-4">
              <div className="text-left">
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Kata Sandi Pengurus / Admin:
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Masukkan kata sandi (default: admin123)"
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  autoFocus
                  required
                />
                <p className="text-[11px] text-stone-400 mt-1 italic">
                  * Sandi default pengurus: <code className="bg-stone-100 px-1 py-0.5 rounded text-emerald-800 font-bold">admin123</code>
                </p>
              </div>

              {authError && (
                <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-xl text-sm transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Lock className="w-4 h-4" />
                <span>Buka Dashboard Admin</span>
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard Body */
          <div className="flex flex-col flex-1 overflow-hidden">
            
            {/* Top Navigation Tabs */}
            <div className="flex overflow-x-auto bg-stone-100 border-b border-stone-200 px-4 py-2 gap-2 shrink-0">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-white text-emerald-900 shadow-xs border border-stone-200'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>Ringkasan</span>
              </button>

              <button
                onClick={() => setActiveTab('psb')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'psb'
                    ? 'bg-white text-emerald-900 shadow-xs border border-stone-200'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>Verifikasi PSB</span>
                <span className="px-1.5 py-0.2 bg-emerald-100 text-emerald-900 rounded-full text-[10px] font-extrabold">
                  {totalPendaftar}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('news')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'news'
                    ? 'bg-white text-emerald-900 shadow-xs border border-stone-200'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                <Newspaper className="w-3.5 h-3.5 text-blue-700" />
                <span>Update Berita ({news.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('proker')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'proker'
                    ? 'bg-white text-emerald-900 shadow-xs border border-stone-200'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-purple-700" />
                <span>Program Kerja ({proker.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('facilities')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'facilities'
                    ? 'bg-white text-emerald-900 shadow-xs border border-stone-200'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 text-amber-700" />
                <span>Foto Fasilitas ({facilities.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('contacts')}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'contacts'
                    ? 'bg-white text-emerald-900 shadow-xs border border-stone-200'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                }`}
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                <span>Kontak & WhatsApp</span>
              </button>
            </div>

            {/* Tab Contents */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6">

              {/* ============================================================== */}
              {/* TAB 1: OVERVIEW */}
              {/* ============================================================== */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Metric Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Total Pendaftar</span>
                        <UserCheck className="w-5 h-5 text-emerald-700" />
                      </div>
                      <div className="text-3xl font-extrabold text-emerald-950 mt-2">{totalPendaftar}</div>
                      <div className="text-xs text-emerald-700 mt-1">Calon Santri Baru (PSB)</div>
                    </div>

                    <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">Terverifikasi</span>
                        <CheckCircle2 className="w-5 h-5 text-teal-700" />
                      </div>
                      <div className="text-3xl font-extrabold text-teal-950 mt-2">{totalTerverifikasi}</div>
                      <div className="text-xs text-teal-700 mt-1">Berkas resmi valid & disetujui</div>
                    </div>

                    <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Menunggu Verifikasi</span>
                        <Clock className="w-5 h-5 text-amber-700" />
                      </div>
                      <div className="text-3xl font-extrabold text-amber-950 mt-2">{totalMenunggu}</div>
                      <div className="text-xs text-amber-700 mt-1">Dalam antrean verifikasi sekretariat</div>
                    </div>

                    <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">Konten Terbit</span>
                        <Newspaper className="w-5 h-5 text-blue-700" />
                      </div>
                      <div className="text-3xl font-extrabold text-blue-950 mt-2">{news.length} Berita</div>
                      <div className="text-xs text-blue-700 mt-1">{proker.length} Proker &bull; {facilities.length} Fasilitas</div>
                    </div>
                  </div>

                  {/* Active WhatsApp Contacts Highlight Box */}
                  <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs">
                    <div className="flex items-center justify-between mb-4 border-b border-stone-100 pb-3">
                      <div>
                        <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-emerald-600" />
                          Nomor WhatsApp & Kontak Aktif Pesantren
                        </h3>
                        <p className="text-xs text-stone-500">Nomor ini terhubung ke tombol chat dan floating WhatsApp publik di website.</p>
                      </div>
                      <button
                        onClick={() => setActiveTab('contacts')}
                        className="text-xs text-emerald-800 font-bold hover:underline flex items-center gap-1"
                      >
                        <Edit3 className="w-3 h-3" />
                        <span>Ubah Kontak</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                        <span className="text-[10px] font-bold text-stone-400 uppercase block">WhatsApp Official / Sekretariat</span>
                        <span className="font-bold text-stone-800 text-sm">{contacts.officialWhatsapp}</span>
                        <span className="text-[11px] text-stone-500 block mt-0.5">Email: {contacts.officialEmail}</span>
                      </div>

                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                        <span className="text-[10px] font-bold text-stone-400 uppercase block">Rois (Ketua Santri Putra)</span>
                        <span className="font-bold text-stone-800 text-sm">{contacts.roisName}</span>
                        <span className="text-[11px] text-emerald-700 font-semibold block mt-0.5">WA: {contacts.roisWhatsapp}</span>
                      </div>

                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                        <span className="text-[10px] font-bold text-stone-400 uppercase block">Roisah (Ketua Santri Putri)</span>
                        <span className="font-bold text-stone-800 text-sm">{contacts.roisahName}</span>
                        <span className="text-[11px] text-emerald-700 font-semibold block mt-0.5">WA: {contacts.roisahWhatsapp}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Action Navigation Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                    <button
                      onClick={() => setActiveTab('psb')}
                      className="p-4 bg-stone-50 hover:bg-emerald-50 rounded-2xl border border-stone-200 hover:border-emerald-300 text-left transition-all group cursor-pointer"
                    >
                      <UserCheck className="w-5 h-5 text-emerald-700 group-hover:scale-110 transition-transform mb-2" />
                      <div className="font-bold text-sm text-stone-900">Verifikasi Pendaftar</div>
                      <div className="text-xs text-stone-500 mt-0.5">Tinjau & verifikasi {totalMenunggu} pendaftar baru</div>
                    </button>

                    <button
                      onClick={() => { setActiveTab('news'); handleOpenAddNews(); }}
                      className="p-4 bg-stone-50 hover:bg-blue-50 rounded-2xl border border-stone-200 hover:border-blue-300 text-left transition-all group cursor-pointer"
                    >
                      <Plus className="w-5 h-5 text-blue-700 group-hover:scale-110 transition-transform mb-2" />
                      <div className="font-bold text-sm text-stone-900">Tulis Berita Baru</div>
                      <div className="text-xs text-stone-500 mt-0.5">Publikasikan kabar dan warta kegiatan</div>
                    </button>

                    <button
                      onClick={() => { setActiveTab('proker'); handleOpenAddProker(); }}
                      className="p-4 bg-stone-50 hover:bg-purple-50 rounded-2xl border border-stone-200 hover:border-purple-300 text-left transition-all group cursor-pointer"
                    >
                      <Plus className="w-5 h-5 text-purple-700 group-hover:scale-110 transition-transform mb-2" />
                      <div className="font-bold text-sm text-stone-900">Tambah Program Kerja</div>
                      <div className="text-xs text-stone-500 mt-0.5">Update proker PSDM, Pendidikan, Medinfo</div>
                    </button>

                    <button
                      onClick={() => { setActiveTab('facilities'); handleOpenAddFacility(); }}
                      className="p-4 bg-stone-50 hover:bg-amber-50 rounded-2xl border border-stone-200 hover:border-amber-300 text-left transition-all group cursor-pointer"
                    >
                      <Plus className="w-5 h-5 text-amber-700 group-hover:scale-110 transition-transform mb-2" />
                      <div className="font-bold text-sm text-stone-900">Update Fasilitas</div>
                      <div className="text-xs text-stone-500 mt-0.5">Ganti foto atau tambah sarana kampus</div>
                    </button>
                  </div>
                </div>
              )}

              {/* ============================================================== */}
              {/* TAB 2: VERIFIKASI PSB */}
              {/* ============================================================== */}
              {activeTab === 'psb' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-stone-50 p-4 rounded-2xl border border-stone-200">
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                        <input
                          type="text"
                          value={psbSearch}
                          onChange={(e) => setPsbSearch(e.target.value)}
                          placeholder="Cari nama, no. reg, kota, no. WA..."
                          className="pl-9 pr-3 py-1.5 bg-white border border-stone-300 rounded-xl text-xs outline-none focus:ring-2 focus:ring-emerald-500 w-56 sm:w-64"
                        />
                      </div>

                      <div className="flex items-center gap-1 text-xs">
                        <button
                          onClick={() => setPsbFilter('all')}
                          className={`px-3 py-1.5 rounded-xl font-semibold cursor-pointer ${
                            psbFilter === 'all' ? 'bg-stone-900 text-white' : 'bg-white text-stone-600 border border-stone-200'
                          }`}
                        >
                          Semua ({registrations.length})
                        </button>
                        <button
                          onClick={() => setPsbFilter('menunggu')}
                          className={`px-3 py-1.5 rounded-xl font-semibold cursor-pointer ${
                            psbFilter === 'menunggu' ? 'bg-amber-600 text-white' : 'bg-white text-stone-600 border border-stone-200'
                          }`}
                        >
                          Menunggu ({totalMenunggu})
                        </button>
                        <button
                          onClick={() => setPsbFilter('terverifikasi')}
                          className={`px-3 py-1.5 rounded-xl font-semibold cursor-pointer ${
                            psbFilter === 'terverifikasi' ? 'bg-emerald-700 text-white' : 'bg-white text-stone-600 border border-stone-200'
                          }`}
                        >
                          Terverifikasi ({totalTerverifikasi})
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleExportPsbCsv}
                        className="px-3 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Ekspor Data (CSV)</span>
                      </button>
                    </div>
                  </div>

                  {/* PSB Table */}
                  <div className="overflow-x-auto border border-stone-200 rounded-2xl bg-white shadow-xs">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-stone-100 text-stone-600 font-bold uppercase tracking-wider text-[10px] border-b border-stone-200">
                          <th className="py-3 px-4">No. Registrasi</th>
                          <th className="py-3 px-4">Nama Santri</th>
                          <th className="py-3 px-4">Gender</th>
                          <th className="py-3 px-4">Kota & Sekolah Asal</th>
                          <th className="py-3 px-4">No. WA Wali</th>
                          <th className="py-3 px-4">Tanggal Daftar</th>
                          <th className="py-3 px-4">Status Verifikasi</th>
                          <th className="py-3 px-4 text-center">Aksi</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        {filteredRegistrations.length === 0 ? (
                          <tr>
                            <td colSpan={8} className="py-8 text-center text-stone-400">
                              Tidak ada data calon santri yang sesuai filter.
                            </td>
                          </tr>
                        ) : (
                          filteredRegistrations.map((item) => (
                            <tr key={item.id} className="hover:bg-stone-50/80 transition-colors">
                              <td className="py-3 px-4 font-mono font-bold text-emerald-800">
                                {item.registrationNumber}
                              </td>
                              <td className="py-3 px-4">
                                <div className="font-bold text-stone-900">{item.fullName}</div>
                                <div className="text-[10px] text-stone-400">NISN: {item.nisn || '-'}</div>
                              </td>
                              <td className="py-3 px-4">
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  item.gender === 'putra' ? 'bg-blue-100 text-blue-800' : 'bg-pink-100 text-pink-800'
                                }`}>
                                  {item.gender === 'putra' ? 'Putra' : 'Putri'}
                                </span>
                              </td>
                              <td className="py-3 px-4">
                                <div className="font-medium text-stone-800">{item.city || '-'}</div>
                                <div className="text-[10px] text-stone-500 truncate max-w-[140px]">{item.previousSchool || '-'}</div>
                              </td>
                              <td className="py-3 px-4 font-mono">
                                <div className="space-y-1">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-[10px] text-stone-400 font-sans">Wali:</span>
                                    <a 
                                      href={`https://wa.me/${item.parentPhone.replace(/[^0-9]/g, '')}?text=Assalamu'alaikum%20Bapak/Ibu%20wali%20dari%20${encodeURIComponent(item.fullName)},%20kami%20dari%20Sekretariat%20Ponpes%20Miftahul%20Falah...`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-emerald-700 hover:underline flex items-center gap-1 font-semibold text-xs"
                                      title="Hubungi WhatsApp Wali"
                                    >
                                      {item.parentPhone}
                                      <ExternalLink className="w-2.5 h-2.5" />
                                    </a>
                                  </div>
                                  {item.santriPhone && item.santriPhone !== '-' && (
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-[10px] text-stone-400 font-sans">Santri:</span>
                                      <a 
                                        href={`https://wa.me/${item.santriPhone.replace(/[^0-9]/g, '')}?text=Assalamu'alaikum%20${encodeURIComponent(item.fullName)},%20kami%20dari%20Sekretariat%20Ponpes%20Miftahul%20Falah...`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-emerald-600 hover:underline flex items-center gap-1 text-xs"
                                        title="Hubungi WhatsApp Santri"
                                      >
                                        {item.santriPhone}
                                        <ExternalLink className="w-2.5 h-2.5" />
                                      </a>
                                    </div>
                                  )}
                                </div>
                              </td>
                              <td className="py-3 px-4 text-stone-500 whitespace-nowrap">
                                {item.registeredAt}
                              </td>
                              <td className="py-3 px-4">
                                {item.status === 'Terverifikasi' ? (
                                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 inline-flex items-center gap-1">
                                    <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                                    <span>Terverifikasi</span>
                                  </span>
                                ) : (
                                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300 inline-flex items-center gap-1">
                                    <Clock className="w-3 h-3 text-amber-700" />
                                    <span>Menunggu</span>
                                  </span>
                                )}
                              </td>
                              <td className="py-3 px-4 text-center">
                                <div className="flex items-center justify-center gap-1.5">
                                  {item.status === 'Menunggu Verifikasi' ? (
                                    <button
                                      onClick={() => {
                                        verifyRegistration(item.id, 'Sekretariat PSB Ponpes Miftahul Falah');
                                        showToast(`Santri ${item.fullName} berhasil DIVERIFIKASI!`);
                                      }}
                                      className="px-2.5 py-1 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-[11px] font-bold transition-colors cursor-pointer flex items-center gap-1"
                                      title="Verifikasi berkas santri ini"
                                    >
                                      <Check className="w-3 h-3" />
                                      <span>Verifikasi</span>
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() => {
                                        unverifyRegistration(item.id);
                                        showToast(`Status verifikasi ${item.fullName} dibatalkan.`);
                                      }}
                                      className="px-2.5 py-1 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-lg text-[11px] font-bold transition-colors cursor-pointer"
                                      title="Kembalikan status ke Menunggu Verifikasi"
                                    >
                                      Batalkan
                                    </button>
                                  )}

                                  <button
                                    onClick={() => setViewingSantri(item)}
                                    className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 cursor-pointer"
                                    title="Lihat Detail Berkas"
                                  >
                                    <Eye className="w-3.5 h-3.5" />
                                  </button>

                                  <button
                                    onClick={() => {
                                      if (confirm(`Hapus data pendaftaran santri "${item.fullName}"?`)) {
                                        deleteRegistration(item.id);
                                        showToast('Data calon santri berhasil dihapus.');
                                      }
                                    }}
                                    className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 cursor-pointer"
                                    title="Hapus Data"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* ============================================================== */}
              {/* TAB 3: UPDATE BERITA */}
              {/* ============================================================== */}
              {activeTab === 'news' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-stone-50 p-4 rounded-2xl border border-stone-200">
                    <div>
                      <h3 className="text-sm font-bold text-stone-900">Kelola Warta & Artikel Pesantren</h3>
                      <p className="text-xs text-stone-500">Berita yang diedit/ditambahkan langsung tampil pada seksi Warta & Kajian di halaman utama.</p>
                    </div>
                    <button
                      onClick={handleOpenAddNews}
                      className="px-3.5 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Tambah Berita Baru</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {news.map((item) => (
                      <div key={item.id} className="bg-white rounded-2xl border border-stone-200 p-4 flex gap-3 shadow-xs hover:border-emerald-300 transition-colors">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-24 h-24 rounded-xl object-cover shrink-0 bg-stone-100"
                        />
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                                {item.category}
                              </span>
                              <span className="text-[10px] text-stone-400">{item.date}</span>
                            </div>
                            <h4 className="text-xs sm:text-sm font-bold text-stone-900 mt-1 line-clamp-2">
                              {item.title}
                            </h4>
                            <p className="text-[11px] text-stone-500 mt-1 line-clamp-2">
                              {item.summary}
                            </p>
                          </div>

                          <div className="flex items-center justify-end gap-2 pt-2 mt-2 border-t border-stone-100">
                            <button
                              onClick={() => handleOpenEditNews(item)}
                              className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold rounded-lg flex items-center gap-1 cursor-pointer"
                            >
                              <Edit3 className="w-3 h-3" />
                              <span>Edit</span>
                            </button>
                            <button
                              onClick={() => {
                                if (confirm(`Hapus berita "${item.title}"?`)) {
                                  deleteNews(item.id);
                                  showToast('Berita berhasil dihapus.');
                                }
                              }}
                              className="px-2.5 py-1 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold rounded-lg flex items-center gap-1 cursor-pointer"
                            >
                              <Trash2 className="w-3 h-3" />
                              <span>Hapus</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ============================================================== */}
              {/* TAB 4: UPDATE PROGRAM KERJA (DEWAN SANTRI) */}
              {/* ============================================================== */}
              {activeTab === 'proker' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-stone-50 p-4 rounded-2xl border border-stone-200">
                    <div>
                      <h3 className="text-sm font-bold text-stone-900">Kelola Program Kerja Dewan Santri</h3>
                      <p className="text-xs text-stone-500">Mencakup proker Bidang PSDM, Bidang Pendidikan, dan Bidang Medinfo.</p>
                    </div>
                    <button
                      onClick={handleOpenAddProker}
                      className="px-3.5 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Tambah Program Kerja</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {proker.map((item) => (
                      <div key={item.id} className="bg-white rounded-2xl border border-stone-200 p-4 flex flex-col justify-between shadow-xs hover:border-emerald-300 transition-colors">
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-900 border border-purple-200">
                              {item.bidangId.toUpperCase()} &bull; {item.badge}
                            </span>
                            <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                              {item.executionNote}
                            </span>
                          </div>

                          <h4 className="text-sm font-bold text-stone-900">{item.title}</h4>
                          <p className="text-[11px] text-emerald-700 italic mt-0.5">"{item.tagline}"</p>
                          <p className="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed">{item.description}</p>
                        </div>

                        <div className="pt-3 border-t border-stone-100 mt-3 flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleOpenEditProker(item)}
                            className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold rounded-lg flex items-center gap-1 cursor-pointer"
                          >
                            <Edit3 className="w-3 h-3" />
                            <span>Edit</span>
                          </button>
                          <button
                            onClick={() => {
                              if (confirm(`Hapus program kerja "${item.title}"?`)) {
                                deleteProker(item.id);
                                showToast('Program kerja berhasil dihapus.');
                              }
                            }}
                            className="px-2.5 py-1 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold rounded-lg flex items-center gap-1 cursor-pointer"
                          >
                            <Trash2 className="w-3 h-3" />
                            <span>Hapus</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ============================================================== */}
              {/* TAB 5: UPDATE FOTO FASILITAS */}
              {/* ============================================================== */}
              {activeTab === 'facilities' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-stone-50 p-4 rounded-2xl border border-stone-200">
                    <div>
                      <h3 className="text-sm font-bold text-stone-900">Kelola Foto & Fasilitas Pesantren</h3>
                      <p className="text-xs text-stone-500">Ubah URL foto atau perbarui deskripsi sarana prasarana yang ada di galeri kampus.</p>
                    </div>
                    <button
                      onClick={handleOpenAddFacility}
                      className="px-3.5 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Tambah Fasilitas Baru</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {facilities.map((item) => (
                      <div key={item.id} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:border-emerald-300 transition-colors flex flex-col justify-between">
                        <div>
                          <div className="relative h-44 bg-stone-100 overflow-hidden group">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-900/80 text-white backdrop-blur-xs uppercase">
                              {item.category}
                            </span>
                          </div>

                          <div className="p-4">
                            <h4 className="text-sm font-bold text-stone-900">{item.title}</h4>
                            <p className="text-xs text-stone-600 mt-1 line-clamp-3 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-0 flex items-center justify-end gap-2 border-t border-stone-100 mt-2">
                          <button
                            onClick={() => handleOpenEditFacility(item)}
                            className="px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold rounded-lg flex items-center gap-1 cursor-pointer"
                          >
                            <Edit3 className="w-3 h-3" />
                            <span>Edit / Ganti Foto</span>
                          </button>
                          <button
                            onClick={() => {
                              if (confirm(`Hapus fasilitas "${item.title}"?`)) {
                                deleteFacility(item.id);
                                showToast('Fasilitas berhasil dihapus.');
                              }
                            }}
                            className="px-2.5 py-1 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold rounded-lg flex items-center gap-1 cursor-pointer"
                          >
                            <Trash2 className="w-3 h-3" />
                            <span>Hapus</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ============================================================== */}
              {/* TAB 6: UPDATE KONTAK & WHATSAPP OFFICIAL, ROIS, ROISAH */}
              {/* ============================================================== */}
              {activeTab === 'contacts' && (
                <div className="max-w-3xl mx-auto space-y-6">
                  <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200">
                    <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-emerald-700" />
                      Perbarui Nomor WhatsApp & Kontak Pengurus
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Perubahan nomor WhatsApp akan otomatis memperbarui tombol kontak di Navbar, Floating Chat, Konsultasi Asrama, dan Footer.
                    </p>
                  </div>

                  <form onSubmit={handleSaveContacts} className="space-y-6 bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
                    {/* Official Pesantren */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider border-b border-stone-200 pb-2">
                        1. Kontak Resmi Pondok & Sekretariat PSB
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-semibold text-stone-700 block mb-1">
                            Nomor WhatsApp Official *
                          </label>
                          <input
                            type="text"
                            value={contactFormData.officialWhatsapp}
                            onChange={(e) => setContactFormData({ ...contactFormData, officialWhatsapp: e.target.value })}
                            placeholder="+62 851-6592-4950"
                            className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
                            required
                          />
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-stone-700 block mb-1">
                            Nomor Telepon Kantor
                          </label>
                          <input
                            type="text"
                            value={contactFormData.officialPhone}
                            onChange={(e) => setContactFormData({ ...contactFormData, officialPhone: e.target.value })}
                            placeholder="+62 851-6592-4950"
                            className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="text-xs font-semibold text-stone-700 block mb-1">
                            Email Sekretariat
                          </label>
                          <input
                            type="email"
                            value={contactFormData.officialEmail}
                            onChange={(e) => setContactFormData({ ...contactFormData, officialEmail: e.target.value })}
                            placeholder="sekretariat@miftahulfalah.my.id"
                            className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Rois (Putra) */}
                    <div className="space-y-3 pt-4 border-t border-stone-200">
                      <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider border-b border-stone-200 pb-2">
                        2. Kontak Rois (Ketua Dewan Santri Putra)
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-semibold text-stone-700 block mb-1">
                            Nama & Gelar Rois Santri Putra *
                          </label>
                          <input
                            type="text"
                            value={contactFormData.roisName}
                            onChange={(e) => setContactFormData({ ...contactFormData, roisName: e.target.value })}
                            placeholder="Mang Muhammad Ilham Sanusi"
                            className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
                            required
                          />
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-stone-700 block mb-1">
                            Nomor WhatsApp Rois Putra *
                          </label>
                          <input
                            type="text"
                            value={contactFormData.roisWhatsapp}
                            onChange={(e) => setContactFormData({ ...contactFormData, roisWhatsapp: e.target.value })}
                            placeholder="+62 895-2060-6000"
                            className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Roisah (Putri) */}
                    <div className="space-y-3 pt-4 border-t border-stone-200">
                      <h4 className="text-xs font-bold text-pink-900 uppercase tracking-wider border-b border-stone-200 pb-2">
                        3. Kontak Roisah (Ketua Dewan Santri Putri)
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-semibold text-stone-700 block mb-1">
                            Nama & Gelar Roisah Santri Putri *
                          </label>
                          <input
                            type="text"
                            value={contactFormData.roisahName}
                            onChange={(e) => setContactFormData({ ...contactFormData, roisahName: e.target.value })}
                            placeholder="Teh Paujiah Nurpadilah"
                            className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
                            required
                          />
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-stone-700 block mb-1">
                            Nomor WhatsApp Roisah Putri *
                          </label>
                          <input
                            type="text"
                            value={contactFormData.roisahWhatsapp}
                            onChange={(e) => setContactFormData({ ...contactFormData, roisahWhatsapp: e.target.value })}
                            placeholder="+62 831-0145-1595"
                            className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-emerald-500 outline-none"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-200">
                      <button
                        type="button"
                        onClick={() => {
                          if (confirm('Kembalikan kontak ke nomor default pesantren?')) {
                            resetContacts();
                            showToast('Kontak berhasil di-reset ke nilai default.');
                          }
                        }}
                        className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1 cursor-pointer"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Reset ke Default</span>
                      </button>

                      <button
                        type="submit"
                        className="px-6 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl flex items-center gap-2 cursor-pointer shadow-md transition-colors w-full sm:w-auto justify-center"
                      >
                        <Save className="w-4 h-4" />
                        <span>Simpan Perubahan Kontak</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}

            </div>
          </div>
        )}

      </div>

      {/* ============================================================== */}
      {/* MODAL: VIEW DETAIL SANTRI */}
      {/* ============================================================== */}
      {viewingSantri && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-stone-100 pb-3 mb-4">
              <div>
                <span className="text-[10px] font-mono text-emerald-800 font-bold uppercase block">Detail Berkas PSB</span>
                <h3 className="text-lg font-bold text-stone-900">{viewingSantri.fullName}</h3>
                <span className="text-xs font-mono text-stone-500">{viewingSantri.registrationNumber}</span>
              </div>
              <button
                onClick={() => setViewingSantri(null)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2 p-3 bg-stone-50 rounded-xl">
                <div>
                  <span className="text-stone-400 block font-medium">Jenis Kelamin:</span>
                  <span className="font-bold text-stone-800 capitalize">{viewingSantri.gender}</span>
                </div>
                <div>
                  <span className="text-stone-400 block font-medium">Status Verifikasi:</span>
                  <span className={`font-bold px-2 py-0.5 rounded-full text-[10px] inline-block ${
                    viewingSantri.status === 'Terverifikasi' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-900'
                  }`}>
                    {viewingSantri.status}
                  </span>
                </div>
                <div>
                  <span className="text-stone-400 block font-medium">Tempat, Tgl Lahir:</span>
                  <span className="font-semibold text-stone-800">{viewingSantri.birthPlace}, {viewingSantri.birthDate}</span>
                </div>
                <div>
                  <span className="text-stone-400 block font-medium">NISN / NIK:</span>
                  <span className="font-semibold text-stone-800">{viewingSantri.nisn || '-'} / {viewingSantri.nik || '-'}</span>
                </div>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl space-y-2">
                <div>
                  <span className="text-stone-400 block font-medium">Asal Sekolah:</span>
                  <span className="font-semibold text-stone-800">{viewingSantri.previousSchool}</span>
                </div>
                <div>
                  <span className="text-stone-400 block font-medium">Nama Orang Tua (Ayah / Ibu):</span>
                  <span className="font-semibold text-stone-800">{viewingSantri.fatherName} / {viewingSantri.motherName}</span>
                </div>
                <div>
                  <span className="text-stone-400 block font-medium">WhatsApp Wali:</span>
                  <span className="font-semibold text-emerald-800 font-mono">{viewingSantri.parentPhone}</span>
                </div>
                {viewingSantri.santriPhone && viewingSantri.santriPhone !== '-' && (
                  <div>
                    <span className="text-stone-400 block font-medium">WhatsApp Santri:</span>
                    <a 
                      href={`https://wa.me/${viewingSantri.santriPhone.replace(/[^0-9]/g, '')}`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-semibold text-emerald-800 font-mono hover:underline inline-flex items-center gap-1"
                    >
                      {viewingSantri.santriPhone}
                      <ExternalLink className="w-3 h-3 text-emerald-600" />
                    </a>
                  </div>
                )}
                <div>
                  <span className="text-stone-400 block font-medium">Kota & Alamat Lengkap:</span>
                  <span className="font-semibold text-stone-800">{viewingSantri.city} - {viewingSantri.address}</span>
                </div>
              </div>

              {viewingSantri.verifiedAt && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-950">
                  <div className="font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    <span>Informasi Verifikasi:</span>
                  </div>
                  <div className="mt-1 text-[11px] space-y-0.5">
                    <div>Waktu: {viewingSantri.verifiedAt}</div>
                    <div>Verifikator: {viewingSantri.verifiedBy || 'Sekretariat PSB'}</div>
                    {viewingSantri.verificationNotes && <div>Catatan: {viewingSantri.verificationNotes}</div>}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 flex items-center justify-end gap-2">
              {viewingSantri.status === 'Menunggu Verifikasi' ? (
                <button
                  onClick={() => {
                    verifyRegistration(viewingSantri.id, 'Sekretariat PSB Ponpes Miftahul Falah');
                    setViewingSantri(null);
                    showToast(`Santri ${viewingSantri.fullName} berhasil diverifikasi!`);
                  }}
                  className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold"
                >
                  Verifikasi Berkas Sekarang
                </button>
              ) : (
                <button
                  onClick={() => {
                    unverifyRegistration(viewingSantri.id);
                    setViewingSantri(null);
                    showToast('Verifikasi santri dibatalkan.');
                  }}
                  className="px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-xl text-xs font-bold"
                >
                  Batalkan Verifikasi
                </button>
              )}
              <button
                onClick={() => setViewingSantri(null)}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-bold"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL: FORM BERITA */}
      {/* ============================================================== */}
      {isNewsModalOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-4">
              <h3 className="text-base font-bold text-stone-900">
                {editingNews ? 'Edit Berita' : 'Tambah Berita Baru'}
              </h3>
              <button
                onClick={() => setIsNewsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveNews} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-stone-700 block mb-1">Judul Berita *</label>
                <input
                  type="text"
                  value={newsFormData.title}
                  onChange={(e) => setNewsFormData({ ...newsFormData, title: e.target.value })}
                  placeholder="Contoh: Pembukaan Masa Orientasi Santri Baru..."
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs outline-none focus:ring-2 focus:ring-emerald-500 font-semibold"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Kategori</label>
                  <select
                    value={newsFormData.category}
                    onChange={(e) => setNewsFormData({ ...newsFormData, category: e.target.value as any })}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs outline-none"
                  >
                    <option value="Kabar Pesantren">Kabar Pesantren</option>
                    <option value="Kajian & Tausiyah">Kajian & Tausiyah</option>
                    <option value="Prestasi">Prestasi</option>
                    <option value="Pengumuman">Pengumuman</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Penulis / Humas</label>
                  <input
                    type="text"
                    value={newsFormData.author}
                    onChange={(e) => setNewsFormData({ ...newsFormData, author: e.target.value })}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">URL Foto / Cover Berita</label>
                <input
                  type="url"
                  value={newsFormData.image}
                  onChange={(e) => setNewsFormData({ ...newsFormData, image: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs outline-none"
                />
                {newsFormData.image && (
                  <div className="mt-2 h-24 rounded-xl overflow-hidden border border-stone-200">
                    <img src={newsFormData.image} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Ringkasan Singkat (1-2 kalimat)</label>
                <textarea
                  value={newsFormData.summary}
                  onChange={(e) => setNewsFormData({ ...newsFormData, summary: e.target.value })}
                  rows={2}
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs outline-none"
                  placeholder="Teks ringkas untuk kartu berita..."
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Isi Lengkap Berita *</label>
                <textarea
                  value={newsFormData.content}
                  onChange={(e) => setNewsFormData({ ...newsFormData, content: e.target.value })}
                  rows={5}
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs outline-none"
                  placeholder="Tuliskan berita lengkap di sini..."
                  required
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setIsNewsModalOpen(false)}
                  className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold shadow-sm"
                >
                  Simpan Berita
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL: FORM PROKER */}
      {/* ============================================================== */}
      {isProkerModalOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-4">
              <h3 className="text-base font-bold text-stone-900">
                {editingProker ? 'Edit Program Kerja' : 'Tambah Program Kerja Baru'}
              </h3>
              <button
                onClick={() => setIsProkerModalOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveProker} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Bidang Dewan Santri *</label>
                  <select
                    value={prokerFormData.bidangId}
                    onChange={(e) => setProkerFormData({ ...prokerFormData, bidangId: e.target.value as any })}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs outline-none font-bold"
                  >
                    <option value="psdm">Bidang PSDM</option>
                    <option value="pendidikan">Bidang Pendidikan</option>
                    <option value="medinfo">Bidang Medinfo</option>
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Badge Kategori</label>
                  <input
                    type="text"
                    value={prokerFormData.badge}
                    onChange={(e) => setProkerFormData({ ...prokerFormData, badge: e.target.value })}
                    placeholder="Contoh: Kreatif & IT Santri"
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Nama Program Kerja *</label>
                <input
                  type="text"
                  value={prokerFormData.title}
                  onChange={(e) => setProkerFormData({ ...prokerFormData, title: e.target.value })}
                  placeholder="Contoh: Pelatihan Desain Grafis"
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs outline-none focus:ring-2 focus:ring-emerald-500 font-bold"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Tagline / Slogan</label>
                <input
                  type="text"
                  value={prokerFormData.tagline}
                  onChange={(e) => setProkerFormData({ ...prokerFormData, tagline: e.target.value })}
                  placeholder="Kreativitas Visual untuk Dakwah Digital"
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs outline-none italic"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Deskripsi Lengkap *</label>
                <textarea
                  value={prokerFormData.description}
                  onChange={(e) => setProkerFormData({ ...prokerFormData, description: e.target.value })}
                  rows={3}
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs outline-none"
                  placeholder="Uraian pelatihan atau kegiatan program kerja..."
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">
                  Sasaran & Manfaat Pembinaan (Pisahkan dengan baris baru / Enter)
                </label>
                <textarea
                  value={prokerFormData.objectives.join('\n')}
                  onChange={(e) => setProkerFormData({ 
                    ...prokerFormData, 
                    objectives: e.target.value.split('\n').filter(Boolean) 
                  })}
                  rows={3}
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs outline-none"
                  placeholder="Contoh:&#10;Santri menguasai tipografi dan layout&#10;Mampu membuat poster dakwah"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">
                  Target Skills / Tags (Pisahkan dengan koma)
                </label>
                <input
                  type="text"
                  value={prokerFormData.targetSkills.join(', ')}
                  onChange={(e) => setProkerFormData({ 
                    ...prokerFormData, 
                    targetSkills: e.target.value.split(',').map(s => s.trim()).filter(Boolean) 
                  })}
                  placeholder="Graphic Design, Poster Dakwah, Branding"
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs outline-none"
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Keterangan Waktu Pelaksanaan</label>
                <input
                  type="text"
                  value={prokerFormData.executionNote}
                  onChange={(e) => setProkerFormData({ ...prokerFormData, executionNote: e.target.value })}
                  placeholder="Waktu pelaksanaan akan diumumkan oleh pengurus"
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs outline-none"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setIsProkerModalOpen(false)}
                  className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold shadow-sm"
                >
                  Simpan Program Kerja
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL: FORM FASILITAS */}
      {/* ============================================================== */}
      {isFacilityModalOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-4">
              <h3 className="text-base font-bold text-stone-900">
                {editingFacility ? 'Edit Foto / Data Fasilitas' : 'Tambah Fasilitas Baru'}
              </h3>
              <button
                onClick={() => setIsFacilityModalOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveFacility} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-stone-700 block mb-1">Nama Fasilitas / Sarana *</label>
                <input
                  type="text"
                  value={facilityFormData.title}
                  onChange={(e) => setFacilityFormData({ ...facilityFormData, title: e.target.value })}
                  placeholder="Contoh: Masjid Jami' Miftahul Falah"
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs outline-none focus:ring-2 focus:ring-emerald-500 font-bold"
                  required
                />
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Kategori Fasilitas</label>
                <select
                  value={facilityFormData.category}
                  onChange={(e) => setFacilityFormData({ ...facilityFormData, category: e.target.value as any })}
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs outline-none font-medium"
                >
                  <option value="ibadah">Masjid & Ibadah</option>
                  <option value="asrama">Asrama Santri</option>
                  <option value="akademik">Perpustakaan & Lab</option>
                  <option value="olahraga">Sarana Olahraga</option>
                  <option value="kesehatan">Layanan Medis / Poskestren</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">URL Foto Fasilitas (Web / Unsplash / Direct link) *</label>
                <input
                  type="url"
                  value={facilityFormData.image}
                  onChange={(e) => setFacilityFormData({ ...facilityFormData, image: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs outline-none"
                  required
                />
                {facilityFormData.image && (
                  <div className="mt-2 h-32 rounded-xl overflow-hidden border border-stone-200">
                    <img src={facilityFormData.image} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <div>
                <label className="font-semibold text-stone-700 block mb-1">Deskripsi Fasilitas *</label>
                <textarea
                  value={facilityFormData.description}
                  onChange={(e) => setFacilityFormData({ ...facilityFormData, description: e.target.value })}
                  rows={3}
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs outline-none"
                  placeholder="Uraian kapasitas, sarana pendukung, dan kenyamanan fasilitas..."
                  required
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setIsFacilityModalOpen(false)}
                  className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold shadow-sm"
                >
                  Simpan Fasilitas
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
