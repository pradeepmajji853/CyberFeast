"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCalendarAlt, FaChalkboardTeacher, FaUserTie, FaTools, FaEnvelopeOpenText, FaCode, FaFlagCheckered, FaTrophy, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import Image from 'next/image'

const Part = ({ title, time, items, note, children, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="rounded-2xl bg-dark-card/60 border border-white/5 overflow-hidden relative">
      <button onClick={() => setOpen(v => !v)} className="w-full text-left px-5 md:px-6 py-4 flex items-center justify-between bg-white/5">
        <div className="flex items-center gap-3">
          <FaClock className="text-[#00B4FF]" />
          <div>
            <p className="font-semibold">{title}</p>
            {time && <p className="text-sm text-gray-400">{time}</p>}
          </div>
        </div>
        <motion.span animate={{ rotate: open ? 180 : 0 }} className="text-gray-400">▾</motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
            <div className="px-5 md:px-6 py-5 space-y-3">
              {items?.length ? (
                <ul className="list-disc list-outside pl-5 text-gray-200/90 space-y-1">
                  {items.map((t) => <li key={t}>{t}</li>)}
                </ul>
              ) : null}
              {children}
              {note && (
                <div className="mt-3 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#0047AB] to-[#00B4FF] px-3 py-1 text-black text-sm font-semibold shadow-neon">{note}</div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Program() {
  return (
    <section id="program" className="py-14 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="section-title">Program</h2>
        <div className="mt-2 text-gray-300 flex flex-wrap items-center gap-3 md:gap-4 text-sm md:text-base">
          <span className="inline-flex items-center gap-2"><FaChalkboardTeacher className="text-[#00B4FF]" /> Organized by: <strong className="ml-1">Digital Defense Club</strong></span>
          <span className="inline-flex items-center gap-2"><FaMapMarkerAlt className="text-[#00B4FF]" /> Venue: <em className="ml-1">[Venue Name, College]</em></span>
          <span className="inline-flex items-center gap-2"><FaCalendarAlt className="text-[#00B4FF]" /> Dates: <em className="ml-1">[Insert Dates]</em></span>
        </div>

        {/* Day 1 */}
        <div className="mt-6 md:mt-8 space-y-4 md:space-y-5">
          <h3 className="text-xl md:text-2xl font-semibold text-[#00B4FF]">Day 1: Awareness & Training</h3>

          <Part
            title="Part 1: Inaugural Session & Career Insights"
            time="9:30 AM – 12:30 PM"
            items={[
              'Introduction to Cyber Security',
              'Career opportunities in cybersecurity',
              'Roadmap to pursuing cybersecurity as a career',
              'Alumni Interaction & Career Guidance',
              'Q&A / Interview Session',
            ]}
            note="Code Distribution: First 3-digit code after this session"
          >
            <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: 'Deloitte', file: 'Deloitte_Logo.jpg' },
                { name: 'KPMG', file: 'kpmg.png' },
                { name: 'EY', file: 'ey.png' },
                { name: 'PwC', file: 'pwc.png' },
              ].map(({ name, file }) => (
                <div key={name} className="relative aspect-[16/9] rounded-lg bg-black/20 border border-white/10">
                  <Image src={`/logos/${file}`} alt={`${name} logo`} fill className="object-contain p-3" />
                </div>
              ))}
            </div>
          </Part>

          <Part
            title="Part 2: Hands-on Forensics Lab Session"
            time="2:00 PM – 4:00 PM"
            items={[
              'Digital Forensics using cross-platform tools (Windows/macOS)',
              'Hands-on investigation analyzing disk and email data',
            ]}
            note="Code Distribution: Second 3-digit code after this session"
          >
            <div className="mt-3 grid md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-black/15 p-4 border border-white/10">
                <p className="font-medium text-[#00B4FF] inline-flex items-center gap-2"><FaTools /> Tools & Setup</p>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-200/90">
                  <li>The Sleuth Kit (TSK) – file system analysis and recovery</li>
                  <li>ExifTool (web) – metadata inspection</li>
                  <li>MXToolbox Email Header Analyzer</li>
                  <li>WhatIsMyIPAddress Email Header Analyzer</li>
                  <li>Google Admin Toolbox Messageheader</li>
                </ul>
              </div>
              <div className="rounded-xl bg-black/15 p-4 border border-white/10">
                <p className="font-medium text-[#00B4FF] inline-flex items-center gap-2"><FaCode /> Session Flow</p>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-200/90">
                  <li>2:00 – 2:15: Intro to Digital Forensics</li>
                  <li>2:15 – 2:35: Overview of TSK and commands</li>
                  <li>2:35 – 3:05: Hands-on analysis – file extraction and headers</li>
                  <li>3:05 – 3:25: Email header forensics (web tools)</li>
                  <li>3:25 – 3:55: Group task & Q&A</li>
                  <li>3:55 – 4:00: Code distribution and wrap-up</li>
                </ul>
              </div>
            </div>
          </Part>
        </div>

        {/* Day 2 */}
        <div className="mt-8 md:mt-10 space-y-4 md:space-y-5">
          <h3 className="text-xl md:text-2xl font-semibold text-[#00B4FF]">Day 2: Cyber Security Showcase</h3>

          <Part
            title="Part 3: Challenges and Example Questions"
            time="9:30 AM – 12:30 PM"
            items={[
              'Hands-on forensic challenges simulating real investigations',
              'Focus on analytical thinking, teamwork, and technical skills',
            ]}
            note="Code Distribution: Third 3-digit code after this session"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-black/15 p-4 border border-white/10">
                <p className="font-medium text-[#00B4FF]">Challenge Types</p>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-200/90">
                  <li>Recover deleted files from a sample disk image</li>
                  <li>Identify hidden metadata in a document</li>
                  <li>Extract sender IP and timestamps from email headers</li>
                  <li>Correlate timestamps to reconstruct a timeline</li>
                </ul>
              </div>
              <div className="rounded-xl bg-black/15 p-4 border border-white/10">
                <p className="font-medium text-[#00B4FF]">Scenario-Based Investigations</p>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-200/90">
                  <li>Analyze a suspicious email for authenticity</li>
                  <li>Identify compromised files using hash comparison</li>
                  <li>Trace user activity from logs and recovered files</li>
                  <li>Determine data exfiltration evidence from artifacts</li>
                </ul>
              </div>
            </div>
          </Part>

          <Part
            title="Part 4: Valedictory & Fun Activities"
            time="1:30 PM – 3:00 PM"
            items={[
              'Engaging Activities & Games',
              'Closing Ceremony (Winners, Prizes, Vote of Thanks)',
              'Entry Restriction: Only students with the final 12-digit code (all 3 sessions) are allowed',
            ]}
          />
        </div>

        {/* Compact table summary */}
        <div className="mt-8 md:mt-10 rounded-xl bg-white/5 p-3 md:p-4 border border-white/10 overflow-x-auto">
          <table className="min-w-[640px] w-full text-xs md:text-sm">
            <thead className="text-gray-300">
              <tr className="text-left">
                <th className="py-2 pr-4">Day</th>
                <th className="py-2 pr-4">Time</th>
                <th className="py-2 pr-4">Activity</th>
              </tr>
            </thead>
            <tbody className="text-gray-200/90">
              <tr><td className="py-2 pr-4">Day 1</td><td className="py-2 pr-4">9:30 AM – 12:30 PM</td><td className="py-2 pr-4">Career Insights & Alumni Interaction</td></tr>
              <tr><td className="py-2 pr-4">Day 1</td><td className="py-2 pr-4">2:00 PM – 4:00 PM</td><td className="py-2 pr-4">Hands-on Forensics Lab Session</td></tr>
              <tr><td className="py-2 pr-4">Day 2</td><td className="py-2 pr-4">9:30 AM – 12:30 PM</td><td className="py-2 pr-4">Showcase Forensic Challenges</td></tr>
              <tr><td className="py-2 pr-4">Day 2</td><td className="py-2 pr-4">1:30 PM – 3:00 PM</td><td className="py-2 pr-4">Fun Activities & Valedictory</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
