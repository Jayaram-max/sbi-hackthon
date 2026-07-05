import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, HelpCircle, Edit2, Delete, Bot, CornerDownLeft, Sparkles, CheckCircle } from 'lucide-react';
import { Screen } from '../types';

interface SendMoneyScreenProps {
  onBack: () => void;
  onSuccess: (amount: string) => void;
}

export default function SendMoneyScreen({ onBack, onSuccess }: SendMoneyScreenProps) {
  const [amount, setAmount] = useState('45,680.50');
  const [remarks, setRemarks] = useState('GIFT FOR BIRTHDAY');
  const [transferState, setTransferState] = useState<'idle' | 'success'>('idle');

  const handleKeyPress = (key: string) => {
    if (transferState === 'success') return;

    if (key === 'backspace') {
      setAmount((prev) => {
        // Strip commas for easier slice
        const raw = prev.replace(/,/g, '');
        const updated = raw.slice(0, -1);
        return formatAmountStr(updated || '0');
      });
    } else if (key === '.') {
      if (amount.includes('.')) return;
      setAmount((prev) => prev + '.');
    } else {
      setAmount((prev) => {
        const raw = prev.replace(/,/g, '');
        if (raw === '0') return formatAmountStr(key);
        // Avoid writing too long numbers
        if (raw.length > 9) return prev;
        return formatAmountStr(raw + key);
      });
    }
  };

  // Helper to format string with standard Indian grouping or thousand commas
  const formatAmountStr = (val: string) => {
    const parts = val.split('.');
    let numStr = parts[0];
    // Simple commas grouping
    const lastThree = numStr.substring(numStr.length - 3);
    const otherParts = numStr.substring(0, numStr.length - 3);
    let formatted = otherParts !== '' ? otherParts.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree : lastThree;

    if (parts.length > 1) {
      return formatted + '.' + parts[1].substring(0, 2);
    }
    return formatted;
  };

  const handleTransfer = () => {
    setTransferState('success');
    setTimeout(() => {
      onSuccess(amount);
    }, 2000);
  };

  return (
    <div className="flex h-full w-full flex-col bg-[#f9f9f9] text-left select-none relative">
      {/* Top App Bar */}
      <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b-[1.5px] border-black bg-white px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-[#bff521]/15 rounded-full transition-all active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="h-5 w-5 text-black" />
          </button>
          <h1 className="font-display text-lg font-extrabold tracking-tighter text-black">SEND MONEY</h1>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-all">
          <HelpCircle className="h-5 w-5 text-black" />
        </button>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-6 pt-6 pb-64 space-y-6" style={{ scrollbarWidth: 'none' }}>
        {/* Recipient Card */}
        <section className="bg-white border-[1.5px] border-black p-4 neo-shadow flex items-center gap-4">
          <div className="w-12 h-12 bg-[#bff521] border-[1.5px] border-black flex items-center justify-center font-display font-black text-black shrink-0">
            JH
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-mono text-[9px] uppercase tracking-widest text-[#747878] font-bold">Recipient</p>
            <h2 className="font-display text-md font-bold text-black truncate">Jayaram HR</h2>
            <p className="font-mono text-[11px] text-[#444748] truncate">SBIN0001234 • 4829302194</p>
          </div>
          <button className="text-black hover:text-[#4d6700] p-1 shrink-0 active:scale-90 transition-all">
            <Edit2 className="h-4.5 w-4.5" />
          </button>
        </section>

        {/* Enter Amount Block */}
        <section className="flex flex-col items-center justify-center py-4 text-center">
          <label className="font-mono text-[10px] uppercase tracking-widest text-black font-bold mb-2">
            Enter Amount
          </label>
          <div className="flex items-baseline justify-center gap-2 max-w-full">
            <span className="font-display text-3xl font-black text-black">₹</span>
            <input
              type="text"
              readOnly
              value={amount}
              className="bg-transparent border-none text-center font-mono text-[42px] font-black w-full focus:ring-0 focus:outline-none placeholder-gray-300 text-black leading-none outline-none select-none"
            />
          </div>
          <p className="font-mono text-xs text-[#747878] mt-2 font-semibold">Balance: ₹1,54,320.00</p>
        </section>

        {/* Remarks Box */}
        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-[10px] uppercase tracking-widest text-black font-black ml-1">
            Remarks (Optional)
          </label>
          <input
            type="text"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            className="w-full h-14 px-4 bg-white border-[1.5px] border-black font-sans text-sm focus:border-[2px] focus:outline-none placeholder-gray-300 text-black font-medium"
            placeholder="GIFT FOR BIRTHDAY"
          />
        </div>

        {/* Transfer Button */}
        <button
          onClick={handleTransfer}
          disabled={amount === '0' || !amount}
          className="w-full h-16 bg-black text-white font-display text-md uppercase font-bold tracking-widest border-[1.5px] border-black transition-all hover:shadow-[4px_4px_0_0_#bff521] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:shadow-none disabled:translate-y-0 cursor-pointer"
        >
          Transfer Now
        </button>
      </div>

      {/* Floating AI Assistant verification FAB (sits above keyboard) */}
      <div className="absolute bottom-64 right-6 z-40 group">
        <button className="w-14 h-14 bg-[#bff521] text-black border-[1.5px] border-black rounded-none neo-shadow flex items-center justify-center hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all cursor-pointer">
          <Bot className="h-6 w-6 stroke-[2]" />
          {/* Quick Hover text overlay */}
          <div className="absolute right-16 bg-black text-white border-[1.5px] border-black px-3 py-1.5 font-mono text-[9px] font-black tracking-wider shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            AI TRANSFER VERIFIED
          </div>
        </button>
      </div>

      {/* Custom Numeric Keyboard (Keypad) */}
      <section className="absolute bottom-0 left-0 w-full bg-white border-t-[1.5px] border-black grid grid-cols-3 z-30 select-none">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'backspace'].map((key) => {
          const isBk = key === 'backspace';
          return (
            <button
              key={key}
              onClick={() => handleKeyPress(key)}
              className="h-14 border-r-[1.5px] border-b-[1.5px] border-black flex items-center justify-center font-mono text-lg font-bold text-black transition-colors hover:bg-[#bff521]/15 active:bg-[#bff521] cursor-pointer"
            >
              {isBk ? <Delete className="h-5 w-5" /> : key}
            </button>
          );
        })}
      </section>

      {/* Transfer Success overlay */}
      <AnimatePresence>
        {transferState === 'success' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white/95 backdrop-blur-sm z-[100] flex flex-col items-center justify-center px-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              className="p-6 border-[1.5px] border-black bg-white neo-shadow max-w-[320px] w-full text-center flex flex-col items-center space-y-4"
            >
              <div className="h-16 w-16 bg-[#bff521] rounded-full border-[1.5px] border-black flex items-center justify-center text-black">
                <CheckCircle className="h-10 w-10 fill-current text-white text-black" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-black">
                  Transfer Successful
                </h3>
                <p className="font-mono text-xs text-gray-500 mt-1 uppercase tracking-widest font-bold">
                  ₹{amount} Sent
                </p>
                <p className="font-sans text-xs text-[#444748] mt-2">
                  Jayaram HR has received the funds with secure 256-bit encryption. Ref: SBI-TXN-{Date.now().toString().slice(-6)}.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
