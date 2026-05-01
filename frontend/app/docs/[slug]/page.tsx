"use client"

import { useParams, useRouter, notFound } from "next/navigation"
import { motion } from "motion/react"
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react"

export default function ArticlePage() {
  const { slug } = useParams()
  const router = useRouter()

  const decodedSlug = slug ? decodeURIComponent(slug.toString()) : ""

  const validSlugs = [
    "download",
    "guide",
    "install",
    "setting",
    "troubleshoot",
    "1)-chuẩn-bị-cài-đặt",
    "2)-cấu-hình-sau-cài",
    "3)-môi-trường-làm-việc",
    "cài-fedora-dual-boot-với-windows",
    "fix-lỗi-wi-fi,-bluetooth,-âm-thanh",
    "thiết-lập-môi-trường-dev-chuẩn",
    "tối-ưu-hiệu-năng-desktop-fedora",
    "intro",
    "usb",
    "dual-boot",
    "input",
    "docker",
  ]

  if (!validSlugs.includes(decodedSlug)) {
    notFound()
  }

  return (
    <div className="container mx-auto max-w-4xl px-6 py-12">
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
        Quay lại tài liệu
      </motion.button>

      <article className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-4 text-xs font-black tracking-widest text-site-primary uppercase transition-colors">
            <span>Tài liệu</span>
            <span className="h-1 w-1 rounded-full bg-site-bg-soft transition-colors"></span>
            <span>Hạng mục</span>
          </div>
          <h1 className="text-4xl leading-tight font-black text-site-text capitalize transition-colors md:text-5xl">
            {decodedSlug.replace(/-/g, " ")}
          </h1>
          <div className="flex flex-wrap items-center gap-6 border-b border-site-line pt-4 pb-8 text-sm text-site-text transition-colors">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Core Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>01 Tháng 5, 2026</span>
            </div>
            <button className="ml-auto flex items-center gap-2 transition-colors hover:text-site-text">
              <Share2 size={16} />
              <span>Chia sẻ</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert max-w-none space-y-6 font-body text-lg leading-relaxed text-site-text transition-colors"
        >
          <p>
            Đây là nội dung chi tiết của bài viết <strong>{decodedSlug}</strong>
            . Hiện tại tính năng hiển thị nội dung động đang được tích hợp.
          </p>
          <div className="glass-card border-site-primary/20 bg-site-primary/5 p-8 transition-colors">
            <h3 className="mb-4 text-xl font-bold text-site-text transition-colors">
              Tóm tắt
            </h3>
            <p>
              Bài viết này hướng dẫn các bước cơ bản để bạn có thể làm quen với
              chủ đề này trên Fedora Linux.
            </p>
          </div>
          <p>
            Trong thời gian tới, các bài viết sẽ được biên soạn chi tiết bởi
            Core Team Fedora Việt Nam. Cảm ơn bạn đã quan tâm theo dõi!
          </p>
        </motion.div>
      </article>
    </div>
  )
}
