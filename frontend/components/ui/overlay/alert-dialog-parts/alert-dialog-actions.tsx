"use client"

import * as React from "react"
import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/buttons/button"

/**
 * @brief Action button component for the alert dialog.
 *
 * @param  props.className - Additional CSS classes
 * @param  props - Properties for the alert dialog action button
 * @returns A React element
 */
function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="alert-dialog-action"
      className={cn(className)}
      {...props}
    />
  )
}

/**
 * @brief Cancel button component for the alert dialog.
 *
 * @param  props.className - Additional CSS classes
 * @param  props.variant - The button variant
 * @param  props.size - The button size
 * @param  props - Properties for the alert dialog cancel button
 * @returns A React element
 */
function AlertDialogCancel({
  className,
  variant = "outline",
  size = "default",
  ...props
}: AlertDialogPrimitive.Close.Props &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
  return (
    <AlertDialogPrimitive.Close
      data-slot="alert-dialog-cancel"
      className={cn(className)}
      render={<Button variant={variant} size={size} />}
      {...props}
    />
  )
}

export { AlertDialogAction, AlertDialogCancel }
