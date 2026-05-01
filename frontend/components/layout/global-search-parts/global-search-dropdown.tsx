"use client"

import { Book, MessageSquare, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"

interface SearchResultItem {
  id: string
  title: string
}

interface GlobalSearchDropdownProps {
  isOpen: boolean
  query: string
  filteredDocs: SearchResultItem[]
  filteredForum: SearchResultItem[]
  setIsOpen: (val: boolean) => void
  handleSearch: (e: React.FormEvent) => void
}

export function GlobalSearchDropdown({
  isOpen,
  query,
  filteredDocs,
  filteredForum,
  setIsOpen,
  handleSearch
}: GlobalSearchDropdownProps) {
  const hasResults = filteredDocs.length > 0 || filteredForum.length > 0

  return (
    <AnimatePresence>
      {isOpen && query.trim().length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute top-full mt-2 w-full min-w-[300px] right-0 bg-[#0b1020] border border-[#24345f] rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="max-h-[400px] overflow-y-auto p-2">
            {hasResults ? (
              <div className="space-y-4">
                {filteredDocs.length > 0 && (
                  <div>
                    <h4 className="text-[10px] font-bold text-site-muted uppercase tracking-wider px-2 py-1 flex items-center gap-2">
                      <Book size={12} /> Tài liệu (Docs)
                    </h4>
                    <ul className="mt-1 space-y-1">
                      {filteredDocs.map(doc => (
                        <li key={doc.id}>
                          <Link 
                            href={`/docs/${doc.id}`}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-sm text-white hover:bg-site-primary/20 hover:text-site-primary rounded-lg transition-colors truncate"
                          >
                            {doc.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {filteredForum.length > 0 && (
                  <div>
                    <h4 className="text-[10px] font-bold text-site-muted uppercase tracking-wider px-2 py-1 flex items-center gap-2">
                      <MessageSquare size={12} /> Thảo luận (Forum)
                    </h4>
                    <ul className="mt-1 space-y-1">
                      {filteredForum.map(topic => (
                        <li key={topic.id}>
                          <Link 
                            href={`/forum/${topic.id}`}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-sm text-white hover:bg-site-primary/20 hover:text-site-primary rounded-lg transition-colors truncate"
                          >
                            {topic.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-4 text-center text-sm text-site-muted">
                Không tìm thấy kết quả nào.
              </div>
            )}
          </div>

          <div className="bg-white/5 p-2 border-t border-white/5">
            <button 
              onClick={handleSearch}
              className="w-full py-1.5 flex items-center justify-center gap-2 text-xs font-bold text-site-primary hover:text-white transition-colors"
            >
              Xem tất cả kết quả <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
