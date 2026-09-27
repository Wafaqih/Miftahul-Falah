import { 
  ProgramItem, 
  NewsItem, 
  ScheduleItem, 
  FacilityItem, 
  FaqItem, 
  NearbyCampus, 
  DewanSantriProgram, 
  PesantrenContacts,
  SocialMediaItem,
  PsbFeeItem,
  KbmClassLevel,
  KbmNgajiSession,
  KbmSpecialAgenda
} from '../types.ts';

export const PESANTREN_INFO = {
  name: 'Pondok Pesantren Miftahul Falah',
  shortName: 'Ponpes Miftahul Falah',
  domain: 'miftahulfalah.my.id',
  arabicName: 'معهد مفتاح الفلاح الإسلامي السلفي',
  tagline: 'Pesantren Salafiyyah Sejak 1922 • Membina Akhlak, Mengkaji Turats, Menghafal Al-Qur\'an',
  nspp: '-',
  foundedYear: '1922',
  pendiri: 'Mama KH. Abdul Jalil',
  address: 'Jl. Percobaan cikalang, desa No.49, RT.04/RW.12, Cileunyi Kulon, Kec. Cileunyi, Kabupaten Bandung, Jawa Barat 40622',
  coordinates: {
    lat: -6.941348920325291,
    lng: 107.7426678439708,
  },
  plusCode: '3P5V+F3 Cileunyi Kulon, Kabupaten Bandung, Jawa Barat',
  village: 'Cileunyi Kulon',
  district: 'Kec. Cileunyi',
  regency: 'Kabupaten Bandung',
  province: 'Jawa Barat',
  postalCode: '40622',
  googleMapsUrl: 'https://www.google.com/maps?q=-6.941348920325291,107.7426678439708',
  googleMapsEmbed: 'https://maps.google.com/maps?q=-6.941348920325291,107.7426678439708&t=&z=16&ie=UTF8&iwloc=&output=embed',
  region: 'Kawasan Pendidikan Bandung Timur & Jatinangor',
  phone: '+62 851-6592-4950',
  whatsapp: '+62 851-6592-4950',
  email: 'sekretariat@miftahulfalah.my.id',
  psbEmail: 'psb@miftahulfalah.my.id',
  pengasuh: 'KH. Jajang Tsamrotul Fuad, S.Pd.I.',
  pengasuhTitle: 'Khadimul Ma\'had / Pimpinan Pondok Pesantren',
  socialMedia: {
    instagram: '@santri_mifa',
    instagramUrl: 'https://instagram.com/santri_mifa',
    tiktok: '@santri_mifa',
    tiktokUrl: 'https://www.tiktok.com/@santri_mifa',
    facebook: 'Ponpes Miftahul Falah',
    facebookUrl: 'https://facebook.com/PonpesMiftahulFalah',
    youtube: 'Santri Mifa Official',
    youtubeUrl: 'https://youtube.com/@SantriMifaOfficial',
    linktree: 'linktr.ee/PonpesMiftahulFalah',
    linktreeUrl: 'https://linktr.ee/PonpesMiftahulFalah',
  },
  stats: {
    santriCount: '70+',
    asatidzCount: '5',
    alumniCount: '600+',
    tahfidzGraduates: '320+',
  }
};

export const SOCIAL_MEDIA_LIST: SocialMediaItem[] = [
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: '@santri_mifa',
    url: 'https://instagram.com/santri_mifa',
    description: 'Dokumentasi kegiatan santri, kajian kitab harian, reels nasihat & warta pondok',
    badge: 'Official IG',
    color: 'from-pink-600 via-rose-600 to-amber-500'
  },
  {
    id: 'tiktok',
    platform: 'TikTok',
    handle: '@santri_mifa',
    url: 'https://www.tiktok.com/@santri_mifa',
    description: 'Video singkat keseharian santri, lantunan sholawat, dan konten dakwah kreatif',
    badge: 'Official TikTok',
    color: 'from-stone-900 to-stone-800'
  },
  {
    id: 'facebook',
    platform: 'Facebook',
    handle: 'Ponpes Miftahul Falah',
    url: 'https://facebook.com/PonpesMiftahulFalah',
    description: 'Halaman resmi pengumuman, siaran kegiatan, dan silaturahmi alumni & wali santri',
    badge: 'Facebook Page',
    color: 'from-blue-600 to-blue-700'
  },
  {
    id: 'youtube',
    platform: 'YouTube',
    handle: 'Santri Mifa Official',
    url: 'https://youtube.com/@SantriMifaOfficial',
    description: 'Rekaman pengajian kitab, khitobah dakwah santri, sholawatan, & dokumentasi pondok',
    badge: 'YouTube Channel',
    color: 'from-red-600 to-red-700'
  },
  {
    id: 'linktree',
    platform: 'Linktree',
    handle: 'linktr.ee/PonpesMiftahulFalah',
    url: 'https://linktr.ee/PonpesMiftahulFalah',
    description: 'Pusat tautan cepat pendaftaran PSB, media sosial, lokasi, dan narahubung resmi',
    badge: 'Semua Tautan',
    color: 'from-emerald-600 to-teal-700'
  }
];

export const SELAYANG_PANDANG = {
  title: 'Selayang Pandang Pondok Pesantren Miftahul Falah',
  badge: 'Sejarah & Perjalanan Sejak Sekitar Tahun 1922',
  summaryParagraphs: [
    'Pondok Pesantren Miftahul Falah merupakan pesantren salafiyyah yang berdiri sekitar tahun 1922 di kampung Cikalang, Cileunyi, oleh Mama KH. Abdul Jalil. Awalnya hanya berupa mushola kecil berukuran 5x8 meter sebagai tempat pengajian santri kalong, pesantren ini berkembang seiring meningkatnya minat masyarakat dalam menimba ilmu agama.',
    'Meski sempat terhenti akibat gejolak penjajahan tahun 1942-1945, setelah kembali dari pengungsian, beliau mulai membangun kobong dan menerima santri mukim sekitar tahun 1950. Kepemimpinan diteruskan oleh putranya, Mama KH. Endang Sajidin, yang juga mendirikan Pondok Pesantren Al-Mardiatul Islamiyah di Cibagbagan.',
    'Pada tahun 1970-an, jumlah santri terus meningkat, termasuk santri mahasiswa dari berbagai perguruan tinggi di Bandung. Tahun 1990-an, fasilitas terus diperluas dengan pembangunan kobong dan masjid. Sepeninggal Mama KH. Endang Sajidin pada tahun 2004, kepemimpinan dilanjutkan oleh KH. Jajang Tsamrotul Fuad, S.Pd.I. Saat ini, Pondok Pesantren Miftahul Falah memiliki berbagai fasilitas penunjang pendidikan seperti masjid, madrasah, perpustakaan, serta asrama putra dan putri yang menampung santri dari berbagai daerah di Indonesia.'
  ],
  milestones: [
    {
      year: '1922',
      period: 'Masa Perintisan Awal',
      title: 'Perintisan Mushola 5x8 M & Santri Kalong',
      figure: 'Mama KH. Abdul Jalil',
      description: 'Berdiri di Kampung Cikalang, Cileunyi. Diawali dari sebuah mushola kecil sederhana ukuran 5x8 meter yang melayani pengajian dasar agama bagi warga dan santri kalong di sekitar kawasan Cileunyi.'
    },
    {
      year: '1942 – 1945',
      period: 'Masa Perjuangan Revolusi',
      title: 'Gejolak Penjajahan & Masa Pengungsian',
      figure: 'Mama KH. Abdul Jalil & Santri',
      description: 'Aktivitas pengajian sempat terhenti sejenak akibat gejolak penjajahan dan perang mempertahankan kemerdekaan, di mana para santri dan kyai ikut mengungsi demi keselamatan.'
    },
    {
      year: '1950',
      period: 'Pembangunan Kobong Pertama',
      title: 'Penerimaan Santri Mukim Pertama',
      figure: 'Mama KH. Abdul Jalil',
      description: 'Setelah situasi kondusif kembali dari pengungsian, beliau mulai membangun kobong pondok dan secara resmi membuka pintu penerimaan santri mukim yang menetap siang-malam untuk mengaji.'
    },
    {
      year: '1970-an',
      period: 'Era Santri Mahasiswa Bandung',
      title: 'Kepemimpinan Mama KH. Endang Sajidin',
      figure: 'Mama KH. Endang Sajidin',
      description: 'Kepemimpinan diteruskan oleh putra beliau, Mama KH. Endang Sajidin (yang juga mendirikan Pondok Pesantren Al-Mardiatul Islamiyah di Cibagbagan). Santri kian membludak, termasuk mahasiswa dari berbagai perguruan tinggi di Bandung.'
    },
    {
      year: '1990-an',
      period: 'Ekspansi Fisik Sarana',
      title: 'Pembangunan Kobong & Perluasan Masjid',
      figure: 'Mama KH. Endang Sajidin',
      description: 'Fasilitas pondok terus diperluas dengan pembangunan sarana kobong asrama baru dan perluasan masjid pesantren guna mengimbangi antusiasme santri yang datang dari berbagai pelosok.'
    },
    {
      year: '2004 – Kini',
      period: 'Kepemimpinan Generasi Ketiga',
      title: 'Amanah KH. Jajang Tsamrotul Fuad, S.Pd.I.',
      figure: 'KH. Jajang Tsamrotul Fuad, S.Pd.I.',
      description: 'Sepeninggal Mama KH. Endang Sajidin pada tahun 2004, kepemimpinan dilanjutkan oleh KH. Jajang Tsamrotul Fuad, S.Pd.I. Kini pesantren dilengkapi 2 gedung asrama putra (2 lantai), 1 asrama putri (3 lantai), madrasah, masjid, ruang kesekretariatan, dan perpustakaan di lantai 3 masjid.'
    }
  ]
};

export const LEADERSHIP_LINEAGE = [
  {
    era: 'Perintis & Muassis Pertama (1922 - 1950)',
    name: 'Mama KH. Abdul Jalil',
    title: 'Pendiri Pondok Pesantren Miftahul Falah (1922)',
    role: 'Peletak Fondasi Salafiyyah & Perintis Kobong Santri Mukim',
    badge: 'Muassis 1922',
    bio: 'Ulama karismatik perintis dakwah di Kampung Cikalang, Cileunyi yang mendirikan mushola 5x8 meter (1922) dan mengawali kobong santri mukim (1950).'
  },
  {
    era: 'Generasi Kedua (1970-an - 2004)',
    name: 'Mama KH. Endang Sajidin',
    title: 'Pengasuh Generasi Kedua',
    role: 'Pendiri Ponpes Al-Mardiatul Islamiyah di Cibagbagan',
    badge: 'Wafat 2004',
    bio: 'Putra Mama KH. Abdul Jalil yang meluaskan jangkauan dakwah pesantren hingga menjadi rujukan santri mahasiswa se-Bandung serta memperluas kobong & masjid.'
  },
  {
    era: 'Generasi Ketiga (2004 - Sekarang)',
    name: 'KH. Jajang Tsamrotul Fuad, S.Pd.I.',
    title: 'Khadimul Ma\'had / Pimpinan Pondok Saat Ini',
    role: 'Penerus Kepemimpinan & Pengembang Sarana Modern',
    badge: 'Pimpinan Aktif',
    bio: 'Meneruskan estafet kepemimpinan sejak tahun 2004, memimpin pengembangan sarana asrama putra-putri, madrasah, kesekretariatan, dan perpustakaan turats lantai 3 masjid.'
  }
];

export const PANCA_JIWA = [
  {
    title: 'Keikhlasan',
    arabic: 'الإخلاص',
    desc: 'Bekerja, belajar, dan mengabdi semata-mata karena ridha Allah SWT, tanpa pamrih duniawi.',
    icon: 'Heart',
  },
  {
    title: 'Kesederhanaan',
    arabic: 'البساطة',
    desc: 'Hidup wajar, bersahaja, berjiwa besar, dan tabah menghadapi segala rintangan perjuangan.',
    icon: 'Feather',
  },
  {
    title: 'Berdikari (Kemandirian)',
    arabic: 'الاعتماد على النفس',
    desc: 'Mampu mencukupi kebutuhan sendiri, tidak menggantungkan nasib pada uluran tangan orang lain.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Ukhuwah Islamiyah',
    arabic: 'الأخوة الإسلامية',
    desc: 'Menjalin persaudaraan erat antarsesama santri laksana satu tubuh yang saling menguatkan.',
    icon: 'Users',
  },
  {
    title: 'Kebebasan Berpikir',
    arabic: 'حرية التفكير',
    desc: 'Berwawasan luas, terbuka pada kemajuan zaman dengan tetap berpegang teguh pada Al-Qur\'an dan Sunnah.',
    icon: 'Compass',
  },
];

export const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: 'salafiyah-kitab-kuning',
    title: 'Kulliyatul Mu\'allimin Salafiyah (Kitab Kuning)',
    subtitle: 'Kajian Mendalam Literatur Islam Klasik (Turats) Mazhab Syafi\'i & Akidah Ahlussunnah wal Jama\'ah',
    arabicTitle: 'دراسة الكتب التراثية الإسلامية',
    description: 'Menjaga kemurnian tradisi pesantren Nusantara melalui pengkajian kitab kuning sistematis. KBM terbagi 2 jenjang: Kelas Bawah (Mahasantri Semester 1 s.d. 4) dan Kelas Atas (Semester 5 ke atas). Jadwal ngaji dilaksanakan setiap Maghrib, Isya, dan Subuh, dengan agenda mingguan Malam Kamis (Ngaji Gabungan) dan Malam Jumat (Barzanji & Marhaba).',
    category: 'salaf',
    badge: 'Tradisi Salaf',
    kurikulum: [
      'Kelas Bawah (Smt 1-4): Safinah, Adzkar Nawawi, Ta\'lim, Tuhfatul Athfal (Tajwid), Daqoiqul Akhbar',
      'Kelas Atas (Smt 5+): Tafsir Jalalain, Aqidatul Awam, Nashoihul Ibad, Alfiyah, Adzkar Nawawi, Durrotun Nashihin, Daqoiqul Akhbar',
      'Jadwal Harian: Subuh (05.15-06.30), Maghrib (18.15-19.15), Isya (19.45-21.00)',
      'Malam Kamis (Ba\'da Isya): Ngaji Gabungan seluruh mahasantri bersama Khadimul Ma\'had',
      'Malam Jumat (Ba\'da Isya): Pembacaan Maulid Al-Barzanji, Tahlil & Marhabaan Akbar'
    ],
    outputLulusan: [
      'Mahir membaca dan memahami kitab gundul (tanpa harokat) dengan tartil dan makna Pegon',
      'Mampu menjadi juru dakwah, muballigh, dan rujukan hukum fiqih di masyarakat',
      'Memiliki sanad keilmuan kitab dari para masyayikh terpercaya'
    ],
    highlights: ['2 Kelas KBM: Bawah (Smt 1-4) & Atas (Smt 5+)', 'Waktu Ngaji: Maghrib, Isya, Subuh', 'Malam Kamis: Ngaji Gabungan', 'Malam Jumat: Barzanji & Marhaba'],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
  }
];

export const KBM_CLASSES: KbmClassLevel[] = [
  {
    id: 'kelas-bawah',
    name: 'Kelas Bawah (Marhalah Ula)',
    semesterRange: 'Mahasantri Semester 1 s.d. 4',
    arabicName: 'المرحلة الأولى (المستوى التأسيسي)',
    badge: 'Semester 1 - 4',
    targetSantri: 'Mahasantri Baru & Tingkat Awal (Semester 1 sampai 4)',
    description: 'Fokus pembinaan fiqih ibadah dasar mazhab Syafi\'i (Safinah), adab penuntut ilmu (Ta\'lim), kaidah tajwid Al-Qur\'an (Tuhfatul Athfal), amalan dzikir harian (Adzkar Nawawi), serta penanaman iman dan renungan akhirat (Daqoiqul Akhbar).',
    fokusKajian: [
      'Fiqih Ibadah Praktis: Thaharah, Sholat, Puasa, Zakat (Safinah)',
      'Kaidah Hukum Bacaan Al-Qur\'an & Makharijul Huruf (Tuhfatul Athfal)',
      'Penanaman Adab, Akhlak, dan Budi Pekerti Penuntut Ilmu (Ta\'lim)',
      'Hafalan Wirid, Dzikir Sunnah & Doa-doa Harian (Adzkar Nawawi)',
      'Penguatan Aqidah & Renungan Kehidupan Akhirat (Daqoiqul Akhbar)'
    ],
    kitabRujukan: [
      { bidang: 'Fiqih', kitab: 'Safinah' },
      { bidang: 'Dzikir & Doa', kitab: 'Adzkar Nawawi' },
      { bidang: 'Akhlak & Adab', kitab: 'Ta\'lim' },
      { bidang: 'Tajwid', kitab: 'Tuhfatul Athfal (Tajwid)' },
      { bidang: 'Mau\'izhah & Akhirat', kitab: 'Daqoiqul Akhbar' }
    ],
    metode: ['Sorogan per Mahasantri', 'Bandongan Bersama Asatidz']
  },
  {
    id: 'kelas-atas',
    name: 'Kelas Atas (Marhalah \'Ulya)',
    semesterRange: 'Mahasantri Semester 5 ke Atas',
    arabicName: 'المرحلة العليا (المستوى المتقدم)',
    badge: 'Semester 5 Ke Atas',
    targetSantri: 'Mahasantri Madya & Akhir (Semester 5 ke atas)',
    description: 'Fokus pendalaman literatur Islam klasik tingkat lanjut: kajian tafsir ayat Al-Qur\'an (Tafsir Jalalain), penguatan nazham aqidah (Aqidatul Awam), nasehat penyejuk iman (Nashoihul Ibad), penguasaan bait nahwu tingkat tinggi (Alfiyah), amalan dzikir mu\'tabar (Adzkar Nawawi), serta mutiara nasehat dan peringatan akhirat (Durrotun Nashihin & Daqoiqul Akhbar).',
    fokusKajian: [
      'Kajian Tafsir Al-Qur\'an Tematik & Maudhu\'i (Tafsir Jalalain)',
      'Pendalaman Nazham Aqidah Ahlussunnah wal Jama\'ah (Aqidatul Awam)',
      'Penyucian Jiwa, Akhlak & Tasawuf Amali (Nashoihul Ibad)',
      'Kaidah Gramatika Bahasa Arab Lanjutan (Alfiyah)',
      'Dzikir, Doa & Adab Harian Rasulullah SAW (Adzkar Nawawi)',
      'Mutiara Nasehat Keagamaan & Fadhilah Amal (Durrotun Nashihin)',
      'Kajian Eskatologi, Alam Kubur & Hari Pembalasan (Daqoiqul Akhbar)'
    ],
    kitabRujukan: [
      { bidang: 'Tafsir', kitab: 'Tafsir Jalalain' },
      { bidang: 'Aqidah', kitab: 'Aqidatul Awam' },
      { bidang: 'Tasawuf', kitab: 'Nashoihul Ibad' },
      { bidang: 'Gramatika / Nahwu', kitab: 'Alfiyah' },
      { bidang: 'Dzikir & Doa', kitab: 'Adzkar Nawawi' },
      { bidang: 'Mau\'izhah & Akhlak', kitab: 'Durrotun Nashihin' },
      { bidang: 'Mau\'izhah & Akhirat', kitab: 'Daqoiqul Akhbar' }
    ],
    metode: ['Bandongan Bersama Pengasuh', 'Musyawarah Bahtsul Masa\'il', 'Qira\'atul Kutub Mandiri']
  }
];

export const KBM_SESSIONS: KbmNgajiSession[] = [
  {
    waktu: 'Subuh',
    jam: '05.15 - 06.30 WIB',
    arabicName: 'مَجْلِسُ الصَّبَاحِ (بَعْدَ صَلَاةِ الْفَجْرِ)',
    iconName: 'Sun',
    kelasBawahFocus: 'Kajian Fiqih Safinah & Wirid Adzkar Nawawi',
    kelasAtasFocus: 'Kajian Tafsir Jalalain dan Aqidatul Awam',
    keterangan: 'Selesai pukul 06.30 WIB, sehingga mahasantri leluasa mandi, sarapan, dan berangkat kuliah pagi di kampus (UIN, Unpad, ITB, UPI, dll).'
  },
  {
    waktu: 'Maghrib',
    jam: '18.15 - 19.15 WIB',
    arabicName: 'مَجْلِسُ الْمَغْرِبِ (بَيْنَ الْمَغْرِبِ وَالْعِشَاءِ)',
    iconName: 'BookOpen',
    kelasBawahFocus: 'Sorogan Kitab Safinah & Tajwid Tuhfatul Athfal Makna Pegon',
    kelasAtasFocus: 'Kajian Bandongan Nashoihul Ibad & Alfiyah',
    keterangan: 'Dilaksanakan intensif ba\'da sholat Maghrib berjamaah hingga masuk waktu Isya di ruang kelas dan aula pesantren.'
  },
  {
    waktu: 'Isya',
    jam: '19.45 - 21.00 WIB',
    arabicName: 'مَجْلِسُ الْعِشَاءِ (بَعْدَ صَلَاةِ الْعِشَاءِ)',
    iconName: 'Moon',
    kelasBawahFocus: 'Kajian Ta\'lim (Adab Santri) & Kitab Daqoiqul Akhbar',
    kelasAtasFocus: 'Kajian Durrotun Nashihin, Daqoiqul Akhbar & Adzkar Nawawi',
    keterangan: 'Sesi pendalaman dan diskusi interaktif santri. *Malam Kamis beralih menjadi Ngaji Gabungan, dan Malam Jumat pembacaan Barzanji & Marhaba.'
  }
];

export const KBM_SPECIAL_AGENDA: KbmSpecialAgenda[] = [
  {
    id: 'ngaji-gabungan-malam-kamis',
    hari: 'Malam Kamis (Rabu Malam)',
    waktu: 'Setelah Isya (19.45 - 21.30 WIB)',
    nama: 'Ngaji Gabungan Seluruh Santri',
    arabicName: 'الْمَجْلِسُ الْعَامُّ الْمُشْتَرَكُ',
    peserta: 'Seluruh Mahasantri (Gabungan Kelas Bawah Smt 1-4 & Kelas Atas Smt 5+)',
    badge: 'Agenda Wajib Mingguan',
    accentColor: 'emerald',
    deskripsi: 'Pertemuan pengajian akbar mingguan di mana Kelas Bawah dan Kelas Atas berkumpul bersama di Aula Utama / Masjid Jami\' dipimpin langsung oleh Khadimul Ma\'had KH. Jajang Tsamrotul Fuad, S.Pd.I.',
    detailKegiatan: [
      'Kajian Kitab Tasawuf & Akhlak Salafus Shalih secara mendalam',
      'Tausiyah, wejangan adab, dan arahan pengasuh ma\'had',
      'Sesi tanya jawab terbuka santri seputar problematika hukum Islam & studi',
      'Doa rabithah dan munajat keberkahan ilmu penuntut ilmu'
    ]
  },
  {
    id: 'barzanji-marhaba-malam-jumat',
    hari: 'Malam Jumat (Kamis Malam)',
    waktu: 'Setelah Isya (19.45 - 21.30 WIB)',
    nama: 'Barzanji & Marhaba (Shalawat & Tahlil Akbar)',
    arabicName: 'مَجْلِسُ الْمَوْلِدِ الْبَرْزَنْجِي وَالْمَرْحَبَا',
    peserta: 'Seluruh Santri & Mahasantri Putra-Putri, Asatidz, dan Pengurus',
    badge: 'Syiar Tradisi Ahlussunnah',
    accentColor: 'amber',
    deskripsi: 'Tradisi agung pembacaan shalawat nabi melalui Kitab Maulid Al-Barzanji, qasidah burdah, shalawat simtudduror, pembacaan tahlil arwah, serta marhabanan bersama iringan tim hadroh santri Miftahul Falah.',
    detailKegiatan: [
      'Pembacaan Tawassul, Dzikir Tahlil & Yasinan Akbar',
      'Lantunan Qasidah & Rawi Kitab Maulid Al-Barzanji secara bergiliran',
      'Mahallul Qiyam & Marhabanan serentak diiringi rebana hadroh santri',
      'Mendoakan para masyayikh, leluhur, orang tua santri, dan muhsinin'
    ]
  }
];

export const DAILY_SCHEDULE: ScheduleItem[] = [
  {
    time: '04.15 - 05.15',
    activity: 'Qiyamul Lail, Sholat Subuh Berjamaah & Wirid',
    arabicName: 'صلاة الصبح والورد المأثور',
    category: 'ibadah',
    description: 'Bangun pagi, sholat tahajjud, sholat Subuh berjamaah di masjid jami\', pembacaan Ratib Al-Haddad dan wirid ma\'tsurat.'
  },
  {
    time: '05.15 - 06.30',
    activity: 'KBM Ngaji Kitab Subuh (Kelas Bawah & Kelas Atas)',
    arabicName: 'مجلس علم الصباح لجميع الفصول',
    category: 'belajar',
    description: 'Kelas Bawah (Smt 1-4): Fiqih Safinah & Wirid Adzkar Nawawi | Kelas Atas (Smt 5+): Kajian Tafsir Jalalain dan Aqidatul Awam.'
  },
  {
    time: '06.30 - 16.30',
    activity: 'Perkuliahan Kampus & Aktivitas Akademik Mahasantri',
    arabicName: 'الدراسة الجامعية والأنشطة',
    category: 'kemandirian',
    description: 'Mahasantri leluasa 100% mengikuti perkuliahan di kampus masing-masing (UIN SGD, Unpad, ITB, UPI, IPDN, Ikopin, dll) dan riset tugas.'
  },
  {
    time: '16.30 - 17.45',
    activity: 'Sholat Ashar Berjamaah, Olahraga & Mandi Sore',
    arabicName: 'صلاة العصر والرياضة البدنية',
    category: 'kemandirian',
    description: 'Kembali dari kampus, sholat Ashar berjamaah, istirahat sejenak, olahraga santai di lapangan pesantren, dan persiapan sholat Maghrib.'
  },
  {
    time: '18.15 - 19.15',
    activity: 'KBM Ngaji Kitab Maghrib (Sorogan & Bandongan)',
    arabicName: 'مجلس علم المغرب والفقه',
    category: 'belajar',
    description: 'Kelas Bawah (Smt 1-4): Sorogan Safinah & Tuhfatul Athfal | Kelas Atas (Smt 5+): Bandongan Nashoihul Ibad & Aqidatul Awam.'
  },
  {
    time: '19.45 - 21.00',
    activity: 'KBM Ngaji Isya / Agenda Mingguan Khusus',
    arabicName: 'مجلس العشاء والمذاكرة الليلية',
    category: 'belajar',
    description: 'KBM Isya Kelas Bawah & Atas. *Malam Kamis: NGAJI GABUNGAN seluruh santri bersama Pengasuh. *Malam Jumat: BARZANJI & MARHABA.'
  },
  {
    time: '21.00 - 22.00',
    activity: 'Mudzakarah Mandiri, Belajar Tugas Kuliah & Istirahat',
    arabicName: 'المذاكرة والنوم والاستراحة',
    category: 'istirahat',
    description: 'Pengerjaan tugas kuliah kampus dengan WiFi asrama, muthala\'ah kitab mandiri, absensi malam, dan istirahat optimal.'
  }
];


export const NEWS_DATA: NewsItem[] = [
  {
    id: 'wisuda-tahfidz-akbar-2026',
    title: 'Wisuda Akbar Tahfidz 30 Juz & Khotmil Kutub Ponpes Miftahul Falah Tahun 2026',
    category: 'Kabar Pesantren',
    date: '15 Februari 2026',
    author: 'Humas Ponpes Miftahul Falah',
    readTime: '4 menit baca',
    summary: 'Sebanyak 65 santri dan santriwati berhasil mengkhatamkan hafalan 30 Juz Al-Qur\'an bil-ghaib dan berhak menerima sanad riwayat Imam Ashim.',
    content: 'Alhamdulillah, suasana haru dan bahagia menyelimuti aula utama Pondok Pesantren Miftahul Falah dalam perhelatan Wisuda Akbar Khotmil Qur\'an 30 Juz dan Khotmil Kutub. Acara dihadiri oleh para alim ulama, perwakilan Kementerian Agama, serta ratusan wali santri dari berbagai penjuru daerah. Dalam amanatnya, Khadimul Ma\'had KH. Jajang Tsamrotul Fuad, S.Pd.I. berpesan bahwa menjaga hafalan Al-Qur\'an seumur hidup serta mengamalkan akhlak Qur\'ani adalah jihad terbesar generasi muda di era serba digital saat ini.',
    arabicQuote: {
      text: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
      translation: '"Sebaik-baik kalian adalah orang yang belajar Al-Qur\'an dan mengajarkannya." (HR. Bukhari)'
    },
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'juara-umum-mqk-2026',
    title: 'Santri Miftahul Falah Raih Juara Umum Musabaqah Qira\'atil Kutub (MQK) Tingkat Provinsi',
    category: 'Prestasi',
    date: '28 Januari 2026',
    author: 'Biro Kesiswaan & Asatidz',
    readTime: '3 menit baca',
    summary: 'Kafilah santri Miftahul Falah memborong 7 trofi emas pada cabang Fathul Qorib, Imrithi, dan Tafsir Jalalain di ajang MQK se-Jawa Barat.',
    content: 'Prestasi membanggakan kembali ditorehkan oleh santriwan dan santriwati Pondok Pesantren Miftahul Falah pada perhelatan Musabaqah Qira\'atil Kutub (MQK). Kontingen yang dipimpin oleh Ustadz Rahmat Hidayat berhasil menyabet predikat Juara Umum. Keberhasilan ini membuktikan bahwa metode sorogan dan bandongan klasik yang diterapkan secara istiqomah di Miftahul Falah mampu melahirkan generasi ahli fiqih dan nahwu yang tajam analisa tekstual maupun kontekstualnya.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'adab-menuntut-ilmu-talim',
    title: 'Kajian Rutin: Mengupas Rahasia Keberkahan Ilmu dalam Kitab Ta\'limul Muta\'allim',
    category: 'Kajian & Tausiyah',
    date: '10 Februari 2026',
    author: 'Dewan Asatidz Dirasah Islamiyah',
    readTime: '5 menit baca',
    summary: 'Pentingnya niat yang tulus, memuliakan guru, dan menjauhi perbuatan maksiat sebagai kunci utama cahaya ilmu menetap dalam dada para penuntut ilmu.',
    content: 'Syaikh Az-Zarnuji dalam mukadimah kitab monumental Ta\'limul Muta\'allim menekankan bahwa banyak penuntut ilmu di zaman akhir bersungguh-sungguh belajar, namun gagal meraih buah manis dan kemanfaatan ilmu. Penyebab terbesarnya adalah keliru dalam menata niat dan mengabaikan adab terhadap guru, kitab, serta majelis ilmu. Bagi santri Miftahul Falah, adab selalu diletakkan sebelum ilmu (Al-Adabu Fauqal \'Ilmi).',
    arabicQuote: {
      text: 'تَعَلَّمُوا الْعِلْمَ وَتَعَلَّمُوا لِلْعِلْمِ السَّكِينَةَ وَالْوَقَارَ وَتَوَاضَعُوا لِمَنْ تَتَعَلَّمُونَ مِنْهُ',
      translation: '"Pelajarilah ilmu, dan pelajarilah ketenangan serta kewibawaan untuk ilmu tersebut, dan bersikap rendah hatilah kepada orang yang kalian belajar darinya."'
    },
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pembukaan-psb-2026-2027',
    title: 'Informasi Resmi: Penerimaan Santri Baru (PSB) Tahun Ajaran 2026/2027 Dibuka',
    category: 'Pengumuman',
    date: '1 Februari 2026',
    author: 'Panitia PSB Ponpes Miftahul Falah',
    readTime: '2 menit baca',
    summary: 'Pendaftaran gelombang kedua dibuka mulai 1 Februari hingga 30 April 2026 melalui portal resmi miftahulfalah.my.id dengan kuota terbatas.',
    content: 'Pondok Pesantren Miftahul Falah secara resmi membuka pendaftaran santri baru untuk jenjang MTs Terpadu, MA Keagamaan/MIPA, Takhassus Tahfidz 30 Juz, dan Salafiyah Murni. Pendaftaran dapat dilakukan secara online melalui website resmi kami di domain miftahulfalah.my.id. Calon santri yang berprestasi hafalan Al-Qur\'an 10 juz ke atas atau juara olimpiade sains berhak mendapatkan fasilitas beasiswa bebas biaya pendidikan.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
  }
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: 'asrama-putra',
    title: '2 Gedung Asrama Putra (Masing-masing 2 Lantai)',
    category: 'asrama',
    description: 'Dua kompleks gedung asrama santri putra, masing-masing berlantai 2 yang kokoh, rapi, dan sejuk. Dilengkapi kamar kobong mukim santri, sanitasi bersih, dan pengawasan musyrif 24 jam.',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'asrama-putri',
    title: '1 Gedung Asrama Putri (3 Lantai)',
    category: 'asrama',
    description: 'Gedung asrama khusus santriwati berlantai 3 dengan lingkungan aman, tertutup, dan nyaman. Memiliki ruang istirahat representatif, area muraja\'ah, serta dibimbing musyrikah berdedikasi.',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'madrasah',
    title: 'Madrasah',
    category: 'akademik',
    description: 'Sarana belajar mengajar santri untuk pembelajaran klasikal madrasah diniyah takmiliyah, sorogan, bandongan, dan pengkajian disiplin keilmuan Islam berjenjang.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'masjid',
    title: 'Masjid Miftahul Falah',
    category: 'ibadah',
    description: 'Pusat spiritual dan kegiatan ibadah utama santri. Digunakan untuk shalat lima waktu berjamaah, mujahadah, pengajian akbar mingguan, halaqah tahfidz Al-Qur\'an, dan majelis sholawat.',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'kesekretariatan',
    title: 'Ruang Kesekretariatan',
    category: 'administrasi',
    description: 'Pusat pelayanan administrasi dan operasional pesantren. Melayani penerimaan santri baru (PSB), tata usaha, surat perizinan santri, koordinasi wali santri, dan arsip data pesantren.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'perpustakaan',
    title: 'Perpustakaan (Masjid Lantai 3)',
    category: 'akademik',
    description: 'Berada di lantai 3 bangunan masjid, menghadirkan suasana tenang dan khidmat untuk muthola\'ah. Mengoleksi ribuan kitab kuning turats klasik, tafsir, hadits, ensiklopedia Islam, dan buku keilmuan.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
  }
];

export const PSB_FEES: PsbFeeItem[] = [
  {
    item: 'Biaya Bulanan (Syahriah / Infaq Bulanan)',
    nominal: 'Rp 120.000 / bulan',
    note: 'Infaq syahriah bulanan sangat terjangkau. Sudah termasuk bimbingan ngaji kitab kuning, asrama mukim, listrik & air bersih.',
    badge: 'Infaq Bulanan',
    highlight: true
  },
  {
    item: 'Biaya Tahunan (Infaq Operasional)',
    nominal: 'Rp 150.000 / tahun',
    note: 'Infaq tahunan ringan dibayar 1x per tahun ajaran untuk pemeliharaan asrama, PHBI, dan kegiatan santri.',
    badge: '1x Per Tahun',
    highlight: true
  },
  {
    item: "Ta'aruf & Jas Almamater",
    nominal: 'Rp 300.000',
    note: '1 kali awal masuk. Meliputi pekan ta\'aruf/orientasi santri baru dan jas almamater resmi Ponpes Miftahul Falah.',
    badge: '1 Kali Awal Masuk'
  },
  {
    item: 'Kartu Tanda Santri',
    nominal: 'Rp 20.000',
    note: '1 kali awal masuk. Kartu identitas resmi santri untuk administrasi dan perpustakaan pondok.',
    badge: '1 Kali Awal Masuk'
  }
];

export const PSB_TOTAL_ENTRY_FEE = {
  total: 'Rp 590.000',
  description: 'Sudah termasuk biaya bulanan dan tahunan pertama saat awal masuk',
  breakdown: [
    { name: 'Ta\'aruf & Jas Almamater', amount: 'Rp 300.000' },
    { name: 'Biaya Tahunan (Operasional)', amount: 'Rp 150.000' },
    { name: 'Biaya Bulanan (Syahriah)', amount: 'Rp 120.000' },
    { name: 'Kartu Tanda Santri', amount: 'Rp 20.000' },
  ],
  noBuildingFee: 'Tidak ada biaya tambahan/bangunan'
};

export const PERSUASIVE_FEE_DATA = {
  monthlyFee: 'Rp 120.000',
  monthlyFeePeriod: '/ bulan',
  monthlyFeeDailyCalc: '± Rp 4.000 / hari',
  annualFee: 'Rp 150.000',
  annualFeePeriod: '/ tahun',
  superlativeTag: 'Infaq Pendidikan Terjangkau & Penuh Berkah',
  headline: 'Pendidikan Pesantren Berkualitas dengan Biaya Paling Terjangkau & Penuh Keberkahan',
  subheadline: 'Mondok di MIFA bukan tentang kemewahan materi, melainkan keagungan ilmu dan ketulusan khidmah. Kami memastikan tidak ada anak sholeh yang terhenti mengaji karena kendala biaya.',
  persuasiveReasons: [
    {
      id: 'termurah',
      title: 'Biaya Bulanan Sangat Ringan & Terjangkau',
      nominal: 'Rp 120.000 / bulan',
      subtitle: 'Hanya Rp 4.000-an per hari',
      description: 'Lebih murah dari secangkir kopi atau biaya parkir harian, namun hasilnya adalah benteng aqidah, hafalan Al-Qur\'an, dan akhlak mulia yang menjaga masa depan anak Anda di dunia dan akhirat.',
      icon: 'BadgePercent'
    },
    {
      id: 'tahunan-ringan',
      title: 'Biaya Tahunan Super Ringan & Bebas Biaya Tersembunyi',
      nominal: 'Rp 150.000 / tahun',
      subtitle: 'Hanya 1x dalam 1 tahun ajaran',
      description: 'Transparansi penuh 100%. Tidak ada pungutan siluman di tengah semester, tidak ada denda yang memberatkan. Seluruh alokasi dana dilaporkan secara amanah demi kemaslahatan santri.',
      icon: 'ShieldCheck'
    },
    {
      id: 'khidmah',
      title: 'Misi Khidmah Lil Ummah, Bukan Komersialisasi',
      nominal: 'Niat Tabarruk & Ikhlas',
      subtitle: 'Amanah Muassis & Kyai Sepuh',
      description: 'Sejak didirikan sekitar tahun 1922 oleh Mama KH. Abdul Jalil di Kampung Cikalang Cileunyi, Pesantren Miftahul Falah memegang teguh prinsip bahwa ilmu agama adalah hak setiap muslim. Biaya murah bukan berarti fasilitas seadanya, melainkan wujud gotong royong wakaf dan ketulusan para asatidz.',
      icon: 'HeartHandshake'
    },
    {
      id: 'hemat-mahasiswa',
      title: 'Solusi Paling Hemat & Aman Bagi Mahasiswa',
      nominal: 'Hemat Jutaan Rupiah / Tahun',
      subtitle: 'Dekat 8 Kampus Ternama',
      description: 'Bandingkan dengan biaya sewa kos di sekitar Cileunyi/Jatinangor (Rp 600rb - Rp 1,5jt/bulan). Di MIFA, mahasiswa hanya membayar Rp 120.000/bulan sudah dapat asrama aman, lingkungan ibadah, dan bimbingan rohani.',
      icon: 'GraduationCap'
    }
  ],
  monthlyIncludes: [
    'Bimbingan kajian Kitab Kuning Turats (Nahwu, Shorof, Fiqih, Hadits, Tasawuf)',
    'Fasilitas tempat tinggal di Asrama Mukim (putra dan putri terpisah ketat)',
    'Penggunaan sarana pesantren, listrik, air bersih, dan fasilitas kebersihan',
    'Pembinaan disiplin dan akhlakul karimah 24 jam di bawah asuhan dewan asatidz',
    'Partisipasi dalam pengajian gabungan mingguan, sholawat, dan marhabaan malam Jumat'
  ],
  annualIncludes: [
    'Pemeliharaan dan peremajaan sarana prasarana asrama santri',
    'Penyelenggaraan Peringatan Hari Besar Islam (PHBI) & tabligh akbar pondok',
    'Kelancaran administrasi dan operasional pendidikan santri sepanjang tahun ajaran'
  ],
  guaranteeText: 'Bagi keluarga dhuafa dan santri berprestasi huffadz 30 juz, Pesantren Miftahul Falah membuka Jalur Beasiswa Khusus. Jangan biarkan kendala finansial memadamkan cita-cita anak Anda menjadi pembela agama Allah.'
};

export const WAQF_PROGRAMS = [
  {
    id: 'wakaf-asrama-putri',
    title: 'Wakaf Pembangunan Asrama Santriwati Tahfidz 3 Lantai',
    target: 'Rp 1.500.000.000',
    collected: 'Rp 985.450.000',
    percent: 65,
    donorsCount: 428,
    description: 'Perluasan daya tampung asrama untuk 200 santriwati baru penghafal Al-Qur\'an.',
  },
  {
    id: 'wakaf-pembebasan-lahan',
    title: 'Wakaf Pembebasan Tanah Pengembangan Kampus 2 (2.500 m²)',
    target: 'Rp 750.000.000',
    collected: 'Rp 580.000.000',
    percent: 77,
    donorsCount: 310,
    description: 'Pembebasan lahan produktif di samping pondok untuk sarana pertanian santri dan lab robotika.',
  }
];

export const BANK_ACCOUNTS = [
  {
    bankName: 'Bank Syariah Indonesia (BSI)',
    accountNumber: '7145 0987 63',
    accountHolder: 'Yayasan Miftahul Falah - Operasional',
    badge: 'Utama (PSB & SPP)',
    code: '451'
  },
  {
    bankName: 'Bank Syariah Indonesia (BSI) - Khusus Wakaf',
    accountNumber: '7199 8833 21',
    accountHolder: 'Wakaf & Pembangunan Ponpes Miftahul Falah',
    badge: 'Khusus Wakaf Gedung',
    code: '451'
  },
  {
    bankName: 'Bank Mandiri',
    accountNumber: '131-00-9876543-2',
    accountHolder: 'Yayasan Pondok Pesantren Miftahul Falah',
    badge: 'Pendidikan & Donasi',
    code: '008'
  },
  {
    bankName: 'Bank BRI',
    accountNumber: '0125-01-003456-50-8',
    accountHolder: 'Ponpes Miftahul Falah Cileunyi',
    badge: 'Rekening Umum',
    code: '002'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Bagaimana perizinan kepulangan santri ke rumah?',
    answer: 'Untuk menjaga ketenangan proses belajar dan pembiasaan adab harian, santri dijadwalkan pulang ke rumah pada liburan semester ganjil (14 hari), liburan akhir tahun (21 hari), dan libur Idul Fitri (14 hari). Untuk kepulangan darurat karena keluarga inti sakit keras atau kemalangan, wali santri dapat mengajukan izin resmi melalui Biro Pengasuhan Santri.',
    category: 'Kedisiplinan'
  },
  {
    question: 'Berapa rincian biaya bulanan dan tahunan mondok di Pesantren Miftahul Falah?',
    answer: 'Alhamdulillah, Pondok Pesantren Miftahul Falah menetapkan Biaya Bulanan (Syahriah) sebesar Rp 120.000 / bulan (salah satu yang paling terjangkau di Kabupaten Bandung) dan Biaya Tahunan (Infaq Operasional) sebesar Rp 150.000 / tahun. Biaya bulanan sudah mencakup bimbingan kajian kitab kuning turats, asrama mukim putra/putri, listrik, air bersih, serta pembinaan akhlak 24 jam. Kami memegang teguh amanah bahwa biaya tidak boleh menjadi penghalang bagi siapapun yang ingin menuntut ilmu agama.',
    category: 'Pembiayaan'
  },
  {
    question: 'Apakah biaya pendidikan terjangkau bagi keluarga yang membutuhkan?',
    answer: 'Ya, Pondok Pesantren Miftahul Falah berkomitmen agar tidak ada generasi muslim yang terhalang menuntut ilmu karena kendala biaya. Biaya pendidikan sangat terjangkau dengan syahriah bulanan Rp 120.000/bulan dan tahunan Rp 150.000/tahun tanpa pungutan uang gedung/bangunan.',
    category: 'Pembiayaan'
  },
  {
    question: 'Apakah santri (putra) diperbolehkan membawa sepeda motor?',
    answer: 'Boleh. Santri putra diperbolehkan membawa sepeda motor ke asrama guna menunjang mobilitas perkuliahan ke kampus masing-masing. Santri wajib mematuhi aturan parkir di area yang telah disediakan serta menjaga ketertiban dan keamanan bersama.',
    category: 'Fasilitas'
  },
  {
    question: 'Apakah santriah (putri) boleh membawa sepeda motor?',
    answer: 'Santriah (putri) disarankan untuk tidak membawa sepeda motor karena keterbatasan lahan dan tidak tersedianya area parkir motor khusus santriah di kompleks asrama putri. Untuk mobilitas kuliah, santriah dapat menggunakan angkutan umum atau transportasi daring (ojol) yang sangat mudah diakses.',
    category: 'Fasilitas'
  },
  {
    question: 'Bagaimana pengaturan makan dan konsumsi harian santri?',
    answer: 'Sistem konsumsi santri bersifat fleksibel dan mandiri. Santri dapat membuat jadwal masak bersama (ngaliwet) bersama teman sekamar/kobong secara bergiliran agar lebih hemat dan kompak, atau membeli makanan secara mandiri di warung-warung makan sekitar pesantren yang ramah kantong mahasiswa.',
    category: 'Keseharian'
  },
  {
    question: 'Bagaimana toleransi dispensasi absen ngaji jika bentrok jadwal kuliah?',
    answer: 'Santri diberi toleransi dan dispensasi izin tidak mengikuti ngaji Subuh apabila memiliki jadwal perkuliahan pagi (jam 06.00 atau jam 07.00 WIB) agar dapat bersiap dan tidak terlambat ke kampus. Santri cukup mengonfirmasikan izin kepada pengurus atau asatidz pengampu.',
    category: 'Akademik'
  }
];

export const NEARBY_CAMPUSES: NearbyCampus[] = [
  {
    id: 'uin-sgd-1',
    name: 'UIN Sunan Gunung Djati Kampus 1',
    shortName: 'UIN SGD Kampus 1',
    nickname: 'UIN SGD 1',
    distanceKm: 3.2,
    distanceDisplay: '3.2 km',
    travelTimeMotor: '7 - 9 Menit',
    travelTimePublic: '12 - 15 Menit',
    travelTimeCar: '10 - 12 Menit',
    routePrimary: 'Jl. A.H. Nasution No. 105, Cipadung Wetan, Cibiru',
    routeDetails: 'Akses langsung dari Cileunyi Kulon melewati Bundaran Cibiru menuju Jl. A.H. Nasution. Angkutan umum dan ojol beroperasi 24 jam.',
    category: 'negeri',
    badge: 'Kampus Utama Cibiru',
    plusCode: '3P99+G4 Cipadung Wetan, Kota Bandung, Jawa Barat',
    popularMajors: [
      'Tarbiyah & Keguruan',
      'Ushuluddin & Ilmu Al-Qur\'an',
      'Syari\'ah & Hukum Islam',
      'Dakwah & Komunikasi',
      'Sains & Teknologi'
    ],
    mahasantriProgram: 'Program Takhassus Tafsir Hadits & Tahfidz Mahasiswa (Halaqah Ba\'da Subuh & Maghrib)',
    mapCoordinates: {
      svgX: 25,
      svgY: 28,
      lat: -6.931127952698291,
      lng: 107.71775779141332
    },
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-6.941348920325291,107.7426678439708&destination=-6.931127952698291,107.71775779141332',
    description: 'Kampus utama UIN Sunan Gunung Djati Bandung. Menjadi pilihan favorit mahasantri Miftahul Falah untuk mengkaji rumpun ilmu keislaman, pendidikan, dan sains sembari menjaga tradisi ngaji kitab kuning turats di asrama.',
    accentColor: '#10b981', // Emerald
    bgLight: 'bg-emerald-50',
    borderLight: 'border-emerald-200'
  },
  {
    id: 'uin-sgd-2',
    name: 'UIN Sunan Gunung Djati Kampus 2',
    shortName: 'UIN SGD Kampus 2',
    nickname: 'UIN SGD 2',
    distanceKm: 4.5,
    distanceDisplay: '4.5 km',
    travelTimeMotor: '10 - 12 Menit',
    travelTimePublic: '15 - 20 Menit',
    travelTimeCar: '12 - 15 Menit',
    routePrimary: 'Jl. Cimencrang, Cimenerang, Gedebage (Dekat Masjid Raya Al Jabbar)',
    routeDetails: 'Rute cepat melalui Jl. Cibiru Hilir langsung tembus Cimencrang / Gedebage, dekat Stasiun Cimekar dan Masjid Raya Al Jabbar.',
    category: 'negeri',
    badge: 'Kawasan Al Jabbar',
    plusCode: '3P64+J3 Cimenerang, Kota Bandung, Jawa Barat',
    popularMajors: [
      'Fakultas Pascasarjana',
      'Ekonomi & Bisnis Islam',
      'Ilmu Sosial & Ilmu Politik',
      'Psikologi Islam',
      'Kajian Moderasi Beragama'
    ],
    mahasantriProgram: 'Pendampingan Riset Ilmiah Islam, Musyawarah Bahtsul Masa\'il & Kajian Kitab Tematik',
    mapCoordinates: {
      svgX: 11,
      svgY: 54,
      lat: -6.938126314721949,
      lng: 107.70519481501434
    },
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-6.941348920325291,107.7426678439708&destination=-6.938126314721949,107.70519481501434',
    description: 'Kampus modern UIN SGD yang berdekatan dengan landmark kebanggaan Jawa Barat, Masjid Raya Al Jabbar. Mahasantri menikmati akses teratur menuju perkuliahan tanpa terbebani waktu tempuh yang lama.',
    accentColor: '#059669', // Teal Green
    bgLight: 'bg-emerald-50',
    borderLight: 'border-emerald-200'
  },
  {
    id: 'um-bandung',
    name: 'Universitas Muhammadiyah Bandung (UMB)',
    shortName: 'UMB',
    nickname: 'UM Bandung',
    distanceKm: 4.2,
    distanceDisplay: '4.2 km',
    travelTimeMotor: '9 - 11 Menit',
    travelTimePublic: '14 - 18 Menit',
    travelTimeCar: '12 - 14 Menit',
    routePrimary: 'Jl. Soekarno-Hatta No. 752, Cipadung Kidul, Panyileukan',
    routeDetails: 'Melalui koridor arteri primer Jl. Soekarno-Hatta arah barat dari Bundaran Cibiru, rute lebar dan bebas hambatan dengan angkot dan ojol melimpah.',
    category: 'swasta',
    badge: 'Arteri Soekarno-Hatta',
    plusCode: '3P75+49 Cipadung Kidul, Kota Bandung, Jawa Barat',
    popularMajors: [
      'Farmasi Klinis & Komunitas',
      'Teknologi Pangan Halal',
      'Informatika & Bisnis Digital',
      'Ilmu Komunikasi & Psikologi',
      'Bioteknologi Industri'
    ],
    mahasantriProgram: 'Pendampingan Karakter Islami Mahasantri Sains, Farmasi & Bisnis Modern',
    mapCoordinates: {
      svgX: 14,
      svgY: 42,
      lat: -6.9371254894790395,
      lng: 107.70845762428928
    },
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-6.941348920325291,107.7426678439708&destination=-6.9371254894790395,107.70845762428928',
    description: 'Perguruan tinggi swasta unggulan yang mengintegrasikan sains modern, teknologi industri halal, dan nilai-nilai kewirausahaan. Jarak tempuh cepat dari pesantren via koridor Soekarno-Hatta.',
    accentColor: '#0284c7', // Sky blue
    bgLight: 'bg-sky-50',
    borderLight: 'border-sky-200'
  },
  {
    id: 'bhakti-kencana',
    name: 'Bhakti Kencana University (BKU)',
    shortName: 'Bhakti Kencana Univ',
    nickname: 'BKU Bandung',
    distanceKm: 4.0,
    distanceDisplay: '4.0 km',
    travelTimeMotor: '8 - 10 Menit',
    travelTimePublic: '12 - 16 Menit',
    travelTimeCar: '10 - 13 Menit',
    routePrimary: 'Jl. Soekarno-Hatta No. 754, Cipadung Kidul, Cibiru',
    routeDetails: 'Tepat berdampingan di kawasan pendidikan Soekarno-Hatta Cibiru, akses lurus dari Bundaran Cibiru hanya 8-10 menit perjalanan.',
    category: 'swasta',
    badge: 'Ilmu Kesehatan Unggulan',
    plusCode: '3P75+FX5 Cipadung Kidul, Kota Bandung, Jawa Barat',
    popularMajors: [
      'S1 Farmasi & Profesi Apoteker',
      'S1 Keperawatan & Profesi Ners',
      'D4 & S1 Kebidanan',
      'Kesehatan Masyarakat',
      'Ilmu Komunikasi Medis'
    ],
    mahasantriProgram: 'Bimbingan Fiqih Medis, Thaharah Rumah Sakit & Penguatan Ruhiyah Tenaga Kesehatan',
    mapCoordinates: {
      svgX: 18,
      svgY: 36,
      lat: -6.936350378726707,
      lng: 107.70997577111575
    },
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-6.941348920325291,107.7426678439708&destination=-6.936350378726707,107.70997577111575',
    description: 'Kampus pelopor di bidang ilmu kesehatan, farmasi, keperawatan, dan kebidanan. Mahasantri yang menempuh kuliah di BKU mendapatkan pendampingan fiqih kedokteran dan etika akhlak mulia dalam melayani pasien.',
    accentColor: '#ec4899', // Pink / Rose
    bgLight: 'bg-pink-50',
    borderLight: 'border-pink-200'
  },
  {
    id: 'itb-jatinangor',
    name: 'Institut Teknologi Bandung (ITB Jatinangor)',
    shortName: 'ITB Jatinangor',
    nickname: 'ITB',
    distanceKm: 3.5,
    distanceDisplay: '3.5 km',
    travelTimeMotor: '8 - 10 Menit',
    travelTimePublic: '15 - 18 Menit',
    travelTimeCar: '10 - 12 Menit',
    routePrimary: 'Jl. Letjen Purn. Dr. (HC) Mashudi No. 1, Sayang, Jatinangor',
    routeDetails: 'Akses lurus melalui Jl. Raya Cileunyi - Jatinangor, jalur lancar dengan angkot Sumedang-Cileunyi dan bus DAMRI kampus.',
    category: 'negeri',
    badge: 'Sains & Rekayasa Hayati',
    plusCode: '3Q89+G9W Sayang, Kabupaten Sumedang, Jawa Barat',
    popularMajors: [
      'Rekayasa Hayati & Kehutanan',
      'Teknik Sipil & Rekayasa Infrastruktur',
      'Sains & Teknologi Farmasi',
      'Teknik Pertanian & Biosistem',
      'Sekolah Bisnis & Manajemen (SBM)'
    ],
    mahasantriProgram: 'Kamar Studi Santri ITB (High-Speed WiFi, Lingkungan Tenang, Halaqah Ba\'da Subuh Fleksibel)',
    mapCoordinates: {
      svgX: 76,
      svgY: 34,
      lat: -6.933627572518346,
      lng: 107.76844379972145
    },
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-6.941348920325291,107.7426678439708&destination=-6.933627572518346,107.76844379972145',
    description: 'Kampus teknik nomor wahid di Indonesia. Kampus ITB Jatinangor dapat diakses hanya dalam 8-10 menit dari pesantren, memungkinkan mahasantri tetap optimal menjalani praktikum sains-teknik sembari menjaga hafalan Qur\'an.',
    accentColor: '#d97706', // Amber
    bgLight: 'bg-amber-50',
    borderLight: 'border-amber-200'
  },
  {
    id: 'ikopin-university',
    name: 'IKOPIN University (Kawasan Jatinangor)',
    shortName: 'IKOPIN University',
    nickname: 'IKOPIN',
    distanceKm: 3.4,
    distanceDisplay: '3.4 km',
    travelTimeMotor: '7 - 9 Menit',
    travelTimePublic: '14 - 17 Menit',
    travelTimeCar: '9 - 11 Menit',
    routePrimary: 'Kawasan Pendidikan Tinggi Jatinangor, Cibeusi, Jatinangor',
    routeDetails: 'Terletak di gerbang kawasan pendidikan tinggi Jatinangor berdekatan dengan ITB dan akses keluar tol Cileunyi.',
    category: 'swasta',
    badge: 'Pusat Koperasi & Bisnis',
    plusCode: '3Q88+2V Cibeusi, Kabupaten Sumedang, Jawa Barat',
    popularMajors: [
      'Manajemen Bisnis & Koperasi Syariah',
      'Akuntansi Bisnis Digital',
      'Agribisnis & Rantai Pasok',
      'Ekonomi Syariah & Perbankan',
      'Sains Data Terapan'
    ],
    mahasantriProgram: 'Laboratorium Kewirausahaan Santri & Praktik Fiqih Muamalah di Koperasi Pesantren',
    mapCoordinates: {
      svgX: 72,
      svgY: 42,
      lat: -6.934924638729303,
      lng: 107.76718266135813
    },
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-6.941348920325291,107.7426678439708&destination=-6.934924638729303,107.76718266135813',
    description: 'Pelopor pendidikan tinggi koperasi dan kewirausahaan syariah. Santri dapat mempraktikkan konsep ekonomi Islam secara langsung dalam unit usaha dan koperasi Pondok Pesantren Miftahul Falah.',
    accentColor: '#14b8a6', // Teal
    bgLight: 'bg-teal-50',
    borderLight: 'border-teal-200'
  },
  {
    id: 'unpad-jatinangor',
    name: 'Universitas Padjadjaran (UNPAD Jatinangor)',
    shortName: 'UNPAD Jatinangor',
    nickname: 'UNPAD',
    distanceKm: 4.8,
    distanceDisplay: '4.8 km',
    travelTimeMotor: '10 - 13 Menit',
    travelTimePublic: '18 - 22 Menit',
    travelTimeCar: '12 - 16 Menit',
    routePrimary: 'Jl. Raya Bandung-Sumedang Km. 21, Hegarmanah, Jatinangor',
    routeDetails: 'Melalui koridor utama Jl. Raya Cileunyi - Jatinangor, jalur ramai dilalui angkutan umum kampus, bus DAMRI, dan travel santri.',
    category: 'negeri',
    badge: 'Kampus Terbesar Jatinangor',
    plusCode: '3QFF+GV Hegarmanah, Kabupaten Sumedang, Jawa Barat',
    popularMajors: [
      'Fakultas Kedokteran & Farmasi',
      'Hukum & Hubungan Internasional',
      'Ilmu Komunikasi (Fikom)',
      'Ekonomi & Bisnis (FEB)',
      'Psikologi & Pertanian'
    ],
    mahasantriProgram: 'Kajian Fiqih Kontemporer, Bahtsul Masa\'il & Riset Santri untuk Mahasiswa Medis, Hukum & Saintek',
    mapCoordinates: {
      svgX: 86,
      svgY: 20,
      lat: -6.925760905987163,
      lng: 107.7746978670946
    },
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-6.941348920325291,107.7426678439708&destination=-6.925760905987163,107.7746978670946',
    description: 'Salah satu PTN terkemuka dengan fakultas terlengkap di Indonesia. Mahasantri di Miftahul Falah menikmati suasana asrama yang tenang, teratur, dan terjaga dari pergaulan bebas luar kampus tanpa mengorbankan mobilitas.',
    accentColor: '#8b5cf6', // Violet
    bgLight: 'bg-violet-50',
    borderLight: 'border-violet-200'
  },
  {
    id: 'upi-cibiru',
    name: 'Universitas Pendidikan Indonesia (UPI Cibiru)',
    shortName: 'UPI Cibiru',
    nickname: 'UPI Cibiru',
    distanceKm: 2.2,
    distanceDisplay: '2.2 km',
    travelTimeMotor: '5 - 6 Menit',
    travelTimePublic: '8 - 10 Menit',
    travelTimeCar: '6 - 8 Menit',
    routePrimary: 'Jl. Raya Cibiru No. 15, Cibiru Wetan, Kec. Cileunyi',
    routeDetails: 'Kampus paling dekat dengan pondok! Akses cepat tembus via Cileunyi Kulon dan Cibiru Hilir tanpa perlu melewati titik macet.',
    category: 'negeri',
    badge: 'Paling Dekat (Hanya 5 Menit)',
    plusCode: '3P5G+W5 Cibiru Wetan, Kabupaten Bandung, Jawa Barat',
    popularMajors: [
      'Pendidikan Guru Sekolah Dasar (PGSD)',
      'Rekayasa Perangkat Lunak (RPL)',
      'Teknik Komputer',
      'Pendidikan Guru PAUD',
      'Pendidikan Multimedia'
    ],
    mahasantriProgram: 'Pengabdian Asatidz Muda & Praktik Mengajar Terbimbing di Madrasah MTs/MA Pesantren Miftahul Falah',
    mapCoordinates: {
      svgX: 30,
      svgY: 50,
      lat: -6.940027916683078,
      lng: 107.72536166785672
    },
    googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&origin=-6.941348920325291,107.7426678439708&destination=-6.940027916683078,107.72536166785672',
    description: 'Pencetak tenaga pendidik dan talenta digital nomor wahid. Lokasinya yang sangat dekat (hanya 5 menit perjalanan) memudahkan mahasantri beraktivitas akademik sekaligus berkhidmah mengajar santri di pesantren.',
    accentColor: '#f97316', // Orange
    bgLight: 'bg-orange-50',
    borderLight: 'border-orange-200'
  }
];

export const NEARBY_LANDMARKS = [
  {
    name: 'Stasiun Kereta Cepat Whoosh Tegalluar',
    distance: '6.2 km (12 Menit)',
    type: 'Transportasi Cepat',
    svgX: 42,
    svgY: 86,
    icon: 'Train'
  },
  {
    name: 'Masjid Raya Al Jabbar Gedebage',
    distance: '4.8 km (9 Menit)',
    type: 'Wisata Religi & Ibadah',
    svgX: 24,
    svgY: 82,
    icon: 'Landmark'
  },
  {
    name: 'Gerbang Tol Cileunyi (Padaleunyi & Cisumdawu)',
    distance: '2.8 km (5 Menit)',
    type: 'Akses Tol Utama',
    svgX: 62,
    svgY: 58,
    icon: 'Compass'
  },
  {
    name: 'Bundaran Cibiru (Arteri Kota Bandung)',
    distance: '2.0 km (4 Menit)',
    type: 'Simpul Transportasi Kota',
    svgX: 33,
    svgY: 46,
    icon: 'Navigation'
  }
];

export const MAHASANTRI_BENEFITS = [
  {
    title: 'Sinkronisasi Waktu Kuliah & Ngaji Berjenjang',
    desc: 'KBM terbagi 2 kelas: Kelas Bawah (Semester 1-4) & Kelas Atas (Semester 5+). Jadwal ngaji: Maghrib, Isya, dan Subuh. Malam Kamis: Ngaji Gabungan, Malam Jumat: Barzanji & Marhaba. Siang hari 100% bebas untuk kuliah di kampus.',
    icon: 'Clock'
  },
  {
    title: 'Fasilitas Belajar & WiFi Cepat',
    desc: 'Asrama representatif, meja belajar individu, jaringan internet stabil untuk riset tugas akhir/skripsi, dan perpustakaan maktabah syamilah.',
    icon: 'Wifi'
  },
  {
    title: 'Lingkungan Positif & Bebas Pergaulan Negatif',
    desc: 'Menjaga pergaulan santri mahasiswa tetap berada dalam koridor adab islami, sholat berjamaah 5 waktu di masjid, dan qiyamul lail.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Biaya Mukim Sangat Bersahabat',
    desc: 'Biaya asrama dan syahriah bulanan terjangkau bagi mahasiswa, lingkungan kondusif dekat kampus, dan berakhlakul karimah.',
    icon: 'GraduationCap'
  }
];

export const DEWAN_SANTRI_BIDANG = [
  {
    id: 'all' as const,
    name: 'Semua Program Kerja',
    shortName: 'Semua Bidang',
    description: 'Seluruh agenda pembinaan, keilmuan, dan kreativitas santri di bawah naungan Dewan Santri Miftahul Falah.'
  },
  {
    id: 'psdm' as const,
    name: 'Bidang PSDM',
    shortName: 'PSDM',
    fullName: 'Pengembangan Sumber Daya Manusia',
    description: 'Fokus pada peningkatan kapasitas santri di bidang keahlian digital, seni Islam, olah suara tilawah, dan kecakapan komunikasi massa.'
  },
  {
    id: 'pendidikan' as const,
    name: 'Bidang Pendidikan',
    shortName: 'Pendidikan',
    fullName: 'Pendidikan & Keilmuan',
    description: 'Penguatan tradisi literasi kitab turats, retorika dakwah santri, serta pengajian tematik akseleratif.'
  },
  {
    id: 'medinfo' as const,
    name: 'Bidang Medinfo',
    shortName: 'Medinfo',
    fullName: 'Media Informasi',
    description: 'Pusat publikasi kreasi santri, syiar dakwah digital, buletin literasi, dan pengarsipan kegiatan pondok.'
  }
];

export const DEWAN_SANTRI_PROGRAMS: DewanSantriProgram[] = [
  // BIDANG PSDM
  {
    id: 'psdm-desain-grafis',
    title: 'Pelatihan Desain Grafis',
    bidangId: 'psdm',
    bidangName: 'Bidang PSDM (Pengembangan Sumber Daya Manusia)',
    badge: 'Kreatif & IT Santri',
    tagline: 'Kreativitas Visual untuk Dakwah Digital',
    description: 'Pelatihan pembuatan media visual islami, poster dakwah, banner kegiatan pondok, dan layout publikasi digital menggunakan perangkat lunak desain modern.',
    objectives: [
      'Santri menguasai dasar-dasar tipografi, pewarnaan, dan komposisi layout visual',
      'Mampu memproduksi konten poster kajian, quotes ulama, dan publikasi sosial media',
      'Menyiapkan tim desainer internal untuk kebutuhan syiar pondok pesantren'
    ],
    targetSkills: ['Graphic Design', 'Poster Dakwah', 'Branding Santri', 'Visual Composition'],
    executionNote: 'Waktu pelaksanaan akan diumumkan oleh pengurus',
    icon: 'Palette'
  },
  {
    id: 'psdm-hadroh',
    title: 'Pelatihan Hadroh',
    bidangId: 'psdm',
    bidangName: 'Bidang PSDM (Pengembangan Sumber Daya Manusia)',
    badge: 'Seni & Budaya Islam',
    tagline: 'Melantunkan Mahabbah dengan Ketukan Rebana Syahdu',
    description: 'Pembinaan seni musik rebana dan tabuhan hadroh (variasi banjari, habsyi, dan kontemporer) untuk mengasah kepekaan seni Islami serta menyemarakkan majelis sholawat.',
    objectives: [
      'Pelatihan teknik pukulan rebana (golong, anakan, wedokan/kemplang)',
      'Sinkronisasi harmonisasi vokal kor dan tabuhan instrumen',
      'Persiapan tim hadroh santri untuk acara maulid, tabligh akbar, dan festival'
    ],
    targetSkills: ['Seni Rebana', 'Harmoni Vokal Sholawat', 'Kekompakan Tim', 'Apresiasi Seni Islam'],
    executionNote: 'Waktu pelaksanaan akan diumumkan oleh pengurus',
    icon: 'Music'
  },
  {
    id: 'psdm-tilawah',
    title: 'Pelatihan Tilawah',
    bidangId: 'psdm',
    bidangName: 'Bidang PSDM (Pengembangan Sumber Daya Manusia)',
    badge: 'Seni Baca Al-Qur\'an',
    tagline: 'Menghias Lantunan Kalamullah dengan Nagham Indah',
    description: 'Bimbingan seni baca Al-Qur\'an maqam bersanad (Bayati, Shoba, Hijaz, Nahawand, Rast, Sikah, Jiharkah) yang dipadukan dengan ketepatan fashahah tajwid.',
    objectives: [
      'Penguasaan teknik pernafasan dan fleksibilitas tangga nada suara',
      'Penerapan nagham/irama tilawah standar musabaqah tilawatil Qur\'an',
      'Mencetak kader qari dan qari\'ah terbaik perwakilan pesantren'
    ],
    targetSkills: ['Maqamat Tilawah', 'Fashahah Tajwid', 'Olah Vokal Qur\'ani', 'Percaya Diri Tampil'],
    executionNote: 'Waktu pelaksanaan akan diumumkan oleh pengurus',
    icon: 'BookOpen'
  },
  {
    id: 'psdm-public-speaking',
    title: 'Pelatihan Public Speaking',
    bidangId: 'psdm',
    bidangName: 'Bidang PSDM (Pengembangan Sumber Daya Manusia)',
    badge: 'Komunikasi & Retorika',
    tagline: 'Berani Bersuara, Fasih Menyampaikan Gagasan Kebajikan',
    description: 'Pelatihan teknik komunikasi di hadapan audiens, artikulasi vokal, gestur tubuh, dan teknik mengatasi rasa gugup di panggung.',
    objectives: [
      'Mengikis demam panggung dan menumbuhkan kepercayaan diri santri',
      'Penguasaan struktur materi pidato pembuka, isi, dan penutup yang memikat',
      'Pelatihan keprotokolan resmi di lingkungan pesantren'
    ],
    targetSkills: ['Retorika Panggung', 'Artikulasi Vokal', 'Body Language'],
    executionNote: 'Waktu pelaksanaan akan diumumkan oleh pengurus',
    icon: 'Mic'
  },

  // BIDANG PENDIDIKAN
  {
    id: 'pendidikan-muhadoroh',
    title: 'Muhadharah',
    bidangId: 'pendidikan',
    bidangName: 'Bidang Pendidikan',
    badge: 'Penampilan Santri',
    tagline: 'Syiar Dakwah, Gema Sholawat, dan Penguatan Amaliah Pesantren',
    description: 'Kegiatan penampilan santri yang mencakup pembacaan barzanji, sholawat, tawasul, bahtsul kutub, dakwah, dan penampilan kreasi keislaman lainnya (dll).',
    objectives: [
      'Pembacaan Maulid Al-Barzanji & qasidah sholawat Nabi',
      'Praktik tawasul dan dzikir jama\'i salafus sholih',
      'Bahtsul kutub & pengkajian khazanah kitab kuning',
      'Latihan dakwah dan retorika khitobah keagamaan',
      'Penampilan seni, minat bakat, dan kreasi santri lainnya (dll.)'
    ],
    targetSkills: ['Pembacaan Barzanji', 'Sholawat', 'Tawasul', 'Bahtsul Kutub', 'Dakwah', 'Kreasi Santri'],
    executionNote: 'Waktu pelaksanaan akan diumumkan oleh pengurus',
    icon: 'Users'
  },
  {
    id: 'pendidikan-pasaran-ramadhan',
    title: 'Pasaran Ramadhan',
    bidangId: 'pendidikan',
    bidangName: 'Bidang Pendidikan',
    badge: 'Kajian Kilat Kitab Turats',
    tagline: 'Akselerasi Pengajian Kitab Kuning di Bulan Penuh Berkah',
    description: 'Pengajian kitab kuning kilatan (pasaran) intensif selama bulan suci Ramadhan untuk mengkhatamkan kitab-kitab pilihan bersama dewan asatidz dan pengasuh.',
    objectives: [
      'Khataman kitab-kitab fiqih, tasawuf, hadits, dan akidah dalam waktu terukur',
      'Membuka kesempatan bagi santri kalong, mahasiswa sekitar, dan masyarakat umum untuk tabarrukan',
      'Memperdalam sanad keilmuan dan tradisi halaqah ilmiah salafus sholih'
    ],
    targetSkills: ['Khataman Kitab Turats', 'I\'rab & Makna Pegon', 'Sanad Keilmuan', 'Intensitas Ibadah Ramadhan'],
    executionNote: 'Waktu pelaksanaan akan diumumkan oleh pengurus',
    icon: 'Moon'
  },

  // BIDANG MEDINFO
  {
    id: 'medinfo-misi',
    title: 'MISI (Mimbar Kreasi)',
    bidangId: 'medinfo',
    bidangName: 'Bidang Medinfo (Media Informasi)',
    badge: 'Kreasi & Literasi Santri',
    tagline: 'Ruang Ekspresi, Pena Literasi, dan Informasi Santri',
    description: 'Mimbar apresiasi karya cipta santri yang merangkum artikel keislaman, cerpen, puisi, kaligrafi santri, majalah dinding (mading), dan buletin informasi berkala pondok.',
    objectives: [
      'Menumbuhkan minat baca dan budaya menulis (literasi) di kalangan santri',
      'Menjadi sarana publikasi karya kreatif santri baik di mading fisik maupun media digital',
      'Menyebarkan warta kegiatan positif serta kajian edukatif keluarga besar pesantren'
    ],
    targetSkills: ['Jurnalistik Santri', 'Kepenulisan Kreatif', 'Mading & Buletin', 'Kurasi Konten Edukasi'],
    executionNote: 'Waktu pelaksanaan akan diumumkan oleh pengurus',
    icon: 'Newspaper'
  }
];

export const DEFAULT_CONTACTS: PesantrenContacts = {
  officialPhone: '+62 851-6592-4950',
  officialWhatsapp: '+62 851-6592-4950',
  officialEmail: 'sekretariat@miftahulfalah.my.id',
  roisName: 'Mang Muhammad Ilham Sanusi',
  roisTitle: 'Rois / Ketua Dewan Santri Putra',
  roisWhatsapp: '+62 895-2060-6000',
  roisahName: 'Teh Paujiah Nurpadilah',
  roisahTitle: 'Roisah / Ketua Dewan Santri Putri',
  roisahWhatsapp: '+62 831-0145-1595'
};
