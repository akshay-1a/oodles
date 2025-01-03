'use client'

import { StockCard } from "./bento/StockCard"
import { PressReleaseCard } from "./bento/PressReleaseCard"
import { NewsletterCard } from "./bento/NewsletterCard"
import { YouTubeCard } from "./bento/YouTubeCard"
import { AnnouncementsCard } from "./bento/AnnouncementsCard"
import { JobspeakCard } from "./bento/JobSpeakCard"
import { StockData, PressReleases, NewsletterFormData, Announcement } from "@/types/bento-grid"

export function BentoGrid() {
    const stockData: StockData = {
        price: "8619.10",
        change: "+6",
        changePercent: "0.07%",
        marketOpenAt: "8620.05",
        dailyHigh: "8628.00",
        dailyLow: "8523.05"
    }

    const pressReleases: PressReleases = {
        investors: [
            {
                title: "Info Edge (India) Limited announces Q1 FY16 results",
                link: "#"
            },
            {
                title: "Info Edge (India) Limited announces Q4 FY15 results",
                link: "#"
            }
        ],
        media: [
            {
                title: "Info Edge (India) Limited announces Q3 FY21 results",
                link: "#"
            },
            {
                title: "Info Edge (India) Limited announces Q2 FY21 results",
                link: "#"
            }
        ]
    }

    const handleNewsletterSubmit = (data: NewsletterFormData) => {
        console.log('Newsletter submission:', data)
        // Handle newsletter submission
    }

    const announcements: Announcement[] = [
        {
            date: "December 20 2024",
            title: "IEIL SE Intimation Reg 30 Brainsight",
            subtitle: "Regulatory Update"
        },
        {
            date: "December 19 2024",
            title: "IEIL SE Intimation Reg 30 Sploot",
            subtitle: "Regulatory Update"
        },
        {
            date: "December 16 2024",
            title: "IEIL Schedule of Investor Conference Intimation",
            subtitle: "Investor Relations"
        }
    ]

    return (
        <section id="press" className="py-20 px-20 snap-start">
            <div id="stock" className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <PressReleaseCard data={pressReleases} />
                    <StockCard data={stockData} />
                    <NewsletterCard onSubmit={handleNewsletterSubmit} />
                    <YouTubeCard
                        videoId="sXtf85DaM58"
                        title="Dragging yourself to work everyday? No More! | TVC Exclusive Edit"
                    />
                    <AnnouncementsCard announcements={announcements} />
                    <JobspeakCard
                        title="Naukri Jobspeak"
                        subtitle="A Report on Hiring Activity in India"
                    />
                </div>
            </div>
        </section>
    )
}

