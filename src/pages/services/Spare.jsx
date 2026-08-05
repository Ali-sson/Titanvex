// import heroPlant from "../../assets/hero-plant2.png"
import Navbar from "../../components/Navbar"
import spareParts from "../../assets/spareParts.png"
import CTAStrip  from "../../components/CTA";



import {
  ShieldCheck,
  Globe,
  Headset,
  Truck,
} from "lucide-react";
import SiteFooter from "../../components/Footer";

const features = [
  {
    icon: ShieldCheck,
    title: "Genuine & Quality Parts",
    description:
       "Source genuine OEM and high-quality replacement parts from trusted global manufacturers to maximize equipment performance and minimize downtime.",
  },
  {
    icon: Globe,
    title: "Reliable Global Sourcing",
    description:
       "Leverage our trusted network of local and international manufacturers and suppliers to source high-quality industrial equipment and spare parts."
  },
  {
    icon: Headset,
    title: "Technical Support",
    description:
        "Receive expert technical guidance and after-sales support to ensure the optimal performance and reliability of your equipment.",
  },
  {
    icon: Truck,
    title: "Fast Procurement & Delivery",
    description:
       "We streamline procurement and logistics to ensure your equipment and spare parts are delivered on time and ready for your project."
  },
];


function Spare() {
  return (
    <>
     <Navbar />
    
          {/* Hero */}
          <header className="relative overflow-hidden bg-primary py-20 lg:py-28">
            <img
              src={spareParts}
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
                   Genuine Industrial Spare Parts
                  </span>
                   </div>
                    <p data-aos="fade-in" className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
                  Keeping your equipment running with reliable spare parts and components sourced from trusted manufacturers, ensuring optimal performance and longevity for your industrial machinery.
                </p>
               
              </div>
            </div>
          </header>

           <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-6">
          
                  {/* Heading */}
          
                  <div data-aos="fade-up" className="mx-auto max-w-7xl text-left">
                    <span className="mb-4 inline-block border-l-4 border-gold pl-4 text-gold font-semibold">
                      Spare Parts Sourcing & Supply
                    </span>
          
                    <h2 data-aos="fade-up" data-aos-delay="200" className="font-poppins text-3xl md:text-4xl font-bold mb-4 tracking-tight uppercase my-2">
                      Industrial Spare Parts <br className="hidden md:block"/> Solutions
                    </h2>
          
                    <p data-aos="fade-up" data-aos-delay="400" className="text-base text-gray-700">
          
TITANVEX LTD provides professional spare parts sourcing and supply services for industrial equipment and engineering systems. Whether you require replacement components for routine maintenance, emergency repairs, or planned shutdowns, we help you obtain genuine, high-quality parts from trusted manufacturers and suppliers.

Our team works closely with clients to identify the correct components and coordinate procurement and delivery, helping reduce downtime and keep operations running efficiently.
          
                    </p>
                  </div>
          
                  {/* Feature Cards */}
          
                  <div data-aos="fade-up" data-aos-delay="200" className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          
                    {features.map((item, index) => {
                      const Icon = item.icon;
          
                      return (
                        <div
                          key={index}
                          className="group rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-x-gold-dark hover:shadow-xl"
                        >
                          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gold text-slate-900 transition group-hover:bg-gold-dark group-hover:text-slate-900">
                            <Icon size={28} />
                          </div>
          
                          <h3 className="mt-6 text-xl font-semibold text-slate-900">
                            {item.title}
                          </h3>
          
                          <p className="mt-3 leading-7 text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
          
                </div>
              </section>

               <CTAStrip
                          title={
                            <>
                              Looking For a Spare Part? <br /> 
                            </>
                          }
                          description="Whether you know the exact part number or simply have your equipment model and a description of the issue, our team is ready to help identify and source the right solution."
                        />

                        <SiteFooter/>
          </>
  )
}

export default Spare