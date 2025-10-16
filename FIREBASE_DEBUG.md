## 🔧 Firebase Debugging Guide

### Current Issue: "Error submitting answers"

**Most Likely Cause**: Firestore security rules are blocking writes

### Steps to Fix:

1. **Go to Firebase Console**: 
   - Visit: https://console.firebase.google.com/project/forensiq-bc370
   - Sign in with your Google account

2. **Navigate to Firestore**:
   - Click "Firestore Database" in the left sidebar
   - Click "Rules" tab

3. **Update Security Rules**:
   Replace current rules with:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /challenge_submissions/{document} {
         allow read, write: if true;
       }
     }
   }
   ```

4. **Click "Publish"** to save changes

### Alternative Debugging Steps:

1. **Check Browser Console**: 
   - Open Developer Tools (F12)
   - Look for specific Firebase error messages

2. **Test Firebase Connection**:
   - Click "Challenges" in navbar
   - Enter username and save some answers
   - Try to submit - check console for detailed errors

### Common Error Messages:

- **"Missing or insufficient permissions"** → Security rules issue
- **"Network error"** → Internet connection or Firebase config
- **"Invalid argument"** → Data format issue

### Contact Info:
If issues persist, share the exact error message from browser console.
