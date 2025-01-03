'use client'

import { motion } from 'framer-motion'
import { SlideControlsProps } from '@/types/slider'

export function SlideControls({ total, current, onSelect }: SlideControlsProps) {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className="group relative p-2"
        >
          <div
            className={`w-2 h-2 rounded-full transition-all duration-300
              ${current === index ? 'bg-white' : 'bg-white/40'}
              group-hover:bg-white`}
          />
          {current === index && (
            <motion.div
              layoutId="slideIndicator"
              className="absolute inset-0 border-2 border-white rounded-full"
              transition={{ duration: 0.3 }}
            />
          )}
        </button>
      ))}
    </div>
  )
}

