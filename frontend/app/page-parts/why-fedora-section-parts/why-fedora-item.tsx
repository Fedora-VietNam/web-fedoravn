"use client"

import { CheckCircle2 } from "lucide-react"

/**
 * @brief Represents the properties for the WhyFedoraItem component.
 */
interface WhyFedoraItemProps {
  /** The title of the reason. */
  title: string
  /** The description of the reason. */
  desc: string
}

/**
 * @brief Renders an individual reason to choose Fedora.
 * 
 * @param props The properties of the reason item.
 * @returns A JSX element representing a reason item.
 */
export function WhyFedoraItem({ title, desc }: WhyFedoraItemProps) {
  return (
    <li className="flex gap-4">
      <CheckCircle2 className="text-site-ok shrink-0 mt-1" size={20} />
      <div>
        <h4 className="text-white font-bold">{title}</h4>
        <p className="text-site-muted text-sm font-body">{desc}</p>
      </div>
    </li>
  )
}
