import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * @brief Header section for the empty state, typically containing media and title.
 *
 * @param props.className - Additional CSS classes for the header
 * @returns A JSX element representing the empty state header
 */
export function EmptyHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-header"
      className={cn("flex max-w-sm flex-col items-center gap-2", className)}
      {...props}
    />
  )
}

export const emptyMediaVariants = cva(
  "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

/**
 * @brief Component for displaying media (icon or image) in an empty state.
 *
 * @param props.className - Additional CSS classes for the media container
 * @param props.variant - Visual variant for the media ("default", "icon")
 * @returns A JSX element representing the empty state media
 */
export function EmptyMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

/**
 * @brief Title component for the empty state.
 *
 * @param props.className - Additional CSS classes for the title
 * @returns A JSX element representing the empty state title
 */
export function EmptyTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-title"
      className={cn(
        "font-heading text-sm font-medium tracking-tight",
        className
      )}
      {...props}
    />
  )
}

/**
 * @brief Description component for the empty state.
 *
 * @param props.className - Additional CSS classes for the description
 * @returns A JSX element representing the empty state description
 */
export function EmptyDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        "text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className
      )}
      {...props}
    />
  )
}

/**
 * @brief Content area for the empty state, typically containing actions.
 *
 * @param props.className - Additional CSS classes for the content container
 * @returns A JSX element representing the empty state content
 */
export function EmptyContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-2.5 text-sm text-balance",
        className
      )}
      {...props}
    />
  )
}
