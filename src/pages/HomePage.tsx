import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ClipboardCheck,
  Database,
  FileText,
  BarChart,
  Quote,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// Bespoke Solution Item
const SolutionItem = ({ id, title, desc }: { id: string, title: string, desc: string }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="p-8 border-l border-white/10 hover:border-amber-400 transition-colors bg-slate-800/50 backdrop-blur-sm"
    >
      <div className="text-amber-500 font-black text-xs mb-6 opacity-40">{id}</div>
      <h3 className="text-white text-xl font-bold mb-4 tracking-tight uppercase">{title}</h3>
      <p className="text-slate-400 text-sm font-medium leading-relaxed">{desc}</p>
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Bespoke Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/uploads/stock_background.jpg"
            alt="Warehouse Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Semantic Hero Text */}
            <div className="lg:col-span-12 space-y-10 text-center flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-sm mb-6 block">
                  Professional Inventory Services
                </span>
                <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight mb-8">
                  Simple, <br />
                  Accurate <br />
                  <span className="gradient-text from-blue-400 via-white to-amber-400">Inventory Solutions.</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="max-w-2xl mx-auto"
              >
                <p className="text-slate-400 text-xl font-medium leading-relaxed mb-10">
                  We provide accurate stock taking and inventory management services to help your business grow and stay organized.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <Link to="/quote" className="btn-bespoke group">
                    Get a Quote
                    <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </Link>
                  <Link to="/services" className="px-8 py-5 text-white font-bold uppercase tracking-wider hover:text-amber-500 transition-colors flex items-center">
                    View Services
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Bespoke Core Identity Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6 scale-90 md:scale-100">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-[2rem] overflow-hidden shadow-xl mt-12"
                >
                  <img src="/uploads/ayawin at work4.jpeg" alt="Staff in field" className="aspect-square object-cover" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="rounded-[2rem] overflow-hidden shadow-xl"
                >
                  <img src="/uploads/ayawin at work1.jpeg" alt="Stock verification" className="aspect-square object-cover" />
                </motion.div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Our Mission</span>
              <h2 className="text-slate-900 leading-tight">More Than <br />Just <br />Counting.</h2>
              <p className="text-xl text-slate-500 leading-relaxed font-medium">
                We provide precise verification of your stock to minimize losses and maximize profit. Our team ensures that your records match what is actually on your shelves.
              </p>
              <div className="pt-6">
                <Link to="/about" className="text-slate-900 font-bold uppercase tracking-wider border-b-2 border-amber-400 pb-2 hover:text-blue-600 transition-colors">
                  Learn More About Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bespoke Solution Matrix (Services) */}
      <section className="section-padding bg-slate-900 overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">Our Services</span>
              <h2 className="text-white mt-4">What We Do.</h2>
            </div>
            <p className="text-slate-400 max-w-sm text-lg font-medium">
              We offer professional inventory services for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <SolutionItem
              id="01"
              title="Stock Takes"
              desc="Accurate inventory counting and reconciliation."
            />
            <SolutionItem
              id="02"
              title="Stock Management"
              desc="Real-time tracking and full inventory control."
            />
            <SolutionItem
              id="03"
              title="KRA Stickers"
              desc="Placement and management of KRA-compliant labels."
            />
            <SolutionItem
              id="04"
              title="Tech Solutions"
              desc="Custom ERPs and business software."
            />
          </div>

          <div className="mt-20 flex justify-center">
            <Link to="/services" className="btn-bespoke">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Bespoke Logic Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4">
              <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">Why Choose Us</span>
              <h2 className="text-slate-900 mt-4 leading-none">Why <br />Businesses <br />Trust Us.</h2>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-bespoke">
                <div className="text-blue-600 font-black text-4xl mb-6">01</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">High Accuracy</h3>
                <p className="text-slate-500 text-sm font-medium">We ensure your records are correct, minimizing losses and protecting your assets.</p>
              </div>
              <div className="card-bespoke">
                <div className="text-blue-600 font-black text-4xl mb-6">02</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Fast Service</h3>
                <p className="text-slate-500 text-sm font-medium">Our teams are ready to deploy quickly across East Africa to get the job done.</p>
              </div>
              <div className="card-bespoke">
                <div className="text-blue-600 font-black text-4xl mb-6">03</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Smart Technology</h3>
                <p className="text-slate-500 text-sm font-medium">We use modern cloud systems to give you real-time visibility of your stock.</p>
              </div>
              <div className="card-bespoke">
                <div className="text-blue-600 font-black text-4xl mb-6">04</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Real Value</h3>
                <p className="text-slate-500 text-sm font-medium">We help organize your business to save money and improve efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work & Moments Section */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 rounded-full blur-[120px] -mr-20 -mt-20" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 gradient-text">Our Work & Moments</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A glimpse into our daily operations, field audits, and the team in action across various locations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gallery Items */}
            <WorkItem
              src="/uploads/ayawin at work.jpeg"
              title="Inventory Audit"
              location="Warehouse Facility"
              description="Detailed physical count and reconciliation process."
            />
            <WorkItem
              src="/uploads/ayawin at work1.jpeg"
              title="Stock Arrangement"
              location="Retail Partner"
              description="Optimizing shelf space and implementing FIFO systems."
            />
            <WorkItem
              src="/uploads/ayawin at work2.jpeg"
              title="Compliance Check"
              location="Distribution Center"
              description="Ensuring all stock meets regulatory and internal standards."
            />

            {/* Video Feature */}
            <div className="lg:col-span-2 rounded-[2rem] overflow-hidden shadow-2xl group relative h-[400px]">
              <video autoPlay muted loop className="w-full h-full object-cover">
                <source src="/uploads/ayawin at work10.jpeg.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-3">Featured Video</span>
                <h3 className="text-2xl font-bold text-white mb-2">Ayawin in Motion</h3>
                <p className="text-slate-200 max-w-md">Experience our team's dedication and precision in every project we undertake.</p>
              </div>
            </div>

            <WorkItem
              src="/uploads/ayawin at work3.jpeg"
              title="Data Entry Operations"
              location="Headquarters"
              description="Digitizing manual records for real-time inventory tracking."
            />

            <WorkItem
              src="/uploads/ayawin at work4.jpeg"
              title="Team Briefing"
              location="Field Site"
              description="Coordinating complex stock takes for large-scale warehouses."
            />
            <WorkItem
              src="/uploads/ayawin at work5.jpeg"
              title="Quality Assurance"
              location="Client Site"
              description="Verifying stock condition during the audit process."
            />
            <WorkItem
              src="/uploads/ayawin at work6.jpeg"
              title="System Integration"
              location="Tech Hub"
              description="Deploying custom ERP solutions for seamless stock management."
            />
          </div>

          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg" className="rounded-full px-10 border-slate-200 hover:bg-slate-900 hover:text-white transition-all">
              <Link to="/our-work">Explore Our Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial & Social Proof */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <Quote className="mx-auto text-blue-100 w-24 h-24 mb-8" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-12">
              "Ayawin Stock Solutions didn't just count our inventory; they revolutionized our warehouse logic. Their precision is unmatched."
            </p>
            <div className="flex items-center justify-center gap-4">
              <img
                src="/uploads/Tamara.jpg"
                alt="Client"
                className="w-16 h-16 rounded-full border-4 border-white shadow-xl object-cover"
              />
              <div className="text-left">
                <div className="font-black text-slate-900 uppercase tracking-tighter">Strategic Partner</div>
                <div className="text-amber-600 font-bold text-xs uppercase tracking-widest">Retail Giant Kenya</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Bespoke CTA */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-white mb-10 max-w-3xl mx-auto leading-tight">Accurate Records Start Here.</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Link to="/quote" className="btn-bespoke">
              Request Your Audit
            </Link>
            <Link to="/contact" className="px-10 py-5 border-2 border-white/20 rounded-full font-bold uppercase tracking-wider hover:border-amber-400 hover:text-amber-400 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Bespoke Work Item
const WorkItem = ({ src, title, location, description }: { src: string; title: string; location: string; description: string }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative rounded-[2rem] overflow-hidden shadow-2xl bg-white"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-2 block">{location}</span>
            <h3 className="text-slate-900 text-xl font-bold tracking-tight uppercase">{title}</h3>
          </div>
          <ArrowRight className="text-amber-500 h-6 w-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
        </div>
        <p className="text-slate-500 text-sm font-medium leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default HomePage;
