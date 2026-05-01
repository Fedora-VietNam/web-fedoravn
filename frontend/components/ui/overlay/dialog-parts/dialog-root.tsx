"use client"

import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"

/**
 * @brief Root component for the dialog.
 *
 * @param  props - Properties for the dialog root
 * @returns A React element
 */
function Dialog({ ...props }: DialogPrimitive.Root.Props) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

/**
 * @brief Trigger component that opens the dialog.
 *
 * @param  props - Properties for the dialog trigger
 * @returns A React element
 */
function DialogTrigger({ ...props }: DialogPrimitive.Trigger.Props) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

/**
 * @brief Portal component for rendering the dialog into a different part of the DOM.
 *
 * @param  props - Properties for the dialog portal
 * @returns A React element
 */
function DialogPortal({ ...props }: DialogPrimitive.Portal.Props) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

/**
 * @brief Close component that closes the dialog.
 *
 * @param  props - Properties for the dialog close button
 * @returns A React element
 */
function DialogClose({ ...props }: DialogPrimitive.Close.Props) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

export { Dialog, DialogTrigger, DialogPortal, DialogClose }
