import heroPlant from "../../assets/hero-plant.jpg";
import Navbar from "../../components/Navbar";
import ProcurementOverview from "../../components/procurement/ProcurementOverview";
import ProcurementProcess from "../../components/procurement/ProcurementProcess";
import ProcurementServices from "../../components/procurement/ProcurementServices";
import CTAStrip  from "../../components/CTA";
import SiteFooter from "../../components/Footer";

function Procurement() {
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
                  <span data-aos="fade-up" data-aos-delay="200"  className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                    Procurement & Global Sourcing
                  </span>
                   </div>
                    <p data-aos="fade-in" className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
                 TITANVEX LTD delivers reliable procurement solutions for
              industrial, construction, manufacturing, energy and
              infrastructure projects through trusted supplier networks,
              quality assurance and efficient logistics coordination.
              </p>
               
              </div>
            </div>
          </header>

          <ProcurementOverview />

          <ProcurementProcess/>

          <ProcurementServices />

            <CTAStrip
            title={
              <>
                Need Reliable Equipment Procurement Solutions? <br /> 
              </>
            }
            description="From sourcing genuine industrial equipment to managing international procurement and delivery, TITANVEX provides trusted end-to-end solutions tailored to your project needs."
          />

          <SiteFooter />
    </>
  )
}
        


export default Procurement