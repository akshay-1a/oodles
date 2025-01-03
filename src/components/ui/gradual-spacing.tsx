"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  texts: string[];
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
  interval?: number;
}

export default function GradualSpacing({
  texts,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },
  className,
  interval = 5000,
}: GradualSpacingProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className="flex justify-center overflow-hidden px-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTextIndex}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            hidden: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1 },
            exit: { x: 100, opacity: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="flex space-x-1"
        >
          {texts[currentTextIndex].split("").map((char, i) => (
            <motion.span
              key={i}
              variants={framerProps}
              transition={{ duration, delay: i * delayMultiple }}
              className={cn("drop-shadow-sm", className)}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

