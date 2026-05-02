"use client"

import { useTranslations } from "next-intl"
import { featuredGuidesData } from "@/storage/data"
import { GuideCard } from "./featured-guides-section-parts/guide-card"

/**
 * @brief Renders the Featured Guides section of the landing page.
 * 
 * Displays categorized cards for various technical guides.
 * 
 * @returns A JSX element representing the Featured Guides section.
 */
export function FeaturedGuidesSection() {
  const t = useTranslations()

  return (
    <section id="guides" className="container mx-auto px-4 space-y-12">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-white">{t("guides-title")}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredGuidesData.map((guide, idx) => (
          <GuideCard
            key={idx}
            index={idx}
            icon={guide.icon}
            titleKey={guide.titleKey}
            descKey={guide.descKey}
            tag={guide.tag}
          />
        ))}
      </div>
    </section>
  )
}
