"use client"

import * as React from "react"
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog"

/**
 * @brief Root component for the sheet.
 *
 * @param  props - Properties for the sheet root
 * @returns A React element
 */
function Sheet({ ...props }: SheetPrimitive.Root.Props) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

/**
 * @brief Trigger component that opens the sheet.
 *
 * @param  props - Properties for the sheet trigger
 * @returns A React element
 */
function SheetTrigger({ ...props }: SheetPrimitive.Trigger.Props) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

/**
 * @brief Close component that closes the sheet.
 *
 * @param  props - Properties for the sheet close button
 * @returns A React element
 */
function SheetClose({ ...props }: SheetPrimitive.Close.Props) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

/**
 * @brief Portal component for rendering the sheet into a different part of the DOM.
 *
 * @param  props - Properties for the sheet portal
 * @returns A React element
 */
function SheetPortal({ ...props }: SheetPrimitive.Portal.Props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

export { Sheet, SheetTrigger, SheetClose, SheetPortal }
