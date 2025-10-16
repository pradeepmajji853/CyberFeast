# CyberFest 2025 - Challenge Answer Key
## For Organizers/Admins Only

This file contains the correct answers for all challenges. Use this to evaluate submissions in Firebase.

### Challenge Answers:

**Challenge 1: Network Analysis**
- **Answer:** `192.168.1.100`
- **Points:** 100
- **Difficulty:** Easy

**Challenge 2: Memory Forensics**
- **Answer:** `cyberpass123`
- **Points:** 200
- **Difficulty:** Medium

**Challenge 3: File Recovery**
- **Answer:** `a1b2c3d4e5f6789012345678901234567890`
- **Points:** 300
- **Difficulty:** Hard

**Challenge 4: Email Header Analysis**
- **Answer:** `203.0.113.45`
- **Points:** 100
- **Difficulty:** Easy

**Challenge 5: Registry Forensics**
- **Answer:** `2024-03-15 14:32:17`
- **Points:** 200
- **Difficulty:** Medium

**Challenge 6: Web Log Analysis**
- **Answer:** `UNION SELECT * FROM users`
- **Points:** 300
- **Difficulty:** Hard

**Challenge 7: Mobile Forensics**
- **Answer:** `Meet at warehouse 23:00`
- **Points:** 200
- **Difficulty:** Medium

**Challenge 8: Steganography**
- **Answer:** `hidden_flag_cyberfest2025`
- **Points:** 300
- **Difficulty:** Hard

**Challenge 9: Browser Artifacts**
- **Answer:** `malicious-site.evil.com`
- **Points:** 100
- **Difficulty:** Easy

**Challenge 10: Disk Imaging**
- **Answer:** `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855`
- **Points:** 200
- **Difficulty:** Medium

**Challenge 11: Timeline Analysis**
- **Answer:** `2024-03-14 09:15:32`
- **Points:** 300
- **Difficulty:** Hard

**Challenge 12: Password Cracking**
- **Answer:** `hello`
- **Points:** 100
- **Difficulty:** Easy
- **Note:** MD5 hash `5d41402abc4b2a76b9719d911017c592` decodes to "hello"

**Challenge 13: Network Packet Analysis**
- **Answer:** `FLAG{packet_analysis_master}`
- **Points:** 200
- **Difficulty:** Medium

**Challenge 14: Malware Analysis**
- **Answer:** `c2.malware.command.com`
- **Points:** 300
- **Difficulty:** Hard

**Challenge 15: Digital Signature Verification**
- **Answer:** `1A2B3C4D5E6F7890`
- **Points:** 200
- **Difficulty:** Medium

---

## Firebase Collection Structure

Submissions are saved to: `challenge_submissions`

### Document Fields:
- `username` (string) - Participant's username
- `challengeId` (number) - Challenge ID (1-15)
- `challengeTitle` (string) - Challenge title
- `userAnswer` (string) - Participant's submitted answer
- `difficulty` (string) - Easy/Medium/Hard
- `points` (number) - Potential points if correct
- `timestamp` (timestamp) - When submitted
- `status` (string) - "pending_review"

### Evaluation Process:
1. Export submissions from Firebase Console
2. Compare `userAnswer` with correct answers above
3. Award points for exact matches (case-insensitive)
4. Update participant scores in a separate collection if needed

### Notes:
- Answers are case-insensitive
- Whitespace should be trimmed before comparison
- Consider partial credit for close answers if appropriate
