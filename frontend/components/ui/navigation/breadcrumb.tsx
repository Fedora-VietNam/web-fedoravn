import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"

import { cn } from "@/lib/utils"
import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react"

/**
 * @brief Renders a navigation breadcrumb component.
 *
 * @param props.className - Additional CSS classes for the nav container
 * @returns JSX element representing the Breadcrumb component
 */
function Breadcrumb({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      className={cn(className)}
      {...props}
    />
  )
}

/**
 * @brief Renders the list of breadcrumb items.
 *
 * @param props.className - Additional CSS classes for the list container
 * @returns JSX element representing the BreadcrumbList component
 */
function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "flex flex-wrap items-center gap-1.5 text-sm wrap-break-word text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

/**
 * @brief Renders an individual item within the breadcrumb list.
 *
 * @param props.className - Additional CSS classes for the item container
 * @returns JSX element representing the BreadcrumbItem component
 */
function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  )
}

/**
 * @brief Renders a link within a breadcrumb item.
 *
 * @param props.className - Additional CSS classes for the link
 * @param props.render    - Custom render function or element
 * @returns JSX element representing the BreadcrumbLink component
 */
function BreadcrumbLink({
  className,
  render,
  ...props
}: useRender.ComponentProps<"a">) {
  return useRender({
    defaultTagName: "a",
    props: mergeProps<"a">(
      {
        className: cn("transition-colors hover:text-foreground", className),
      },
      props
    ),
    render,
    state: {
      slot: "breadcrumb-link",
    },
  })
}

/**
 * @brief Renders the current page indicator in a breadcrumb.
 *
 * @param props.className - Additional CSS classes for the page container
 * @returns JSX element representing the BreadcrumbPage component
 */
function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  )
}

/**
 * @brief Renders a separator between breadcrumb items.
 *
 * @param props.children  - Custom separator icon or element
 * @param props.className - Additional CSS classes for the separator container
 * @returns JSX element representing the BreadcrumbSeparator component
 */
function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? (
        <ChevronRightIcon />
      )}
    </li>
  )
}

/**
 * @brief Renders an ellipsis to indicate hidden breadcrumb items.
 *
 * @param props.className - Additional CSS classes for the ellipsis container
 * @returns JSX element representing the BreadcrumbEllipsis component
 */
function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn(
        "flex size-5 items-center justify-center [&>svg]:size-4",
        className
      )}
      {...props}
    >
      <MoreHorizontalIcon
      />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
