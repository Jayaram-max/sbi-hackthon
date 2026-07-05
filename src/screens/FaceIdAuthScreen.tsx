import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Smile, ShieldCheck, X, Key, ScanFace, CheckCircle2 } from 'lucide-react';

interface FaceIdAuthScreenProps {
  onBack: () => void;
  onSuccess: () => void;
}

export default function FaceIdAuthScreen({ onBack, onSuccess }: FaceIdAuthScreenProps) {
  const [status, setStatus] = useState<'scanning' | 'success'>('scanning');

  useEffect(() => {
    // Automatically transition to success after 3 seconds
    const timer = setTimeout(() => {
      setStatus('success');
      // Navigate to onboarding screen after showing success check for 1.2s
      const successTimer = setTimeout(() => {
        onSuccess();
      }, 1200);
      return () => clearTimeout(successTimer);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onSuccess]);

  return (
    <div className="flex h-full w-full flex-col bg-[#f9f9f9]">
      {/* Top App Bar */}
      <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b-[1.5px] border-black bg-white px-6">
        <div className="flex items-center gap-2">
          <ScanFace className="h-6 w-6 text-black" />
          <h1 className="font-display text-xl font-extrabold uppercase tracking-tighter text-black">SBI AI</h1>
        </div>
        <button
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="h-5 w-5 text-black" />
        </button>
      </header>

      {/* Main Canvas */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-6 text-center select-none">
        {/* Instructions */}
        <div className="mb-8">
          <h2 className="font-display text-3xl font-extrabold text-black mb-2">
            {status === 'scanning' ? 'Authenticating...' : 'Authenticated'}
          </h2>
          <p className="font-sans text-sm text-[#444748] max-w-[280px] mx-auto">
            {status === 'scanning'
              ? 'Please hold your phone steady and look directly at the front camera.'
              : 'Identity successfully verified with secure device biometrics.'}
          </p>
        </div>

        {/* Scan Frame */}
        <div className="relative flex h-72 w-72 items-center justify-center">
          {status === 'scanning' && (
            <>
              <div className="pulse-effect h-64 w-64"></div>
              <div className="pulse-effect pulse-effect-2 h-64 w-64"></div>
            </>
          )}

          {/* Main Ring */}
          <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-[1.5px] border-black bg-white neo-shadow-lg transition-colors duration-500">
            {/* Scan Line */}
            {status === 'scanning' && <div className="scan-line"></div>}

            {/* Central icon */}
            <div className={`z-10 transition-all duration-500 ${
              status === 'success' ? 'text-[#4d6700] scale-110' : 'text-black opacity-80 scale-100'
            }`}>
              {status === 'success' ? (
                <CheckCircle2 className="h-20 w-20 fill-[#bff521]/30" />
              ) : (
                <Smile className="h-20 w-20 stroke-[1.5]" />
              )}
            </div>

            {/* Brackets */}
            <div className={`absolute top-8 left-8 h-6 w-6 border-t-[3px] border-l-[3px] transition-colors duration-500 ${
              status === 'success' ? 'border-[#4d6700]' : 'border-[#bff521]'
            }`}></div>
            <div className={`absolute top-8 right-8 h-6 w-6 border-t-[3px] border-r-[3px] transition-colors duration-500 ${
              status === 'success' ? 'border-[#4d6700]' : 'border-[#bff521]'
            }`}></div>
            <div className={`absolute bottom-8 left-8 h-6 w-6 border-b-[3px] border-l-[3px] transition-colors duration-500 ${
              status === 'success' ? 'border-[#4d6700]' : 'border-[#bff521]'
            }`}></div>
            <div className={`absolute bottom-8 right-8 h-6 w-6 border-b-[3px] border-r-[3px] transition-colors duration-500 ${
              status === 'success' ? 'border-[#4d6700]' : 'border-[#bff521]'
            }`}></div>
          </div>
        </div>

        {/* Secure message card */}
        <div className="mt-8 w-full max-w-sm">
          <div className="bg-white border-[1.5px] border-black p-4 neo-shadow flex items-start gap-4 text-left">
            <div className="bg-[#bff521] p-2 border-[1.5px] border-black text-black">
              <ShieldCheck className="h-5 w-5 fill-current" />
            </div>
            <div>
              <h3 className="font-mono text-[12px] uppercase font-bold text-black tracking-widest mb-1">
                Secure Banking
              </h3>
              <p className="font-sans text-[13px] leading-tight text-[#444748]">
                Your biometric data is encrypted on-device and never shared with SBI servers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Status & Actions */}
      <footer className="px-6 pb-6 space-y-4">
        {/* Status bar */}
        <div className="bg-black text-white p-3 flex items-center justify-between border-[1.5px] border-black">
          <div className="flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-full ${status === 'scanning' ? 'bg-[#bff521] animate-pulse' : 'bg-[#4d6700]'}`}></span>
            <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-white/95">
              {status === 'scanning' ? 'AI Syncing Identity' : 'Identity Verified'}
            </span>
          </div>
          <span className="font-mono text-[10px] text-gray-400">ENCRYPTION: 256-BIT</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={onSuccess}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-xl border-[1.5px] border-black bg-black text-white font-sans text-[15px] font-semibold transition-all hover:shadow-[4px_4px_0_0_#bff521] active:translate-x-0.5 active:translate-y-0.5"
          >
            <span>Try Passcode Instead</span>
            <Key className="h-4 w-4" />
          </button>
          <button
            onClick={onBack}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-xl border-[1.5px] border-black bg-transparent text-black font-sans text-[15px] font-semibold hover:bg-gray-100 transition-colors"
          >
            <span>Cancel</span>
            <X className="h-4 w-4" />
          </button>
        </div>
      </footer>

      {/* Subtle grid pattern background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1] bg-grid-pattern"></div>
    </div>
  );
}
