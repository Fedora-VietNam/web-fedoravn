"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import {
  Book,
  ChevronRight,
  FileText,
  Plus,
  Terminal,
  Settings,
  Cpu,
  Info,
} from "lucide-react"
import { motion } from "motion/react"

export function DocsContent() {
  const t = useTranslations()
  const { data: session } = useSession()
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState(
    t("docs-cat-getting-started")
  )

  const categories = [
    { name: t("docs-cat-getting-started"), icon: Book },
    { name: t("docs-cat-installation"), icon: Terminal },
    { name: t("docs-cat-system-setup"), icon: Settings },
    { name: t("docs-cat-development"), icon: Cpu },
    { name: t("docs-cat-troubleshooting"), icon: Info },
  ]

  const articles = [
    {
      id: "intro",
      title: "Introduction to Fedora Vietnam",
      category: t("docs-cat-getting-started"),
    },
    {
      id: "usb",
      title: "Creating a Bootable USB",
      category: t("docs-cat-installation"),
    },
    {
      id: "dual-boot",
      title: "Standard Dual Boot with Windows",
      category: t("docs-cat-installation"),
    },
    {
      id: "input",
      title: "Configuring Vietnamese Input",
      category: t("docs-cat-system-setup"),
    },
    {
      id: "docker",
      title: "Setting up Docker on Fedora",
      category: t("docs-cat-development"),
    },
  ]

  const handleContribute = () => {
    if (!session) {
      router.push("/login")
    } else {
      alert("Tính năng soạn thảo đang được phát triển!")
    }
  }

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
      {/* Sidebar */}
      <aside className="space-y-8 lg:col-span-3">
        <div className="space-y-4">
          <h3 className="px-4 text-sm font-bold tracking-wider text-site-text uppercase opacity-50 transition-colors">
            {t("docs-categories")}
          </h3>
          <nav className="space-y-1">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 transition-all ${
                  activeCategory === cat.name
                    ? "border border-site-primary/20 bg-site-primary/10 text-site-primary transition-colors"
                    : "text-site-text transition-colors hover:bg-site-bg-soft hover:text-site-text"
                }`}
              >
                <div className="flex items-center gap-3">
                  <cat.icon size={18} />
                  <span className="text-sm font-bold">{cat.name}</span>
                </div>
                {activeCategory === cat.name && <ChevronRight size={14} />}
              </button>
            ))}
          </nav>
        </div>

        <button
          onClick={handleContribute}
          className="btn-site-primary flex w-full items-center justify-center gap-2 py-4 shadow-lg shadow-site-primary/20"
        >
          <Plus size={20} />
          {t("docs-contribute")}
        </button>
      </aside>

      {/* Main Content */}
      <main className="space-y-12 lg:col-span-9">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold text-site-text transition-colors">
            {activeCategory}
          </h1>
          <p className="font-body text-lg text-site-text transition-colors">
            {t("docs-explore")} {activeCategory}.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {articles
            .filter((art) => art.category === activeCategory)
            .map((art, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => router.push(`/docs/${art.id}`)}
                className="glass-card group cursor-pointer transition-colors hover:border-site-primary/50"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-site-bg-soft text-site-text transition-colors group-hover:text-site-primary">
                      <FileText size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-site-text transition-colors group-hover:text-site-primary">
                      {art.title}
                    </h3>
                    <p className="font-body text-sm text-site-text transition-colors">
                      {t("docs-updated")}
                    </p>
                  </div>
                  <ChevronRight
                    className="text-site-text transition-colors transition-transform group-hover:translate-x-1"
                    size={20}
                  />
                </div>
              </motion.div>
            ))}

          {articles.filter((art) => art.category === activeCategory).length ===
            0 && (
            <div className="glass-card col-span-full border-dashed py-20 text-center transition-colors">
              <p className="text-site-text italic transition-colors">
                {t("docs-empty")}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
