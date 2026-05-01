"use client"

import {
  Users,
  MessageSquare,
  TrendingUp,
  Plus,
  Filter,
  BarChart3,
} from "lucide-react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export function ForumContent() {
  const t = useTranslations()
  const { data: session } = useSession()
  const router = useRouter()

  const categories = [
    t("forum-cat-all"),
    t("forum-cat-workstation"),
    t("forum-cat-server"),
    t("forum-cat-kde"),
    t("forum-cat-packaging"),
    t("forum-cat-infra"),
  ]

  const stats = [
    {
      label: t("forum-stat-active"),
      value: "1,248",
      growth: "+12%",
      icon: MessageSquare,
    },
    { label: t("forum-stat-members"), value: "84,203", growth: "Global", icon: Users },
  ]

  const topics = [
    {
      id: "1",
      title: "Upgrading to Fedora 40: Workstation installation hangs at 80%",
      author: "linux_pioneer",
      time: "2h ago",
      category: "Installation",
      replies: 42,
      views: "1.2k",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pioneer",
    },
    {
      id: "2",
      title: "RFC: Proposed changes to DNF package manager backend for F41",
      author: "fedora_core",
      time: "5h ago",
      category: "Development",
      replies: 128,
      views: "5.8k",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=core",
    },
    {
      id: "3",
      title:
        "Best laptop for Fedora 40? Looking for something with long battery life.",
      author: "hardware_enthusiast",
      time: "12h ago",
      category: "General Support",
      replies: 15,
      views: 450,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=hardware",
    },
    {
      id: "4",
      title: "Fedora 40 KDE Plasma 6: Screen flickering on Wayland with NVIDIA",
      author: "plasma_fan",
      time: "1d ago",
      category: "Bugs",
      replies: 89,
      views: "2.4k",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=plasma",
    },
  ]

  const handleNewTopic = () => {
    if (!session) {
      router.push("/login")
    } else {
      alert("Tính năng tạo thảo luận đang được phát triển!")
    }
  }

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">
            {t("menu-community")}
          </h1>
          <p className="text-site-muted font-body">
            {t("community-desc")}
          </p>
        </div>
        <button 
          onClick={handleNewTopic}
          className="flex items-center justify-center gap-2 btn-site-primary px-8 py-4 text-lg shadow-lg shadow-site-primary/20"
        >
          <Plus size={20} />
          {t("forum-new-topic")}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="bg-site-primary/10 p-3 rounded-xl text-site-primary">
                <stat.icon size={24} />
              </div>
              <span
                className={cn(
                  "text-[10px] font-black px-2 py-1 rounded text-site-muted uppercase tracking-wider",
                  stat.growth.startsWith("+") && "text-site-ok bg-site-ok/10"
                )}
              >
                {stat.growth}
              </span>
            </div>
            <div>
              <p className="text-site-muted text-sm font-bold mb-1">
                {stat.label}
              </p>
              <h4 className="text-3xl font-black text-white">
                {stat.value}
              </h4>
            </div>
          </motion.div>
        ))}

        {/* Release News Card */}
        <div className="bg-site-primary p-8 rounded-2xl text-white relative overflow-hidden flex flex-col justify-between shadow-xl shadow-site-primary/20">
          <div className="relative z-10">
            <h4 className="text-xl font-bold mb-2">Fedora 40 Released!</h4>
            <p className="text-sm text-blue-100 font-body mb-4">
              Check out the latest features and migration guides.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-bold border-b border-white/30 hover:border-white transition-all pb-1"
            >
              View Change Log <TrendingUp size={14} />
            </a>
          </div>
          <motion.div
            animate={{ rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -right-8 -bottom-8 opacity-10"
          >
            <BarChart3 size={160} />
          </motion.div>
        </div>
      </div>

      <div className="sticky top-[66px] bg-site-bg/80 backdrop-blur-md z-10 py-4 -mx-4 px-4 border-b border-white/5">
        <div className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              className={cn(
                "px-6 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border",
                idx === 0
                  ? "bg-site-primary text-white border-site-primary shadow-md shadow-site-primary/20"
                  : "bg-white/5 text-site-muted border-white/10 hover:border-site-primary hover:text-site-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-2xl font-bold text-white">
            {t("forum-recent")}
          </h2>
          <button className="flex items-center gap-2 text-site-muted font-bold text-sm hover:text-site-primary transition-colors">
            <Filter size={16} /> {t("forum-filters")}
          </button>
        </div>

        <div className="glass-card divide-y divide-white/5 !p-0 overflow-hidden">
          {topics.map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onClick={() => router.push(`/forum/${topic.id}`)}
              className="flex items-center gap-6 p-6 hover:bg-white/5 transition-colors cursor-pointer group"
            >
              <img
                src={topic.avatar}
                alt="Avatar"
                className="w-12 h-12 rounded-full border-2 border-white/10 group-hover:scale-110 transition-transform"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-site-primary transition-colors truncate">
                  {topic.title}
                </h3>
                <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mt-1">
                  <span className="px-2 py-0.5 bg-site-primary/10 text-site-primary text-[10px] font-black rounded uppercase tracking-wider">
                    {topic.category}
                  </span>
                  <span className="text-xs text-site-muted flex items-center gap-1">
                    {t("forum-started-by")}{" "}
                    <span className="font-bold text-white/80">
                      {topic.author}
                    </span>{" "}
                    • {topic.time}
                  </span>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-8 text-center border-l border-white/10 pl-8">
                <div>
                  <p className="text-sm font-bold text-white">
                    {topic.replies}
                  </p>
                  <p className="text-[10px] uppercase font-black text-site-muted">
                    {t("forum-replies")}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    {topic.views}
                  </p>
                  <p className="text-[10px] uppercase font-black text-site-muted">
                    {t("forum-views")}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <button className="btn-site-ghost px-8 py-3 text-sm">
            {t("forum-load-more")}
          </button>
        </div>
      </section>
    </div>
  )
}
