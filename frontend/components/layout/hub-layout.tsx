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
    <div className="min-h-screen flex flex-col text-site-text font-body selection:bg-site-primary selection:text-white relative bg-site-bg">
      <CursorGlow />

      <Header 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />

      <ParticlesBackground />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-[66px] relative z-10">
          <div className="animate-in fade-in duration-500">
            {children}
          </div>
      </main>

      <Footer />
    </div>
  )
}
