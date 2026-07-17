import { Link } from "react-router-dom";

import {
  Wrench,
  Package,
  ShoppingCart,
  Truck,
  HardHat,
  Hammer,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Engineering Services",
    description:
      "Professional engineering solutions tailored to industrial and infrastructure projects.",
  },
  {
    icon: Package,
    title: "Equipment Supply",
    description:
      "Supplying high-quality industrial machinery and equipment from trusted manufacturers.",
  },
  {
    icon: ShoppingCart,
    title: "Procurement",
    description:
      "Strategic sourcing of equipment, components, and industrial materials worldwide.",
  },
  {
    icon: Truck,
    title: "Logistics Coordination",
    description:
      "Reliable transportation and supply chain coordination to keep projects on schedule.",
  },
  {
    icon: HardHat,
    title: "Installation & Commissioning",
    description:
      "Expert installation, testing, and commissioning for seamless project delivery.",
  },
  {
    icon: Hammer,
    title: "Maintenance & Support",
    description:
      "Preventive maintenance, refurbishment, and technical support for long-term performance.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="bg-background py-20 max-w-7xl mx-auto px-6 lg:px-8">
     <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
               <div>
              <h1 data-aos="fade-up" data-aos-delay="200"  className="mb-4 inline-block border-l-4 border-gold pl-4 text-gold font-semibold">What we do</h1>
              <h1 data-aos="fade-up" data-aos-delay="400"  className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"> Integrated Industrial Solutions</h1>
              <p data-aos="fade-up" data-aos-delay="600"  className="text-base text-gray-700">
                 Titanvex delivers engineering expertise, equipment supply,
            procurement, logistics <br/> coordination, installation, and maintenance
            services that support industrial projects from concept to completion.
              </p>
              </div>

            <Link
              to="/products"
              className="hidden shrink-0 border-b-2 border-gold pb-1 text-sm font-bold uppercase tracking-widest text-gold md:inline-block"
            >
              Explore Services
            </Link>
          </div>

        

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gold/10 transition-colors duration-300 group-hover:bg-gold">
                  <Icon
                    size={30}
                    className="text-gold transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-heading">
                  {service.title}
                </h3>

                <p className="mb-4 leading-7 text-paragraph">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;