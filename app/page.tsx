import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ExperienceSection from "@/components/experience-section"
import PublicationsSection from "@/components/publications-section"
import PatentsSection from "@/components/patents-section"
import ConferencesSection from "@/components/conferences-section"
import EditorialSection from "@/components/editorial-section"
import AwardsSection from "@/components/awards-section"
import GrantsSection from "@/components/grants-section"
import LabMembersSection from "@/components/lab-members-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ExperienceSection />
        <PublicationsSection />
        <PatentsSection />
        <ConferencesSection />
        <EditorialSection />
        <AwardsSection />
        <GrantsSection />
        <LabMembersSection />
      </main>
      <Footer />
    </div>
  )
}
