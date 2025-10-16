"use client"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTrophy, FaTimes, FaCheck, FaFlag, FaClock, FaUser, FaPaperPlane, FaSave } from 'react-icons/fa'
import { db, isConfigured } from '../firebaseConfig'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

// Challenges data - no answers stored in frontend for security
const challengesData = [
  {
    id: 1,
    title: "Network Analysis",
    description: "Analyze the network traffic and find the suspicious IP address that was communicating with the compromised system.",
    difficulty: "Easy",
    points: 100
  },
  {
    id: 2,
    title: "Memory Forensics",
    description: "Extract the password from the memory dump. The password is stored in plaintext in a specific process.",
    difficulty: "Medium",
    points: 200
  },
  {
    id: 3,
    title: "File Recovery",
    description: "A deleted file contains important evidence. What is the MD5 hash of the recovered file?",
    difficulty: "Hard",
    points: 300
  },
  {
    id: 4,
    title: "Email Header Analysis",
    description: "Examine the email headers to find the real sender's IP address behind the spoofed email.",
    difficulty: "Easy",
    points: 100
  },
  {
    id: 5,
    title: "Registry Forensics",
    description: "Find the timestamp when the malicious software was first installed on the system.",
    difficulty: "Medium",
    points: 200
  },
  {
    id: 6,
    title: "Web Log Analysis",
    description: "Identify the SQL injection attack pattern in the web server logs.",
    difficulty: "Hard",
    points: 300
  },
  {
    id: 7,
    title: "Mobile Forensics",
    description: "Extract the deleted SMS message from the Android device backup.",
    difficulty: "Medium",
    points: 200
  },
  {
    id: 8,
    title: "Steganography",
    description: "Find the hidden message in the image file using LSB steganography.",
    difficulty: "Hard",
    points: 300
  },
  {
    id: 9,
    title: "Browser Artifacts",
    description: "Recover the deleted browsing history to find the suspicious website visited.",
    difficulty: "Easy",
    points: 100
  },
  {
    id: 10,
    title: "Disk Imaging",
    description: "Calculate the SHA-256 hash of the disk image to verify its integrity.",
    difficulty: "Medium",
    points: 200
  },
  {
    id: 11,
    title: "Timeline Analysis",
    description: "Determine the exact time when the attacker first gained access to the system.",
    difficulty: "Hard",
    points: 300
  },
  {
    id: 12,
    title: "Password Cracking",
    description: "Crack the MD5 hashed password: 5d41402abc4b2a76b9719d911017c592",
    difficulty: "Easy",
    points: 100
  },
  {
    id: 13,
    title: "Network Packet Analysis",
    description: "Find the flag hidden in the TCP stream of the network capture.",
    difficulty: "Medium",
    points: 200
  },
  {
    id: 14,
    title: "Malware Analysis",
    description: "Identify the C&C server domain used by the malware sample.",
    difficulty: "Hard",
    points: 300
  },
  {
    id: 15,
    title: "Digital Signature Verification",
    description: "Verify the digital signature and extract the certificate's serial number.",
    difficulty: "Medium",
    points: 200
  }
]

export default function Challenges({ isOpen, onClose }) {
  const [username, setUsername] = useState('')
  const [isUsernameSet, setIsUsernameSet] = useState(false)
  const [currentChallenge, setCurrentChallenge] = useState(0)
  const [savedAnswers, setSavedAnswers] = useState({})
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [showResult, setShowResult] = useState(null)
  const [isSaving, setIsSaving] = useState(false)
  const [isSubmittingAll, setIsSubmittingAll] = useState(false)
  const [allSubmitted, setAllSubmitted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Load current answer when switching challenges
  useEffect(() => {
    if (savedAnswers[challenge?.id]) {
      setCurrentAnswer(savedAnswers[challenge.id].answer)
    } else {
      setCurrentAnswer('')
    }
  }, [currentChallenge, savedAnswers])

  const challenge = challengesData[currentChallenge]

  const handleSetUsername = () => {
    if (!username.trim()) {
      alert('Please enter a valid username!')
      return
    }
    setIsUsernameSet(true)
  }

  const handleSaveAnswer = () => {
    if (!currentAnswer.trim()) {
      alert('Please enter an answer first!')
      return
    }

    setIsSaving(true)
    
    // Save answer locally
    setSavedAnswers(prev => ({
      ...prev,
      [challenge.id]: {
        answer: currentAnswer.trim(),
        timestamp: new Date().toISOString(),
        challengeTitle: challenge.title,
        difficulty: challenge.difficulty,
        points: challenge.points
      }
    }))

    setShowResult('saved')
    setIsSaving(false)

    // Hide result after 2 seconds
    setTimeout(() => setShowResult(null), 2000)
  }

  const handleSubmitAll = async () => {
    const answersToSubmit = Object.keys(savedAnswers)
    
    if (answersToSubmit.length === 0) {
      alert('Please save at least one answer before submitting!')
      return
    }

    const confirmSubmit = window.confirm(
      `Are you sure you want to submit all ${answersToSubmit.length} answers? This action cannot be undone.`
    )

    if (!confirmSubmit) return

    setIsSubmittingAll(true)

    try {
      if (isConfigured) {
        console.log('Starting Firebase submission...')
        console.log('Database instance:', db)
        console.log('Saved answers count:', Object.keys(savedAnswers).length)
        
        // Test Firebase connection first
        try {
          const testRef = collection(db, 'challenge_submissions')
          console.log('Firebase collection reference created successfully')
        } catch (testError) {
          console.error('Failed to create collection reference:', testError)
          throw new Error('Firebase connection failed')
        }
        
        // Submit all saved answers to Firebase at once
        const submissions = Object.entries(savedAnswers).map(([challengeId, answerData]) => ({
          username: username.trim(),
          challengeId: parseInt(challengeId),
          challengeTitle: answerData.challengeTitle,
          userAnswer: answerData.answer,
          difficulty: answerData.difficulty,
          points: answerData.points,
          timestamp: serverTimestamp(),
          status: 'submitted',
          savedAt: answerData.timestamp
        }))

        console.log('Preparing to submit:', submissions.length, 'submissions')

        // Submit each answer individually to better track errors
        const results = []
        for (let i = 0; i < submissions.length; i++) {
          try {
            console.log(`Submitting answer ${i + 1}/${submissions.length}...`)
            const docRef = await addDoc(collection(db, 'challenge_submissions'), submissions[i])
            console.log(`Answer ${i + 1} submitted with ID:`, docRef.id)
            results.push({ success: true, id: docRef.id })
          } catch (submitError) {
            console.error(`Failed to submit answer ${i + 1}:`, submitError)
            results.push({ success: false, error: submitError.message })
          }
        }

        // Check if all submissions were successful
        const failedSubmissions = results.filter(r => !r.success)
        if (failedSubmissions.length > 0) {
          throw new Error(`${failedSubmissions.length} submissions failed. Check console for details.`)
        }

        console.log('All submissions successful!')
        setAllSubmitted(true)
        setShowResult('all_submitted')
        
        // Clear saved answers after successful submission
        setSavedAnswers({})
        setCurrentAnswer('')
      } else {
        console.error('Firebase not configured')
        alert('Firebase is not configured. Please contact the administrator.')
      }
    } catch (error) {
      console.error('Error submitting answers:', error)
      console.error('Error details:', {
        code: error.code,
        message: error.message,
        stack: error.stack
      })
      alert(`Error submitting answers: ${error.message}. Please try again or contact support.`)
    } finally {
      setIsSubmittingAll(false)
    }
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-500/20'
      case 'Medium': return 'text-yellow-400 bg-yellow-500/20'
      case 'Hard': return 'text-red-400 bg-red-500/20'
      default: return 'text-gray-400 bg-gray-500/20'
    }
  }

  const totalSaved = Object.keys(savedAnswers).length

  if (!isOpen) return null

  // Username entry screen
  if (!isUsernameSet) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-gradient-to-br from-[#1a1f3a] via-[#0e1833] to-[#1a1f3a] border border-cyan-500/30 rounded-3xl w-full max-w-md p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-8">
              <div className="p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 inline-flex mb-4">
                <FaUser className="text-cyan-400 text-3xl" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Welcome to CyberFest Challenges</h2>
              <p className="text-gray-400">Please enter your username to continue</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Username *
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className="w-full px-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSetUsername()
                    }
                  }}
                  autoFocus
                />
              </div>

              <motion.button
                onClick={handleSetUsername}
                disabled={!username.trim()}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                Start Challenges
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-gradient-to-br from-[#1a1f3a] via-[#0e1833] to-[#1a1f3a] border border-cyan-500/30 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                <FaTrophy className="text-cyan-400 text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">CyberFest Challenges</h2>
                <p className="text-gray-400 text-sm">Welcome, {username}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {!allSubmitted && totalSaved > 0 && (
                <motion.button
                  onClick={handleSubmitAll}
                  disabled={isSubmittingAll}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg disabled:opacity-50 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
                >
                  <FaPaperPlane />
                  {isSubmittingAll ? 'Submitting...' : `Submit All (${totalSaved})`}
                </motion.button>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
          </div>

          <div className="flex h-[calc(90vh-100px)]">
            {/* Sidebar - Challenges List */}
            <div className="w-80 border-r border-cyan-500/20 p-4 overflow-y-auto">
              {/* Status */}
              <div className="mb-6 p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-500/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">{totalSaved}</div>
                  <div className="text-sm text-gray-300">Saved Answers</div>
                  <div className="text-xs text-gray-400">{totalSaved}/15 Ready</div>
                  {allSubmitted && (
                    <div className="text-xs text-green-400 mt-1">✓ All Submitted</div>
                  )}
                </div>
              </div>

              {/* Challenges List */}
              <div className="space-y-2">
                {challengesData.map((ch, idx) => (
                  <motion.button
                    key={ch.id}
                    onClick={() => setCurrentChallenge(idx)}
                    whileHover={{ scale: 1.02 }}
                    className={`w-full text-left p-3 rounded-lg border transition-all duration-200 ${
                      currentChallenge === idx
                        ? 'bg-cyan-500/20 border-cyan-400/50'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-white text-sm">{ch.title}</span>
                      {savedAnswers[ch.id] && (
                        <FaCheck className="text-green-400 text-xs" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(ch.difficulty)}`}>
                        {ch.difficulty}
                      </span>
                      <span className="text-xs text-cyan-400">{ch.points}pts</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Main Content - Current Challenge */}
            <div className="flex-1 p-6 overflow-y-auto">
              <motion.div
                key={currentChallenge}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Challenge Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty}
                    </span>
                    <span className="text-cyan-400 font-medium">{challenge.points} points</span>
                    <span className="text-gray-400 text-sm">#{challenge.id}</span>
                    {savedAnswers[challenge.id] && (
                      <div className="flex items-center gap-1 text-green-400 text-sm">
                        <FaCheck />
                        Saved
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{challenge.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{challenge.description}</p>
                </div>

                {!allSubmitted ? (
                  /* Answer Section */
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <FaFlag className="inline mr-2" />
                        Your Answer
                      </label>
                      <input
                        type="text"
                        value={currentAnswer}
                        onChange={(e) => setCurrentAnswer(e.target.value)}
                        placeholder="Enter your answer here..."
                        className="w-full px-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && !isSaving) {
                            handleSaveAnswer()
                          }
                        }}
                      />
                    </div>

                    <motion.button
                      onClick={handleSaveAnswer}
                      disabled={isSaving || !currentAnswer.trim()}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <FaSave />
                      {isSaving ? 'Saving...' : 'Save Answer'}
                    </motion.button>

                    {/* Result Feedback */}
                    <AnimatePresence>
                      {showResult && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className={`p-4 rounded-lg border ${
                            showResult === 'saved'
                              ? 'bg-green-500/20 border-green-500/50 text-green-400'
                              : showResult === 'all_submitted'
                              ? 'bg-blue-500/20 border-blue-500/50 text-blue-400'
                              : 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <FaCheck />
                            <span className="font-medium">
                              {showResult === 'saved' && 'Answer saved locally!'}
                              {showResult === 'all_submitted' && 'All answers submitted successfully!'}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Saved Answer Display */}
                    {savedAnswers[challenge.id] && (
                      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="text-sm text-gray-400 mb-1">Saved answer:</div>
                        <div className="font-mono text-green-400">
                          {savedAnswers[challenge.id].answer}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          <FaClock className="inline mr-1" />
                          {new Date(savedAnswers[challenge.id].timestamp).toLocaleString()}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Submission Complete */
                  <div className="text-center py-12">
                    <div className="p-6 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 inline-flex mb-6">
                      <FaCheck className="text-green-400 text-4xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">All Answers Submitted!</h3>
                    <p className="text-gray-300 mb-6">
                      Your responses have been successfully submitted and will be reviewed by our team.
                    </p>
                    <p className="text-gray-400 text-sm">
                      Thank you for participating in CyberFest 2025!
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
