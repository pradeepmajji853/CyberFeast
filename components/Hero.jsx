"use client"
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import ParticleEffect from './ParticleEffect'

function TypeLine() {
  const phrases = [
    'Placement Talks',
    'Forensics Workshops',
    'Forensics Challenges',
    'Cash Prizes',
  ]
  const [idx, setIdx] = useState(0)
  const [sub, setSub] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [pausing, setPausing] = useState(false)

  useEffect(() => {
    if (pausing) return
    const current = phrases[idx]
    const baseDelay = deleting ? 40 : 65
    const t = setTimeout(() => {
      if (!deleting) {
        if (sub < current.length) setSub((s) => s + 1)
        else {
          setPausing(true)
          setTimeout(() => { setPausing(false); setDeleting(true) }, 900)
        }
      } else {
        if (sub > 0) setSub((s) => s - 1)
        else { setDeleting(false); setIdx((i) => (i + 1) % phrases.length) }
      }
    }, baseDelay)
    return () => clearTimeout(t)
  }, [idx, sub, deleting, pausing])

  return (
    <div className="mt-6">
      <div className="mx-auto max-w-3xl font-mono text-xl md:text-2xl">
        <span className="text-[#00B4FF]">&gt;</span>{' '}
        <span className="text-white">{phrases[idx].slice(0, sub)}</span>
        <span className="ml-1 inline-block w-[10px] h-5 align-[-2px] bg-white/80 animate-pulse" />
      </div>
    </div>
  )
}

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [0, 1], [6, -6])
  const rotateY = useTransform(mouseX, [0, 1], [-6, 6])

  useEffect(() => {
    const onMove = (e) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      mouseX.set(x)
      mouseY.set(y)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  return (
    <section id="home" className="min-h-[90vh] md:min-h-screen pt-24 md:pt-32 pb-8 md:pb-10 relative overflow-hidden flex items-center">
      <ParticleEffect />
      <motion.div style={{ rotateX, rotateY }} className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '48px 48px, 48px 48px' }} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.2 }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-[rgba(0,71,171,0.25)] rounded-full blur-3xl animate-float"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.4 }}
          className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-[rgba(0,180,255,0.22)] rounded-full blur-3xl"
          style={{ animationDelay: '1s' }}
        />
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-[rgba(0,180,255,0.15)] rounded-full blur-2xl"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/3 right-1/4 w-40 h-40 bg-[rgba(0,71,171,0.15)] rounded-full blur-2xl"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="section-title text-glow"
        >
          ForensIQ - The forensics Edition
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 max-w-3xl mx-auto text-gray-300 text-lg"
        >
          Investigate digital evidence, decode artifacts, and reconstruct incidents.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-1 max-w-3xl mx-auto text-gray-400"
        >
          Learn practical forensics workflows: disk analysis, metadata, and email header tracing.
        </motion.p>

        <div className="px-2">
          <TypeLine />
        </div>

        <div className="relative inline-block mt-8 md:mt-10">
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[rgba(0,71,171,0.6)] to-[rgba(0,180,255,0.6)] blur-xl animate-pulse" />
          <motion.a
            href="https://forms.gle/DBoFP7k4ND4Nh2MUA"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-[#0047AB] to-[#00B4FF] text-white font-bold text-lg shadow-neon transition-all duration-300"
          >
            Register Now
            <motion.span
              className="absolute inset-0 rounded-lg"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                backgroundSize: '200% 100%',
              }}
              animate={{
                backgroundPosition: ['200% center', '-200% center'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          </motion.a>
        </div>
      </div>
    </section>
  )
}
