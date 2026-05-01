import { useTranslations } from "next-intl"

/**
 * @brief Renders the statistics part of the Hero section.
 *
 * @returns JSX element representing the hero stats.
 */
export function HeroStats() {
  const t = useTranslations()

  return (
    <div className="stats grid grid-cols-2 md:grid-cols-3 gap-4 pt-8">
      <StatItem label="100% Open" value={t("hero-stat1")} />
      <StatItem label="Desktop-first" value={t("hero-stat2")} />
      <StatItem
        label={
          <>
            <span className="dot inline-block w-2 h-2 rounded-full bg-site-ok mr-2 shadow-[0_0_12px_#39c77a]"></span>
            {t("hero-stat3-label")}
          </>
        }
        value={t("hero-stat3")}
      />
    </div>
  )
}

/**
 * @brief Renders a single statistic item.
 *
 * @param label The label or title of the stat.
 * @param value The description or value of the stat.
 * @returns A JSX element representing a stat item.
 */
function StatItem({ label, value }: { label: React.ReactNode; value: string }) {
  return (
    <div className="stat">
      <b>{label}</b>
      <span>{value}</span>
    </div>
  )
}
