"use client"

import { motion } from "motion/react"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"

export interface Topic {
  id: string
  title: string
  author: string
  time: string
  category: string
  replies: number
  views: string | number
  avatar: string
}

interface ForumPostCardProps {
  topic: Topic
  index: number
}

export function ForumPostCard({ topic, index }: ForumPostCardProps) {
  const t = useTranslations()
  const router = useRouter()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onClick={() => router.push(`/forum/${topic.id}`)}
      className="flex items-center gap-6 p-6 hover:bg-white/5 transition-colors cursor-pointer group"
    >
      <img
        src={topic.avatar}
        alt="Avatar"
        className="w-12 h-12 rounded-full border-2 border-white/10 group-hover:scale-110 transition-transform"
      />
      <div className="flex-1 min-w-0">
        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-site-primary transition-colors truncate">
          {topic.title}
        </h3>
        <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mt-1">
          <span className="px-2 py-0.5 bg-site-primary/10 text-site-primary text-[10px] font-black rounded uppercase tracking-wider">
            {topic.category}
          </span>
          <span className="text-xs text-site-muted flex items-center gap-1">
            {t("forum-started-by")}{" "}
            <span className="font-bold text-white/80">
              {topic.author}
            </span>{" "}
            • {topic.time}
          </span>
        </div>
      </div>
      <div className="hidden sm:flex items-center gap-8 text-center border-l border-white/10 pl-8">
        <div>
          <p className="text-sm font-bold text-white">
            {topic.replies}
          </p>
          <p className="text-[10px] uppercase font-black text-site-muted">
            {t("forum-replies")}
          </p>
        </div>
        <div>
          <p className="text-sm font-bold text-white">
            {topic.views}
          </p>
          <p className="text-[10px] uppercase font-black text-site-muted">
            {t("forum-views")}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
