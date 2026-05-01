"use client"

import { useTranslations } from "next-intl"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { ChevronRight, Plus, LucideIcon } from "lucide-react"

export interface Category {
  name: string
  icon: LucideIcon
}

interface DocsSidebarProps {
  categories: Category[]
  activeCategory: string
  setActiveCategory: (category: string) => void
}

export function DocsSidebar({ categories, activeCategory, setActiveCategory }: DocsSidebarProps) {
  const t = useTranslations()
  const { data: session } = useSession()
  const router = useRouter()

  const handleContribute = () => {
    if (!session) {
      router.push("/login")
    } else {
      alert("Tính năng soạn thảo đang được phát triển!")
    }
  }

  return (
    <aside className="lg:col-span-3 space-y-8">
      <div className="space-y-4">
        <h3 className="text-white font-bold uppercase tracking-wider text-sm opacity-50 px-4">
          {t("docs-categories")}
        </h3>
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
  )
}
