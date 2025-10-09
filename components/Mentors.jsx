"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

const mentors = [
  { name: 'A. Sharma', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=640&auto=format&fit=crop' },
  { name: 'V. Gupta', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=640&auto=format&fit=crop' },
  { name: 'S. Rao', img: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=640&auto=format&fit=crop' },
  { name: 'N. Iyer', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=640&auto=format&fit=crop' },
]

export default function Mentors() {
  return (
    <section id="mentors" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" style={{ animationDelay: '1.5s' }} />
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Mentors
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-2 text-gray-300"
        >
          Meet the professionals and mentors guiding CyberFest 2025.
        </motion.p>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {mentors.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative overflow-hidden rounded-xl bg-black/20 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30"
            >
              {/* Glowing border effect on hover */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/50 to-cyan-500/50 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 rounded-xl" />
              
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image 
                  src={m.img} 
                  alt={m.name} 
                  fill 
                  sizes="(max-width: 768px) 50vw, 25vw" 
                  className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110" 
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Animated shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                </div>
                
                {/* Name reveal */}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <h3 className="text-lg font-semibold text-white drop-shadow-lg">{m.name}</h3>
                    <p className="text-sm text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Cybersecurity Expert</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
