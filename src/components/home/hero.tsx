'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Megaphone, TrendingUp, Newspaper, Users } from 'lucide-react'
import { redirect } from 'next/navigation'
import GradualSpacing from '../ui/gradual-spacing'

export function Hero() {
  return (
    <section className="relative h-screen snap-start">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-sky-950/50" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center text-white flex flex-col justify-center items-center h-full z-10"
      >
        <GradualSpacing
          className="font-display text-center text-4xl font-bold mb-8  text-white md:text-7xl md:leading-[5rem]"
          texts={["Transform With Oodles", "Innovate With AI", "Digitalize With Saas", "Disrupt With Blockchain"]}
          interval={4000}
        />
        <motion.p
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}        
        className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl">
          Step into the age of disruptive
          innovation with us. <span className='font-bold text-cyan-500'>Be the next.</span>
        </motion.p>
        <Button
          size="lg"
          onClick={() => redirect('/about')}
          className="bg-cyan-500 hover:bg-cyan-600 text-white"
        >
          Get In Touch
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </section>
  )
}

