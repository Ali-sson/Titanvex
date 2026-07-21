import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTAStrip({
  title = "Ready to Get Started?",
  description = "Partner with TITANVEX LTD for a reliable engineering, procurement, logistics, and industrial solutions tailored to your business.",
  primaryText = "Request a Quote",
  primaryLink = "/quote",
  secondaryText = "Contact Our Team",
  secondaryLink = "/contact",
  className = "",
}) {
  return (
    <section
      data-aos="fade-in"
      data-aos-delay="400"
      className={`bg-white py-20 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden bg-primary p-10 lg:p-16">
          {/* Background Shape */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 -skew-x-12 translate-x-20 bg-gold/10" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            {/* Left */}
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase leading-tight text-white md:text-4xl">
                {title}
              </h2>

              <p className="mt-4 max-w-xl text-slate-400">
                {description}
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                to={primaryLink}
                className="inline-flex items-center gap-2 bg-gold px-6 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-gold-dark"
              >
                {primaryText}
                <ArrowRight className="size-4" />
              </Link>

              <Link
                to={secondaryLink}
                className="inline-flex items-center gap-2 border border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/10"
              >
                {secondaryText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}