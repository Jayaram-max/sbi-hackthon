import { ArrowLeft, Plus, Smartphone, ChevronLeft, ArrowRight, Bot, Info, Send, ArrowUpRight } from 'lucide-react';
import { Screen } from '../types';

interface ResetStep1ScreenProps {
  onBack: () => void;
  onNext: () => void;
  onNavigate: (screen: Screen) => void;
}

export default function ResetStep1Screen({ onBack, onNext, onNavigate }: ResetStep1ScreenProps) {
  return (
    <div className="flex h-full w-full flex-col bg-white overflow-hidden select-none relative text-left">
      {/* Top Header */}
      <header className="sticky top-0 z-[100] flex h-16 w-full items-center justify-between border-b-[1.5px] border-black bg-[#f9f9f9] px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex h-10 w-10 items-center justify-center border-[1.5px] border-black bg-white rounded hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 text-black" />
          </button>
          <h1 className="font-display text-sm font-extrabold tracking-tighter text-black">
            YONO PASSWORD RESET
          </h1>
        </div>
        <button className="flex h-10 w-10 items-center justify-center border-[1.5px] border-black bg-white rounded hover:bg-gray-100 transition-colors">
          <Plus className="h-5 w-5 text-black" />
        </button>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-6 pb-28 pt-6">
        {/* Progress Section */}
        <section className="mb-6">
          <div className="flex justify-between items-end mb-2">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Step 1 of 4
            </span>
            <span className="font-mono text-[11px] font-black text-black">25% COMPLETE</span>
          </div>
          <div className="h-3 w-full bg-gray-200 border-[1.5px] border-black relative">
            <div className="absolute top-0 left-0 h-full bg-[#bff521] border-r-[1.5px] border-black" style={{ width: '25%' }}></div>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-2">
            <div className="h-1 bg-black"></div>
            <div className="h-1 bg-gray-300"></div>
            <div className="h-1 bg-gray-300"></div>
            <div className="h-1 bg-gray-300"></div>
          </div>
        </section>

        {/* Main Instruction Card */}
        <section className="flex flex-col items-center">
          <div className="w-full bg-[#f9f9f9] border-[1.5px] border-black neo-shadow p-6 flex flex-col items-center text-center">
            {/* Phone simulator inside */}
            <div className="w-full mb-6 flex justify-center">
              <div className="relative w-44 h-72 border-[1.5px] border-black bg-[#eeeeee] p-2 rounded-xl overflow-hidden shadow-inner flex flex-col items-center justify-center">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white p-4">
                  <div className="text-center mb-6">
                    <h4 className="font-display text-2xl font-black text-black leading-none">YONO</h4>
                    <div className="flex items-center gap-1 justify-center mt-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0060A9]"></div>
                      <span className="font-mono text-[9px] font-bold tracking-tight">SBI</span>
                    </div>
                  </div>
                  <button className="border-[1.5px] border-black px-5 py-1.5 font-mono text-[9px] font-semibold bg-white neo-shadow select-none pointer-events-none">
                    LOGIN
                  </button>
                  {/* Click/Touch Cursor Indicator */}
                  <div className="absolute bottom-16 right-6 animate-bounce">
                    <ArrowUpRight className="h-8 w-8 text-black bg-[#bff521] rounded-full border border-black p-1 stroke-[2.5]" />
                  </div>
                </div>
                {/* Speaker Grill */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-400 rounded-full"></div>
              </div>
            </div>

            {/* Instruction Text */}
            <div className="space-y-2">
              <h2 className="font-display text-2xl font-extrabold text-black uppercase">Open YONO App</h2>
              <p className="font-sans text-sm text-[#444748] max-w-[280px] mx-auto leading-relaxed">
                Locate the YONO SBI application on your home screen and click on the{' '}
                <strong className="text-black font-black">'Login'</strong> button to proceed.
              </p>
            </div>

            {/* Dash Box info */}
            <div className="mt-6 w-full flex items-center justify-center gap-2 p-3 bg-[#f3f3f4] border border-dashed border-black/30">
              <Info className="h-4 w-4 text-[#4d6700] shrink-0" />
              <span className="font-mono text-[11px] text-[#444748]">
                Need help finding the app?{' '}
                <button onClick={() => onNavigate(Screen.GUIDE)} className="underline font-bold text-black">
                  Search Guide
                </button>
              </span>
            </div>
          </div>
        </section>

        {/* AI Tip Widget */}
        <aside className="mt-6 p-5 bg-[#bff521] border-[1.5px] border-black neo-shadow flex items-center gap-4">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shrink-0">
            <Bot className="h-5 w-5 text-[#bff521]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-mono text-[10px] uppercase font-black text-black leading-none mb-1">
              AI Tip
            </p>
            <p className="font-sans text-[12px] leading-tight text-black/90 font-medium">
              If you don't have the app, I can send you a download link right now.
            </p>
          </div>
          <button
            onClick={() => onNavigate(Screen.CHAT)}
            className="bg-black text-white font-mono text-[10px] font-bold px-3 py-1.5 active:scale-95 transition-transform"
          >
            LINK
          </button>
        </aside>
      </div>

      {/* Fixed bottom action footer */}
      <footer className="absolute bottom-0 w-full bg-[#f9f9f9] border-t-[1.5px] border-black z-[100] px-6 h-24 flex items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="flex-1 h-14 bg-gray-100 text-black border-[1.5px] border-black font-display font-bold uppercase flex items-center justify-center gap-2 transition-all neo-shadow active:translate-y-0.5 active:shadow-none"
        >
          <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
          BACK
        </button>
        <button
          onClick={onNext}
          className="flex-[1.5] h-14 bg-black text-white border-[1.5px] border-black font-display font-bold uppercase flex items-center justify-center gap-2 transition-all neo-shadow-accent hover:-translate-y-0.5 active:translate-y-0"
        >
          NEXT
          <ArrowRight className="h-5 w-5 stroke-[2.5]" />
        </button>
      </footer>
    </div>
  );
}
