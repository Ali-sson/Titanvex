import {
  ClipboardList,
  Users,
  PackageCheck,
  Ship,
  Warehouse,
  Truck,
  CheckCircle2,
} from "lucide-react";

const process = [
  {
    icon: ClipboardList,
    title: "Project Planning",
    description:
      "Understanding project requirements, timelines, and logistics objectives.",
  },
  {
    icon: Users,
    title: "Supplier Coordination",
    description:
      "Working closely with vendors and manufacturers to align deliveries.",
  },
  {
    icon: PackageCheck,
    title: "Procurement Support",
    description:
      "Coordinating procurement logistics and material readiness.",
  },
  {
    icon: Ship,
    title: "Freight Coordination",
    description:
      "Managing domestic and international cargo movement through trusted partners.",
  },
  {
    icon: Warehouse,
    title: "Storage & Inventory",
    description:
      "Ensuring equipment and materials remain secure and readily available.",
  },
  {
    icon: Truck,
    title: "Site Delivery",
    description:
      "Coordinating safe and timely delivery to project locations.",
  },
  {
    icon: CheckCircle2,
    title: "Project Support",
    description:
      "Continuous logistics coordination throughout project execution.",
  },
];

export default function SupplyChainProcess() {
  return (
    <section className="bg-[#081C3A] py-24">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div
          data-aos="fade-up"
          className="max-w-7xl mx-auto text-left"
        >
          <span className="mb-4 border-l-4 border-gold pl-4 text-gold font-semibold">
            Our Process
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight uppercase my-2 text-white">
            Coordinating Every Stage <br className="hidden md:block"/> of Your Supply Chain
          </h2>

          <p className="text-base text-white">
            Our integrated approach ensures every stage of the logistics
            process is carefully planned, coordinated,<br className="hidden md:block"/> and executed,
            minimizing delays while maximizing operational efficiency.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-12 max-w-7xl mx-auto">

          {/* Desktop Line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-[2px] bg-gold/20"></div>

          <div className="grid gap-12 lg:grid-cols-7">

            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="relative text-center"
                >
                  {/* Circle */}
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-primary bg-gold">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* Step Number */}
                  <span className="mt-5 block text-sm font-semibold tracking-widest text-gold">
                    STEP {index + 1}
                  </span>

                  {/* Title */}
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}