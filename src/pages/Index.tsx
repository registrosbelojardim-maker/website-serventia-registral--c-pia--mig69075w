import { HeroSection } from '@/components/home/HeroSection'
import { AboutSection } from '@/components/home/AboutSection'
import { IdentitySection } from '@/components/home/IdentitySection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { LocationSection } from '@/components/home/LocationSection'

export default function Index() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <AboutSection />
      <IdentitySection />
      <ServicesSection />
      <LocationSection />
    </div>
  )
}
