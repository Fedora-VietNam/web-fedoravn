"use client"

import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/buttons/button"

/**
 * @brief Header component for the dialog.
 *
 * @param  props.className - Additional CSS classes
 * @param  props - Properties for the dialog header
 * @returns A React element
 */
function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

/**
 * @brief Footer component for the dialog.
 *
 * @param  props.className - Additional CSS classes
 * @param  props.showCloseButton - Whether to show a close button in the footer
 * @param  props.children - The content of the footer
 * @param  props - Properties for the dialog footer
 * @returns A React element
 */
function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close render={<Button variant="outline" />}>
          Close
        </DialogPrimitive.Close>
      )}
    </div>
  )
}

/**
 * @brief Title component for the dialog.
 *
 * @param  props.className - Additional CSS classes
 * @param  props - Properties for the dialog title
 * @returns A React element
 */
function DialogTitle({ className, ...props }: DialogPrimitive.Title.Props) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        "font-heading text-base leading-none font-medium",
        className
      )}
      {...props}
    />
  )
}

/**
 * @brief Description component for the dialog.
 *
 * @param  props.className - Additional CSS classes
 * @param  props - Properties for the dialog description
 * @returns A React element
 */
function DialogDescription({
  className,
  ...props
}: DialogPrimitive.Description.Props) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        "text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export { DialogHeader, DialogFooter, DialogTitle, DialogDescription }
