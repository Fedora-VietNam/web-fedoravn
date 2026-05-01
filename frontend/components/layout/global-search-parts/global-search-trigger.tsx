"use client"

import { Search } from "lucide-react"
import { useTranslations } from "next-intl"

interface GlobalSearchTriggerProps {
  query: string
  setQuery: (val: string) => void
  setIsOpen: (val: boolean) => void
  handleSearch: (e: React.FormEvent) => void
  mobile?: boolean
}

export function GlobalSearchTrigger({
  query,
  setQuery,
  setIsOpen,
  handleSearch,
  mobile
}: GlobalSearchTriggerProps) {
  const t = useTranslations()

  return (
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
  )
}
