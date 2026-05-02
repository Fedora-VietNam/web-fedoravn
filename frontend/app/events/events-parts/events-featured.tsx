"use client"

import * as React from "react"
import { featuredEvent } from "@/storage/data"
import { EventsFeaturedSide } from "./events-featured-side"

/**
 * @brief Renders the featured events section including the main event and side panels.
 *
 * @returns JSX element representing the featured events section.
 */
export function EventsFeatured() {
  return (
    <section className="space-y-8">
      <h3 className="text-2xl font-bold text-brand-primary">
        Featured This Month
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm flex flex-col md:flex-row group">
          <div className="md:w-1/2 overflow-hidden h-48 md:h-auto">
            <img
              src={featuredEvent.img}
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
                {featuredEvent.date}
              </span>
            </div>
            <h4 className="text-2xl font-bold text-brand-primary leading-tight">
              {featuredEvent.title}
            </h4>
            <p className="text-sm text-slate-500 font-body leading-relaxed">
              {featuredEvent.desc}
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
                  +{featuredEvent.attendees}
                </div>
              </div>
              <button className="bg-brand-secondary text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-primary transition-all">
                Attend Virtually
              </button>
            </div>
          </div>
        </div>

        <EventsFeaturedSide />
      </div>
    </section>
  )
}
