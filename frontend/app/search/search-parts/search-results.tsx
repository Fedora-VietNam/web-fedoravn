"use client"

import * as React from "react"
import Link from "next/link"
import { SearchX } from "lucide-react"
import { SearchResultsDocs } from "./search-results-docs"
import { SearchResultsForum } from "./search-results-forum"

type SearchResultProps = {
  query: string
  filteredDocs: Array<{ id: string; title: string; category: string }>
  filteredForum: Array<{ id: string; title: string; category: string; time: string }>
  hasResults: boolean
}

/**
 * @brief Renders the search results combining both docs and forum results.
 *
 * @param props.query - The search query string
 * @param props.filteredDocs - Docs matching the query
 * @param props.filteredForum - Forum posts matching the query
 * @param props.hasResults - Boolean indicating if any results exist
 * @returns JSX element representing the search results view
 */
export function SearchResults({ query, filteredDocs, filteredForum, hasResults }: SearchResultProps) {
  if (!hasResults && query) {
    return (
      <div className="glass-card py-24 text-center space-y-6">
        <div className="w-20 h-20 bg-site-primary/10 rounded-full flex items-center justify-center mx-auto text-site-primary">
          <SearchX size={40} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Không tìm thấy!</h2>
          <p className="text-site-muted font-body">
            Rất tiếc, chúng tôi không tìm thấy kết quả nào phù hợp với &quot;{query}&quot;.<br/>
            Vui lòng thử lại với một từ khóa khác.
          </p>
        </div>
        <Link href="/" className="inline-flex btn-site-ghost mt-4">
          Quay lại Trang chủ
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <SearchResultsDocs filteredDocs={filteredDocs} />
      <SearchResultsForum filteredForum={filteredForum} />
    </div>
  )
}
