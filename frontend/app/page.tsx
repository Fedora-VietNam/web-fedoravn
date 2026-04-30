"use client"

import {
  Download,
  ArrowRight,
  CheckCircle2,
  Code,
  Palette,
  Edit3,
  Languages,
  Monitor,
  Server,
  Cloud,
  Cpu,
  Terminal,
} from "lucide-react"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"

export default function Portal() {
  const t = useTranslations()
  const stats = [
    { label: "Active Users", value: "2M+", color: "text-brand-secondary" },
    { label: "Contributors", value: "50k+", color: "text-brand-secondary" },
    { label: "Local Groups", value: "120+", color: "text-brand-secondary" },
    { label: "Releases", value: "40", color: "text-brand-secondary" },
  ]

  const editions = [
    {
      name: "Workstation",
      desc: "A polished, easy-to-use operating system for laptop and desktop computers.",
      icon: Monitor,
      tags: ["GNOME 46", "Wayland"],
      large: true,
    },
    {
      name: "Server",
      desc: "A short-lifecycle, community-supported server OS with the latest tech.",
      icon: Server,
      dark: true,
    },
    {
      name: "Cloud",
      desc: "Images for public and private clouds like AWS, Azure, and OpenStack.",
      icon: Cloud,
    },
    {
      name: "IoT",
      desc: "A foundation for IoT ecosystems with secure updates.",
      icon: Cpu,
    },
    {
      name: "CoreOS",
      desc: "Automatically updating, minimal OS for containerized workloads.",
      icon: Terminal,
    },
  ]

  const paths = [
    { name: "I enjoy Coding", icon: Code },
    { name: "I enjoy Design", icon: Palette },
    { name: "I enjoy Writing", icon: Edit3 },
    { name: "I enjoy Languages", icon: Languages },
  ]

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f2a5a] via-[#1a3a6a] to-[#2a5fa4] p-8 md:p-16 text-white">
        <div className="relative z-10 max-w-2xl space-y-8">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-widest text-brand-tertiary"
          >
            {t("hub-hero-v40")}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
          >
            {t("hub-hero-title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-blue-100 max-w-xl font-body"
          >
            {t("hub-hero-desc")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-white text-brand-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-all shadow-lg">
              <Download size={20} />
              {t("hub-get-fedora")}
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center gap-2">
              {t("hub-join-community")}
            </button>
          </motion.div>
        </div>

        {/* Abstract Background Decoration */}
        <div className="absolute right-[-10%] bottom-[-20%] p-20 bg-blue-400/10 blur-[120px] rounded-full"></div>
      </section>

      {/* Bento Grid: Editions */}
      <section className="space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-brand-primary mb-2">
            Explore Fedora Editions
          </h2>
          <p className="text-slate-500 max-w-2xl font-body">
            Tailored experiences for every user, from workstation to server.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {editions.map((edition, idx) => (
            <motion.div
              key={edition.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`
                group p-8 rounded-2xl border transition-all duration-300
                ${edition.large ? "md:col-span-2" : ""}
                ${
                  edition.dark
                    ? "bg-brand-primary text-white border-brand-primary"
                    : "bg-white border-slate-200 hover:border-brand-secondary/30 hover:shadow-xl hover:shadow-blue-900/5"
                }
              `}
            >
              <div
                className={`
                w-12 h-12 rounded-xl flex items-center justify-center mb-6
                ${edition.dark ? "bg-white/10" : "bg-blue-50"}
              `}
              >
                <edition.icon
                  className={
                    edition.dark ? "text-white" : "text-brand-secondary"
                  }
                  size={24}
                />
              </div>
              <h3
                className={`text-2xl font-bold mb-4 ${edition.dark ? "text-white" : "text-brand-primary"}`}
              >
                {edition.name}
              </h3>
              <p
                className={`font-body mb-6 ${edition.dark ? "text-blue-100/80" : "text-slate-500"}`}
              >
                {edition.desc}
              </p>

              {edition.large && edition.tags && (
                <div className="flex items-center gap-3">
                  {edition.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-50 text-blue-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {edition.dark && (
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-bold border-b-2 border-white/30 hover:border-white transition-all pb-1 mt-4"
                >
                  Learn More <ArrowRight size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Community Impact Stats */}
      <section className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-brand-primary">
              Built by you. Supported by Red Hat.
            </h2>
            <p className="text-lg text-slate-600 font-body leading-relaxed">
              The Fedora Project is a global partnership of free software
              community members. We believe that open source is the future of
              innovation.
            </p>
            <ul className="space-y-4">
              {[
                "Contribute to code, design, or documentation",
                "Organize or attend local meetups and events",
                "Advocate for free software in your region",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2
                    className="text-brand-secondary shrink-0"
                    size={20}
                  />
                  <span className="font-medium font-body">{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-brand-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-primary transition-all shadow-md">
              Get Involved Today
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center text-center"
              >
                <div className={`text-4xl font-black mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Path Finder Widget */}
      <section className="bg-slate-900 rounded-3xl p-12 text-white text-center space-y-10">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-4xl font-bold">Find Your Path</h2>
          <p className="text-slate-400 font-body">
            Not sure where to start? Tell us what you enjoy, and we&apos;ll point
            you to the right team.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {paths.map((path) => (
            <button
              key={path.name}
              className="flex flex-col items-center gap-4 p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-brand-tertiary group-hover:scale-110 transition-transform">
                <path.icon size={32} />
              </div>
              <span className="font-bold text-sm tracking-tight">
                {path.name}
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
