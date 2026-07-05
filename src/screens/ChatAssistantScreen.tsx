import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Menu,
  Bell,
  Plus,
  Bot,
  User,
  Paperclip,
  Mic,
  ArrowRight,
  History,
  FileText,
  ShieldAlert,
  MapPin,
  Home,
  Bot as BotIcon,
  CreditCard,
  History as HistoryIcon,
  User as UserIcon,
  Send
} from 'lucide-react';
import { Screen, ChatMessage } from '../types';

interface ChatAssistantScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function ChatAssistantScreen({ onNavigate }: ChatAssistantScreenProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'ai',
      text: 'How can I help you today, Jayaram?',
      time: '10:30 AM'
    },
    {
      id: 'm2',
      sender: 'user',
      text: 'How do I reset my YONO password?',
      time: '10:31 AM'
    },
    {
      id: 'm3',
      sender: 'ai',
      text: 'I can help you with that. Follow these steps below:',
      time: '10:31 AM',
      stepCard: {
        step: 1,
        total: 4,
        title: "Open YONO App and click on 'Login'."
      }
    }
  ]);
  const [inputText, setInputText] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const newMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputText('');

    // Simulated AI response
    setTimeout(() => {
      let aiResponseText = "Checking that for you...";
      let stepCardObj = undefined;

      const lowerText = textToSend.toLowerCase();
      if (lowerText.includes('transaction') || lowerText.includes('history')) {
        aiResponseText = "Here are your last 5 transactions on record:";
      } else if (lowerText.includes('bill') || lowerText.includes('electricity')) {
        aiResponseText = "I found an outstanding electricity bill of ₹1,850. Would you like me to pay it?";
      } else if (lowerText.includes('block') || lowerText.includes('card')) {
        aiResponseText = "Card security is our priority. Let me block your active Mastercard immediately. Please confirm below.";
      } else if (lowerText.includes('branch') || lowerText.includes('locator')) {
        aiResponseText = "The nearest SBI branch is at Corporate Headquarters, 1.2km away. Tapping below will open the Map.";
      } else if (lowerText.includes('reset') || lowerText.includes('yono') || lowerText.includes('password')) {
        aiResponseText = "Sure, follow this high-precision step-by-step guide to reset your YONO password:";
        stepCardObj = {
          step: 1,
          total: 4,
          title: "Open YONO App and click on 'Login'."
        };
      } else {
        aiResponseText = `I understand you need assistance with "${textToSend}". I am analyzing your request with secure high-precision protocols. Is there a specific service or account you want to inspect?`;
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiResponseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        stepCard: stepCardObj
      };

      setMessages((prev) => [...prev, aiMsg]);
    }, 1200);
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
          <h1 className="font-display text-xl font-extrabold uppercase tracking-tighter text-black">SBI AI</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <Bell className="h-5 w-5 text-black" />
          </button>
          <button
            onClick={() => onNavigate(Screen.DASHBOARD)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border-[1.5px] border-black hover:bg-[#bff521]/10 active:scale-95 transition-all"
          >
            <Plus className="h-5 w-5 text-black" />
          </button>
        </div>
      </header>

      {/* Messages & Suggestions Area */}
      <div className="flex-1 overflow-y-auto px-6 pt-6 pb-40 flex flex-col gap-6" style={{ scrollbarWidth: 'none' }}>
        {messages.map((msg) => {
          const isAI = msg.sender === 'ai';
          return (
            <div
              key={msg.id}
              className={`flex flex-col max-w-[85%] gap-2 ${isAI ? 'items-start' : 'items-end self-end'}`}
            >
              {/* Sender Info */}
              <div className="flex items-center gap-2">
                {isAI ? (
                  <>
                    <Bot className="h-4 w-4 text-[#4d6700]" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#444748] font-bold">
                      AI Assistant
                    </span>
                  </>
                ) : (
                  <>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#444748] font-bold">You</span>
                    <User className="h-4 w-4 text-black" />
                  </>
                )}
              </div>

              {/* Message Bubble */}
              <div
                className={`neo-border p-4 rounded-xl neo-shadow ${
                  isAI
                    ? 'bg-[#eeeeee] rounded-tl-none hover:translate-x-0.5'
                    : 'bg-[#bff521] text-black rounded-tr-none neo-shadow-accent hover:-translate-x-0.5'
                } transition-transform`}
              >
                <p className="font-sans text-[14px] leading-[20px]">{msg.text}</p>

                {/* If contains step guide card */}
                {msg.stepCard && (
                  <div className="mt-4 flex flex-col gap-3">
                    <div
                      onClick={() => onNavigate(Screen.RESET_STEP1)}
                      className="neo-border bg-white p-3 flex items-center justify-between group cursor-pointer hover:bg-[#bff521]/15 active:scale-98 transition-all"
                    >
                      <div className="flex flex-col text-left">
                        <span className="font-mono text-[9px] uppercase text-[#747878] font-semibold">
                          Step {msg.stepCard.step} of {msg.stepCard.total}
                        </span>
                        <p className="font-sans text-[13px] font-bold text-black mt-0.5">{msg.stepCard.title}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-black group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                    </div>
                  </div>
                )}

                <span className="block mt-2 font-mono text-[9px] text-[#747878] text-left">{msg.time}</span>
              </div>
            </div>
          );
        })}

        {/* Suggestions Bento Block */}
        <div className="mt-4 grid grid-cols-2 gap-3 pb-4">
          <button
            onClick={() => handleSendMessage('View Last 5 Transactions')}
            className="neo-border bg-white p-3 text-left hover:bg-[#bff521]/20 transition-colors active:scale-95"
          >
            <History className="h-5 w-5 mb-2 text-black" />
            <p className="font-mono text-[11px] font-bold">View Last 5 Transactions</p>
          </button>
          <button
            onClick={() => handleSendMessage('Pay Electricity Bill')}
            className="neo-border bg-white p-3 text-left hover:bg-[#bff521]/20 transition-colors active:scale-95"
          >
            <FileText className="h-5 w-5 mb-2 text-black" />
            <p className="font-mono text-[11px] font-bold">Pay Electricity Bill</p>
          </button>
          <button
            onClick={() => handleSendMessage('Block My Card')}
            className="neo-border bg-white p-3 text-left hover:bg-[#bff521]/20 transition-colors active:scale-95"
          >
            <ShieldAlert className="h-5 w-5 mb-2 text-black" />
            <p className="font-mono text-[11px] font-bold">Block My Card</p>
          </button>
          <button
            onClick={() => handleSendMessage('Branch Locator')}
            className="neo-border bg-white p-3 text-left hover:bg-[#bff521]/20 transition-colors active:scale-95"
          >
            <MapPin className="h-5 w-5 mb-2 text-black" />
            <p className="font-mono text-[11px] font-bold">Branch Locator</p>
          </button>
        </div>

        <div ref={chatEndRef} />
      </div>

      {/* Sticky Chat Input bar */}
      <div className="absolute bottom-[72px] left-0 w-full bg-white px-6 py-3 border-t-[1.5px] border-black z-30">
        <div className="flex items-center gap-3">
          <div className="flex-1 neo-border bg-white flex items-center px-4 py-1.5 focus-within:ring-2 focus-within:ring-[#bff521]">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
              className="flex-1 bg-transparent border-none focus:ring-0 font-sans text-[14px] py-1.5 text-black outline-none placeholder-[#c4c7c7]"
              placeholder="Type your message..."
            />
            {inputText.trim() ? (
              <button onClick={() => handleSendMessage(inputText)} className="text-black hover:text-[#4d6700] p-1">
                <Send className="h-4.5 w-4.5" />
              </button>
            ) : (
              <button className="text-gray-400 hover:text-black p-1">
                <Paperclip className="h-4.5 w-4.5" />
              </button>
            )}
          </div>
          <button
            onClick={() => onNavigate(Screen.VOICE)}
            className="w-12 h-12 rounded-full bg-[#bff521] border-[1.5px] border-black flex items-center justify-center neo-shadow active:translate-y-0.5 active:translate-x-0.5 active:shadow-none transition-all cursor-pointer"
          >
            <Mic className="h-5 w-5 text-black" />
          </button>
        </div>
      </div>

      {/* Bottom Nav Bar with "AI" as active */}
      <nav className="absolute bottom-0 left-0 w-full h-[72px] bg-white border-t-[1.5px] border-black flex justify-around items-stretch z-40 shadow-[0_-4px_0_0_rgba(0,0,0,1)]">
        {/* Home */}
        <button
          onClick={() => onNavigate(Screen.DASHBOARD)}
          className="flex flex-col items-center justify-center text-[#444748] h-full px-4 hover:bg-gray-50 transition-colors"
        >
          <Home className="h-5 w-5" />
          <span className="font-mono text-[10px] uppercase tracking-widest mt-1">Home</span>
        </button>
        {/* AI (Active) */}
        <button className="flex flex-col items-center justify-center bg-[#bff521] text-black border-x-[1.5px] border-black h-full px-4 translate-y-[-2px]">
          <BotIcon className="h-5 w-5 fill-current" />
          <span className="font-mono text-[10px] uppercase font-bold tracking-widest mt-1">AI</span>
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
          <HistoryIcon className="h-5 w-5" />
          <span className="font-mono text-[10px] uppercase tracking-widest mt-1">History</span>
        </button>
        {/* Profile */}
        <button
          onClick={() => onNavigate(Screen.UPI_SUPPORT)}
          className="flex flex-col items-center justify-center text-[#444748] h-full px-4 hover:bg-gray-50 transition-colors"
        >
          <UserIcon className="h-5 w-5" />
          <span className="font-mono text-[10px] uppercase tracking-widest mt-1">Profile</span>
        </button>
      </nav>
    </div>
  );
}
