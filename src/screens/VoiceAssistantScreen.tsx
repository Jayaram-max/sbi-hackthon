import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Plus, Mic, ChevronDown, Keyboard, Loader2 } from 'lucide-react';
import { Screen } from '../types';

interface VoiceAssistantScreenProps {
  onBack: () => void;
  onNavigate: (screen: Screen) => void;
}

export default function VoiceAssistantScreen({ onBack, onNavigate }: VoiceAssistantScreenProps) {
  const [isThinking, setIsThinking] = useState(false);
  const [dots, setDots] = useState('');

  useEffect(() => {
    if (isThinking) {
      const interval = setInterval(() => {
        setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
      }, 500);

      const timer = setTimeout(() => {
        setIsThinking(false);
        // Automatically navigate to SEND MONEY screen since the voice context is "Transfer money to Jayaram"
        onNavigate(Screen.SEND_MONEY);
      }, 2500);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [isThinking, onNavigate]);

  const handleMicClick = () => {
    setIsThinking(true);
  };

  return (
    <div className="flex h-full w-full flex-col bg-white overflow-hidden select-none relative text-left">
      {/* Top App Bar */}
      <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b-[1.5px] border-black bg-[#f9f9f9] px-6">
        <button
          onClick={onBack}
          aria-label="Back"
          className="flex h-10 w-10 items-center justify-center hover:bg-gray-100 rounded-full transition-transform active:scale-95"
        >
          <ArrowLeft className="h-5 w-5 text-black" />
        </button>
        <h1 className="font-display text-lg font-extrabold uppercase tracking-tight text-black">VOICE ASSISTANT</h1>
        <button
          aria-label="Settings"
          className="flex h-10 w-10 border-[1.5px] border-black flex items-center justify-center hover:bg-[#bff521]/10 rounded-lg active:scale-95 transition-transform"
        >
          <Plus className="h-5 w-5 text-black" />
        </button>
      </header>

      {/* Main Canvas */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pb-28 pt-8">
        {/* Voice rings viz */}
        <div className="relative w-full aspect-square max-w-[320px] flex items-center justify-center">
          {/* Animated voice rings */}
          {!isThinking && (
            <>
              <div className="voice-ring ring-1 w-32 h-32"></div>
              <div className="voice-ring ring-2 w-32 h-32"></div>
              <div className="voice-ring ring-3 w-32 h-32"></div>
            </>
          )}

          {/* Central mic bubble */}
          <button
            onClick={handleMicClick}
            className={`relative w-44 h-44 rounded-full border-[1.5px] border-black bg-white flex items-center justify-center neo-shadow z-10 hover:scale-102 hover:shadow-[#bff521] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer ${
              isThinking ? 'scale-95 shadow-none' : ''
            }`}
          >
            <div className="w-28 h-22 w-28 h-28 rounded-full bg-[#bff521] flex items-center justify-center">
              <Mic className="h-16 w-16 text-black stroke-[1.5]" />
            </div>
          </button>
        </div>

        {/* Listening feedback */}
        <div className="mt-8 text-center space-y-2">
          <h2 className="font-display text-2xl font-bold text-black animate-pulse">
            {isThinking ? 'Processing...' : 'Listening...'}
          </h2>
          <p className="font-sans text-sm text-[#444748]">
            {isThinking ? 'Analyzing speech pattern' : 'You can speak now'}
          </p>
        </div>

        {/* Language dropdown */}
        <div className="mt-8">
          <button className="px-6 py-3 border-[1.5px] border-black bg-white flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold hover:bg-gray-100 transition-colors active:translate-y-0.5 neo-shadow">
            <span>ENGLISH</span>
            <ChevronDown className="h-4 w-4 text-black" />
          </button>
        </div>
      </main>

      {/* Bottom Floating context box */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center px-6 z-30">
        <div
          onClick={handleMicClick}
          className="w-full max-w-md bg-white border-[1.5px] border-black p-4 flex items-center justify-between gap-4 neo-shadow cursor-pointer hover:-translate-y-0.5 active:translate-y-0 transition-transform"
        >
          <div className="flex-1 min-w-0">
            <p className="font-mono text-[9px] uppercase text-[#444748] tracking-widest font-semibold opacity-60">
              Recognized Context
            </p>
            <p className="font-sans text-[14px] font-bold text-black truncate mt-0.5">
              "Transfer money to Jayaram..."
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(Screen.CHAT);
            }}
            className="w-12 h-12 bg-[#bff521] border-[1.5px] border-black flex items-center justify-center shrink-0 hover:bg-black hover:text-white transition-colors"
          >
            <Keyboard className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* AI Thinking Overlay */}
      {isThinking && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-[100] flex items-center justify-center">
          <div className="p-6 border-[1.5px] border-black bg-white neo-shadow max-w-[280px] w-full text-center space-y-4">
            <div className="flex items-center gap-1.5 justify-center">
              <div className="w-2.5 h-2.5 bg-[#bff521] rounded-full border border-black animate-bounce"></div>
              <div className="w-2.5 h-2.5 bg-[#bff521] rounded-full border border-black animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-2.5 h-2.5 bg-[#bff521] rounded-full border border-black animate-bounce [animation-delay:0.4s]"></div>
            </div>
            <div>
              <p className="font-mono text-xs uppercase font-bold text-black tracking-widest">
                AI is processing{dots}
              </p>
              <p className="font-sans text-xs text-[#444748] mt-1">
                Checking your transaction history...
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
