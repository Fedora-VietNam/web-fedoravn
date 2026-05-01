import { Plus_Jakarta_Sans, Work_Sans, Geist_Mono } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { getLocale, getMessages } from "next-intl/server"
import { NextIntlClientProvider } from "next-intl"
import { ReactNode } from "react"
import HubLayout from "@/components/layout/hub-layout"
import { AppSettingsProvider } from "@/hooks/use-app-settings"
import { ThemeProvider } from "@/components/theme-provider"

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

import { SessionProvider } from "next-auth/react"

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
      <head></head>
      <body>
        <SessionProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider>
              <AppSettingsProvider>
                <HubLayout>{children}</HubLayout>
              </AppSettingsProvider>
            </ThemeProvider>
          </NextIntlClientProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
