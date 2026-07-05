import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

interface SplashScreenProps {
  onNext: () => void;
}

export default function SplashScreen({ onNext }: SplashScreenProps) {
  return (
    <div
      id="splash-screen-root"
      className="relative flex h-full w-full cursor-pointer flex-col justify-between overflow-y-auto bg-[#ffffff] p-6 select-none"
      onClick={onNext}
    >
      {/* Background Subtle Grid Pattern */}
      <div className="bg-grid-pattern absolute inset-0 pointer-events-none opacity-[0.03]"></div>

      {/* Ambient AI Glow (centered in background) */}
      <div className="ai-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-64 w-64 rounded-full bg-[#bff521] opacity-20 blur-[40px]"></div>

      {/* Blueprint Visual Lines */}
      <div className="absolute top-0 left-8 h-16 w-[1.5px] bg-black opacity-10"></div>
      <div className="absolute bottom-0 right-8 h-16 w-[1.5px] bg-black opacity-10"></div>

      {/* Top Header Row with Logo */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 flex w-full justify-between items-center pt-2"
      >
        <div className="flex items-center gap-2">
          {/* SBI Emblem Shape */}
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-[1.5px] border-black bg-white">
            <div className="absolute -bottom-5 h-10 w-10 bg-black"></div>
            <div className="z-10 h-3.5 w-3.5 rounded-full bg-white"></div>
          </div>
          <span className="font-display text-xl font-bold uppercase tracking-tighter text-black">SBI</span>
        </div>
        <div className="font-mono text-[9px] uppercase tracking-widest text-[#747878] font-bold">
          [ CORE AI_SECURE ]
        </div>
      </motion.div>

      {/* Middle Core Content Area */}
      <div className="z-10 flex flex-1 flex-col items-center justify-center text-center py-6">
        {/* Headline Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mb-4"
        >
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-black flex flex-col leading-none">
            <span className="text-black">AI BANKING</span>
            <span className="mt-2 font-mono text-[11px] font-bold tracking-[0.25em] text-[#4d6700] uppercase">
              Companion
            </span>
          </h1>
        </motion.div>

        {/* Tagline / Descriptor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-sans text-[14px] leading-[22px] text-[#444748] max-w-[280px]">
            Your institutional banking, reimagined through high-precision intelligence.
          </p>
        </motion.div>
      </div>

      {/* Bottom Footer Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="z-10 flex flex-col w-full space-y-5 pt-2"
      >
        {/* Tap screen hint */}
        <div className="text-center text-[10px] font-mono uppercase tracking-widest text-gray-400 animate-pulse pointer-events-none">
          Tap Screen to Continue
        </div>

        {/* Footer info row */}
        <div className="flex w-full justify-between items-end border-t border-black/10 pt-4">
          <div className="flex flex-col text-left">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#747878]">
              Version 4.0.1
            </span>
            <span className="font-mono text-[11px] font-black tracking-normal text-black mt-0.5 uppercase">
              Secure Encryption Active
            </span>
          </div>
          {/* Small accent block */}
          <div className="neo-border flex h-8 w-8 items-center justify-center bg-[#bff521]">
            <ShieldCheck className="h-[18px] w-[18px] text-black" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
