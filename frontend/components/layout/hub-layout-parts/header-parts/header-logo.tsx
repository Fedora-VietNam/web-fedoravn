"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

interface HeaderLogoProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
}

export function HeaderLogo({ isMobileMenuOpen, setIsMobileMenuOpen }: HeaderLogoProps) {
  const pathname = usePathname()

  return (
    <>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="p-2 md:hidden text-site-text"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <Link 
        href="/" 
        onClick={(e) => {
          if (pathname === '/') {
            e.preventDefault();
            window.location.reload();
          }
        }}
        className="flex items-center gap-2 group"
      >
        <span className="text-lg font-black tracking-widest font-sans uppercase bg-gradient-to-r from-site-primary to-blue-400 bg-clip-text text-transparent transition-all group-hover:from-blue-400 group-hover:to-site-primary">
          FEDORA.VN
        </span>
      </Link>
    </>
  )
}
