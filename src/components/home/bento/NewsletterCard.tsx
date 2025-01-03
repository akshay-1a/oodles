'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Newspaper, ArrowRight } from 'lucide-react'
import { useState } from "react"
import { NewsletterFormData } from "@/types/bento-grid"

interface NewsletterCardProps {
  onSubmit: (data: NewsletterFormData) => void
}

export function NewsletterCard({ onSubmit }: NewsletterCardProps) {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ email })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="lg:col-span-1"
    >
      <Card className="bg-cyan-600 text-white h-full p-6">
        <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
          <Newspaper className="h-16 w-16 mb-4" />
          <h3 className="text-xl font-semibold">
            Get our Newsletter or Press Releases or Announcements
          </h3>
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              required
            />
            <Button type="submit" className="w-full bg-white text-cyan-600 hover:bg-white/90">
              Sign up for alerts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </Card>
    </motion.div>
  )
}

