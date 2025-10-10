'use client'
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub, FaYoutube, FaDiscord } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="mt-20 md:mt-24 border-t border-white/10 bg-transparent">
      <div className="gradient-divider" />

      {/* Join Community CTA */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl p-5 md:p-8 bg-gradient-to-r from-[#0b1020] via-[#0c1530] to-[#0b1020] group"
        >
          <span className="pointer-events-none absolute -inset-24 opacity-25 group-hover:opacity-40 transition-opacity duration-500" style={{ background: 'radial-gradient(600px 220px at 20% 10%, rgba(0,180,255,0.18), transparent), radial-gradient(600px 220px at 80% 90%, rgba(0,71,171,0.16), transparent)' }} />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#00B4FF]">Join our community</h3>
              <p className="mt-2 text-gray-300 max-w-2xl">Be part of Digital Defense Club — get event updates, resources, and collaborate with peers on security, forensics, and OSINT.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <motion.a 
                href="https://discord.gg/your-invite" 
                target="_blank" 
                rel="noreferrer" 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-semibold text-white bg-gradient-to-r from-[#0047AB] to-[#00B4FF] shadow-neon hover:shadow-xl transition-all duration-300"
              >
                <FaDiscord /> Join Discord
              </motion.a>
              <motion.a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-semibold text-white bg-white/10 hover:bg-white/15 transition-all duration-300"
              >
                <FaInstagram /> Follow Instagram
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer content grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-8 md:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {/* About */}
          <div>
            <h4 className="font-semibold text-[#00B4FF]">About Digital Defense Club</h4>
            <p className="mt-3 text-sm text-gray-300">A student-led cybersecurity community at CBIT. We run talks, workshops, CTFs, and research sprints to build ethical security skills and culture.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#00B4FF]">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              {[
                {label: 'Home', href: '#home'},
                {label: 'About', href: '#about'},
                {label: 'Events', href: '#events'},
                // Mentors removed
                {label: 'Timeline', href: '#timeline'},
                {label: 'Contact', href: '#contact'},
                {label: 'Register', href: '/register'},
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-[#00B4FF] transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#00B4FF]">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              <li>
                <a href="mailto:ccc@cbit.ac.in" className="hover:text-[#00B4FF]">ccc@cbit.ac.in</a>
              </li>
              <li>
                <a href="tel:+8184889557" className="hover:text-[#00B4FF]">+8184889557</a>
              </li>
              <li>Digital Defense Club, CBIT</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-[#00B4FF]">Follow Us</h4>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              {[
                { icon: FaLinkedin, href: 'https://www.linkedin.com', label: 'LinkedIn' },
                { icon: FaInstagram, href: 'https://www.instagram.com', label: 'Instagram' },
                { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
                { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
                { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
                { icon: FaDiscord, href: 'https://discord.gg/your-invite', label: 'Discord' },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a 
                    key={social.label}
                    href={social.href} 
                    target="_blank" 
                    rel="noreferrer" 
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2 bg-white/10 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 transition-all duration-300"
                  >
                    <Icon /> {social.label}
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 md:mt-10 pt-5 md:pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] md:text-xs text-gray-400">
          <p>© ForensIQ 2025 – All Rights Reserved</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#00B4FF]">Privacy</a>
            <a href="#" className="hover:text-[#00B4FF]">Terms</a>
            <a href="mailto:ccc@cbit.ac.in" className="hover:text-[#00B4FF]">Contact Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
