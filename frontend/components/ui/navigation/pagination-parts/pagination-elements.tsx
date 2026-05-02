import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/buttons/button"
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react"

/**
 * @brief Renders the list of pagination items.
 *
 * @param props.className - Additional CSS classes for the content container
 * @returns JSX element representing the PaginationContent component
 */
export function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex items-center gap-0.5", className)}
      {...props}
    />
  )
}

/**
 * @brief Renders an individual item within the pagination list.
 *
 * @param props - All props accepted by the original li element
 * @returns JSX element representing the PaginationItem component
 */
export function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

export type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">

/**
 * @brief Renders a link for an individual page in the pagination.
 *
 * @param props.className - Additional CSS classes for the link
 * @param props.isActive  - Whether this is the currently active page
 * @param props.size      - The size variant for the button (default: icon)
 * @returns JSX element representing the PaginationLink component
 */
export function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <Button
      variant={isActive ? "outline" : "ghost"}
      size={size}
      className={cn(className)}
      nativeButton={false}
      render={
        <a
          aria-current={isActive ? "page" : undefined}
          data-slot="pagination-link"
          data-active={isActive}
          {...props}
        />
      }
    />
  )
}

/**
 * @brief Renders a button to navigate to the previous page.
 *
 * @param props.className - Additional CSS classes for the button
 * @param props.text      - Optional label text (default: Previous)
 * @returns JSX element representing the PaginationPrevious component
 */
export function PaginationPrevious({
  className,
  text = "Previous",
  ...props
}: React.ComponentProps<typeof PaginationLink> & { text?: string }) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("pl-1.5!", className)}
      {...props}
    >
      <ChevronLeftIcon data-icon="inline-start" />
      <span className="hidden sm:block">{text}</span>
    </PaginationLink>
  )
}

/**
 * @brief Renders a button to navigate to the next page.
 *
 * @param props.className - Additional CSS classes for the button
 * @param props.text      - Optional label text (default: Next)
 * @returns JSX element representing the PaginationNext component
 */
export function PaginationNext({
  className,
  text = "Next",
  ...props
}: React.ComponentProps<typeof PaginationLink> & { text?: string }) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("pr-1.5!", className)}
      {...props}
    >
      <span className="hidden sm:block">{text}</span>
      <ChevronRightIcon data-icon="inline-end" />
    </PaginationLink>
  )
}

/**
 * @brief Renders an ellipsis to indicate hidden pagination pages.
 *
 * @param props.className - Additional CSS classes for the ellipsis container
 * @returns JSX element representing the PaginationEllipsis component
 */
export function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn(
        "flex size-8 items-center justify-center [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <MoreHorizontalIcon
      />
      <span className="sr-only">More pages</span>
    </span>
  )
}
