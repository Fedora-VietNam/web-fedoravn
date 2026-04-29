import { cookies } from "next/headers"
import { getRequestConfig } from "next-intl/server"

const LOCALES = ["en", "vi"] as const
type Locale = (typeof LOCALES)[number]

export default getRequestConfig(async () => {
  const store = await cookies()
  const cookie = store.get("NEXT_LOCALE")?.value
  const locale: Locale = LOCALES.includes(cookie as Locale)
    ? (cookie as Locale)
    : "en"

  return {
    locale,
    messages: (await import(`i18n/messages/${locale}.json`)).default,
  }
})
