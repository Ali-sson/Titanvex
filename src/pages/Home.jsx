import { useEffect } from "react";
import { Link  } from "react-router-dom";
import { ArrowRight, CheckCircle2, Cog,HardHat, ShieldCheck, Truck, ShoppingCart, Wrench} from "lucide-react";
// import heroExcavator from "../assets/hero-excavator.jpg";
import heroPlant from "../assets/hero-plant.jpg";
import catConstruction from "../assets/cat-construction.jpg";
import catPower from "../assets/cat-power.jpg";
import catLaundry from "../assets/cat-laundry.jpg";
import EngineerCEo from "../assets/EngineerCEo.jpeg";
import Wheel from "../assets/wheel-loaders.jpg";
import Concrete from "../assets/concrete-batch.jpg";
import Excavator from "../assets/excavator1.jpg";
import ConcreteMix from "../assets/concrete-mixer.jpg";
import LogImg from "../assets/logistics.jpg"
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import SiteFooter from "../components/Footer";

// swiper

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import heroExcavator from "../assets/hero-excavator.jpg";
import logistics from "../assets/logistics.jpg";
import asphaltPlant from "../assets/asphaltPlant.jpg";

import WhatsAppFloat from "../components/Whatsapp";




const CATEGORIES = [
  { 
    title: "Construction Equipment",
    image: catConstruction, 
    description:
       "Concrete mixers, asphalt plants, pavers and earthmoving equipment engineered for Nigerian terrain.",
    to: "/products",
  },
  {
    title: " Power & Energy Solutions",
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
  {
   title: "Logistics & Supply Chain Solutions",
    image:  LogImg,
    description:
      "Reliable logistics, freight forwarding, transportation, and supply chain coordination for industrial projects across Nigeria and beyond.",
    to: "/products",
  },
  

];

const CAPABILITIES = [
  { icon: HardHat, label: "Heavy Equipment" },
  { icon: Cog, label: "Engineering Services" },
  { icon: ShoppingCart, label: "Procurement" },
   { icon: Truck, label: "Logistics" },
   { icon: ShieldCheck, label: "Maintenance" },
   { icon: Wrench, label: "Equipment Installation" },
];

const WHY_CHOOSE = [
  "Professional Engineering Expertise",
  "Reliable Equipment Sourcing",
  "End-to-End Project Support",
  "Nationwide Service Coverage",
  "Commitment to Quality & Safety",
];

const INDUSTRIES = [
  "Construction",
  "Energy & Power",
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
                TitanVex Ltd 
              </span>
            </div>
      

           <h1
  data-aos="fade-up"
  className="font-poppins text-4xl font-bold uppercase text-white leading-tight md:text-6xl md:leading-[70px]"
>
  Engineering <br /> Procurement  <br /> Logistics & <br />
    <span className="text-gold">Supply Chain Solutions</span>
</h1>
            <p data-aos="fade-up" data-aos-delay="200" className="mt-8 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              Delivering reliable industrial equipment, engineering expertise, procurement support, and logistics solution for 
              businesses across Nigeria.
            </p>
            <div data-aos="fade-right" data-aos-delay="400"  className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-gold px-9 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-gold-dark"
              >
                View Equipment 
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center border border-white/20 px-12 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/10"
              >
                Our Services
              </Link>
            </div>
          </div>
         <div className="hidden lg:block">
  <Swiper
    modules={[Autoplay, Pagination, Navigation]}
    autoplay={{
      delay: 4000,
      disableOnInteraction: false,
    }}
    loop={true}
    pagination={{ clickable: true }}
    navigation
      style={{
    "--swiper-navigation-color": "#FBBF24", // Gold
    // className="rounded-sm shadow-2xl bg-gold"
      }}
  >
    <SwiperSlide>
      <img
        src={heroExcavator}
        alt="Excavator"
        className="aspect-square w-full h-90 rounded-sm object-cover"
      />
    </SwiperSlide>

    <SwiperSlide>
      <img
        src={logistics}
        alt="Wheel Loader"
        className="aspect-square w-full rounded-sm object-cover"
      />
    </SwiperSlide>

    <SwiperSlide>
      <img
        src={asphaltPlant}
        alt="Asphalt Plant"
        className="aspect-square w-full rounded-sm object-cover"
      />
    </SwiperSlide>

      <SwiperSlide>
      <img
        src={Wheel}
        alt="wheel-loaders"
        className="aspect-square w-full rounded-sm object-cover"
      />
    </SwiperSlide>

      <SwiperSlide>
      <img
        src={Excavator}
        alt="Excavator"
        className="aspect-square w-full rounded-sm object-cover"
      />
    </SwiperSlide>


      <SwiperSlide>
      <img
        src={Concrete}
        alt="concrete-batch-plant"
        className="aspect-square w-full rounded-sm object-cover"
      />
    </SwiperSlide>

      <SwiperSlide>
      <img
        src={ConcreteMix}
        alt="concrete-mixer"
        className="aspect-square w-full rounded-sm object-cover"
      />
    </SwiperSlide>




  </Swiper>
</div>
        </div>
      </header>


      {/* <div className="hidden lg:block">
  <Swiper
    modules={[Autoplay, Pagination, Navigation]}
    autoplay={{
      delay: 4000,
      disableOnInteraction: false,
    }}
    loop={true}
    pagination={{ clickable: true }}
    navigation
    className="rounded-sm shadow-2xl"
  >
    <SwiperSlide>
      <img
        src={heroExcavator}
        alt="Excavator"
        className="aspect-square w-full rounded-sm object-cover"
      />
    </SwiperSlide>

    <SwiperSlide>
      <img
        src={wheelLoader}
        alt="Wheel Loader"
        className="aspect-square w-full rounded-sm object-cover"
      />
    </SwiperSlide>

    <SwiperSlide>
      <img
        src={asphaltPlant}
        alt="Asphalt Plant"
        className="aspect-square w-full rounded-sm object-cover"
      />
    </SwiperSlide>
  </Swiper>
</div> */}

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
            Core capabilities.
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
              <h1 data-aos="fade-up" data-aos-delay="400"  className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Our Products & Solutions</h1>
              <p data-aos="fade-up" data-aos-delay="600"  className="text-base text-gray-700">
                Explore our range of industrial equipment, engineering solutions, procurement services, logistics coordination <br/> and  maintenance services designed to power every stage of your project.
              </p>
              </div>

            <Link
              to="/products"
              className="hidden shrink-0 border-b-2 border-gold pb-1 text-sm font-bold uppercase tracking-widest text-gold md:inline-block"
            >
              View Full Catalog
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
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
              src={EngineerCEo}
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
                Professional Services
              </span>
            </div>
            <h2 data-aos="fade-up" data-aos-delay="200" className="font-heading text-3xl font-bold uppercase leading-tight md:text-4xl">
              End-End Engineering & Industrial   <br className="hidden md:block" /> Services
            </h2>
            <p data-aos="fade-up" data-aos-delay="400"  className="mt-6 leading-relaxed text-slate-400">
              Our team delivers comprehensive engineering, procurement, logistics, installation, commisioning,
              maintenance, and technical support, ensuring every project is completed efficiently from planning to long-term operation.
              
              your assets deliver peak performance with minimum downtime.
            </p>
            <ul data-aos="fade-up" data-aos-delay="600"  className="mt-10 space-y-4">
              {[
                ["Engineering Services", "Complete engineering solutions tailored to industrial and infrastructure projects."],
                ["Equipment Installation & Commissioning", "Professional installation, testing, and commissioning for optimal equipment performance"],
                ["Procurement & Global Sourcing", "Reliable sourcing of quality industrial equipment and components from trusted global suppliers."],
                ["Logistics & Supply Chain Coordination", "Efficient logistics and supply chain coordination for seamless project execution."],
                ["Preventive Maintenance & Refurbishment", "Routine maintenance and equipment refurbishment to maximize reliability and service life."],
                ["Technical Support and Sourcing", "Expert technical assistance and fast sourcing of genuine spare parts for uninterrupted operations."],
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
              Explore Our Services <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div>
            <h1 data-aos="fade-up" data-aos-delay="200"  className="mb-4 inline-block border-l-4 border-gold pl-4 text-gold font-semibold">Why Choose Titanvex</h1>
            <h1 data-aos="fade-up" data-aos-delay="400"  className="text-3xl md:text-4xl font-bold mb-4 tracking-tight uppercase my-2">Building Long-Term Partnership <br/> Through Excellence</h1>
            <p data-aos="fade-up" data-aos-delay="600"  className="text-base text-gray-700">
              Discover why businesses, contractors, manufacturers, and government organizations trust TITANVEX for Engineering, <br className="hidden md:block"/> procurement, logistics, industrial equipment, and long term technical support.
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
                <h1 data-aos="fade-up" data-aos-delay="400"  className="text-3xl md:text-4xl font-bold mb-4 tracking-tight uppercase my-2">Trusted across Nigeria's core <br className="hidden md:block"/> sectors</h1>
              <p data-aos="fade-up" data-aos-delay="600"  className="text-base text-gray-700">
                We provide engineering, procurement, logistics, and industrial solutions across diverse sectors, <br/> delivering reliable support from project planning to long-term operations.
              </p>
           
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

      <WhatsAppFloat/>

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