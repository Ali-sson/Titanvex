import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../assets/Logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },

  {
    label: "Services",
    children: [
      {
        // to: "/services/engineering",
        label: "Engineering Services",
      },
      {
        // to: "/services/procurement",
        label: "Equipment Procurement",
      },
      {
        // to: "/services/spare-parts",
        label: "Spare Parts",
      },
    ],
  },

  { to: "", label: "Products" },
  { to: "", label: "Industries" },
  { to: "", label: "Portfolio" },
  { to: "", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="TitanVex Logo" className="h-20 w-40" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">

                {/* Parent Menu */}
                <button className="flex items-center gap-1 text-sm font-medium text-gray-600 transition hover:text-gold">
                  {item.label}
                  <ChevronDown
                    size={18}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-2 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">

                  <div className="w-64 overflow-hidden rounded-xl border border-border bg-white shadow-xl">

                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block px-5 py-3 text-sm text-gray-700 transition hover:bg-secondary hover:text-gold"
                      >
                        {child.label}
                      </Link>
                    ))}

                  </div>
                </div>

              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-medium text-gray-600 transition hover:text-gold"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Link
            to="/quote"
            className="rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-gold-dark hover:shadow-lg"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <nav className="flex flex-col px-4 py-4">

            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="py-2">

                  <p className="font-semibold text-primary">
                    {item.label}
                  </p>

                  <div className="ml-4 mt-2 flex flex-col">

                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={() => setOpen(false)}
                        className="py-2 text-gray-600 hover:text-gold"
                      >
                        {child.label}
                      </Link>
                    ))}

                  </div>

                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-gray-700 hover:text-gold"
                >
                  {item.label}
                </Link>
              )
            )}

            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-md bg-gold px-4 py-3 text-center font-semibold text-primary transition hover:bg-gold-dark"
            >
              Get a Quote
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;