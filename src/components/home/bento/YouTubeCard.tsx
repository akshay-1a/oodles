'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { YouTubeVideoProps } from "@/types/bento-grid"

export function YouTubeCard({ videoId, title }: YouTubeVideoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="lg:col-span-2"
    >
      <Card className="h-full">
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Card>
    </motion.div>
  )
}

