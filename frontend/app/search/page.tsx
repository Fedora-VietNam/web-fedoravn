import * as React from "react"
import { docsArticles, forumTopics } from "@/storage/data"
import { SearchHeader } from "./search-parts/search-header"
import { SearchResults } from "./search-parts/search-results"

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const params = await searchParams
  const query = params.q || ""
  
  const filteredDocs = docsArticles.filter(doc => 
    doc.title.toLowerCase().includes(query.toLowerCase()) || 
    doc.category.toLowerCase().includes(query.toLowerCase())
  )

  const filteredForum = forumTopics.filter(topic => 
    topic.title.toLowerCase().includes(query.toLowerCase()) ||
    topic.category.toLowerCase().includes(query.toLowerCase())
  )

  const hasResults = filteredDocs.length > 0 || filteredForum.length > 0

  return (
    <div className="container mx-auto px-6 py-12 max-w-5xl">
      <SearchHeader query={query} />
      {(!hasResults && !query) ? null : (
        <SearchResults 
          query={query}
          filteredDocs={filteredDocs}
          filteredForum={filteredForum}
          hasResults={hasResults}
        />
      )}
    </div>
  )
}
