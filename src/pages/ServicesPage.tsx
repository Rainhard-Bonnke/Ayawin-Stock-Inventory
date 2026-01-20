import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ClipboardCheck,
  Database,
  FileText,
  BarChart,
  CheckCircle,
  File,
  ArrowRight,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const ServicesPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Bespoke Header */}
      <section className="pt-32 pb-16 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 via-transparent to-transparent" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/20 rounded-full blur-[100px]" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-sm mb-6 block">
              Our Services
            </span>
            <h1 className="text-white mb-6">
              Expert <br />
              <span className="gradient-text from-blue-400 via-white to-amber-400">Inventory Solutions.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-slate-400 text-xl font-medium leading-relaxed">
              Professional services designed to help your business manage stock efficiently and accurately.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Matrix - Services Grid */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <ServiceModule
              id="01"
              title="Stock Taking"
              image="/uploads/ayawin at work7.jpeg"
              description="We count your physical stock to verify your records and identify any missing items."
              details={["Variance Identification", "Record Reconciliation", "Digital Reports"]}
            />
            <ServiceModule
              id="02"
              title="Inventory Management"
              image="/uploads/ayawin at work8.jpeg"
              description="Complete management of your warehouse and retail stock from arrival to sale."
              details={["Stock Organization", "Waste Reduction", "Replenishment"]}
            />
            <ServiceModule
              id="03"
              title="Warehouse Organization"
              image="/uploads/ayawin at work9.jpeg"
              description="Organizing your warehouse layout to make it easier to find and move products."
              details={["Better Flow", "Easy Access", "FIFO System"]}
            />
            <ServiceModule
              id="04"
              title="KRA Tax Compliance"
              image="/uploads/kra.png"
              description="Helping you manage KRA tax labels and ensure your inventory is compliant."
              details={["ETR Integration", "Label Management", "Audit Ready"]}
            />
            <ServiceModule
              id="05"
              title="System Integration"
              image="/uploads/erp.png"
              description="Connecting your physical warehouse operations with your computer systems."
              details={["Real-time Updates", "Accurate Data", "Seamless Connection"]}
            />
            <ServiceModule
              id="06"
              title="Asset Verification"
              image="/uploads/ayawin at work11.jpeg"
              description="Checking and verifying your fixed assets and equipment to ensure everything is accounted for."
              details={["Asset Tagging", "Value Check", "Physical Count"]}
            />
          </motion.div>
        </div>
      </section>


      {/* Bespoke Core CTA */}
      <section className="py-32 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-white mb-10 leading-tight">Ready to Organize Your Stock?</h2>
            <p className="text-slate-400 text-xl font-medium mb-12">
              Our team is ready to help you improve your inventory accuracy and efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <Link to="/quote" className="btn-bespoke">
                Request a Quote
              </Link>
              <Link to="/contact" className="px-10 py-5 border-2 border-white/20 rounded-full text-white font-bold uppercase tracking-wider hover:border-amber-400 hover:text-amber-400 transition-all">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Bespoke Service Module
interface ServiceModuleProps {
  id: string;
  title: string;
  image: string;
  description: string;
  details: string[];
}

const ServiceModule = ({ id, title, image, description, details }: ServiceModuleProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="card-bespoke group p-0 overflow-hidden flex flex-col h-full bg-slate-50 border-slate-100 hover:border-blue-200"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Removed Module Badge for cleaner look */}
      </div>

      <div className="p-8 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{title}</h3>
        <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        <div className="space-y-3 border-t border-slate-100 pt-6">
          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">Key Features</div>
          <div className="flex flex-wrap gap-2">
            {details.map((detail, i) => (
              <span key={i} className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded uppercase">
                {detail}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
