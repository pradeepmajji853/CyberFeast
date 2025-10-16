import './globals.css'
import { Orbitron, Poppins } from 'next/font/google'
import CursorGlow from '@/components/CursorGlow'
import BackgroundNetwork from '@/components/BackgroundNetwork'
import Navbar from '@/components/Navbar'

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })
const poppins = Poppins({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-poppins' })

export const metadata = {
  title: {
    default: 'ForensIQ 2025',
    template: '%s | ForensIQ',
  },
  description: 'Digital Defense Club – Annual Cybersecurity Showcase',
  icons: {
    icon: [{ url: '/logos/ddc_logo.jpg', type: 'image/jpeg' }],
    apple: [{ url: '/logos/ddc_logo.jpg', type: 'image/jpeg' }],
  },
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
      {/* forensiq hex: 666f72656e7369717b686561645f6865785f68696e747d */}
      {/* forensiq base64: Zm9yZW5zaXF7aHRtbF9oZWFkfQ== */}
      <body className={`${orbitron.variable} ${poppins.variable} font-poppins beam-bg`} data-forensiq-b64="Zm9yZW5zaXFre2Jhc2U2NF9pZXRhfQ==">
        <BackgroundNetwork />
        <CursorGlow />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
