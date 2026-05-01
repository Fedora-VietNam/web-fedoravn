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
    <section className="container mx-auto glass-card py-16 px-8 md:px-16 overflow-hidden relative">
      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{t("why-fedora-title")}</h2>
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
    </section>
  )
}
