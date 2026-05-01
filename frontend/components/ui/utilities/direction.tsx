"use client"

import {
  DirectionProvider as DirectionProviderPrimitive,
  useDirection as useDirectionPrimitive,
} from "@base-ui/react/direction-provider"

/**
 * @brief Provides direction context to its children.
 *
 * @param props.direction - The text direction (ltr or rtl)
 * @param props.children  - Content of the provider
 * @returns JSX element representing the DirectionProvider component
 */
export const DirectionProvider = DirectionProviderPrimitive

/**
 * @brief Hook to access the current text direction.
 *
 * @returns The current direction (ltr or rtl)
 */
export const useDirection = useDirectionPrimitive
