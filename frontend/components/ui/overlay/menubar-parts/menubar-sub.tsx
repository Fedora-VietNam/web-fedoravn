"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/overlay/dropdown-menu"

/**
 * @brief Root component for a menubar submenu.
 *
 * @param  props - Properties for the menubar submenu
 * @returns A React element
 */
function MenubarSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuSub>) {
  return <DropdownMenuSub data-slot="menubar-sub" {...props} />
}

/**
 * @brief Trigger component that opens a menubar submenu.
 *
 * @param  props.className - Additional CSS classes
 * @param  props.inset - Whether the trigger should be inset
 * @param  props - Properties for the menubar submenu trigger
 * @returns A React element
 */
function MenubarSubTrigger({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuSubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuSubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        "gap-1.5 rounded-md px-1.5 py-1 text-sm focus:bg-accent focus:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

/**
 * @brief Content component for a menubar submenu popup.
 *
 * @param  props.className - Additional CSS classes
 * @param  props - Properties for the menubar submenu content
 * @returns A React element
 */
function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuSubContent>) {
  return (
    <DropdownMenuSubContent
      data-slot="menubar-sub-content"
      className={cn("min-w-32 rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className )}
      {...props}
    />
  )
}

export {
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}
