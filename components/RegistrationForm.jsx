"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { db } from '@/firebaseConfig'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const domains = ['Forensics','OSINT','AI','Others']

export default function RegistrationForm() {
  const [form, setForm] = useState({ name: '', email: '', org: '', phone: '', domain: domains[0] })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setMessage('')

    // Basic validation
    if (!form.name || !form.email || !form.org || !form.phone || !form.domain) {
      setMessage('Please fill in all fields.')
      return
    }

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
      setForm({ name: '', email: '', org: '', phone: '', domain: domains[0] })
      setMessage('Registration successful. See you at CyberFest 2025 – Forensics Edition.')
    } catch (err) {
      console.error(err)
      setMessage('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="register" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <h2 className="section-title">Register</h2>
        <form onSubmit={onSubmit} className="mt-6 grid gap-4 p-6 md:p-8 bg-dark-card/70 rounded-xl border border-white/5 neon-border">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-300">Full Name</label>
              <input name="name" value={form.name} onChange={onChange} placeholder="Jane Doe" className="mt-1 w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B4FF]/70" />
            </div>
            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input name="email" type="email" value={form.email} onChange={onChange} placeholder="jane@example.com" className="mt-1 w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B4FF]/70" />
            </div>
            <div>
              <label className="text-sm text-gray-300">College/Organization</label>
              <input name="org" value={form.org} onChange={onChange} placeholder="CBIT" className="mt-1 w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B4FF]/70" />
            </div>
            <div>
              <label className="text-sm text-gray-300">Contact Number</label>
              <input name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="9876543210" className="mt-1 w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B4FF]/70" />
            </div>
            <div>
              <label className="text-sm text-gray-300">Domain of Interest</label>
              <select name="domain" value={form.domain} onChange={onChange} className="mt-1 w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B4FF]/70">
                {domains.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
          </div>

          {message && (
            <p className={`text-sm mt-2 ${message.toLowerCase().includes('successful') ? 'text-green-400' : 'text-red-400'}`}>{message}</p>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold text-black bg-gradient-to-r from-[#0047AB] to-[#00B4FF] shadow-neon disabled:opacity-60"
          >
            {loading && (
              <span className="h-4 w-4 rounded-full border-2 border-black/40 border-t-black animate-spin" />
            )}
            {loading ? 'Submitting...' : 'Submit Registration'}
          </motion.button>
        </form>
      </div>
    </section>
  )
}
