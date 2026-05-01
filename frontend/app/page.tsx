"use client"

import {
  Download,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Settings,
  Terminal,
  Wifi,
  Zap,
  Users,
  MessageCircle,
  FileText,
  Heart,
} from "lucide-react"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"


export default function Portal() {
  const t = useTranslations()
  const router = useRouter()


  const quickStart = [
    {
      title: t("start-c1t"),
      desc: t("start-c1d"),
      icon: Download,
      tag: "Install",
    },
    {
      title: t("start-c2t"),
      desc: t("start-c2d"),
      icon: Settings,
      tag: "Setup",
    },
    {
      title: t("start-c3t"),
      desc: t("start-c3d"),
      icon: Terminal,
      tag: "Productivity",
    },
  ]

  const guides = [
    {
      title: t("guides-c1t"),
      desc: t("guides-c1d"),
      tag: "GUIDE",
      icon: Cpu,
    },
    {
      title: t("guides-c2t"),
      desc: t("guides-c2d"),
      tag: "TROUBLESHOOT",
      icon: Wifi,
    },
    {
      title: t("guides-c3t"),
      desc: t("guides-c3d"),
      tag: "DEV",
      icon: Terminal,
    },
    {
      title: t("guides-c4t"),
      desc: t("guides-c4d"),
      tag: "PERFORMANCE",
      icon: Zap,
    },
  ]

  const whyFedora = [
    { title: t("why-item1-t"), desc: t("why-item1-d") },
    { title: t("why-item2-t"), desc: t("why-item2-d") },
    { title: t("why-item3-t"), desc: t("why-item3-d") },
    { title: t("why-item4-t"), desc: t("why-item4-d") },
  ]

  const communityCards = [
    { title: t("community-card1-t"), desc: t("community-card1-d"), icon: FileText, href: "/docs" },
    { title: t("community-card2-t"), desc: t("community-card2-d"), icon: Users, href: "#community-links" },
    { title: t("community-card3-t"), desc: t("community-card3-d"), icon: MessageCircle, href: "/forum" },
  ]

  const contributors = [
    { name: "Fedora Core", role: "Administrator", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=core" },
    { name: "Linux Pioneer", role: "Core Team", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pioneer" },
    { name: "Hardware Pro", role: "Contributor", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=hardware" },
    { name: "User 01", role: "Contributor", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=user1" },
    { name: "User 02", role: "Contributor", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=user2" },
  ]


  return (
    <div className="container mx-auto px-6 py-12 space-y-24">
      {/* HERO SECTION */}
      <section className="hero grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-8 glass-card flex flex-col justify-center space-y-8 py-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="kicker w-fit"
          >
            {t("hero-kicker")}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white text-glow"
          >
            {t("hero-title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-site-muted max-w-2xl font-body"
          >
            {t("hero-lead")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link href="/docs/download" className="btn-site-primary flex items-center gap-2">
              <Download size={20} />
              {t("hero-cta1")}
            </Link>
            <Link href="/docs" className="btn-site-ghost flex items-center gap-2">
              <BookOpen size={20} />
              {t("hero-cta2")}
            </Link>
          </motion.div>
          <div className="stats grid grid-cols-2 md:grid-cols-3 gap-4 pt-8">
            <div className="stat">
              <b className="text-white">100% Open</b>
              <span>{t("hero-stat1")}</span>
            </div>
            <div className="stat">
              <b className="text-white">Desktop-first</b>
              <span>{t("hero-stat2")}</span>
            </div>
            <div className="stat">
              <b className="text-white">
                <span className="dot inline-block w-2 h-2 rounded-full bg-site-ok mr-2 shadow-[0_0_12px_#39c77a]"></span>
                Active
              </b>
              <span>{t("hero-stat3")}</span>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-4 glass-card flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">{t("aside-title")}</h3>
            <ul className="space-y-4 font-body text-site-muted">
              <Link href="/docs/guide" className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
                <ArrowRight size={16} className="text-site-primary group-hover:translate-x-1 transition-transform" />
                {t("aside-quick1")}
              </Link>
              <Link href="/docs/install" className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
                <ArrowRight size={16} className="text-site-primary group-hover:translate-x-1 transition-transform" />
                {t("aside-quick2")}
              </Link>
              <Link href="/docs/setting" className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
                <ArrowRight size={16} className="text-site-primary group-hover:translate-x-1 transition-transform" />
                {t("aside-quick3")}
              </Link>
              <Link href="/docs/troubleshoot" className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
                <ArrowRight size={16} className="text-site-primary group-hover:translate-x-1 transition-transform" />
                {t("aside-quick4")}
              </Link>
            </ul>
          </div>
          <div className="pt-8 border-t border-white/5 mt-8">
            <p className="text-sm text-site-muted italic leading-relaxed">
              {t("aside-note")}
            </p>
          </div>
        </aside>
      </section>

      {/* QUICK START SECTION */}
      <section id="start" className="space-y-12">
        <div className="space-y-4 glass-panel">
          <h2 className="text-3xl font-bold text-white">{t("start-title")}</h2>
          <p className="text-site-muted max-w-2xl font-body">
            {t("start-desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickStart.map((item, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => router.push(`/docs/${item.title.toLowerCase().replace(/\s+/g, '-')}`)}
              className="glass-card space-y-6 cursor-pointer hover:border-site-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-site-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <item.icon className="text-site-primary" size={24} />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-site-primary transition-colors">{item.title}</h3>
                <p className="text-site-muted font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
              <span className="inline-block bg-[#16264b] border border-[#3e5a96] text-[#cde0ff] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {item.tag}
              </span>
            </motion.article>
          ))}
        </div>
      </section>

      {/* FEATURED GUIDES SECTION */}
      <section id="guides" className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white">{t("guides-title")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => router.push(`/docs/${guide.title.toLowerCase().replace(/\s+/g, '-')}`)}
              className="glass-card flex flex-col justify-between cursor-pointer hover:border-site-primary/30 transition-colors group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:text-site-primary transition-colors">
                  <guide.icon className="text-site-muted group-hover:text-site-primary transition-colors" size={20} />
                </div>
                <h3 className="text-lg font-bold text-white leading-tight group-hover:text-site-primary transition-colors">{guide.title}</h3>
                <p className="text-sm text-site-muted font-body">{guide.desc}</p>
              </div>
              <div className="mt-6">
                <span className="inline-block bg-white/5 border border-white/10 text-site-muted px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">
                  {guide.tag}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* WHY FEDORA SECTION */}
      <section className="glass-card py-16 px-8 md:px-16 overflow-hidden relative">
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">{t("why-fedora-title")}</h2>
            <ul className="space-y-6">
              {whyFedora.map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <CheckCircle2 className="text-site-ok shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-site-muted text-sm font-body">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-site-primary blur-[120px] opacity-20 rounded-full animate-pulse"></div>
              <div className="relative glass p-8 rounded-3xl border-[#3a528e] border-2">
                <pre className="text-xs text-blue-300 font-mono leading-relaxed overflow-hidden">
                  {`$ sudo dnf update
$ sudo dnf install nodejs docker-ce
$ fedora-welcome --ready
                  
> System Status: OPTIMIZED
> Security: ACTIVE
> Developer Mode: ON`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY SECTION */}
      <section id="community" className="text-center space-y-12 py-12">
        <div className="max-w-3xl mx-auto space-y-6 glass-panel">
          <h2 className="text-4xl font-bold text-white">{t("community-title")}</h2>
          <p className="text-site-muted text-lg font-body">
            {t("community-desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityCards.map((item, idx) => (
            <button 
              key={idx} 
              onClick={() => {
                if (item.href.startsWith("/")) {
                  router.push(item.href)
                } else {
                  document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="space-y-4 p-8 hover:bg-white/5 rounded-2xl transition-colors cursor-pointer group text-center w-full"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto text-site-primary group-hover:scale-110 transition-transform">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-site-muted font-body text-sm">{item.desc}</p>
            </button>
          ))}
        </div>

        <div id="community-links" className="flex flex-wrap justify-center gap-4 pt-8">
          <button className="btn-site-primary px-12 py-4 text-lg">{t("community-tg")}</button>
          <button className="btn-site-ghost px-12 py-4 text-lg">{t("community-dc")}</button>
        </div>
      </section>

      {/* CONTRIBUTORS SECTION */}
      <section className="space-y-12 py-12 border-t border-white/5">
        <div className="text-center space-y-4 glass-panel">
          <h2 className="text-3xl font-bold text-white">{t("contributors-title")}</h2>
          <p className="text-site-muted font-body">
            {t("contributors-desc")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {contributors.map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center space-y-3"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-site-primary to-blue-600 rounded-full blur opacity-25 group-hover:opacity-75 transition-opacity duration-300"></div>
                <img 
                  src={person.avatar} 
                  alt={person.name} 
                  className="relative w-16 h-16 rounded-full border-2 border-white/10 bg-[#0b1020]"
                />
              </div>
              <div className="text-center">
                <p className="text-white font-bold text-sm">{person.name}</p>
                <p className="text-site-muted text-[10px] uppercase tracking-widest font-black">{person.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center pt-8">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-2 rounded-full">
            <Heart size={14} className="text-site-primary fill-site-primary" />
            <span className="text-site-muted text-xs font-bold">Và hàng trăm cộng tác viên khác trên toàn Việt Nam</span>
          </div>
        </div>
      </section>

    </div>
  )
}
