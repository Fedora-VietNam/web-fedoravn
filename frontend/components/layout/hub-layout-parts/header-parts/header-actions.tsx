"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { User, LogOut, ChevronDown } from "lucide-react"
import { useSession, signOut } from "next-auth/react"
import { ThemeToggle } from "../../theme-toggle"
import { LanguageSwitcher } from "../../language-switcher"
import { GlobalSearch } from "../../global-search"

export function HeaderActions() {
  const t = useTranslations()
  const { data: session, status } = useSession()

  return (
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
  )
}
