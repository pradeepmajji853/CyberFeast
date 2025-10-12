"use client"
import Image from 'next/image'
import BlurText from '@/components/BlurText'
import { FaBriefcase, FaMicroscope, FaTrophy, FaGift, FaUsers } from 'react-icons/fa'
import { useState } from 'react'
import FlagRegisterModal from '@/components/FlagRegisterModal'

const bigFourCompanies = [
  { name: 'Deloitte', file: 'Deloitte_Logo.jpg' },
  { name: 'KPMG', file: 'kpmg.png' },
  { name: 'EY', file: 'ey.png' },
  { name: 'PwC', file: 'pwc.png' },
]

const features = [
  { icon: FaBriefcase, title: 'Placement Talks', desc: 'Career insights from Big 4 cybersecurity professionals' },
  { icon: FaMicroscope, title: 'Forensics Workshop', desc: 'Hands-on digital investigation training' },
  { icon: FaTrophy, title: 'Challenges', desc: 'Compete in CTF-style forensics challenges with prizes' },
]

const prizes = [
  { icon: FaGift, title: 'Goodies', desc: 'Exclusive swag & merchandise' },
  { icon: FaTrophy, title: 'Cash Prizes', desc: 'Win exciting cash rewards' },
]

export default function Events() {
  const [open, setOpen] = useState(false)
  return (
    <section id="events" className="scroll-mt-24 md:scroll-mt-28 py-12 md:py-24 relative overflow-hidden bg-[#0B1224]">
      {/* Subtle static background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* soft radial glow from top-center */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(900px 420px at 50% -10%, rgba(0,180,255,0.08), transparent)' }} />
        {/* thin top highlight line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />
        {/* subtle bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <header className="text-center mb-10 md:mb-16">
          <BlurText
            as="h2"
            text="Event Highlights"
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white justify-center"
            animateBy="words"
            delay={70}
          />
          {/* concise mobile subtitle */}
          <div className="mt-3 max-w-3xl mx-auto">
            <BlurText
              text="A focused, high–impact day in cybersecurity and digital forensics."
              className="hidden sm:block text-base md:text-xl text-gray-300"
              animateBy="words"
              delay={50}
            />
            <BlurText
              text="A focused day in cybersecurity and forensics."
              className="sm:hidden text-sm text-gray-300"
              animateBy="words"
              delay={40}
            />
          </div>
        </header>

        {/* Key Highlights */}
        <section className="mb-12 md:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-[#131b37]/80 to-[#0f1831]/80 p-5 md:p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/25 to-cyan-600/25 text-cyan-300 mb-3 md:mb-4">
                  <f.icon className="text-2xl" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white">{f.title}</h3>
                {/* concise mobile desc */}
                <p className="mt-1.5 sm:mt-2 text-sm text-gray-300/90">
                  <span className="hidden sm:inline">{f.desc}</span>
                  <span className="sm:hidden">
                    {f.title === 'Placement Talks' && 'Big 4 career insights'}
                    {f.title === 'Forensics Workshop' && 'Hands‑on forensics'}
                    {f.title === 'Challenges' && 'CTFs with prizes'}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Placement Talks */}
        <section className="mb-12 md:mb-20">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/25 bg-gradient-to-br from-[#142046] via-[#0e1a3a] to-[#132347]">
            <div className="relative p-5 md:p-12 grid md:grid-cols-2 gap-6 md:gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-600/30 to-cyan-600/30 text-cyan-200 border border-cyan-500/30">Placement Talks</span>
                <h3 className="mt-2 sm:mt-3 md:mt-4 text-xl sm:text-2xl md:text-4xl font-bold text-white">Learn from Big 4 Cybersecurity Experts</h3>
                {/* long vs concise paragraph */}
                <p className="mt-2 md:mt-3 text-gray-300/95 text-sm md:text-lg">
                  <span className="hidden sm:inline">Get exclusive insights from professionals at the world’s leading consulting firms. Understand roles, day‑to‑day work, skills that matter, and interview expectations.</span>
                  <span className="sm:hidden">Hear from Big 4 pros about roles, skills, and interviews.</span>
                </p>
                <ul className="mt-3 md:mt-5 space-y-1.5 sm:space-y-2 text-gray-300/90 text-sm md:text-base">
                  {[
                    'Career pathways and real experiences',
                    'Skills for cybersecurity roles',
                    'Life at Big 4 firms',
                    'Interview tips and hiring process',
                  ].map((item, idx) => (
                    <li key={item} className={`flex items-start gap-2 ${idx > 1 ? 'hidden md:list-item' : ''}`}>
                      <span className="mt-2 block h-1.5 w-1.5 rounded-full bg-cyan-400" />{item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {bigFourCompanies.map((c) => (
                    <div key={c.name} className="relative aspect-[16/10] rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm">
                      {/* Make image fill the uniform card so all logos have the same visual size */}
                      <Image
                        src={`/logos/${c.file}`}
                        alt={c.name}
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 40vw, (max-width: 1024px) 20vw, 160px"
                        className="object-contain p-3 sm:p-4 md:p-6"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-3 md:mt-5 text-center">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-700/20 to-cyan-700/20 text-cyan-300 border border-cyan-500/25 text-xs md:text-sm">
                    <FaUsers /> Alumni from these prestigious firms
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workshop & Challenges */}
        <section className="mb-12 md:mb-20 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          <div className="rounded-3xl border border-cyan-500/25 bg-gradient-to-br from-[#121c3a]/90 to-[#0f1831]/90 p-5 md:p-8">
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-600/25 to-cyan-600/25 text-cyan-300 mb-3 md:mb-4">
              <FaMicroscope className="text-2xl" />
            </div>
            <h3 className="text-lg md:text-2xl font-bold text-white">Forensics Workshop</h3>
            <p className="mt-2 text-gray-300 text-sm md:text-base">
              <span className="hidden sm:inline">Hands‑on training with real‑world tools and datasets. Learn to investigate like a pro.</span>
              <span className="sm:hidden">Hands‑on with real tools and datasets.</span>
            </p>
            <ul className="mt-3 md:mt-4 space-y-1.5 md:space-y-2 text-gray-300 text-sm">
              {['Disk image analysis & file recovery', 'Memory forensics techniques', 'Email header investigation', 'Timeline reconstruction'].map((item, idx) => (
                <li key={item} className={`flex items-start gap-2 ${idx > 1 ? 'hidden md:list-item' : ''}`}><span className="mt-2 block h-1.5 w-1.5 rounded-full bg-cyan-400" />{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-cyan-500/25 bg-gradient-to-br from-[#121c3a]/90 to-[#0f1831]/90 p-5 md:p-8">
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-600/25 to-cyan-600/25 text-cyan-300 mb-3 md:mb-4">
              <FaTrophy className="text-2xl" />
            </div>
            <h3 className="text-lg md:text-2xl font-bold text-white">Forensics Challenges</h3>
            <p className="mt-2 text-gray-300 text-sm md:text-base">
              <span className="hidden sm:inline">CTF‑style challenges with real‑world scenarios and multiple difficulty levels.</span>
              <span className="sm:hidden">Real‑world CTFs across levels.</span>
            </p>
            <ul className="mt-3 md:mt-4 space-y-1.5 md:space-y-2 text-gray-300 text-sm">
              {['Solo & team competitions', 'Real‑time leaderboard', 'Attractive rewards'].map((item, idx) => (
                <li key={item} className={`flex items-start gap-2 ${idx > 1 ? 'hidden md:list-item' : ''}`}><span className="mt-2 block h-1.5 w-1.5 rounded-full bg-cyan-400" />{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Prizes & Perks */}
        <section className="mb-12 md:mb-20">
          <div className="text-center mb-5 md:mb-6">
            <h3 className="text-2xl md:text-4xl font-bold text-white">Prizes & Perks</h3>
            <p className="mt-2 text-gray-300">Rewards for excellence and participation.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8 max-w-3xl mx-auto">
            {prizes.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/15 p-6 text-center">
                <div className="mx-auto inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-600/25 to-cyan-600/25 text-white mb-3">
                  <p.icon className="text-3xl" />
                </div>
                <h4 className="text-lg font-semibold text-white">{p.title}</h4>
                <p className="mt-1 text-gray-300 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-700/20 to-cyan-700/20 border border-blue-600/30 text-cyan-200 text-xs md:text-sm">
              Participation certificates for all attendees
            </span>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://forms.gle/DBoFP7k4ND4Nh2MUA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0047AB] to-[#00B4FF] text-white text-base md:text-lg font-bold shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow w-full sm:w-auto justify-center"
          >
            Register
          </a>
          <p className="mt-3 text-gray-400 text-sm md:text-base">Limited seats available.</p>
        </div>
      </div>

      <FlagRegisterModal open={open} onClose={() => setOpen(false)} />
    </section>
  )
}
