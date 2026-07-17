import Navbar from "../components/Navbar";
import heroPlant from "../assets/hero-plant.jpg";
import heroExcavator from "../assets/hero-excavator.jpg";

import { Eye, Target } from "lucide-react";
import CTA from "../components/CTA";
import SiteFooter from "../components/Footer";
import WhatWeDo from "../components/What-we-do";
import CoreValues from "../components/CoreValues";


const PILLARS = [
  {
    icon: Eye,
    title: "Vision",
    body: "To become one of Africa's most trusted engineering, industrial equipment, procurement, logistics, and supply chain solutions company, delivering innovative, reliable, and sustainable solutions that empower industries and infrastructural development.",
  },
  {
    icon: Target,
    title: "Mission",
    body: "To provide professional engineering services, reliable industrial equipment solutions, strategic procurement, and efficient logistics support while building lasting relationships through quality, integrity, technical excellence, and exceptional customer service.",
  },
  // {
  //   icon: Compass,
  //   title: "Core Values",
  //   body: "Integrity, Excellence, Professionalism, Innovation, Reliability, Customer Focus, Continuous Improvement.",
  // },
  // {
  //   icon: Handshake,
  //   title: "Our Promise",
  //   body: "Verified equipment, transparent procurement, and engineering teams that respond when you need them — across all 36 states.",
  // },
];

// const STRENGTHS = [
//   "Delivering professional engineering solutions",
//   "Providing reliable equipment from trusted manufacturers",
//   "Supporting clients throughout the entire project lifecycle",
//   "Offering responsive technical assistance",
//   "Building long-term business relationships based on trust",
//   "Maintaining high standards of quality, professionalism, and integrity",
//   "Continuously improving our services to meet evolving industry needs",
// ];


function About() {
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
            <div className="mb-2 inline-block border-l-4 border-gold pl-4">
              <span data-aos="fade-up" data-aos-delay="200"  className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                About Titanvex Ltd
              </span>
               </div>
                <p data-aos="fade-up" data-aos-delay="600"  className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              Delivering Engineering Excellence, Industrial Equipment, Procurement, and Logistics Solutions Across Africa
            </p>
           
          </div>
        </div>
      </header>

      {/* Overview */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
              <div>
              <h1 data-aos="fade-up" className="mb-4 inline-block border-l-4 border-gold pl-4 text-gold font-semibold">Company Overview</h1>
              <h1 data-aos="fade-up" data-aos-delay="200"  className="text-3xl md:text-4xlfont-poppins font-bold mb-4 tracking-tighter uppercase">Your Trusted Partner for Engineering, Procurement & Industrial Solutions</h1>
              </div>
            <h1 data-aos="fade-up" data-aos-delay="400" className="text-gray-700" >
                TITANVEX LTD is a Nigerian engineering, industrial equipment, procurement, logistics, and supply chain solutions company committed to supporting businesses with reliable engineering services and professional equipment solutions.
                 We specialize in the supply, procurement, installation, commissioning, maintenance, refurbishment, and technical support of industrial and construction equipment. We also assist organizations in sourcing high-quality equipment from trusted local and international manufacturers while providing end-to-end procurement and logistics coordination. </h1>
            <h1 className="mt-2 text-gray-700" data-aos="fade-up" data-aos-delay="600" >
                 At TITANVEX LTD, we believe that engineering excellence extends beyond equipment supply. Our approach combines technical expertise, strategic procurement, efficient logistics coordination, and dependable after-sales support to help our clients improve operational efficiency, maximize equipment performance, and achieve long-term productivity. </h1>
               <h1 className="mt-2 text-gray-700" data-aos="fade-up" data-aos-delay="800" >
                Although TITANVEX LTD is a newly established company, we are building our business on professionalism, integrity, technical competence, and a commitment to creating lasting partnerships with clients across Nigeria and beyond.
                Our vision is not simply to supply equipment but to become a trusted engineering and industrial solutions partner that delivers value throughout every stage of a project's lifecycle—from equipment selection and procurement to installation, maintenance, and ongoing technical support.
            </h1>
          </div>
          <img
            src={heroExcavator}
            alt="Industrial hydraulic machinery detail"
            className="aspect-square w-full rounded-sm object-cover shadow-xl"
            loading="lazy"
            width={1024}
            height={1024}
          />
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-hairline bg-gray-100 py-20">
        <div className="mx-auto max-w-7xl px-6">

             <div>
              <h1 data-aos="fade-up" data-aos-delay="200"  className="mb-4 inline-block border-l-4 border-gold pl-4 text-gold font-semibold">What Drives Us</h1>
              <h1 data-aos="fade-up" data-aos-delay="400"  className="text-3xl md:text-3xl font-poppins font-bold mb-4 tracking-tighter uppercase">Our Vision & Mission</h1>
              </div>

          <div data-aos="fade-up" data-aos-delay="200"  className="mt-12 grid gap-6 md:grid-cols-2">

            {PILLARS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="border border-hairline bg-white p-8">
                <Icon className="size-8 text-gold" />
                <h3 className="mt-6 font-heading text-xl font-bold uppercase text-primary">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* what we do */}
      <WhatWeDo />

      {/* core values */}
      <CoreValues />

      {/* Strengths */}
      {/* <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
              <div>
              <h1 data-aos="fade-in" data-aos-delay="200"  className="mb-4 inline-block border-l-4 border-gold pl-4 text-gold font-semibold">Company Strengths</h1>
              <h1 data-aos="fade-up" data-aos-delay="400"  className="text-3xl md:text-4xl font-bold mb-4 tracking-tighter uppercase">Why leading operators choose <br className="hidden md:block"/> Titanvex.</h1>
              </div>
          <ol data-aos="fade-up" data-aos-delay="600"  className="mt-12 grid gap-4 md:grid-cols-2">
            {STRENGTHS.map((s, i) => (
              <li
                key={s}
                className="flex items-start gap-4 border border-white/10 bg-brand-navy-2 p-6"
              >
                <span className="font-heading text-2xl font-bold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-medium leading-relaxed">{s}</p>
              </li>
            ))}
          </ol>
        </div> */}
      {/* </section> */}

        <CTA />

        <SiteFooter/>
    </>
  );
}

export default About;