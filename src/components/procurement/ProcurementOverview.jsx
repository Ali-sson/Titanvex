import procurementImage from "../../assets/Freight.jpg";

import {
  ShieldCheck,
  Globe,
  BadgeDollarSign,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Genuine Equipment",
    description:
      "Source authentic industrial equipment and engineering materials from trusted manufacturers.",
  },
  {
    icon: Globe,
    title: "Verified Suppliers",
    description:
      "Access a reliable network of carefully evaluated local and international vendors.",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Pricing",
    description:
      "Obtain cost-effective procurement solutions without compromising quality.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description:
      "From supplier coordination to logistics planning, we ensure timely project delivery.",
  },
];

export default function ProcurementOverview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-7xl text-left">
          <span className="text-sm font-semibold uppercase border-l-4 border-gold pl-2 text-gold">
            Procurement Excellence
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight uppercase my-2">
            Reliable Equipment <br/> Procurement
          </h2>

          <p className="text-base text-gray-700">

TITANVEX LTD provides professional equipment procurement services for industrial, construction, energy, manufacturing, and infrastructure projects. We assist clients in sourcing genuine, high-quality equipment, machinery, spare parts, and engineering materials from trusted local and international manufacturers.

<p>Our procurement process focuses on supplier verification, technical evaluation, quality assurance, competitive pricing, and timely delivery. Whether supplying a single machine or coordinating procurement for an entire project, we ensure every item meets the required technical specifications and industry standards.</p>

<p>We manage the entire procurement cycle; from identifying the right equipment and obtaining quotations to supplier coordination, logistics planning, customs support (where applicable), and final delivery—giving our clients a reliable, cost-effective, and hassle-free procurement experience.</p>

Our Procurement Services Includes:

          </p>
        </div>

        {/* Feature Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

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

        {/* Image */}

        <div className="mt-20 overflow-hidden rounded-3xl shadow-xl">

          <img
            src={procurementImage}
            alt="Equipment Procurement"
            className="h-[500px] w-full object-cover"
          />

        </div>

      </div>
    </section>
  );
}