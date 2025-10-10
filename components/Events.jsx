"use client"
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaBriefcase, FaMicroscope, FaTrophy, FaGift, FaCertificate, FaGoogle, FaMoneyBillWave, FaUsers, FaCheckCircle } from 'react-icons/fa'

const bigFourCompanies = [
  { name: 'Deloitte', file: 'Deloitte_Logo.jpg' },
  { name: 'KPMG', file: 'kpmg.png' },
  { name: 'EY', file: 'ey.png' },
  { name: 'PwC', file: 'pwc.png' },
]

const prizes = [
  { icon: FaMoneyBillWave, title: 'Cash Prizes', desc: 'Win exciting cash rewards', color: 'from-[#005ed1] to-[#00B4FF]' },
  { icon: FaGoogle, title: 'Google Credits', desc: 'Cloud platform credits', color: 'from-[#0047AB] to-[#00AEEF]' },
  { icon: FaCertificate, title: 'Gemini Certificates', desc: 'Official AI certifications', color: 'from-[#00336e] to-[#005ed1]' },
  { icon: FaGift, title: 'Goodies', desc: 'Exclusive swag & merchandise', color: 'from-[#0066ff] to-[#00B4FF]' },
]

const features = [
  { icon: FaBriefcase, title: 'Placement Talks', desc: 'Career insights from Big 4 cybersecurity professionals' },
  { icon: FaMicroscope, title: 'Forensics Workshop', desc: 'Hands-on digital investigation training' },
  { icon: FaTrophy, title: 'CTF Challenges', desc: 'Competitive forensics challenges with prizes' },
  { icon: FaCheckCircle, title: '100% Free', desc: 'Everything free for all attendees!' },
]

export default function Events() {
  const reduceMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(pointer: coarse), (max-width: 768px)')
    const set = (e) => setIsMobile(e.matches)
    set(mq)
    if (mq.addEventListener) mq.addEventListener('change', set)
    else mq.addListener(set)
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', set)
      else mq.removeListener(set)
    }
  }, [])

  const handleMouseMove = (e) => {
    const target = e.currentTarget
    const rect = target.getBoundingClientRect()
    const mx = ((e.clientX - rect.left) / rect.width) * 100
    const my = ((e.clientY - rect.top) / rect.height) * 100
    target.style.setProperty('--mx', `${mx}%`)
    target.style.setProperty('--my', `${my}%`)
  }

  // Helper to trim down motion props on low-power devices
  const motionProps = (delay = 0, y = 20, duration = 0.5) => (
    reduceMotion
      ? { initial: false }
      : {
          initial: { opacity: 0, y },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration, delay },
        }
  )

  return (
    <section id="events" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-[#0B1020] via-[#0e1430] to-[#0B1020]">
      {/* Lightweight SVG background (replaces blurred divs) */}
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full hidden sm:block">
        <defs>
          <radialGradient id="rb" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="rc" cx="80%" cy="80%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#rb)" />
        <rect width="100%" height="100%" fill="url(#rc)" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          {...motionProps(0, 12, 0.4)}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">Event Highlights</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for an unforgettable journey into the world of cybersecurity and digital forensics
          </p>
        </motion.div>

        {/* Key Features Grid */}
        <motion.div
          {...motionProps(0, 20, 0.45)}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              {...(reduceMotion ? { initial: false } : { initial: { opacity: 0, y: 12 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.35, delay: idx * 0.07 } })}
              whileHover={!isMobile ? { y: -4, scale: 1.01 } : undefined}
              onMouseMove={!isMobile ? handleMouseMove : undefined}
              className="tilt group relative bg-gradient-to-br from-[#1a1f3a]/80 to-[#0e1833]/80 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300"
            >
              <span aria-hidden className="interactive-spotlight rounded-2xl" />
              {/* subtle hover tint, no extra blur */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-cyan-400 mb-4">
                  <feature.icon className="text-3xl" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Event Section - Placement Talks */}
        <motion.div
          {...motionProps(0, 24, 0.5)}
          className="mb-16 relative"
        >
          <div className="rounded-3xl bg-gradient-to-br from-[#1a1f3a] via-[#0e1833] to-[#1a1f3a] border border-cyan-500/30 overflow-hidden">
            {/* soft glow via gradient border, no heavy blur */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/15 via-cyan-500/15 to-blue-500/15 opacity-50" />
            
            <div className="relative p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <motion.div {...(reduceMotion ? { initial: false } : { initial: { opacity: 0, x: -16 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.45 } })}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold mb-4">
                      <FaBriefcase /> Career Session
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      Placement Talks by <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Big 4 Cybersecurity Experts</span>
                    </h3>
                    <p className="text-gray-300 text-lg mb-6">
                      Get exclusive insights from cybersecurity professionals working at the world's leading consulting firms. Learn about:
                    </p>
                    <ul className="space-y-3 mb-8">
                      {[
                        'Real-world experiences and career pathways',
                        'Skills required for cybersecurity roles',
                        'Day-to-day life at Big 4 firms',
                        'Interview tips and hiring processes',
                        'Live Q&A with industry experts'
                      ].map((item, idx) => (
                        <motion.li
                          key={item}
                          {...(reduceMotion ? { initial: false } : { initial: { opacity: 0, x: -12 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.3, delay: idx * 0.06 } })}
                          className="flex items-start gap-3 text-gray-200"
                        >
                          <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 mt-2" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <motion.button
                      whileHover={!isMobile ? { scale: 1.03, x: 3 } : undefined}
                      whileTap={!isMobile ? { scale: 0.98 } : undefined}
                      className="button-magnet inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
                      onMouseMove={!isMobile ? handleMouseMove : undefined}
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                </div>

                <motion.div
                  {...(reduceMotion ? { initial: false } : { initial: { opacity: 0, scale: 0.98 }, whileInView: { opacity: 1, scale: 1 }, viewport: { once: true }, transition: { duration: 0.45 } })}
                  className="relative"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {bigFourCompanies.map((company, idx) => (
                      <motion.div
                        key={company.name}
                        {...(reduceMotion ? { initial: false } : { initial: { opacity: 0, y: 12 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.35, delay: idx * 0.06 } })}
                        whileHover={!isMobile ? { scale: 1.04, y: -3 } : undefined}
                        className="relative aspect-[16/10] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-6 flex items-center justify-center group overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {/* shimmer removed for performance */}
                        <Image
                          src={`/logos/${company.file}`}
                          alt={company.name}
                          fill
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                          className="object-contain p-4"
                          priority={idx === 0}
                        />
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    {...(reduceMotion ? { initial: false } : { initial: { opacity: 0, y: 12 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4, delay: 0.3 } })}
                    className="mt-6 text-center"
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border border-blue-500/30 text-cyan-300 text-sm">
                      <FaUsers /> Alumni from these prestigious firms
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Forensics Workshop & Challenges */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Workshop */}
          <motion.div
            {...(reduceMotion ? { initial: false } : { initial: { opacity: 0, x: -24 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.45 } })}
            whileHover={!isMobile ? { y: -3 } : undefined}
            className="group relative rounded-3xl bg-gradient-to-br from-[#1a1f3a]/90 to-[#0e1833]/90 border border-cyan-500/30 p-8 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-600/30 text-cyan-400 mb-6">
                <FaMicroscope className="text-4xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Forensics Workshop
              </h3>
              <p className="text-gray-300 mb-6">
                Hands-on training with real-world digital forensics tools and datasets. Learn to investigate like a pro!
              </p>
              <ul className="space-y-2 mb-6 text-gray-300">
                {['Disk image analysis & file recovery', 'Memory forensics techniques', 'Email header investigation', 'Timeline reconstruction'].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={!isMobile ? { scale: 1.03 } : undefined}
                whileTap={!isMobile ? { scale: 0.98 } : undefined}
                className="button-magnet inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold"
                onMouseMove={!isMobile ? handleMouseMove : undefined}
              >
                Details Coming Soon
              </motion.button>
            </div>
          </motion.div>

          {/* Challenges */}
          <motion.div
            {...(reduceMotion ? { initial: false } : { initial: { opacity: 0, x: 24 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.45 } })}
            whileHover={!isMobile ? { y: -3 } : undefined}
            className="group relative rounded-3xl bg-gradient-to-br from-[#1a1f3a]/90 to-[#0e1833]/90 border border-cyan-500/30 p-8 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-600/30 text-cyan-400 mb-6">
                <FaTrophy className="text-4xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Forensics Challenges
              </h3>
              <p className="text-gray-300 mb-6">
                Compete in CTF-style forensics challenges. Solve complex puzzles, find hidden artifacts, and win amazing prizes!
              </p>
              <ul className="space-y-2 mb-6 text-gray-300">
                {['Solo & team competitions', 'Real-world scenarios', 'Multiple difficulty levels', 'Live leaderboard'].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={!isMobile ? { scale: 1.03 } : undefined}
                whileTap={!isMobile ? { scale: 0.98 } : undefined}
                className="button-magnet inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold"
                onMouseMove={!isMobile ? handleMouseMove : undefined}
              >
                Details Coming Soon
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Prizes & Rewards Section */}
        <motion.div
          {...motionProps(0, 24, 0.5)}
          className="relative"
        >
          <div className="rounded-3xl bg-gradient-to-br from-[#0e1833]/80 via-[#132343]/80 to-[#0e1833]/80 border border-cyan-500/30 p-8 md:p-12 overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 opacity-40" />
            
            <div className="relative text-center mb-10">
              <motion.h3
                {...(reduceMotion ? { initial: false } : { initial: { opacity: 0, y: 12 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } })}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Prizes & Rewards
              </motion.h3>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Prizes, certifications, and rewards — <strong className="text-cyan-400">free for attendees.</strong>
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {prizes.map((prize, idx) => (
                <motion.div
                  key={prize.title}
                  {...(reduceMotion ? { initial: false } : { initial: { opacity: 0, scale: 0.98 }, whileInView: { opacity: 1, scale: 1 }, viewport: { once: true }, transition: { duration: 0.35, delay: idx * 0.06 } })}
                  whileHover={!isMobile ? { scale: 1.04, y: -4 } : undefined}
                  className="relative group"
                >
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 text-center hover:border-white/40 transition-all duration-300 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${prize.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${prize.color} text-white mb-4`}>
                      <prize.icon className="text-3xl" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{prize.title}</h4>
                    <p className="text-gray-300 text-sm">{prize.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              {...(reduceMotion ? { initial: false } : { initial: { opacity: 0, y: 12 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4, delay: 0.3 } })}
              className="mt-10 text-center"
            >
              <div className="tilt inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border border-blue-500/40 text-cyan-300 text-lg font-semibold" onMouseMove={!isMobile ? handleMouseMove : undefined}>
                <span aria-hidden className="interactive-spotlight rounded-full" />
                Certificates and goodies for all participants.
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          {...motionProps(0, 18, 0.45)}
          className="mt-16 text-center"
        >
          <motion.a
            href="/register"
            whileHover={!isMobile ? { scale: 1.03 } : undefined}
            whileTap={!isMobile ? { scale: 0.98 } : undefined}
            className="button-magnet inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0047AB] to-[#00B4FF] text-white text-lg font-bold shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
            onMouseMove={!isMobile ? handleMouseMove : undefined}
          >
             Free Registration
          </motion.a>
          <p className="mt-4 text-gray-400">Limited seats available.</p>
        </motion.div>
      </div>
    </section>
  )
}
