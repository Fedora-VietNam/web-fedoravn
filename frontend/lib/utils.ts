import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * @brief Merges multiple class names and resolves Tailwind CSS conflicts.
 * 
 * @param inputs - An array of class values to be merged
 * @returns A single string of merged class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
