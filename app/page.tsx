import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { HowItWorks } from "@/components/how-it-works"
import { Hardware } from "@/components/hardware"
import { DashboardPreview } from "@/components/dashboard-preview"
import { Features } from "@/components/features"
import { HardwareAndFeatures } from "@/components/hardware-and-features"
import { Applications } from "@/components/applications"
import { Comparison } from "@/components/comparison"
import { Technologies } from "@/components/technologies"
import { Stats } from "@/components/stats"
import { Roadmap } from "@/components/roadmap"
import { CTA } from "@/components/cta"
import { SiteFooter } from "@/components/site-footer"
import { Team } from "@/components/team"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        {/* <Hardware /> */}
        {/* <DashboardPreview /> */}
        {/* <Features /> */}
        <HardwareAndFeatures />
        <Applications />
        {/* <Comparison /> */}
        <Technologies />
        {/* <Stats /> */}
        {/* <Roadmap /> */}
        <Team />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  )
}
