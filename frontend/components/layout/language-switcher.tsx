"use client"

import { useLocale } from "next-intl"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { setLocale } from "actions/set-locale"

/**
 * @brief A component that allows users to switch between available locales (EN/VI).
 * 
 * @returns A button that toggles the current locale.
 */
export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "vi" : "en"
    startTransition(async () => {
      await setLocale(nextLocale)
      router.refresh()
    })
  }

  return (
    <button 
      onClick={toggleLocale} 
      disabled={isPending}
      className={`p-2 rounded-lg transition-colors text-xs font-bold min-w-[40px] flex items-center justify-center
        ${isPending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/5 text-site-muted hover:text-white'}
      `}
      aria-label="Toggle language"
    >
      {locale === "en" ? "🇺🇸 EN" : "🇻🇳 VI"}
    </button>
  )
}
