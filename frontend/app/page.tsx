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
    {
      title: t("community-card1-t"),
      desc: t("community-card1-d"),
      icon: FileText,
      href: "/docs",
    },
    {
      title: t("community-card2-t"),
      desc: t("community-card2-d"),
      icon: Users,
      href: "#community-links",
    },
    {
      title: t("community-card3-t"),
      desc: t("community-card3-d"),
      icon: MessageCircle,
      href: "/forum",
    },
  ]

  const contributors = [
    {
      name: "Fedora Core",
      role: "Administrator",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=core",
    },
    {
      name: "Linux Pioneer",
      role: "Core Team",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pioneer",
    },
    {
      name: "Hardware Pro",
      role: "Contributor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=hardware",
    },
    {
      name: "User 01",
      role: "Contributor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=user1",
    },
    {
      name: "User 02",
      role: "Contributor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=user2",
    },
  ]

  return (
    <div className="container mx-auto space-y-24 px-6 py-12">
      {/* HERO SECTION */}
      <section className="hero grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
        <div className="glass-card flex flex-col justify-center space-y-8 py-16 lg:col-span-8">
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
            className="text-glow text-4xl leading-tight font-extrabold tracking-tight text-content-main md:text-6xl"
          >
            {t("hero-title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl font-body text-lg text-content-muted md:text-xl"
          >
            {t("hero-lead")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link
              href="/docs/download"
              className="btn-site-primary flex items-center gap-2"
            >
              <Download size={20} />
              {t("hero-cta1")}
            </Link>
            <Link
              href="/docs"
              className="btn-site-ghost flex items-center gap-2"
            >
              <BookOpen size={20} />
              {t("hero-cta2")}
            </Link>
          </motion.div>
          <div className="stats grid grid-cols-2 gap-4 pt-8 md:grid-cols-3">
            <div className="stat">
              <b className="text-content-main">100% Open</b>
              <span className="text-content-muted">{t("hero-stat1")}</span>
            </div>
            <div className="stat">
              <b className="text-content-main">Desktop-first</b>
              <span className="text-content-muted">{t("hero-stat2")}</span>
            </div>
            <div className="stat">
              <b className="text-content-main">
                <span className="dot mr-2 inline-block h-2 w-2 rounded-full bg-site-ok shadow-[0_0_12px_#39c77a]"></span>
                Active
              </b>
              <span className="text-content-muted">{t("hero-stat3")}</span>
            </div>
          </div>
        </div>

        <aside className="glass-card flex flex-col justify-between lg:col-span-4">
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-wider text-content-main uppercase">
              {t("aside-title")}
            </h3>
            <ul className="space-y-4 font-body text-content-muted">
              <Link
                href="/docs/guide"
                className="group flex cursor-pointer items-center gap-3 transition-colors hover:text-content-main"
              >
                <ArrowRight
                  size={16}
                  className="text-brand-primary transition-transform group-hover:translate-x-1"
                />
                {t("aside-quick1")}
              </Link>
              <Link
                href="/docs/install"
                className="group flex cursor-pointer items-center gap-3 transition-colors hover:text-content-main"
              >
                <ArrowRight
                  size={16}
                  className="text-brand-primary transition-transform group-hover:translate-x-1"
                />
                {t("aside-quick2")}
              </Link>
              <Link
                href="/docs/setting"
                className="group flex cursor-pointer items-center gap-3 transition-colors hover:text-content-main"
              >
                <ArrowRight
                  size={16}
                  className="text-brand-primary transition-transform group-hover:translate-x-1"
                />
                {t("aside-quick3")}
              </Link>
              <Link
                href="/docs/troubleshoot"
                className="group flex cursor-pointer items-center gap-3 transition-colors hover:text-content-main"
              >
                <ArrowRight
                  size={16}
                  className="text-brand-primary transition-transform group-hover:translate-x-1"
                />
                {t("aside-quick4")}
              </Link>
            </ul>
          </div>
          <div className="mt-8 border-t border-border-subtle pt-8">
            <p className="text-sm leading-relaxed text-content-muted italic">
              {t("aside-note")}
            </p>
          </div>
        </aside>
      </section>

      {/* QUICK START SECTION */}
      <section id="start" className="space-y-12">
        <div className="glass-panel space-y-4">
          <h2 className="text-3xl font-bold text-content-main">
            {t("start-title")}
          </h2>
          <p className="max-w-2xl font-body text-content-muted">
            {t("start-desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {quickStart.map((item, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() =>
                router.push(
                  `/docs/${item.title.toLowerCase().replace(/\s+/g, "-")}`
                )
              }
              className="glass-card group cursor-pointer space-y-6 transition-colors hover:border-brand-primary/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 transition-transform group-hover:scale-110">
                <item.icon className="text-brand-primary" size={24} />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-content-main transition-colors group-hover:text-brand-primary">
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-content-muted">
                  {item.desc}
                </p>
              </div>
              <span className="inline-block rounded-full border border-border-subtle bg-surface-elevated px-3 py-1 text-xs font-bold tracking-wider text-content-main uppercase">
                {item.tag}
              </span>
            </motion.article>
          ))}
        </div>
      </section>

      {/* FEATURED GUIDES SECTION */}
      <section id="guides" className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-content-main">
            {t("guides-title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {guides.map((guide, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() =>
                router.push(
                  `/docs/${guide.title.toLowerCase().replace(/\s+/g, "-")}`
                )
              }
              className="glass-card group flex cursor-pointer flex-col justify-between transition-colors hover:border-brand-primary/30"
            >
              <div className="space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-elevated/50 transition-colors group-hover:text-brand-primary">
                  <guide.icon
                    className="text-content-muted transition-colors group-hover:text-brand-primary"
                    size={20}
                  />
                </div>
                <h3 className="text-lg leading-tight font-bold text-content-main transition-colors group-hover:text-brand-primary">
                  {guide.title}
                </h3>
                <p className="font-body text-sm text-content-muted">
                  {guide.desc}
                </p>
              </div>
              <div className="mt-6">
                <span className="inline-block rounded-full border border-border-subtle bg-surface-elevated/50 px-3 py-1 text-[10px] font-black tracking-widest text-content-muted uppercase">
                  {guide.tag}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* WHY FEDORA SECTION */}
      <section className="glass-card relative overflow-hidden px-8 py-16 md:px-16">
        <div className="relative z-10 grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-content-main md:text-4xl">
              {t("why-fedora-title")}
            </h2>
            <ul className="space-y-6">
              {whyFedora.map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <CheckCircle2
                    className="mt-1 shrink-0 text-site-ok"
                    size={20}
                  />
                  <div>
                    <h4 className="font-bold text-content-main">
                      {item.title}
                    </h4>
                    <p className="font-body text-sm text-content-muted">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-full bg-brand-primary opacity-20 blur-[120px]"></div>
              <div className="glass relative rounded-3xl border-2 border-border-subtle p-8">
                <pre className="overflow-hidden font-mono text-xs leading-relaxed text-blue-300">
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
      <section id="community" className="space-y-12 py-12 text-center">
        <div className="glass-panel mx-auto max-w-3xl space-y-6">
          <h2 className="text-4xl font-bold text-content-main">
            {t("community-title")}
          </h2>
          <p className="font-body text-lg text-content-muted">
            {t("community-desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {communityCards.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (item.href.startsWith("/")) {
                  router.push(item.href)
                } else {
                  document
                    .querySelector(item.href)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="group w-full cursor-pointer space-y-4 rounded-2xl p-8 text-center transition-colors hover:bg-surface-elevated/50"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-surface-elevated/50 text-brand-primary transition-transform group-hover:scale-110">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-content-main">
                {item.title}
              </h3>
              <p className="font-body text-sm text-content-muted">
                {item.desc}
              </p>
            </button>
          ))}
        </div>

        <div
          id="community-links"
          className="flex flex-wrap justify-center gap-4 pt-8"
        >
          <button className="btn-site-primary px-12 py-4 text-lg">
            {t("community-tg")}
          </button>
          <button className="btn-site-ghost px-12 py-4 text-lg">
            {t("community-dc")}
          </button>
        </div>
      </section>

      {/* CONTRIBUTORS SECTION */}
      <section className="space-y-12 border-t border-border-subtle py-12">
        <div className="glass-panel space-y-4 text-center">
          <h2 className="text-3xl font-bold text-content-main">
            {t("contributors-title")}
          </h2>
          <p className="font-body text-content-muted">
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
              <div className="group relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-brand-primary to-blue-600 opacity-25 blur transition-opacity duration-300 group-hover:opacity-75"></div>
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="relative h-16 w-16 rounded-full border-2 border-border-subtle bg-surface-base"
                />
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-content-main">
                  {person.name}
                </p>
                <p className="text-[10px] font-black tracking-widest text-content-muted uppercase">
                  {person.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="pt-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-elevated/50 px-6 py-2">
            <Heart
              size={14}
              className="fill-brand-primary text-brand-primary"
            />
            <span className="text-xs font-bold text-content-muted">
              Và hàng trăm cộng tác viên khác trên toàn Việt Nam
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
