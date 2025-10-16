// Firebase configuration for CyberFest 2025
import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQwYetArY9ymAhvvTMRlQNlRl66WMA5A0",
  authDomain: "forensiq-bc370.firebaseapp.com",
  projectId: "forensiq-bc370",
  storageBucket: "forensiq-bc370.firebasestorage.app",
  messagingSenderId: "803165638717",
  appId: "1:803165638717:web:9a90a62b6379cb5c05da54",
  measurementId: "G-XV91BQ5VC4"
}

// Initialize Firebase
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)

// Initialize Firestore
export const db = getFirestore(app)

// Initialize Analytics (only in browser environment)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null

// Firebase is now properly configured
export const isConfigured = true
