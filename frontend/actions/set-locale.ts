"use server"

import { cookies } from "next/headers"

const LOCALES = ["en", "vi"]

/**
 * @brief Updates the application locale by setting a cookie.
 * 
 * @param locale - The locale string to set (e.g., "en", "vi")
 * @returns Promise that resolves when the cookie is set
 */
export async function setLocale(locale: string) {
  if (!LOCALES.includes(locale)) return

  const store = await cookies()
  store.set("NEXT_LOCALE", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  })
}
