import * as React from "react"
import Link from "next/link"
import { Book, ChevronRight } from "lucide-react"

/**
 * @brief Renders the documentation results for search.
 *
 * @param props.filteredDocs - The list of filtered documentation articles
 * @returns JSX element representing the docs search results
 */
export function SearchResultsDocs({ filteredDocs }: { filteredDocs: Array<{ id: string; title: string; category: string }> }) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-4">
        <Book className="text-site-primary" size={24} />
        Tài liệu ({filteredDocs.length})
      </h2>
      
      {filteredDocs.length > 0 ? (
        <div className="space-y-4">
          {filteredDocs.map(doc => (
            <Link 
              key={doc.id} 
              href={`/docs/${doc.id}`}
              className="block glass-card hover:border-site-primary/50 group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-site-primary transition-colors">{doc.title}</h3>
                  <span className="text-xs text-site-muted uppercase tracking-wider font-bold mt-2 inline-block bg-white/5 px-2 py-1 rounded">
                    {doc.category}
                  </span>
                </div>
                <ChevronRight className="text-site-muted group-hover:text-site-primary group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-site-muted italic text-sm">Không có tài liệu nào phù hợp.</p>
      )}
    </div>
  )
}
