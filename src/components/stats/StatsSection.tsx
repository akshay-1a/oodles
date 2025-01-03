'use client'

import { motion } from 'framer-motion'
import { StatItem } from './StatItem'

const stats = [
    { value: 12, label: 'years of customer focused service', suffix: '+' },
    { value: 20, label: 'countries where we have happy customers', suffix: '+' },
    { value: 441, label: 'clients across the globe' },
    { value: 770, label: 'successful projects completed' },
]

export function StatsSection() {
    return (
        <section className="py-20 px-4 bg-gray-900 snap-start">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
                >
                    We are proud of our work
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <StatItem {...stat} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

