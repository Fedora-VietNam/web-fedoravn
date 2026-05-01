import { motion } from "motion/react"
import { MessageSquare, User, Calendar } from "lucide-react"

/**
 * @brief Renders the content of a forum post.
 *
 * @param props.id - The ID of the forum post
 * @param props.commentsLength - The number of comments on the post
 * @returns JSX element representing the forum post content
 */
export function ForumPostContent({ id, commentsLength }: { id: string; commentsLength: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-10 space-y-8 border-site-primary/20 bg-site-primary/5"
    >
      <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-site-primary">
        <span>Thảo luận #{id}</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-white">
        Tiêu đề thảo luận đang tải...
      </h1>
      <div className="flex flex-wrap items-center gap-6 text-site-muted text-sm border-b border-white/5 pb-8">
        <div className="flex items-center gap-2">
          <User size={16} />
          <span className="font-bold text-white/80">User</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>01 Tháng 5, 2026</span>
        </div>
        <div className="flex items-center gap-2">
          <MessageSquare size={16} />
          <span>{commentsLength} phản hồi</span>
        </div>
      </div>
      <p className="text-site-muted text-lg font-body leading-relaxed">
        Nội dung chi tiết của câu hỏi hoặc bài đăng thảo luận sẽ được hiển thị tại đây. Đây là không gian để cộng đồng cùng nhau giải đáp thắc mắc.
      </p>
    </motion.div>
  )
}
