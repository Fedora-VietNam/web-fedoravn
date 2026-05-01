"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * @brief Renders the sidebar menu.
 */
export function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return <ul data-slot="sidebar-menu" data-sidebar="menu" className={cn("flex w-full min-w-0 flex-col gap-0", className)} {...props} />
}

/**
 * @brief Renders a sidebar menu item.
 */
export function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return <li data-slot="sidebar-menu-item" data-sidebar="menu-item" className={cn("group/menu-item relative", className)} {...props} />
}
