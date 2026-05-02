"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Filter, Plus } from "lucide-react"

/**
 * @brief Renders the controls for navigating the events calendar.
 *
 * @returns JSX element representing the calendar controls.
 */
export function EventsCalendarControls() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold text-brand-primary min-w-[180px]">
          October 2024
        </h2>
        <div className="flex gap-1">
          <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200 text-slate-600">
            <ChevronLeft size={18} />
          </button>
          <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200 text-slate-600">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div className="flex gap-3 w-full sm:w-auto">
        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 bg-white shadow-sm transition-colors">
          <Filter size={18} />
          Filters
        </button>
        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-primary text-white rounded-xl font-bold hover:bg-opacity-90 shadow-md transition-all">
          <Plus size={22} />
          New Event
        </button>
      </div>
    </div>
  )
}
