/**
 * Types and Enums for the SBI AI Banking Companion App
 */

export enum Screen {
  SPLASH = 'SPLASH',
  LANGUAGE = 'LANGUAGE',
  FACE_ID = 'FACE_ID',
  ONBOARDING = 'ONBOARDING',
  LOGIN = 'LOGIN',
  DASHBOARD = 'DASHBOARD',
  CHAT = 'CHAT',
  VOICE = 'VOICE',
  GUIDE = 'GUIDE',
  RESET_STEP1 = 'RESET_STEP1',
  RESET_STEP2 = 'RESET_STEP2',
  SEND_MONEY = 'SEND_MONEY',
  UPI_SUPPORT = 'UPI_SUPPORT',
  SCAN_QR = 'SCAN_QR'
}

export interface Transaction {
  id: string;
  merchant: string;
  date: string;
  amount: number;
  type: 'debit' | 'credit';
  icon: string;
}

export interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
  stepCard?: {
    step: number;
    total: number;
    title: string;
  };
}
