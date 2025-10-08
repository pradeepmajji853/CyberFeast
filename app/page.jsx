import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Events from '@/components/Events'
import Timeline from '@/components/Timeline'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  )
}
