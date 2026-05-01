"use client"

import * as React from "react"
import { ChartContextProps } from "./chart-constants"

export const ChartContext = React.createContext<ChartContextProps | null>(null)

/**
 * @brief Custom hook to access the chart context.
 * @returns The chart context containing the chart configuration
 */
export function useChart() {
  const context = React.useContext(ChartContext)
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }
  return context
}
