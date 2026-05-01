"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"

/**
 * @brief A provider component that enables theme support (Light/Dark mode) across the application.
 * 
 * Also includes a keyboard hotkey ('d') to toggle themes.
 * 
 * @param props.children - The application content that requires theme context
 * @param props.props - Additional props passed to the underlying next-themes provider
 * @returns A context provider for theme management.
 */
function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <ThemeHotkey />
      {children}
    </NextThemesProvider>
  )
}

/**
 * @brief Checks if the given event target is an interactive typing element.
 * 
 * @param target - The event target to check
 * @returns True if the target is an input, textarea, select, or contenteditable element.
 */
function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  return (
    target.isContentEditable ||
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT"
  )
}

/**
 * @brief A headless component that listens for global keyboard shortcuts.
 */
function ThemeHotkey() {
  const { resolvedTheme, setTheme } = useTheme()

  // Register 'd' key to toggle theme, ignoring it when typing in inputs
  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.repeat) {
        return
      }

      if (event.metaKey || event.ctrlKey || event.altKey) {
        return
      }

      if (event.key.toLowerCase() !== "d") {
        return
      }

      if (isTypingTarget(event.target)) {
        return
      }

      setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [resolvedTheme, setTheme])

  return null
}

export { ThemeProvider }
