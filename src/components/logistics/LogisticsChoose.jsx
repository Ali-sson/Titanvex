import {
  CheckCircle2,
  Workflow,
  ShieldCheck,
  Clock3,
  ArrowRight,
} from "lucide-react";

const advantages = [
  {
    icon: Workflow,
    title: "Integrated Project Coordination",
    description:
      "A single partner coordinating procurement, logistics, suppliers, and engineering support throughout your project lifecycle.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Supply Chain Execution",
    description:
      "Every shipment, supplier, and delivery is carefully coordinated to minimize delays and maximize efficiency.",
  },
  {
    icon: Clock3,
    title: "On-Time Project Delivery",
    description:
      "Efficient planning and scheduling help keep your projects moving according to timeline and operational priorities.",
  },
  {
    icon: CheckCircle2,
    title: "Industrial Expertise",
    description:
      "Our solutions are tailored for engineering, construction, manufacturing, energy, and infrastructure projects.",
  },
];

export default function WhyChooseTitanvex() {
  return (
    <section className="bg-card py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div data-aos="fade-right">
            <span className="inline-flex items-center rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-sm font-medium text-gold">
              Why Choose Titanvex
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight text-white">
              A Trusted Partner for Industrial Logistics &
              <span className="text-gold"> Supply Chain Coordination</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Titanvex combines logistics expertise with engineering industry
              knowledge to deliver coordinated supply chain solutions that
              support complex industrial projects. We help clients reduce
              operational delays, improve visibility, and ensure critical
              equipment and materials arrive where they're needed—on time and
              ready for deployment.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "End-to-end logistics coordination",
                "Single point of project communication",
                "Reliable supplier & vendor management",
                "Solutions tailored to industrial projects",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-gold" />
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>

            <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-semibold text-primary transition hover:bg-secondaryGold">
              Discuss Your Project
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Cards */}
          <div
            data-aos="fade-left"
            className="grid gap-6 sm:grid-cols-2"
          >
            {advantages.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-slate-700 bg-primary p-8 transition-all duration-300 hover:-translate-y-2 hover:border-gold"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10">
                    <Icon className="h-7 w-7 text-gold" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
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