"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { useCarousel } from "./carousel-context"

/**
 * @brief Button to scroll to the previous slide in the carousel.
 *
 * @param props.className - Additional CSS classes for the button
 * @param props.variant - Visual variant of the button
 * @param props.size - Size variant of the button
 * @returns A JSX element representing the previous button
 */
function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon-sm",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "absolute touch-manipulation rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -left-12 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

/**
 * @brief Button to scroll to the next slide in the carousel.
 *
 * @param props.className - Additional CSS classes for the button
 * @param props.variant - Visual variant of the button
 * @param props.size - Size variant of the button
 * @returns A JSX element representing the next button
 */
function CarouselNext({
  className,
  variant = "outline",
  size = "icon-sm",
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "absolute touch-manipulation rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRightIcon />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}

export { CarouselPrevious, CarouselNext }
