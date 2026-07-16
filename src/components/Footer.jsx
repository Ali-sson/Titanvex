import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "../assets/Logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-primary text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid size-8 place-items-center rounded-sm  font-heading text-sm font-bold text-white">
              <img src={Logo} alt="Titanvex Logo" />
            </div>
            <span className="font-heading text-lg font-bold uppercase tracking-tight ">
              Titanvex Ltd
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Engineering, procurement, logistics, and supply chain solutions..
          </p>
        </div>

        <div>
          <h5 className="text-[16px] font-bold uppercase tracking-widest text-white">Services</h5>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/products" className="hover:text-gold">Logistics & Supply Chain</Link></li>
            <li><Link to="/services" className="hover:text-gold">Engineering Services</Link></li>
            <li><Link to="/procurement" className="hover:text-gold">Equipment Procurement</Link></li>
            <li><Link to="/spare-parts" className="hover:text-gold">Spare Parts</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[16px] font-bold uppercase tracking-widest text-white">Quick Links</h5>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/industries" className="hover:text-gold">Industries</Link></li>
            <li><Link to="/projects" className="hover:text-gold">Portfolio</Link></li>
            <li><Link to="/quote" className="hover:text-gold">Request a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[16px] font-bold uppercase tracking-widest text-white">Contact</h5>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-gold" /> *******, Nigeria</li>
            <li className="flex gap-3"><Phone className="mt-0.5 size-4 shrink-0 text-gold" /> +234 **********</li>
            <li className="flex gap-3"><Mail className="mt-0.5 size-4 shrink-0 text-gold" /> **************</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-slate-500 md:flex-row">
          <span>© {new Date().getFullYear()} TITANVEX LTD. All rights reserved.</span>
          {/* <span>Engineering Excellence · Nationwide Coverage</span> */}
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
