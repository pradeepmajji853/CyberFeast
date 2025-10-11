// Firebase initialized with provided credentials.
import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDQwYetArY9ymAhvvTMRlQNlRl66WMA5A0',
  authDomain: 'forensiq-bc370.firebaseapp.com',
  projectId: 'forensiq-bc370',
  storageBucket: 'forensiq-bc370.firebasestorage.app',
  messagingSenderId: '803165638717',
  appId: '1:803165638717:web:9a90a62b6379cb5c05da54',
  measurementId: 'G-XV91BQ5VC4',
}

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)
export const db = getFirestore(app)

// Initialize Analytics only in the browser to avoid SSR errors
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null

export const isConfigured = true
