import { useRef, useState, MouseEvent, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

interface SpotlightCardProps {
    children: React.ReactNode
    className?: string
    spotlightColor?: string
}

export default function SpotlightCard({
    children,
    className = "",
    spotlightColor
}: SpotlightCardProps) {
    const divRef = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = useState(0)
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    // Determine color based on theme if not explicitly provided
    const color = spotlightColor || (mounted && theme === 'light'
        ? "rgba(0, 122, 255, 0.15)" // Stronger Blue for Light Mode
        : "rgba(59, 130, 246, 0.25)" // Default for Dark Mode
    )

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return

        const rect = divRef.current.getBoundingClientRect()
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    const handleMouseEnter = () => setOpacity(1)
    const handleMouseLeave = () => setOpacity(0)

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden ${className}`}
        >
            {/* Spotlight Overlay */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${color}, transparent 40%)`
                }}
            />
            {/* Content */}
            <div className="relative">
                {children}
            </div>
        </div>
    )
}
