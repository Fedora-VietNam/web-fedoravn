import * as React from "react"
import { PortalHero } from "./portal-parts/portal-hero"
import { PortalImpact } from "./portal-parts/portal-impact"
import { PortalPaths } from "./portal-parts/portal-paths"

export default function PortalDetailed() {
  return (
    <div className="space-y-16 pb-20">
      <PortalHero />
      <PortalImpact />
      <PortalPaths />
    </div>
  )
}
