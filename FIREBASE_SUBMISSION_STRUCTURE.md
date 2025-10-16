# Firebase Submission Structure - CyberFest 2025
## Autopsy Forensics Challenge - Jimmy Wilson Case

### ✅ Single Collection Architecture

All challenge submissions are stored in **ONE collection** in Firebase Firestore:

**Collection Name:** `challenge_submissions`

### 📊 Document Structure

Each saved answer becomes a separate document in the same collection with the following fields:

```javascript
{
  username: "participant_username",           // String - Participant identifier
  challengeId: 1,                            // Number - Challenge ID (1-15)
  challengeTitle: "Deleted File Database ID", // String - Challenge title
  userAnswer: "participant_answer",          // String - User's submitted answer
  difficulty: "Medium",                      // String - Easy/Medium/Hard/Expert
  points: 150,                              // Number - Points for this challenge
  category: "Intermediate",                 // String - Intermediate/Hard/Investigator
  timestamp: Firebase.Timestamp,            // Timestamp - When submitted to Firebase
  status: "submitted",                      // String - Submission status
  savedAt: "2025-10-16T10:30:00.000Z"      // String - When saved locally first
}
```

### 🔄 Submission Workflow

1. **Local Storage Phase:**
   - User enters username
   - User answers challenges one by one
   - Each answer is saved locally in browser state
   - Progress tracker shows "X/15 Ready"

2. **Batch Submission Phase:**
   - User clicks "Submit All" button
   - All locally saved answers are submitted at once
   - Each answer becomes a separate document in `challenge_submissions`
   - All documents share the same collection for easy querying

### 📁 Firebase Collection Query Examples

**Get all submissions for a specific user:**
```javascript
const userSubmissions = await getDocs(
  query(
    collection(db, 'challenge_submissions'),
    where('username', '==', 'participant_username')
  )
)
```

**Get all submissions for a specific challenge:**
```javascript
const challengeSubmissions = await getDocs(
  query(
    collection(db, 'challenge_submissions'),
    where('challengeId', '==', 1)
  )
)
```

**Get submissions by difficulty level:**
```javascript
const hardChallenges = await getDocs(
  query(
    collection(db, 'challenge_submissions'),
    where('difficulty', '==', 'Hard')
  )
)
```

### 🏆 Scoring & Evaluation

**Point Distribution:**
- **Intermediate Level (Medium):** 5 challenges × 150 points = 750 points
- **Hard Level:** 5 challenges × 250 points = 1,250 points  
- **Investigator Level (Expert):** 5 challenges × 350 points = 1,750 points
- **Total Possible Points:** 3,750 points

**Evaluation Process:**
1. Export all documents from `challenge_submissions` collection
2. Group by `username` to get each participant's submissions
3. Compare `userAnswer` with correct answers
4. Calculate total score per participant
5. Generate leaderboard

### 🔍 Admin Queries for Evaluation

**Get all participants:**
```javascript
const participants = await getDocs(collection(db, 'challenge_submissions'))
const uniqueUsers = [...new Set(participants.docs.map(doc => doc.data().username))]
```

**Get participant's complete submission:**
```javascript
const userAnswers = await getDocs(
  query(
    collection(db, 'challenge_submissions'),
    where('username', '==', 'participant_username'),
    orderBy('challengeId', 'asc')
  )
)
```

### 📈 Benefits of Single Collection Approach

1. **Centralized Data:** All submissions in one place
2. **Easy Querying:** Simple Firebase queries for reporting
3. **Scalable:** Can handle thousands of participants
4. **Atomic Operations:** All answers submitted together
5. **Audit Trail:** Complete timestamp tracking
6. **Flexible Analysis:** Can group/filter by any field

### 🛡️ Security Features

- No correct answers stored in frontend code
- Mandatory username entry
- Local save before Firebase submission
- Error handling with detailed logging
- Submission confirmation dialog
- One-time submission per user session

---

**Collection:** `challenge_submissions` ✅  
**Documents per User:** Up to 15 (one per challenge)  
**Total Expected Documents:** Participants × Answered_Challenges  
**Last Updated:** October 16, 2025
