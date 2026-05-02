"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useCarousel } from "./carousel-context"

/**
 * @brief Wrapper for the carousel items, managing the viewport and scroll axis.
 *
 * @param props.className - Additional CSS classes for the content wrapper
 * @returns A JSX element representing the carousel content
 */
function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
}

/**
 * @brief An individual slide or item within the carousel.
 *
 * @param props.className - Additional CSS classes for the carousel item
 * @returns A JSX element representing a carousel item
 */
function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useCarousel()

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
}

export { CarouselContent, CarouselItem }
