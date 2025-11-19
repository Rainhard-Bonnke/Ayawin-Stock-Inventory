import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 mt-10">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-2">
              <span className="bg-gradient-to-br from-yellow-200 via-yellow-50 to-blue-50 rounded-full shadow-2xl p-2 border border-blue-300">
                <img
                  src="/uploads/Logoo.jpeg"  // ✅ Fixed path (removed "public/")
                  alt="AyaWin Logo"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-contain"
                  style={{ boxShadow: "0 4px 20px 0 rgba(0,0,0,0.10)" }}
                />
              </span>
              <div className="flex flex-col leading-tight ml-2">
                <span className="text-2xl font-bold text-white tracking-tight" style={{ letterSpacing: "1px" }}>AyaWin</span>
                <span className="text-lg font-medium text-blue-400" style={{ letterSpacing: "0.3px" }}>Inventory</span>
              </div>
            </Link>
            <p className="mt-5 text-base text-gray-400">
              Professional inventory management and business support services tailored to your company's unique needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-sm hover:text-blue-400 transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-400">Stock Takes</li>
              <li className="text-sm text-gray-400">Stock Arrangement</li>
              <li className="text-sm text-gray-400">KRA Stickers</li>
              <li className="text-sm text-gray-400">Data Entry</li>
              <li className="text-sm text-gray-400">Accounting</li>
              <li className="text-sm text-gray-400">Auditing</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-blue-400" />
                <a
                  href="tel:+254791259510"
                  className="text-sm hover:text-blue-300 transition-colors underline"
                >
                  +254 791259510
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-blue-400" />
                <a
                  href="mailto:ayawin.ke@gmail.com"
                  className="text-sm hover:text-blue-300 transition-colors underline"
                >
                  ayawin.ke@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-blue-400" />
                <span className="text-sm">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} AyaWin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
