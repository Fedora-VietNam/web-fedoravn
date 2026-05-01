import { cn } from "@/lib/utils"
import { Loader2Icon } from "lucide-react"

/**
 * @brief Renders a loading spinner icon.
 *
 * @param props.className - Additional CSS classes for the spinner icon
 * @returns JSX element representing the Spinner component
 */
function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon role="status" aria-label="Loading" className={cn("size-4 animate-spin", className)} {...props} />
  )
}

export { Spinner }
