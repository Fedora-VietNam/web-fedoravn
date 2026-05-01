"use client"

import { useLocale } from "next-intl"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { setLocale } from "actions/set-locale"

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
      className={`flex min-w-[40px] items-center justify-center rounded-lg p-2 text-xs font-bold transition-colors ${isPending ? "cursor-not-allowed opacity-50" : "text-site-muted hover:bg-site-bg-soft hover:text-site-text"} `}
      aria-label="Toggle language"
    >
      {locale === "en" ? "🇺🇸 EN" : "🇻🇳 VI"}
    </button>
  )
}
