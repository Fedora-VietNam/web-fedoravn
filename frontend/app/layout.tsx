import { Plus_Jakarta_Sans, Work_Sans, Geist_Mono } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { getLocale, getMessages } from "next-intl/server"
import { NextIntlClientProvider, AbstractIntlMessages } from "next-intl"
import { ReactNode } from "react"
import { HubLayout } from "@/components/layout"
import { SessionProvider } from "next-auth/react"
import type { Viewport } from "next"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b1020",
}

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

/**
 * @brief The root layout component of the application.
 *
 * Sets up the HTML structure, fonts, localization providers, and authentication session providers.
 *
 * @param props.children - The child components to render within the layout.
 * @returns A promise that resolves to a JSX element representing the root layout.
 */
export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        plusJakartaSans.variable,
        workSans.variable
      )}
    >
      <head>
        <ThemeScript />
      </head>
      <body>
        <AppProviders locale={locale} messages={messages}>
          <HubLayout>{children}</HubLayout>
        </AppProviders>
      </body>
    </html>
  )
}

/**
 * @brief Renders the inline script to handle theme initialization.
 *
 * Prevents FOUC (Flash of Unstyled Content) by setting the dark class before the page renders.
 */
function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          try {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          } catch (_) {}
        `,
      }}
    />
  )
}

/**
 * @brief Wraps the application with necessary providers.
 *
 * Includes SessionProvider for authentication and NextIntlClientProvider for localization.
 */
function AppProviders({
  children,
  locale,
  messages,
}: {
  children: ReactNode
  locale: string
  messages: AbstractIntlMessages
}) {
  return (
    <SessionProvider>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </SessionProvider>
  )
}
