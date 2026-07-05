import { ArrowLeft, Plus, Smartphone, ChevronLeft, ArrowRight, CheckCircle2, ChevronRight, HelpCircle, Bell, Home, Bot, CreditCard, BookOpen, User, ArrowUpRight } from 'lucide-react';
import { Screen } from '../types';

interface ResetStep2ScreenProps {
  onBack: () => void;
  onNext: () => void;
  onNavigate: (screen: Screen) => void;
}

export default function ResetStep2Screen({ onBack, onNext, onNavigate }: ResetStep2ScreenProps) {
  return (
    <div className="flex h-full w-full flex-col bg-white overflow-hidden select-none relative text-left">
      {/* Top Header */}
      <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b-[1.5px] border-black bg-white px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 text-black" />
          </button>
          <span className="font-display text-sm font-extrabold tracking-tighter text-black">SBI AI</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <Plus className="h-5 w-5 text-black" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <Bell className="h-5 w-5 text-black" />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-6 pb-32 pt-6 space-y-6">
        {/* Title */}
        <div>
          <h1 className="font-display text-2xl font-extrabold uppercase mb-1">YONO Password Reset</h1>
          <p className="font-sans text-xs text-[#444748]">
            Step-by-step instruction guide to recover your mobile banking access.
          </p>
        </div>

        {/* Progress Indicator */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#4d6700] font-bold">Step 2 of 4</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#4d6700] font-black">50% Complete</span>
          </div>
          <div className="flex gap-2 h-2">
            <div className="flex-1 bg-[#bff521] border-[1.5px] border-black"></div>
            <div className="flex-1 bg-[#bff521] border-[1.5px] border-black"></div>
            <div className="flex-1 bg-gray-200 border-[1.5px] border-black"></div>
            <div className="flex-1 bg-gray-200 border-[1.5px] border-black"></div>
          </div>
        </div>

        {/* Instructional Visual Card */}
        <div className="relative bg-white border-[1.5px] border-black p-6 neo-shadow flex flex-col items-center">
          <div className="absolute top-0 right-0 p-4">
            <span className="font-mono text-[9px] uppercase tracking-widest font-black text-black px-2 py-1 bg-[#bff521] border-[1.5px] border-black">
              VISUAL GUIDE
            </span>
          </div>

          {/* Phone simulator */}
          <div className="w-44 h-72 bg-white border-[1.5px] border-black rounded-xl overflow-hidden relative mt-8 mb-4 flex flex-col items-center justify-center p-4">
            <div className="text-center">
              <span className="font-display text-xl font-extrabold block">YONO</span>
              <span className="font-display text-xl font-extrabold block -mt-1">SBI</span>
            </div>
            <div className="w-full mt-10 bg-black text-white text-center py-1.5 text-[9px] font-mono font-bold tracking-widest border border-black">
              LOGIN
            </div>
            <div className="mt-auto w-full flex flex-col items-center">
              <div className="w-full h-[1px] bg-gray-200 mb-2"></div>
              <div className="relative">
                <span className="text-[10px] font-mono text-black font-bold underline cursor-pointer">
                  Forgot Login Password?
                </span>
                {/* Cursor Indicator */}
                <div className="absolute -bottom-4 -right-4 animate-bounce">
                  <ArrowUpRight className="h-6 w-6 text-black bg-[#bff521] rounded-full border border-black p-0.5 stroke-[2.5]" />
                </div>
              </div>
            </div>
          </div>

          <p className="text-center font-sans text-[13px] font-medium leading-relaxed max-w-xs">
            Click on{' '}
            <span className="bg-black text-white px-2 py-1 font-mono text-xs uppercase font-bold tracking-tight rounded-sm">
              'Forgot Login Password'
            </span>{' '}
            located at the bottom of the home screen.
          </p>
        </div>

        {/* Instructions List */}
        <div className="space-y-3">
          <h2 className="font-mono text-[10px] uppercase tracking-widest text-[#4d6700] font-black">
            Instructions
          </h2>

          {/* Step 1 (Completed) */}
          <div className="flex gap-4 items-start p-3 border-[1.5px] border-gray-300 bg-gray-50 opacity-60">
            <div className="w-6 h-6 flex items-center justify-center bg-black text-white font-mono text-xs shrink-0">
              1
            </div>
            <div className="min-w-0">
              <h3 className="font-sans text-xs font-bold text-black">Open YONO App</h3>
              <p className="font-sans text-[11px] text-[#444748] mt-0.5 leading-tight">
                Locate the YONO SBI icon on your mobile device and tap to launch.
              </p>
            </div>
            <CheckCircle2 className="h-5 w-5 text-[#4d6700] ml-auto shrink-0 fill-current bg-white rounded-full" />
          </div>

          {/* Step 2 (Active) */}
          <div className="flex gap-4 items-start p-3 border-[1.5px] border-black bg-white neo-shadow-accent">
            <div className="w-6 h-6 flex items-center justify-center bg-[#bff521] border-[1.5px] border-black text-black font-mono text-xs font-black shrink-0">
              2
            </div>
            <div className="min-w-0">
              <h3 className="font-sans text-xs font-bold text-black">Access Forgot Password</h3>
              <p className="font-sans text-[11px] text-[#444748] mt-0.5 leading-tight">
                The link is located just below the login button in the center container.
              </p>
            </div>
          </div>

          {/* Step 3 (Pending) */}
          <div className="flex gap-4 items-start p-3 border-[1.5px] border-gray-300 border-dashed opacity-50">
            <div className="w-6 h-6 flex items-center justify-center border-[1.5px] border-gray-400 text-gray-400 font-mono text-xs shrink-0">
              3
            </div>
            <div className="min-w-0">
              <h3 className="font-sans text-xs font-bold text-gray-400">Validate Identity</h3>
              <p className="font-sans text-[11px] text-[#444748] mt-0.5 leading-tight">
                Enter your Username, Account Number, and CIF number from passbook.
              </p>
            </div>
          </div>
        </div>

        {/* Action bar inside content */}
        <div className="flex gap-4">
          <button
            onClick={onBack}
            className="flex-1 flex items-center justify-center gap-2 h-14 border-[1.5px] border-black bg-white font-mono text-xs uppercase tracking-widest font-black hover:bg-gray-100 transition-all active:scale-98"
          >
            <ChevronLeft className="h-4 w-4 stroke-[2.5]" />
            Back
          </button>
          <button
            onClick={onNext}
            className="flex-1 flex items-center justify-center gap-2 h-14 bg-black text-white border-[1.5px] border-black font-mono text-xs uppercase tracking-widest font-black neo-shadow-accent hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            Next
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Navigation footer */}
      <nav className="absolute bottom-0 left-0 w-full h-[72px] bg-white border-t-[1.5px] border-black flex justify-around items-stretch z-40 shadow-[0_-4px_0_0_rgba(0,0,0,1)]">
        {/* Home */}
        <button
          onClick={() => onNavigate(Screen.DASHBOARD)}
          className="flex flex-col items-center justify-center text-[#444748] h-full px-4 hover:bg-gray-50 transition-colors"
        >
          <Home className="h-5 w-5" />
          <span className="font-mono text-[10px] uppercase tracking-widest mt-1">Home</span>
        </button>
        {/* AI */}
        <button
          onClick={() => onNavigate(Screen.CHAT)}
          className="flex flex-col items-center justify-center text-[#444748] h-full px-4 hover:bg-gray-50 transition-colors"
        >
          <Bot className="h-5 w-5" />
          <span className="font-mono text-[10px] uppercase tracking-widest mt-1">AI</span>
        </button>
        {/* Pay */}
        <button
          onClick={() => onNavigate(Screen.SCAN_QR)}
          className="flex flex-col items-center justify-center text-[#444748] h-full px-4 hover:bg-gray-50 transition-colors"
        >
          <CreditCard className="h-5 w-5" />
          <span className="font-mono text-[10px] uppercase tracking-widest mt-1">Pay</span>
        </button>
        {/* History (Active) */}
        <button className="flex flex-col items-center justify-center bg-[#bff521] text-black border-x-[1.5px] border-black h-full px-4 translate-y-[-2px]">
          <BookOpen className="h-5 w-5 fill-current" />
          <span className="font-mono text-[10px] uppercase font-bold tracking-widest mt-1">History</span>
        </button>
        {/* Profile */}
        <button
          onClick={() => onNavigate(Screen.UPI_SUPPORT)}
          className="flex flex-col items-center justify-center text-[#444748] h-full px-4 hover:bg-gray-50 transition-colors"
        >
          <User className="h-5 w-5" />
          <span className="font-mono text-[10px] uppercase tracking-widest mt-1">Profile</span>
        </button>
      </nav>
    </div>
  );
}
