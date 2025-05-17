'use client'

import { celulas } from '@/data/site-data'
import { motion } from 'framer-motion'
import { CalendarDays, Clock, MapPinCheck } from 'lucide-react'
import { services } from '@/data/site-data'


export default function ServicesSection() {
  return (
    <section className=" py-16 px-4" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nossos Cultos
        </motion.h2>

        <p className="text-gray-400 mb-10">
          Participe de um dos nossos encontros semanais. Todos são bem-vindos!
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className=" rounded-lg shadow-md p-6 text-left hover:shadow-lg transition-shadow bg-zinc-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
              <div className="flex items-center text-zinc-400 mb-1">
                <CalendarDays className="w-4 h-4 mr-2" />
                {service.day}
              </div>
              <div className="flex items-center text-zinc-400">
                <Clock className="w-4 h-4 mr-2" />
                {service.time}
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>

      {/* Celulas */}
      <div className="max-w-6xl mx-auto text-center mt-16">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nossas Células nos lares
        </motion.h2>

        <p className="text-gray-400 mb-10">
          Participe de uma das nossas células semanais pertinho de você. Todos são bem-vindos!
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {celulas.map((celula, index) => (
            <motion.div
              key={index}
              className=" rounded-lg shadow-md p-6 text-left hover:shadow-lg transition-shadow bg-zinc-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{celula.title} - Líder: {celula.lider}</h3>
              <div className="flex items-center text-zinc-400 mb-1">
                <CalendarDays className="w-4 h-4 mr-2" />
                {celula.day}
              </div>
              <div className="flex items-center text-zinc-400">
                <Clock className="w-4 h-4 mr-2" />
                {celula.time}
              </div>
              <div className="flex items-center text-zinc-400">
                <MapPinCheck className="w-4 h-4 mr-2" />
                {celula.local}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
