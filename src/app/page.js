import BannerCarousel from '@/components/BannerCarousel'
import DonationBanner from '@/components/DonationBanner'
import HeroSection from '@/components/HeroSection'
import IntractableCases from '@/components/IntractableCases'
import Products from '@/components/Products'
import Projects from '@/components/Projects'
import Statistics from '@/components/Statistics'
import TrustedPartners from '@/components/TrustedPartners'

export default function Home() {
  return (
  <div  >
<DonationBanner/>
<HeroSection/> 
{/* <Products/> */}
{/* <BannerCarousel/> */}
{/* <IntractableCases/> */}
<Statistics/>
<Projects/>
<TrustedPartners/>
    
  </div>
  )
}
