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
  Info
} from "lucide-react"
import { motion } from "motion/react"

export function DocsContent() {
  const t = useTranslations()
  const { data: session } = useSession()
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState(t("docs-cat-getting-started"))

  const categories = [
    { name: t("docs-cat-getting-started"), icon: Book },
    { name: t("docs-cat-installation"), icon: Terminal },
    { name: t("docs-cat-system-setup"), icon: Settings },
    { name: t("docs-cat-development"), icon: Cpu },
    { name: t("docs-cat-troubleshooting"), icon: Info },
  ]

  const articles = [
    { id: "intro", title: "Introduction to Fedora Vietnam", category: t("docs-cat-getting-started") },
    { id: "usb", title: "Creating a Bootable USB", category: t("docs-cat-installation") },
    { id: "dual-boot", title: "Standard Dual Boot with Windows", category: t("docs-cat-installation") },
    { id: "input", title: "Configuring Vietnamese Input", category: t("docs-cat-system-setup") },
    { id: "docker", title: "Setting up Docker on Fedora", category: t("docs-cat-development") },
  ]

  const handleContribute = () => {
    if (!session) {
      router.push("/login")
    } else {
      alert("Tính năng soạn thảo đang được phát triển!")
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Sidebar */}
      <aside className="lg:col-span-3 space-y-8">
        <div className="space-y-4">
          <h3 className="text-white font-bold uppercase tracking-wider text-sm opacity-50 px-4">{t("docs-categories")}</h3>
          <nav className="space-y-1">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                  activeCategory === cat.name 
                    ? "bg-site-primary/10 text-site-primary border border-site-primary/20" 
                    : "text-site-muted hover:bg-white/5 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <cat.icon size={18} />
                  <span className="font-bold text-sm">{cat.name}</span>
                </div>
                {activeCategory === cat.name && <ChevronRight size={14} />}
              </button>
            ))}
          </nav>
        </div>

        <button 
          onClick={handleContribute}
          className="w-full btn-site-primary flex items-center justify-center gap-2 py-4 shadow-lg shadow-site-primary/20"
        >
          <Plus size={20} />
          {t("docs-contribute")}
        </button>
      </aside>

      {/* Main Content */}
      <main className="lg:col-span-9 space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold text-white">{activeCategory}</h1>
          <p className="text-site-muted font-body text-lg">
            {t("docs-explore")} {activeCategory}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles
            .filter(art => art.category === activeCategory)
            .map((art, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => router.push(`/docs/${art.id}`)}
                className="glass-card group cursor-pointer hover:border-site-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-site-muted group-hover:text-site-primary transition-colors">
                      <FileText size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-site-primary transition-colors">{art.title}</h3>
                    <p className="text-sm text-site-muted font-body">{t("docs-updated")}</p>
                  </div>
                  <ChevronRight className="text-site-muted group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </motion.div>
            ))}
          
          {articles.filter(art => art.category === activeCategory).length === 0 && (
            <div className="col-span-full py-20 text-center glass-card border-dashed">
              <p className="text-site-muted italic">{t("docs-empty")}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
