"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { ForumHeader } from "./forum-content-parts/forum-header"
import { ForumStats } from "./forum-content-parts/forum-stats"
import { ForumFilters } from "./forum-content-parts/forum-filters"
import { ForumPostList } from "./forum-content-parts/forum-post-list"
import { forumTopics } from "@/storage/data"

/**
 * @brief A component that renders the forum/community page content including stats and topics.
 * 
 * @returns A structured view of community discussions and statistics.
 */
export function ForumContent() {
  const { data: session } = useSession()
  const router = useRouter()

  const handleNewTopic = () => {
    if (!session) {
      router.push("/login")
    } else {
      alert("Tính năng tạo thảo luận đang được phát triển!")
    }
  }

  return (
    <div className="space-y-12">
      <ForumHeader onNewTopic={handleNewTopic} />
      <ForumStats />
      <ForumFilters />
      <ForumPostList topics={forumTopics} />
    </div>
  )
}
