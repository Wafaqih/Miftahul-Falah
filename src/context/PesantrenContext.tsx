import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  NewsItem, 
  DewanSantriProgram, 
  FacilityItem, 
  SantriRegistration, 
  PesantrenContacts 
} from '../types.ts';
import { 
  NEWS_DATA, 
  DEWAN_SANTRI_PROGRAMS, 
  FACILITIES_DATA, 
  DEFAULT_CONTACTS 
} from '../data/pesantrenData.ts';

const STORAGE_KEYS = {
  CONTACTS: 'mf_contacts_v2',
  NEWS: 'mf_news_v1',
  PROKER: 'mf_proker_v1',
  FACILITIES: 'mf_facilities_v2',
  REGISTRATIONS: 'miftahul_falah_psb_registrations',
  ADMIN_AUTH: 'mf_admin_logged_in_v1'
};

interface PesantrenContextType {
  // Contacts
  contacts: PesantrenContacts;
  updateContacts: (newContacts: Partial<PesantrenContacts>) => void;
  resetContacts: () => void;

  // News
  news: NewsItem[];
  addNews: (item: Omit<NewsItem, 'id'>) => void;
  updateNews: (id: string, item: Partial<NewsItem>) => void;
  deleteNews: (id: string) => void;
  resetNews: () => void;

  // Proker (Dewan Santri)
  proker: DewanSantriProgram[];
  addProker: (item: Omit<DewanSantriProgram, 'id'>) => void;
  updateProker: (id: string, item: Partial<DewanSantriProgram>) => void;
  deleteProker: (id: string) => void;
  resetProker: () => void;

  // Facilities
  facilities: FacilityItem[];
  addFacility: (item: Omit<FacilityItem, 'id'>) => void;
  updateFacility: (id: string, item: Partial<FacilityItem>) => void;
  deleteFacility: (id: string) => void;
  resetFacilities: () => void;

  // PSB Registrations (Verification only)
  registrations: SantriRegistration[];
  addRegistration: (reg: SantriRegistration) => void;
  verifyRegistration: (id: string, verifiedBy?: string, notes?: string) => void;
  unverifyRegistration: (id: string) => void;
  deleteRegistration: (id: string) => void;
  refreshRegistrations: () => void;

  // Global reset
  resetAllDataToDefault: () => void;
}

const PesantrenContext = createContext<PesantrenContextType | undefined>(undefined);

export const PesantrenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Contacts State
  const [contacts, setContacts] = useState<PesantrenContacts>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CONTACTS);
      return saved ? { ...DEFAULT_CONTACTS, ...JSON.parse(saved) } : DEFAULT_CONTACTS;
    } catch {
      return DEFAULT_CONTACTS;
    }
  });

  // News State
  const [news, setNews] = useState<NewsItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.NEWS);
      return saved ? JSON.parse(saved) : NEWS_DATA;
    } catch {
      return NEWS_DATA;
    }
  });

  // Proker State
  const [proker, setProker] = useState<DewanSantriProgram[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROKER);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.map((item: any) => {
          if (item.id === 'pendidikan-muhadoroh') {
            const fresh = DEWAN_SANTRI_PROGRAMS.find(p => p.id === 'pendidikan-muhadoroh');
            return fresh || item;
          }
          return item;
        });
      }
      return DEWAN_SANTRI_PROGRAMS;
    } catch {
      return DEWAN_SANTRI_PROGRAMS;
    }
  });

  // Facilities State
  const [facilities, setFacilities] = useState<FacilityItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FACILITIES);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.map((item: any) => {
          if (item.id === 'madrasah' && (item.title === 'Gedung Madrasah' || item.title?.toLowerCase().includes('gedung madrasah'))) {
            return { ...item, title: 'Madrasah' };
          }
          if (item.id === 'masjid' && (item.title === 'Masjid Pesantren Miftahul Falah' || item.title?.toLowerCase().includes('pesantren miftahul falah'))) {
            return { ...item, title: 'Masjid Miftahul Falah' };
          }
          return item;
        });
      }
      return FACILITIES_DATA;
    } catch {
      return FACILITIES_DATA;
    }
  });

  // Registrations State (PSB)
  const [registrations, setRegistrations] = useState<SantriRegistration[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.REGISTRATIONS);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Normalize any old testDate/testRoom status to verification only
        return parsed.map((item: any) => ({
          ...item,
          status: item.status === 'Terverifikasi' || item.status === 'Diterima' || item.status === 'Lolos Berkas' 
            ? 'Terverifikasi' 
            : 'Menunggu Verifikasi'
        }));
      }
      return [];
    } catch {
      return [];
    }
  });

  // Initialize sample registrations if empty
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.REGISTRATIONS);
      if (!saved || JSON.parse(saved).length === 0) {
        const initialSample: SantriRegistration[] = [
          {
            id: 'reg-demo-1',
            registrationNumber: 'MF-2026-0108',
            fullName: 'Muhammad Rayhan Al-Ghifari',
            gender: 'putra',
            nisn: '0087654321',
            nik: '3204123456780001',
            birthPlace: 'Bandung',
            birthDate: '2012-04-12',
            previousSchool: 'SDIT Al-Fatih Bandung',
            santriPhone: '081298765432',
            fatherName: 'H. Rahmat Hidayat',
            motherName: 'Hj. Siti Fatimah',
            parentPhone: '081234567890',
            address: 'Jl. Melati Indah No. 12',
            city: 'Kota Bandung',
            status: 'Terverifikasi',
            registeredAt: '10 Februari 2026',
            verifiedAt: '11 Februari 2026, 09:30 WIB',
            verifiedBy: 'Sekretariat PSB (Ustadz Ahmad Fauzi)',
            verificationNotes: 'Berkas ijazah, KK, dan pas foto telah lengkap dan valid.',
            photoUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=400&auto=format&fit=crop'
          },
          {
            id: 'reg-demo-2',
            registrationNumber: 'MF-2026-0215',
            fullName: 'Aisyah Nur Salsabila',
            gender: 'putri',
            nisn: '0098765432',
            nik: '3204987654320002',
            birthPlace: 'Tasikmalaya',
            birthDate: '2011-09-20',
            previousSchool: 'MI Persis Karangnunggal',
            santriPhone: '082112345678',
            fatherName: 'Drs. Usman Basri',
            motherName: 'Nurul Hidayati, S.Pd',
            parentPhone: '082198765432',
            address: 'Kp. Pasirwangi RT 02/04',
            city: 'Kab. Tasikmalaya',
            status: 'Menunggu Verifikasi',
            registeredAt: '15 Februari 2026',
            photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop'
          }
        ];
        localStorage.setItem(STORAGE_KEYS.REGISTRATIONS, JSON.stringify(initialSample));
        setRegistrations(initialSample);
      }
    } catch {
      // ignore
    }
  }, []);

  // Save contacts
  const updateContacts = (newContacts: Partial<PesantrenContacts>) => {
    setContacts(prev => {
      const updated = { ...prev, ...newContacts };
      try {
        localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const resetContacts = () => {
    setContacts(DEFAULT_CONTACTS);
    try {
      localStorage.removeItem(STORAGE_KEYS.CONTACTS);
    } catch {
      // ignore
    }
  };

  // News Actions
  const addNews = (item: Omit<NewsItem, 'id'>) => {
    const newItem: NewsItem = {
      ...item,
      id: `news-${Date.now()}`
    };
    setNews(prev => {
      const updated = [newItem, ...prev];
      try {
        localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const updateNews = (id: string, updatedFields: Partial<NewsItem>) => {
    setNews(prev => {
      const updated = prev.map(item => item.id === id ? { ...item, ...updatedFields } : item);
      try {
        localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const deleteNews = (id: string) => {
    setNews(prev => {
      const updated = prev.filter(item => item.id !== id);
      try {
        localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const resetNews = () => {
    setNews(NEWS_DATA);
    try {
      localStorage.removeItem(STORAGE_KEYS.NEWS);
    } catch {
      // ignore
    }
  };

  // Proker Actions
  const addProker = (item: Omit<DewanSantriProgram, 'id'>) => {
    const newProker: DewanSantriProgram = {
      ...item,
      id: `proker-${Date.now()}`
    };
    setProker(prev => {
      const updated = [...prev, newProker];
      try {
        localStorage.setItem(STORAGE_KEYS.PROKER, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const updateProker = (id: string, updatedFields: Partial<DewanSantriProgram>) => {
    setProker(prev => {
      const updated = prev.map(item => item.id === id ? { ...item, ...updatedFields } : item);
      try {
        localStorage.setItem(STORAGE_KEYS.PROKER, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const deleteProker = (id: string) => {
    setProker(prev => {
      const updated = prev.filter(item => item.id !== id);
      try {
        localStorage.setItem(STORAGE_KEYS.PROKER, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const resetProker = () => {
    setProker(DEWAN_SANTRI_PROGRAMS);
    try {
      localStorage.removeItem(STORAGE_KEYS.PROKER);
    } catch {
      // ignore
    }
  };

  // Facility Actions
  const addFacility = (item: Omit<FacilityItem, 'id'>) => {
    const newFacility: FacilityItem = {
      ...item,
      id: `facility-${Date.now()}`
    };
    setFacilities(prev => {
      const updated = [...prev, newFacility];
      try {
        localStorage.setItem(STORAGE_KEYS.FACILITIES, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const updateFacility = (id: string, updatedFields: Partial<FacilityItem>) => {
    setFacilities(prev => {
      const updated = prev.map(item => item.id === id ? { ...item, ...updatedFields } : item);
      try {
        localStorage.setItem(STORAGE_KEYS.FACILITIES, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const deleteFacility = (id: string) => {
    setFacilities(prev => {
      const updated = prev.filter(item => item.id !== id);
      try {
        localStorage.setItem(STORAGE_KEYS.FACILITIES, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const resetFacilities = () => {
    setFacilities(FACILITIES_DATA);
    try {
      localStorage.removeItem(STORAGE_KEYS.FACILITIES);
    } catch {
      // ignore
    }
  };

  // PSB Registrations Actions
  const refreshRegistrations = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.REGISTRATIONS);
      if (saved) {
        setRegistrations(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  };

  const addRegistration = (reg: SantriRegistration) => {
    setRegistrations(prev => {
      const updated = [reg, ...prev];
      try {
        localStorage.setItem(STORAGE_KEYS.REGISTRATIONS, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const verifyRegistration = (id: string, verifiedBy: string = 'Sekretariat PSB', notes: string = 'Berkas terverifikasi lengkap.') => {
    const nowStr = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) + 
      ', ' + new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB';

    setRegistrations(prev => {
      const updated = prev.map(item => {
        if (item.id === id) {
          return {
            ...item,
            status: 'Terverifikasi' as const,
            verifiedAt: nowStr,
            verifiedBy,
            verificationNotes: notes
          };
        }
        return item;
      });
      try {
        localStorage.setItem(STORAGE_KEYS.REGISTRATIONS, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const unverifyRegistration = (id: string) => {
    setRegistrations(prev => {
      const updated = prev.map(item => {
        if (item.id === id) {
          return {
            ...item,
            status: 'Menunggu Verifikasi' as const,
            verifiedAt: undefined,
            verifiedBy: undefined,
            verificationNotes: undefined
          };
        }
        return item;
      });
      try {
        localStorage.setItem(STORAGE_KEYS.REGISTRATIONS, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const deleteRegistration = (id: string) => {
    setRegistrations(prev => {
      const updated = prev.filter(item => item.id !== id);
      try {
        localStorage.setItem(STORAGE_KEYS.REGISTRATIONS, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const resetAllDataToDefault = () => {
    resetContacts();
    resetNews();
    resetProker();
    resetFacilities();
  };

  return (
    <PesantrenContext.Provider value={{
      contacts,
      updateContacts,
      resetContacts,

      news,
      addNews,
      updateNews,
      deleteNews,
      resetNews,

      proker,
      addProker,
      updateProker,
      deleteProker,
      resetProker,

      facilities,
      addFacility,
      updateFacility,
      deleteFacility,
      resetFacilities,

      registrations,
      addRegistration,
      verifyRegistration,
      unverifyRegistration,
      deleteRegistration,
      refreshRegistrations,

      resetAllDataToDefault
    }}>
      {children}
    </PesantrenContext.Provider>
  );
};

export const usePesantren = () => {
  const context = useContext(PesantrenContext);
  if (!context) {
    throw new Error('usePesantren must be used within a PesantrenProvider');
  }
  return context;
};
