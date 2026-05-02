"use client"

import { Plus } from "lucide-react"
import { useTranslations } from "next-intl"

interface ForumHeaderProps {
  onNewTopic: () => void
}

export function ForumHeader({ onNewTopic }: ForumHeaderProps) {
  const t = useTranslations()

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">
          {t("menu-community")}
        </h1>
        <p className="text-site-muted font-body">
          {t("community-desc")}
        </p>
      </div>
      <button 
        onClick={onNewTopic}
        className="flex items-center justify-center gap-2 btn-site-primary px-8 py-4 text-lg shadow-lg shadow-site-primary/20"
      >
        <Plus size={20} />
        {t("forum-new-topic")}
      </button>
    </div>
  )
}
