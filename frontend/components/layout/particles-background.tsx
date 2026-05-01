"use client"
import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)

    const mouse = { x: -1000, y: -1000 }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener("mousemove", handleMouseMove)

    const handleMouseOut = () => {
      mouse.x = -1000
      mouse.y = -1000
    }
    window.addEventListener("mouseout", handleMouseOut)

    const handleResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      initParticles()
    }
    window.addEventListener("resize", handleResize)

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number | undefined
      baseRadius: number
      radius: number
      color: string

      constructor() {
        this.x = Math.random() * w
        this.y = Math.random() * h
        this.vx = (Math.random() - 0.5) * 1.5
        this.vy = (Math.random() - 0.5) * 1.5
        this.baseRadius = Math.random() * 2 + 1
        this.radius = this.baseRadius
        // Cyber-ish blue to purple hues
        const isDark =
          resolvedTheme === "dark" ||
          document.documentElement.classList.contains("dark")
        const lightness = isDark ? 60 : 40
        const alpha = isDark
          ? Math.random() * 0.5 + 0.3
          : Math.random() * 0.6 + 0.4
        this.color = `hsla(${210 + Math.random() * 60}, ${isDark ? 80 : 90}%, ${lightness}%, ${alpha})`
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        // Subtle glow on particles
        ctx.shadowBlur = 10
        ctx.shadowColor = this.color
        ctx.fill()
        ctx.shadowBlur = 0 // Reset
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Bounce off edges
        if (this.x < 0 || this.x > w) this.vx *= -1
        if (this.y < 0 || this.y > h) this.vy *= -1

        // Mouse interaction
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDist = 180

        if (distance < maxDist) {
          // Push away logic
          const force = (maxDist - distance) / maxDist
          const angle = Math.atan2(dy, dx)
          this.x -= Math.cos(angle) * force * 5
          this.y -= Math.sin(angle) * force * 5
          // Also grow slightly
          this.radius = this.baseRadius + force * 2
        } else {
          if (this.radius > this.baseRadius) {
            this.radius -= 0.1
          }
        }
      }
    }

    function initParticles() {
      particles = []
      const numParticles = Math.min((w * h) / 4000, 500)
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      if (!ctx) return

      const isDark =
        resolvedTheme === "dark" ||
        document.documentElement.classList.contains("dark")

      // Slight trailing effect
      ctx.fillStyle = isDark
        ? "rgba(2, 6, 23, 0.4)"
        : "rgba(248, 249, 250, 0.4)"
      ctx.fillRect(0, 0, w, h)

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          const isDark =
            resolvedTheme === "dark" ||
            document.documentElement.classList.contains("dark")

          if (distance < 120) {
            ctx.beginPath()
            ctx.strokeStyle = isDark
              ? `rgba(94, 114, 228, ${0.4 * (1 - distance / 120)})`
              : `rgba(42, 95, 164, ${0.6 * (1 - distance / 120)})`
            ctx.lineWidth = 1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      particles.forEach((p) => {
        p.update()
        p.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    initParticles()
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseout", handleMouseOut)
      window.removeEventListener("resize", handleResize)
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [resolvedTheme])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ opacity: 1 }}
    />
  )
}
