"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "./table-parts/table-elements"

/**
 * @brief Main container component for a table, providing a responsive wrapper.
 *
 * @param props.className - Additional CSS classes for the table element
 * @returns A JSX element representing the table
 */
function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
