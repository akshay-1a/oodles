'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { StockData } from "@/types/bento-grid"

interface StockCardProps {
  data: StockData
}

export function StockCard({ data }: StockCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="lg:col-span-1"
    >
      <Card className="bg-emerald-500 text-white p-6 h-full">
        <h2 className="text-2xl font-bold mb-6">Infoedge Stock</h2>
        <div className="space-y-4">
          <div>
            <div className="text-5xl font-bold">{data.price}</div>
            <div className="text-emerald-100 mt-2">
              {data.change} ({data.changePercent} Change)
            </div>
          </div>
          <div className="space-y-2 pt-4 border-t border-emerald-400">
            <div className="flex justify-between">
              <span>Market opened at</span>
              <span className="font-semibold">{data.marketOpenAt}</span>
            </div>
            <div className="flex justify-between">
              <span>Daily High</span>
              <span className="font-semibold">{data.dailyHigh}</span>
            </div>
            <div className="flex justify-between">
              <span>Daily Low</span>
              <span className="font-semibold">{data.dailyLow}</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

