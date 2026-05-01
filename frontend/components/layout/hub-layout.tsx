"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react"
import { Menu, X, Search } from "lucide-react"
import { usePathname } from "next/navigation"
import { LanguageSwitcher } from "@/components/button/language-switcher"

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const topNav = [
    { name: t("menu-home"), href: "/" },
    { name: t("menu-start"), href: "#start" },
    { name: t("menu-guides"), href: "#guides" },
    { name: t("menu-docs"), href: "#docs" },
    { name: t("menu-community"), href: "#community" },
  ]

  return (
    <div className="min-h-screen flex flex-col text-site-text font-body selection:bg-site-primary selection:text-white relative bg-site-bg">
      <CursorGlow />

      {/* Top Navigation */}
      <header className="nav fixed top-0 w-full z-50 bg-[#0b1020dd] backdrop-blur-md border-b border-[#24345f]">
        <div className="max-w-7xl mx-auto px-6 h-[66px] flex items-center justify-between gap-5">
          <div className="flex items-center gap-8">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 md:hidden text-site-text"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-lg font-black tracking-widest text-white font-sans uppercase">
                FEDORA.VN
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {topNav.map((item) => {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[14px] font-bold text-site-muted hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <div className="hidden lg:flex relative items-center">
              <Search className="absolute left-3 text-site-muted" size={16} />
              <input
                type="text"
                placeholder={t("hub-search-placeholder")}
                className="bg-[#111a34] border border-[#3a528e] rounded-lg pl-10 pr-4 py-1.5 text-xs text-white focus:ring-1 focus:ring-site-primary outline-none transition-all w-48"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-[66px] relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#23335f] text-site-muted text-[13px] py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <h4 className="text-white font-bold text-lg">Fedora.vn</h4>
              <p className="font-body leading-relaxed">
                {t("footer-desc")}
              </p>
              <div className="flex gap-4 pt-2">
                <Link href="/contact" className="hover:text-white transition-colors">{t("footer-contact")}</Link>
                <Link href="/about" className="hover:text-white transition-colors">{t("footer-about")}</Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-bold text-lg">{t("footer-resources")}</h4>
              <ul className="space-y-2 font-body">
                <li><Link href="#guides" className="hover:text-white transition-colors">{t("menu-guides")}</Link></li>
                <li><Link href="https://getfedora.org" className="hover:text-white transition-colors">{t("footer-download")}</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">{t("footer-blog")}</Link></li>
                <li><Link href="#docs" className="hover:text-white transition-colors">{t("menu-docs")}</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-lg">Legal</h4>
              <ul className="space-y-2 font-body">
                <li><Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
              </ul>
            </div>
          </div>

          <div className="space-y-6 pt-8 border-t border-white/5">
            <p className="leading-relaxed opacity-70">
              <strong className="text-white">Disclaimer:</strong> {t("legal-disclaimer")}
            </p>
            <p className="leading-relaxed opacity-70">
              <strong className="text-white">Trademark:</strong> {t("legal-trademark")}
            </p>
            <p className="leading-relaxed opacity-70">
              <strong className="text-white">Privacy:</strong> {t("legal-privacy")}
            </p>
            <div className="pt-4 opacity-50 italic">
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
            className="fixed inset-0 z-40 md:hidden bg-site-bg/95 backdrop-blur-xl pt-20 px-6"
          >
            <nav className="flex flex-col gap-6">
              {topNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white border-b border-white/10 pb-4"
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
