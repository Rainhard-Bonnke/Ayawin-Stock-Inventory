import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Target, Heart } from "lucide-react";

const AboutPage: React.FC = () => {
  return (
    <div className="text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-600 py-20 md:py-28 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
            About Ayawin Stock Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-95 leading-relaxed">
            Get to know who we are, what we stand for, and why we're passionate about helping businesses thrive through better inventory management.
          </p>
        </div>
      </section>

      {/* Who We Are Section (background image + overlay) */}
      <section
        className="relative h-screen w-full bg-cover"
        style={{
          backgroundImage: "url('/uploads/Plack.png')", // ✅ fixed path
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      >
        {/* stronger overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
        
        {/* Content moved to bottom */}
        <div className="container-custom relative z-10 flex items-end h-full pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* left: text */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">Who We Are</h2>
              <p className="text-lg mb-6 leading-relaxed text-white/90">
                Ayawin Stock Solutions was founded with a mission to help businesses take control of their inventory and operations.
                With experience in retail, logistics, and compliance, we understand the challenges companies face when things aren't well-tracked or organized.
              </p>
              <p className="text-lg mb-6 leading-relaxed text-white/90">
                Our goal? To simplify your processes and save you time. We believe that accurate inventory management is the foundation of a successful business, and we're here to help you build that foundation.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
                  <Link to="/quote">Request a Quote</Link>
                </Button>

                {/* Updated: Explore Services button now matches */}
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>

            {/* right: empty for balance */}
            <div aria-hidden />
          </div>
        </div>
      </section>

      {/* Mission & Vision — each with background + overlay so text is visible */}
      <section className="section-padding">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission card with background */}
          <div
            className="relative rounded-xl overflow-hidden shadow-lg"
            style={{ backgroundImage: "url('/uploads/mission.jpg')" }} // ✅ fixed
          >
            <div className="absolute inset-0 bg-black/55" />
            <div className="relative p-8 text-white">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">Our Mission</h3>
              </div>
              <p className="leading-relaxed text-white/90">
                To provide accurate, efficient, and affordable inventory and business support services that empower companies to grow confidently.
                We aim to be the reliable partner that helps businesses maintain control over their assets and operations.
              </p>
            </div>
          </div>

          {/* Vision card with background */}
          <div
            className="relative rounded-xl overflow-hidden shadow-lg"
            style={{ backgroundImage: "url('/uploads/vision.jpg')" }} // ✅ fixed
          >
            <div className="absolute inset-0 bg-black/55" />
            <div className="relative p-8 text-white">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                  <Heart className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">Our Vision</h3>
              </div>
              <p className="leading-relaxed text-white/90">
                To be a trusted name in inventory and business management across Kenya and beyond. We strive to set the standard for excellence in inventory solutions,
                helping businesses of all sizes optimize their operations and achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values — soft patterned/gradient background */}
      <section className="section-padding relative overflow-hidden" aria-hidden={false}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-indigo-50" />
        {/* subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('/uploads/pattern.png')] opacity-5 bg-repeat" /> {/* ✅ fixed */}
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 text-indigo-900">Our Core Values</h2>
            <p className="text-lg text-gray-700">
              These principles guide everything we do as we work with clients and support their businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard
              title="Reliability"
              description="We deliver on our promises and can be counted on when it matters most."
            />
            <ValueCard
              title="Professionalism"
              description="We maintain the highest standards in all our interactions and services."
            />
            <ValueCard
              title="Accuracy"
              description="We are meticulous in our work because we know details matter."
            />
            <ValueCard
              title="Client-First"
              description="Your needs and goals are our priority in everything we do."
            />
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-3 flex items-center justify-center gap-3 text-indigo-900">
              <Users className="h-7 w-7 text-blue-600" /> Meet the Team
            </h2>
            <p className="text-lg text-gray-600">
              At Ayawin Stock Solutions, our success is built on a foundation of experienced, passionate professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
            <TeamCard
              name="Martin Koyih"
              role="Founder / Manager"
              image="/uploads/martin.jpg" // ✅ fixed
              bio="A visionary leader with deep experience in business operations and inventory management. Martin ensures everything runs smoothly at Ayawin."
            />

            <TeamCard
              name="Reinhard Bonnke"
              role="Technical Team"
              image="/uploads/bonnke.jpg" // ✅ fixed
              bio="Focused on digital solutions and inventory technologies, Reinhard is the mind behind the systems powering Ayawin’s efficiency."
              contact="0745617108"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-indigo-900">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's discuss how we can help streamline your inventory management and business operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <Link to="/quote">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ValueCard component
const ValueCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="p-6 text-center rounded-xl border border-gray-100 bg-white/80 backdrop-blur-sm transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 text-blue-600 mb-4">
        <CheckCircle className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-indigo-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// TeamCard component
const TeamCard: React.FC<{
  name: string;
  role: string;
  image: string;
  bio: string;
  contact?: string;
}> = ({ name, role, image, bio, contact }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="w-32 h-32 mx-auto mb-4 relative">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 blur-sm opacity-40" />
        <img src={image} alt={name} className="relative rounded-full w-full h-full object-cover border-4 border-white shadow-sm" />
      </div>

      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-blue-600 font-medium mb-3 inline-block px-3 py-1 rounded-full bg-blue-50">{role}</p>
      <p className="text-gray-600 text-sm mb-4">{bio}</p>

      {contact && (
        <div className="mt-2">
          <a href={`tel:${contact}`} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Call / WhatsApp: {contact}
          </a>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
