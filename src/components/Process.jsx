import {
  MessageSquareMore,
  ClipboardList,
  Wrench,
  BadgeCheck,
} from "lucide-react";

const processSteps = [
  {
    id: "01",
    title: "Consultation",
    description:
      "We discuss your project requirements, objectives, and technical needs to understand the best solution.",
    icon: MessageSquareMore,
  },
  {
    id: "02",
    title: "Planning",
    description:
      "Our engineers develop detailed plans, timelines, procurement strategies, and project schedules.",
    icon: ClipboardList,
  },
  {
    id: "03",
    title: "Installation",
    description:
      "Our experienced team installs and integrates equipment with strict safety and quality standards.",
    icon: Wrench,
  },
  {
    id: "04",
    title: "Testing & Commissioning",
    description:
      "Every system is tested, inspected, and commissioned to ensure reliable long-term performance.",
    icon: BadgeCheck,
  },
];

export default function EngineeringProcess() {
  return (
    <section className="bg-primary py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span data-aos="fade-up" className="text-gold border-gold border-l-4 inline pl-4 font-semibold uppercase tracking-widest">
            How We Work
          </span>

          <h2 data-aos="fade-up" data-aos-delay="200" className="text-3xl md:text-4xl font-bold text-white mt-3">
            Our Engineering Process
          </h2>

          <p data-aos="fade-up" data-aos-delay="600" className="text-gray-400 mt-6 leading-8">
            Every project follows a structured workflow to ensure quality,
            safety, efficiency, and timely delivery from concept to completion.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-slate-800">
            <div className="h-full w-full bg-gradient-to-r from-yellow-500 to-yellow-400"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">

            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className="group relative text-center"
                >
                  {/* Number Circle */}
                  <div className="relative z-10 w-24 h-24 mx-auto rounded-full bg-slate-900 border-4 border-gold flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(250,204,21,0.35)]">

                    <Icon
                      size={34}
                      className="text-gold transition-transform duration-300 group-hover:rotate-6"
                    />
                  </div>

                  {/* Step Number */}
                  <div className="mt-5">
                    <span className="text-gold text-sm font-bold tracking-widest">
                      STEP {step.id}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="mt-5 bg-slate-900 border border-slate-800 rounded-2xl p-8 transition-all duration-300 hover:border-gold hover:-translate-y-2">

                    <h3 className="text-white text-xl font-semibold mb-4">
                      {step.title}
                    </h3>

                    <p className="text-slate-400 leading-7 text-sm">
                      {step.description}
                    </p>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}