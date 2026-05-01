import * as React from "react"
import { EventsHeader } from "./events-parts/events-header"
import { EventsCalendarControls } from "./events-parts/events-calendar-controls"
import { EventsCalendarGrid } from "./events-parts/events-calendar-grid"
import { EventsFeatured } from "./events-parts/events-featured"

export default function Events() {
  return (
    <div className="space-y-12 pb-20">
      <EventsHeader />
      <EventsCalendarControls />
      <EventsCalendarGrid />
      <EventsFeatured />
    </div>
  )
}
