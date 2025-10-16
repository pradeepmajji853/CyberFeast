# CyberFest 2025 - Autopsy Forensics Challenge Answer Key
## Jimmy Wilson Case

**⚠️ CONFIDENTIAL - FOR ORGANIZERS ONLY ⚠️**

This document contains the answer key for the Autopsy Forensics Challenge - Jimmy Wilson Case. This information should only be accessible to event organizers and judges for evaluation purposes.

---

## Challenge Categories & Answers

### 🟡 Intermediate Level (150 points each)

**Challenge 1: Deleted File Database ID**
- **Question:** What is the internal database ID of the deleted file draft_project.txt?
- **Answer:** [To be determined during case setup]
- **Explanation:** Participants need to locate the deleted file in Autopsy's database and find its internal ID number.

**Challenge 2: SHA-256 Hash Analysis**
- **Question:** What is the SHA-256 hash of secrets.txt?
- **Answer:** [To be determined during case setup]
- **Explanation:** Participants must calculate or find the SHA-256 hash value of the secrets.txt file.

**Challenge 3: File Metadata Recovery**
- **Question:** According to file metadata, what was the original path of deleted_photo.jpg before deletion?
- **Answer:** [To be determined during case setup]
- **Explanation:** Participants need to examine file metadata to determine the original file path before deletion.

**Challenge 4: Keyword Search Analysis**
- **Question:** What keyword produces exactly 3 hits in the keyword search index?
- **Answer:** [To be determined during case setup]
- **Explanation:** Participants must use Autopsy's keyword search feature to find a term that returns exactly 3 results.

**Challenge 5: MAC Time Analysis**
- **Question:** What is the MAC (Modified–Accessed–Created) time difference between resume.docx and secrets.txt (in minutes)?
- **Answer:** [To be determined during case setup]
- **Explanation:** Participants need to compare MAC times of both files and calculate the difference in minutes.

### 🔴 Hard Level (250 points each)

**Challenge 6: Registry Hive Analysis**
- **Question:** What is the internal ID of the Windows registry hive NTUSER.DAT?
- **Answer:** [To be determined during case setup]
- **Explanation:** Participants must locate the NTUSER.DAT registry hive and find its internal database ID.

**Challenge 7: Last Logged User**
- **Question:** From registry analysis, what is the username of the account last logged in?
- **Answer:** [To be determined during case setup]
- **Explanation:** Participants need to analyze Windows registry to determine the last logged in user account.

**Challenge 8: Prefetch Analysis**
- **Question:** What program was last executed based on the Prefetch folder artifacts?
- **Answer:** [To be determined during case setup]
- **Explanation:** Participants must examine Windows Prefetch files to identify the most recently executed program.

**Challenge 9: Password Location**
- **Question:** Which file contains a plaintext password, and what is its full path?
- **Answer:** [To be determined during case setup]
- **Explanation:** Participants need to locate a file containing a plaintext password and provide its complete path.

**Challenge 10: Password Content**
- **Question:** What is the string content of that password?
- **Answer:** [To be determined during case setup]
- **Explanation:** Participants must extract and provide the actual password string from the identified file.

### 🟣 Investigator Level (350 points each)

**Challenge 11: USB Device Serial**
- **Question:** What is the USB serial number of the most recently connected removable device?
- **Answer:** [To be determined during case setup]
- **Explanation:** Participants need to analyze USB device artifacts to find the serial number of the most recent removable device.

**Challenge 12: USB Connection Time**
- **Question:** At what UTC time was that USB device last connected (from the SYSTEM hive)?
- **Answer:** [To be determined during case setup]
- **Explanation:** Participants must examine the Windows SYSTEM registry hive to determine the exact UTC connection time.

**Challenge 13: GPS Coordinates**
- **Question:** What are the GPS coordinates embedded in the image vacation.jpg (from EXIF)?
- **Answer:** [To be determined during case setup]
- **Explanation:** Participants need to extract GPS coordinates from the EXIF metadata of the vacation.jpg image file.

**Challenge 14: Data Exfiltration Analysis**
- **Question:** Which executable was responsible for copying data to external media (based on recent file access correlation)?
- **Answer:** [To be determined during case setup]
- **Explanation:** Participants must correlate file access patterns to identify which executable copied data to external media.

**Challenge 15: Timeline Correlation**
- **Question:** According to timeline correlation, what was the last user action before shutdown?
- **Answer:** [To be determined during case setup]
- **Explanation:** Participants need to use timeline analysis to determine the final user action before system shutdown.

---

## Evaluation Guidelines

### Point Distribution:
- **Intermediate Level:** 5 challenges × 150 points = 750 points
- **Hard Level:** 5 challenges × 250 points = 1,250 points  
- **Investigator Level:** 5 challenges × 350 points = 1,750 points
- **Total Possible Points:** 3,750 points

### Scoring Criteria:
- **Exact Match:** Full points
- **Partial Credit:** May be awarded for answers that show understanding but are slightly incorrect
- **Case Sensitivity:** Answers should be evaluated with consideration for case sensitivity where appropriate
- **Format Flexibility:** Accept reasonable variations in answer format (e.g., timestamps with/without seconds)

### Notes for Judges:
1. Verify all answers against the actual Autopsy case file before the event
2. Document any alternative acceptable answers discovered during case preparation
3. Be prepared to verify answers by demonstrating the solution path in Autopsy
4. Consider partial credit for answers that demonstrate correct methodology but minor errors

---

## Firebase Collection Structure

Submissions are saved to: `challenge_submissions`

### Document Fields:
- `username` (string) - Participant's username
- `challengeId` (number) - Challenge ID (1-15)
- `challengeTitle` (string) - Challenge title
- `userAnswer` (string) - Participant's submitted answer
- `difficulty` (string) - Medium/Hard/Expert
- `points` (number) - Potential points if correct
- `timestamp` (timestamp) - When submitted
- `status` (string) - "submitted"
- `category` (string) - Intermediate/Hard/Investigator

### Evaluation Process:
1. Set up the Jimmy Wilson Autopsy case file
2. Document all correct answers by working through each challenge
3. Export submissions from Firebase Console
4. Compare `userAnswer` with verified correct answers
5. Award points for exact or acceptable variations
6. Update final scores for leaderboard

---

**Last Updated:** October 16, 2025  
**Case Prepared By:** [To be filled during case setup]  
**Reviewed By:** [To be filled during case review]

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
