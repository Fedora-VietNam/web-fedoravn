"use client"

import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"

export function ForumFilters() {
  const t = useTranslations()

  const categories = [
    t("forum-cat-all"),
    t("forum-cat-workstation"),
    t("forum-cat-server"),
    t("forum-cat-kde"),
    t("forum-cat-packaging"),
    t("forum-cat-infra"),
  ]

  return (
    <div className="sticky top-[66px] bg-site-bg/80 backdrop-blur-md z-10 py-4 -mx-4 px-4 border-b border-white/5">
      <div className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth">
        {categories.map((cat, idx) => (
          <button
            key={cat}
            className={cn(
              "px-6 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border",
              idx === 0
                ? "bg-site-primary text-white border-site-primary shadow-md shadow-site-primary/20"
                : "bg-white/5 text-site-muted border-white/10 hover:border-site-primary hover:text-site-primary"
            )}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}
