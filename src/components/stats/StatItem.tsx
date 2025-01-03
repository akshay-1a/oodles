'use client'

import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

interface StatItemProps {
    value: number
    label: string
    suffix?: string
}

export function StatItem({ value, label, suffix = '' }: StatItemProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <div ref={ref} className="text-center p-6">
            <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                {inView ? (
                    <CountUp end={value} duration={2.5} separator="," suffix={suffix} />
                ) : (
                    '0'
                )}
            </div>
            <div className="text-sm md:text-base text-gray-400">{label}</div>
        </div>
    )
}

