import { motion } from "motion/react"
import Link from "next/link"
import { LucideIcon } from "lucide-react"

/**
 * @brief Props for the HeroAsideLink component.
 */
interface HeroAsideLinkProps {
  /** The destination URL. */
  href: string
  /** The icon to display. */
  icon: LucideIcon
  /** The text to display. */
  text: string
}

/**
 * @brief Renders an individual animated link for the hero aside section.
 * 
 * @param props The component properties.
 * @returns A JSX element representing the link.
 */
export function HeroAsideLink({ href, icon: Icon, text }: HeroAsideLinkProps) {
  return (
    <Link href={href} className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
      <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        <Icon size={16} className="text-site-primary" />
      </motion.div>
      {text}
    </Link>
  )
}
