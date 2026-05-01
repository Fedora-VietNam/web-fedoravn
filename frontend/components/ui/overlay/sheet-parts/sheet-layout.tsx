"use client"

import * as React from "react"
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog"
import { cn } from "@/lib/utils"

/**
 * @brief Header component for the sheet.
 *
 * @param  props.className - Additional CSS classes
 * @param  props - Properties for the sheet header
 * @returns A React element
 */
function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-0.5 p-4", className)}
      {...props}
    />
  )
}

/**
 * @brief Footer component for the sheet.
 *
 * @param  props.className - Additional CSS classes
 * @param  props - Properties for the sheet footer
 * @returns A React element
 */
function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

/**
 * @brief Title component for the sheet.
 *
 * @param  props.className - Additional CSS classes
 * @param  props - Properties for the sheet title
 * @returns A React element
 */
function SheetTitle({ className, ...props }: SheetPrimitive.Title.Props) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        "font-heading text-base font-medium text-foreground",
        className
      )}
      {...props}
    />
  )
}

/**
 * @brief Description component for the sheet.
 *
 * @param  props.className - Additional CSS classes
 * @param  props - Properties for the sheet description
 * @returns A React element
 */
function SheetDescription({
  className,
  ...props
}: SheetPrimitive.Description.Props) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export { SheetHeader, SheetFooter, SheetTitle, SheetDescription }
