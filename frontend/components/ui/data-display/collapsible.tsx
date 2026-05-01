"use client"

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible"

/**
 * @brief Root component for a collapsible section.
 *
 * @param props.className - Additional CSS classes for the collapsible root
 * @returns A JSX element representing the collapsible container
 */
function Collapsible({ ...props }: CollapsiblePrimitive.Root.Props) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

/**
 * @brief The button or element that toggles the collapsible content.
 *
 * @param props.className - Additional CSS classes for the trigger
 * @returns A JSX element representing the collapsible trigger
 */
function CollapsibleTrigger({ ...props }: CollapsiblePrimitive.Trigger.Props) {
  return (
    <CollapsiblePrimitive.Trigger data-slot="collapsible-trigger" {...props} />
  )
}

/**
 * @brief The content area that is shown or hidden by the collapsible component.
 *
 * @param props.className - Additional CSS classes for the panel
 * @returns A JSX element representing the collapsible content
 */
function CollapsibleContent({ ...props }: CollapsiblePrimitive.Panel.Props) {
  return (
    <CollapsiblePrimitive.Panel data-slot="collapsible-content" {...props} />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
