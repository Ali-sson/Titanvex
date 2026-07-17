import {
  ShieldCheck,
  Award,
  Lightbulb,
  Handshake,
} from "lucide-react";

import CoreValueImg from "../assets/concrete2.jpeg";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We uphold honesty, transparency, and accountability in every partnership and project we undertake.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for the highest standards of quality, delivering reliable solutions that exceed expectations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "By embracing modern technologies and forward-thinking ideas, we create smarter industrial solutions.",
  },
  {
    icon: Handshake,
    title: "Reliability",
    description:
      "Our clients trust us to deliver dependable engineering, procurement, and logistics services on time.",
  },
];

const CoreValues = () => {
  return (
    <section className="bg-primary py-12 ">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Image */}
          <div data-aos="fade-right" className="relative h-full">
            <img
              src={CoreValueImg}
              alt="Titanvex Engineering Team"
              className="h-[650px]mt-20 w-full rounded-2xl object-cover shadow-2xl"
            />
            </div>
          {/* Right Content */}
          <div>
            <span
              data-aos="fade-up"
              className="inline-block border-l-4 border-gold pl-4 text-sm font-semibold uppercase tracking-widest text-gold"
            >
              Our Core Values
            </span>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-6 max-w-xl text-lg leading-8 text-paragraph"
            >
              At Titanvex, our values shape every decision, every partnership,
              and every project we deliver. They guide our commitment to
              excellence and inspire lasting relationships with our clients.
            </p>

            {/* Values */}
            <div className="mt-12 space-y-8">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={300 + index * 100}
                    className="group flex gap-5 border-b border-border pb-8 last:border-none"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gold/10 transition-all duration-300 group-hover:bg-gold">
                      <Icon
                        size={28}
                        className="text-gold transition-all duration-300 group-hover:text-white"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-heading">
                        {value.title}
                      </h3>

                      <p className="mt-2 leading-7 text-paragraph">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;