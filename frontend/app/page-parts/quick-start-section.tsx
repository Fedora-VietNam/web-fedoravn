"use client"

import { useTranslations } from "next-intl"
import { quickStartItems } from "@/storage/data"
import { QuickStartCard } from "./quick-start-section-parts/quick-start-card"

/**
 * @brief Renders the Quick Start section of the landing page.
 * 
 * Provides easy steps to download and install Fedora.
 * 
 * @returns A JSX element representing the Quick Start section.
 */
export function QuickStartSection() {
  const t = useTranslations()

  return (
    <section id="start" className="container mx-auto px-4 space-y-12">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-white">{t("start-title")}</h2>
        <p className="text-site-muted max-w-2xl font-body">
          {t("start-desc")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickStartItems.map((item, idx) => (
          <QuickStartCard
            key={idx}
            index={idx}
            title={t(item.titleKey as never)}
            desc={t(item.descKey as never)}
            icon={item.icon}
            tag={item.tag}
          />
        ))}
      </div>
    </section>
  )
}
