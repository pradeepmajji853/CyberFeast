# 🧪 CyberFest 2025 - Testing Guide

## Quick Testing Instructions

### 1. Access the Website
- Open: http://localhost:3000
- The CyberFest 2025 homepage should load with navigation

### 2. Open Challenges
- Click "Challenges" in the navigation bar (desktop) or mobile menu
- A modal should open with username entry screen

### 3. Enter Username
- Enter any username (e.g., "testuser123")
- Click "Start Challenges"
- You should see the challenges interface

### 4. Test Local Save Functionality
- Try answering Challenge 1 (Network Analysis)
- Enter any answer (e.g., "192.168.1.100")
- Click "Save Answer"
- You should see a green "Answer saved!" message
- The counter should show "1/15 saved answers"

### 5. Test Multiple Saves
- Answer a few more challenges
- Save each one locally
- Watch the counter increase (2/15, 3/15, etc.)

### 6. Test Firebase Submission
- After saving a few answers, click "Submit All Answers to Firebase"
- **Expected Result**: 
  - If security rules are configured: Success message
  - If not configured: Error about Firebase permissions

## 🔧 Firebase Configuration Test

### If Submissions Fail:
1. Go to Firebase Console: https://console.firebase.google.com/project/forensiq-bc370
2. Click "Firestore Database" → "Rules"
3. Update rules as shown in `FIREBASE_DEBUG.md`
4. Click "Publish"
5. Try submission again

### Successful Submission:
- Green success message appears
- Answers are cleared from local storage
- Data appears in Firebase console under `challenge_submissions` collection

## 📊 Data Verification

### Check Firebase Console:
1. Go to Firestore Database → Data
2. Look for `challenge_submissions` collection
3. Each submission should have:
   - username
   - challengeId
   - userAnswer
   - timestamp
   - etc.

## 🎯 Sample Test Answers

Use these for testing (from CHALLENGE_ANSWERS.md):

1. **Network Analysis**: `192.168.1.100`
2. **Memory Forensics**: `cyberpass123`
3. **File Recovery**: `a1b2c3d4e5f6789012345678901234567890`
4. **Email Header**: `203.0.113.45`
5. **Registry Forensics**: `2024-03-15 14:32:17`

## ✅ Expected Behavior Checklist

- [ ] Homepage loads without errors
- [ ] Challenges modal opens from navbar
- [ ] Username entry screen appears first
- [ ] Challenges list displays after username entry
- [ ] Local save shows success message and updates counter
- [ ] Multiple saves work correctly
- [ ] Firebase submission attempts to connect
- [ ] Error handling shows appropriate messages
- [ ] UI is responsive on mobile/desktop

## 🐛 Common Issues

1. **Module not found 'ogl'**: Run `npm install ogl`
2. **Port in use**: Server uses port 3001 if 3000 is busy
3. **Firebase errors**: Check browser console for detailed error messages
4. **Network errors**: Ensure internet connection for Firebase

## 📱 Mobile Testing

- Test on mobile browser or resize window
- Mobile menu should show "Challenges" button
- Modal should be responsive
- Touch interactions should work properly

---

**Ready to test!** 🚀
