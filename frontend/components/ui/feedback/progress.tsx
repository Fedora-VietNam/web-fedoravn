"use client"

import { Progress as ProgressPrimitive } from "@base-ui/react/progress"

import { cn } from "@/lib/utils"

/**
 * @brief Renders a progress bar component with track and indicator.
 *
 * @param props.className - Additional CSS classes for the progress container
 * @param props.children  - Content to be rendered within the progress component
 * @param props.value     - The current progress value (0 to max)
 * @returns JSX element representing the Progress component
 */
function Progress({
  className,
  children,
  value,
  ...props
}: ProgressPrimitive.Root.Props) {
  return (
    <ProgressPrimitive.Root
      value={value}
      data-slot="progress"
      className={cn("flex flex-wrap gap-3", className)}
      {...props}
    >
      {children}
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressPrimitive.Root>
  )
}

/**
 * @brief Renders the track area of a progress bar.
 *
 * @param props.className - Additional CSS classes for the track container
 * @returns JSX element representing the ProgressTrack component
 */
function ProgressTrack({ className, ...props }: ProgressPrimitive.Track.Props) {
  return (
    <ProgressPrimitive.Track
      className={cn(
        "relative flex h-1 w-full items-center overflow-x-hidden rounded-full bg-muted",
        className
      )}
      data-slot="progress-track"
      {...props}
    />
  )
}

/**
 * @brief Renders the moving indicator within a progress bar.
 *
 * @param props.className - Additional CSS classes for the indicator
 * @returns JSX element representing the ProgressIndicator component
 */
function ProgressIndicator({
  className,
  ...props
}: ProgressPrimitive.Indicator.Props) {
  return (
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className={cn("h-full bg-primary transition-all", className)}
      {...props}
    />
  )
}

/**
 * @brief Renders a label for the progress component.
 *
 * @param props.className - Additional CSS classes for the label
 * @returns JSX element representing the ProgressLabel component
 */
function ProgressLabel({ className, ...props }: ProgressPrimitive.Label.Props) {
  return (
    <ProgressPrimitive.Label
      className={cn("text-sm font-medium", className)}
      data-slot="progress-label"
      {...props}
    />
  )
}

/**
 * @brief Renders the numeric or text value of the progress.
 *
 * @param props.className - Additional CSS classes for the value display
 * @returns JSX element representing the ProgressValue component
 */
function ProgressValue({ className, ...props }: ProgressPrimitive.Value.Props) {
  return (
    <ProgressPrimitive.Value
      className={cn(
        "ml-auto text-sm text-muted-foreground tabular-nums",
        className
      )}
      data-slot="progress-value"
      {...props}
    />
  )
}

export {
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
}
