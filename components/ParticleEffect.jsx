"use client"
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function ParticleEffect() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')

    const resizeCanvas = () => {
      const parent = canvas.parentElement
      const rect = parent ? parent.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight }
      const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, rect.width < 640 ? 1 : 1.5) : 1
      canvas.style.width = rect.width + 'px'
      canvas.style.height = rect.height + 'px'
      canvas.width = Math.max(1, Math.floor(rect.width * dpr))
      canvas.height = Math.max(1, Math.floor(rect.height * dpr))
    }

    resizeCanvas()

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.innerWidth < 640
    const area = Math.max(1, (canvas.width * canvas.height) / ((window.devicePixelRatio || 1) ** 2))
    const base = prefersReduced ? 16 : isMobile ? 24 : 50
    const density = prefersReduced ? 70000 : 55000
    const particleCount = Math.max(12, Math.min(base, Math.floor(area / density)))
    const maxConnections = prefersReduced ? 1 : isMobile ? 2 : 4
    const linkDistance = isMobile ? 90 : 120

    const particles = []

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() * 0.5 - 0.25) * (isMobile ? 0.7 : 1)
        this.speedY = (Math.random() * 0.5 - 0.25) * (isMobile ? 0.7 : 1)
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = `rgba(0, 180, 255, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle())

    let raf = 0
    let frame = 0

    function animate() {
      raf = requestAnimationFrame(animate)
      // skip every other frame on low power to reduce CPU
      if (prefersReduced || isMobile) {
        frame = (frame + 1) % 2
        if (frame === 1) return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.update()
        p.draw()

        // Draw limited connections
        let drawn = 0
        for (let j = i + 1; j < particles.length && drawn < maxConnections; j++) {
          const dx = p.x - particles[j].x
          const dy = p.y - particles[j].y
          const distance = Math.hypot(dx, dy)
          if (distance < linkDistance) {
            ctx.strokeStyle = `rgba(0, 180, 255, ${0.15 * (1 - distance / linkDistance)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(particles[j].x, p.y)
            ctx.stroke()
            drawn++
          }
        }
      }
    }

    animate()

    const handleResize = () => resizeCanvas()
    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-40 w-full h-full"
      style={{ zIndex: 20 }}
    />
  )
}
