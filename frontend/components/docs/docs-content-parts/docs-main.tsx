"use client"

import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { ChevronRight, FileText } from "lucide-react"
import { motion } from "motion/react"

export interface Article {
  id: string
  title: string
  category: string
}

interface DocsMainProps {
  activeCategory: string
  articles: Article[]
}

export function DocsMain({ activeCategory, articles }: DocsMainProps) {
  const t = useTranslations()
  const router = useRouter()

  const filteredArticles = articles.filter(art => art.category === activeCategory)

  return (
    <main className="lg:col-span-9 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold text-white">{activeCategory}</h1>
        <p className="text-site-muted font-body text-lg">
          {t("docs-explore")} {activeCategory}.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredArticles.map((art, idx) => (
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
        
        {filteredArticles.length === 0 && (
          <div className="col-span-full py-20 text-center glass-card border-dashed">
            <p className="text-site-muted italic">{t("docs-empty")}</p>
          </div>
        )}
      </div>
    </main>
  )
}
