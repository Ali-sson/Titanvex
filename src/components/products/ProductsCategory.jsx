import {
  ArrowRight,
  HardHat,
  Zap,
  Truck,
  Factory,
  Forklift,
  Wrench,
  Check,
} from "lucide-react";

import { Link } from "react-router-dom";

import construction from "../../assets/construction.png";
import power from "../../assets/PowerGen.png";
import asphalt from "../../assets/asphalt.png";
import concrete from "../../assets/concrete.png";
import material from "../../assets/material.png";
import parts from "../../assets/spare.png";

import CTAStrip from "../CTA";
import SiteFooter from "../Footer";

const equipment = [
  {
    title: "Construction Equipment",
    description:
      "High-performance machinery for excavation, earthmoving, lifting and site development projects.",
    image: construction,
    icon: HardHat,
    link: "/products/construction-equipment",
    items: [
      "Excavators",
      "Wheel Loaders",
      "Bulldozers",
      "Motor Graders",
      "Backhoe Loaders",
      "Tower Cranes",
    ],
  },
  {
    title: "Power Generation",
    description:
      "Industrial generators and power systems engineered for reliable performance.",
    image: power,
    icon: Zap,
    link: "/products/power-generation",
      items: [
    "Diesel Generators",
    "Gas Generators",
    "Generator Control Panels",
    "Automatic Transfer Switches (ATS)",
    "Power Distribution Systems",
    "Generator Spare Parts",
  ],
  },
  {
    title: "Asphalt & Road Equipment",
    description:
      "Complete solutions for asphalt production, paving and road construction.",
    image: asphalt,
    icon: Truck,
    link: "/products/asphalt-road-equipment",
    items: [
         "Asphalt Mixing Plants",
         "Asphalt Pavers",
         "Road Rollers",
         "Road Milling Machines",
         "Bitumen Sprayers",
         "Chip Spreaders",

    ]
  },
  {
    title: "Concrete Equipment",
    description:
      "Concrete batching plants, pumps and mixers built for efficient production.",
    image: concrete,
    icon: Factory,
    link: "/products/concrete-equipment",
    items: [
        "Concrete Batching Plants",
        "Concrete Mixers",
        "Concrete Pumps",
        "Concrete Silos",
        "Concrete Vibrators",
        "Concrete Block Machines",
       
    ]
  },
  {
    title: "Material Handling",
    description:
      "Forklifts and warehouse equipment designed to keep operations moving.",
    image: material,
    icon: Forklift,
    link: "/products/material-handling",
    items: [
        "Forklifts",
        "Pallet Jacks",
        "Conveyor Systems",
        "Motor Graders",
        "Road Milling Machines",
        "Bitumen Sprayers",

    ]
  },
  {
    title: "Spare Parts",
    description:
      "Genuine replacement parts and components to maximize equipment uptime.",
    image: parts,
    icon: Wrench,
    link: "/products/spare-parts",
    items: [
        "Engine Parts",
        "Hydraulic Components",
        "Electrical Parts",
        "Undercarriage Parts",
        "Filters & Lubricants",

    ]
  },
];

export default function EquipmentSolutions() {
  return (
    <>
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-2  ">
          <span className="inline-block border-l-4 border-gold pl-4 text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Our Products
          </span> 

          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight uppercase my-2">
           Industrial Equipment, Sourced to <br className="hidden md:block"/>  Your Requirements
          </h2>

          <p className="text-base text-gray-700">
           TITANVEX procures high-quality industrial equipment based on your project specifications. From construction and mining equipment to power generation systems, material handling solutions, asphalt equipment, and genuine spare parts, we source reliable products from trusted global manufacturers to meet your technical, operational, and commercial requirements.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 mt-6">
          {equipment.map((item) => {
            // const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group overflow-hidden font-poppins border border-slate-200 bg-white transition-all duration-300 hover:shadow-2xl"
              >
                {/* Image */}

                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-44 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}

                <div className="relative px-8 pb-4 pt-4">
                  {/* Floating Icon

                  <div className="absolute -top-8 left-8 flex h-16 w-16 items-center justify-center rounded-xl bg-primary shadow-lg">
                    <Icon className="h-8 w-8 text-gold" />
                  </div> */}

                  <h3 className="font-bold text-xl font-poppins uppercase">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-brand-gray">
                    {item.description}
                  </p>


                <ul className="mt-4 space-y-2">
                {item.items.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-[12px] text-gray-700">
                    <Check size={16} className="text-gold" />
                    <span>{feature}</span>
                    </li>
                ))}
                </ul>

                  <Link
                    to={item.link}
                    className="mt-8 inline-flex text-xs font-bold border bg-gold border-[gold] px-4 py-2 items-center gap-2 uppercase tracking-wide transition-colors duration-300 hover:bg-gold-dark hover:border-gold-dark "
                  >
                    Equire

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>

        <CTAStrip
        title={
          <>
           Need the Right Equipment for Your Next Project? 
    
          </>
        }
        description="TITANVEX LTD sources and supplies premium industrial equipment tailored to your project requirements, delivering reliable solutions backed by trusted global manufacturers."
      /> 

     <SiteFooter />
    </>
  );
}