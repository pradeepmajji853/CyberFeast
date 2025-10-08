"use client"
import { motion } from 'framer-motion'
import { FiMail, FiPhone } from 'react-icons/fi'

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-[#001529] via-[#003366] to-[#001f3f]">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Contact Us
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="mt-8 rounded-xl bg-gradient-to-br from-[#1a1f3a]/80 to-[#0e1833]/80 backdrop-blur-sm border border-cyan-500/20 shadow-lg shadow-cobalt-500/5 overflow-hidden"
        >
          <div className="p-6 md:p-8 grid gap-6 md:grid-cols-2">
            <motion.a 
              href="mailto:ccc@cbit.ac.in" 
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center gap-4 rounded-lg bg-[#0a0e27]/70 border border-cyan-500/30 p-4 hover:bg-[#0a0e27] hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer" />
              <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-r from-amethyst-500 to-cyan-500 text-white group-hover:scale-110 transition-transform duration-300">
                <FiMail size={20} />
              </span>
              <div className="relative">
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium text-gray-200 group-hover:text-cyan-400 transition-colors">ccc@cbit.ac.in</p>
              </div>
            </motion.a>

            <motion.a 
              href="tel:+8184889557" 
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center gap-4 rounded-lg bg-[#0a0e27]/70 border border-cyan-500/30 p-4 hover:bg-[#0a0e27] hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer" />
              <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-r from-[#0047AB] to-[#00B4FF] text-white group-hover:scale-110 transition-transform duration-300">
                <FiPhone size={20} />
              </span>
              <div className="relative">
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-medium text-gray-200 group-hover:text-cyan-400 transition-colors">+8184889557</p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
