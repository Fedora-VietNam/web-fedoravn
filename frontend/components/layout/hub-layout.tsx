"use client"

import React, { useState } from "react"
import { ParticlesBackground } from "./particles-background"
import { CursorGlow } from "./hub-layout-parts/cursor-glow"
import { Header } from "./hub-layout-parts/header"
import { Footer } from "./hub-layout-parts/footer"

interface HubLayoutProps {
  children: React.ReactNode
}

/**
 * @brief The main layout component for the application hub.
 *
 * Assembles global UI elements like Header, Footer, and Background effects.
 *
 * @param props.children - The content to be rendered within the layout
 * @returns A structured layout shell.
 */
export default function HubLayout({ children }: HubLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="relative flex min-h-screen flex-col bg-site-bg font-body text-site-text selection:bg-site-primary selection:text-white">
      <CursorGlow />

      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <ParticlesBackground />

      {/* Main Content Area */}
      <main className="relative z-10 w-full flex-1 pt-[calc(66px+env(safe-area-inset-top))]">
        <div className="animate-in duration-500 fade-in">{children}</div>
      </main>

      <Footer />
    </div>
  )
}
