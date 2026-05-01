"use client"

import { Download, BookOpen } from "lucide-react"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { HeroStats } from "./hero-stats"
import { HeroAside } from "./hero-aside"

/**
 * @brief Renders the Hero section of the landing page.
 * 
 * Provides an introduction, primary call-to-action buttons, and quick stats.
 * 
 * @returns A JSX element representing the Hero section.
 */
export function HeroSection() {
  const t = useTranslations()

  return (
    <section className="container mx-auto px-4 hero grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      <div className="lg:col-span-8 glass-card flex flex-col justify-center space-y-8 py-16">
        <HeroContent />
        <HeroActions />
        <HeroStats />
      </div>

      <HeroAside />
    </section>
  )
}

function HeroContent() {
  const t = useTranslations()
  return (
    <>
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="kicker w-fit"
      >
        {t("hero-kicker")}
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white text-glow"
      >
        {t("hero-title")}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-lg md:text-xl text-site-muted max-w-2xl font-body"
      >
        {t("hero-lead")}
      </motion.p>
    </>
  )
}

function HeroActions() {
  const t = useTranslations()
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex flex-wrap gap-4 pt-4"
    >
      <Link href="/docs/download" className="btn-site-primary flex items-center gap-2">
        <Download size={20} />
        {t("hero-cta1")}
      </Link>
      <Link href="/docs" className="btn-site-ghost flex items-center gap-2">
        <BookOpen size={20} />
        {t("hero-cta2")}
      </Link>
    </motion.div>
  )
}
