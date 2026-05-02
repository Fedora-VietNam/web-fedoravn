"use client"

import * as React from "react"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"

/**
 * @brief Renders the hero area for the contributor portal.
 *
 * @returns JSX element representing the portal hero.
 */
export function PortalHero() {
  const t = useTranslations()

  return (
    <section className="relative overflow-hidden rounded-3xl bg-brand-primary p-8 md:p-16 text-white min-h-[400px] flex items-center">
      <div className="relative z-10 max-w-3xl space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
        >
          {t("hub-hero-title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-blue-100 font-body max-w-2xl"
        >
          {t("hub-hero-desc")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <button className="bg-brand-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg">
            {t("hub-join-now")}
          </button>
          <button className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
            {t("community-card3-t")}
          </button>
        </motion.div>
      </div>

      {/* Background Visual */}
      <div className="absolute top-0 right-0 h-full w-full pointer-events-none opacity-40 mix-blend-overlay">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
    </section>
  )
}
