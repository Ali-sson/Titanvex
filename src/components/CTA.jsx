import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function CTAStrip() {
  return (
    <section data-aos="fade-in" data-aos-delay="400"  className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden bg-primary p-10 lg:p-16">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 -skew-x-12 translate-x-20 bg-gold/10" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase leading-tight text-white md:text-4xl">
                Ready to start <br /> your project?
              </h2>
              <p className="mt-4 max-w-xl text-slate-400">
                Submit your equipment or service requirements. Our engineering team responds with a detailed technical evaluation within 24 hours.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 bg-gold px-6 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-gold-dark"
              >
                Request a Quote <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTAStrip;