'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnnouncementsCardProps } from "@/types/bento-grid"

export function AnnouncementsCard({ announcements }: AnnouncementsCardProps) {
    return (
        <motion.div
            id="announcements"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
        >
            <Card className="h-full">
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Announcements</h2>
                    <div className="space-y-6">
                        {announcements.map((announcement, index) => (
                            <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                                <p className="text-red-600 font-medium mb-1">{announcement.date}</p>
                                <Link href="#" className="block hover:text-cyan-600 transition-colors">
                                    <h3 className="font-medium text-gray-900">{announcement.title}</h3>
                                    <p className="text-gray-600 text-sm mt-1">{announcement.subtitle}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 text-right">
                        <Button variant="link" className="text-indigo-600 hover:text-indigo-700">
                            View All
                        </Button>
                    </div>
                </div>
            </Card>
        </motion.div>
    )
}

