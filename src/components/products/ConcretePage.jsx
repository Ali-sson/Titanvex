import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import batchingPlant from "../../assets/wheel-loaders.jpg";
import mixer from "../../assets/wheel-loaders.jpg";
import pump from "../../assets/wheel-loaders.jpg";
import transitMixer from "../../assets/wheel-loaders.jpg";
import silo from "../../assets/wheel-loaders.jpg";
import vibrator from "../../assets/wheel-loaders.jpg";
import blockMachine from "../../assets/wheel-loaders.jpg";
import recycling from "../../assets/wheel-loaders.jpg";

const equipment = [
  {
    title: "Concrete Batching Plants",
    image: batchingPlant,
    description:
      "Efficient batching solutions for consistent concrete production.",
  },
  {
    title: "Concrete Mixers",
    image: mixer,
    description:
      "Reliable mixers designed for high-performance concrete mixing.",
  },
  {
    title: "Concrete Pumps",
    image: pump,
    description:
      "Powerful pumping solutions for commercial and infrastructure projects.",
  },
  {
    title: "Transit Mixers",
    image: transitMixer,
    description:
      "Safe and efficient transportation of ready-mix concrete.",
  },
  {
    title: "Concrete Silos",
    image: silo,
    description:
      "Bulk cement storage systems for industrial construction sites.",
  },
  {
    title: "Concrete Vibrators",
    image: vibrator,
    description:
      "Ensure proper concrete compaction and structural strength.",
  },
  {
    title: "Concrete Block Machines",
    image: blockMachine,
    description:
      "Automated block production equipment for large-scale manufacturing.",
  },
  {
    title: "Concrete Recycling Equipment",
    image: recycling,
    description:
      "Recover and reuse concrete materials efficiently.",
  },
];

export default function EquipmentGrid() {
  const pageSize = 4;
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(equipment.length / pageSize);

  const visibleEquipment = equipment.slice(
    page * pageSize,
    page * pageSize + pageSize
  );

  return (
    <section className="bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-14 flex items-end justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
              Equipment Types
            </span>

            <h2 className="mt-4 text-4xl font-bold text-white">
              Equipment For Every Industrial Needs
            </h2>

            <p className="mt-4 max-w-2xl text-slate-300">
             Explore the categories of industrial equipment, machinery, and genuine spare parts that TITANVEX can source through its trusted global supplier network. We help clients procure reliable solutions for construction, mining, infrastructure, energy, manufacturing, and industrial projects.
            </p>
          </div>

          {/* Navigation */}
          <div className="hidden gap-3 md:flex">
            <button
              onClick={() =>
                setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
              }
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 text-white transition hover:border-gold hover:bg-gold hover:text-primary"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() =>
                setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
              }
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 text-white transition hover:border-gold hover:bg-gold hover:text-primary"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {visibleEquipment.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-slate-700 bg-card transition duration-300 hover:-translate-y-2 hover:border-gold"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-7">
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>

                <button className="mt-8 inline-flex items-center gap-2 font-medium text-gold">
                  Request Information
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="mt-10 flex justify-center gap-4 md:hidden">
          <button
            onClick={() =>
              setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
            }
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 text-white hover:border-gold hover:bg-gold hover:text-primary"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() =>
              setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
            }
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 text-white hover:border-gold hover:bg-gold hover:text-primary"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}