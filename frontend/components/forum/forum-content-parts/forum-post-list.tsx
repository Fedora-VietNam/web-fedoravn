"use client"

import { Filter } from "lucide-react"
import { useTranslations } from "next-intl"
import { Topic, ForumPostCard } from "./forum-post-card"

interface ForumPostListProps {
  topics: Topic[]
}

export function ForumPostList({ topics }: ForumPostListProps) {
  const t = useTranslations()

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-2xl font-bold text-white">
          {t("forum-recent")}
        </h2>
        <button className="flex items-center gap-2 text-site-muted font-bold text-sm hover:text-site-primary transition-colors">
          <Filter size={16} /> {t("forum-filters")}
        </button>
      </div>

      <div className="glass-card divide-y divide-white/5 !p-0 overflow-hidden">
        {topics.map((topic, idx) => (
          <ForumPostCard key={topic.id} topic={topic} index={idx} />
        ))}
      </div>

      <div className="flex justify-center pt-4">
        <button className="btn-site-ghost px-8 py-3 text-sm">
          {t("forum-load-more")}
        </button>
      </div>
    </section>
  )
}
