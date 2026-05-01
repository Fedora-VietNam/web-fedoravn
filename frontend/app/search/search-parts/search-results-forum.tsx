import * as React from "react"
import Link from "next/link"
import { MessageSquare, ChevronRight } from "lucide-react"

/**
 * @brief Renders the forum results for search.
 *
 * @param props.filteredForum - The list of filtered forum topics
 * @returns JSX element representing the forum search results
 */
export function SearchResultsForum({ filteredForum }: { filteredForum: Array<{ id: string; title: string; category: string; time: string }> }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-4">
        <MessageSquare className="text-[#39c77a]" size={24} />
        Thảo luận ({filteredForum.length})
      </h2>

      {filteredForum.length > 0 ? (
        <div className="space-y-4">
          {filteredForum.map(topic => (
            <Link 
              key={topic.id} 
              href={`/forum/${topic.id}`}
              className="block glass-card hover:border-[#39c77a]/50 group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#39c77a] transition-colors">{topic.title}</h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-site-muted font-body">
                    <span className="uppercase tracking-wider font-bold bg-white/5 px-2 py-1 rounded">
                      {topic.category}
                    </span>
                    <span>{topic.time}</span>
                  </div>
                </div>
                <ChevronRight className="text-site-muted group-hover:text-[#39c77a] group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-site-muted italic text-sm">Không có cuộc thảo luận nào phù hợp.</p>
      )}
    </div>
  )
}
