import {
  Factory,
  HardHat,
  Building2,
  // Shirt,
  Sun,
  // Cog,
  Wrench,
  Globe2,
  ShieldCheck,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "Industrial Equipment Sourcing.",
    description:
      "Reliable sourcing of industrial machinery and equipment from trusted manufacturers.",
  },
  {
    icon: HardHat,
    title: "Construction Machinery",
    description:
      "Procurement of construction equipment for infrastructure and civil engineering projects.",
  },
  {
    icon: Building2,
    title: "Asphalt & Concrete Plants",
    description:
      "Supply of asphalt mixing plants, batching plants and related production equipment.",
  },
  // {
  //   icon: Shirt,
  //   title: "Industrial Laundry Equipment",
  //   description:
  //     "Commercial and industrial laundry systems for hospitals, hotels and institutions.",
  // },
  {
    icon: Sun,
    title: "Solar & Electrical Equipment",
    description:
      "Solar energy systems, electrical components and power distribution equipment.",
  },
  // {
  //   icon: Cog,
  //   title: "Hydraulic & Pneumatic Components",
  //   description:
  //     "Quality hydraulic systems, pneumatic equipment and industrial automation components.",
  // },
  {
    icon: Wrench,
    title: "Industrial Spare Parts",
    description:
      "Supply of genuine replacement parts to maximize equipment performance and reliability.",
  },
  {
    icon: Globe2,
    title: "Global Supplier Sourcing",
    description:
      "Connecting clients with reputable manufacturers and suppliers across global markets.",
  },
  {
    icon: ShieldCheck,
    title: "Vendor Evaluation & QA",
    description:
      "Comprehensive supplier verification, inspections and quality assurance processes.",
  },
  {
    icon: Truck,
    title: "Procurement Logistics",
    description:
      "End-to-end logistics coordination, shipping, customs support and final delivery.",
  },
];

export default function ProcurementServices() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-7xl text-left">
          <span className="text-sm font-semibold uppercase border-l-4 border-gold pl-2 text-gold">
            What We Supply
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight uppercase my-2">
            Our Procurement <br/> Services
          </h2>

          <p className="text-base text-gray-700">
            We deliver comprehensive procurement solutions tailored to
            industrial, construction, <br/> energy, manufacturing and
            infrastructure projects.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:bg-[#081C3A] hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gold transition group-hover:bg-gold-dark">
                  <Icon
                    size={30}
                    className="text-black group-hover:text-slate-900"
                  />
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-900 transition group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 transition group-hover:text-slate-300">
                  {service.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}