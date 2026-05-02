import { motion } from "motion/react"
import { Calendar, User, Share2 } from "lucide-react"

/**
 * @brief Renders the header section of a documentation article.
 *
 * @param props.decodedSlug - The decoded slug of the article
 * @returns JSX element representing the article header
 */
export function ArticleHeader({ decodedSlug }: { decodedSlug: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-site-primary">
        <span>Tài liệu</span>
        <span className="w-1 h-1 rounded-full bg-white/20"></span>
        <span>Hạng mục</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-black text-white leading-tight capitalize">
        {decodedSlug.replace(/-/g, ' ')}
      </h1>
      <div className="flex flex-wrap items-center gap-6 pt-4 text-site-muted text-sm border-b border-white/5 pb-8">
        <div className="flex items-center gap-2">
          <User size={16} />
          <span>Core Team</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>01 Tháng 5, 2026</span>
        </div>
        <button className="flex items-center gap-2 hover:text-white transition-colors ml-auto">
          <Share2 size={16} />
          <span>Chia sẻ</span>
        </button>
      </div>
    </motion.div>
  )
}
