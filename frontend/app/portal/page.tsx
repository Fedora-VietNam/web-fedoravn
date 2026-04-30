"use client"

import {
  Code,
  Palette,
  PenTool,
  Globe,
  ArrowRight,
  TrendingUp,
  Users,
} from "lucide-react"
import { motion } from "motion/react"

export default function PortalDetailed() {
  const contributionPaths = [
    {
      title: "Kernel & Packages",
      cat: "Development",
      desc: "Help us package the latest software or contribute directly to the Linux Kernel. We use Git and Pagure for our primary workflows.",
      icon: Code,
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop",
      linkText: "Explore Repo",
    },
    {
      title: "UI, UX & Branding",
      cat: "Visual Arts",
      desc: "From wallpapers to interface icons, Fedora Design team creates the visual identity. Join our open design sessions.",
      icon: Palette,
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1464&auto=format&fit=crop",
      linkText: "View Portfolio",
    },
    {
      title: "Technical Writing",
      cat: "Documentation",
      desc: "Excellent software needs excellent guides. Help us document features, create tutorials, and maintain our wiki.",
      icon: PenTool,
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1373&auto=format&fit=crop",
      linkText: "Write Now",
    },
    {
      title: "L10n & Global Outreach",
      cat: "Translation",
      desc: "Help us translate Fedora into your language. Make computing accessible to everyone, regardless of where they live.",
      icon: Globe,
      img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1374&auto=format&fit=crop",
      linkText: "Join L10n",
    },
  ]

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section Container */}
      <section className="relative overflow-hidden rounded-3xl bg-brand-primary p-8 md:p-16 text-white min-h-[400px] flex items-center">
        <div className="relative z-10 max-w-3xl space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Empower the Future of Open Source.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-blue-100 font-body max-w-2xl"
          >
            Fedora is more than an operating system. It&apos;s a massive, global
            community of people building the future of free software together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button className="bg-brand-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg">
              Start Contributing
            </button>
            <button className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
              Watch Community Story
            </button>
          </motion.div>
        </div>

        {/* Background Visual */}
        <div className="absolute top-0 right-0 h-full w-full pointer-events-none opacity-40 mix-blend-overlay">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </section>

      {/* Community Impact Stats Box */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-brand-primary">
          Community Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 bg-white border border-slate-200 p-8 rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <Users className="text-brand-secondary mb-4" size={40} />
              <h3 className="text-2xl font-bold text-brand-primary">
                2,500+ Active Contributors
              </h3>
              <p className="text-slate-500 font-body mt-2">
                Engineers, writers, and artists working around the clock to
                refine the Linux experience.
              </p>
            </div>
            <div className="mt-8 h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                className="h-full bg-brand-secondary rounded-full"
              />
            </div>
          </div>

          <div className="bg-blue-900/5 border border-brand-primary/5 p-8 rounded-2xl text-center flex flex-col justify-center items-center shadow-sm">
            <div className="text-4xl font-extrabold text-brand-primary mb-1">
              142
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary">
              Global Mirror Sites
            </div>
          </div>

          <div className="bg-brand-secondary p-8 rounded-2xl flex flex-col justify-between text-white shadow-xl shadow-blue-900/10 transition-transform hover:-translate-y-1">
            <TrendingUp size={24} className="opacity-60" />
            <div>
              <div className="text-4xl font-extrabold mb-1">12k+</div>
              <div className="text-sm font-bold opacity-80">
                Monthly Pull Requests
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contribution Pathways Grid */}
      <section className="space-y-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-brand-primary">
            Find Your Path
          </h2>
          <p className="text-slate-500 font-body">
            Tell us what you enjoy, and we&apos;ll point you to the right team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contributionPaths.map((path, idx) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group"
            >
              <div className="md:w-1/3 overflow-hidden h-48 md:h-auto border-r border-slate-50">
                <img
                  src={path.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt=""
                />
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-secondary mb-2">
                  {path.cat}
                </span>
                <h3 className="text-2xl font-bold text-brand-primary mb-3">
                  {path.title}
                </h3>
                <p className="text-sm text-slate-500 font-body mb-6 leading-relaxed">
                  {path.desc}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-brand-secondary font-bold text-sm hover:translate-x-1 transition-transform"
                >
                  {path.linkText} <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
