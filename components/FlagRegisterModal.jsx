"use client"
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { db } from '@/firebaseConfig'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { FaTimes } from 'react-icons/fa'

export default function FlagRegisterModal({ open, onClose }) {
  const [mounted, setMounted] = useState(false)
  const [form, setForm] = useState({ name: '', roll: '', phone: '', flag: '' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose?.() }
    if (open) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const validate = () => {
    if (!form.name || !form.roll || !form.phone || !form.flag) return 'All fields are required.'
    if (!/^\+?\d{7,15}$/.test(form.phone.replace(/\s|-/g, ''))) return 'Enter a valid contact number.'
    if (form.roll.length < 3) return 'Enter a valid roll number.'
    return ''
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setMessage('')
    const err = validate()
    if (err) { setMessage(err); return }
    try {
      setLoading(true)
      await addDoc(collection(db, 'flagSubmissions'), {
        name: form.name,
        roll: form.roll,
        phone: form.phone,
        flag: form.flag,
        createdAt: serverTimestamp(),
      })
      setForm({ name: '', roll: '', phone: '', flag: '' })
      setMessage('Submitted! Please wait for results to get exciting goodies and free registration.')
    } catch (error) {
      console.error('[flagSubmissions] addDoc error:', error)
      const msg = error?.code ? `${error.code}: ${error.message || 'Submission failed.'}` : 'Submission failed. Please try again later.'
      setMessage(msg)
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
            <motion.div
              role="dialog"
              aria-modal="true"
              className="w-full max-w-lg rounded-2xl border border-white/10 bg-gradient-to-br from-[#0e1730] to-[#0a1026] shadow-xl"
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 220, damping: 26 }}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <h3 className="text-white font-semibold text-lg">Submit Flag</h3>
                <button aria-label="Close" onClick={onClose} className="p-2 rounded-md hover:bg-white/10 text-white">
                  <FaTimes />
                </button>
              </div>

              <form onSubmit={onSubmit} className="px-5 pb-6 pt-4 grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-300">Full Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      placeholder="Jane Doe"
                      className="mt-1 w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B4FF]/70"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-300">Roll Number</label>
                    <input
                      name="roll"
                      value={form.roll}
                      onChange={onChange}
                      placeholder="CBIT-XXXX"
                      className="mt-1 w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B4FF]/70"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-300">Contact Number</label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="9876543210"
                    className="mt-1 w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B4FF]/70"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-300">Flag</label>
                  <input
                    name="flag"
                    value={form.flag}
                    onChange={onChange}
                    placeholder="forensiq{...}"
                    className="mt-1 w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B4FF]/70 font-mono"
                  />
                </div>

                {message && (
                  <p className={`text-sm ${message.startsWith('Submitted') ? 'text-green-400' : 'text-red-400'}`}>{message}</p>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold text-white bg-gradient-to-r from-[#0047AB] to-[#00B4FF] shadow-neon disabled:opacity-60"
                >
                  {loading && (
                    <span className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                  )}
                  {loading ? 'Submitting...' : 'Submit flags now'}
                </motion.button>

                <p className="text-[11px] text-gray-400">
                  After submitting, please wait for results to get exciting goodies and free registration.
                </p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  )
}
