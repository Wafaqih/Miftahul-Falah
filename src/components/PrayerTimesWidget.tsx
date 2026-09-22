import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Volume2, 
  VolumeX, 
  Check, 
  Compass, 
  CalendarDays,
  Sparkles
} from 'lucide-react';

interface PrayerSchedule {
  name: string;
  arabic: string;
  time: string; // HH:mm
  minutes: number;
}

export const PrayerTimesWidget: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [nextPrayer, setNextPrayer] = useState<{ name: string; arabic: string; remaining: string; time: string } | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioFeedback, setAudioFeedback] = useState<string | null>(null);

  // Jadwal Sholat Standar Zona Waktu Barat (WIB)
  const prayers: PrayerSchedule[] = [
    { name: 'Imsak', arabic: 'الإمساك', time: '04:18', minutes: 4 * 60 + 18 },
    { name: 'Subuh', arabic: 'الصبح', time: '04:28', minutes: 4 * 60 + 28 },
    { name: 'Terbit', arabic: 'الشروق', time: '05:45', minutes: 5 * 60 + 45 },
    { name: 'Dhuha', arabic: 'الضحى', time: '06:12', minutes: 6 * 60 + 12 },
    { name: 'Dzuhur', arabic: 'الظهر', time: '11:54', minutes: 11 * 60 + 54 },
    { name: 'Ashar', arabic: 'العصر', time: '15:06', minutes: 15 * 60 + 6 },
    { name: 'Maghrib', arabic: 'المغرب', time: '18:02', minutes: 18 * 60 + 2 },
    { name: 'Isya', arabic: 'العشاء', time: '19:12', minutes: 19 * 60 + 12 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);

      const currentMinutes = now.getHours() * 60 + now.getMinutes();
      const currentSeconds = now.getSeconds();

      // Find next prayer
      let target = prayers.find(p => p.minutes > currentMinutes);
      let diffMinutes = 0;

      if (!target) {
        // After Isya, next is tomorrow's Imsak
        target = prayers[0];
        diffMinutes = (24 * 60 - currentMinutes) + target.minutes;
      } else {
        diffMinutes = target.minutes - currentMinutes;
      }

      const totalSecondsRemaining = diffMinutes * 60 - currentSeconds;
      const hours = Math.floor(Math.max(0, totalSecondsRemaining) / 3600);
      const minutes = Math.floor((Math.max(0, totalSecondsRemaining) % 3600) / 60);
      const seconds = Math.max(0, totalSecondsRemaining) % 60;

      const remainingFormatted = `${hours > 0 ? `${hours}j ` : ''}${minutes}m ${seconds < 10 ? '0' : ''}${seconds}d`;

      setNextPrayer({
        name: target.name,
        arabic: target.arabic,
        time: target.time,
        remaining: remainingFormatted,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Web Audio API Adzan Tone Simulator (harmless, pristine sound synthesis)
  const playAdzanChime = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();

      setIsAudioPlaying(true);
      setAudioFeedback('Pengingat Waktu Sholat Berbunyi...');

      const tones = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 melodic spiritual chord
      tones.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.35);

        gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.35);
        gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + idx * 0.35 + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.35 + 1.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.35);
        osc.stop(ctx.currentTime + idx * 0.35 + 2.0);
      });

      setTimeout(() => {
        setIsAudioPlaying(false);
        setAudioFeedback(null);
      }, 3000);
    } catch {
      setIsAudioPlaying(false);
      setAudioFeedback(null);
    }
  };

  // Format Islamic Date (Estimated Hijri based on 1447 H)
  const hijriDay = 21;
  const hijriMonth = "Sya'ban";
  const hijriYear = "1447 H";

  return (
    <section className="bg-emerald-900 text-white py-6 px-4 relative overflow-hidden border-y border-emerald-800">
      {/* Subtle Islamic geometric pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Header & Hijri Info */}
          <div className="flex items-center gap-4 text-center lg:text-left">
            <div className="w-12 h-12 rounded-xl bg-emerald-800/80 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-inner">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">Jadwal Sholat Digital</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-800 text-emerald-200 border border-emerald-700">Zona WIB</span>
              </div>
              <div className="text-lg font-bold text-white flex items-center gap-2 justify-center lg:justify-start">
                <span className="text-[11px]">{hijriDay} {hijriMonth} {hijriYear}</span>
                <span className="text-stone-400 font-normal text-[11px]">/ {currentTime.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <p className="text-xs text-emerald-200/90 font-arabic pt-[13px] text-right">
                أَقِمِ الصَّلَاةَ لِدُلُوكِ الشَّمْسِ إِلَىٰ غَسَقِ اللَّيْلِ
              </p>
            </div>
          </div>

          {/* Next Prayer Highlight Box */}
          {nextPrayer && (
            <div className="bg-emerald-950/90 border border-amber-400/50 rounded-2xl px-5 py-3 flex items-center gap-4 shadow-lg -mt-[8px]">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300 block">Menuju Waktu Sholat:</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-white">{nextPrayer.name}</span>
                  <span className="font-arabic text-amber-300 text-lg">({nextPrayer.arabic})</span>
                  <span className="text-xs text-stone-300">Pukul {nextPrayer.time} WIB</span>
                </div>
              </div>
              <div className="pl-4 border-l border-emerald-800 text-right">
                <span className="text-[10px] text-emerald-300 block">Hitung Mundur:</span>
                <span className="text-base font-mono font-bold text-amber-400 tracking-tight">{nextPrayer.remaining}</span>
              </div>
            </div>
          )}

          {/* Audio Adzan simulator trigger */}
          <div className="flex items-center gap-2">
            <button
              onClick={playAdzanChime}
              className="px-3 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-700 border border-emerald-600/60 text-xs font-semibold text-emerald-100 flex items-center gap-1.5 transition-all cursor-pointer shadow-sm hover:text-white"
              title="Tes Notifikasi Suara Adzan"
              id="btn-adzan-chime"
            >
              {isAudioPlaying ? <VolumeX className="w-4 h-4 text-amber-400 animate-pulse" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
              <span>{isAudioPlaying ? 'Membunyikan...' : 'Bel Sholat'}</span>
            </button>
            {audioFeedback && (
              <span className="text-xs text-amber-300 animate-pulse">{audioFeedback}</span>
            )}
          </div>
        </div>

        {/* Prayer Time Cards Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5 mt-5">
          {prayers.map((prayer) => {
            const isNext = nextPrayer?.name === prayer.name;
            return (
              <div
                key={prayer.name}
                className={`rounded-xl p-2.5 text-center transition-all ${
                  isNext
                    ? 'bg-amber-500/20 border-2 border-amber-400 text-white shadow-md scale-102'
                    : 'bg-emerald-950/60 border border-emerald-800/70 text-emerald-100 hover:bg-emerald-950/80'
                }`}
              >
                <span className="text-[10px] font-semibold block text-stone-300 uppercase tracking-wider">{prayer.name}</span>
                <span className="font-arabic text-xs text-amber-300/80 block leading-tight">{prayer.arabic}</span>
                <span className="text-base sm:text-lg font-bold font-mono tracking-tight text-white block mt-0.5">{prayer.time}</span>
                {isNext && (
                  <span className="inline-block mt-1 text-[9px] bg-amber-400 text-emerald-950 font-bold px-1.5 py-0.2 rounded-full">
                    Berikutnya
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
