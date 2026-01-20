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
              Complete Inventory Solutions
            </span>
            <h1 className="text-white mb-6">
              From Counts <br />
              <span className="gradient-text from-blue-400 via-white to-amber-400">to Financial Records.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-slate-400 text-xl font-medium leading-relaxed">
              Whether you need physical audits, warehouse organization, compliance support, or advanced ERP systems, we deliver end-to-end inventory management that transforms how you run your business.
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <ServiceModule
              id="01"
              title="Physical Stock Takes"
              image="/uploads/ayawin at work7.jpeg"
              description="Complete cycle counts with dual verification. We physically count every item, compare against your system records, identify discrepancies, and generate detailed variance reports. Perfect for year-end audits, regulatory compliance, or warehouse closures."
              details={["Dual Count Method", "System Reconciliation", "Variance Report"]}
            />
            <ServiceModule
              id="02"
              title="Stock Arrangement & Optimization"
              image="/uploads/ayawin at work9.jpeg"
              description="Strategic warehouse organization using FIFO and ABC analysis. We redesign your layout to reduce picking time, minimize stock loss, improve accessibility, and create an efficient audit trail. Ideal for retail, distribution, and manufacturing facilities."
              details={["FIFO Implementation", "ABC Classification", "Layout Optimization"]}
            />
            <ServiceModule
              id="03"
              title="KRA Compliance & Labeling"
              image="/uploads/ayawin at work5.jpeg"
              description="Full KRA sticker placement and inventory management. We ensure every item is properly labeled and tracked for tax compliance. Includes barcode integration, serialization where required, and regular verification audits."
              details={["Barcode Integration", "Tax Compliance", "Verification"]}
            />
            <ServiceModule
              id="04"
              title="Data Entry & Digitization"
              image="/uploads/ayawin at work3.jpeg"
              description="Convert manual inventory records into organized digital systems. Our data entry specialists ensure 99.9% accuracy, clean data formatting, and seamless integration with your existing systems. Fast turnaround without compromising quality."
              details={["99.9% Accuracy", "Digital Systems", "Fast Turnaround"]}
            />
            <ServiceModule
              id="05"
              title="Bookkeeping Services"
              image="/uploads/ayawin at work6.jpeg"
              description="Professional bookkeeping and financial record management aligned with inventory movements. We track purchases, sales, adjustments, and maintain organized ledgers for audit readiness. Includes reconciliation and financial statement preparation."
              details={["Ledger Management", "Reconciliation", "Audit Ready"]}
            />
            <ServiceModule
              id="06"
              title="Internal & Compliance Audits"
              image="/uploads/ayawin at work4.jpeg"
              description="Comprehensive internal audits to identify inefficiencies, prevent losses, and ensure regulatory compliance. We document processes, highlight risks, and provide actionable recommendations to strengthen your inventory controls."
              details={["Process Documentation", "Risk Assessment", "Recommendations"]}
            />
            <ServiceModule
              id="07"
              title="Inventory Management Systems"
              image="/uploads/ayawin at work8.jpeg"
              description="Real-time inventory tracking with barcode scanning, low-stock alerts, and dashboard analytics. Our integrated systems give you 24/7 visibility into stock levels, movement history, and predictive insights for better planning."
              details={["Real-time Tracking", "Mobile Scanning", "Analytics Dashboard"]}
            />
            <ServiceModule
              id="08"
              title="Custom ERP Solutions"
              image="/uploads/erp.png"
              description="Tailored enterprise resource planning software built for your business. Integrates inventory, accounting, procurement, and sales in one platform. We handle implementation, training, and ongoing support to ensure seamless adoption."
              details={["Custom Build", "Full Integration", "24/7 Support"]}
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
            <h2 className="text-white mb-10 leading-tight">Ready to Take Control of Your Inventory?</h2>
            <p className="text-slate-400 text-xl font-medium mb-12">
              Whether you need a physical count, system implementation, or ongoing bookkeeping support, our team has the expertise and experience to deliver measurable results.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <Link to="/quote" className="btn-bespoke">
                Request a Custom Quote
              </Link>
              <Link to="/contact" className="px-10 py-5 border-2 border-white/20 rounded-full text-white font-bold uppercase tracking-wider hover:border-amber-400 hover:text-amber-400 transition-all">
                Schedule a Consultation
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
