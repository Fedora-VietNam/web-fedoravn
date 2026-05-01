"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react"
import { Menu, X, Search } from "lucide-react"
import { usePathname } from "next/navigation"
import { SettingsDropdown } from "@/components/ui/settings-dropdown"
import { ParticlesBackground } from "./particles-background"
import { GlobalSearch } from "./global-search"
import { useSession, signOut } from "next-auth/react"
import { User, LogOut, ChevronDown } from "lucide-react"
import { useAppSettings } from "@/hooks/use-app-settings"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
// Use DitheredWaves on client side only to avoid hydration issues, or dynamic import
import dynamic from "next/dynamic"

const DitheredWaves = dynamic(
  () => import("ditherwave").then((mod) => mod.DitheredWaves),
  { ssr: false }
)

interface HubLayoutProps {
  children: React.ReactNode
}

function CursorGlow() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 50, stiffness: 300 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

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

export default function HubLayout({ children }: HubLayoutProps) {
  const t = useTranslations()
  const { data: session, status } = useSession()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { themeColor, bgAnimationEnabled, bgEffect } = useAppSettings()
  const { resolvedTheme } = useTheme()

  const topNav = [
    { name: t("menu-home"), href: "/" },
    { name: t("menu-docs"), href: "/docs" },
    { name: t("menu-community"), href: "/forum" },
  ]

  const getDitherColors = () => {
    let baseColor = resolvedTheme === "dark" ? "#020617" : "#f8f9fa"
    let waveColor = "#2a5fa4" // default

    if (resolvedTheme === "light") {
      if (themeColor === "fedora") waveColor = "#1d4ed8" // More intense blue
      if (themeColor === "dracula") waveColor = "#9333ea" // More intense purple
      if (themeColor === "gruvbox") waveColor = "#c2410c" // More intense orange
      if (themeColor === "nord") waveColor = "#1e40af" // More intense dark blue
    } else {
      if (themeColor === "fedora") waveColor = "#3b82f6"
      if (themeColor === "dracula") waveColor = "#bd93f9"
      if (themeColor === "gruvbox") waveColor = "#fabd2f"
      if (themeColor === "nord") waveColor = "#81a1c1"
    }

    return { baseColor, waveColor }
  }

  const { baseColor, waveColor } = getDitherColors()

  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col font-body text-site-text selection:bg-site-primary selection:text-white",
        !bgAnimationEnabled
          ? "bg-surface-base"
          : "bg-transparent transition-colors duration-300"
      )}
    >
      {bgAnimationEnabled && (
        <div className="pointer-events-none fixed inset-0 z-[-1] h-full w-full">
          {bgEffect === "particles" ? (
            <ParticlesBackground />
          ) : (
            <DitheredWaves
              mode={bgEffect as any}
              baseColor={baseColor}
              waveColor={waveColor}
              waveSpeed={0.03}
              waveFrequency={2}
              waveAmplitude={0.5}
              colorNum={8}
              className="h-full w-full opacity-100 dark:opacity-60"
              pixelSize={2}
            />
          )}
          <div className="absolute inset-0 bg-surface-base/10 backdrop-blur-sm dark:bg-surface-base/60" />
        </div>
      )}

      {/* Top Navigation */}
      <header className="nav fixed top-0 z-50 w-full border-b border-border-subtle bg-surface-base/90 backdrop-blur-md">
        <div className="mx-auto flex h-[66px] max-w-7xl items-center justify-between gap-5 px-6">
          <div className="flex items-center gap-8">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-site-text md:hidden"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault()
                  window.location.reload()
                }
              }}
              className="group flex items-center gap-2"
            >
              <span className="bg-gradient-to-r from-site-primary to-blue-400 bg-clip-text font-sans text-lg font-black tracking-widest text-transparent uppercase transition-all group-hover:from-blue-400 group-hover:to-site-primary">
                FEDORA.VN
              </span>
            </Link>
            <nav className="hidden items-center gap-6 md:flex">
              {topNav.map((item) => {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      if (item.href === pathname) {
                        e.preventDefault()
                        window.location.reload()
                      }
                    }}
                    className="text-[14px] font-bold text-content-muted transition-colors duration-200 hover:text-content-main"
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <SettingsDropdown />

            {status === "authenticated" ? (
              <div className="group relative hidden cursor-pointer items-center gap-2 rounded-lg border border-border-subtle bg-surface-elevated px-3 py-1.5 transition-colors hover:bg-surface-muted lg:flex">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-site-primary/20">
                  <User size={14} className="text-site-primary" />
                </div>
                <span className="max-w-[100px] truncate text-xs font-bold text-content-main">
                  {session.user?.name || session.user?.email}
                </span>
                <ChevronDown
                  size={14}
                  className="text-content-muted transition-transform group-hover:rotate-180"
                />

                <div className="invisible absolute top-full right-0 z-50 mt-2 w-48 rounded-xl border border-border-subtle bg-surface-elevated p-1 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:opacity-100">
                  <button
                    onClick={() => signOut()}
                    className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-content-muted transition-colors hover:bg-surface-muted hover:text-content-main"
                  >
                    <LogOut size={16} />
                    {t("auth-logout")}
                  </button>
                </div>
              </div>
            ) : (
              <div className="hidden items-center gap-2 lg:flex">
                <Link
                  href="/login"
                  className="px-3 py-1.5 text-xs font-bold text-content-muted transition-colors hover:text-content-main"
                >
                  {t("auth-login")}
                </Link>
                <Link
                  href="/signup"
                  className="btn-site-primary rounded-lg px-4 py-1.5 text-[10px]"
                >
                  {t("auth-signup")}
                </Link>
              </div>
            )}

            <GlobalSearch />
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-border-subtle bg-surface-base md:hidden"
            >
              <div className="flex flex-col gap-6 px-6 py-4">
                <GlobalSearch mobile />

                <nav className="flex flex-col gap-4">
                  {topNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-bold text-content-muted transition-colors hover:text-content-main"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="flex flex-col gap-4 border-t border-border-subtle pt-4">
                  {status === "authenticated" ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 rounded-lg bg-surface-elevated p-3 font-bold text-content-main">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-site-primary/20">
                          <User size={16} className="text-site-primary" />
                        </div>
                        {session.user?.name || session.user?.email}
                      </div>
                      <button
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          signOut()
                        }}
                        className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-500/10 py-3 text-sm font-bold text-red-500 transition-colors hover:bg-red-500/20"
                      >
                        <LogOut size={16} />
                        {t("auth-logout")}
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        href="/login"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="btn-site-ghost text-center"
                      >
                        {t("auth-login")}
                      </Link>
                      <Link
                        href="/signup"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="btn-site-primary text-center"
                      >
                        {t("auth-signup")}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 w-full flex-1 pt-[66px]">
        <div className="animate-in duration-500 fade-in">{children}</div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border-subtle bg-surface-base/80 py-12 text-[13px] text-content-muted backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-content-main">Fedora.vn</h4>
              <p className="font-body leading-relaxed">{t("footer-desc")}</p>
              <div className="flex gap-4 pt-2">
                <Link
                  href="/contact"
                  className="transition-colors hover:text-content-main"
                >
                  {t("footer-contact")}
                </Link>
                <Link
                  href="/about"
                  className="transition-colors hover:text-content-main"
                >
                  {t("footer-about")}
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold text-content-main">
                {t("footer-resources")}
              </h4>
              <ul className="space-y-2 font-body">
                <li>
                  <Link
                    href="#guides"
                    className="transition-colors hover:text-content-main"
                  >
                    {t("menu-guides")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://getfedora.org"
                    className="transition-colors hover:text-content-main"
                  >
                    {t("footer-download")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="transition-colors hover:text-content-main"
                  >
                    {t("footer-blog")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#docs"
                    className="transition-colors hover:text-content-main"
                  >
                    {t("menu-docs")}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold text-content-main">Legal</h4>
              <ul className="space-y-2 font-body">
                <li>
                  <Link
                    href="/disclaimer"
                    className="transition-colors hover:text-content-main"
                  >
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="transition-colors hover:text-content-main"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="transition-colors hover:text-content-main"
                  >
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6 border-t border-border-subtle pt-8">
            <p className="leading-relaxed opacity-70">
              <strong className="text-content-main">Disclaimer:</strong>{" "}
              {t("legal-disclaimer")}
            </p>
            <p className="leading-relaxed opacity-70">
              <strong className="text-content-main">Trademark:</strong>{" "}
              {t("legal-trademark")}
            </p>
            <p className="leading-relaxed opacity-70">
              <strong className="text-content-main">Privacy:</strong>{" "}
              {t("legal-privacy")}
            </p>
            <div className="pt-4 italic opacity-50">
              © 2026 Fedora.vn — Community-driven, open, practical.
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-surface-base/95 px-6 pt-20 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {topNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="border-b border-border-subtle pb-4 text-2xl font-bold text-content-main"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
