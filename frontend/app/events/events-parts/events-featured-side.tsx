import * as React from "react"
import { Video, MapPin, ExternalLink, Users } from "lucide-react"

/**
 * @brief Renders the side panel for featured events including workshops and meetups.
 *
 * @returns JSX element representing the featured events side panel.
 */
export function EventsFeaturedSide() {
  return (
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
  )
}
