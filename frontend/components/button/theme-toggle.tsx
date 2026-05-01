"use client"
import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

function getInitialDarkTheme() {
  if (typeof window === "undefined") {
    return true
  }

  const savedTheme = localStorage.getItem("theme")
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  if (savedTheme === "light") {
    return false
  }

  if (savedTheme === "dark") {
    return true
  }

  return systemDark
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => getInitialDarkTheme())

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

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
      className="flex items-center justify-center rounded-lg p-2 text-site-muted transition-colors hover:bg-site-bg-soft hover:text-site-text"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
