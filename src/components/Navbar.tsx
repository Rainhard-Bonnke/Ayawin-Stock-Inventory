import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/our-work" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "bg-white/80 backdrop-blur-md shadow-lg h-20"
        : "bg-white h-24"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/20 blur-xl rounded-full group-hover:bg-blue-600/40 transition-colors" />
            <img
              src="/uploads/Logoo.jpeg"
              alt="Ayawin Logo"
              className="relative h-12 w-12 md:h-14 md:w-14 rounded-full object-cover border-2 border-white/50 shadow-2xl transition-transform duration-700 group-hover:rotate-[360deg]"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl md:text-2xl text-slate-900 tracking-tighter leading-none font-outfit uppercase">
              AYAWIN
            </span>
            <span className="text-[9px] md:text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase leading-none mt-1 font-space">
              Stock Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-xs font-black uppercase tracking-widest transition-all hover:text-blue-600 relative group/link ${location.pathname === link.href ? "text-blue-600" : "text-slate-500"
                }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover/link:w-full ${location.pathname === link.href ? "w-full" : ""
                }`} />
            </Link>
          ))}
          <Link to="/quote" className="btn-bespoke !px-8 !py-3 !text-[10px]">
            Consult Ops →
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 lg:hidden p-6 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-xl font-black uppercase tracking-tighter p-4 rounded-2xl transition-all ${location.pathname === link.href
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-50"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/quote" className="btn-bespoke w-full" onClick={() => setIsMenuOpen(false)}>
              Initiate Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
