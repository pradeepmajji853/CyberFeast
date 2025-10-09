"use client"
import { motion, useAnimation } from 'framer-motion'
import { FaShieldAlt, FaUsers, FaMicroscope } from 'react-icons/fa'

export default function About() {
  const c1 = useAnimation()
  const c2 = useAnimation()
  const c3 = useAnimation()
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-[#00336e] via-[#0047AB] to-[#005ed1] text-gray-100">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-300/20 rounded-full blur-3xl" />
      
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

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={c1}
            onViewportEnter={() => c1.start({ opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } })}
            onViewportLeave={() => c1.start({ opacity: 0, x: -40, transition: { duration: 0.4, ease: 'easeIn' } })}
            viewport={{ amount: 0.35 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative overflow-hidden p-6 md:p-8 rounded-xl bg-gradient-to-br from-[#1a1f3a]/80 to-[#0e1833]/80 backdrop-blur-sm border border-cyan-500/20 shadow-lg shadow-blue-500/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-32 group-hover:h-32" />
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                <FaShieldAlt className="text-2xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white">CyberFest – The Flagship Event</h3>
            </div>
            
            <p className="leading-relaxed text-gray-200">
              <strong>CyberFest</strong> is the annual flagship event of the Digital Defense Club, celebrated every October during Cybersecurity Awareness Month.
              Each year explores a unique domain of cybersecurity. The 2025 edition focuses on <strong>Digital Forensics</strong>, uncovering hidden truths in the digital realm.
            </p>
            
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent animate-shimmer" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={c2}
            onViewportEnter={() => c2.start({ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.05, ease: 'easeOut' } })}
            onViewportLeave={() => c2.start({ opacity: 0, x: -40, transition: { duration: 0.4, ease: 'easeIn' } })}
            viewport={{ amount: 0.35 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative overflow-hidden p-6 md:p-8 rounded-xl bg-gradient-to-br from-[#1a1f3a]/80 to-[#0e1833]/80 backdrop-blur-sm border border-cyan-500/20 shadow-lg shadow-blue-500/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-32 group-hover:h-32" />
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                <FaUsers className="text-2xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white">About Us – Digital Defense Club</h3>
            </div>
            
            <p className="leading-relaxed text-gray-200">
              We are a student-led cybersecurity community at CBIT, advancing skills through talks, hands-on workshops, CTFs, and research sprints. Our mission is to
              cultivate ethical security talent, share knowledge openly, and build a collaborative culture around defense, forensics, and threat research.
            </p>
            
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent animate-shimmer" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={c3}
            onViewportEnter={() => c3.start({ opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1, ease: 'easeOut' } })}
            onViewportLeave={() => c3.start({ opacity: 0, x: -40, transition: { duration: 0.4, ease: 'easeIn' } })}
            viewport={{ amount: 0.35 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative overflow-hidden p-6 md:p-8 rounded-xl bg-gradient-to-br from-[#1a1f3a]/80 to-[#0e1833]/80 backdrop-blur-sm border border-cyan-500/20 shadow-lg shadow-blue-500/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-full transition-all duration-300 group-hover:w-32 group-hover:h-32" />
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                <FaMicroscope className="text-2xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white">2025 Theme — Digital Forensics</h3>
            </div>
            <p className="leading-relaxed text-gray-200">
              This year’s focus is Digital Forensics: memory analysis, disk artifacts, email headers, and timeline reconstruction. Learn investigation workflows and industry tools used by IR teams.
            </p>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent animate-shimmer" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
