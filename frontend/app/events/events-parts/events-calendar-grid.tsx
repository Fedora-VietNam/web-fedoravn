"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { eventItems } from "@/storage/data"

/**
 * @brief Represents the properties for the CalendarEventItem component.
 */
interface CalendarEventItemProps {
  /** The title of the event. */
  title: string
  /** The color class for the event. */
  color: string
}

/**
 * @brief Renders an individual event item within a calendar day.
 * 
 * @param props The properties of the event item.
 * @returns A JSX element representing an event item.
 */
function CalendarEventItem({ title, color }: CalendarEventItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "p-1.5 rounded text-[10px] font-bold border-l-4 leading-tight cursor-pointer truncate",
        color
      )}
    >
      {title}
    </motion.div>
  )
}

/**
 * @brief Represents the properties for the CalendarDay component.
 */
interface CalendarDayProps {
  /** The day number to display. */
  day: number
  /** Whether this day belongs to the current month. */
  isCurrentMonth?: boolean
  /** Whether this day is currently selected or highlighted. */
  isToday?: boolean
}

/**
 * @brief Renders an individual day cell in the calendar.
 * 
 * @param props The properties of the calendar day.
 * @returns A JSX element representing a calendar day cell.
 */
function CalendarDay({ day, isCurrentMonth = true, isToday = false }: CalendarDayProps) {
  const dayEvents = isCurrentMonth ? eventItems.filter((e) => e.day === day) : []
  
  if (!isCurrentMonth) {
    return (
      <div className="min-h-[140px] p-2 border-r border-b border-slate-50 bg-slate-50/50 opacity-30 text-slate-500 font-bold text-sm">
        {day}
      </div>
    )
  }

  return (
    <div
      className={cn(
        "min-h-[140px] p-3 border-r border-b border-slate-100 group transition-colors hover:bg-slate-50/50",
        isToday && "bg-blue-50/20"
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <span
          className={cn(
            "text-sm font-bold p-1 w-7 h-7 flex items-center justify-center rounded-full",
            isToday ? "bg-brand-primary text-white" : "text-slate-600"
          )}
        >
          {day}
        </span>
      </div>
      <div className="space-y-1">
        {dayEvents.map((evt, idx) => (
          <CalendarEventItem
            key={idx}
            title={evt.title}
            color={evt.color}
          />
        ))}
      </div>
    </div>
  )
}

/**
 * @brief Renders the events calendar grid for the current month.
 *
 * @returns JSX element representing the calendar grid.
 */
export function EventsCalendarGrid() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const monthDays = Array.from({ length: 31 }, (_, i) => i + 1)
  const prevMonthPadding = Array.from({ length: 2 }, (_, i) => 29 + i)
  const nextMonthPadding = Array.from({ length: 2 }, (_, i) => i + 1)

  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
      <div className="grid grid-cols-7 border-b border-slate-100 bg-slate-50">
        {days.map((day) => (
          <div
            key={day}
            className="p-4 text-center font-bold text-slate-400 uppercase text-[10px] tracking-[0.2em]"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 border-slate-100">
        {/* Previous Month */}
        {prevMonthPadding.map((day) => (
          <CalendarDay key={`prev-${day}`} day={day} isCurrentMonth={false} />
        ))}
        {/* Current Month */}
        {monthDays.map((day) => (
          <CalendarDay
            key={`curr-${day}`}
            day={day}
            isToday={day === 8}
          />
        ))}
        {/* Next Month */}
        {nextMonthPadding.map((day) => (
          <CalendarDay key={`next-${day}`} day={day} isCurrentMonth={false} />
        ))}
      </div>
    </div>
  )
}
