import { cn } from "@/lib/utils"

/**
 * @brief Component to maintain a consistent aspect ratio for its content.
 *
 * @param props.ratio - The aspect ratio to maintain (e.g., 16/9)
 * @param props.className - Additional CSS classes for the container
 * @returns A JSX element representing the aspect ratio container
 */
function AspectRatio({
  ratio,
  className,
  ...props
}: React.ComponentProps<"div"> & { ratio: number }) {
  return (
    <div
      data-slot="aspect-ratio"
      style={
        {
          "--ratio": ratio,
        } as React.CSSProperties
      }
      className={cn("relative aspect-(--ratio)", className)}
      {...props}
    />
  )
}

export { AspectRatio }
