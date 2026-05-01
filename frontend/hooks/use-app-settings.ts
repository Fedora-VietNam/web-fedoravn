"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import { useEffect } from "react"

export type ThemeColor = "fedora" | "dracula" | "gruvbox" | "nord"
export type DitherMode = "bayer" | "floyd" | "dots" | "particles"

interface AppSettingsState {
  themeColor: ThemeColor
  setThemeColor: (t: ThemeColor) => void
  bgAnimationEnabled: boolean
  setBgAnimationEnabled: (e: boolean) => void
  bgEffect: DitherMode
  setBgEffect: (m: DitherMode) => void
}

export const useAppSettings = create<AppSettingsState>()(
  persist(
    (set) => ({
      themeColor: "fedora",
      setThemeColor: (t) => set({ themeColor: t }),
      bgAnimationEnabled: true,
      setBgAnimationEnabled: (e) => set({ bgAnimationEnabled: e }),
      bgEffect: "particles",
      setBgEffect: (m) => set({ bgEffect: m }),
    }),
    {
      name: "app-settings",
    }
  )
)

export function AppSettingsProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { themeColor } = useAppSettings()

  useEffect(() => {
    document.documentElement.dataset.theme = themeColor
  }, [themeColor])

  return children
}
