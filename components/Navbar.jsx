"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-bg/90 backdrop-blur-md shadow-lg shadow-blue-500/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        {/* Left: Both logos side by side */}
        <motion.div 
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            whileHover={{ scale: 1.1, rotate: -5 }} 
            transition={{ duration: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-cyan-500/50 rounded-md blur opacity-75 group-hover:opacity-100 transition duration-300" />
            <Image src="/ddc_logo.jpg" alt="CyberFest" width={44} height={44} className="relative rounded-md shadow-neon animate-glow" />
          </motion.div>
          <span className="hidden md:block font-orbitron tracking-wider text-[#00B4FF] text-lg font-bold">CyberFest 2025</span>
        </motion.div>

        {/* Center links */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {[{id:'home',href:'#home'},{id:'about',href:'#about'},{id:'events',href:'#events'},{id:'timeline',href:'#timeline'}].map((l, idx) => (
            <motion.li 
              key={l.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <motion.a 
                href={l.href} 
                className="relative hover:text-[#00B4FF] transition-colors font-medium"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {l.id.charAt(0).toUpperCase() + l.id.slice(1)}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            </motion.li>
          ))}
          {/* Register removed from desktop navbar */}
        </ul>

        {/* Right: CTA */}
        {/* Top-right CTA removed */}
      </nav>
      {/* Mobile quick links */}
      <div className="md:hidden px-4 pb-3">
        <div className="flex justify-center gap-4 text-sm">
          {['home','about','events','timeline'].map((id) => (
            <a key={id} href={`#${id}`} className="hover:text-[#00B4FF] transition-colors">
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          {/* Mobile register removed */}
        </div>
      </div>
    </header>
  )
}
