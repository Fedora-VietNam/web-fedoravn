"use client"
import { useEffect, useRef } from "react"
import { Particle } from "./particles-parts/particle"

/**
 * @brief Renders an interactive animated particles background using HTML5 Canvas.
 * 
 * The particles respond to mouse movement and window resizing.
 * 
 * @returns A fixed canvas element covering the entire background.
 */
export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    const mouse = { x: -1000, y: -1000 }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener("mousemove", handleMouseMove)
    
    const handleResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      initParticles()
    }
    window.addEventListener("resize", handleResize)

    function initParticles() {
      particles = []
      const numParticles = Math.floor((w * h) / 6000)
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(w, h))
      }
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, w, h)
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(ctx, mouse, w, h)
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 120) {
            ctx.beginPath()
            const opacity = 0.6 - (distance / 200)
            ctx.strokeStyle = `rgba(100, 150, 255, ${opacity})`
            ctx.lineWidth = 1.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    initParticles()
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0" 
      style={{ opacity: 1 }}
    />
  )
}
