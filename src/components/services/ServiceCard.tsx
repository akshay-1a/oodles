'use client'

import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface ServiceCardProps {
    title: string
    description: string
    icon: LucideIcon
    href: string
    index: number
}

export function ServiceCard({ title, description, icon: Icon, href, index }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link href={href}>
                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-6 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                    {/* Icon */}
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                        <Icon className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-3">
                        {description}
                    </p>

                    {/* Hover line animation */}
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                </div>
            </Link>
        </motion.div>
    )
}

