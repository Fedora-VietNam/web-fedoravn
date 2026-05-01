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
    {
      label: t("forum-stat-members"),
      value: "84,203",
      growth: "Global",
      icon: Users,
    },
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
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h1 className="mb-2 text-4xl font-bold text-site-text">
            {t("menu-community")}
          </h1>
          <p className="font-body text-site-text">{t("community-desc")}</p>
        </div>
        <button
          onClick={handleNewTopic}
          className="btn-site-primary flex items-center justify-center gap-2 px-8 py-4 text-lg shadow-lg shadow-site-primary/20"
        >
          <Plus size={20} />
          {t("forum-new-topic")}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card flex flex-col justify-between"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-site-primary/10 p-3 text-site-primary">
                <stat.icon size={24} />
              </div>
              <span
                className={cn(
                  "rounded px-2 py-1 text-[10px] font-black tracking-wider text-site-text uppercase",
                  stat.growth.startsWith("+") && "bg-site-ok/10 text-site-ok"
                )}
              >
                {stat.growth}
              </span>
            </div>
            <div>
              <p className="mb-1 text-sm font-bold text-site-text">
                {stat.label}
              </p>
              <h4 className="text-3xl font-black text-site-text">
                {stat.value}
              </h4>
            </div>
          </motion.div>
        ))}

        {/* Release News Card */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-site-primary p-8 text-content-on-brand shadow-xl shadow-site-primary/20">
          <div className="relative z-10">
            <h4 className="mb-2 text-xl font-bold">Fedora 40 Released!</h4>
            <p className="mb-4 font-body text-sm text-content-on-brand/80">
              Check out the latest features and migration guides.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 border-b border-site-line pb-1 text-sm font-bold transition-all hover:border-white"
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

      <div className="sticky top-[66px] z-10 -mx-4 border-b border-site-line bg-site-bg/80 px-4 py-4 backdrop-blur-md">
        <div className="no-scrollbar flex gap-3 overflow-x-auto scroll-smooth">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              className={cn(
                "rounded-full border px-6 py-2.5 text-xs font-bold whitespace-nowrap transition-all",
                idx === 0
                  ? "border-site-primary bg-site-primary text-content-on-brand shadow-md shadow-site-primary/20"
                  : "border-site-line bg-site-bg-soft text-site-text hover:border-site-primary hover:text-site-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-2xl font-bold text-site-text">
            {t("forum-recent")}
          </h2>
          <button className="flex items-center gap-2 text-sm font-bold text-site-text transition-colors hover:text-site-primary">
            <Filter size={16} /> {t("forum-filters")}
          </button>
        </div>

        <div className="glass-card divide-y divide-site-line overflow-hidden !p-0">
          {topics.map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onClick={() => router.push(`/forum/${topic.id}`)}
              className="group flex cursor-pointer items-center gap-6 p-6 transition-colors hover:bg-site-bg-soft"
            >
              <img
                src={topic.avatar}
                alt="Avatar"
                className="h-12 w-12 rounded-full border-2 border-site-line transition-transform group-hover:scale-110"
              />
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-base font-bold text-site-text transition-colors group-hover:text-site-primary sm:text-lg">
                  {topic.title}
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <span className="rounded bg-site-primary/10 px-2 py-0.5 text-[10px] font-black tracking-wider text-site-primary uppercase">
                    {topic.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-site-text">
                    {t("forum-started-by")}{" "}
                    <span className="font-bold text-site-text">
                      {topic.author}
                    </span>{" "}
                    • {topic.time}
                  </span>
                </div>
              </div>
              <div className="hidden items-center gap-8 border-l border-site-line pl-8 text-center sm:flex">
                <div>
                  <p className="text-sm font-bold text-site-text">
                    {topic.replies}
                  </p>
                  <p className="text-[10px] font-black text-site-text uppercase">
                    {t("forum-replies")}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold text-site-text">
                    {topic.views}
                  </p>
                  <p className="text-[10px] font-black text-site-text uppercase">
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
