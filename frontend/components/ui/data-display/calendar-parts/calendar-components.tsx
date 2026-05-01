"use client"

import * as React from "react"
import { type DayButton, type Locale, getDefaultClassNames } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui"
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon } from "lucide-react"

/**
 * @brief Custom component for rendering individual day buttons within the calendar.
 *
 * @param props.className - Additional CSS classes for the day button
 * @param props.day - The day object representing the date
 * @param props.modifiers - Active modifiers for the day (selected, focused, etc.)
 * @param props.locale - The locale used for formatting
 * @returns A JSX element representing a calendar day button
 */
function CalendarDayButton({
  className,
  day,
  modifiers,
  locale,
  ...props
}: React.ComponentProps<typeof DayButton> & { locale?: Partial<Locale> }) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)

  // Automatically focus the button if the day is currently focused in the calendar state
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString(locale?.code)}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:rounded-(--cell-radius) data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

/**
 * @brief Custom root container for the DayPicker.
 */
const CalendarRoot = ({ className, rootRef, ...props }: React.ComponentProps<"div"> & { rootRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <div
      data-slot="calendar"
      ref={rootRef}
      className={cn(className)}
      {...props}
    />
  )
}

/**
 * @brief Custom navigation icons (Left/Right/Down) based on orientation.
 */
const CalendarChevron = ({ className, orientation, ...props }: React.ComponentProps<"svg"> & { orientation?: "left" | "right" | "down" }) => {
  if (orientation === "left") {
    return (
      <ChevronLeftIcon className={cn("size-4", className)} {...props} />
    )
  }

  if (orientation === "right") {
    return (
      <ChevronRightIcon className={cn("size-4", className)} {...props} />
    )
  }

  return (
    <ChevronDownIcon className={cn("size-4", className)} {...props} />
  )
}

/**
 * @brief Custom week number display.
 */
const CalendarWeekNumber = ({ children, ...props }: React.ComponentProps<"td">) => {
  return (
    <td {...props}>
      <div className="flex size-(--cell-size) items-center justify-center text-center">
        {children}
      </div>
    </td>
  )
}

export { CalendarDayButton, CalendarRoot, CalendarChevron, CalendarWeekNumber }
