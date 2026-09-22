import React from 'react';
import { 
  X, 
  MessageCircle, 
  ExternalLink, 
  ShieldCheck, 
  UserCheck, 
  PhoneCall, 
  Sparkles,
  Users
} from 'lucide-react';
import { usePesantren } from '../context/PesantrenContext.tsx';
import { PESANTREN_INFO } from '../data/pesantrenData.ts';

interface ContactWhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactWhatsAppModal: React.FC<ContactWhatsAppModalProps> = ({ isOpen, onClose }) => {
  const { contacts } = usePesantren();

  if (!isOpen) return null;

  const cleanNumber = (num: string) => num.replace(/[^0-9]/g, '');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center pb-4 border-b border-stone-100">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3 shadow-inner">
            <MessageCircle className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-stone-900">
            Layanan Komunikasi & WhatsApp Resmi
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            Pondok Pesantren Miftahul Falah &bull; Silakan pilih kontak pengurus yang ingin Anda hubungi:
          </p>
        </div>

        {/* Contact Choices */}
        <div className="space-y-3 mt-5">
          
          {/* 1. Official WhatsApp */}
          <a
            href={`https://wa.me/${cleanNumber(contacts.officialWhatsapp)}?text=Assalamu'alaikum%20Admin%20Sekretariat%20Ponpes%20Miftahul%20Falah,%20saya%20ingin%20berkonsultasi`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl border-2 border-emerald-600/30 hover:border-emerald-600 bg-emerald-50/50 hover:bg-emerald-50 transition-all flex items-center justify-between group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-emerald-950">WhatsApp Official Pondok</span>
                  <span className="px-1.5 py-0.2 rounded bg-amber-400 text-[9px] font-extrabold text-stone-950 uppercase">Utama</span>
                </div>
                <div className="text-[11px] text-stone-500 font-mono mt-0.5">{contacts.officialWhatsapp}</div>
                <div className="text-[10px] text-emerald-800 mt-0.5">Informasi PSB, Administrasi & Layanan Umum</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-emerald-700 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* 2. Rois Santri Putra */}
          <a
            href={`https://wa.me/${cleanNumber(contacts.roisWhatsapp)}?text=Assalamu'alaikum%20${encodeURIComponent(contacts.roisName)},%20saya%20ingin%20konsultasi%20terkait%20kegiatan%20santri%20putra`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl border border-stone-200 hover:border-blue-400 bg-white hover:bg-blue-50/40 transition-all flex items-center justify-between group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-stone-900">{contacts.roisName}</div>
                <div className="text-[10px] text-blue-700 font-semibold">{contacts.roisTitle}</div>
                <div className="text-[11px] text-stone-500 font-mono mt-0.5">{contacts.roisWhatsapp}</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-blue-700 group-hover:translate-x-0.5 transition-all" />
          </a>

          {/* 3. Roisah Santri Putri */}
          <a
            href={`https://wa.me/${cleanNumber(contacts.roisahWhatsapp)}?text=Assalamu'alaikum%20${encodeURIComponent(contacts.roisahName)},%20saya%20ingin%20konsultasi%20terkait%20kegiatan%20santri%20putri`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl border border-stone-200 hover:border-pink-400 bg-white hover:bg-pink-50/40 transition-all flex items-center justify-between group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-800 flex items-center justify-center font-bold text-sm shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-stone-900">{contacts.roisahName}</div>
                <div className="text-[10px] text-pink-700 font-semibold">{contacts.roisahTitle}</div>
                <div className="text-[11px] text-stone-500 font-mono mt-0.5">{contacts.roisahWhatsapp}</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-pink-700 group-hover:translate-x-0.5 transition-all" />
          </a>

        </div>

        <div className="mt-5 text-center text-[11px] text-stone-400 border-t border-stone-100 pt-3">
          Layanan chat aktif setiap hari pada jam operasional sekretariat (07.30 - 21.00 WIB).
        </div>
      </div>
    </div>
  );
};
