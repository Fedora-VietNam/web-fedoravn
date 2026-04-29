"use server"

import { cookies } from "next/headers"

const LOCALES = ["en", "vi"]

export async function setLocale(locale: string) {
  if (!LOCALES.includes(locale)) return

  const store = await cookies()
  store.set("NEXT_LOCALE", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  })
}
