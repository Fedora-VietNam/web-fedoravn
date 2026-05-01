"use client"

import { useParams, useRouter } from "next/navigation"
import { motion } from "motion/react"
import { ArrowLeft, MessageSquare, User, Calendar, Send } from "lucide-react"

export default function TopicPage() {
  const { id } = useParams()
  const router = useRouter()

  const comments = [
    {
      author: "fedora_admin",
      text: "Chào mừng bạn đến với cộng đồng Fedora Việt Nam! Chúng tôi sẽ phản hồi thắc mắc của bạn sớm nhất có thể.",
      time: "1h ago",
    },
    {
      author: "linux_expert",
      text: "Tôi cũng gặp vấn đề tương tự. Bạn hãy thử kiểm tra lại driver trong RPM Fusion xem sao.",
      time: "30m ago",
    },
  ]

  return (
    <div className="container mx-auto max-w-5xl space-y-12 px-6 py-12">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => router.back()}
        className="group mb-8 flex items-center gap-2 text-site-text transition-colors hover:text-site-primary"
      >
        <ArrowLeft
          size={18}
          className="transition-transform group-hover:-translate-x-1"
        />
        Quay lại thảo luận
      </motion.button>

      <div className="space-y-8">
        {/* Main Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card space-y-8 border-site-primary/20 bg-site-primary/5 p-10 transition-colors"
        >
          <div className="flex items-center gap-4 text-xs font-black tracking-widest text-site-primary uppercase transition-colors">
            <span>Thảo luận #{id}</span>
          </div>
          <h1 className="text-3xl font-bold text-site-text transition-colors md:text-4xl">
            Tiêu đề thảo luận đang tải...
          </h1>
          <div className="flex flex-wrap items-center gap-6 border-b border-site-line pb-8 text-sm text-site-text transition-colors">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span className="font-bold text-site-text transition-colors">
                User
              </span>
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
          <p className="font-body text-lg leading-relaxed text-site-text transition-colors">
            Nội dung chi tiết của câu hỏi hoặc bài đăng thảo luận sẽ được hiển
            thị tại đây. Đây là không gian để cộng đồng cùng nhau giải đáp thắc
            mắc.
          </p>
        </motion.div>

        {/* Comments Section */}
        <div className="space-y-6">
          <h3 className="px-4 text-xl font-bold text-site-text transition-colors">
            Phản hồi
          </h3>
          <div className="space-y-4">
            {comments.map((comment, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card ml-4 border-site-line p-6 transition-colors md:ml-12"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-site-bg-soft transition-colors">
                    <User
                      size={14}
                      className="text-site-text transition-colors"
                    />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-site-text transition-colors">
                      {comment.author}
                    </span>
                    <span className="block text-xs text-site-text transition-colors">
                      {comment.time}
                    </span>
                  </div>
                </div>
                <p className="font-body text-sm leading-relaxed text-site-text transition-colors">
                  {comment.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reply Form */}
        <div className="pt-8">
          <div className="glass-card space-y-4 p-6 transition-colors">
            <h4 className="font-bold text-site-text transition-colors">
              Viết phản hồi của bạn
            </h4>
            <textarea
              className="h-32 w-full rounded-xl border border-site-line bg-site-bg-soft p-4 text-sm text-site-text transition-colors outline-none focus:ring-1 focus:ring-site-primary"
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
