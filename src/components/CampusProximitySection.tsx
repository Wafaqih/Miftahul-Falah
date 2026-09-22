import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Compass, 
  Bike, 
  Bus, 
  Car, 
  Clock, 
  ArrowUpRight, 
  CheckCircle2, 
  GraduationCap, 
  ExternalLink, 
  ShieldCheck, 
  Layers, 
  Wifi, 
  Train, 
  Sparkles, 
  Building2, 
  PhoneCall,
  Map as MapIcon
} from 'lucide-react';
import { 
  PESANTREN_INFO, 
  NEARBY_CAMPUSES, 
  NEARBY_LANDMARKS, 
  MAHASANTRI_BENEFITS 
} from '../data/pesantrenData.ts';
import { NearbyCampus } from '../types.ts';

interface CampusProximitySectionProps {
  onOpenPsb?: (programName?: string) => void;
}

export const CampusProximitySection: React.FC<CampusProximitySectionProps> = ({ onOpenPsb }) => {
  const [selectedCampusId, setSelectedCampusId] = useState<string>('uin-sgd-1');
  const [mapMode, setMapMode] = useState<'graphic' | 'satellite'>('graphic');
  const [radiusFilter, setRadiusFilter] = useState<'all' | 'near' | 'mid'>('all');

  const selectedCampus: NearbyCampus = 
    NEARBY_CAMPUSES.find(c => c.id === selectedCampusId) || NEARBY_CAMPUSES[0];

  const filteredCampuses = NEARBY_CAMPUSES.filter(c => {
    if (radiusFilter === 'near') return c.distanceKm <= 3.5;
    if (radiusFilter === 'mid') return c.distanceKm > 3.5;
    return true;
  });

  return (
    <section id="kampus-sekitar" className="py-20 lg:py-28 bg-stone-100/70 relative overflow-hidden border-t border-stone-200">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#065f46_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300/60 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Compass className="w-4 h-4 text-emerald-700 animate-spin-slow" />
            <span>Kawasan Pendidikan Tinggi Bandung Timur - Jatinangor</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Dekat dengan <span className="text-emerald-700">8 Kampus & Lokasi Strategis</span> Jawa Barat
          </h2>

          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            Pondok Pesantren Miftahul Falah berada tepat di simpul emas pendidikan tinggi Bandung Timur – Cileunyi – Jatinangor. Sangat strategis bagi para santri yang melanjutkan kuliah maupun <strong>Mahasantri (Santri Mahasiswa)</strong> yang ingin menempuh pendidikan sarjana sambil tetap mondok dan mendalami ilmu agama.
          </p>

          {/* Quick highlights bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 shadow-xs font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              8 Kampus Sekitar (UIN 1 & 2, UMB, Bhakti Kencana, ITB, Ikopin, Unpad, UPI)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 shadow-xs font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              Jarak Tempuh 5 - 12 Menit
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 shadow-xs font-medium">
              <Building2 className="w-3.5 h-3.5 text-blue-600" />
              Asrama Khusus Mahasantri
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 shadow-xs font-medium">
              <Train className="w-3.5 h-3.5 text-purple-600" />
              Dekat Whoosh & Tol Cileunyi
            </span>
          </div>
        </div>

        {/* Map Visualizer & Campus Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Map Graphic (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Map Card Container */}
            <div className="bg-white rounded-2xl shadow-md border border-stone-200/90 overflow-hidden">
              
              {/* Map Controls Header */}
              <div className="p-4 bg-stone-50 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white">
                    <MapIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-stone-900 leading-tight">
                      Grafis Peta Radius & Akses Kampus
                    </h3>
                    <p className="text-[11px] text-stone-500">
                      Klik pin kampus atau tombol untuk melihat rute & detail jarak
                    </p>
                  </div>
                </div>

                {/* Map View Toggle & Radius Filter */}
                <div className="flex items-center gap-2">
                  <div className="inline-flex p-1 bg-stone-200/70 rounded-lg text-xs font-semibold">
                    <button
                      onClick={() => setMapMode('graphic')}
                      className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                        mapMode === 'graphic'
                          ? 'bg-white text-emerald-800 shadow-xs font-bold'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                      id="btn-map-mode-graphic"
                    >
                      Peta Grafis
                    </button>
                    <button
                      onClick={() => setMapMode('satellite')}
                      className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                        mapMode === 'satellite'
                          ? 'bg-white text-emerald-800 shadow-xs font-bold'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                      id="btn-map-mode-satellite"
                    >
                      Google Maps
                    </button>
                  </div>
                </div>
              </div>

              {/* Official Address & Plus Code Banner */}
              <div className="px-4 py-2.5 bg-emerald-950 text-emerald-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs border-b border-emerald-900">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-medium text-white line-clamp-1">
                    {PESANTREN_INFO.address}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900 text-amber-300 border border-emerald-800 font-bold">
                    Plus Code: 3P5V+F3
                  </span>
                  <a
                    href={PESANTREN_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-300 hover:text-white font-bold transition-colors"
                  >
                    <span>Buka Peta</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Map Canvas Area */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] bg-gradient-to-br from-emerald-950 via-stone-950 to-emerald-950 overflow-hidden select-none">
                
                {mapMode === 'graphic' ? (
                  <div className="absolute inset-0">
                    
                    {/* SVG Stylized Topological Map */}
                    <svg 
                      viewBox="0 0 1000 700" 
                      className="w-full h-full object-cover"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <defs>
                        {/* Radar Pulse Animation Gradient */}
                        <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                          <stop offset="60%" stopColor="#10b981" stopOpacity="0.1" />
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                        </radialGradient>

                        {/* Route Glow Filter */}
                        <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="3" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>

                      {/* Map Background Grid Lines */}
                      <g opacity="0.07" stroke="#ffffff" strokeWidth="1">
                        <line x1="100" y1="0" x2="100" y2="700" />
                        <line x1="250" y1="0" x2="250" y2="700" />
                        <line x1="400" y1="0" x2="400" y2="700" />
                        <line x1="550" y1="0" x2="550" y2="700" />
                        <line x1="700" y1="0" x2="700" y2="700" />
                        <line x1="850" y1="0" x2="850" y2="700" />
                        
                        <line x1="0" y1="120" x2="1000" y2="120" />
                        <line x1="0" y1="240" x2="1000" y2="240" />
                        <line x1="0" y1="360" x2="1000" y2="360" />
                        <line x1="0" y1="480" x2="1000" y2="480" />
                        <line x1="0" y1="600" x2="1000" y2="600" />
                      </g>

                      {/* Concentric Distance Radar Circles from Pesantren (Center: 480, 360) */}
                      {/* Radius 3 km */}
                      <circle 
                        cx="480" 
                        cy="360" 
                        r="150" 
                        fill="none" 
                        stroke="#10b981" 
                        strokeWidth="1.5" 
                        strokeDasharray="4 4" 
                        opacity="0.3" 
                      />
                      <text x="485" y="218" fill="#10b981" fontSize="11" opacity="0.7" fontWeight="bold">Radius 3 km</text>

                      {/* Radius 6 km */}
                      <circle 
                        cx="480" 
                        cy="360" 
                        r="270" 
                        fill="none" 
                        stroke="#10b981" 
                        strokeWidth="1.5" 
                        strokeDasharray="5 5" 
                        opacity="0.22" 
                      />
                      <text x="485" y="98" fill="#10b981" fontSize="11" opacity="0.6" fontWeight="bold">Radius 6 km</text>

                      {/* Radius 10 km */}
                      <circle 
                        cx="480" 
                        cy="360" 
                        r="380" 
                        fill="none" 
                        stroke="#34d399" 
                        strokeWidth="1" 
                        strokeDasharray="6 6" 
                        opacity="0.15" 
                      />
                      <text x="485" y="30" fill="#34d399" fontSize="11" opacity="0.5" fontWeight="bold">Radius 10 km (Bandung Timur - Jatinangor)</text>

                      {/* Central Radar Glow */}
                      <circle cx="480" cy="360" r="160" fill="url(#radarGlow)" />

                      {/* Highway Arteries & Connectors */}
                      {/* Arterial Road 1: Jl. Soekarno-Hatta to Bundaran Cibiru */}
                      <path 
                        d="M 50 480 C 180 440, 260 410, 340 370" 
                        stroke="#475569" 
                        strokeWidth="10" 
                        fill="none" 
                        strokeLinecap="round" 
                        opacity="0.6"
                      />
                      <path 
                        d="M 50 480 C 180 440, 260 410, 340 370" 
                        stroke="#94a3b8" 
                        strokeWidth="2" 
                        fill="none" 
                        strokeDasharray="6 4"
                      />
                      <text x="80" y="455" fill="#94a3b8" fontSize="10" fontWeight="bold" opacity="0.7" transform="rotate(-15 80 455)">
                        Jl. Arteri Soekarno-Hatta
                      </text>

                      {/* Arterial Road 2: Jl. A.H. Nasution (Ujungberung - Cibiru) */}
                      <path 
                        d="M 180 120 C 230 220, 280 290, 340 370" 
                        stroke="#475569" 
                        strokeWidth="9" 
                        fill="none" 
                        strokeLinecap="round" 
                        opacity="0.6"
                      />
                      <path 
                        d="M 180 120 C 230 220, 280 290, 340 370" 
                        stroke="#cbd5e1" 
                        strokeWidth="2" 
                        fill="none" 
                        strokeDasharray="6 4"
                      />
                      <text x="210" y="190" fill="#94a3b8" fontSize="10" fontWeight="bold" opacity="0.7" transform="rotate(50 210 190)">
                        Jl. A.H. Nasution
                      </text>

                      {/* Arterial Road 3: Bundaran Cibiru -> Cileunyi -> Jatinangor */}
                      <path 
                        d="M 340 370 C 440 380, 560 395, 630 405 C 720 370, 800 320, 920 310" 
                        stroke="#475569" 
                        strokeWidth="12" 
                        fill="none" 
                        strokeLinecap="round" 
                        opacity="0.7"
                      />
                      <path 
                        d="M 340 370 C 440 380, 560 395, 630 405 C 720 370, 800 320, 920 310" 
                        stroke="#f59e0b" 
                        strokeWidth="3" 
                        fill="none" 
                        strokeDasharray="8 4"
                      />
                      <text x="710" y="375" fill="#f59e0b" fontSize="10" fontWeight="bold" opacity="0.9" transform="rotate(-18 710 375)">
                        Jl. Raya Cileunyi - Jatinangor
                      </text>

                      {/* Tol Padaleunyi & Tol Cisumdawu */}
                      <path 
                        d="M 380 650 C 490 560, 580 480, 630 405 C 690 320, 770 210, 850 100" 
                        stroke="#0369a1" 
                        strokeWidth="7" 
                        fill="none" 
                        strokeLinecap="round" 
                        opacity="0.5"
                      />
                      <text x="740" y="220" fill="#38bdf8" fontSize="10" fontWeight="bold" opacity="0.8" transform="rotate(-48 740 220)">
                        Tol Cisumdawu
                      </text>

                      {/* Local Connector Roads to Pesantren Miftahul Falah (Cibiru Hilir) */}
                      <path 
                        d="M 340 370 Q 400 365, 480 360" 
                        stroke="#10b981" 
                        strokeWidth="5" 
                        fill="none" 
                        opacity="0.7"
                      />
                      <path 
                        d="M 630 405 Q 540 385, 480 360" 
                        stroke="#10b981" 
                        strokeWidth="5" 
                        fill="none" 
                        opacity="0.7"
                      />

                      {/* Active Route Highlight Vector connecting Center to Selected Campus */}
                      {selectedCampus && (
                        <g filter="url(#routeGlow)">
                          <line 
                            x1="480" 
                            y1="360" 
                            x2={selectedCampus.mapCoordinates.svgX * 10} 
                            y2={selectedCampus.mapCoordinates.svgY * 7} 
                            stroke="#fbbf24" 
                            strokeWidth="3.5" 
                            strokeDasharray="8 6" 
                            className="animate-pulse"
                          />
                          {/* Distance Badge on Vector */}
                          <g 
                            transform={`translate(${
                              (480 + selectedCampus.mapCoordinates.svgX * 10) / 2
                            }, ${
                              (360 + selectedCampus.mapCoordinates.svgY * 7) / 2 - 12
                            })`}
                          >
                            <rect 
                              x="-42" 
                              y="-12" 
                              width="84" 
                              height="22" 
                              rx="6" 
                              fill="#1e293b" 
                              stroke="#fbbf24" 
                              strokeWidth="1.5" 
                            />
                            <text 
                              x="0" 
                              y="3" 
                              textAnchor="middle" 
                              fill="#fbbf24" 
                              fontSize="11" 
                              fontWeight="bold"
                            >
                              {selectedCampus.distanceDisplay} ({selectedCampus.travelTimeMotor.split(' ')[0]} mnt)
                            </text>
                          </g>
                        </g>
                      )}

                      {/* Bundaran Cibiru Hub Point */}
                      <circle cx="340" cy="370" r="9" fill="#0f172a" stroke="#94a3b8" strokeWidth="3" />
                      <text x="340" y="396" fill="#cbd5e1" fontSize="10" fontWeight="bold" textAnchor="middle">
                        Bundaran Cibiru
                      </text>

                      {/* Gerbang Tol Cileunyi Hub Point */}
                      <circle cx="630" cy="405" r="9" fill="#0f172a" stroke="#38bdf8" strokeWidth="3" />
                      <text x="630" y="430" fill="#7dd3fc" fontSize="10" fontWeight="bold" textAnchor="middle">
                        Exit Tol Cileunyi
                      </text>

                      {/* Key Regional Landmarks Pins */}
                      {NEARBY_LANDMARKS.map((landmark) => {
                        const x = landmark.svgX * 10;
                        const y = landmark.svgY * 7;
                        return (
                          <g key={landmark.name} transform={`translate(${x}, ${y})`}>
                            <circle cx="0" cy="0" r="5" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
                            <rect 
                              x="-65" 
                              y="9" 
                              width="130" 
                              height="17" 
                              rx="4" 
                              fill="#0f172a" 
                              fillOpacity="0.85" 
                              stroke="#334155" 
                              strokeWidth="1" 
                            />
                            <text 
                              x="0" 
                              y="21" 
                              textAnchor="middle" 
                              fill="#94a3b8" 
                              fontSize="8.5" 
                              fontWeight="bold"
                            >
                              {landmark.name.split(' ')[0]} {landmark.name.split(' ')[1]} ({landmark.distance.split(' ')[0]} km)
                            </text>
                          </g>
                        );
                      })}

                      {/* CENTER PIN: Pondok Pesantren Miftahul Falah (480, 360) */}
                      <g transform="translate(480, 360)">
                        {/* Animated Expanding Rings */}
                        <circle cx="0" cy="0" r="28" fill="#10b981" opacity="0.2" className="animate-ping" />
                        <circle cx="0" cy="0" r="20" fill="#059669" opacity="0.3" />
                        <circle cx="0" cy="0" r="14" fill="#047857" stroke="#34d399" strokeWidth="2.5" />
                        <circle cx="0" cy="0" r="6" fill="#fbbf24" />

                        {/* Center Label Pill */}
                        <g transform="translate(0, -36)">
                          <rect 
                            x="-135" 
                            y="-16" 
                            width="270" 
                            height="34" 
                            rx="17" 
                            fill="#064e3b" 
                            stroke="#34d399" 
                            strokeWidth="2" 
                            filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.5))"
                          />
                          <text 
                            x="0" 
                            y="-1" 
                            textAnchor="middle" 
                            fill="#ecfdf5" 
                            fontSize="10.5" 
                            fontWeight="bold"
                          >
                            🕌 PONPES MIFTAHUL FALAH (PUSAT)
                          </text>
                          <text 
                            x="0" 
                            y="11" 
                            textAnchor="middle" 
                            fill="#fef08a" 
                            fontSize="8" 
                            fontWeight="bold"
                          >
                            Cileunyi Kulon • Plus Code: 3P5V+F3
                          </text>
                        </g>
                      </g>

                      {/* Interactive Campus Pins */}
                      {NEARBY_CAMPUSES.map((campus) => {
                        const isSelected = campus.id === selectedCampusId;
                        const x = campus.mapCoordinates.svgX * 10;
                        const y = campus.mapCoordinates.svgY * 7;

                        return (
                          <g 
                            key={campus.id} 
                            transform={`translate(${x}, ${y})`}
                            onClick={() => setSelectedCampusId(campus.id)}
                            className="cursor-pointer group"
                          >
                            {/* Hover Pulse */}
                            {isSelected && (
                              <circle 
                                cx="0" 
                                cy="0" 
                                r="22" 
                                fill={campus.accentColor} 
                                opacity="0.3" 
                                className="animate-ping" 
                              />
                            )}

                            {/* Pin Outer Ring */}
                            <circle 
                              cx="0" 
                              cy="0" 
                              r={isSelected ? "17" : "13"} 
                              fill={isSelected ? campus.accentColor : '#1e293b'} 
                              stroke={isSelected ? '#ffffff' : campus.accentColor} 
                              strokeWidth={isSelected ? "3" : "2"} 
                              className="transition-all duration-300"
                            />

                            {/* Pin Inner Label */}
                            <text 
                              x="0" 
                              y="4" 
                              textAnchor="middle" 
                              fill={isSelected ? '#ffffff' : '#f8fafc'} 
                              fontSize={isSelected ? "10" : "8.5"} 
                              fontWeight="bold"
                            >
                              {campus.nickname.split(' ')[0]}
                            </text>

                            {/* Campus Label Pill */}
                            <g transform={`translate(0, ${y > 400 ? -28 : 28})`}>
                              <rect 
                                x="-68" 
                                y="-11" 
                                width="136" 
                                height="22" 
                                rx="6" 
                                fill={isSelected ? campus.accentColor : '#0f172a'} 
                                fillOpacity={isSelected ? "0.95" : "0.85"}
                                stroke={isSelected ? '#ffffff' : '#334155'} 
                                strokeWidth={isSelected ? "1.5" : "1"} 
                                className="transition-colors"
                              />
                              <text 
                                x="0" 
                                y="3" 
                                textAnchor="middle" 
                                fill={isSelected ? '#ffffff' : '#e2e8f0'} 
                                fontSize="9.5" 
                                fontWeight={isSelected ? "bold" : "600"}
                              >
                                {campus.shortName}
                              </text>
                            </g>
                          </g>
                        );
                      })}

                      {/* Compass Rose */}
                      <g transform="translate(930, 70)">
                        <circle cx="0" cy="0" r="26" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                        <path d="M 0 -20 L 5 -5 L 20 0 L 5 5 L 0 20 L -5 5 L -20 0 L -5 -5 Z" fill="#475569" />
                        <path d="M 0 -20 L 5 -5 L 0 0 L -5 -5 Z" fill="#ef4444" />
                        <text x="0" y="-8" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">U</text>
                        <text x="14" y="3" textAnchor="middle" fill="#94a3b8" fontSize="7">T</text>
                        <text x="0" y="15" textAnchor="middle" fill="#94a3b8" fontSize="7">S</text>
                        <text x="-14" y="3" textAnchor="middle" fill="#94a3b8" fontSize="7">B</text>
                      </g>
                    </svg>

                    {/* Overlay Legend */}
                    <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-stone-900/90 backdrop-blur-md border border-stone-700/80 rounded-xl p-2.5 sm:p-3 text-xs text-stone-300 flex flex-wrap items-center gap-x-3.5 gap-y-1.5 shadow-lg">
                      <div className="flex items-center gap-1.5 font-bold text-white">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                        <span>Ponpes Miftahul Falah</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px]">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span>UIN SGD 1 & 2</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px]">
                        <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                        <span>UMB</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px]">
                        <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                        <span>Bhakti Kencana</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px]">
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        <span>ITB</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px]">
                        <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                        <span>IKOPIN</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px]">
                        <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                        <span>UNPAD</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px]">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                        <span>UPI</span>
                      </div>
                    </div>

                    {/* Hint overlay */}
                    <div className="absolute top-3 left-3 bg-emerald-950/80 backdrop-blur-xs border border-emerald-500/40 px-2.5 py-1 rounded-md text-[11px] text-emerald-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Peta Interaktif: Ketuk salah satu pin kampus</span>
                    </div>
                  </div>
                ) : (
                  /* Google Maps Satelit Embed */
                  <div className="absolute inset-0 w-full h-full">
                    <iframe
                      title="Google Maps Lokasi Pondok Pesantren Miftahul Falah Cileunyi Kulon"
                      src={PESANTREN_INFO.googleMapsEmbed}
                      className="w-full h-full border-0"
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="absolute top-3 right-3 bg-stone-900/90 text-white text-[11px] px-3 py-1.5 rounded-lg backdrop-blur-md border border-stone-700 flex items-center gap-1.5 shadow-md">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>Cileunyi Kulon, Kab. Bandung</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Map Sub-Bar with Transport Infrastructure */}
              <div className="p-4 bg-stone-50 border-t border-stone-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-2.5 rounded-xl bg-white border border-stone-200 flex flex-col justify-between">
                  <div className="flex items-center gap-1.5 text-stone-500 font-semibold text-[10px] uppercase">
                    <Train className="w-3.5 h-3.5 text-purple-600" />
                    <span>Whoosh Tegalluar</span>
                  </div>
                  <div className="text-stone-900 font-bold mt-1">10-12 Menit (6 km)</div>
                  <div className="text-[10px] text-stone-500">Kereta Cepat Jakarta-Bandung</div>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-stone-200 flex flex-col justify-between">
                  <div className="flex items-center gap-1.5 text-stone-500 font-semibold text-[10px] uppercase">
                    <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Gerbang Tol Cileunyi</span>
                  </div>
                  <div className="text-stone-900 font-bold mt-1">5 Menit (2.8 km)</div>
                  <div className="text-[10px] text-stone-500">Padaleunyi & Cisumdawu</div>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-stone-200 flex flex-col justify-between">
                  <div className="flex items-center gap-1.5 text-stone-500 font-semibold text-[10px] uppercase">
                    <Building2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Masjid Al Jabbar</span>
                  </div>
                  <div className="text-stone-900 font-bold mt-1">8-10 Menit (4.8 km)</div>
                  <div className="text-[10px] text-stone-500">Wisata Religi & Ibadah</div>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-stone-200 flex flex-col justify-between">
                  <div className="flex items-center gap-1.5 text-stone-500 font-semibold text-[10px] uppercase">
                    <Bus className="w-3.5 h-3.5 text-amber-600" />
                    <span>Bundaran Cibiru</span>
                  </div>
                  <div className="text-stone-900 font-bold mt-1">4 Menit (2.0 km)</div>
                  <div className="text-[10px] text-stone-500">Simpul Angkot & Bus Trans</div>
                </div>
              </div>
            </div>

            {/* Radius Filter Pills */}
            <div className="flex items-center justify-between text-xs text-stone-600 px-1">
              <span className="font-semibold text-stone-700">Filter Jangkauan:</span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setRadiusFilter('all')}
                  className={`px-3 py-1 rounded-full border text-xs cursor-pointer transition-colors ${
                    radiusFilter === 'all'
                      ? 'bg-emerald-700 text-white border-emerald-700 font-bold'
                      : 'bg-white text-stone-600 border-stone-300 hover:bg-stone-50'
                  }`}
                >
                  Semua (8 Kampus)
                </button>
                <button
                  onClick={() => setRadiusFilter('near')}
                  className={`px-3 py-1 rounded-full border text-xs cursor-pointer transition-colors ${
                    radiusFilter === 'near'
                      ? 'bg-emerald-700 text-white border-emerald-700 font-bold'
                      : 'bg-white text-stone-600 border-stone-300 hover:bg-stone-50'
                  }`}
                >
                  Radius ≤ 3.5 km
                </button>
                <button
                  onClick={() => setRadiusFilter('mid')}
                  className={`px-3 py-1 rounded-full border text-xs cursor-pointer transition-colors ${
                    radiusFilter === 'mid'
                      ? 'bg-emerald-700 text-white border-emerald-700 font-bold'
                      : 'bg-white text-stone-600 border-stone-300 hover:bg-stone-50'
                  }`}
                >
                  Radius &gt; 3.5 km
                </button>
              </div>
            </div>

            {/* 8 Campus Clickable Selector Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {filteredCampuses.map((campus) => {
                const isSelected = campus.id === selectedCampusId;
                return (
                  <button
                    key={campus.id}
                    onClick={() => setSelectedCampusId(campus.id)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer relative ${
                      isSelected
                        ? 'bg-white border-emerald-600 shadow-md ring-2 ring-emerald-500/30'
                        : 'bg-white/80 hover:bg-white border-stone-200 hover:border-stone-300 shadow-xs'
                    }`}
                    id={`btn-select-campus-${campus.id}`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span 
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: campus.accentColor }}
                      ></span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-stone-100 text-stone-700">
                        {campus.distanceDisplay}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-stone-900 leading-tight">
                      {campus.shortName}
                    </div>

                    <div className="text-[11px] text-stone-500 mt-1 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-stone-400 shrink-0" />
                      <span>{campus.travelTimeMotor.split(' ')[0]} mnt (motor)</span>
                    </div>

                    {isSelected && (
                      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-600"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Campus Detailed Profile & Commute Card (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Main Detail Card */}
            <div className="bg-white rounded-2xl shadow-md border border-stone-200 overflow-hidden">
              
              {/* Card Header with Category & Distance Banner */}
              <div className="p-5 sm:p-6 bg-gradient-to-br from-stone-900 to-emerald-950 text-white relative">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-800/80 border border-emerald-600 text-emerald-200 text-[11px] font-semibold">
                    <GraduationCap className="w-3.5 h-3.5 text-amber-300" />
                    {selectedCampus.category === 'negeri' ? 'Perguruan Tinggi Negeri (PTN)' : 'Perguruan Tinggi Swasta Unggulan'}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-amber-400 text-emerald-950 text-xs font-extrabold shadow-xs">
                    {selectedCampus.distanceDisplay}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {selectedCampus.name}
                </h3>
                
                <p className="text-xs text-emerald-200/90 mt-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{selectedCampus.routePrimary}</span>
                </p>

                {selectedCampus.plusCode && (
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-900/70 border border-emerald-700/60 text-emerald-200 text-[11px] font-mono">
                    <span className="text-amber-300 font-semibold">Plus Code:</span>
                    <span>{selectedCampus.plusCode}</span>
                  </div>
                )}
              </div>

              {/* Commute Time Matrix */}
              <div className="p-5 sm:p-6 space-y-5">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Estimasi Waktu Tempuh dari Ponpes Miftahul Falah</span>
                  </h4>

                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200">
                      <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white flex items-center justify-center mx-auto mb-1">
                        <Bike className="w-4 h-4" />
                      </div>
                      <div className="text-[10px] text-stone-500 font-medium">Motor / Ojol</div>
                      <div className="text-xs sm:text-sm font-bold text-emerald-950 mt-0.5">
                        {selectedCampus.travelTimeMotor}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-200">
                      <div className="w-7 h-7 rounded-lg bg-blue-700 text-white flex items-center justify-center mx-auto mb-1">
                        <Bus className="w-4 h-4" />
                      </div>
                      <div className="text-[10px] text-stone-500 font-medium">Angkot / Bus</div>
                      <div className="text-xs sm:text-sm font-bold text-blue-950 mt-0.5">
                        {selectedCampus.travelTimePublic}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200">
                      <div className="w-7 h-7 rounded-lg bg-amber-700 text-white flex items-center justify-center mx-auto mb-1">
                        <Car className="w-4 h-4" />
                      </div>
                      <div className="text-[10px] text-stone-500 font-medium">Mobil / Taxi</div>
                      <div className="text-xs sm:text-sm font-bold text-amber-950 mt-0.5">
                        {selectedCampus.travelTimeCar}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Route Details */}
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 leading-relaxed">
                  <strong className="text-stone-900 block mb-1">Rute Akses Terdekat:</strong>
                  {selectedCampus.routeDetails}
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={selectedCampus.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                    id={`btn-route-gmaps-${selectedCampus.id}`}
                  >
                    <span>Buka Rute di Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={`https://wa.me/${PESANTREN_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Assalamu'alaikum%20Panitia%20Ponpes%20Miftahul%20Falah,%20saya%20mahasiswa%20calon%20santri%20dari%20${encodeURIComponent(selectedCampus.name)}%20ingin%20tanya%20info%20asrama%20mahasantri`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-emerald-950 text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                    id={`btn-wa-mahasantri-${selectedCampus.id}`}
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Tanya Asrama Mahasiswa</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Program Khusus Mahasantri (Santri Mahasiswa) */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-md">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
              Solusi Terbaik Bagi Mahasiswa Kuliah di Bandung
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Program Asrama Mahasantri (Santri Mahasiswa)
            </h3>
            <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
              Kuliah di perguruan tinggi negeri maupun swasta ternama tanpa harus kehilangan atmosfer ibadah dan keberkahan ilmu pesantren. Di Ponpes Miftahul Falah, mahasiswa mendapatkan lingkungan mukim yang kondusif, berdisiplin positif, dan terjangkau.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {MAHASANTRI_BENEFITS.map((benefit, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-800 mb-3.5">
                    {idx === 0 && <Clock className="w-5 h-5" />}
                    {idx === 1 && <Wifi className="w-5 h-5" />}
                    {idx === 2 && <ShieldCheck className="w-5 h-5" />}
                    {idx === 3 && <GraduationCap className="w-5 h-5" />}
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 mb-1.5 leading-snug">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner Call to Action for Mahasantri */}
          <div className="mt-8 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-900 via-emerald-950 to-emerald-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-amber-400 text-emerald-950 text-[10px] font-extrabold uppercase">
                  Kuota Terbatas
                </span>
                <span className="text-xs text-emerald-300 font-medium">Tahun Ajaran 2026/2027</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white mt-1">
                Ingin Kuliah di UIN, UMB, Bhakti Kencana, ITB, Unpad, Ikopin, atau UPI Sambil Nyantri?
              </h4>
              <p className="text-xs text-emerald-200/90 mt-0.5">
                Daftar sekarang untuk Asrama Mahasantri Putra & Putri.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onOpenPsb && onOpenPsb('Salafiyah & Mahasantri')}
                className="w-full sm:w-auto px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold rounded-xl text-xs transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                id="btn-cta-daftar-mahasantri"
              >
                <span>Daftar Asrama Mahasantri</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
