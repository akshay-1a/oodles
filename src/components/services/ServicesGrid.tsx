'use client'

import { motion } from 'framer-motion'
import { ServiceCard } from './ServiceCard'
import { Cloud, Smartphone, Video, Glasses, CuboidIcon as Cube, Database, Brain, GitBranch, BarChart, Wifi, Watch, Shield, CheckCircle, Box } from 'lucide-react'

const services = [
    {
        title: 'SaaS Application Development',
        description: 'Implement SaaS into your business environment with our exceptional SaaS development solutions to increase efficiency to your business model.',
        icon: Cloud,
        href: '/services/saas'
    },
    {
        title: 'Mobile App Development',
        description: 'Unleash your digital intelligence with our power-packed mobile app solutions that are built with a user-centric approach and smart integration capabilities.',
        icon: Smartphone,
        href: '/services/mobile'
    },
    {
        title: 'OTT Video Solutions',
        description: 'Power up your application with creative and novel strategies, compelling video technological details to effectively engage users for a continued business success.',
        icon: Video,
        href: '/services/ott'
    },
    {
        title: 'Metaverse Implementation',
        description: 'Construct hyper-realistic 3D virtual realms, build interconnected social networks, and deliver immersive digital experiences in the Metaverse using next-gen technologies.',
        icon: Box,
        href: '/services/metaverse'
    },
    {
        title: 'AR and VR Development',
        description: 'We help businesses redefine their brand, increase sales and offer new, immersive, and futuristic experiences to their customers with AR and VR solutions.',
        icon: Glasses,
        href: '/services/ar-vr'
    },
    {
        title: 'Blockchain Development',
        description: 'Disrupt the digital future with Blockchain. Our tech experts help you unlock the untapped and unimagined potential of blockchain solutions for your business.',
        icon: Cube,
        href: '/services/blockchain'
    },
    {
        title: 'ERP Solutions',
        description: 'From start-ups to enterprises, we empower businesses to achieve more with our expert ERP consulting and engineering services.',
        icon: Database,
        href: '/services/erp'
    },
    {
        title: 'AI Development',
        description: 'Empower your business to become smarter by applying AI to your products, business operations, new domains, developing tools, and more.',
        icon: Brain,
        href: '/services/ai'
    },
    {
        title: 'DevOps',
        description: 'Drive your business intelligently with streamlined, agile, automated IT operations, and thus speedy customer delivery services by adopting proven DevOps culture.',
        icon: GitBranch,
        href: '/services/devops'
    },
    {
        title: 'Big Data Intelligence',
        description: 'Analyze your complex business data accrued since inception with our experts to develop ingenious ways of performance.',
        icon: BarChart,
        href: '/services/big-data'
    },
    {
        title: 'IoT Development',
        description: 'With IoT-led digital transformation services, we help you establish a digitally connected world for your customers that add real value to their work and lives.',
        icon: Wifi,
        href: '/services/iot'
    },
    {
        title: 'Wearables Development',
        description: 'Simplify and create meaningful impact to your customers lives.Get the best user- centric and customized IT solutions for personal and professional use.',
icon: Watch,
    href: '/services/wearables'
  },
{
    title: 'Data Protection',
        description: 'Align your business in compliance with the data protection and privacy regulations. We help you evaluate the best way to meet specific requirements.',
            icon: Shield,
                href: '/services/data-protection'
},
{
    title: 'Quality Assurance',
        description: 'Accelerate your time to market and assure success through our advanced, quality assured, and best-in-class tech services for your digital business.',
            icon: CheckCircle,
                href: '/services/quality'
}
]

export function ServicesGrid() {
    return (
        <section className="relative snap-start py-20 px-4 overflow-hidden bg-gray-900">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.1),transparent_50%)]" />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Services
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Offering revolutionizing technology solutions to make your business smarter
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            {...service}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

