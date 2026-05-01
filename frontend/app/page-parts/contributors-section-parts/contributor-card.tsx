"use client"

import { motion } from "motion/react"

/**
 * @brief Represents the properties for the ContributorCard component.
 */
interface ContributorCardProps {
  /** The name of the contributor. */
  name: string
  /** The role or title of the contributor. */
  role: string
  /** The URL of the contributor's avatar image. */
  avatar: string
  /** The index of the card in the list, used for animation delay. */
  index: number
}

/**
 * @brief Renders an individual contributor card with animation.
 * 
 * @param props The properties of the contributor card.
 * @returns A JSX element representing a contributor card.
 */
export function ContributorCard({ name, role, avatar, index }: ContributorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col items-center space-y-3"
    >
      <div className="relative group">
        <div className="absolute -inset-1 bg-linear-to-r from-site-primary to-blue-600 rounded-full blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatar} 
          alt={name} 
          className="relative w-16 h-16 rounded-full border-2 border-white/10 bg-site-bg"
        />
      </div>
      <div className="text-center">
        <p className="text-white font-bold text-sm">{name}</p>
        <p className="text-site-muted text-[10px] uppercase tracking-widest font-black">{role}</p>
      </div>
    </motion.div>
  )
}
