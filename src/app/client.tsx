'use client';

import { Hero } from '@/components/home/hero'
import { Footer } from '@/components/wrap/footer'
import { Business } from '@/components/home/business'
import { BentoGrid } from '@/components/home/bento-grid'
import { ModernSlider } from '@/components/slider';
import { ServicesGrid } from '@/components/services/ServicesGrid';
import { StatsSection } from '@/components/stats/StatsSection';

export default function Home() {
    return (
        <div className="snap-y snap-mandatory h-screen overflow-y-auto ">
            {/* Hero Section */}
            <Hero />
            {/* Slider */}
            <ModernSlider />
            {/* Services */}
            <ServicesGrid />
            {/* Our Products */}
            <Business/>
            {/* Footer */}
            <Footer />
        </div>
    )
}


            {/* Business Stats Section */}
            {/* <section className="py-20 bg-gray-50 snap-start">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <Card>
                            <CardContent className="flex flex-col items-center p-6">
                                <Building2 className="h-12 w-12 text-cyan-500 mb-4" />
                                <h3 className="text-2xl font-bold mb-2">Our Businesses</h3>
                                <p className="text-center text-gray-600">
                                    Leading platforms in recruitment, real estate, and education
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="flex flex-col items-center p-6">
                                <Users className="h-12 w-12 text-cyan-500 mb-4" />
                                <h3 className="text-2xl font-bold mb-2">Careers</h3>
                                <p className="text-center text-gray-600">
                                    Join our team of innovators and problem solvers
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="flex flex-col items-center p-6">
                                <Newspaper className="h-12 w-12 text-cyan-500 mb-4" />
                                <h3 className="text-2xl font-bold mb-2">Press Releases</h3>
                                <p className="text-center text-gray-600">
                                    Stay updated with our latest news and announcements
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section> */}
            {/* Our Businesses Section */}
            {/* <section className="py-20 snap-start">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Businesses</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We operate multiple market-leading businesses in recruitment, real estate,
                            matrimony and education sectors
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {['naukri.com', '99acres.com', 'jeevansathi.com', 'shiksha.com'].map((business) => (
                            <motion.div
                                key={business}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="flex items-center justify-center"
                            >
                                <img
                                    src={`/placeholder.svg?height=100&width=200`}
                                    alt={business}
                                    className="max-w-[200px] h-auto"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}