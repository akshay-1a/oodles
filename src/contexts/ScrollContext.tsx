'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react'

interface ScrollContextType {
    isScrolled: boolean
    setIsScrolled: React.Dispatch<React.SetStateAction<boolean>>
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined)

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false)

    return (
        <ScrollContext.Provider value={{ isScrolled, setIsScrolled }}>
            {children}
        </ScrollContext.Provider>
    )
}

export const useScroll = () => {
    const context = useContext(ScrollContext)
    if (context === undefined) {
        throw new Error('useScroll must be used within a ScrollProvider')
    }
    return context
}

