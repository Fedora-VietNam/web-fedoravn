"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <h1 className="text-[150px] md:text-[200px] font-black text-white/5 select-none leading-none">
          404
        </h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
          <div className="w-20 h-20 bg-site-primary/10 rounded-3xl flex items-center justify-center text-site-primary animate-bounce">
            <Search size={40} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ôi! Không tìm thấy trang</h2>
          <p className="text-site-muted max-w-md font-body">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển. Kiểm tra đường dẫn và thử lại nhé.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-4 mt-12"
      >
        <button 
          onClick={() => window.history.back()}
          className="btn-site-ghost flex items-center gap-2 px-8 py-3"
        >
          <ArrowLeft size={18} />
          Quay lại
        </button>
        <Link 
          href="/"
          className="btn-site-primary flex items-center gap-2 px-8 py-3"
        >
          <Home size={18} />
          Về trang chủ
        </Link>
      </motion.div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full max-w-4xl h-[400px] bg-site-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
    </div>
  )
}
