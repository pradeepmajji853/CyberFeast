"use client"
import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 })

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{
        background: `radial-gradient(200px 200px at ${pos.x}px ${pos.y}px, rgba(0,180,255,0.10), transparent 60%)`,
        mixBlendMode: 'screen',
      }}
    />
  )
}
