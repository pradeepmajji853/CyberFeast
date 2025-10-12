"use client"
import { useEffect, useRef } from 'react'

// Color palette for the network
const palette = {
  cobalt: 'rgba(0, 71, 171, 1)',
  amethyst: 'rgba(153, 51, 255, 1)',
  cyan: 'rgba(16, 185, 129, 1)',
  white: 'rgba(255, 255, 255, 1)',
}

export default function BackgroundNetwork() {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)
  const nodesRef = useRef([])
  const mouseRef = useRef({ x: -9999, y: -9999, active: false })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })

    const isMobile = typeof window !== 'undefined' ? window.innerWidth < 640 : false
    let dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 1.5)
    let width = 0
    let height = 0
    let isPaused = false

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function rand(min, max) { return Math.random() * (max - min) + min }

    function initNodes() {
      const area = width * height
      const baseCount = prefersReduced ? 20 : isMobile ? 40 : 78
      const density = prefersReduced ? 18000 : isMobile ? 16000 : 12000
      const count = Math.max(baseCount, Math.min(isMobile ? 110 : 170, Math.floor(area / density)))
      const nodes = new Array(count).fill(0).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: rand(-0.22, 0.22),
        vy: rand(-0.22, 0.22),
        r: rand(0.8, isMobile ? 1.2 : 1.6),
        color: [palette.cobalt, palette.amethyst, palette.cyan, palette.white][Math.floor(Math.random() * 4)],
      }))
      nodesRef.current = nodes
    }

    function resize() {
      const vw = (window.visualViewport && window.visualViewport.width) || window.innerWidth
      const vh = (window.visualViewport && window.visualViewport.height) || window.innerHeight
      width = Math.max(1, Math.floor(vw))
      height = Math.max(1, Math.floor(vh))
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = '100%'
      canvas.style.height = '100%'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initNodes()
    }

    let frame = 0
    function step() {
      if (isPaused) return
      // skip every other frame on mobile or reduced motion
      if (isMobile || prefersReduced) {
        frame = (frame + 1) % 2
        if (frame === 1) { rafRef.current = requestAnimationFrame(step); return }
      }
      const nodes = nodesRef.current
      ctx.clearRect(0, 0, width, height)

      const maxDist = prefersReduced ? 120 : isMobile ? 150 : 200
      const mouse = mouseRef.current
      const highlight = mouse.active ? 1.4 : 1.0

      // Update nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        if (mouse.active) {
          const dx = n.x - mouse.x
          const dy = n.y - mouse.y
          const dist = Math.hypot(dx, dy)
          if (dist < maxDist * 1.1) {
            const force = (maxDist - dist) / maxDist
            n.vx += (dx / (dist || 1)) * 0.006 * force
            n.vy += (dy / (dist || 1)) * 0.006 * force
          }
        }
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
        n.vx *= 0.996
        n.vy *= 0.996
      }

      // Connections (limit j loop on mobile)
      const stepJ = isMobile ? 2 : 1
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + stepJ; j < nodes.length; j += stepJ) {
          const a = nodes[i], b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < maxDist) {
            const t = 1 - dist / maxDist
            const alpha = Math.min(0.3 * t * highlight, 0.7)
            const colorA = a.color.match(/\d+/g).map(Number)
            const colorB = b.color.match(/\d+/g).map(Number)
            const blendedColor = [
              (colorA[0] + colorB[0]) / 2,
              (colorA[1] + colorB[1]) / 2,
              (colorA[2] + colorB[2]) / 2,
            ]

            ctx.strokeStyle = `rgba(${blendedColor[0]}, ${blendedColor[1]}, ${blendedColor[2]}, ${alpha})`
            ctx.lineWidth = Math.max(1.0, 2.0 * t * (mouse.active ? 1.2 : 1))
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        const nodeAlpha = mouse.active ? 0.75 : 0.45
        const r = n.r * (mouse.active ? 1.1 : 1)
        ctx.fillStyle = n.color.replace(/, 1\)$/i, `, ${nodeAlpha})`)
        ctx.beginPath()
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(step)
    }

    function onMouseMove(e) {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      mouseRef.current.active = true
    }
    function onMouseLeave() {
      mouseRef.current.active = false
    }

    function onVisibility() {
      isPaused = document.visibilityState === 'hidden'
      if (!isPaused) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = requestAnimationFrame(step)
      }
    }

    window.addEventListener('resize', resize)
    window.addEventListener('orientationchange', resize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('visibilitychange', onVisibility)

    resize()
    rafRef.current = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('orientationchange', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-75"
      aria-hidden
    />
  )
}
