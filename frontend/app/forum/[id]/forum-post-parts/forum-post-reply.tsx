import { Send } from "lucide-react"

/**
 * @brief Renders a form to reply to a forum post.
 *
 * @returns JSX element representing the reply form
 */
export function ForumPostReply() {
  return (
    <div className="pt-8">
      <div className="glass-card p-6 space-y-4">
        <h4 className="text-white font-bold">Viết phản hồi của bạn</h4>
        <textarea 
          className="w-full bg-[#0b1020] border border-white/10 rounded-xl p-4 text-white text-sm focus:ring-1 focus:ring-site-primary outline-none h-32"
          placeholder="Nhập nội dung phản hồi..."
        ></textarea>
        <div className="flex justify-end">
          <button className="btn-site-primary flex items-center gap-2 px-8 py-3">
            <Send size={18} />
            Gửi phản hồi
          </button>
        </div>
      </div>
    </div>
  )
}
