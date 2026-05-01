import { cn } from "@/lib/utils"

/**
 * @brief Renders a skeleton placeholder to indicate content is loading.
 *
 * @param props.className - Additional CSS classes for the skeleton container
 * @returns JSX element representing the Skeleton component
 */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
