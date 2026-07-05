import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import SplashScreen from './screens/SplashScreen';
import LanguageSelectionScreen from './screens/LanguageSelectionScreen';
import FaceIdAuthScreen from './screens/FaceIdAuthScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import ChatAssistantScreen from './screens/ChatAssistantScreen';
import VoiceAssistantScreen from './screens/VoiceAssistantScreen';
import BankingGuideScreen from './screens/BankingGuideScreen';
import ResetStep1Screen from './screens/ResetStep1Screen';
import ResetStep2Screen from './screens/ResetStep2Screen';
import SendMoneyScreen from './screens/SendMoneyScreen';
import UpiSupportScreen from './screens/UpiSupportScreen';
import ScanQrScreen from './screens/ScanQrScreen';
import { Screen } from './types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.SPLASH);

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.SPLASH:
        return (
          <SplashScreen
            onNext={() => handleNavigate(Screen.LANGUAGE)}
          />
        );
      case Screen.LANGUAGE:
        return (
          <LanguageSelectionScreen
            onBack={() => handleNavigate(Screen.SPLASH)}
            onNext={() => handleNavigate(Screen.FACE_ID)}
          />
        );
      case Screen.FACE_ID:
        return (
          <FaceIdAuthScreen
            onBack={() => handleNavigate(Screen.LANGUAGE)}
            onSuccess={() => handleNavigate(Screen.ONBOARDING)}
          />
        );
      case Screen.ONBOARDING:
        return (
          <OnboardingScreen
            onNext={() => handleNavigate(Screen.LOGIN)}
            onLogin={() => handleNavigate(Screen.LOGIN)}
          />
        );
      case Screen.LOGIN:
        return (
          <LoginScreen
            onLoginSuccess={() => handleNavigate(Screen.DASHBOARD)}
            onVoiceTrigger={() => handleNavigate(Screen.VOICE)}
            onForgotPassword={() => handleNavigate(Screen.RESET_STEP1)}
            onRegisterAccount={() => handleNavigate(Screen.ONBOARDING)}
            onBack={() => handleNavigate(Screen.ONBOARDING)}
          />
        );
      case Screen.DASHBOARD:
        return (
          <DashboardScreen
            onNavigate={handleNavigate}
            onLogout={() => handleNavigate(Screen.LOGIN)}
          />
        );
      case Screen.CHAT:
        return (
          <ChatAssistantScreen
            onNavigate={handleNavigate}
          />
        );
      case Screen.VOICE:
        return (
          <VoiceAssistantScreen
            onBack={() => handleNavigate(Screen.DASHBOARD)}
            onNavigate={handleNavigate}
          />
        );
      case Screen.GUIDE:
        return (
          <BankingGuideScreen
            onNavigate={handleNavigate}
          />
        );
      case Screen.RESET_STEP1:
        return (
          <ResetStep1Screen
            onBack={() => handleNavigate(Screen.GUIDE)}
            onNext={() => handleNavigate(Screen.RESET_STEP2)}
            onNavigate={handleNavigate}
          />
        );
      case Screen.RESET_STEP2:
        return (
          <ResetStep2Screen
            onBack={() => handleNavigate(Screen.RESET_STEP1)}
            onNext={() => handleNavigate(Screen.DASHBOARD)}
            onNavigate={handleNavigate}
          />
        );
      case Screen.SEND_MONEY:
        return (
          <SendMoneyScreen
            onBack={() => handleNavigate(Screen.DASHBOARD)}
            onSuccess={() => handleNavigate(Screen.DASHBOARD)}
          />
        );
      case Screen.UPI_SUPPORT:
        return (
          <UpiSupportScreen
            onNavigate={handleNavigate}
          />
        );
      case Screen.SCAN_QR:
        return (
          <ScanQrScreen
            onBack={() => handleNavigate(Screen.DASHBOARD)}
            onQrScanned={() => handleNavigate(Screen.SEND_MONEY)}
            onNavigate={handleNavigate}
          />
        );
      default:
        return (
          <div className="flex h-full w-full items-center justify-center font-mono text-xs">
            Unknown Screen State
          </div>
        );
    }
  };

  const isSplash = currentScreen === Screen.SPLASH;

  return (
    <div 
      className={`mx-auto my-0 flex h-full w-full flex-col overflow-hidden relative transition-all duration-300 ${
        isSplash 
          ? 'max-w-none border-0 bg-white shadow-none' 
          : 'max-w-md border-[2.5px] border-black bg-[#f9f9f9] shadow-[12px_12px_0_0_rgba(0,0,0,1)]'
      }`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, x: isSplash ? 0 : 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isSplash ? 0 : -12 }}
          transition={{ duration: 0.22, ease: 'easeInOut' }}
          className="h-full w-full flex-1"
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
