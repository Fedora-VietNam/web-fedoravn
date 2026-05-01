import { motion } from "motion/react"
import { User } from "lucide-react"

/**
 * @brief Represents the properties for the CommentItem component.
 */
interface CommentItemProps {
  /** The name of the comment author. */
  author: string
  /** The relative or absolute time when the comment was posted. */
  time: string
  /** The content of the comment. */
  text: string
  /** The index of the comment in the list, used for animation delay. */
  index: number
}

/**
 * @brief Renders an individual forum comment item.
 * 
 * @param props The properties of the comment item.
 * @returns A JSX element representing a comment item.
 */
function CommentItem({ author, time, text, index }: CommentItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="glass-card p-6 ml-4 md:ml-12 border-white/5"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
          <User size={14} className="text-site-muted" />
        </div>
        <div>
          <span className="text-white font-bold text-sm">{author}</span>
          <span className="text-site-muted text-xs block">{time}</span>
        </div>
      </div>
      <p className="text-site-muted font-body leading-relaxed text-sm">
        {text}
      </p>
    </motion.div>
  )
}

/**
 * @brief Renders a list of comments for a forum post.
 *
 * @param props.comments - Array of comment objects
 * @returns JSX element representing the list of comments
 */
export function ForumPostComments({ comments }: { comments: Array<{ author: string, time: string, text: string }> }) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white px-4">Phản hồi</h3>
      <div className="space-y-4">
        {comments.map((comment, idx) => (
          <CommentItem
            key={idx}
            index={idx}
            author={comment.author}
            time={comment.time}
            text={comment.text}
          />
        ))}
      </div>
    </div>
  )
}
