"use client"

import { useLocale } from "next-intl"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { setLocale } from "actions/set-locale"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  function changeLocale(nextLocale: "en" | "vi") {
    if (nextLocale === locale) return

    startTransition(async () => {
      await setLocale(nextLocale)
      router.refresh()
    })
  }

  return (
    <div className="inline-flex overflow-hidden rounded-md border">
      <Button
        type="button"
        variant="ghost"
        onClick={() => changeLocale("en")}
        disabled={isPending}
        className={cn(
          "h-9 rounded-none px-4 text-base",
          "border-r",
          locale === "en"
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "hover:bg-muted"
        )}
      >
        🇺🇸 EN
      </Button>

      <Button
        type="button"
        variant="ghost"
        onClick={() => changeLocale("vi")}
        disabled={isPending}
        className={cn(
          "h-9 rounded-none px-4 text-base",
          locale === "vi"
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "hover:bg-muted"
        )}
      >
        🇻🇳 VI
      </Button>
    </div>
  )
}
