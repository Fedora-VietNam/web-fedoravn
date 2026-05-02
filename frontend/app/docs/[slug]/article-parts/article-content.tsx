import { motion } from "motion/react"

/**
 * @brief Renders the main content of a documentation article.
 *
 * @param props.decodedSlug - The decoded slug of the article
 * @returns JSX element representing the article content
 */
export function ArticleContent({ decodedSlug }: { decodedSlug: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="prose prose-invert max-w-none font-body leading-relaxed space-y-6 text-site-muted text-lg"
    >
      <p>
        Đây là nội dung chi tiết của bài viết <strong>{decodedSlug}</strong>. Hiện tại tính năng hiển thị nội dung động đang được tích hợp.
      </p>
      <div className="glass-card p-8 bg-site-primary/5 border-site-primary/20">
        <h3 className="text-white font-bold text-xl mb-4">Tóm tắt</h3>
        <p>Bài viết này hướng dẫn các bước cơ bản để bạn có thể làm quen với chủ đề này trên Fedora Linux.</p>
      </div>
      <p>
        Trong thời gian tới, các bài viết sẽ được biên soạn chi tiết bởi Core Team Fedora Việt Nam. Cảm ơn bạn đã quan tâm theo dõi!
      </p>
    </motion.div>
  )
}
