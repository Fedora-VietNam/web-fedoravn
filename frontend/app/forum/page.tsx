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

export default function Forum() {
  const categories = [
    "All Topics",
    "Workstation",
    "Server",
    "KDE Plasma",
    "Packaging",
    "Infrastructure",
  ]

  const stats = [
    {
      label: "Active Discussions",
      value: "1,248",
      growth: "+12%",
      icon: MessageSquare,
    },
    { label: "Total Members", value: "84,203", growth: "Global", icon: Users },
  ]

  const topics = [
    {
      title: "Upgrading to Fedora 40: Workstation installation hangs at 80%",
      author: "linux_pioneer",
      time: "2h ago",
      category: "Installation",
      replies: 42,
      views: "1.2k",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pioneer",
    },
    {
      title: "RFC: Proposed changes to DNF package manager backend for F41",
      author: "fedora_core",
      time: "5h ago",
      category: "Development",
      replies: 128,
      views: "5.8k",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=core",
    },
    {
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
      title: "Fedora 40 KDE Plasma 6: Screen flickering on Wayland with NVIDIA",
      author: "plasma_fan",
      time: "1d ago",
      category: "Bugs",
      replies: 89,
      views: "2.4k",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=plasma",
    },
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold text-brand-primary mb-2">
            Community Forum
          </h1>
          <p className="text-slate-500 font-body">
            The official place for Fedora project support, development, and
            general chat.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-brand-secondary text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-900/10 hover:bg-brand-primary transition-all">
          <Plus size={20} />
          New Topic
        </button>
      </div>

      {/* Stats Bento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col justify-between shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-50 p-3 rounded-xl text-brand-secondary">
                <stat.icon size={24} />
              </div>
              <span
                className={cn(
                  "text-xs font-bold px-2 py-1 rounded text-slate-500 uppercase tracking-wider",
                  stat.growth.startsWith("+") && "text-green-600 bg-green-50"
                )}
              >
                {stat.growth}
              </span>
            </div>
            <div>
              <p className="text-slate-500 text-sm font-semibold mb-1">
                {stat.label}
              </p>
              <h4 className="text-3xl font-black text-brand-primary">
                {stat.value}
              </h4>
            </div>
          </motion.div>
        ))}

        {/* Release News Card */}
        <div className="bg-brand-primary p-8 rounded-2xl text-white relative overflow-hidden flex flex-col justify-between">
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

      {/* Categories Horizontal Scroll */}
      <div className="sticky top-[128px] bg-[#f8f9fa] z-10 py-4 -mx-4 px-4">
        <div className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all border",
                idx === 0
                  ? "bg-brand-primary text-white border-brand-primary shadow-md shadow-brand-primary/20"
                  : "bg-white text-slate-600 border-slate-200 hover:border-brand-secondary hover:text-brand-secondary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Topics List */}
      <section className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-2xl font-bold text-brand-primary">
            Recent Topics
          </h2>
          <button className="flex items-center gap-2 text-slate-500 font-bold text-sm hover:text-brand-primary">
            <Filter size={16} /> Filters
          </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl divide-y divide-slate-100 shadow-sm overflow-hidden">
          {topics.map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 p-6 hover:bg-slate-50 transition-colors cursor-pointer group"
            >
              <img
                src={topic.avatar}
                alt="Avatar"
                className="w-12 h-12 rounded-full border-2 border-slate-100 group-hover:scale-110 transition-transform"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-brand-primary group-hover:text-brand-secondary transition-colors truncate">
                  {topic.title}
                </h3>
                <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mt-1">
                  <span className="px-2 py-0.5 bg-brand-tertiary/10 text-brand-secondary text-[10px] font-black rounded uppercase tracking-wider">
                    {topic.category}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    Started by{" "}
                    <span className="font-bold text-slate-700">
                      {topic.author}
                    </span>{" "}
                    • {topic.time}
                  </span>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-8 text-center border-l border-slate-100 pl-8">
                <div>
                  <p className="text-sm font-bold text-brand-primary">
                    {topic.replies}
                  </p>
                  <p className="text-[10px] uppercase font-black text-slate-400">
                    Replies
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-primary">
                    {topic.views}
                  </p>
                  <p className="text-[10px] uppercase font-black text-slate-400">
                    Views
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <button className="border border-slate-200 bg-white text-slate-600 px-8 py-3 rounded-xl font-bold hover:bg-slate-50 hover:border-brand-secondary transition-all flex items-center gap-2">
            Load More Discussions
          </button>
        </div>
      </section>
    </div>
  )
}
