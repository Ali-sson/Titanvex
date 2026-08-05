import {
  Building2,
  Factory,
  HardHat,
  Landmark,
  Mountain,
  Pickaxe,
  Route,
  Warehouse,
  Wrench,
} from "lucide-react";

import heroPlant from "../assets/hero-plant.jpg";
import Navbar from "../components/Navbar";


// import CTAStrip from "../components/CTAStrip";

const industries = [
  {
    icon: HardHat,
    title: "Construction",
    body: "Concrete plants, earthmoving fleets and site power for civil contractors.",
  },
  {
    icon: Wrench,
    title: "Civil Engineering",
    body: "Design and supply support for roads, bridges and public works.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    body: "Process equipment, air systems and electrical infrastructure for factories.",
  },
  {
    icon: Pickaxe,
    title: "Mining",
    body: "Haul fleets, drilling support and workshop overhauls for mining operators.",
  },
  {
    icon: Mountain,
    title: "Quarry Operations",
    body: "Crushers, screens and conveying equipment for aggregate producers.",
  },
  {
    icon: Landmark,
    title: "Government Agencies",
    body: "Transparent procurement and technical support for ministries, departments and agencies.",
  },
  {
    icon: Route,
    title: "Infrastructure",
    body: "Utility-scale equipment for roads, bridges, airports and energy projects.",
  },
  {
    icon: Warehouse,
    title: "Industrial Plants",
    body: "Complete plant support, from utilities to production line maintenance.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    body: "Site services and building systems equipment for commercial and residential developments.",
  },
];

const Industries = () => {
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
                    <span data-aos="fade-up" data-aos-delay="200"  className="text-xs border-gold br-l-4 font-bold uppercase tracking-[0.25em] text-gold">
                      Industries We Serve
                    </span>
                     </div>
                      <p data-aos="fade-in" className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
                    TITANVEX delivers tailored equipment procurement, technical support, and engineering solutions that help organizations operate efficiently, safely, and on schedule.
                  </p>
                 
                </div>
              </div>
            </header>
    

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
               <div>
              <h1 data-aos="fade-up" data-aos-delay="200"  className="mb-4 inline-block border-l-4 border-gold pl-4 text-gold font-semibold">Industries We Serve</h1>
              <h1 data-aos="fade-up" data-aos-delay="400"  className="font-poppins text-3xl md:text-4xl font-bold mb-4 tracking-tight"> Built to Serve Every <br className="hidden md:block"/> Industrial Sector</h1>
              <p data-aos="fade-up" data-aos-delay="600"  className="text-base text-gray-700">
                TITANVEX partners with contractors, manufacturers, mining companies, government agencies, and industrial operators to deliver reliable equipment procurement, engineering expertise, and technical solutions tailored to the unique demands of each sector.
              </p>
              </div>
              </div>



          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl"
              >
                <div className="inline-flex rounded-lg bg-gold/10 p-3">
                  <Icon className="h-7 w-7 text-gold" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-primary">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;