// Firebase config via environment variables. Do not commit secrets.
import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

const missing = Object.entries(firebaseConfig).filter(([, v]) => !v).map(([k]) => k)
if (missing.length && typeof window !== 'undefined') {
  // Log a non-fatal warning in the browser to help diagnose missing env vars
  // eslint-disable-next-line no-console
  console.warn('[firebaseConfig] Missing env vars:', missing.join(', '))
}

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const analytics = typeof window !== 'undefined' && firebaseConfig.measurementId ? getAnalytics(app) : null
export const isConfigured = missing.length === 0
