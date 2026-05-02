"use client"

import { useTranslations } from "next-intl"
import { whyFedoraItems } from "@/storage/data"
import { WhyFedoraItem } from "./why-fedora-section-parts/why-fedora-item"
import { WhyFedoraTerminal } from "./why-fedora-section-parts/why-fedora-terminal"

/**
 * @brief Represents the data structure for a Why Fedora item.
 */
interface WhyFedoraData {
  titleKey: string
  descKey: string
}

/**
 * @brief Renders the Why Fedora section of the landing page.
 *
 * Highlights the main reasons to choose Fedora Linux.
 *
 * @returns A JSX element representing the Why Fedora section.
 */
export function WhyFedoraSection() {
  const t = useTranslations()
  const items = whyFedoraItems as WhyFedoraData[]

  return (
    <section className="container mx-auto px-4">
      <div className="glass-card relative overflow-hidden px-16 py-16 md:px-32">
        <div className="relative z-10 grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              {t("why-fedora-title")}
            </h2>
            <ul className="space-y-6">
              {items.map((item, idx) => (
                <WhyFedoraItem
                  key={idx}
                  title={t(item.titleKey as never)}
                  desc={t(item.descKey as never)}
                />
              ))}
            </ul>
          </div>
          <WhyFedoraTerminal />
        </div>
      </div>
    </section>
  )
}
