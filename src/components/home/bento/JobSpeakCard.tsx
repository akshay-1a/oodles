'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Mic } from 'lucide-react'
import { JobspeakCardProps } from "@/types/bento-grid"

export function JobspeakCard({ title, subtitle }: JobspeakCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
        >
            <Card className="bg-purple-500 text-white h-full p-6">
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                    <div className="rounded-full bg-white/10 p-4">
                        <Mic className="h-12 w-12" />
                    </div>
                    <h3 className="text-2xl font-semibold">
                        {title}
                    </h3>
                    <p className="text-purple-100">
                        {subtitle}
                    </p>
                </div>
            </Card>
        </motion.div>
    )
}

