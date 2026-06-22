import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SkipLink from '@/components/shared/SkipLink'
import HeroSection from '@/components/home/HeroSection'
import MeetCharactersSection from '@/components/home/MeetCharactersSection'
import NewsletterBlock from '@/components/shared/NewsletterBlock'
import ActivitiesSection from '@/components/home/ActivitiesSection'
import ColouringSection from '@/components/home/ColouringSection'
import HealthyEatingSection from '@/components/home/HealthyEatingSection'
import ParentsZoneSection from '@/components/home/ParentsZoneSection'

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        <HeroSection />
        <MeetCharactersSection />
        <NewsletterBlock />
        <ActivitiesSection />
        <ColouringSection />
        <HealthyEatingSection />
        <ParentsZoneSection />
      </main>
      <Footer />
    </>
  )
}
