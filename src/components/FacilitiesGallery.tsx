import React, { useState } from 'react';
import { 
  Building2, 
  Eye, 
  X, 
  MapPin, 
  Sparkles,
  Check
} from 'lucide-react';
import { FacilityItem } from '../types.ts';
import { usePesantren } from '../context/PesantrenContext.tsx';

export const FacilitiesGallery: React.FC = () => {
  const { facilities } = usePesantren();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'Semua Fasilitas' },
    { id: 'asrama', label: 'Asrama Putra & Putri' },
    { id: 'ibadah', label: 'Masjid' },
    { id: 'akademik', label: 'Madrasah & Perpustakaan' },
    { id: 'administrasi', label: 'Ruang Kesekretariatan' },
  ];

  const filteredFacilities = activeFilter === 'all'
    ? facilities
    : facilities.filter(f => f.category === activeFilter);

  return (
    <section id="fasilitas" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            Sarana & Prasarana Kampus
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Fasilitas Penunjang Pendidikan Santri
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            Dilengkapi 2 gedung asrama putra (masing-masing 2 lantai), 1 gedung asrama putri (3 lantai), madrasah, masjid, ruang kesekretariatan, serta perpustakaan di masjid lantai 3 yang menampung santri dari berbagai daerah.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-200 hover:text-stone-900 border border-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((fac) => (
            <div
              key={fac.id}
              onClick={() => setSelectedFacility(fac)}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-emerald-400 hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-stone-200">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-stone-700 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>

                  <span className="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-900/90 text-amber-300 backdrop-blur-xs capitalize">
                    {fac.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                    {fac.title}
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <span className="text-xs font-bold text-emerald-700 group-hover:underline flex items-center gap-1">
                  Lihat Rincian Fasilitas &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Facility Preview Modal */}
        {selectedFacility && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/70 backdrop-blur-xs">
            <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-stone-200">
              
              <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-900">
                <img
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/80 text-white hover:bg-stone-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                    Kategori: {selectedFacility.category}
                  </span>
                  <span className="text-xs text-stone-400 font-mono">Kampus Cikalang, Cileunyi</span>
                </div>

                <h3 className="text-xl font-bold text-stone-900">
                  {selectedFacility.title}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {selectedFacility.description}
                </p>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedFacility(null)}
                    className="px-6 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl"
                  >
                    Tutup
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
