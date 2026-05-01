"use client"

import React from "react"
import { HeaderLogo } from "./header-parts/header-logo"
import { HeaderNav } from "./header-parts/header-nav"
import { HeaderActions } from "./header-parts/header-actions"
import { HeaderMobileMenu } from "./header-parts/header-mobile-menu"

interface HeaderProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
}

/**
 * @brief Renders the application's top navigation header.
 * 
 * Handles desktop and mobile navigation, user session status, and theme/language toggles.
 * 
 * @param props.isMobileMenuOpen - Whether the mobile menu is currently visible
 * @param props.setIsMobileMenuOpen - Callback to toggle mobile menu visibility
 * @returns A JSX element representing the header.
 */
export function Header({ isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) {
  return (
    <header className="nav fixed top-0 w-full z-50 bg-[#0b1020dd] backdrop-blur-md border-b border-[#24345f]">
      <div className="max-w-7xl mx-auto px-6 h-[66px] flex items-center justify-between gap-5">
        <div className="flex items-center gap-8">
          <HeaderLogo 
            isMobileMenuOpen={isMobileMenuOpen} 
            setIsMobileMenuOpen={setIsMobileMenuOpen} 
          />
          <HeaderNav />
        </div>
        <HeaderActions />
      </div>

      {/* MOBILE MENU */}
      <HeaderMobileMenu 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
    </header>
  )
}
