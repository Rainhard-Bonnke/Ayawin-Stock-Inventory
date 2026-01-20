
import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC = () => {
  const location = useLocation();

  // Only render navbar/main/footer if not on auth page
  if (location.pathname === "/auth") {
    return (
      <main>
        <Outlet />
      </main>
    );
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />

      {/* Floating Admin Button */}
      <div className="fixed bottom-6 left-6 z-[60]">
        <Link
          to="/admin"
          className="flex items-center justify-center w-12 h-12 bg-slate-900/10 hover:bg-slate-900 text-slate-400 hover:text-white backdrop-blur-sm rounded-full shadow-lg transition-all duration-300 hover:scale-110 group border border-slate-900/20"
          title="Admin Login"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:rotate-12 transition-transform"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Layout;
