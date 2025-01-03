'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Slide } from './Slide'
import { SlideControls } from './SlideControls'
import { SlideData } from '@/types/slider'

const slides: SlideData[] = [
  {
    id: 1,
    title: "Oodles Marketing",
    subtitle: "Strategic Digital Marketing Solutions",
    description: "Make headway for out-of-the-box branding and marketing strategies with Oodles Marketing. Our marketing solutions help capitalize potential customers in the market and build online visibility. Part of our services also include ensuring a flawless launch and promotion of products.",
    color: "from-blue-600 to-cyan-400",    
    links: [
      { text: "Explore Marketing", href: "/marketing" }
    ]
  },
  {
    id: 2,
    title: "Our Approach",
    subtitle: "Bringing Ideas to Life",
    description: "We breathe life into your dream projects using our knowledge and expertise. Every step we take is logically, financially and aesthetically scrutinized, analyzed and reanalyzed. All the while keeping the best interests of your business in mind.",
    color: "from-purple-600 to-pink-400",    
    links: [
      { text: "Learn More", href: "/approach" }
    ]
  },
  {
    id: 3,
    title: "Oodles Technologies",
    subtitle: "Web & Mobile Application Development",
    description: "Watch your ideas materialize into tangible success as we define your journey from Technologies to Solutions. Our trained experts help you with cost-effective web and application development using leading-edge technologies.",
    color: "from-emerald-600 to-teal-400",
    links: [
      { text: "Oodles Blockchain", href: "/blockchain" },
      { text: "Oodles ERP", href: "/erp" },
      { text: "Oodles AI", href: "/ai" }
    ]
  },
  {
    id: 4,
    title: "Oodles Studio",
    subtitle: "Creative Design Solutions",
    description: "Oodles Studio—the solution to all your design needs! We leverage User Experience Designs and Services, provide innovative and hand-crafted UI that breathes life into websites, applications, and development autostrada.",
    color: "from-orange-600 to-amber-400",
    links: [
      { text: "Visit Studio", href: "/studio" }
    ]
  }
]

export function ModernSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  })

  return (
    <div className="relative h-screen w-full overflow-hidden snap-start">
      <div className="absolute inset-x-0 top-0 pt-28 z-30 py-8 bg-gradient-to-b from-black/50 to-transparent">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-white px-4">
          Transforming Ideas Into Innovative Solutions Using Evolving Technologies
        </h1>
      </div>

      <AnimatePresence mode="sync">
        {slides.map((slide, index) => (
          <Slide
            key={slide.id}
            {...slide}
            isActive={currentSlide === index}
            total={slides.length}
            index={index}
          />
        ))}
      </AnimatePresence>
      
      <SlideControls
        total={slides.length}
        current={currentSlide}
        onSelect={setCurrentSlide}
      />

      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-8 right-8 z-40 bg-white/10 backdrop-blur-md px-4 py-2 
                   rounded-full text-white text-sm font-medium hover:bg-white/20 
                   transition-colors border border-white/20"
      >
        {isAutoPlaying ? "Pause" : "Play"} Slideshow
      </button>
    </div>
  )
}

