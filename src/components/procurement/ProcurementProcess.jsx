import {
  ClipboardList,
  Search,
  FileCheck2,
  ShieldCheck,
  Ship,
  PackageCheck,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Requirements",
    description:
      "Understand your project needs, technical specifications and procurement scope.",
  },
  {
    icon: Search,
    title: "Supplier Sourcing",
    description:
      "Identify trusted local and international manufacturers and suppliers.",
  },
  {
    icon: FileCheck2,
    title: "Technical Evaluation",
    description:
      "Review quotations, specifications and compliance with project requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Verify product quality, supplier credibility and industry standards.",
  },
  {
    icon: Ship,
    title: "Logistics Planning",
    description:
      "Coordinate shipping, documentation, customs support and transportation.",
  },
  {
    icon: PackageCheck,
    title: "Delivery",
    description:
      "Deliver equipment safely, on schedule and ready for deployment.",
  },
];

export default function ProcurementProcess() {
  return (
    <section className="bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div data-aos="fade-up" className="mx-auto max-w-7xl text-left">
          <span data-aos="fade-up" data-aos-delay="200" className="text-sm font-semibold uppercase border-l-4 border-gold pl-2 text-gold">
            Our Process
          </span>

          <h2 data-aos="fade-up" data-aos-delay="400" className="text-3xl md:text-4xl font-bold mb-4 tracking-tight uppercase my-2">
            A Reliable Procurement <br/> Workflow
          </h2>

          <p data-aos="fade-up" data-aos-delay="600" className="text-base text-gray-700">
            Every procurement project follows a structured process that
            prioritizes quality, <br className="hidden md:block"/> transparency and efficiency from sourcing
            to final delivery.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Horizontal Line */}

          <div className="absolute left-0 right-0 top-10 hidden h-0.5 bg-slate-300 lg:block"></div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="relative text-center"
                >
                  {/* Circle */}

                  <div data-aos="fade-up"  className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-slate-50 bg-gold shadow-lg">
                    <Icon className="text-slate-900" size={32} />
                  </div>

                  {/* Number */}

                  <span className="mt-5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                    {index + 1}
                  </span>

                  <h3 data-aos="fade-in"  className="mt-4 text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p data-aos="fade-in"  className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
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