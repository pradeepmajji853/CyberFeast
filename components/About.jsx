"use client"
import { motion } from 'framer-motion'
import { FaShieldAlt, FaUsers, FaMicroscope, FaBriefcase, FaTrophy } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 relative overflow-hidden bg-gradient-to-b from-[#00336e] via-[#0047AB] to-[#005ed1] text-gray-100">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-48 md:w-64 lg:w-72 h-48 md:h-64 lg:h-72 bg-cyan-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 md:w-56 lg:w-64 h-40 md:h-56 lg:h-64 bg-blue-300/20 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          About
        </motion.h2>

        <div className="mt-5 md:mt-6 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {/* Card 1: Event */}
          <div
            className="group relative overflow-hidden p-5 md:p-8 rounded-xl bg-gradient-to-br from-[#1a1f3a]/80 to-[#0e1833]/80 backdrop-blur-sm border border-cyan-500/20 shadow-lg shadow-blue-500/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-1 hover:scale-[1.02]"
          >
            <div className="absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-24 group-hover:h-24 md:group-hover:w-32 md:group-hover:h-32" />
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                <FaShieldAlt className="text-xl md:text-2xl" />
              </div>
              <h3 className="text-lg md:text-2xl font-semibold text-white">ForensIQ – The forensics edition</h3>
            </div>
            <p className="leading-relaxed text-gray-200 text-sm md:text-base">
              A two‑day cybersecurity experience by the Digital Defense Club featuring immersive forensics, career insights, and friendly competition.
            </p>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent animate-shimmer" />
            </div>
          </div>

          {/* Card 2: About DDC */}
          <div
            className="group relative overflow-hidden p-5 md:p-8 rounded-xl bg-gradient-to-br from-[#1a1f3a]/80 to-[#0e1833]/80 backdrop-blur-sm border border-cyan-500/20 shadow-lg shadow-blue-500/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-1 hover:scale-[1.02]"
          >
            <div className="absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-24 group-hover:h-24 md:group-hover:w-32 md:group-hover:h-32" />
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                <FaUsers className="text-xl md:text-2xl" />
              </div>
              <h3 className="text-lg md:text-2xl font-semibold text-white">About DDC</h3>
            </div>
            <p className="leading-relaxed text-gray-200 text-sm md:text-base">
              The Digital Defense Club (DDC) is a student‑led cybersecurity community at CBIT. We advance skills through talks, hands‑on workshops, CTFs, and research sprints, fostering an open, collaborative culture across defense, forensics, and threat research.
            </p>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent animate-shimmer" />
            </div>
          </div>

          {/* Card 3: What We Do */}
          <div
            className="group relative overflow-hidden p-5 md:p-8 rounded-xl bg-gradient-to-br from-[#1a1f3a]/80 to-[#0e1833]/80 backdrop-blur-sm border border-cyan-500/20 shadow-lg shadow-blue-500/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-1 hover:scale-[1.02]"
          >
            <div className="absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-24 group-hover:h-24 md:group-hover:w-32 md:group-hover:h-32" />
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center gap-2">
                <FaBriefcase className="text-lg md:text-xl" />
                <FaMicroscope className="text-lg md:text-xl" />
                <FaTrophy className="text-lg md:text-xl" />
              </div>
              <h3 className="text-lg md:text-2xl font-semibold text-white">What We Do</h3>
            </div>
            <p className="leading-relaxed text-gray-200 text-sm md:text-base">Learn, build, and compete with us:</p>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-200/90 text-sm md:text-base">
              <li>Placement talks by the Big 4 — Deloitte, KPMG, EY, and PwC</li>
              <li>Hands‑on forensics workshops and tool‑driven labs</li>
              <li>CTF‑style challenges with prizes, credits, and certificates</li>
              <li>Community meetups, mentoring, and research sprints</li>
            </ul>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent animate-shimmer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
