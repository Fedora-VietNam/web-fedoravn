"use client"

import {
  ChevronLeft,
  ChevronRight,
  Filter,
  Plus,
  Video,
  MapPin,
  ExternalLink,
  Users,
} from "lucide-react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export default function Events() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const monthDays = Array.from({ length: 31 }, (_, i) => i + 1)
  const prevMonthPadding = Array.from({ length: 2 }, (_, i) => 29 + i)
  const nextMonthPadding = Array.from({ length: 2 }, (_, i) => i + 1)

  const eventItems = [
    {
      day: 3,
      title: "CoreOS Office Hours",
      type: "workshop",
      color: "bg-blue-100 text-blue-900 border-blue-500",
    },
    {
      day: 8,
      title: "Council Meeting",
      type: "meeting",
      color: "bg-emerald-100 text-emerald-900 border-emerald-500",
    },
    {
      day: 10,
      title: "F41 Release Party",
      type: "event",
      color: "bg-brand-primary/10 text-brand-primary border-brand-primary",
    },
    {
      day: 16,
      title: "Security SIG Workshop",
      type: "workshop",
      color: "bg-rose-100 text-rose-900 border-rose-500",
    },
    {
      day: 24,
      title: "Workstation WG Meeting",
      type: "meeting",
      color: "bg-blue-100 text-blue-900 border-blue-500",
    },
  ]

  const featured = {
    title: "Fedora Linux 41 Global Launch",
    date: "Oct 10, 2024",
    desc: "Experience the future of Linux with the official 41 release party. Keynote speakers, technical demos, and live Q&A sessions.",
    attendees: 142,
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1470&auto=format&fit=crop",
  }

  return (
    <div className="space-y-12 pb-20">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold text-brand-primary mb-2">
            Community Events
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl font-body">
            Connect with the Fedora community. Join release parties, technical
            workshops, and local meetups across the globe.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-full border border-slate-200">
          {["Month", "Week", "List"].map((view, idx) => (
            <button
              key={view}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold transition-all",
                idx === 0
                  ? "bg-white shadow-sm text-brand-primary"
                  : "text-slate-500 hover:bg-white/50"
              )}
            >
              {view}
            </button>
          ))}
        </div>
      </header>

      {/* Calendar Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-brand-primary min-w-[180px]">
            October 2024
          </h2>
          <div className="flex gap-1">
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200 text-slate-600">
              <ChevronLeft size={18} />
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200 text-slate-600">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 bg-white shadow-sm transition-colors">
            <Filter size={18} />
            Filters
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-primary text-white rounded-xl font-bold hover:bg-opacity-90 shadow-md transition-all">
            <Plus size={22} />
            New Event
          </button>
        </div>
      </div>

      {/* Monthly Grid View */}
      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-7 border-b border-slate-100 bg-slate-50">
          {days.map((day) => (
            <div
              key={day}
              className="p-4 text-center font-bold text-slate-400 uppercase text-[10px] tracking-[0.2em]"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 border-slate-100">
          {/* Previous Month */}
          {prevMonthPadding.map((day) => (
            <div
              key={`prev-${day}`}
              className="min-h-[140px] p-2 border-r border-b border-slate-50 bg-slate-50/50 opacity-30 text-slate-500 font-bold text-sm"
            >
              {day}
            </div>
          ))}
          {/* Current Month */}
          {monthDays.map((day) => {
            const dayEvents = eventItems.filter((e) => e.day === day)
            return (
              <div
                key={`curr-${day}`}
                className={cn(
                  "min-h-[140px] p-3 border-r border-b border-slate-100 group transition-colors hover:bg-slate-50/50",
                  day === 8 && "bg-blue-50/20"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={cn(
                      "text-sm font-bold p-1 w-7 h-7 flex items-center justify-center rounded-full",
                      day === 8 ? "bg-brand-primary text-white" : "text-slate-600"
                    )}
                  >
                    {day}
                  </span>
                </div>
                <div className="space-y-1">
                  {dayEvents.map((evt, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className={cn(
                        "p-1.5 rounded text-[10px] font-bold border-l-4 leading-tight cursor-pointer truncate",
                        evt.color
                      )}
                    >
                      {evt.title}
                    </motion.div>
                  ))}
                </div>
              </div>
            )
          })}
          {/* Next Month */}
          {nextMonthPadding.map((day) => (
            <div
              key={`next-${day}`}
              className="min-h-[140px] p-2 border-r border-b border-slate-50 bg-slate-50/50 opacity-30 text-slate-500 font-bold text-sm"
            >
              {day}
            </div>
          ))}
        </div>
      </div>

      {/* Featured Events & Bottom Info */}
      <section className="space-y-8">
        <h3 className="text-2xl font-bold text-brand-primary">
          Featured This Month
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm flex flex-col md:flex-row group">
            <div className="md:w-1/2 overflow-hidden h-48 md:h-auto">
              <img
                src={featured.img}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Event"
              />
            </div>
            <div className="md:w-1/2 p-8 space-y-6 flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <span className="bg-brand-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  Major Event
                </span>
                <span className="text-slate-500 font-bold text-sm">
                  {featured.date}
                </span>
              </div>
              <h4 className="text-2xl font-bold text-brand-primary leading-tight">
                {featured.title}
              </h4>
              <p className="text-sm text-slate-500 font-body leading-relaxed">
                {featured.desc}
              </p>
              <div className="flex items-center justify-between pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((avatar) => (
                    <img
                      key={avatar}
                      className="w-10 h-10 rounded-full border-2 border-white"
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=at-${avatar}`}
                      alt=""
                    />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">
                    +{featured.attendees}
                  </div>
                </div>
                <button className="bg-brand-secondary text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-primary transition-all">
                  Attend Virtually
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-slate-900 text-white p-8 rounded-3xl h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 text-brand-tertiary">
                  <Video size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Workshop
                  </span>
                </div>
                <h5 className="text-xl font-bold mb-2">
                  Rust Ecosystem in Fedora
                </h5>
                <p className="text-sm text-slate-400 font-body">
                  Deep dive into how Fedora handles the growing Rust ecosystem.
                  Best practices for packaging.
                </p>
              </div>
              <div className="flex items-center justify-between mt-8">
                <span className="text-xs font-bold text-slate-500">
                  Oct 16, 14:00 UTC
                </span>
                <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 p-8 rounded-3xl h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 text-brand-secondary">
                  <Users size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Meetup
                  </span>
                </div>
                <h5 className="text-xl font-bold mb-2 text-brand-primary">
                  Berlin Local Meetup
                </h5>
                <p className="text-sm text-slate-600 font-body">
                  Gather with local users for a night of casual networking and
                  open-source discussion.
                </p>
              </div>
              <div className="flex items-center justify-between mt-8">
                <span className="text-xs font-bold text-slate-400">
                  Oct 22, 18:30 CET
                </span>
                <button className="p-2 bg-white rounded-lg hover:bg-slate-100 transition-all shadow-sm">
                  <MapPin size={18} className="text-brand-secondary" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
