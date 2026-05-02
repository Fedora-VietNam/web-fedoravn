"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * @brief Renders the header section for the events page.
 *
 * @returns JSX element representing the events header.
 */
export function EventsHeader() {
  return (
    <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <h1 className="text-4xl font-bold text-brand-primary mb-2">
          Community Events
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl font-body">
          Connect with the Fedora community. Join release parties, technical
          workshops, and local meetups across the globe.
        </p>
      </div>
      <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-full border border-slate-200">
        {["Month", "Week", "List"].map((view, idx) => (
          <button
            key={view}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-bold transition-all",
              idx === 0
                ? "bg-white shadow-sm text-brand-primary"
                : "text-slate-500 hover:bg-white/50"
            )}
          >
            {view}
          </button>
        ))}
      </div>
    </header>
  )
}
