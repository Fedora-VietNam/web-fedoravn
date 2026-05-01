"use client"

import * as React from "react"

export const THEMES = { light: "", dark: ".dark" } as const
export const INITIAL_DIMENSION = { width: 320, height: 200 } as const
export type TooltipNameType = number | string

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
>

export type ChartContextProps = {
  config: ChartConfig
}
