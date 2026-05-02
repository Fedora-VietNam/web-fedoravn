"use client"
import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

/**
 * @brief A component that toggles the application's color theme (Light/Dark).
 * 
 * @returns A button that switches between sun and moon icons.
 */
export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && systemDark)
    
    const frame = requestAnimationFrame(() => {
      setIsDark(shouldBeDark)
    })
    
    if (shouldBeDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    
    return () => cancelAnimationFrame(frame)
  }, [])

  const toggle = () => {
    const newDark = !isDark
    setIsDark(newDark)
    if (newDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <button 
      onClick={toggle} 
      className="p-2 rounded-lg hover:bg-white/5 transition-colors text-site-muted hover:text-white flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
