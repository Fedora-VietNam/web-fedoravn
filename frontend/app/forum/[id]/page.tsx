"use client"

import { useParams, useRouter } from "next/navigation"
import { motion } from "motion/react"
import { ArrowLeft, MessageSquare, User, Calendar, Send } from "lucide-react"

export default function TopicPage() {
  const { id } = useParams()
  const router = useRouter()

  const comments = [
    { author: "fedora_admin", text: "Chào mừng bạn đến với cộng đồng Fedora Việt Nam! Chúng tôi sẽ phản hồi thắc mắc của bạn sớm nhất có thể.", time: "1h ago" },
    { author: "linux_expert", text: "Tôi cũng gặp vấn đề tương tự. Bạn hãy thử kiểm tra lại driver trong RPM Fusion xem sao.", time: "30m ago" },
  ]

  return (
    <div className="container mx-auto px-6 py-12 max-w-5xl space-y-12">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => router.back()}
        className="flex items-center gap-2 text-site-muted hover:text-white mb-8 transition-colors group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        Quay lại thảo luận
      </motion.button>

      <div className="space-y-8">
        {/* Main Post */}
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
              <span>{comments.length} phản hồi</span>
            </div>
          </div>
          <p className="text-site-muted text-lg font-body leading-relaxed">
            Nội dung chi tiết của câu hỏi hoặc bài đăng thảo luận sẽ được hiển thị tại đây. Đây là không gian để cộng đồng cùng nhau giải đáp thắc mắc.
          </p>
        </motion.div>

        {/* Comments Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white px-4">Phản hồi</h3>
          <div className="space-y-4">
            {comments.map((comment, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 ml-4 md:ml-12 border-white/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <User size={14} className="text-site-muted" />
                  </div>
                  <div>
                    <span className="text-white font-bold text-sm">{comment.author}</span>
                    <span className="text-site-muted text-xs block">{comment.time}</span>
                  </div>
                </div>
                <p className="text-site-muted font-body leading-relaxed text-sm">
                  {comment.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reply Form */}
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
      </div>
    </div>
  )
}
