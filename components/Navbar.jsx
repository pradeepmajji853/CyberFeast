"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaHome, FaInfoCircle, FaCalendarAlt, FaStream, FaEnvelope, FaPen, FaBars, FaTimes } from 'react-icons/fa'
import { createPortal } from 'react-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => { setMounted(true) }, [])

  // Add background only after hero is out of view
  useEffect(() => {
    if (typeof window === 'undefined') return
    const hero = document.getElementById('home')
    if (!hero) {
      // fallback to simple scroll if hero not found
      const onScroll = () => setScrolled(window.scrollY > 10)
      window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // when less than 40% of hero is visible, consider it scrolled past hero
        setScrolled(entry.intersectionRatio < 0.4)
      },
      { threshold: [0, 0.4, 1] }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  // Lock body scroll when mobile menu is open and close on Escape key
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false) }
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', onKey)
    } else {
      document.body.style.overflow = previousOverflow || ''
    }
    return () => {
      document.body.style.overflow = previousOverflow || ''
      document.removeEventListener('keydown', onKey)
    }
  }, [mobileOpen])

  // Smooth scroll to section using native scrollIntoView (respects CSS scroll-margin)
  const onNavClick = (e, href) => {
    if (!href?.startsWith('#')) return
    e.preventDefault()
    const el = document.querySelector(href)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // update the URL hash without jumping
    if (history?.replaceState) history.replaceState(null, '', href)
  }

  const mobileLinks = [
    { id: 'home', label: 'Home', href: '#home', icon: FaHome },
    { id: 'about', label: 'About', href: '#about', icon: FaInfoCircle },
    { id: 'events', label: 'Events', href: '#events', icon: FaCalendarAlt },
    { id: 'timeline', label: 'Timeline', href: '#timeline', icon: FaStream },
    { id: 'contact', label: 'Contact', href: '#contact', icon: FaEnvelope },
  ]

  return (
    <header ref={headerRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-bg/90 backdrop-blur-md shadow-lg shadow-blue-500/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        {/* Left: logo + title (clickable -> hero) */}
        <motion.a
          href="#home"
          onClick={(e) => onNavClick(e, '#home')}
          className="flex items-center gap-3 cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.1, rotate: -5 }} transition={{ duration: 0.2 }} className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-cyan-500/50 rounded-md blur opacity-75 group-hover:opacity-100 transition duration-300" />
            <Image src="/logos/ddc_logo.jpg" alt="ForensIQ" width={40} height={40} sizes="40px" className="relative rounded-md shadow-neon animate-glow" />
          </motion.div>
          <span className="hidden sm:block font-orbitron tracking-wider text-[#00B4FF] text-base md:text-lg font-bold">ForensIQ 2025</span>
        </motion.a>

        {/* Center links (desktop) */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {[{id:'home',href:'#home'},{id:'about',href:'#about'},{id:'events',href:'#events'},{id:'timeline',href:'#timeline'},{id:'contact',href:'#contact'}].map((l, idx) => (
            <motion.li 
              key={l.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <motion.a 
                href={l.href} 
                onClick={(e) => onNavClick(e, l.href)}
                className="relative hover:text-[#00B4FF] transition-colors font-medium"
                whileHover={{ scale: 1.06 }}
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
        </ul>

        {/* Right: mobile hamburger */}
        <button
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
          aria-expanded={mobileOpen}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 border border-white/10 text-white"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile menu rendered via portal */}
      {mobileOpen && mounted && createPortal(
        <div id="mobile-menu" className="fixed inset-0 z-[9999]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-[#0b1124]"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative min-h-screen flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Image src="/logos/ddc_logo.jpg" alt="ForensIQ" width={28} height={28} className="rounded" />
                <span className="font-semibold text-white">Menu</span>
              </div>
              <button aria-label="Close menu" className="p-2 rounded-lg hover:bg-white/10" onClick={() => setMobileOpen(false)}>
                <FaTimes />
              </button>
            </div>
            <nav className="px-2 py-3 overflow-y-auto grow">
              <ul className="space-y-2">
                {mobileLinks.map(({ id, label, href, icon: Icon }) => (
                  <li key={id}>
                    <a
                      href={href}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 active:bg-white/20 transition-colors text-white"
                      onClick={(e) => { onNavClick(e, href); setMobileOpen(false) }}
                    >
                      <Icon className="text-[#00B4FF]" />
                      <span className="text-base">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="px-4 pb-6">
              <a
                href="/register"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#0047AB] to-[#00B4FF] shadow-neon"
                onClick={() => setMobileOpen(false)}
              >
                <FaPen /> Register
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  )
}
