'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { PressReleases } from "@/types/bento-grid"

interface PressReleaseCardProps {
  data: PressReleases
}

export function PressReleaseCard({ data }: PressReleaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="lg:col-span-2"
    >
      <Card className="h-full">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Press Releases</h2>
            <h1 className="font-black text-4xl">
              <span className="text-sky-500">Info</span>
              Edge
            </h1>
          </div>
          <Tabs defaultValue="investors" className="w-full">
            <TabsList>
              <TabsTrigger value="investors">For Investors</TabsTrigger>
              <TabsTrigger value="media">For Media</TabsTrigger>
            </TabsList>
            <TabsContent value="investors">
              <div className="space-y-4">
                {data.investors.map((release, index) => (
                  <Link
                    key={index}
                    href={release.link}
                    className="block hover:bg-gray-50 p-2 rounded-lg transition-colors"
                  >
                    {release.title}
                  </Link>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="media">
              <div className="space-y-4">
                {data.media.map((release, index) => (
                  <Link
                    key={index}
                    href={release.link}
                    className="block hover:bg-gray-50 p-2 rounded-lg transition-colors"
                  >
                    {release.title}
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </motion.div>
  )
}

