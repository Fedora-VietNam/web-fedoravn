"use client"

import { useRouter } from "next/navigation"
import { LucideIcon } from "lucide-react"

/**
 * @brief Represents the properties for the CommunityCard component.
 */
interface CommunityCardProps {
  /** The title of the card. */
  title: string
  /** The description of the card. */
  desc: string
  /** The icon to display on the card. */
  icon: LucideIcon
  /** The destination URL or anchor ID. */
  href: string
}

/**
 * @brief Renders an individual community interaction card.
 * 
 * @param props The properties of the community card.
 * @returns A JSX element representing a community card.
 */
export function CommunityCard({ title, desc, icon: Icon, href }: CommunityCardProps) {
  const router = useRouter()

  const handleClick = () => {
    if (href.startsWith("/")) {
      router.push(href)
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <button 
      onClick={handleClick}
      className="space-y-4 p-8 hover:bg-white/5 rounded-2xl transition-colors cursor-pointer group text-center w-full"
    >
      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto text-site-primary group-hover:scale-110 transition-transform">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-site-muted font-body text-sm">{desc}</p>
    </button>
  )
}
