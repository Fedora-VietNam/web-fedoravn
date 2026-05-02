"use client"

import * as React from "react"
import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/overlay/dropdown-menu"

/**
 * @brief Root component for the menubar.
 *
 * @param  props.className - Additional CSS classes
 * @param  props - Properties for the menubar root
 * @returns A React element
 */
function Menubar({ className, ...props }: MenubarPrimitive.Props) {
  return (
    <MenubarPrimitive
      data-slot="menubar"
      className={cn(
        "flex h-8 items-center gap-0.5 rounded-lg border p-[3px]",
        className
      )}
      {...props}
    />
  )
}

/**
 * @brief Menu component within the menubar.
 *
 * @param  props - Properties for the menubar menu
 * @returns A React element
 */
function MenubarMenu({ ...props }: React.ComponentProps<typeof DropdownMenu>) {
  return <DropdownMenu data-slot="menubar-menu" {...props} />
}

/**
 * @brief Group component for organizing items within a menubar menu.
 *
 * @param  props - Properties for the menubar group
 * @returns A React element
 */
function MenubarGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuGroup>) {
  return <DropdownMenuGroup data-slot="menubar-group" {...props} />
}

/**
 * @brief Portal component for rendering menubar content into a different part of the DOM.
 *
 * @param  props - Properties for the menubar portal
 * @returns A React element
 */
function MenubarPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPortal>) {
  return <DropdownMenuPortal data-slot="menubar-portal" {...props} />
}

/**
 * @brief Trigger component that opens a menu within the menubar.
 *
 * @param  props.className - Additional CSS classes
 * @param  props - Properties for the menubar trigger
 * @returns A React element
 */
function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuTrigger>) {
  return (
    <DropdownMenuTrigger
      data-slot="menubar-trigger"
      className={cn(
        "flex items-center rounded-sm px-1.5 py-[2px] text-sm font-medium outline-hidden select-none hover:bg-muted aria-expanded:bg-muted",
        className
      )}
      {...props}
    />
  )
}

/**
 * @brief Content component for a menubar menu.
 *
 * @param  props.className - Additional CSS classes
 * @param  props.align - The alignment of the popup
 * @param  props.alignOffset - The offset for alignment
 * @param  props.sideOffset - The offset from the side
 * @param  props - Properties for the menubar content
 * @returns A React element
 */
function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof DropdownMenuContent>) {
  return (
    <DropdownMenuContent
      data-slot="menubar-content"
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn("min-w-36 rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95", className )}
      {...props}
    />
  )
}

/**
 * @brief Label component for a menubar menu group.
 *
 * @param  props.className - Additional CSS classes
 * @param  props.inset - Whether the label should be inset
 * @param  props - Properties for the menubar label
 * @returns A React element
 */
function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuLabel> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuLabel
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(
        "px-1.5 py-1 text-sm font-medium data-inset:pl-7",
        className
      )}
      {...props}
    />
  )
}

/**
 * @brief Separator component for a menubar menu.
 *
 * @param  props.className - Additional CSS classes
 * @param  props - Properties for the menubar separator
 * @returns A React element
 */
function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuSeparator>) {
  return (
    <DropdownMenuSeparator
      data-slot="menubar-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

/**
 * @brief Shortcut component for displaying keyboard shortcuts in menubar menu items.
 *
 * @param  props.className - Additional CSS classes
 * @param  props - Properties for the menubar shortcut
 * @returns A React element
 */
function MenubarShortcut({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuShortcut>) {
  return (
    <DropdownMenuShortcut
      data-slot="menubar-shortcut"
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground group-focus/menubar-item:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarShortcut,
}
