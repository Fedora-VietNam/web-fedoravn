"use client"

import { useParams, useRouter, notFound } from "next/navigation"
import { motion } from "motion/react"
import { ArrowLeft } from "lucide-react"
import { validArticleSlugs } from "@/storage/data"
import { ArticleHeader } from "./article-parts/article-header"
import { ArticleContent } from "./article-parts/article-content"

export default function ArticlePage() {
  const { slug } = useParams()
  const router = useRouter()

  const decodedSlug = slug ? decodeURIComponent(slug.toString()) : ""

  if (!validArticleSlugs.includes(decodedSlug)) {
    notFound()
  }

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => router.back()}
        className="flex items-center gap-2 text-site-muted hover:text-white mb-8 transition-colors group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        Quay lại tài liệu
      </motion.button>

      <article className="space-y-8">
        <ArticleHeader decodedSlug={decodedSlug} />
        <ArticleContent decodedSlug={decodedSlug} />
      </article>
    </div>
  )
}
