"use client"

import { useTranslations } from "next-intl"
import { Heart } from "lucide-react"
import { ContributorCard } from "./contributors-section-parts/contributor-card"
import { contributors } from "@/storage/data"

/**
 * @brief Renders the Contributors section of the landing page.
 * 
 * Showcases top contributors and how to get involved.
 * 
 * @returns A JSX element representing the Contributors section.
 */
export function ContributorsSection() {
  return (
    <section className="container mx-auto px-4 space-y-12 py-12 border-t border-white/5">
      <ContributorsHeader />

      <div className="flex flex-wrap justify-center gap-8">
        {contributors.map((person, idx) => (
          <ContributorCard
            key={idx}
            index={idx}
            name={person.name}
            role={person.role}
            avatar={person.avatar}
          />
        ))}
      </div>
      
      <ContributorsFooter />
    </section>
  )
}

/**
 * @brief Renders the header part of the Contributors section.
 * 
 * @returns A JSX element representing the contributors header.
 */
function ContributorsHeader() {
  const t = useTranslations()

  return (
    <div className="text-center space-y-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-white">{t("contributors-title")}</h2>
      <p className="text-site-muted font-body">
        {t("contributors-desc")}
      </p>
    </div>
  )
}

/**
 * @brief Renders the footer part of the Contributors section.
 * 
 * @returns A JSX element representing the contributors footer.
 */
function ContributorsFooter() {
  const t = useTranslations()

  return (
    <div className="text-center pt-8">
      <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-2 rounded-full">
        <Heart size={14} className="text-site-primary fill-site-primary" />
        <span className="text-site-muted text-xs font-bold">{t("contributors-others")}</span>
      </div>
    </div>
  )
}
