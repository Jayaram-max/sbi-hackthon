import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Landmark,
  Bell,
  User,
  Eye,
  EyeOff,
  LogIn,
  Mic,
  Fingerprint,
  ScanFace,
  ArrowLeft,
  Loader2,
  X,
  CheckCircle2,
  ShieldCheck,
  Cpu
} from 'lucide-react';

interface LoginScreenProps {
  onLoginSuccess: () => void;
  onVoiceTrigger: () => void;
  onForgotPassword: () => void;
  onRegisterAccount: () => void;
  onBack: () => void;
}

export default function LoginScreen({
  onLoginSuccess,
  onVoiceTrigger,
  onForgotPassword,
  onRegisterAccount,
  onBack
}: LoginScreenProps) {
  const [userId, setUserId] = useState('');
  const [securityKey, setSecurityKey] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Simulated system verification states
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationLog, setVerificationLog] = useState<string[]>([]);
  const [verificationStep, setVerificationStep] = useState(0);

  // Simulated biometrics states
  const [biometricType, setBiometricType] = useState<'face' | 'fingerprint' | null>(null);
  const [biometricStatus, setBiometricStatus] = useState<'idle' | 'scanning' | 'success'>('idle');
  const [biometricProgress, setBiometricProgress] = useState(0);
  const [biometricLogs, setBiometricLogs] = useState<string[]>([]);

  // Autofill helpers for easier demo testing
  const handleAutofill = () => {
    setUserId('JAYARAM_HR');
    setSecurityKey('SECURE_KEY_5678');
  };

  // Login form submission handler with high-fidelity secure simulations
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isVerifying || biometricType) return;

    setIsVerifying(true);
    setVerificationStep(0);
    setVerificationLog(['Initializing encrypted handshake...', 'Connecting to SBI secure core gateway...']);

    // Step 1: Secure Handshake
    setTimeout(() => {
      setVerificationStep(1);
      setVerificationLog(prev => [...prev, '[OK] SSL connection established.', 'Validating credential certificates...']);
    }, 600);

    // Step 2: Credential Decryption
    setTimeout(() => {
      setVerificationStep(2);
      setVerificationLog(prev => [...prev, '[OK] Decryption handshake success.', 'Matching cryptokey signature...']);
    }, 1200);

    // Step 3: Authorization
    setTimeout(() => {
      setVerificationStep(3);
      setVerificationLog(prev => [...prev, '[OK] Authority check successful.', 'Authorizing dashboard session entry...']);
    }, 1800);

    // Success redirect
    setTimeout(() => {
      onLoginSuccess();
    }, 2400);
  };

  // Face ID & Touch ID simulated scanning routine
  useEffect(() => {
    if (!biometricType) return;

    setBiometricStatus('scanning');
    setBiometricProgress(0);

    if (biometricType === 'face') {
      setBiometricLogs([
        'Initializing high-precision front camera...',
        'Adjusting exposure and spatial keypoint map...'
      ]);
    } else {
      setBiometricLogs([
        'Activating solid-state capacitive reader...',
        'Calibrating touch surface matrix...'
      ]);
    }

    const interval = setInterval(() => {
      setBiometricProgress(prev => {
        const next = prev + 5;
        
        // Push dynamic log lines at key progress points
        if (next === 20) {
          setBiometricLogs(logs => [
            ...logs,
            biometricType === 'face'
              ? '[OK] Spatial tracking bounds acquired.'
              : '[OK] Capacitive ridges locked.'
          ]);
        } else if (next === 45) {
          setBiometricLogs(logs => [
            ...logs,
            biometricType === 'face'
              ? 'Analyzing 16,384 structural depth coordinates...'
              : 'Mapping 256 minutiae orientation sectors...'
          ]);
        } else if (next === 70) {
          setBiometricLogs(logs => [
            ...logs,
            biometricType === 'face'
              ? '[OK] Dynamic liveness profile matched: 99.9%'
              : '[OK] Ridges fingerprint matched: 100%'
          ]);
        } else if (next === 90) {
          setBiometricLogs(logs => [
            ...logs,
            'Decrypting offline session auth token...'
          ]);
        }

        if (next >= 100) {
          clearInterval(interval);
          setBiometricStatus('success');
          
          setTimeout(() => {
            onLoginSuccess();
            setBiometricType(null);
          }, 800);

          return 100;
        }
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [biometricType, onLoginSuccess]);

  return (
    <div className="flex h-full w-full flex-col bg-[#f9f9f9] select-none text-left relative overflow-hidden">
      {/* Top App Bar */}
      <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b-[1.5px] border-black bg-[#f9f9f9] px-6">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="flex h-8 w-8 items-center justify-center border-[1.5px] border-black bg-white hover:bg-gray-100 transition-colors rounded-none mr-1"
            title="Go Back"
          >
            <ArrowLeft className="h-4 w-4 text-black stroke-[2.5]" />
          </button>
          <Landmark className="h-5 w-5 text-black" />
          <span className="font-display text-xl font-extrabold tracking-tighter text-black">SBI AI</span>
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
          <Bell className="h-5 w-5 text-black" />
        </button>
      </header>

      {/* Main Container */}
      <div className="flex-1 overflow-y-auto px-6 pb-28 pt-6">
        {/* Title */}
        <section className="mb-6">
          <h1 className="font-display text-3xl font-extrabold uppercase leading-none text-black">
            Welcome
            <br />
            Back
          </h1>
          <p className="mt-2 font-sans text-sm text-[#444748]">
            Secure access to your personal AI banking dashboard.
          </p>
        </section>

        {/* Login Form Card */}
        <div className="relative bg-white border-[1.5px] border-black p-6 flex flex-col gap-5">
          {/* Decorative Accent Corner Shapes */}
          <div className="absolute top-0 right-0 w-12 h-[1.5px] bg-black"></div>
          <div className="absolute top-0 right-0 w-[1.5px] h-12 bg-black"></div>

          {/* Quick Fill Helper */}
          <div className="flex justify-between items-center">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#747878] font-bold">SBI AI SECURE ENTRY</span>
            <button
              onClick={handleAutofill}
              className="font-mono text-[10px] text-[#4d6700] hover:underline font-bold transition-all"
              type="button"
            >
              [ Autofill Credentials ]
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* User ID Input */}
            <div className="space-y-1.5">
              <label className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#444748] block" htmlFor="user-id">
                User ID
              </label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  id="user-id"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="w-full h-14 px-4 bg-white border-[1.5px] border-black font-mono text-sm focus:border-[2.5px] focus:outline-none transition-all placeholder:text-gray-400"
                  placeholder="ENTER YOUR ID"
                  required
                  disabled={isVerifying}
                />
                <div className="absolute right-4 flex items-center text-[#444748]">
                  <User className="h-5 w-5 opacity-70" />
                </div>
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <label className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#444748] block" htmlFor="security-key">
                Security Key
              </label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="security-key"
                  value={securityKey}
                  onChange={(e) => setSecurityKey(e.target.value)}
                  className="w-full h-14 px-4 bg-white border-[1.5px] border-black font-mono text-sm tracking-widest focus:border-[2.5px] focus:outline-none transition-all placeholder:text-gray-400"
                  placeholder="••••••••"
                  required
                  disabled={isVerifying}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 flex items-center text-[#444748]"
                  disabled={isVerifying}
                >
                  {showPassword ? <EyeOff className="h-5 w-5 opacity-70" /> : <Eye className="h-5 w-5 opacity-70" />}
                </button>
              </div>
            </div>

            {/* Login button / Simulated Gateway verification */}
            <button
              type="submit"
              disabled={isVerifying}
              className={`w-full h-14 font-display text-lg font-bold flex items-center justify-center gap-2 neo-shadow hover:shadow-[#bff521] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer mt-2 ${
                isVerifying ? 'bg-[#eeeeee] text-gray-500 border-gray-400 cursor-not-allowed shadow-none hover:shadow-none hover:translate-y-0' : 'bg-black text-white'
              }`}
            >
              {isVerifying ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin text-black" />
                  <span>VERIFYING PROFILE...</span>
                </>
              ) : (
                <>
                  <span>LOGIN</span>
                  <LogIn className="h-5 w-5" />
                </>
              )}
            </button>
          </form>

          {/* Secure Handshake Logs */}
          <AnimatePresence>
            {isVerifying && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="border-[1.5px] border-black bg-black text-[#bff521] p-3 font-mono text-[10px] space-y-1 max-h-32 overflow-y-auto leading-relaxed"
              >
                <div className="flex justify-between border-b border-[#bff521]/30 pb-1 mb-1.5 font-bold uppercase tracking-wider">
                  <span>[ SECURE GATEWAY ]</span>
                  <span>SSL_v3.2</span>
                </div>
                {verificationLog.map((log, i) => (
                  <div key={i} className="flex gap-1.5 items-start">
                    <span className="text-gray-400 shrink-0">&gt;</span>
                    <span>{log}</span>
                  </div>
                ))}
                <div className="flex gap-2 items-center text-xs mt-2 font-bold bg-[#bff521]/15 p-1">
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  <span className="uppercase">Handshake progress: {Math.round((verificationStep / 3) * 100)}%</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Links - Fully Operational */}
          <div className="flex justify-between items-center mt-1">
            <button
              onClick={onForgotPassword}
              className="font-mono text-[11px] text-black font-bold underline decoration-[#bff521] decoration-[1.5px] underline-offset-4 cursor-pointer hover:text-[#4d6700] transition-colors"
            >
              Forgot Password?
            </button>
            <button
              onClick={onRegisterAccount}
              className="font-mono text-[11px] text-[#444748] hover:text-black font-bold underline decoration-dotted decoration-gray-400 decoration-1 underline-offset-4 cursor-pointer transition-colors"
            >
              Register New Account
            </button>
          </div>
        </div>

        {/* Biometrics Block */}
        <section className="mt-8 flex flex-col gap-3">
          <p className="font-mono text-[11px] font-bold uppercase text-[#444748] text-center tracking-wider">
            Or verify with AI biometric
          </p>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setBiometricType('face')}
              disabled={isVerifying}
              className="h-20 border-[1.5px] border-black bg-[#eeeeee] flex flex-col items-center justify-center gap-1.5 transition-all hover:bg-gray-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ScanFace className="h-6 w-6 text-black" />
              <span className="font-mono text-[10px] uppercase font-bold text-black">Face Unlock</span>
            </button>
            <button
              onClick={() => setBiometricType('fingerprint')}
              disabled={isVerifying}
              className="h-20 border-[1.5px] border-black bg-[#eeeeee] flex flex-col items-center justify-center gap-1.5 transition-all hover:bg-gray-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Fingerprint className="h-6 w-6 text-black" />
              <span className="font-mono text-[10px] uppercase font-bold text-black">Touch ID</span>
            </button>
          </div>
        </section>

        {/* Security Info Panel */}
        <div className="mt-8">
          <div className="relative h-44 border-[1.5px] border-black overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA4GQ0siB5gSDzVBJUWpVx9iNR3vS1zAhjZKoOO5K7I7lz5aB3YIJVc-xa6oSIr4asX0x3IwUqZwj-fy3Xi3RnF9KJVibrBdPAO9rv04kMouAt2lCPm0-fYVYQhb5lcsanTwG1tB1J_BeG291b0zNXHwM4HM5kCqHsKn6J9iq8ysQ2s3rytZVA_DqJKG66xx2qJo6i23jgsCz9OuQ6uoRQiJE4-0tDAPJs8nSgxKFvfXGKRFh3nolVnmrzHee99lpF8EyyYXtXWMKQh')`
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10"></div>
            <div className="absolute bottom-4 left-4 z-20 text-white">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-80">Security Protocol</p>
              <h3 className="font-display text-xl font-bold leading-none">256-BIT ENCRYPTION</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Biometric Interactive Simulator Modal Overlay */}
      <AnimatePresence>
        {biometricType && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-6 text-white text-center"
          >
            <div className="w-full max-w-sm flex flex-col items-center relative">
              {/* Cancel scanner */}
              <button
                onClick={() => setBiometricType(null)}
                className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center border-[1.5px] border-white/40 rounded-full hover:bg-white/10 transition-colors"
                title="Cancel Scan"
              >
                <X className="h-5 w-5 text-white" />
              </button>

              <div className="mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#bff521] font-bold">
                  {biometricType === 'face' ? 'FACE SCANNER v3' : 'TOUCH ID READER'}
                </span>
                <h2 className="font-display text-2xl font-extrabold uppercase mt-1">
                  {biometricStatus === 'scanning' ? 'Verifying Identity...' : 'Access Granted!'}
                </h2>
                <p className="font-sans text-xs text-gray-300 max-w-[280px] mx-auto mt-1">
                  {biometricStatus === 'scanning'
                    ? 'Device biometric engine compiling matching factors...'
                    : 'Encrypted token match successful.'}
                </p>
              </div>

              {/* Scanning visualization container */}
              <div className="relative flex h-52 w-52 items-center justify-center mb-8">
                {/* Laser scan lines or touch fingerprint */}
                {biometricStatus === 'scanning' && (
                  <>
                    <div className="absolute inset-0 border border-[#bff521]/20 rounded-full animate-ping opacity-70"></div>
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-[#bff521] opacity-80 shadow-[0_0_15px_#bff521] rounded-full animate-bounce"></div>
                  </>
                )}

                <div className={`relative flex h-48 w-48 items-center justify-center rounded-full border-2 border-dashed bg-black/50 transition-all duration-300 ${
                  biometricStatus === 'success' ? 'border-[#bff521] bg-[#bff521]/15 scale-105' : 'border-[#bff521]/40'
                }`}>
                  {biometricStatus === 'success' ? (
                    <CheckCircle2 className="h-20 w-20 text-[#bff521] stroke-[1.5]" />
                  ) : biometricType === 'face' ? (
                    <ScanFace className="h-20 w-20 text-white animate-pulse" />
                  ) : (
                    <Fingerprint className="h-20 w-20 text-white animate-pulse" />
                  )}
                </div>
              </div>

              {/* Live matching stats bar */}
              <div className="w-full bg-white/10 border border-white/20 p-1 rounded mb-4">
                <div
                  className="h-2 bg-[#bff521] transition-all duration-100 rounded-sm"
                  style={{ width: `${biometricProgress}%` }}
                ></div>
                <div className="flex justify-between font-mono text-[9px] uppercase tracking-wider text-gray-400 mt-1 px-1">
                  <span>Match factor</span>
                  <span>{biometricProgress}%</span>
                </div>
              </div>

              {/* Scrolling terminal logs */}
              <div className="w-full bg-black border border-white/20 p-4 h-32 overflow-y-auto text-left font-mono text-[10px] text-[#bff521] space-y-1">
                <div className="flex justify-between border-b border-white/10 pb-1 mb-2 font-bold text-white uppercase tracking-wider">
                  <span>[ BIO_SHIELD ]</span>
                  <span>STATUS: {biometricStatus.toUpperCase()}</span>
                </div>
                {biometricLogs.map((log, i) => (
                  <div key={i} className="flex gap-1.5 items-start">
                    <span className="text-gray-500 shrink-0">&gt;</span>
                    <span>{log}</span>
                  </div>
                ))}
              </div>

              {/* Device biometric local storage assurance */}
              <div className="mt-4 flex items-center gap-2 text-left bg-white/5 border border-white/10 p-3">
                <ShieldCheck className="h-5 w-5 text-[#bff521] shrink-0" />
                <span className="font-sans text-[10px] text-gray-300 leading-tight">
                  Your biometric fingerprint and scan mappings are kept isolated strictly within your secure device hardware.
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating mic button */}
      <div className="absolute bottom-24 right-6 z-30">
        <button
          onClick={onVoiceTrigger}
          className="flex h-14 w-14 items-center justify-center bg-[#bff521] text-black border-[1.5px] border-black rounded-none neo-shadow active:translate-x-0.5 active:translate-y-0.5 hover:scale-105 transition-transform"
        >
          <Mic className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
