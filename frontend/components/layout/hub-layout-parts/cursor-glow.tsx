"use client"

import React, { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

/**
 * @brief Renders a radial gradient glow that follows the mouse cursor.
 * 
 * @returns A fixed motion div with a dynamic background gradient.
 */
export function CursorGlow() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 50, stiffness: 300 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  // Track mouse movement globally to update spring values
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      style={{
        background: `radial-gradient(circle 800px at ${springX}px ${springY}px, rgba(59, 130, 246, 0.2), transparent 80%)`,
      }}
    />
  )
}
