import Navbar from "../../components/Navbar";
import heroPlant from "../../assets/hero-plant.jpg";
import Engineers from "../../assets/engineers.jpeg";
import Process from "../../components/Process";
import CTAStrip from "../../components/CTA";

import {
  Wrench,
  Settings2,
  ShieldCheck,
  Headset,
} from "lucide-react";
import SiteFooter from "../../components/Footer";

const services = [
  {
    icon: Wrench,
    title: "Equipment Installation",
    description:
      "Professional installation of industrial machinery, ensuring safe setup and optimal performance from day one.",
  },
  {
    icon: Settings2,
    title: "Commissioning",
    description:
      "Complete system testing, calibration, and startup services to guarantee reliable operation.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance",
    description:
      "Preventive and corrective maintenance solutions that maximize equipment lifespan and minimize downtime.",
  },
  {
    icon: Headset,
    title: "Technical Support",
    description:
      "Dedicated engineering support, diagnostics, and rapid response whenever your operations need assistance.",
  },
];

export default function Engineering() {
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
                Engineering Services
              </span>
               </div>
                <p data-aos="fade-up" data-aos-delay="600"  className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
            From installation and commissioning to maintenance and ongoing technical support, Titanvex delivers engineering solutions that keep industries moving efficiently.
            </p>
           
          </div>
        </div>
      </header>

    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-16">
          <p data-aos="fade-up"className="uppercase tracking-[0.3em] text-sm border-l-4 inline-block pl-4 border-gold text-gold font-semibold">
            Engineering Services
          </p>

          <h2 data-aos="fade-up" className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
            Engineering Expertise Built Around Your Projects
          </h2>

          <p data-aos="fade-up" data-aos-delay="600" className="mt-6 text-slate-600 leading-8">
            From installation and commissioning to maintenance and ongoing
            technical support, Titanvex delivers engineering solutions that
            keep industries moving efficiently.
          </p>
        </div>

        {/* Content */}

        <div data-aos="fade-up" data-aos-delay="200" className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Image */}

          <div data-aos="fade-right" data-aos-delay="200" className="relative overflow-hidden rounded-3xl h-[720px]">

            <img
              src={Engineers}
              alt=""
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />

          </div>

          {/* Services */}

          <div className="space-y-6">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group border border-slate-200 rounded-2xl p-7 hover:border-gold hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="flex justify-between items-start">

                    <div className="flex gap-5">

                      <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center">

                        <Icon
                          size={28}
                          className="text-gold"
                        />

                      </div>

                      <div>

                        <h3 className="text-xl font-semibold text-slate-900">
                          {service.title}
                        </h3>

                        <p className="mt-3 text-slate-600 leading-7">
                          {service.description}
                        </p>

                      </div>

                    </div>

                  </div>
                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>

    <Process/>

    <CTAStrip
  title={
    <>
      Need Expert Engineering Solutions for Your <br />
      Next Project ? 
    </>
  }
  description="TITANVEX LTD delivers reliable engineering services that keep your projects running safely, efficiently, and on schedule."
/>

<SiteFooter/>
    </>
  );
}