'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="py-16 px-4 relative h-[90vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/images/hero1.jpg')` }} id='hero'>
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.img
        src={'/logo.png'}
        width={100}
        height={200}  
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}/>   
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Cristo Reina Church
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl max-w-xl mb-6 text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Uma igreja para todos. Um lugar de encontro com Deus.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Button size="lg" className="rounded-full px-8 py-6 text-base md:text-lg">
            <a href="#services">Visite nos</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
