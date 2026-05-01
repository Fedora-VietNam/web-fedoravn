"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { docsArticles, forumTopics } from "@/storage/data"
import { GlobalSearchTrigger } from "./global-search-parts/global-search-trigger"
import { GlobalSearchDropdown } from "./global-search-parts/global-search-dropdown"

/**
 * @brief A search component that provides real-time results for docs and forum topics.
 * 
 * @param props.mobile - Whether the search is being rendered in a mobile view
 * @returns A search input with a results dropdown.
 */
export function GlobalSearch({ mobile }: { mobile?: boolean }) {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    setIsOpen(false)
    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <div className={`relative z-50 ${mobile ? 'w-full block' : 'hidden lg:flex'}`} ref={wrapperRef}>
      <GlobalSearchTrigger 
        query={query}
        setQuery={setQuery}
        setIsOpen={setIsOpen}
        handleSearch={handleSearch}
        mobile={mobile}
      />
      <GlobalSearchDropdown 
        isOpen={isOpen}
        query={query}
        filteredDocs={filteredDocs}
        filteredForum={filteredForum}
        setIsOpen={setIsOpen}
        handleSearch={handleSearch}
      />
    </div>
  )
}
