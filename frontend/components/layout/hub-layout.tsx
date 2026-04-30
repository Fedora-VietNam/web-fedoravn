"use client"
import { useTranslations } from "next-intl"

import { ReactNode, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu,
  X,
  Search,
  MessageSquare,
  Calendar,
  Award,
  FileText,
  Globe as HubIcon,
  ChevronRight,
  Share2,
  Rss,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "motion/react"
import { LanguageSwitcher } from "@/components/button/language-switcher"

interface HubLayoutProps {
  children: ReactNode
}

export default function HubLayout({ children }: HubLayoutProps) {
  const t = useTranslations()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: t("hub-nav-discussions"), href: "/forum", icon: MessageSquare },
    { name: t("hub-nav-calendar"), href: "/events", icon: Calendar },
    { name: t("hub-nav-badges"), href: "/badges", icon: Award },
    { name: t("hub-nav-docs"), href: "/docs", icon: FileText },
  ]

  const topNav = [
    { name: t("menu-home"), href: "/" },
    { name: t("hub-nav-discussions"), href: "/forum" },
    { name: t("hub-nav-calendar"), href: "/events" },
    { name: t("portal"), href: "/portal" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] font-body">
      {/* Top Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 md:hidden text-brand-primary"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link href="/" className="flex items-center gap-2 group">
              <HubIcon
                className="text-brand-secondary group-hover:scale-110 transition-transform"
                size={24}
              />
              <span className="text-xl font-bold tracking-tight text-blue-900 font-sans">
                {t("hub-title")}
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {topNav.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors duration-200 pb-1 border-b-2",
                      isActive
                        ? "text-blue-900 border-blue-900 font-bold"
                        : "text-slate-600 border-transparent hover:text-blue-700 font-medium"
                    )}
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
              <Search className="absolute left-3 text-slate-400" size={16} />
              <input
                type="text"
                placeholder={t("hub-search-placeholder")}
                className="bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-brand-secondary outline-none transition-all w-64"
              />
            </div>
            <button className="bg-brand-primary text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-all">
              {t("hub-join-now")}
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 max-w-7xl mx-auto w-full relative">
        {/* Sidebar Navigation */}
        <aside className="hidden md:flex flex-col w-64 h-[calc(100vh-16px)] p-6 gap-2 bg-slate-50 border-r border-slate-200 sticky top-16 overflow-y-auto">
          <div className="mb-6 px-2">
            <h3 className="text-lg font-black text-brand-primary uppercase tracking-tighter font-sans">
              Navigation
            </h3>
            <p className="text-xs text-slate-500 font-medium">Community Hub</p>
          </div>
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-md transition-all text-sm font-sans",
                    isActive
                      ? "bg-blue-50 text-blue-900 font-semibold"
                      : "text-slate-600 hover:bg-white hover:shadow-sm"
                  )}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          <div className="mt-auto p-4 bg-brand-primary rounded-xl text-white">
            <p className="text-xs font-semibold opacity-80 mb-2">
              Have a feature idea?
            </p>
            <button className="w-full bg-white text-brand-primary px-4 py-2 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors">
              Submit Proposal
            </button>
          </div>
        </aside>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="fixed inset-0 z-40 md:hidden bg-white pt-20 px-6"
            >
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-4 text-lg font-semibold border-b border-slate-100 pb-4",
                        isActive ? "text-blue-900" : "text-brand-primary"
                      )}
                    >
                      <item.icon size={24} />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
              </nav>
              <div className="mt-12 text-center">
                <button className="w-full bg-brand-secondary text-white py-4 rounded-xl font-bold">
                  Join Fedora Community
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content Area */}
        <main className="flex-1 w-full p-4 sm:p-6 lg:p-8 overflow-x-hidden min-h-screen">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto py-12 px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-sans font-semibold">
              © 2024 Fedora Project. The Fedora Project is maintained and driven
              by the community.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            {["Code of Conduct", "Privacy Policy", "Legal", "Contact"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs uppercase tracking-wider text-slate-500 hover:text-brand-secondary transition-colors font-sans"
                >
                  {link}
                </a>
              )
            )}
          </nav>
          <div className="flex gap-4">
            <Share2
              size={20}
              className="text-slate-400 hover:text-brand-primary cursor-pointer transition-colors"
            />
            <Rss
              size={20}
              className="text-slate-400 hover:text-brand-primary cursor-pointer transition-colors"
            />
          </div>
        </div>
      </footer>
    </div>
  )
}
