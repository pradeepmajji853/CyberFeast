import About from '@/components/About'
import Events from '@/components/Events'
import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main>
      {/* Navbar is rendered globally in layout */}
      <Hero />
      <About />
      <Events />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  )
}
