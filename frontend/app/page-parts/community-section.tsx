"use client"

import { useTranslations } from "next-intl"
import { communityCardItems } from "@/storage/data"
import { CommunityCard } from "./community-section-parts/community-card"

/**
 * @brief Renders the Community section of the landing page.
 * 
 * Displays recent forum topics and community interactions.
 * 
 * @returns A JSX element representing the Community section.
 */
export function CommunitySection() {
  const t = useTranslations()

  return (
    <section id="community" className="container mx-auto px-4 text-center space-y-12 py-12">
      <CommunityHeader />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {communityCardItems.map((item, idx) => (
          <CommunityCard
            key={idx}
            title={t(item.titleKey as never)}
            desc={t(item.descKey as never)}
            icon={item.icon}
            href={item.href}
          />
        ))}
      </div>

      <CommunityLinks />
    </section>
  )
}

/**
 * @brief Renders the header part of the Community section.
 * 
 * @returns A JSX element representing the community header.
 */
function CommunityHeader() {
  const t = useTranslations()

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-4xl font-bold text-white">{t("community-title")}</h2>
      <p className="text-site-muted text-lg font-body">
        {t("community-desc")}
      </p>
    </div>
  )
}

/**
 * @brief Renders the community link buttons.
 * 
 * @returns A JSX element representing the community links.
 */
function CommunityLinks() {
  const t = useTranslations()

  return (
    <div id="community-links" className="flex flex-wrap justify-center gap-4 pt-8">
      <button className="btn-site-primary px-12 py-4 text-lg">{t("community-tg")}</button>
      <button className="btn-site-ghost px-12 py-4 text-lg">{t("community-dc")}</button>
    </div>
  )
}
