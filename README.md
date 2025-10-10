# CyberFest 2025 – Forensics Edition

A modern, responsive Next.js 14 (App Router) landing site for the Digital Defense Club annual cybersecurity showcase.

## Tech
- Next.js 14
- Tailwind CSS
- Framer Motion
- Firebase Firestore (no auth)
- React Icons

## Getting Started
1. Install deps
```bash
npm i
```
2. Configure Firebase keys in `.env.local` (or edit `firebaseConfig.js` placeholders):
```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```
3. Run dev server
```bash
npm run dev
```

## Notes
- Registration form writes to `registrations` collection.
- Edit copy and timings in each component under `components/`.
