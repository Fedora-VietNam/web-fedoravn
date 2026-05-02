"use client"

import * as React from "react"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { contributionPaths } from "@/storage/data"

/**
 * @brief Represents the properties for the PathCard component.
 */
interface PathCardProps {
  /** The title of the contribution path. */
  title: string
  /** The description of the contribution path. */
  desc: string
  /** The category of the path. */
  cat: string
  /** The image URL for the path. */
  img: string
  /** The text to display for the link. */
  linkText: string
  /** The index of the card in the list, used for animation delay. */
  index: number
}

/**
 * @brief Renders an individual contribution path card.
 * 
 * @param props The properties of the path card.
 * @returns A JSX element representing a path card.
 */
function PathCard({ title, desc, cat, img, linkText, index }: PathCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group"
    >
      <div className="md:w-1/3 overflow-hidden h-48 md:h-auto border-r border-slate-50">
        <img
          src={img}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          alt=""
        />
      </div>
      <div className="md:w-2/3 p-8 flex flex-col justify-center">
        <span className="text-[10px] font-black uppercase tracking-widest text-brand-secondary mb-2">
          {cat}
        </span>
        <h3 className="text-2xl font-bold text-brand-primary mb-3">
          {title}
        </h3>
        <p className="text-sm text-slate-500 font-body mb-6 leading-relaxed">
          {desc}
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-brand-secondary font-bold text-sm hover:translate-x-1 transition-transform"
        >
          {linkText} <ArrowRight size={14} />
        </a>
      </div>
    </motion.div>
  )
}

/**
 * @brief Renders the various contribution paths for users.
 *
 * @returns JSX element representing the portal paths section.
 */
export function PortalPaths() {
  return (
    <section className="space-y-10">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h2 className="text-4xl font-extrabold text-brand-primary">
          Find Your Path
        </h2>
        <p className="text-slate-500 font-body">
          Tell us what you enjoy, and we&apos;ll point you to the right team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {contributionPaths.map((path, idx) => (
          <PathCard
            key={path.title}
            index={idx}
            title={path.title}
            desc={path.desc}
            cat={path.cat}
            img={path.img}
            linkText={path.linkText}
          />
        ))}
      </div>
    </section>
  )
}
