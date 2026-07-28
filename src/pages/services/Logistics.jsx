
import Navbar from '../../components/Navbar'
import heroPlant from "../../assets/hero-plant.jpg";
import LogisticsOverview from "../../components/logistics/LogisticsOverview";
import LogisticsCapabilities from '../../components/logistics/LogisticsCapabilities';
import LogisticsProcess from '../../components/logistics/LogisticsProcess'
import CTA from '../../components/CTA'
import SiteFooter from '../../components/Footer';

function Logistics() {
  return (
    <>
          <Navbar />
    
          {/* Hero */}
          <header className="relative overflow-hidden bg-primary py-20 lg:py-28">
            <img
              src={heroPlant}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-20"
              width={1920}
              height={1080}
            />
            <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-2 inline-block border-l-4 border-gold pl-4">
                  <span data-aos="fade-in" className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                   Logistics & Supply Solutions
                  </span>
                   </div>
                    <p data-aos="fade-in" className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
               Delivering industrial equipment, engineering materials, and critical assets safely, efficiently, and on schedule across Nigeria and beyond.
                </p>
               
              </div>
            </div>
          </header>

          <LogisticsOverview />

          <LogisticsCapabilities />

          <LogisticsProcess/>

          
          <CTA 
           title = {
            <> 
             Partner with Titanvex for End-to-End Project Logistics
            </>
           }
           description='Coordinating every stage of your industrial supply chain with precision and reliability.'
             primaryText = "Request a Consultation"/>


             <SiteFooter/>
        

          
          </>
  )
}

export default Logistics