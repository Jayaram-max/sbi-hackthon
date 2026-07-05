import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  Search,
  Bell,
  ChevronDown,
  Phone,
  Mail,
  ArrowRight,
  Bot,
  Home,
  Bot as BotIcon,
  CreditCard,
  BookOpen,
  User as UserIcon
} from 'lucide-react';
import { Screen } from '../types';

interface UpiSupportScreenProps {
  onNavigate: (screen: Screen) => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  quickAction?: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do I increase my daily UPI limit?',
    answer: "By default, SBI limits UPI transactions to ₹1,00,000 per day. You can manage this via the 'Limits' section in SBI AI settings. Note that new registrations have a limit of ₹5,000 for the first 24 hours.",
    quickAction: 'Ask AI: "Show my current transaction limits"'
  },
  {
    id: 'faq-2',
    question: 'My transaction failed but money was debited.',
    answer: "Don't worry. Most UPI failures are automatically reversed within 3-5 business days. You can track the status of this specific transaction in the History tab. If it hasn't been returned after 48 hours, use the 'Raise Dispute' button below the transaction details.",
  },
  {
    id: 'faq-3',
    question: 'How to change my UPI PIN?',
    answer: "Go to Profile > Linked Bank Accounts, select your SBI Account, tap on Forgot UPI PIN or Change PIN, and verify using your Debit Card details.",
  }
];

export default function UpiSupportScreen({ onNavigate }: UpiSupportScreenProps) {
  const [expandedFaq, setExpandedFaq] = useState<string | null>('faq-1');
  const [searchText, setSearchText] = useState('');

  const toggleFaq = (id: string) => {
    setExpandedFaq((prev) => (prev === id ? null : id));
  };

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
            <Search className="h-5 w-5 text-black" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <Bell className="h-5 w-5 text-black" />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-6 pb-44 pt-6 space-y-6" style={{ scrollbarWidth: 'none' }}>
        {/* Help Center Tag & Title */}
        <section>
          <div className="inline-block bg-black text-white px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest mb-3">
            Help Center
          </div>
          <h2 className="font-display text-3xl font-extrabold text-black">UPI Support</h2>
          <p className="font-sans text-sm text-[#444748] mt-1">
            Instant answers to your Unified Payments Interface queries.
          </p>
        </section>

        {/* Search Bar */}
        <section className="space-y-1.5">
          <label className="block font-mono text-[10px] uppercase font-bold text-black tracking-wider">
            Search for a topic
          </label>
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full h-14 bg-white border-[1.5px] border-black px-4 font-sans text-sm focus:ring-0 focus:border-black focus:outline-none focus:shadow-[4px_4px_0_0_#bff521] transition-all"
              placeholder="e.g., Transaction Limit, Reset Pin..."
            />
            <div className="absolute right-4 text-black">
              <Search className="h-5 w-5" />
            </div>
          </div>
        </section>

        {/* FAQ Bento Items */}
        <section className="space-y-3">
          {FAQ_ITEMS.filter(item => 
            item.question.toLowerCase().includes(searchText.toLowerCase()) || 
            item.answer.toLowerCase().includes(searchText.toLowerCase())
          ).map((item) => {
            const isExpanded = expandedFaq === item.id;
            return (
              <div key={item.id} className="border-[1.5px] border-black bg-white select-none">
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="flex justify-between items-center w-full p-4 cursor-pointer text-left focus:outline-none"
                >
                  <h3 className="font-display text-sm font-bold text-black pr-4">{item.question}</h3>
                  <ChevronDown className={`h-5 w-5 text-black shrink-0 transition-transform duration-300 ${
                    isExpanded ? 'rotate-180' : ''
                  }`} />
                </button>
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 font-sans text-xs text-[#444748] space-y-3 border-t border-black/10 pt-3">
                        <p className="leading-relaxed">{item.answer}</p>
                        {item.quickAction && (
                          <div className="bg-[#f3f3f4] p-3 border-l-4 border-[#bff521] flex flex-col gap-0.5">
                            <p className="font-mono text-[9px] text-[#4d6700] uppercase font-bold tracking-widest">
                              Quick Action
                            </p>
                            <p className="font-sans text-[11px] font-bold text-black">{item.quickAction}</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </section>

        {/* Cyber Grid Image Banner */}
        <section className="border-[1.5px] border-black overflow-hidden h-44 relative">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSxdDIP5QYdNiIR6B6j9CbkmWHD7aZcFswvF3sPY8cfd9IdtyYHBgFjrJyNz10FQmAWknuatOKhQe12wOPvL5TmBm78xSF7w4seULtb2v10eB76yIkTjcj9wvA_dXv-b3q_tBleB2mjGKO-lYwcyeVC4llY01J-4OtzqdCCLti2lOjZcr8SBVgVksTgFPhwDpDbsY7fM7Ij1zvD_9rsmGil5D_tvgrwR-Wpch4p7ijQRZsIj08EE3T9KQxpRI7X0NDwUb5P5hkeKvz')`
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <span className="bg-[#bff521] text-black border border-black px-2 py-1 font-mono text-[9px] uppercase tracking-widest font-black">
              Secure Infrastructure
            </span>
          </div>
        </section>

        {/* Contacts */}
        <section className="grid grid-cols-2 gap-4">
          <a
            href="tel:18001234"
            className="border-[1.5px] border-black p-4 bg-white flex flex-col text-left hover:shadow-[4px_4px_0_0_#111111] transition-all group"
          >
            <Phone className="h-5 w-5 text-black mb-2 group-hover:scale-105 transition-transform" />
            <p className="font-mono text-[9px] uppercase text-[#747878] font-bold tracking-wider">Toll Free</p>
            <p className="font-display text-sm font-extrabold text-black mt-1">1800 1234</p>
          </a>
          <a
            href="mailto:help@sbi.ai"
            className="border-[1.5px] border-black p-4 bg-white flex flex-col text-left hover:shadow-[4px_4px_0_0_#111111] transition-all group"
          >
            <Mail className="h-5 w-5 text-black mb-2 group-hover:scale-105 transition-transform" />
            <p className="font-mono text-[9px] uppercase text-[#747878] font-bold tracking-wider">Email Support</p>
            <p className="font-display text-sm font-extrabold text-black mt-1 truncate">help@sbi.ai</p>
          </a>
        </section>
      </div>

      {/* AI Assistance Action box overlay */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-lg z-40">
        <div className="bg-black text-white p-1.5 border-[1.5px] border-black flex items-center justify-between shadow-[6px_6px_0_0_rgba(0,0,0,0.15)]">
          <div className="flex items-center gap-2.5 pl-3">
            <div className="w-8 h-8 bg-[#bff521] rounded-full flex items-center justify-center border border-black shrink-0">
              <Bot className="h-4.5 w-4.5 text-black stroke-[2]" />
            </div>
            <span className="font-sans text-[13px]">Can't find an answer?</span>
          </div>
          <button
            onClick={() => onNavigate(Screen.CHAT)}
            className="bg-[#bff521] text-black px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-white transition-colors"
          >
            <span>Ask AI</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Bottom Nav Bar with "Profile" as active tab */}
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
          <BotIcon className="h-5 w-5" />
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
        {/* History */}
        <button
          onClick={() => onNavigate(Screen.GUIDE)}
          className="flex flex-col items-center justify-center text-[#444748] h-full px-4 hover:bg-gray-50 transition-colors"
        >
          <BookOpen className="h-5 w-5" />
          <span className="font-mono text-[10px] uppercase tracking-widest mt-1">History</span>
        </button>
        {/* Profile (Active) */}
        <button className="flex flex-col items-center justify-center bg-[#bff521] text-black border-x-[1.5px] border-black h-full px-4 translate-y-[-2px]">
          <UserIcon className="h-5 w-5 fill-current" />
          <span className="font-mono text-[10px] uppercase font-bold tracking-widest mt-1">Profile</span>
        </button>
      </nav>
    </div>
  );
}
