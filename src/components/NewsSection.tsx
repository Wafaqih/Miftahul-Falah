import React, { useState } from 'react';
import { 
  Newspaper, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  X, 
  BookOpen, 
  Share2,
  Check
} from 'lucide-react';
import { PESANTREN_INFO } from '../data/pesantrenData.ts';
import { NewsItem } from '../types.ts';
import { usePesantren } from '../context/PesantrenContext.tsx';

export const NewsSection: React.FC = () => {
  const { news } = usePesantren();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);
  const [shareFeedback, setShareFeedback] = useState(false);

  const categories = [
    { id: 'all', label: 'Semua Warta' },
    { id: 'Kabar Pesantren', label: 'Kabar Pesantren' },
    { id: 'Kajian & Tausiyah', label: 'Kajian & Tausiyah' },
    { id: 'Prestasi', label: 'Prestasi Santri' },
    { id: 'Pengumuman', label: 'Pengumuman Resmi' },
  ];

  const filteredNews = selectedCategory === 'all'
    ? news
    : news.filter(n => n.category === selectedCategory);

  const handleShare = (article: NewsItem) => {
    const url = `https://${PESANTREN_INFO.domain}/#berita`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${article.title} - Baca di: ${url}`);
      setShareFeedback(true);
      setTimeout(() => setShareFeedback(false), 2000);
    }
  };

  return (
    <section id="berita" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Newspaper className="w-3.5 h-3.5" />
            Warta & Kajian Islam
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Kabar Miftahul Falah Terkini
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            Dokumentasi agenda khidmat pesantren, raihan prestasi santri, artikel tausiyah asatidz, dan pengumuman resmi yayasan.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredNews.map((news) => (
            <article 
              key={news.id}
              className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 hover:border-emerald-300 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-stone-200">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-emerald-900/90 text-amber-300 text-[11px] font-bold">
                    {news.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 text-[11px] text-stone-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {news.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {news.readTime}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-stone-900 group-hover:text-emerald-800 transition-colors line-clamp-2 leading-snug">
                    {news.title}
                  </h3>

                  <p className="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed">
                    {news.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => setActiveArticle(news)}
                  className="w-full py-2 bg-white hover:bg-stone-100 text-emerald-800 text-xs font-bold rounded-xl border border-stone-200 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Read Article Full Modal */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/70 backdrop-blur-xs">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200">
              
              <div className="relative h-60 sm:h-72 overflow-hidden bg-stone-900">
                <img 
                  src={activeArticle.image} 
                  alt={activeArticle.title}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
                
                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/80 text-white hover:bg-stone-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-3 py-1 rounded-full bg-emerald-700 text-amber-300 text-xs font-bold mb-2 inline-block">
                    {activeArticle.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold leading-tight">
                    {activeArticle.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex flex-wrap items-center justify-between text-xs text-stone-500 border-b border-stone-100 pb-3 gap-2">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 font-medium text-stone-700">
                      <User className="w-3.5 h-3.5 text-emerald-700" />
                      {activeArticle.author}
                    </span>
                    <span>•</span>
                    <span>{activeArticle.date}</span>
                  </div>

                  <button
                    onClick={() => handleShare(activeArticle)}
                    className="flex items-center gap-1 text-emerald-700 font-semibold hover:text-emerald-900 cursor-pointer"
                  >
                    {shareFeedback ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>{shareFeedback ? 'Tersalin!' : 'Bagikan'}</span>
                  </button>
                </div>

                {/* Arabic Quote Box if exists */}
                {activeArticle.arabicQuote && (
                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                    <p className="font-arabic text-xl sm:text-2xl text-emerald-950 font-bold leading-relaxed">
                      {activeArticle.arabicQuote.text}
                    </p>
                    <p className="text-xs text-emerald-800 italic">
                      {activeArticle.arabicQuote.translation}
                    </p>
                  </div>
                )}

                <div className="text-sm sm:text-base text-stone-700 leading-relaxed space-y-3">
                  <p>{activeArticle.content}</p>
                  <p className="text-stone-600 text-xs sm:text-sm">
                    Pondok Pesantren Miftahul Falah senantiasa membuka pintu selebar-lebarnya bagi kaum muslimin yang ingin bersilaturahmi atau mendaftarkan putra-putrinya melalui portal resmi kami di <strong>{PESANTREN_INFO.domain}</strong>.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex justify-end">
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="px-6 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl"
                  >
                    Tutup Bacaan
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
