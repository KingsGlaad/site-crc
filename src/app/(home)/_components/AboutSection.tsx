'use client'

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { carouselData } from '@/data/site-data'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function AboutSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef(Autoplay({ delay: 5000 }))


  useEffect(()=>{
    if(!api) {return}
    api.on("select", ()=>{
      setCurrent(api.selectedScrollSnap())
    })
  },[api])

  return (
    <section className=" py-16 px-4" id='about'>
      
      <div className="max-w-4xl mx-auto text-center">
        <Carousel setApi={setApi} opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[autoplayRef.current]}
        className='w-full'
        >
          
          <CarouselContent>
            {carouselData.map((item, index) => (
              <CarouselItem key={index} className="relative bg-black/50">
              <div className="relative w-full h-[400px]" onMouseEnter={() => autoplayRef.current.stop() } onMouseLeave={() => autoplayRef.current.play() }>
                <Image
                  src={item.src}
                  alt={`Slide ${index + 1}`}
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover max-h-[90vh]"
                  priority={index === 0}
                />

                {/* Overlay preto opaco */}
                <div className="absolute inset-0 z-10 bg-black/25" />
            
                {/* Texto sobre a imagem */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10 px-4">
                  <div className="text-center text-white max-w-3xl">
                    <motion.h2 
                      className="text-3xl md:text-4xl font-bold mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.title}
                    </motion.h2>
            
                    <motion.p 
                      className="text-lg leading-relaxed text-gray-100"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </div>
              </div>
            </CarouselItem>
            
            ))}
          </CarouselContent>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                current === index ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          ))}
        </div>
        </Carousel>
      </div>
    </section>
  )
}
