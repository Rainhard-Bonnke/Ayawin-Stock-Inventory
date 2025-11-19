import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow">
      <div className="container mx-auto px-4 md:px-6 flex h-20 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-4">
            <img
              src="/uploads/Logoo.jpeg"   // ✅ Fixed path
              alt="Ayawin Stock Solution Logo"
              className="h-20 w-20 rounded-full object-contain shadow-xl border-2 border-blue-200 bg-white"
              style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.13)" }}
            />
            <span className="font-extrabold text-2xl sm:text-3xl text-blue-700 tracking-tight drop-shadow" style={{ letterSpacing: "1px" }}>
              Ayawin Stock Solution
            </span>
          </Link>
        </div>

        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          <Link to="/" className="text-base font-semibold hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/about" className="text-base font-semibold hover:text-blue-600 transition-colors">About Us</Link>
          <Link to="/services" className="text-base font-semibold hover:text-blue-600 transition-colors">Services</Link>
          <Link to="/contact" className="text-base font-semibold hover:text-blue-600 transition-colors">Contact</Link>
          <Link to="/quote">
            <Button size="lg">Get a Quote</Button>
          </Link>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-base font-semibold hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-base font-semibold hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="text-base font-semibold hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="text-base font-semibold hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link to="/quote" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full" size="lg">Get a Quote</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
