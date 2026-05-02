"use client"

import { useParams, useRouter } from "next/navigation"
import { motion } from "motion/react"
import { ArrowLeft } from "lucide-react"
import { forumComments } from "@/storage/data"
import { ForumPostContent } from "./forum-post-parts/forum-post-content"
import { ForumPostComments } from "./forum-post-parts/forum-post-comments"
import { ForumPostReply } from "./forum-post-parts/forum-post-reply"

export default function TopicPage() {
  const { id } = useParams()
  const router = useRouter()

  return (
    <div className="container mx-auto px-6 py-12 max-w-5xl space-y-12">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => router.back()}
        className="flex items-center gap-2 text-site-muted hover:text-white mb-8 transition-colors group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        Quay lại thảo luận
      </motion.button>

      <div className="space-y-8">
        <ForumPostContent id={id as string} commentsLength={forumComments.length} />
        <ForumPostComments comments={forumComments} />
        <ForumPostReply />
      </div>
    </div>
  )
}
