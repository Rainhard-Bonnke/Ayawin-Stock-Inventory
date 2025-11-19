import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

// ✅ Custom TikTok Icon (SVG)
function TikTokIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={className}
      fill="currentColor"
    >
      <path d="M223.6 85.2c-19.1 0-34.7-15.6-34.7-34.7V40h-29.7v116.6c0 22.5-18.2 40.7-40.7 40.7S78 179.1 78 156.6c0-18.1 11.8-33.3 28-38.4v-30.6c-33.5 5.8-59 35-59 69 0 38.6 31.4 70 70 70s70-31.4 70-70V114c9.7 6.8 21.4 10.8 34.1 10.8h2.5V85.2h.1z" />
    </svg>
  );
}

function Landing() {
  return (
    <div
      className="relative h-screen w-full bg-cover"
      style={{
        backgroundImage: "url('/uploads/Plack.png')", // ✅ Fixed path (remove "public/")
        backgroundPosition: "center top",
        backgroundSize: "cover",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white px-16">
        {/* Middle section (shifted left) */}
        <div className="flex flex-col items-start">
          {/* Slogan */}
          <p className="text-4xl md:text-5xl font-bold italic tracking-wide text-yellow-400 drop-shadow-lg">
            Organize. Manage. Grow.
          </p>
          {/* Get Started Button */}
          <Link
            to="/home"
            className="mb-8 px-12 py-5 bg-yellow-500 hover:bg-yellow-600 text-xl rounded-full font-bold shadow-2xl transition-all duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Bottom icons */}
        <div className="absolute bottom-6 right-6 flex space-x-6">
          <a
            href="https://web.facebook.com/profile.php?id=61581873891082"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-7 h-7 hover:text-yellow-400 transition-colors" />
          </a>
          <a
            href="https://x.com/Ayawin_Solution"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-7 h-7 hover:text-yellow-400 transition-colors" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-7 h-7 hover:text-yellow-400 transition-colors" />
          </a>
          <a
            href="https://www.tiktok.com/@ayawinmanagement?_t=ZM-90DPNAweLca&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TikTokIcon className="w-7 h-7 hover:text-yellow-400 transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
