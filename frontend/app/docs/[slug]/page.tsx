"use client"

import { useParams, useRouter, notFound } from "next/navigation"
import { motion } from "motion/react"
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react"

export default function ArticlePage() {
  const { slug } = useParams()
  const router = useRouter()

  const decodedSlug = slug ? decodeURIComponent(slug.toString()) : ""

  const validSlugs = [
    "download", "guide", "install", "setting", "troubleshoot",
    "1)-chuẩn-bị-cài-đặt", "2)-cấu-hình-sau-cài", "3)-môi-trường-làm-việc",
    "cài-fedora-dual-boot-với-windows", "fix-lỗi-wi-fi,-bluetooth,-âm-thanh",
    "thiết-lập-môi-trường-dev-chuẩn", "tối-ưu-hiệu-năng-desktop-fedora",
    "intro", "usb", "dual-boot", "input", "docker"
  ]

  if (!validSlugs.includes(decodedSlug)) {
    notFound()
  }

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => router.back()}
        className="flex items-center gap-2 text-site-muted hover:text-white mb-8 transition-colors group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        Quay lại tài liệu
      </motion.button>

      <article className="space-y-8">
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
      </article>
    </div>
  )
}
