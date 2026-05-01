"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react"
import { Menu, X, Search } from "lucide-react"
import { usePathname } from "next/navigation"
import { LanguageSwitcher } from "../button/language-switcher"
import { ThemeToggle } from "../button/theme-toggle"
import { ParticlesBackground } from "./particles-background"
import { GlobalSearch } from "./global-search"
import { useSession, signOut } from "next-auth/react"
import { User, LogOut, ChevronDown } from "lucide-react"

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

  const topNav = [
    { name: t("menu-home"), href: "/" },
    { name: t("menu-docs"), href: "/docs" },
    { name: t("menu-community"), href: "/forum" },
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
            <Link 
              href="/" 
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault();
                  window.location.reload();
                }
              }}
              className="flex items-center gap-2 group"
            >
              <span className="text-lg font-black tracking-widest font-sans uppercase bg-gradient-to-r from-site-primary to-blue-400 bg-clip-text text-transparent transition-all group-hover:from-blue-400 group-hover:to-site-primary">
                FEDORA.VN
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {topNav.map((item) => {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      if (item.href === pathname) {
                        e.preventDefault();
                        window.location.reload();
                      }
                    }}
                    className="text-[14px] font-bold text-site-muted hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <LanguageSwitcher />
            
            {status === "authenticated" ? (
              <div className="relative group hidden lg:flex items-center gap-2 bg-[#111a34] border border-[#3a528e] rounded-lg px-3 py-1.5 cursor-pointer hover:bg-[#1a264a] transition-colors">
                <div className="w-6 h-6 rounded-full bg-site-primary/20 flex items-center justify-center">
                  <User size={14} className="text-site-primary" />
                </div>
                <span className="text-xs font-bold text-white truncate max-w-[100px]">
                  {session.user?.name || session.user?.email}
                </span>
                <ChevronDown size={14} className="text-site-muted group-hover:rotate-180 transition-transform" />
                
                <div className="absolute right-0 top-full mt-2 w-48 bg-[#0b1020] border border-[#24345f] rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-1">
                  <button
                    onClick={() => signOut()}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-site-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <LogOut size={16} />
                    {t("auth-logout")}
                  </button>
                </div>
              </div>
            ) : (
              <div className="hidden lg:flex items-center gap-2">
                <Link 
                  href="/login" 
                  className="text-xs font-bold text-site-muted hover:text-white transition-colors px-3 py-1.5"
                >
                  {t("auth-login")}
                </Link>
                <Link 
                  href="/signup" 
                  className="btn-site-primary text-[10px] px-4 py-1.5 rounded-lg"
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
              className="md:hidden border-t border-[#24345f] bg-[#0b1020] overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-6">
                <GlobalSearch mobile />
                
                <nav className="flex flex-col gap-4">
                  {topNav.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-bold text-site-muted hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="border-t border-[#24345f] pt-4 flex flex-col gap-4">
                  {status === "authenticated" ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-white font-bold bg-[#111a34] p-3 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-site-primary/20 flex items-center justify-center">
                          <User size={16} className="text-site-primary" />
                        </div>
                        {session.user?.name || session.user?.email}
                      </div>
                      <button
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          signOut()
                        }}
                        className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-red-500/20 hover:bg-red-500/40 rounded-lg transition-colors"
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

      <ParticlesBackground />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-[66px] relative z-10">
          <div className="animate-in fade-in duration-500">
            {children}
          </div>
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
