"use client"

import * as React from "react"
import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu"
import { cn } from "@/lib/utils"

/**
 * @brief Group component for organizing context menu items.
 *
 * @param  props - Properties for the context menu group
 * @returns A React element
 */
function ContextMenuGroup({ ...props }: ContextMenuPrimitive.Group.Props) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  )
}

/**
 * @brief Label component for a context menu group.
 *
 * @param  props.className - Additional CSS classes
 * @param  props.inset - Whether the label should be inset
 * @param  props - Properties for the context menu label
 * @returns A React element
 */
function ContextMenuLabel({
  className,
  inset,
  ...props
}: ContextMenuPrimitive.GroupLabel.Props & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.GroupLabel
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        "px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7",
        className
      )}
      {...props}
    />
  )
}

/**
 * @brief Separator component for the context menu.
 *
 * @param  props.className - Additional CSS classes
 * @param  props - Properties for the context menu separator
 * @returns A React element
 */
function ContextMenuSeparator({
  className,
  ...props
}: ContextMenuPrimitive.Separator.Props) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

/**
 * @brief Shortcut component for displaying keyboard shortcuts in context menu items.
 *
 * @param  props.className - Additional CSS classes
 * @param  props - Properties for the context menu shortcut
 * @returns A React element
 */
function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground group-focus/context-menu-item:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
}
