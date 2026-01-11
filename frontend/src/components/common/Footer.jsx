import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] via-[#0f0f0f] to-black text-gray-400 text-sm">
      {/* TOP */}

      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        {/* BRAND */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">
            Signature Space Studio Interiors
          </h3>
          <p className="leading-relaxed">
            Premium interior design & custom furniture company delivering
            residential and commercial interiors across India.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <ul className="space-y-1">
            <li>Home Interior Design</li>
            <li>Modular Kitchens</li>
            <li>Office Interiors</li>
            <li>Custom Furniture</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <Link to="/projects" className="hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-conditions" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>

          <ul className="space-y-1 mb-3">
            <li>📍 All India Service</li>
            <li>📞 +91 9643715746  || 7668014201</li>
            {/* <li>✉️ info@signaturespacestudio.com</li> */}
            <li>✉️ anas.saifi4201@gmail.com</li>
          </ul>

          {/* SOCIAL */}

          <div className="flex gap-4 text-lg">
            <a
              href="https://www.instagram.com/signaturespacestudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#E1306C] transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/signaturespacestudio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#1877F2] transition"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* MAP (COMPACT STRIP) */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <h3 className="text-xl font-semibold mb-4">
          📍 Our Office Madanpur Khadar Sarita Vihar New Delhi 110076
        </h3>

        <iframe
          title="Signature Space Studio Interiors - Madanpur Khadar, Sarita Vihar"
          src="https://www.google.com/maps?q=Madanpur+Khadar+Sarita+Vihar+New+Delhi+110076&output=embed"
          className="w-full h-72 rounded-xl border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 py-4 text-center text-xs">
        © {new Date().getFullYear()} Signature Space Studio Interiors. All
        rights reserved.
      </div>
    </footer>
  );
}
