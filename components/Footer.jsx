'use client'
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const LINKEDIN_URL = process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || 'https://www.linkedin.com'
const WHATSAPP_URL = process.env.NEXT_PUBLIC_SOCIAL_WHATSAPP || 'https://chat.whatsapp.com'
const INSTAGRAM_URL = process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || 'https://www.instagram.com'

export default function Footer() {
  return (
    <footer className="mt-10 md:mt-16 border-t border-white/10 relative bg-[#081427]">
      {/* thin top highlight */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />

      {/* Footer content grid (restored) */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-6 md:pb-10 pt-6 md:pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
          {/* About */}
          <div>
            <h4 className="font-semibold text-[#00B4FF]">About Digital Defense Club</h4>
            <p className="mt-3 text-sm md:text-base text-gray-300">A student-led cybersecurity community at CBIT. We run talks, workshops, CTFs, and research sprints to build ethical security skills and culture.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#00B4FF]">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm md:text-base text-gray-300">
              {[
                {label: 'Home', href: '#home'},
                {label: 'About', href: '#about'},
                {label: 'Events', href: '#events'},
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
            <ul className="mt-3 space-y-2 text-sm md:text-base text-gray-300">
              <li>
                <a href="mailto:ccc@cbit.ac.in" className="hover:text-[#00B4FF]">ccc@cbit.ac.in</a>
              </li>
              <li>
                <a href="tel:+918184889557" className="hover:text-[#00B4FF]">+91 8184889557</a>
              </li>
              <li>Digital Defense Club, CBIT</li>
            </ul>
          </div>

          {/* Social (only three links kept) */}
          <div>
            <h4 className="font-semibold text-[#00B4FF]">Follow Us</h4>
            <div className="mt-3 flex flex-wrap items-center gap-2 md:gap-3">
              {[
                { icon: FaLinkedin, href: 'https://www.linkedin.com/company/digital-defence-club/', label: 'LinkedIn' },
                { icon: FaWhatsapp, href: 'https://chat.whatsapp.com/EHiWQmUfjuL94zgoNAt7DW?mode=ems_wa_t', label: 'WhatsApp Community' },
                { icon: FaInstagram, href: 'https://www.instagram.com/ddc_cbit/', label: 'Instagram' },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.08, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2 md:px-3.5 md:py-2.5 bg-white/10 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20 text-sm md:text-base transition-all duration-300"
                  >
                    <Icon /> {social.label}
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 md:mt-10 pt-4 md:pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-3 text-[11px] md:text-xs text-gray-400">
          <p>© ForensIQ 2025 – All Rights Reserved</p>
          <div className="flex items-center gap-3 md:gap-4">
            <a href="#" className="hover:text-[#00B4FF]">Privacy</a>
            <a href="#" className="hover:text-[#00B4FF]">Terms</a>
            <a href="mailto:ccc@cbit.ac.in" className="hover:text-[#00B4FF]">Contact Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
