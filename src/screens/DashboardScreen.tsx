import { motion } from 'motion/react';
import {
  Bell,
  Menu,
  ArrowUpRight,
  Send,
  Receipt,
  QrCode,
  Grid,
  ChevronRight,
  ShoppingBag,
  Wallet,
  Mic,
  Home,
  Bot,
  CreditCard,
  History,
  User
} from 'lucide-react';
import { Screen, Transaction } from '../types';

interface DashboardScreenProps {
  onNavigate: (screen: Screen) => void;
  onLogout: () => void;
}

const RECENT_TRANSACTIONS: Transaction[] = [
  {
    id: 'tx-1',
    merchant: 'Amazon India',
    date: 'Today, 11:45 AM',
    amount: 1240,
    type: 'debit',
    icon: 'shopping_bag'
  },
  {
    id: 'tx-2',
    merchant: 'UPI Deposit',
    date: 'Yesterday',
    amount: 5000,
    type: 'credit',
    icon: 'wallet'
  }
];

export default function DashboardScreen({ onNavigate, onLogout }: DashboardScreenProps) {
  return (
    <div className="flex h-full w-full flex-col bg-[#f9f9f9] text-left select-none relative">
      {/* Top Header */}
      <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b-[1.5px] border-black bg-white px-6">
        <div className="flex items-center gap-3">
          <div
            onClick={onLogout}
            className="h-10 w-10 overflow-hidden rounded-full border-[1.5px] border-black cursor-pointer active:scale-95 transition-transform"
            title="Click to logout"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9nfFsPuj0oDOKxD1JgzGEb7K699PdsLogvJTrI-nnaEXARUzYTjTXAFuodDbvOFALEwz0fXyznM8dLyBI7jcybgcbyHlOutwl6fU2vSlNvv4GQbR7tcaO2fw42r5xGVp7eESkj9wnBn2qayjnhe5E6nqJvW0Il-nqhYPeb7rgJpim4l3ghJk1gayZETEUe1dDuCAjpTJWzm2wri6BOHK13SMoy4507Tfqov2PhKXrud7ATz30R1SEsYhoDUs0AuE1sH5uMfyznmoh"
              alt="Jayaram profile"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="font-mono text-[10px] leading-none text-[#444748]">Hello,</p>
            <p className="font-display text-lg font-extrabold tracking-tight text-black mt-0.5">Jayaram</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <Bell className="h-5 w-5 text-black" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <Menu className="h-5 w-5 text-black" />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-6 pb-36 pt-6 space-y-6">
        {/* Balance Card */}
        <section>
          <div className="bg-white border-[1.5px] border-black p-6 rounded-xl neo-shadow relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="font-mono text-[10px] uppercase text-[#444748] tracking-widest font-semibold">
                  Savings Account
                </p>
                <p className="font-mono text-[16px] font-bold mt-1 text-black">•••• 5678</p>
              </div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAovdn-UDTBCuYgmXG4LsnI3KIiz8tvQHwxrEgIBbNuqUY216z5foo3RoaJR3_OIL6eqsqFHcvbRTwmMF_wZEFsQmVVf8WVDXTefjMkqyehy5sLRUgSWhonGEyvkQr4lkkWZx_j2J_uHQ5uc4ku9ShK-3rFLzHE6Ta-gQtj4QDwsP0YMT4rJxJefltq9gdj4m2F0yW2xsFqIVPn5JKF9DqoBNvLecSENjtKXTmaWZWyrP0RJBYMbcvB8aKMGK3mKHuPmEWr__PqFFdg"
                alt="SBI Emblem"
                className="h-6 object-contain"
              />
            </div>
            <div className="mt-6">
              <p className="font-mono text-[10px] text-[#444748] font-semibold">Available Balance</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-display text-3xl font-black text-black">₹ 45,680.50</span>
              </div>
            </div>
            <button
              onClick={() => onNavigate(Screen.SEND_MONEY)}
              className="absolute bottom-6 right-6 bg-[#bff521] w-12 h-12 flex items-center justify-center border-[1.5px] border-black hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <ArrowUpRight className="h-5 w-5 text-black stroke-[2.5]" />
            </button>
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h3 className="font-mono text-[11px] uppercase tracking-widest text-[#444748] mb-3 font-bold">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Send Money */}
            <div
              onClick={() => onNavigate(Screen.SEND_MONEY)}
              className="bg-white border-[1.5px] border-black p-4 flex flex-col items-center justify-center text-center space-y-2 cursor-pointer transition-all neo-border neo-shadow hover:shadow-[#bff521] hover:-translate-y-0.5 active:translate-y-0"
            >
              <Send className="h-8 w-8 text-black" />
              <span className="font-mono text-[12px] font-semibold">Send Money</span>
            </div>
            {/* Bill Pay */}
            <div
              onClick={() => onNavigate(Screen.GUIDE)}
              className="bg-white border-[1.5px] border-black p-4 flex flex-col items-center justify-center text-center space-y-2 cursor-pointer transition-all neo-border neo-shadow hover:shadow-[#bff521] hover:-translate-y-0.5 active:translate-y-0"
            >
              <Receipt className="h-8 w-8 text-black" />
              <span className="font-mono text-[12px] font-semibold">Bill Pay</span>
            </div>
            {/* Scan & Pay */}
            <div
              onClick={() => onNavigate(Screen.SCAN_QR)}
              className="bg-white border-[1.5px] border-black p-4 flex flex-col items-center justify-center text-center space-y-2 cursor-pointer transition-all neo-border neo-shadow hover:shadow-[#bff521] hover:-translate-y-0.5 active:translate-y-0"
            >
              <QrCode className="h-8 w-8 text-black" />
              <span className="font-mono text-[12px] font-semibold">Scan & Pay</span>
            </div>
            {/* More */}
            <div
              onClick={() => onNavigate(Screen.UPI_SUPPORT)}
              className="bg-white border-[1.5px] border-black p-4 flex flex-col items-center justify-center text-center space-y-2 cursor-pointer transition-all neo-border neo-shadow hover:shadow-[#bff521] hover:-translate-y-0.5 active:translate-y-0"
            >
              <Grid className="h-8 w-8 text-black" />
              <span className="font-mono text-[12px] font-semibold">More</span>
            </div>
          </div>
        </section>

        {/* AI Assistant Banner */}
        <section>
          <div
            onClick={() => onNavigate(Screen.CHAT)}
            className="bg-black text-white p-5 border-[1.5px] border-black flex items-center justify-between group cursor-pointer overflow-hidden relative"
          >
            <div className="relative z-10 pr-4">
              <p className="font-display text-lg font-bold text-white mb-1">Smart Advisor</p>
              <p className="font-sans text-[13px] text-gray-300">
                "You spent 20% more on dining this week. Want a summary?"
              </p>
            </div>
            <ChevronRight className="h-8 w-8 text-[#bff521] shrink-0 group-hover:translate-x-1.5 transition-transform" />
          </div>
        </section>

        {/* Recent History */}
        <section className="pb-12">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-[#444748] font-bold">
              Recent History
            </h3>
            <button
              onClick={() => onNavigate(Screen.GUIDE)}
              className="font-mono text-[11px] text-black font-bold underline hover:text-[#4d6700]"
            >
              View All
            </button>
          </div>
          <div className="space-y-3">
            {RECENT_TRANSACTIONS.map((tx) => (
              <div key={tx.id} className="bg-white p-4 border-[1.5px] border-black flex items-center gap-4">
                <div className="w-12 h-12 bg-[#eeeeee] border-[1.5px] border-black flex items-center justify-center text-black shrink-0">
                  {tx.icon === 'shopping_bag' ? <ShoppingBag className="h-5 w-5" /> : <Wallet className="h-5 w-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-[14px] font-bold text-black truncate">{tx.merchant}</p>
                  <p className="font-mono text-[10px] text-[#444748] mt-0.5">{tx.date}</p>
                </div>
                <p className={`font-mono text-sm font-bold shrink-0 ${tx.type === 'debit' ? 'text-red-600' : 'text-[#4d6700]'}`}>
                  {tx.type === 'debit' ? '-' : '+'}₹{tx.amount.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* FAB: Ask AI Assistant */}
      <div className="absolute bottom-24 right-6 z-40">
        <button
          onClick={() => onNavigate(Screen.VOICE)}
          className="bg-[#bff521] border-[1.5px] border-black py-3 px-4 flex items-center gap-3 neo-shadow active:translate-x-0.5 active:translate-y-0.5 hover:-translate-y-0.5 transition-all cursor-pointer select-none"
        >
          <span className="font-mono text-[11px] font-black uppercase tracking-tighter">Ask AI Assistant</span>
          <div className="bg-black text-[#bff521] w-8 h-8 flex items-center justify-center rounded-none shrink-0">
            <Mic className="h-4.5 w-4.5 stroke-[2.5]" />
          </div>
        </button>
      </div>

      {/* Bottom Nav Bar */}
      <nav className="absolute bottom-0 left-0 w-full h-[72px] bg-white border-t-[1.5px] border-black flex justify-around items-stretch z-40 shadow-[0_-4px_0_0_rgba(0,0,0,1)]">
        {/* Home (Active) */}
        <button className="flex flex-col items-center justify-center bg-[#bff521] text-black border-x-[1.5px] border-black h-full px-4 translate-y-[-2px]">
          <Home className="h-5 w-5 fill-current" />
          <span className="font-mono text-[10px] uppercase font-bold tracking-widest mt-1">Home</span>
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
        {/* History */}
        <button
          onClick={() => onNavigate(Screen.GUIDE)}
          className="flex flex-col items-center justify-center text-[#444748] h-full px-4 hover:bg-gray-50 transition-colors"
        >
          <History className="h-5 w-5" />
          <span className="font-mono text-[10px] uppercase tracking-widest mt-1">History</span>
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
