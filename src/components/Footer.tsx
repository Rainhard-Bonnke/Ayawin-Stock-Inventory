import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/5 via-transparent to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <img
                  src="/uploads/Logoo.jpeg"
                  alt="Ayawin Logo"
                  className="h-14 w-14 rounded-full object-cover border-2 border-white/20 shadow-2xl transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl text-white tracking-tighter leading-none font-outfit uppercase">
                  AYAWIN
                </span>
                <span className="text-[10px] font-black text-amber-500 tracking-[0.4em] uppercase leading-none mt-1 font-space">
                  Stock Solutions
                </span>
              </div>
            </Link>
            <p className="text-lg font-medium leading-relaxed max-w-xs">
              Engineering absolute operational clarity for enterprises across East Africa.
            </p>
          </div>

          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8">Navigation</h3>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Our Work", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm font-bold uppercase tracking-widest hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8">Protocol Modules</h3>
            <ul className="space-y-4">
              {["Audit & Count", "Stock Management", "Space Optimization", "Tax Compliance", "ERP Connectivity"].map((item) => (
                <li key={item} className="text-sm font-bold uppercase tracking-widest text-slate-500">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black uppercase tracking-widest text-xs mb-8">Operational Support</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-amber-500" />
                <a href="tel:+254791259510" className="text-sm font-bold tracking-widest hover:text-white transition-colors">
                  +254 791 259 510
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-amber-500" />
                <a href="mailto:ayawin.ke@gmail.com" className="text-sm font-bold tracking-widest hover:text-white transition-colors">
                  AYAWIN.KE@GMAIL.COM
                </a>
              </li>
              <li className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-amber-500" />
                <span className="text-sm font-bold tracking-widest uppercase">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-600">
            © {new Date().getFullYear()} AYAWIN STOCK SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <Link to="/admin" className="text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-white transition-colors">
              Internal Access
            </Link>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-800">
              V 2.0.0 // BESPOKE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
