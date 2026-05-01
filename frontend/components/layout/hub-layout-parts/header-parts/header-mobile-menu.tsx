"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "motion/react"
import { User, LogOut } from "lucide-react"
import { useSession, signOut } from "next-auth/react"
import { GlobalSearch } from "../../global-search"

interface HeaderMobileMenuProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
}

export function HeaderMobileMenu({ isMobileMenuOpen, setIsMobileMenuOpen }: HeaderMobileMenuProps) {
  const t = useTranslations()
  const { data: session, status } = useSession()

  const topNav = [
    { name: t("menu-home"), href: "/" },
    { name: t("menu-docs"), href: "/docs" },
    { name: t("menu-community"), href: "/forum" },
  ]

  return (
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
  )
}
