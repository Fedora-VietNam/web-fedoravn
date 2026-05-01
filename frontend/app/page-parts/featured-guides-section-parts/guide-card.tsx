"use client"

import { motion } from "motion/react"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { LucideIcon } from "lucide-react"

/**
 * @brief Represents the properties for the GuideCard component.
 */
interface GuideCardProps {
  /** The icon to display on the card. */
  icon: LucideIcon
  /** The translation key for the guide's title. */
  titleKey: string
  /** The translation key for the guide's description. */
  descKey: string
  /** The tag or category of the guide. */
  tag: string
  /** The index of the card in the list, used for animation delay. */
  index: number
}

/**
 * @brief Renders an individual guide card with animation.
 * 
 * @param props The properties of the guide card.
 * @returns A JSX element representing a guide card.
 */
export function GuideCard({ icon: Icon, titleKey, descKey, tag, index }: GuideCardProps) {
  const t = useTranslations()
  const router = useRouter()

  const handleNavigate = () => {
    router.push(`/docs/${t(titleKey as never).toLowerCase().replace(/\s+/g, '-')}`)
  }

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={handleNavigate}
      className="glass-card flex flex-col justify-between cursor-pointer hover:border-site-primary/30 transition-colors group"
    >
      <div className="space-y-4">
        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:text-site-primary transition-colors">
          <Icon className="text-site-muted group-hover:text-site-primary transition-colors" size={20} />
        </div>
        <h3 className="text-lg font-bold text-white leading-tight group-hover:text-site-primary transition-colors">
          {t(titleKey as never)}
        </h3>
        <p className="text-sm text-site-muted font-body">{t(descKey as never)}</p>
      </div>
      <div className="mt-6">
        <span className="inline-block bg-white/5 border border-white/10 text-site-muted px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">
          {tag}
        </span>
      </div>
    </motion.article>
  )
}
