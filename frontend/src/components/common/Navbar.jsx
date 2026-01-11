import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative font-medium transition ${
      isActive ? "text-[#b88c4a] after:w-full" : "text-gray-700 after:w-0"
    } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#b88c4a] after:transition-all`;

  return (
    <header
      className={`bg-white sticky top-0 z-50 transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between font-poppins">
        {/* LOGO (FIXED DESIGN) */}
        <Link to="/" className="leading-none">
          <h1 className="font-playfair text-2xl font-semibold tracking-wide">
            Signature<span className="font-normal">Space</span>
          </h1>
          <p className="text-[10px] tracking-[0.4em] text-gray-500 uppercase mt-1">
            Studio Interiors
          </p>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-sm">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>

          {/* SERVICES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <NavLink to="/services" className={linkClass}>
              Services
            </NavLink>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-3 w-56 bg-white shadow-lg border rounded-md text-sm">
                <Link
                  className="block px-5 py-3 hover:bg-gray-50"
                  to="/services/home-interior"
                >
                  Home Interior Design
                </Link>
                <Link
                  className="block px-5 py-3 hover:bg-gray-50"
                  to="/services/modular-kitchen"
                >
                  Modular Kitchen
                </Link>
                <Link
                  className="block px-5 py-3 hover:bg-gray-50"
                  to="/services/office"
                >
                  Office & Commercial
                </Link>
                <Link
                  className="block px-5 py-3 hover:bg-gray-50"
                  to="/services/furniture"
                >
                  Custom Furniture
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-block bg-[#b88c4a] text-white px-6 py-3 text-sm rounded-md hover:bg-[#a0783f] transition"
        >
          Free Consultation
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="px-6 py-6 flex flex-col gap-5 text-center">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="block text-gray-700 text-base font-medium"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="block text-gray-700 text-base font-medium"
            >
              About
            </Link>

            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className="block text-gray-700 text-base font-medium"
            >
              Services
            </Link>

            <Link
              to="/projects"
              onClick={() => setOpen(false)}
              className="block text-gray-700 text-base font-medium"
            >
              Projects
            </Link>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block text-gray-700 text-base font-medium"
            >
              Contact
            </Link>

            {/* CTA */}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 bg-[#b88c4a] text-white py-3 rounded-md font-medium"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
