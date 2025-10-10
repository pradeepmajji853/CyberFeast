"use client"
import { FaRocket, FaFlagCheckered, FaTrophy, FaTools } from 'react-icons/fa'

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

function TextBlock({ title, time, desc, align = 'left' }) {
  return (
    <div className={`${align === 'left' ? 'text-right' : 'text-left'}`}>
      <div className="inline-block max-w-md w-full sm:w-auto rounded-2xl bg-dark-card/60 border border-white/10 p-4 md:p-5 shadow-neon text-left">
        <span className="inline-block text-[11px] md:text-sm bg-gradient-to-r from-[#0047AB] to-[#00B4FF] text-white font-semibold px-2 py-0.5 rounded">{time}</span>
        <h3 className="mt-1.5 text-white font-semibold text-base md:text-xl">{title}</h3>
        <p className="text-gray-300 text-sm md:text-base mt-1">{desc}</p>
      </div>
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-14 md:py-24 relative bg-gradient-to-br from-[#0a0e27] via-[#101633] to-[#0a0e27]">
      {/* Cleaner background (removed right slab) */}
      <div className="pointer-events-none absolute -top-24 right-10 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-10 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <h2 className="section-title">Timeline</h2>

        <div className="relative mt-8 md:mt-10">
          {/* Center spine */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[3px] md:w-[4px] bg-gradient-to-b from-[#0047AB] to-[#00B4FF] rounded-full" />

          {/* Alternating rows: [left | center | right] */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_56px_1fr] gap-y-10 md:gap-y-14">
            {items.map((it, i) => {
              const left = i % 2 === 1
              return (
                <div key={it.title + i} className="contents">
                  {/* Left text */}
                  <div className={`hidden md:flex ${left ? 'justify-end pr-4 md:pr-6' : ''}`}>
                    {left ? <TextBlock title={it.title} time={it.time} desc={it.desc} align="left" /> : null}
                  </div>

                  {/* Center node */}
                  <div className="relative flex items-center justify-center">
                    <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-xl ring-4 ring-cyan-400/25 flex items-center justify-center">
                      <span className="font-bold text-[#0047AB] text-xs md:text-base">{it.day}</span>
                    </div>
                    {/* small tick line toward the text */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 md:w-10 h-[2px] ${left ? 'right-16 bg-gradient-to-l from-cyan-400/70 to-transparent' : 'left-16 bg-gradient-to-r from-cyan-400/70 to-transparent'}`} />
                  </div>

                  {/* Right text */}
                  <div className={`hidden md:block ${!left ? 'pl-4 md:pl-6' : ''}`}>
                    {!left ? <TextBlock title={it.title} time={it.time} desc={it.desc} align="right" /> : null}
                  </div>

                  {/* Mobile stacked */}
                  <div className="md:hidden mt-3">
                    <p className="text-[11px] text-cyan-300/90 font-semibold">{it.time} • {it.day}</p>
                    <p className="text-white font-semibold text-sm">{it.title}</p>
                    <p className="text-gray-300 text-sm">{it.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
