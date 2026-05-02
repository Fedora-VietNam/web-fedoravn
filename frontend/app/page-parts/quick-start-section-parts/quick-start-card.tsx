"use client"

import { motion } from "motion/react"
import { useRouter } from "next/navigation"
import { LucideIcon } from "lucide-react"

/**
 * @brief Represents the properties for the QuickStartCard component.
 */
interface QuickStartCardProps {
  /** The title of the card. */
  title: string
  /** The description of the card. */
  desc: string
  /** The icon to display on the card. */
  icon: LucideIcon
  /** The tag or category of the card. */
  tag: string
  /** The index of the card in the list, used for animation delay. */
  index: number
}

/**
 * @brief Renders an individual quick start card with animation.
 * 
 * @param props The properties of the quick start card.
 * @returns A JSX element representing a quick start card.
 */
export function QuickStartCard({ title, desc, icon: Icon, tag, index }: QuickStartCardProps) {
  const router = useRouter()

  const handleNavigate = () => {
    router.push(`/docs/${title.toLowerCase().replace(/\s+/g, '-')}`)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={handleNavigate}
      className="glass-card space-y-6 cursor-pointer hover:border-site-primary/30 transition-colors group"
    >
      <div className="w-12 h-12 rounded-xl bg-site-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <Icon className="text-site-primary" size={24} />
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-white group-hover:text-site-primary transition-colors">
          {title}
        </h3>
        <p className="text-site-muted font-body text-sm leading-relaxed">{desc}</p>
      </div>
      <span className="inline-block bg-[#16264b] border border-[#3e5a96] text-[#cde0ff] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
        {tag}
      </span>
    </motion.article>
  )
}
