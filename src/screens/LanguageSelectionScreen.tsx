import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, HelpCircle, CheckCircle2, Circle, Info, ArrowRight } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  isDefault?: boolean;
}

const LANGUAGES: Language[] = [
  { code: 'EN', name: 'English', nativeName: 'English', isDefault: true },
  { code: 'HI', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'TA', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'TE', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'BN', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'KN', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
];

interface LanguageSelectionScreenProps {
  onBack: () => void;
  onNext: () => void;
}

export default function LanguageSelectionScreen({ onBack, onNext }: LanguageSelectionScreenProps) {
  const [selectedLang, setSelectedLang] = useState('EN');

  return (
    <div className="flex h-full w-full flex-col bg-white">
      {/* Top Header */}
      <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b-[1.5px] border-black bg-[#f9f9f9] px-6">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="flex h-10 w-10 items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="h-5 w-5 text-black" />
          </button>
          <span className="font-display text-xl font-extrabold uppercase tracking-tighter text-black">SBI AI</span>
        </div>
        <button className="flex h-10 w-10 items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
          <HelpCircle className="h-5 w-5 text-black" />
        </button>
      </header>

      {/* Main content scroll area */}
      <div className="flex-1 overflow-y-auto px-6 pb-32 pt-8 text-left">
        {/* Title */}
        <section className="mb-6">
          <h1 className="font-display text-3xl font-extrabold uppercase leading-[1.1] text-black">
            Choose your
            <br />
            language
          </h1>
          <p className="mt-2 font-sans text-sm text-[#444748]">
            Select the language you prefer for voice and text banking assistance.
          </p>
        </section>

        {/* Language Cards Grid */}
        <div className="grid grid-cols-2 gap-4">
          {LANGUAGES.map((lang) => {
            const isSelected = selectedLang === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => setSelectedLang(lang.code)}
                className={`neo-border p-4 flex flex-col items-start justify-between gap-4 text-left transition-all ${
                  isSelected
                    ? 'bg-[#bff521] text-black neo-shadow'
                    : 'bg-white text-black neo-shadow hover:-translate-y-0.5'
                }`}
                style={{ minHeight: '130px' }}
              >
                <div className="flex w-full items-start justify-between">
                  <span className={`font-mono text-[12px] uppercase tracking-widest font-semibold ${
                    isSelected ? 'text-black/60' : 'text-[#444748]/60'
                  }`}>
                    {lang.code}
                  </span>
                  {isSelected ? (
                    <CheckCircle2 className="h-5 w-5 text-black fill-current" />
                  ) : (
                    <Circle className="h-5 w-5 text-[#747878]" />
                  )}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold leading-none">{lang.nativeName}</h3>
                  <p className={`font-mono text-[11px] mt-1 ${
                    isSelected ? 'text-black/80' : 'text-[#444748]'
                  }`}>
                    {lang.name} {lang.isDefault && '(Default)'}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Info Box */}
        <div className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-dashed border-[#c4c7c7] bg-[#f3f3f4] p-3">
          <Info className="h-4 w-4 text-[#444748] shrink-0" />
          <span className="font-mono text-[11px] text-[#444748]">More languages coming soon</span>
        </div>
      </div>

      {/* Floating Bottom Action bar */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white via-white/95 to-transparent px-6 pb-6 pt-10">
        <button
          onClick={onNext}
          className="flex h-16 w-full items-center justify-between rounded-xl border-[1.5px] border-black bg-black px-6 text-white transition-all neo-shadow-accent hover:-translate-y-0.5 active:translate-y-0"
        >
          <span className="font-display text-lg font-bold tracking-tight">CONTINUE</span>
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      {/* Decorative ornaments */}
      <div className="fixed -bottom-10 -right-10 -z-10 h-40 w-40 rounded-full bg-[#bff521]/10 blur-3xl"></div>
      <div className="fixed top-20 -left-10 -z-10 h-32 w-32 rounded-full bg-[#bff521]/5 blur-3xl"></div>
    </div>
  );
}
