import './globals.css'
import { Orbitron, Poppins } from 'next/font/google'
import CursorGlow from '@/components/CursorGlow'
import BackgroundNetwork from '@/components/BackgroundNetwork'
import Navbar from '@/components/Navbar'

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })
const poppins = Poppins({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-poppins' })

export const metadata = {
  title: 'CyberFest 2025 – Forensics Edition',
  description: 'Digital Defense Club – Annual Cybersecurity Showcase',
}

// Ensure proper responsive scaling on mobile
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={`${orbitron.variable} ${poppins.variable} font-poppins beam-bg`}>
        <BackgroundNetwork />
        <CursorGlow />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
