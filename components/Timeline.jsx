"use client"
import { motion } from 'framer-motion'
import { FaClock } from 'react-icons/fa'

const items = [
  { title: 'Opening & Placement Talk', desc: 'Kick-off and insights from Big 4 cybersecurity alumni.', time: '9:00 AM' },
  { title: 'Cyber Forensics Workshop', desc: 'Hands-on session on digital investigation.', time: '1:30 PM' },
  { title: 'Forensics Challenges', desc: 'CTF-style problems with prizes and certificates.', time: '10:30 AM' },
  { title: 'Closing & Awards Ceremony', desc: 'Celebrating winners and closing remarks.', time: '5:00 PM' },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Timeline
        </motion.h2>

  <div className="mt-10 relative md:h-[420px]">
          {/* Vertical line for mobile */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-400 via-[#0047AB] to-[#00B4FF] md:hidden" />

          {/* Curved 'road' SVG for md+ screens (keeps the same color theme) */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            <svg viewBox="0 0 1200 400" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id="roadGrad" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#0f172a" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#0b1226" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="edgeGrad" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="#0047AB" />
                  <stop offset="100%" stopColor="#00B4FF" />
                </linearGradient>
              </defs>

              {/* Road base */}
              <path d="M0,300 C300,200 600,350 900,250 C1020,210 1200,240 1200,240 L1200,400 L0,400 Z" fill="url(#roadGrad)" opacity="0.95" />

              {/* Road center line (subtle) */}
              <path d="M20,290 C320,190 620,340 920,240" fill="none" stroke="#1f2937" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />

              {/* Decorative edge gradient line matching theme (extended to road end) */}
              <path d="M20,288 C320,188 620,338 920,238 C1020,198 1200,238 1200,238" fill="none" stroke="url(#edgeGrad)" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 8" opacity="0.95" />
            </svg>
          </div>

          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-6 md:items-center">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02, x: i % 2 ? 10 : -10 }}
                className={`relative md:col-span-1 ${i % 2 ? 'md:justify-self-end md:-translate-y-8' : 'md:justify-self-start md:translate-y-8'} pl-12 group`}
              >
                {/* node */}
                <div className="absolute left-4 md:left-auto md:right-[-7px] top-2 md:top-1/2 md:-translate-y-1/2">
                  <motion.span 
                    className="relative inline-block w-3 h-3 rounded-full bg-gradient-to-r from-[#0047AB] to-[#00B4FF] shadow-lg shadow-blue-500/30"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="absolute inset-0 rounded-full animate-pulseSoft bg-gradient-to-r from-[#0047AB] to-[#00B4FF]" />
                  </motion.span>
                </div>
                
                <div className="bg-gradient-to-br from-[#1a1f3a]/80 to-[#0e1833]/80 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-5 shadow-lg shadow-cobalt-500/5 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/20 relative overflow-hidden">
                  {/* Time badge */}
                  {it.time && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-semibold">
                      <FaClock className="text-[10px]" />
                      {it.time}
                    </div>
                  )}
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-transparent rounded-br-full transition-all duration-300 group-hover:w-24 group-hover:h-24" />
                  
                  <h3 className="font-semibold text-cyan-400 pr-20">{it.title}</h3>
                  <p className="mt-2 text-gray-300 text-sm">{it.desc}</p>
                  
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent animate-shimmer" />
                  </div>
                </div>

                {/* Connector / pin to the road (desktop only) */}
                <div className="hidden md:flex md:flex-col md:items-center absolute left-1/2 top-full mt-4 -translate-x-1/2">
                  <div className="w-px h-28 bg-gradient-to-b from-[#0047AB] to-[#00B4FF]" />
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#0047AB] to-[#00B4FF] mt-2 shadow-md" />
                </div>
                </motion.div>
            ))}
            </div>
        </div>
      </div>
    </section>
  )
}
