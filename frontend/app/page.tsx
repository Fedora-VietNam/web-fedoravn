"use client"

import { HeroSection } from "./page-parts/hero-section"
import { QuickStartSection } from "./page-parts/quick-start-section"
import { FeaturedGuidesSection } from "./page-parts/featured-guides-section"
import { WhyFedoraSection } from "./page-parts/why-fedora-section"
import { CommunitySection } from "./page-parts/community-section"
import { ContributorsSection } from "./page-parts/contributors-section"

/**
 * @brief The root landing page of the application hub.
 * 
 * Assembles various sections of the homepage into a single container.
 * 
 * @returns A JSX element representing the landing page.
 */
export default function Portal() {
  return (
    <div className="py-12 space-y-24">
      <HeroSection />
      <QuickStartSection />
      <FeaturedGuidesSection />
      <WhyFedoraSection />
      <CommunitySection />
      <ContributorsSection />
    </div>
  )
}
