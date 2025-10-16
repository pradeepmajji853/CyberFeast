"use client"
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import ParticleEffect from './ParticleEffect'

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
    <section id="home" className="min-h-screen pt-28 md:pt-32 pb-10 relative overflow-hidden flex items-center">
      {/* Particle Effect */}
      <ParticleEffect />
      
      {/* Interactive cyber grid/parallax */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="pointer-events-none absolute inset-0"
      >
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
        {/* Additional floating orbs */}
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-3 text-[var(--cobalt,#0047AB)] font-medium text-xl md:text-2xl"
        >
          Step into the world of cyber investigation
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-5 max-w-2xl mx-auto text-gray-300 text-lg"
        >
          Flagship event of the Digital Defense Club (DDC), held during Cybersecurity Awareness Month.
        </motion.p>
        <div className="relative inline-block mt-10">
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

        
        {/* Scroll indicator removed per request */}
      </div>
    </section>
  )
}
