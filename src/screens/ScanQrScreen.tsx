import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Zap, ZapOff, Image, Keyboard, Home, Bot, CreditCard, BookOpen, User } from 'lucide-react';
import { Screen } from '../types';

interface ScanQrScreenProps {
  onBack: () => void;
  onQrScanned: () => void;
  onNavigate: (screen: Screen) => void;
}

export default function ScanQrScreen({ onBack, onQrScanned, onNavigate }: ScanQrScreenProps) {
  const [flashOn, setFlashOn] = useState(false);

  // Auto trigger scan success after 3.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onQrScanned();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onQrScanned]);

  return (
    <div className="flex h-full w-full flex-col bg-black text-left select-none relative overflow-hidden">
      {/* Top Header */}
      <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b-[1.5px] border-white/20 bg-black/85 px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-full transition-all active:scale-95 text-white cursor-pointer"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <span className="font-display text-lg font-extrabold tracking-tighter text-white">SCAN QR</span>
        </div>
        <button
          onClick={() => setFlashOn(!flashOn)}
          className="p-2 hover:bg-white/10 rounded-full transition-all text-white"
        >
          {flashOn ? <Zap className="h-5 w-5 text-[#bff521] fill-current" /> : <ZapOff className="h-5 w-5" />}
        </button>
      </header>

      {/* Camera feed canvas simulation */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-36 pt-6 text-center">
        {/* Animated Scan Box Frame */}
        <div className="relative w-72 h-72 border-[1.5px] border-white/35 rounded-xl overflow-hidden bg-zinc-950 flex items-center justify-center">
          {/* Laser Line */}
          <div className="absolute w-full h-[3px] bg-[#bff521] shadow-[0_0_12px_4px_#bff521] animate-bounce-slow top-0"></div>

          {/* Target Brackets */}
          <div className="absolute top-4 left-4 h-6 w-6 border-t-[3px] border-l-[3px] border-[#bff521]"></div>
          <div className="absolute top-4 right-4 h-6 w-6 border-t-[3px] border-r-[3px] border-[#bff521]"></div>
          <div className="absolute bottom-4 left-4 h-6 w-6 border-b-[3px] border-l-[3px] border-[#bff521]"></div>
          <div className="absolute bottom-4 right-4 h-6 w-6 border-b-[3px] border-r-[3px] border-[#bff521]"></div>

          {/* Camera Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

          {/* AI Scanner Ring element */}
          <div className="w-40 h-40 rounded-full border border-dashed border-white/15 animate-spin [animation-duration:15s] flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border border-dashed border-white/25 animate-spin [animation-duration:8s]"></div>
          </div>

          {/* Simulating QR inside */}
          <div className="absolute w-28 h-28 opacity-40 bg-zinc-800 border border-white/25 p-2 flex flex-col justify-between">
            <div className="flex justify-between">
              <div className="w-6 h-6 border-2 border-white"></div>
              <div className="w-6 h-6 border-2 border-white"></div>
            </div>
            <div className="flex justify-between">
              <div className="w-6 h-6 border-2 border-white"></div>
              <div className="w-4 h-4 bg-white/40"></div>
            </div>
          </div>
        </div>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
          Align UPI QR code within the frame
        </p>

        {/* Action button triggers */}
        <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-sm">
          <button
            onClick={onQrScanned}
            className="h-14 border-[1.5px] border-white text-white font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all cursor-pointer"
          >
            <Keyboard className="h-4 w-4" />
            Enter UPI ID
          </button>
          <button
            onClick={onQrScanned}
            className="h-14 border-[1.5px] border-white text-white font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all cursor-pointer"
          >
            <Image className="h-4 w-4" />
            Upload Photo
          </button>
        </div>
      </div>

      {/* Bottom Nav Bar with "Pay" active */}
      <nav className="absolute bottom-0 left-0 w-full h-[72px] bg-black border-t-[1.5px] border-white/20 flex justify-around items-stretch z-40 shadow-[0_-4px_0_0_rgba(255,255,255,0.1)]">
        {/* Home */}
        <button
          onClick={() => onNavigate(Screen.DASHBOARD)}
          className="flex flex-col items-center justify-center text-zinc-400 h-full px-4 hover:bg-white/5 transition-colors"
        >
          <Home className="h-5 w-5" />
          <span className="font-mono text-[10px] uppercase tracking-widest mt-1">Home</span>
        </button>
        {/* AI */}
        <button
          onClick={() => onNavigate(Screen.CHAT)}
          className="flex flex-col items-center justify-center text-zinc-400 h-full px-4 hover:bg-white/5 transition-colors"
        >
          <Bot className="h-5 w-5" />
          <span className="font-mono text-[10px] uppercase tracking-widest mt-1">AI</span>
        </button>
        {/* Pay (Active) */}
        <button className="flex flex-col items-center justify-center bg-[#bff521] text-black border-x-[1.5px] border-white/20 h-full px-4 translate-y-[-2px]">
          <CreditCard className="h-5 w-5 fill-current" />
          <span className="font-mono text-[10px] uppercase font-bold tracking-widest mt-1">Pay</span>
        </button>
        {/* History */}
        <button
          onClick={() => onNavigate(Screen.GUIDE)}
          className="flex flex-col items-center justify-center text-zinc-400 h-full px-4 hover:bg-white/5 transition-colors"
        >
          <BookOpen className="h-5 w-5" />
          <span className="font-mono text-[10px] uppercase tracking-widest mt-1">History</span>
        </button>
        {/* Profile */}
        <button
          onClick={() => onNavigate(Screen.UPI_SUPPORT)}
          className="flex flex-col items-center justify-center text-zinc-400 h-full px-4 hover:bg-white/5 transition-colors"
        >
          <User className="h-5 w-5" />
          <span className="font-mono text-[10px] uppercase tracking-widest mt-1">Profile</span>
        </button>
      </nav>
    </div>
  );
}
