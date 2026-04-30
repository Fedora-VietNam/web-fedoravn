import { Plus_Jakarta_Sans, Work_Sans, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { getLocale, getMessages } from "next-intl/server"
import { NextIntlClientProvider } from "next-intl"
import { ReactNode } from "react"
import HubLayout from "@/components/layout/hub-layout"

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
})

const workSans = Work_Sans({ 
  subsets: ["latin"], 
  variable: "--font-body" 
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

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
      <body>
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <HubLayout>
              {children}
            </HubLayout>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
