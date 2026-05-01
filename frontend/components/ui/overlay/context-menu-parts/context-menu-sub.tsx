"use client"

import * as React from "react"
import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu"
import { cn } from "@/lib/utils"
import { ChevronRightIcon } from "lucide-react"
import { ContextMenuContent } from "./context-menu-core"

/**
 * @brief Root component for a context menu submenu.
 *
 * @param  props - Properties for the context menu submenu
 * @returns A React element
 */
function ContextMenuSub({ ...props }: ContextMenuPrimitive.SubmenuRoot.Props) {
  return (
    <ContextMenuPrimitive.SubmenuRoot data-slot="context-menu-sub" {...props} />
  )
}

/**
 * @brief Trigger component that opens a context menu submenu.
 *
 * @param  props.className - Additional CSS classes
 * @param  props.inset - Whether the trigger should be inset
 * @param  props.children - The content of the trigger
 * @param  props - Properties for the context menu submenu trigger
 * @returns A React element
 */
function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: ContextMenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.SubmenuTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </ContextMenuPrimitive.SubmenuTrigger>
  )
}

/**
 * @brief Content component for the context menu submenu popup.
 *
 * @param  props - Properties for the context menu submenu content
 * @returns A React element
 */
function ContextMenuSubContent({
  ...props
}: React.ComponentProps<typeof ContextMenuContent>) {
  return (
    <ContextMenuContent
      data-slot="context-menu-sub-content"
      className="shadow-lg"
      side="right"
      {...props}
    />
  )
}

export {
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
}
