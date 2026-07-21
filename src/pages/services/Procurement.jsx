// import { PageHero } from "../components/site/PageHero";
// import { CTAStrip } from "../components/site/CTAStrip";

const STEPS = [
  [
    "Equipment Selection",
    "Requirements gathering with your operations team, matched to the right equipment class and specification.",
  ],
  [
    "Supplier Verification",
    "Direct engagement with vetted OEMs and authorised distributors — no grey-market suppliers.",
  ],
  [
    "Technical Evaluation",
    "Independent review of specifications, warranties, service networks and total cost of ownership.",
  ],
  [
    "Procurement Support",
    "Contract negotiation, letters of credit, and full documentation for import and clearance.",
  ],
  [
    "Shipping Coordination",
    "Freight planning, insurance, customs clearance and inland transport to site.",
  ],
  [
    "Delivery Assistance",
    "On-site offloading, positioning, installation and commissioning support.",
  ],
  [
    "After-Sales Support",
    "Warranty administration, spare-parts supply and ongoing maintenance contracts.",
  ],
];

export default function Procurement() {
  return (
    <>
   

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative mx-auto max-w-4xl">
            {/* Vertical Timeline */}
            <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-gray-200 md:block" />

            <ol className="space-y-10">
              {STEPS.map(([title, desc], i) => (
                <li
                  key={title}
                  className="relative grid gap-6 md:grid-cols-[auto_1fr] md:items-start"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-sm border border-gray-200 bg-white text-lg font-bold text-orange-500">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold uppercase text-[#081C3A]">
                      {title}
                    </h3>

                    <p className="mt-2 text-gray-600 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* <CTAStrip /> */}
    </>
  );
}