"use client"

import { useState, useEffect, useRef } from "react"
import { Search, Book, MessageSquare, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "motion/react"
import { docsArticles, forumTopics } from "@/lib/data"
import Link from "next/link"

export function GlobalSearch({ mobile }: { mobile?: boolean }) {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const t = useTranslations()
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const filteredDocs = docsArticles.filter(doc => 
    doc.title.toLowerCase().includes(query.toLowerCase()) || 
    doc.category.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 3)

  const filteredForum = forumTopics.filter(topic => 
    topic.title.toLowerCase().includes(query.toLowerCase()) ||
    topic.category.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 3)

  const hasResults = filteredDocs.length > 0 || filteredForum.length > 0

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    setIsOpen(false)
    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <div className={`relative z-50 ${mobile ? 'w-full block' : 'hidden lg:flex'}`} ref={wrapperRef}>
      <form onSubmit={handleSearch} className="relative items-center flex w-full">
        <Search className="absolute left-3 text-site-muted" size={16} />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={t("hub-search-placeholder")}
          className={`bg-[#111a34] border border-[#3a528e] rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:ring-1 focus:ring-site-primary outline-none transition-all ${mobile ? 'w-full' : 'w-48 xl:w-64'}`}
        />
      </form>

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
    </div>
  )
}
