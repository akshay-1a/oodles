'use client'

import { motion } from 'framer-motion'
import { SlideProps } from '@/types/slider'
import Link from 'next/link'

export function Slide({
  title,
  subtitle,
  description,
  links,
  color,
  isActive,
  total,
  index
}: SlideProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      exit={{ opacity: 0 }}
      className={`absolute inset-0 ${isActive ? 'z-20' : 'z-10'}`}
    >
      {/* Animated Background */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${color}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Content Overlay */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: isActive ? 0 : 100, opacity: isActive ? 1 : 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-20 h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-6 lg:px-8"
      >
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: isActive ? 0 : -100, opacity: isActive ? 1 : 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          {title}
        </motion.h2>

        <motion.h3
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: isActive ? 0 : -100, opacity: isActive ? 1 : 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-6"
        >
          {subtitle}
        </motion.h3>

        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: isActive ? 0 : -100, opacity: isActive ? 1 : 0 }}
          transition={{ delay: 0.5 }}
          className="text-base md:text-lg text-white/80 max-w-3xl mb-8"
        >
          {description}
        </motion.p>

        {links && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isActive ? 0 : 20, opacity: isActive ? 1 : 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            {links.map((link, i) => (
              <Link 
                key={i} 
                href={link.href}
                className="px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full 
                         font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                {link.text}
              </Link>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isActive ? 1 : 0 }}
        transition={{ duration: 8, ease: "linear" }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 origin-left z-30"
      >
        <motion.div
          className="absolute inset-0 bg-white/40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isActive ? 1 : 0 }}
          transition={{ duration: 8, ease: "linear" }}
        />
      </motion.div>
    </motion.div>
  )
}

