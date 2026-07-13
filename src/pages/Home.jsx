import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Cog, Factory, HardHat, ShieldCheck, Truck, Zap } from "lucide-react";

import heroExcavator from "../assets/hero-excavator.jpg";
import heroPlant from "../assets/hero-plant.jpg";
import catConstruction from "../assets/cat-construction.jpg";
import catPower from "../assets/cat-power.jpg";
import catLaundry from "../assets/cat-laundry.jpg";
import Engineer from "../assets/Engineer.png";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import SiteFooter from "../components/Footer";
// import { CTAStrip } from "../components/CTAStrip";
// import { SectionHeader } from "../components/SectionHeader";

const CATEGORIES = [
  {
    title: "Construction Machinery",
    image: catConstruction,
    description:
      "Concrete mixers, batching plants, pavers and earthmoving equipment engineered for Nigerian terrain.",
    to: "/products",
  },
  {
    title: "Power & Energy Solutions",
    image: catPower,
    description:
      "Hybrid solar power systems and industrial generators designed for continuous, high-load operation.",
    to: "/products",
  },
  {
    title: "Industrial Equipment",
    image: catLaundry,
    description:
      "Commercial laundry, electrical distribution and specialised industrial equipment for plants and facilities.",
    to: "/products",
  },
];

const CAPABILITIES = [
  { icon: HardHat, label: "Heavy Machinery" },
  { icon: Zap, label: "Power Solutions" },
  { icon: Cog, label: "Engineering Services" },
  { icon: Truck, label: "Procurement" },
  { icon: ShieldCheck, label: "Maintenance" },
  { icon: Factory, label: "Plant Automation" },
];

const WHY_CHOOSE = [
  "Verified suppliers across Europe, Asia and North America",
  "In-house engineering team with field experience",
  "Nationwide service coverage across all 36 Nigerian states",
  "Genuine spare parts with full manufacturer warranties",
  "Transparent procurement with technical documentation",
  "24/7 breakdown response for contracted clients",
];

const INDUSTRIES = [
  "Construction",
  "Civil Engineering",
  "Manufacturing",
  "Mining & Quarry",
  "Government",
  "Infrastructure",
  "Industrial Plants",
  "Real Estate",
];


function HomePage() {
  useEffect(() => {
    document.title = "TITANVEX LTD — Industrial Equipment & Engineering Services";
  }, []);

  return (
    <>

    <Navbar />
      {/* Hero */}
      <header className="relative overflow-hidden bg-primary py-20 lg:py-28">
        <img
          src={heroPlant}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          width={1920}
          height={1080}
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-6 inline-block border-l-4 border-gold pl-4">
              <span data-aos="fade-up" className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                Engineering Excellence · Nigeria
              </span>
            </div>
          <h1 data-aos="fade-up" className="font-heading text-4xl font-bold uppercase leading-tight text-white md:text-5xl">
                 Delivering Reliable
                    <br />
                 Engineering &
                  <br />
                 <span className="text-gold">Industrial Solutions</span>
           </h1>
            <p data-aos="fade-up" data-aos-delay="200" className="mt-8 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              TITANVEX LTD delivers world-class engineering services, heavy equipment
              procurement and industrial automation for Nigeria's manufacturing,
              construction and infrastructure sectors.
            </p>
            <div data-aos="fade-right" data-aos-delay="400"  className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-gold px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-gold-dark"
              >
                View Equipment <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/10"
              >
                Our Services
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <img
                src={heroExcavator}
                alt="Yellow hydraulic excavator arm"
                className="aspect-square w-full rounded-sm object-cover shadow-2xl outline outline-1 -outline-offset-1 outline-white/10"
                width={1024}
                height={1024}
              />
              <div className="absolute -bottom-6 -left-6 bg-gold p-8 text-white">
                <span className="block font-heading text-4xl font-bold">1+</span>
                <span className="text-xs font-bold uppercase tracking-widest">
                  Years Expertise
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="border-b border-hairline bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 text-center lg:grid-cols-4">
          {[
            ["100%", "Quality Assurance"],
            ["24/7", "Technical Support"],
            ["36", "States Coverage"],
            ["100%", "Genuine Spares"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-heading text-3xl font-bold text-brand-navy">{n}</div>
              <div className="mt-1 text-xs font-bold uppercase tracking-widest text-brand-gray">
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Capabilities strip */}
      <section className="border-b border-hairline bg-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p data-aos="fade-up" className="text-center text-xs font-bold uppercase tracking-widest text-brand-gray">
            Core capabilities
          </p>
          <div data-aos="fade-up" data-aos-delay="200"  className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {CAPABILITIES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 border border-hairline bg-white p-6 text-center transition-colors hover:border-brand-orange"
              >
                <Icon className="size-8 text-gold" />
                <span className="font-heading text-sm font-semibold uppercase tracking-tight text-brand-navy">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
               <div>
              <h1 data-aos="fade-up" data-aos-delay="200"  className="mb-4 inline-block border-l-4 border-gold pl-4 text-gold font-semibold">Industrial Solutions</h1>
              <h1 data-aos="fade-up" data-aos-delay="400"  className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Featured Product Categories</h1>
              <p data-aos="fade-up" data-aos-delay="600"  className="text-base text-gray-700">
                From massive concrete plants to sophisticated solar power grids, we supply  <br/> the machinery that builds and powers nations.
              </p>
              </div>

            <Link
              to="/products"
              className="hidden shrink-0 border-b-2 border-gold pb-1 text-sm font-bold uppercase tracking-widest text-gold md:inline-block"
            >
              View Full Catalog
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {CATEGORIES.map((c) => (
              <Link
                key={c.title}
                to={c.to}
                className="group block border border-hairline bg-white transition-colors hover:border-brand-orange"
              >
                <div className="aspect-[3/2] overflow-hidden bg-slate-100">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={1200}
                    height={800}
                  />
                </div>
                <div data-aos="fade-in" data-aos-delay="400"  className="p-8">
                  <h3 className="font-heading text-xl font-bold uppercase text-brand-navy">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-brand-gray">
                    {c.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-navy transition-colors group-hover:text-brand-orange">
                    Explore <ArrowRight className="size-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Services section */}
      <section className="bg-primary py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <img
              src={Engineer}
              alt="Technician repairing an industrial hydraulic system"
              className="aspect-[4/5] w-full rounded-sm object-cover"
              loading="lazy"
              width={1000}
              height={1250}
            />
            {/* <div className="absolute top-8 right-0 hidden max-w-xs border border-white/10 bg-brand-navy-2 p-6 shadow-2xl xl:block xl:-right-10">
              <div className="mb-3 flex items-center gap-3">
                <span className="size-3 animate-pulse rounded-full bg-emerald-500" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Mobile Repair Teams
                </span>
              </div>
              <p className="text-sm text-slate-400">
                Nationwide deployment for breakdown repairs and preventive maintenance.
              </p>
            </div> */}
          </div>
          <div>
            <div className="mb-6 inline-block border-l-4 border-gold pl-4">
              <span data-aos="fade-up"   className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                Technical Services
              </span>
            </div>
            <h2 data-aos="fade-up" data-aos-delay="200" className="font-heading text-3xl font-bold uppercase leading-tight md:text-4xl">
              Engineering & Maintenance <br /> Across Every Sector
            </h2>
            <p data-aos="fade-up" data-aos-delay="400"  className="mt-6 leading-relaxed text-slate-400">
              Our engineering team provides full lifecycle support — from installation and
              commissioning through preventive maintenance to major overhauls — ensuring
              your assets deliver peak performance with minimum downtime.
            </p>
            <ul data-aos="fade-up" data-aos-delay="600"  className="mt-10 space-y-4">
              {[
                ["Installation & Commissioning", "End-to-end deployment for industrial plants and machinery."],
                ["Hydraulic & Pneumatic Repairs", "Precision troubleshooting for high-pressure systems."],
                ["Industrial Automation", "Modernising legacy plants with smart control systems."],
                ["Preventive Maintenance", "Scheduled diagnostics that avoid costly failures."],
              ].map(([title, desc]) => (
                <li key={title} className="flex items-start gap-4">
                  <div className="mt-1 grid size-5 place-items-center rounded-sm bg-gold/20 text-gold">
                    <CheckCircle2 className="size-3.5" />
                  </div>
                  <div>
                    <span className="block font-bold text-white">{title}</span>
                    <span className="text-sm text-slate-500">{desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              to="/services" data-aos="fade-right" data-aos-delay="400" 
              className="mt-12 inline-flex items-center gap-2 bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-gold transition-colors hover:bg-gold-dark hover:text-white"
            >
              All Engineering Services <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div>
            <h1 data-aos="fade-up" data-aos-delay="200"  className="mb-4 inline-block border-l-4 border-gold pl-4 text-gold font-semibold">Why Choose Titanvex</h1>
            <h1 data-aos="fade-up" data-aos-delay="400"  className="text-3xl md:text-4xl font-bold mb-4 tracking-tight uppercase my-2">The engineering partner Nigerian <br/> industry trusts</h1>
            <p data-aos="fade-up" data-aos-delay="600"  className="text-base text-gray-700">
              Six reasons operators, contractors and government agencies choose Titanvex for <br/> critical procurement and technical work.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="800"  className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map((line, i) => (
              <div
                key={line}
                className="flex items-start gap-4 border border-hairline p-6"
              >
                <span className="font-heading text-2xl font-bold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-medium leading-relaxed text-primary">
                  {line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-y border-hairline bg-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
                <h1 data-aos="fade-up" data-aos-delay="200"  className="mb-4 inline-block border-l-4 border-gold pl-4 text-gold font-semibold">Industries We Serve</h1>
                <h1 data-aos="fade-up" data-aos-delay="400"  className="text-3xl md:text-4xl font-bold mb-4 tracking-tight uppercase my-2">Trusted across Nigeria's core <br/> sectors</h1>
            </div>
            <Link
              to="/industries" data-aos="fade-up" data-aos-delay="600" 
              className="border-b-2 border-gold pb-1 text-sm font-bold uppercase tracking-widest text-gold"
            >
              All Industries
            </Link>
          </div>
          <div data-aos="fade-up" data-aos-delay="800"  className="mt-10 grid grid-cols-2 gap-px bg-hairline md:grid-cols-4">
            {INDUSTRIES.map((i) => (
              <div
                key={i}
                className="bg-white p-8 text-center font-heading text-sm font-semibold uppercase tracking-tight text-primary transition-colors hover:bg-gold hover:text-white"
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA/>

      <SiteFooter/>
    </>
  );
}


export default HomePage;





// // 
//       {/* Featured projects */}
//       <section className="py-20 lg:py-24">
//         <div className="mx-auto max-w-7xl px-6">
//           <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
//             {/* <SectionHeader
//               eyebrow="Selected Portfolio"
//               title="Featured Projects"
//               description="A snapshot of the plants, fleets and infrastructure we've helped bring online."
//             /> */}
//             <Link
//               to="/projects"
//               className="hidden shrink-0 border-b-2 border-gold pb-1 text-sm font-bold uppercase tracking-widest text-gold md:inline-block"
//             >
//               View All Projects
//             </Link>
//           </div>
//           <div className="grid gap-8 md:grid-cols-3">
//             {FEATURED_PROJECTS.map((p) => (
//               <article key={p.title} className="group border border-hairline bg-white">
//                 <div className="aspect-[3/2] overflow-hidden bg-slate-100">
//                   <img
//                     src={p.image}
//                     alt={p.title}
//                     className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     loading="lazy"
//                     width={1200}
//                     height={800}
//                   />
//                 </div>
//                 <div className="p-6">
//                   <p className="text-[11px] font-bold uppercase tracking-widest text-gold">
//                     {p.location}
//                   </p>
//                   <h3 className="mt-2 font-heading text-lg font-bold uppercase text-brand-navy">
//                     {p.title}
//                   </h3>
//                   <p className="mt-3 text-sm leading-relaxed text-brand-gray">
//                     {p.scope}
//                   </p>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* <CTAStrip /> */}


// // const FEATURED_PROJECTS = [
//   {
//     title: "Lagos Coastal Highway",
//     location: "Lagos State",
//     scope: "Supplied 12 crawler excavators and concrete plants for Phase II earthworks.",
//     image: projectInfra,
//   },
//   {
//     title: "Northern Mining Fleet Renewal",
//     location: "Kogi State",
//     scope: "Procurement and commissioning of 8 rigid haul trucks and workshop overhaul.",
//     image: catGenerator,
//   },
//   {
//     title: "Federal Power Substation",
//     location: "Abuja FCT",
//     scope: "Industrial solar hybrid integration and electrical distribution engineering.",
//     image: catPower,
//   },
// ];import catGenerator from "../assets/cat-generator.jpg";
// import projectInfra from "../assets/project-infra.jpg";