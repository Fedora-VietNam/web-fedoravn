"use client"

import { useState, useRef, useEffect, useTransition } from "react"
import { useTheme } from "next-themes"
import { useLocale } from "next-intl"
import { setLocale } from "actions/set-locale"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "motion/react"
import { Palette, Sun, Moon } from "lucide-react"
import { cn } from "lib/utils"
import { useAppSettings, ThemeColor } from "hooks/use-app-settings"

function Tooltip({
  content,
  children,
  position = "top",
}: {
  content: string
  children: React.ReactNode
  position?: "top" | "bottom" | "left" | "right"
}) {
  return (
    <div className="group relative flex items-center justify-center">
      {children}
      <div
        className={cn(
          "pointer-events-none absolute z-50 hidden rounded-md border border-border-subtle bg-surface-elevated px-2 py-1 text-xs whitespace-nowrap text-content-main opacity-0 transition-opacity group-hover:opacity-100 sm:block",
          position === "top" && "bottom-full mb-2",
          position === "bottom" && "top-full mt-2",
          position === "left" && "right-full mr-2",
          position === "right" && "left-full ml-2"
        )}
      >
        {content}
      </div>
    </div>
  )
}

export function SettingsDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const { theme, setTheme, resolvedTheme } = useTheme()
  const {
    themeColor,
    setThemeColor,
    bgAnimationEnabled,
    setBgAnimationEnabled,
    bgEffect,
    setBgEffect,
  } = useAppSettings()

  const locale = useLocale()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const themes: { id: ThemeColor; name: string; color: string }[] = [
    { id: "fedora", name: "Fedora", color: "bg-[#0f2a5a]" },
    { id: "dracula", name: "Dracula", color: "bg-[#ff79c6]" },
    { id: "gruvbox", name: "Gruvbox", color: "bg-[#fe8019]" },
    { id: "nord", name: "Nord", color: "bg-[#88c0d0]" },
  ]

  const languages = [
    { id: "en", name: "English" },
    { id: "vi", name: "Tiếng Việt" },
  ]

  const ditherEffects = [
    { id: "particles", name: "Particles" },
    { id: "bayer", name: "Bayer" },
    { id: "floyd", name: "Floyd" },
    { id: "dots", name: "Dots" },
  ] as const

  const handleSetLanguage = (lang: string) => {
    if (lang === locale || isPending) return
    startTransition(async () => {
      await setLocale(lang)
      router.refresh()
    })
  }

  return (
    <div className="tour-settings relative" ref={dropdownRef}>
      <Tooltip content="Appearance & Settings" position="bottom">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 rounded-lg p-2 text-content-main transition-colors hover:bg-surface-muted"
        >
          <Palette size={20} />
        </button>
      </Tooltip>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute right-0 z-50 mt-2 w-64 shrink-0 rounded-xl border border-border-subtle bg-surface-elevated/80 p-4 shadow-xl backdrop-blur-2xl"
          >
            <div className="space-y-4 text-left">
              <div>
                <label className="mb-2 block text-xs font-bold tracking-wider text-content-muted uppercase">
                  Theme Color
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        if (!document.startViewTransition) {
                          setThemeColor(t.id)
                        } else {
                          document.startViewTransition(() =>
                            setThemeColor(t.id)
                          )
                        }
                      }}
                      className={cn(
                        "flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-all",
                        themeColor === t.id
                          ? "border-brand-primary bg-brand-primary/10 font-semibold"
                          : "border-border-subtle hover:bg-surface-muted"
                      )}
                    >
                      <div className={`h-3 w-3 rounded-full ${t.color}`} />
                      <span className="truncate text-content-main">
                        {t.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold tracking-wider text-content-muted uppercase">
                  Appearance
                </label>
                <div className="flex rounded-lg border border-border-subtle bg-surface-muted p-1">
                  <button
                    onClick={() => {
                      if (!document.startViewTransition) {
                        setTheme("light")
                      } else {
                        document.startViewTransition(() => setTheme("light"))
                      }
                    }}
                    className={cn(
                      "flex flex-1 items-center justify-center gap-2 rounded-md py-1.5 text-sm font-medium transition-all",
                      resolvedTheme === "light"
                        ? "bg-surface-elevated text-content-main shadow-sm"
                        : "text-content-muted hover:text-content-main"
                    )}
                  >
                    <Sun size={14} /> Light
                  </button>
                  <button
                    onClick={() => {
                      if (!document.startViewTransition) {
                        setTheme("dark")
                      } else {
                        document.startViewTransition(() => setTheme("dark"))
                      }
                    }}
                    className={cn(
                      "flex flex-1 items-center justify-center gap-2 rounded-md py-1.5 text-sm font-medium transition-all",
                      resolvedTheme === "dark"
                        ? "bg-surface-elevated text-content-main shadow-sm"
                        : "text-content-muted hover:text-content-main"
                    )}
                  >
                    <Moon size={14} /> Dark
                  </button>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold tracking-wider text-content-muted uppercase">
                  Language
                </label>
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => handleSetLanguage(lang.id)}
                      disabled={isPending}
                      className={cn(
                        "flex-1 rounded-lg border py-1.5 text-xs font-medium transition-all",
                        locale === lang.id
                          ? "border-brand-primary bg-brand-primary/10 text-brand-primary"
                          : "border-border-subtle text-content-main hover:bg-surface-muted",
                        isPending && "cursor-not-allowed opacity-50"
                      )}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="m-0 block text-xs font-bold tracking-wider text-content-muted uppercase">
                    Dynamic Background
                  </label>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      checked={bgAnimationEnabled}
                      onChange={(e) => setBgAnimationEnabled(e.target.checked)}
                    />
                    <div className="peer h-5 w-9 rounded-full bg-surface-muted peer-checked:bg-brand-primary peer-focus:outline-none after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                  </label>
                </div>
                {bgAnimationEnabled && (
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {ditherEffects.map((effect) => (
                      <button
                        key={effect.id}
                        onClick={() => setBgEffect(effect.id)}
                        className={cn(
                          "flex items-center justify-center rounded-lg border py-1.5 text-xs font-medium transition-all",
                          bgEffect === effect.id
                            ? "border-brand-primary bg-brand-primary/10 text-brand-primary"
                            : "border-border-subtle text-content-main hover:bg-surface-muted"
                        )}
                      >
                        {effect.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
