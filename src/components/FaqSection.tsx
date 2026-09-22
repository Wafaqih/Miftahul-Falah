import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  Search 
} from 'lucide-react';
import { FAQ_DATA, PESANTREN_INFO } from '../data/pesantrenData.ts';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQ_DATA.filter(
    f => f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
         f.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
         f.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Tanya Jawab (FAQ)
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-3 text-stone-600 text-base">
            Informasi penting bagi para orang tua dan calon santri seputar sistem pengasuhan, kedisiplinan, dan fasilitas Pondok Pesantren Miftahul Falah.
          </p>

          {/* Search Box */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari pertanyaan (misal: HP, perizinan, beasiswa)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-300 rounded-2xl text-xs sm:text-sm font-medium focus:ring-2 focus:ring-emerald-500 outline-none shadow-xs"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/80 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 shrink-0">
                        {faq.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-stone-900 leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="text-stone-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5 text-emerald-700" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-stone-500 text-xs">
              Tidak ada pertanyaan yang sesuai dengan pencarian Anda.
            </div>
          )}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center p-6 bg-white rounded-3xl border border-stone-200 shadow-xs">
          <h4 className="text-base font-bold text-stone-900">Masih Memiliki Pertanyaan Lain?</h4>
          <p className="text-xs text-stone-500 mt-1 max-w-lg mx-auto">
            Tim Layanan Informasi & Sekretariat PSB Ponpes Miftahul Falah siap membantu menjawab pertanyaan Anda melalui WhatsApp resmi.
          </p>
          <div className="mt-4 flex justify-center">
            <a
              href={`https://wa.me/${PESANTREN_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Assalamu'alaikum%20Panitia%20Ponpes%20Miftahul%20Falah,%20saya%20ingin%20berkonsultasi%20terkait%20pesantren`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-sm"
              id="btn-faq-consult-wa"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Hubungi Panitia via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
