import { useTranslations } from "next-intl"
import { Download, BookOpen } from "lucide-react"
import { HeroAsideLink } from "./hero-aside-link"

/**
 * @brief Renders the list of quick links in the hero aside section.
 * 
 * @returns A JSX element representing the quick links list.
 */
export function HeroAsideQuickLinks() {
  const t = useTranslations()

  const links = [
    { href: "/docs/guide", icon: BookOpen, textKey: "aside-quick1" },
    { href: "/docs/install", icon: Download, textKey: "aside-quick2" },
    { href: "/docs/setting", icon: BookOpen, textKey: "aside-quick3" },
    { href: "/docs/troubleshoot", icon: BookOpen, textKey: "aside-quick4" },
  ]

  return (
    <ul className="space-y-4 font-body text-site-muted">
      {links.map((link, index) => (
        <HeroAsideLink
          key={index}
          href={link.href}
          icon={link.icon}
          text={t(link.textKey)}
        />
      ))}
    </ul>
  )
}
