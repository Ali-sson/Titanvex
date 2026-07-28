import {
  Boxes,
  Cog,
  FileCheck,
  Globe,
  MapPinned,
  Network,
  PackageCheck,
  Ship,
  Truck,
  Users,
  Warehouse,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Industrial Equipment Transportation",
    description:
      "Safe coordination of heavy machinery, industrial equipment, and oversized project cargo from suppliers to project sites.",
  },
  {
    icon: Workflow,
    title: "Project Logistics Coordination",
    description:
      "Planning and coordinating logistics activities that keep engineering and infrastructure projects on schedule.",
  },
  {
    icon: Network,
    title: "Supply Chain Management",
    description:
      "Managing the flow of equipment, materials, and information across the entire project supply chain.",
  },
  {
    icon: Ship,
    title: "Freight Forwarding Coordination",
    description:
      "Coordinating sea, air, and land freight through trusted logistics partners for seamless cargo movement.",
  },
  {
    icon: PackageCheck,
    title: "Procurement Logistics",
    description:
      "Supporting procurement teams with shipment planning, supplier delivery schedules, and logistics coordination.",
  },
  {
    icon: Users,
    title: "Vendor & Supplier Coordination",
    description:
      "Working closely with manufacturers, suppliers, and contractors to ensure timely project execution.",
  },
  {
    icon: Cog,
    title: "Spare Parts Distribution",
    description:
      "Ensuring critical spare parts are available and delivered where they are needed to minimize downtime.",
  },
  {
    icon: Warehouse,
    title: "Warehouse & Inventory Coordination",
    description:
      "Coordinating storage, inventory visibility, and material availability throughout the project lifecycle.",
  },
  {
    icon: MapPinned,
    title: "Last-Mile Equipment Delivery",
    description:
      "Delivering industrial equipment safely and efficiently to construction sites, plants, and remote facilities.",
  },
  {
    icon: Globe,
    title: "Import & Export Logistics Support",
    description:
      "Supporting international equipment movement with coordinated logistics planning and shipment management.",
  },
  {
    icon: FileCheck,
    title: "Customs Documentation Assistance",
    description:
      "Assisting with shipping documentation and customs coordination where required for smooth cargo clearance.",
  },
  {
    icon: Boxes,
    title: "End-to-End Supply Chain Solutions",
    description:
      "Providing a single point of coordination from supplier engagement through transportation to final delivery.",
  },
];

export default function LogisticsCapabilities() {
  return (
    <section className=" py-24 bg-gray-100">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          data-aos="fade-up"
          className="max-w-7xl mx-auto text-left"
        >
          <span className="mb-4 border-l-4 border-gold pl-4 text-gold font-semibold">
            Our Capabilities
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight uppercase my-2">
            Integrated Logistics & Supply <br className="hidden md:block"/> Chain Solutions
          </h2>

          <p className="text-base text-gray-700">
            Titanvex coordinates every stage of the industrial supply chain,
            helping engineering, construction, <br className="hidden md:block"/> energy, and infrastructure
            projects move equipment, materials, and critical assets efficiently
            from suppliers to project sites.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group rounded-3xl bg-white border border-slate-700 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold"
              >
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 transition-all duration-300 group-hover:bg-gold">
                  <Icon className="h-8 w-8 text-gold transition-colors duration-300 group-hover:text-primary" />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-semibold">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-slate-700">
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