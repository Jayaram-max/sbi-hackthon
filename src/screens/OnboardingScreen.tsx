import { motion } from 'motion/react';
import { Landmark, Plus, ArrowUpRight } from 'lucide-react';

interface OnboardingScreenProps {
  onNext: () => void;
  onLogin: () => void;
}

export default function OnboardingScreen({ onNext, onLogin }: OnboardingScreenProps) {
  return (
    <div className="flex h-full w-full flex-col bg-white overflow-hidden select-none">
      {/* Top Header */}
      <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b-[1.5px] border-black bg-white px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
            <Landmark className="h-4.5 w-4.5" />
          </div>
          <h1 className="font-display text-xl font-extrabold uppercase tracking-tighter text-black">SBI AI</h1>
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-lg border-[1.5px] border-black hover:bg-[#bff521]/10 active:scale-95 transition-all">
          <Plus className="h-5 w-5 text-black" />
        </button>
      </header>

      {/* Content scroll area */}
      <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col justify-between text-left">
        <div>
          {/* Tag */}
          <div className="mb-4">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#444748] bg-[#eeeeee] px-2.5 py-1 border border-black/10 rounded">
              Next-Gen Banking
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-black leading-[1.1] mb-4">
            Your Smart <br />
            <span className="text-[#4d6700] underline decoration-[#bff521] decoration-wavy decoration-2">Banking</span> <br />
            Partner.
          </h2>

          {/* Subtext */}
          <p className="font-sans text-[15px] leading-[22px] text-[#444748] max-w-[85%] mb-6">
            Your smart banking assistant in your language. Voice-first, AI-driven guidance for everything SBI.
          </p>

          {/* Bento card illustration */}
          <div className="relative w-full aspect-square border-[1.5px] border-black bg-white neo-shadow mb-6 flex items-center justify-center overflow-hidden group">
            {/* Background elements */}
            <div className="bg-grid-pattern absolute inset-0 pointer-events-none opacity-10"></div>
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#bff521]/25 blur-3xl"></div>

            {/* AI character image */}
            <div className="relative z-10 w-[70%] h-[70%] flex items-center justify-center">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7ktvqyPRPX9z7DgCJto9cs-Vh6GDpG_HeAgWBy6bOtN76_wY3w6_SN2xRCAjgLYfONSHmCM9sNKujUPsJphLZs4fUEMoRbdrEmP7cr0vk2D2TNbtdGdTLbDz5Zb2vBYX9Lym0wd8EL1eonSgBSp2gLqRHR0-cOn8pxDVRWuQkcq2DBirOERfbRlYiw34yVw62S7raDZibXLKzwJEqZLUe-zDD_Kl3q1YE3IzBRRwgUFUAJNlgrV9H-1KppzgYwn2_MFGTgM1VMArB"
                alt="SBI AI Companion character"
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Labels */}
            <div className="absolute top-4 right-4 bg-black text-white font-mono text-[10px] px-2 py-1 border-[1.5px] border-black">
              V.2.0-STABLE
            </div>
            <div className="absolute bottom-4 left-4 bg-white text-black font-mono text-[10px] px-2 py-1 border-[1.5px] border-black">
              AI COMPANION
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2 mb-6">
            <div className="h-2 w-8 bg-black rounded-full transition-all duration-300"></div>
            <div className="h-2 w-2 rounded-full border-[1.5px] border-black bg-gray-200"></div>
            <div className="h-2 w-2 rounded-full border-[1.5px] border-black bg-gray-200"></div>
          </div>
        </div>

        {/* CTA section */}
        <div className="flex flex-col gap-4 mt-auto">
          <button
            onClick={onNext}
            className="flex h-16 w-full items-center justify-between rounded-2xl border-[1.5px] border-black bg-black px-6 text-white transition-all hover:shadow-[6px_6px_0_0_#bff521] hover:-translate-y-0.5 group"
          >
            <span className="font-display text-lg font-bold tracking-tight">GET STARTED</span>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border-[1.5px] border-black bg-[#bff521] text-black group-hover:rotate-45 transition-transform">
              <ArrowUpRight className="h-5 w-5 stroke-[2.5]" />
            </div>
          </button>

          <div className="flex items-center justify-center gap-2 py-2">
            <p className="font-mono text-xs text-[#444748]">Already have an account?</p>
            <button
              onClick={onLogin}
              className="font-mono text-xs font-bold text-black underline decoration-[#bff521] decoration-2 underline-offset-4"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>

      {/* Bottom spacer for safe gesture area */}
      <div className="h-4 w-full bg-white"></div>
    </div>
  );
}
