"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { 
  Book, 
  Terminal,
  Settings,
  Cpu,
  Info
} from "lucide-react"

import { DocsSidebar, Category } from "./docs-content-parts/docs-sidebar"
import { DocsMain, Article } from "./docs-content-parts/docs-main"

/**
 * @brief A component that renders the documentation page content with categories and article lists.
 * 
 * @returns A structured documentation view with a sidebar and main content area.
 */
export function DocsContent() {
  const t = useTranslations()
  const [activeCategory, setActiveCategory] = useState(t("docs-cat-getting-started"))

  const categories: Category[] = [
    { name: t("docs-cat-getting-started"), icon: Book },
    { name: t("docs-cat-installation"), icon: Terminal },
    { name: t("docs-cat-system-setup"), icon: Settings },
    { name: t("docs-cat-development"), icon: Cpu },
    { name: t("docs-cat-troubleshooting"), icon: Info },
  ]

  const articles: Article[] = [
    { id: "intro", title: "Introduction to Fedora Vietnam", category: t("docs-cat-getting-started") },
    { id: "usb", title: "Creating a Bootable USB", category: t("docs-cat-installation") },
    { id: "dual-boot", title: "Standard Dual Boot with Windows", category: t("docs-cat-installation") },
    { id: "input", title: "Configuring Vietnamese Input", category: t("docs-cat-system-setup") },
    { id: "docker", title: "Setting up Docker on Fedora", category: t("docs-cat-development") },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <DocsSidebar 
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <DocsMain 
        activeCategory={activeCategory}
        articles={articles}
      />
    </div>
  )
}
