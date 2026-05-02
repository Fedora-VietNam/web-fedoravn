"use client"

import * as React from "react"
import { TrendingUp, Users } from "lucide-react"
import { motion } from "motion/react"

/**
 * @brief Renders the community impact statistics section.
 *
 * @returns JSX element representing the portal impact section.
 */
export function PortalImpact() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-brand-primary">
        Community Impact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 bg-white border border-slate-200 p-8 rounded-2xl flex flex-col justify-between shadow-sm">
          <div>
            <Users className="text-brand-secondary mb-4" size={40} />
            <h3 className="text-2xl font-bold text-brand-primary">
              2,500+ Active Contributors
            </h3>
            <p className="text-slate-500 font-body mt-2">
              Engineers, writers, and artists working around the clock to
              refine the Linux experience.
            </p>
          </div>
          <div className="mt-8 h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "75%" }}
              className="h-full bg-brand-secondary rounded-full"
            />
          </div>
        </div>

        <div className="bg-blue-900/5 border border-brand-primary/5 p-8 rounded-2xl text-center flex flex-col justify-center items-center shadow-sm">
          <div className="text-4xl font-extrabold text-brand-primary mb-1">
            142
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary">
            Global Mirror Sites
          </div>
        </div>

        <div className="bg-brand-secondary p-8 rounded-2xl flex flex-col justify-between text-white shadow-xl shadow-blue-900/10 transition-transform hover:-translate-y-1">
          <TrendingUp size={24} className="opacity-60" />
          <div>
            <div className="text-4xl font-extrabold mb-1">12k+</div>
            <div className="text-sm font-bold opacity-80">
              Monthly Pull Requests
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
