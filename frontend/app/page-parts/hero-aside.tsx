import { useTranslations } from "next-intl"
import { HeroAsideQuickLinks } from "./hero-aside-parts/hero-aside-quick-links"

/**
 * @brief Renders the aside quick links part of the Hero section.
 *
 * @returns JSX element representing the hero aside.
 */
export function HeroAside() {
  const t = useTranslations()

  return (
    <aside className="lg:col-span-4 glass-card flex flex-col justify-between">
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white uppercase tracking-wider">{t("aside-title")}</h3>
        <HeroAsideQuickLinks />
      </div>
      <div className="pt-8 border-t border-white/5 mt-8">
        <p className="text-sm text-site-muted italic leading-relaxed">
          {t("aside-note")}
        </p>
      </div>
    </aside>
  )
}
