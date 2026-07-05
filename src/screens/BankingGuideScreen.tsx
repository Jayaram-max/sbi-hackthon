import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Menu,
  Bell,
  Search,
  Smartphone,
  QrCode,
  ArrowRight,
  RefreshCw,
  Lock,
  Mic,
  Home,
  Bot,
  CreditCard,
  BookOpen,
  User
} from 'lucide-react';
import { Screen } from '../types';

interface BankingGuideScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function BankingGuideScreen({ onNavigate }: BankingGuideScreenProps) {
  const [searchQuery, setSearchText] = useState('');

  return (
    <div className="flex h-full w-full flex-col bg-[#f9f9f9] text-left select-none relative">
      {/* Top Header */}
      <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b-[1.5px] border-black bg-white px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate(Screen.DASHBOARD)}
            className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu className="h-5 w-5 text-black" />
          </button>
          <span className="font-display text-xl font-extrabold uppercase tracking-tighter text-black">SBI AI</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <Bell className="h-5 w-5 text-black" />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-6 pb-32 pt-6 space-y-8">
        {/* Search & Header */}
        <section>
          <div className="flex flex-col gap-1 mb-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-black font-bold">
              Resource Center
            </span>
            <h1 className="font-display text-3xl font-extrabold text-black">Banking Guide</h1>
          </div>
          <div className="relative flex items-center group">
            <div className="absolute left-4 pointer-events-none text-gray-400">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full h-14 pl-12 pr-24 bg-white border-[1.5px] border-black rounded-xl font-sans text-sm focus:outline-none focus:border-[#bff521] focus:ring-1 focus:ring-[#bff521] neo-shadow transition-all group-hover:shadow-[#bff521]"
              placeholder="Search for help..."
            />
            <div className="absolute right-4 pointer-events-none">
              <span className="font-mono text-[9px] font-bold text-gray-500 px-2 py-1 bg-gray-100 border-[1.5px] border-gray-300 rounded">
                CMD + K
              </span>
            </div>
          </div>
        </section>

        {/* Popular Guides Section */}
        <section className="space-y-4">
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-black font-black">
            Popular Guides
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {/* YONO Banking */}
            <div
              onClick={() => onNavigate(Screen.RESET_STEP1)}
              className="group bg-white border-[1.5px] border-black p-5 rounded-xl neo-shadow transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_#000000] cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#bff521] border-[1.5px] border-black rounded-lg">
                  <Smartphone className="h-5 w-5 text-black" />
                </div>
                <ArrowRight className="h-5 w-5 text-black group-hover:translate-x-1.5 transition-transform" />
              </div>
              <h3 className="font-display text-xl font-bold mb-1">YONO Banking</h3>
              <p className="font-sans text-sm text-[#444748] mb-4">
                Complete setup guide for India's largest omnichannel banking platform.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="font-mono text-[10px] px-2.5 py-1 bg-gray-100 border border-gray-300 rounded">
                  Activation
                </span>
                <span className="font-mono text-[10px] px-2.5 py-1 bg-gray-100 border border-gray-300 rounded">
                  Security
                </span>
              </div>
            </div>

            {/* UPI Payments */}
            <div
              onClick={() => onNavigate(Screen.UPI_SUPPORT)}
              className="group bg-white border-[1.5px] border-black p-5 rounded-xl neo-shadow transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_#000000] cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#bff521] border-[1.5px] border-black rounded-lg">
                  <QrCode className="h-5 w-5 text-black" />
                </div>
                <ArrowRight className="h-5 w-5 text-black group-hover:translate-x-1.5 transition-transform" />
              </div>
              <h3 className="font-display text-xl font-bold mb-1">UPI Payments</h3>
              <p className="font-sans text-sm text-[#444748] mb-4">
                Master instant transfers, QR payments, and transaction limits safely.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="font-mono text-[10px] px-2.5 py-1 bg-gray-100 border border-gray-300 rounded">
                  Setup
                </span>
                <span className="font-mono text-[10px] px-2.5 py-1 bg-gray-100 border border-gray-300 rounded">
                  Troubleshoot
                </span>
              </div>
            </div>

            {/* Funds Transfer */}
            <div className="group bg-white border-[1.5px] border-black p-5 rounded-xl neo-shadow transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_#000000] cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#bff521] border-[1.5px] border-black rounded-lg">
                  <RefreshCw className="h-5 w-5 text-black" />
                </div>
                <ArrowRight className="h-5 w-5 text-black group-hover:translate-x-1.5 transition-transform" />
              </div>
              <h3 className="font-display text-xl font-bold mb-1">Funds Transfer</h3>
              <p className="font-sans text-sm text-[#444748] mb-4">
                Comparing IMPS, NEFT, and RTGS for your specific banking needs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="font-mono text-[10px] px-2.5 py-1 bg-gray-100 border border-gray-300 rounded">
                  Limits
                </span>
                <span className="font-mono text-[10px] px-2.5 py-1 bg-gray-100 border border-gray-300 rounded">
                  Timings
                </span>
              </div>
            </div>

            {/* Cards Security */}
            <div className="group bg-white border-[1.5px] border-black p-5 rounded-xl neo-shadow transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_#000000] cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#bff521] border-[1.5px] border-black rounded-lg">
                  <Lock className="h-5 w-5 text-black" />
                </div>
                <ArrowRight className="h-5 w-5 text-black group-hover:translate-x-1.5 transition-transform" />
              </div>
              <h3 className="font-display text-xl font-bold mb-1">Cards Security</h3>
              <p className="font-sans text-sm text-[#444748] mb-4">
                How to manage limits, enable international usage, and hotlist cards.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="font-mono text-[10px] px-2.5 py-1 bg-gray-100 border border-gray-300 rounded">
                  PIN
                </span>
                <span className="font-mono text-[10px] px-2.5 py-1 bg-gray-100 border border-gray-300 rounded">
                  Emergency
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Live assistance widget */}
        <section className="border-[1.5px] border-black bg-black p-6 rounded-xl neo-shadow-accent relative overflow-hidden">
          <div className="absolute -right-10 -top-10 opacity-20 text-[#bff521]">
            <Bot className="h-40 w-40" />
          </div>
          <div className="relative z-10">
            <span className="font-mono text-[10px] text-[#bff521] uppercase tracking-widest block mb-1 font-bold">
              Live Assistance
            </span>
            <h2 className="font-display text-lg font-bold text-white mb-4">
              Can't find what you're looking for?
            </h2>
            <button
              onClick={() => onNavigate(Screen.VOICE)}
              className="bg-[#bff521] text-black font-mono text-xs font-bold py-3 px-6 rounded-full border-[1.5px] border-black active:scale-95 transition-transform flex items-center gap-2 cursor-pointer"
            >
              <Mic className="h-4 w-4" />
              Ask SBI AI
            </button>
          </div>
        </section>
      </div>

      {/* Sticky Bottom Nav Bar with "History" as active */}
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
