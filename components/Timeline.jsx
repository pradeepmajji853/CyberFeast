"use client"
import { FaRocket, FaFlagCheckered, FaTrophy, FaTools } from 'react-icons/fa'
import { motion } from 'framer-motion'

const items = [
  {
    day: 'Day 1',
    title: 'Inaugural Session & Career Insights',
    time: '9:30 AM – 12:30 PM',
    desc: 'Intro to cyber security, career paths, alumni interaction & Q&A. Code Drop #1 after session.',
    icon: FaRocket,
  },
  {
    day: 'Day 1',
    title: 'Hands-on Forensics Lab Session',
    time: '2:00 PM – 4:00 PM',
    desc: 'Disk and email analysis using TSK and web tools. Code Drop #2 after session.',
    icon: FaTools,
  },
  {
    day: 'Day 2',
    title: 'Showcase Forensic Challenges',
    time: '9:30 AM – 12:30 PM',
    desc: 'Practical challenges: file recovery, metadata, email headers, and incident timeline. Code Drop #3.',
    icon: FaFlagCheckered,
  },
  {
    day: 'Day 2',
    title: 'Valedictory & Fun Activities',
    time: '1:30 PM – 3:00 PM',
    desc: 'Games, winners, and closing ceremony. Entry with 12‑digit final code (all sessions).',
    icon: FaTrophy,
  },
]

function TextBlock({ title, time, desc, align = 'left', tone = 'dark' }) {
  const wrapperAlign = align === 'left' ? 'text-right' : 'text-left'
  const toneClasses =
    tone === 'light'
      ? 'bg-gradient-to-br from-[#162552]/80 to-[#0f2046]/80 border border-cyan-400/25'
      : 'bg-gradient-to-br from-[#101b3a]/85 to-[#0b1430]/85 border border-cyan-500/30'
  return (
    <div className={wrapperAlign}>
      <div className={`inline-block max-w-md w-full sm:w-auto rounded-2xl p-4 md:p-5 shadow-neon text-left ${toneClasses}`}>
        <span className="inline-block text-[10px] md:text-sm bg-gradient-to-r from-[#0047AB] to-[#00B4FF] text-white font-semibold px-2 py-0.5 rounded">{time}</span>
        <h3 className="mt-1.5 text-white font-semibold text-sm md:text-xl">{title}</h3>
        <p className="text-gray-300 text-xs md:text-base mt-1">{desc}</p>
      </div>
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="timeline" className="scroll-mt-24 md:scroll-mt-28 py-12 md:py-24 relative bg-gradient-to-br from-[#091025] via-[#0f1734] to-[#091025]">
      {/* background glows */}
      <div className="pointer-events-none absolute -top-24 right-10 w-56 md:w-72 h-56 md:h-72 bg-cyan-500/12 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-10 w-52 md:w-64 h-52 md:h-64 bg-blue-500/12 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <h2 className="section-title">Timeline</h2>

        <div className="relative mt-8 md:mt-10">
          {/* Split background halves (desktop only) */}
          <div aria-hidden className="absolute inset-0 -z-10 hidden md:block">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-[#0a0e27]" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[#101633]" />
            {/* center seam glow */}
            <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-gradient-to-b from-cyan-400/20 via-cyan-300/10 to-transparent" />
          </div>

          {/* Center spine (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[3px] md:w-[4px] bg-gradient-to-b from-[#0047AB] to-[#00B4FF] rounded-full" />

          {/* Mobile vertical guide line */}
          <div aria-hidden className="md:hidden absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400/30 via-cyan-300/20 to-transparent" />

          {/* Alternating rows: [left | center | right] */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_56px_1fr] gap-y-8 md:gap-y-14">
            {items.map((it, i) => {
              const left = i % 2 === 1
              const isDayBoundary = i === 0 || items[i - 1].day !== it.day
              return (
                <div key={it.title + i} className="contents">
                  {/* Left text */}
                  <div className={`hidden md:flex ${left ? 'justify-end pr-4 md:pr-6' : ''}`}>
                    {left ? (
                      <TextBlock title={it.title} time={it.time} desc={it.desc} align="left" tone="dark" />
                    ) : null}
                  </div>

                  {/* Center node (desktop only) */}
                  <div className="relative hidden md:flex items-center justify-center">
                    <div className="relative w-12 md:w-16 h-12 md:h-16 rounded-full bg-white shadow-xl ring-4 ring-cyan-400/25 flex items-center justify-center">
                      <span className="font-bold text-[#0047AB] text-xs md:text-base">{it.day}</span>
                    </div>
                    {/* small tick line toward the text */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 md:w-10 h-[2px] ${left ? 'right-16 bg-gradient-to-l from-cyan-400/70 to-transparent' : 'left-16 bg-gradient-to-r from-cyan-400/70 to-transparent'}`} />
                  </div>

                  {/* Right text */}
                  <div className={`hidden md:block ${!left ? 'pl-4 md:pl-6' : ''}`}>
                    {!left ? (
                      <TextBlock title={it.title} time={it.time} desc={it.desc} align="right" tone="light" />
                    ) : null}
                  </div>

                  {/* Mobile stacked (with left guide and dot) */}
                  <motion.div
                    className="md:hidden relative pl-12 mt-2"
                    initial={{ x: 40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                  >
                    {/* Day label on column at the first item of each day */}
                    {isDayBoundary && (
                      <motion.div
                        initial={{ y: -6, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="absolute -left-1 -top-3 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white/90 text-[#0047AB] shadow"
                      >
                        {it.day}
                      </motion.div>
                    )}

                    {/* dot on the guide line */}
                    <motion.div
                      className="absolute left-5 top-2 w-2.5 h-2.5 rounded-full bg-gradient-to-b from-[#0047AB] to-[#00B4FF] ring-2 ring-cyan-400/30"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    />

                    <p className="text-[11px] text-cyan-300/90 font-semibold">{it.time} • {it.day}</p>
                    <p className="text-white font-semibold text-sm mt-0.5">{it.title}</p>
                    <p className="text-gray-300 text-xs mt-0.5">{it.desc}</p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
