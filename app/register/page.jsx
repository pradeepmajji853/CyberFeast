"use client"
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { db, isConfigured } from '@/firebaseConfig'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const steps = [
  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Jane Doe' },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'jane@example.com' },
  { id: 'org', label: 'College/Organization', type: 'text', placeholder: 'CBIT' },
  { id: 'phone', label: 'Contact Number', type: 'tel', placeholder: '9876543210' },
  { id: 'domain', label: 'Domain of Interest', type: 'select', options: ['Forensics','OSINT','AI','Others'] },
]

export default function RegisterPage() {
  const [index, setIndex] = useState(0)
  const [form, setForm] = useState({ name: '', email: '', org: '', phone: '', domain: 'Forensics' })
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const current = steps[index]

  const canNext = () => {
    const v = form[current.id]
    return typeof v === 'string' ? v.trim().length > 0 : !!v
  }

  const onNext = () => {
    if (!canNext()) return
    if (index < steps.length - 1) setIndex(index + 1)
  }

  const onBack = () => { if (index > 0) setIndex(index - 1) }

  const onSubmit = async () => {
    if (!canNext()) return
    try {
      setLoading(true)
      await addDoc(collection(db, 'registrations'), {
        fullName: form.name,
        email: form.email,
        organization: form.org,
        phone: form.phone,
        domain: form.domain,
        createdAt: serverTimestamp(),
      })
      setDone(true)
    } catch (e) {
      alert('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen pt-24 pb-16 flex items-center justify-center px-4 bg-gradient-to-b from-[#0B1020] via-[#0e1430] to-[#0B1020]">
      <div className="relative max-w-xl w-full">
        <h1 className="section-title text-center">Register for CyberFest 2025</h1>
        {/* Config notice */}
        {!isConfigured && (
          <p className="mt-3 text-center text-xs text-yellow-300/80">Note: Firebase keys are not configured. Submissions will fail until NEXT_PUBLIC_FIREBASE_* env vars are set.</p>
        )}
        {/* Progress bar */}
        <div className="mt-6 h-2 w-full rounded-full bg-white/10 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#0047AB] to-[#00B4FF]" style={{ width: `${(index / (steps.length - 1)) * 100}%` }} />
        </div>

        <div className="mt-8 p-6 md:p-8 rounded-xl bg-dark-card/70 border border-white/5 neon-border">
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3 }}
              >
                <label className="text-sm text-gray-300">{current.label}</label>
                {current.type === 'select' ? (
                  <select
                    value={form.domain}
                    onChange={(e) => setForm({ ...form, domain: e.target.value })}
                    className="mt-2 w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B4FF]/70"
                  >
                    {current.options.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                ) : (
                  <input
                    type={current.type}
                    placeholder={current.placeholder}
                    value={form[current.id]}
                    onChange={(e) => setForm({ ...form, [current.id]: e.target.value })}
                    className="mt-2 w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B4FF]/70"
                  />
                )}

                <div className="mt-6 flex items-center justify-between">
                  <button onClick={onBack} disabled={index === 0} className="px-4 py-2 rounded-md bg-white/5 disabled:opacity-50">Back</button>
                  {index === steps.length - 1 ? (
                    <motion.button onClick={onSubmit} disabled={loading} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-2 rounded-lg px-6 py-2 font-semibold text-black bg-gradient-to-r from-[#0047AB] to-[#00B4FF] shadow-neon disabled:opacity-60">
                      {loading && <span className="h-4 w-4 rounded-full border-2 border-black/40 border-t-black animate-spin" />}
                      Submit
                    </motion.button>
                  ) : (
                    <motion.button onClick={onNext} disabled={!canNext()} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-2 rounded-lg px-6 py-2 font-semibold text-black bg-gradient-to-r from-[#0047AB] to-[#00B4FF] shadow-neon disabled:opacity-60">
                      Next
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <p className="text-green-400 font-medium">Registration successful. See you at CyberFest 2025 – Forensics Edition.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  )
}
