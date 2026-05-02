"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"

export function HeaderNav() {
  const t = useTranslations()
  const pathname = usePathname()

  const topNav = [
    { name: t("menu-home"), href: "/" },
    { name: t("menu-docs"), href: "/docs" },
    { name: t("menu-community"), href: "/forum" },
  ]

  return (
    <nav className="hidden md:flex items-center gap-6">
      {topNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={(e) => {
            if (item.href === pathname) {
              e.preventDefault();
              window.location.reload();
            }
          }}
          className="text-[14px] font-bold text-site-muted hover:text-white transition-colors duration-200"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
