import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * @brief Header section of a table (`thead`).
 *
 * @param props.className - Additional CSS classes for the table header
 * @returns A JSX element representing the table header
 */
export function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

/**
 * @brief Body section of a table (`tbody`).
 *
 * @param props.className - Additional CSS classes for the table body
 * @returns A JSX element representing the table body
 */
export function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

/**
 * @brief Footer section of a table (`tfoot`).
 *
 * @param props.className - Additional CSS classes for the table footer
 * @returns A JSX element representing the table footer
 */
export function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

/**
 * @brief A row within a table (`tr`).
 *
 * @param props.className - Additional CSS classes for the table row
 * @returns A JSX element representing the table row
 */
export function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )}
      {...props}
    />
  )
}

/**
 * @brief A header cell within a table row (`th`).
 *
 * @param props.className - Additional CSS classes for the table head cell
 * @returns A JSX element representing the table head cell
 */
export function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

/**
 * @brief A standard data cell within a table row (`td`).
 *
 * @param props.className - Additional CSS classes for the table cell
 * @returns A JSX element representing the table cell
 */
export function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    />
  )
}

/**
 * @brief Caption component for a table.
 *
 * @param props.className - Additional CSS classes for the caption
 * @returns A JSX element representing the table caption
 */
export function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}
