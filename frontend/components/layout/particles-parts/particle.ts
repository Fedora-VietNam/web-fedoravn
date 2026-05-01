/**
 * @brief Represents a single particle in the background animation.
 */
export class Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  w: number
  h: number

  constructor(w: number, h: number) {
    this.w = w
    this.h = h
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.vx = (Math.random() - 0.5) * 0.5
    this.vy = (Math.random() - 0.5) * 0.5
    this.size = Math.random() * 2 + 0.5
  }

  /**
   * @brief Draws the particle on the canvas.
   */
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
    ctx.fill()
  }

  /**
   * @brief Updates particle position and handles interactions.
   */
  update(ctx: CanvasRenderingContext2D, mouse: { x: number, y: number }, w: number, h: number) {
    this.x += this.vx
    this.y += this.vy

    // Bounce off walls
    if (this.x < 0 || this.x > w) this.vx = -this.vx
    if (this.y < 0 || this.y > h) this.vy = -this.vy

    // Mouse interaction (repulsion)
    const dx = mouse.x - this.x
    const dy = mouse.y - this.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    if (distance < 250) {
      const force = (250 - distance) / 250
      this.x -= (dx / distance) * force * 8
      this.y -= (dy / distance) * force * 8
    }

    this.draw(ctx)
  }
}
