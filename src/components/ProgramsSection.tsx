import React, { useState } from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Check, 
  X, 
  Award, 
  Sparkles,
  Layers
} from 'lucide-react';
import { PROGRAMS_DATA } from '../data/pesantrenData.ts';
import { ProgramItem } from '../types.ts';

interface ProgramsSectionProps {
  onSelectProgramToRegister: (programName: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgramToRegister }) => {
  const [activeModalProgram, setActiveModalProgram] = useState<ProgramItem | null>(null);

  return (
    <section id="program" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Jenjang & Kurikulum Terpadu
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Program Pendidikan Unggulan
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            Kajian mendalam literatur Islam klasik (turats) serta pembentukan kader ulama dan da'i yang berakhlakul karimah.
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="max-w-2xl mx-auto">
          {PROGRAMS_DATA.map((program) => (
            <div 
              key={program.id}
              className="bg-stone-50 rounded-3xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image & Badge */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-stone-200">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent"></div>
                  
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-800/90 backdrop-blur-md text-amber-300 text-xs font-bold border border-amber-400/30">
                    {program.badge}
                  </span>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-arabic text-sm text-amber-300 font-bold">{program.arabicTitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-xs text-stone-500 font-medium mt-1">
                    {program.subtitle}
                  </p>
                  <p className="text-sm text-stone-600 mt-3 line-clamp-3 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Program Highlights */}
                  <div className="mt-4 pt-4 border-t border-stone-200/80 flex flex-wrap gap-1.5">
                    {program.highlights.map((h) => (
                      <span key={h} className="text-[11px] font-medium px-2.5 py-1 bg-white text-emerald-800 rounded-lg border border-stone-200">
                        • {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Program Detail Modal */}
        {activeModalProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200">
              
              {/* Modal Header */}
              <div className="p-6 bg-gradient-to-r from-emerald-900 to-emerald-950 text-white relative">
                <button
                  onClick={() => setActiveModalProgram(null)}
                  className="absolute top-4 right-4 p-2 text-stone-300 hover:text-white rounded-full hover:bg-emerald-800/80 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 block mb-1">
                  {activeModalProgram.badge}
                </span>
                <h3 className="text-2xl font-bold">{activeModalProgram.title}</h3>
                <p className="font-arabic text-amber-300 text-lg mt-1">{activeModalProgram.arabicTitle}</p>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">Deskripsi Lengkap</h4>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    {activeModalProgram.description}
                  </p>
                </div>

                {activeModalProgram.targetHafalan && (
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                    <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">Target Utama:</span>
                    <p className="text-sm font-semibold text-amber-950 mt-0.5">{activeModalProgram.targetHafalan}</p>
                  </div>
                )}

                {/* Kurikulum & Materi */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-emerald-700" />
                    Silabus & Kurikulum Inti
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalProgram.kurikulum.map((item, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Output Lulusan */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-emerald-700" />
                    Profil Output Lulusan
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                    {activeModalProgram.outputLulusan.map((output, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{output}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal Footer CTA */}
                <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-end gap-3">
                  <button
                    onClick={() => setActiveModalProgram(null)}
                    className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-stone-700 hover:bg-stone-100 rounded-xl"
                  >
                    Tutup
                  </button>
                  <button
                    onClick={() => {
                      const name = activeModalProgram.title;
                      setActiveModalProgram(null);
                      onSelectProgramToRegister(name);
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl shadow-md flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    Daftar Santri untuk Program Ini
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
