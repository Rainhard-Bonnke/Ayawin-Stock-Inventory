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
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const ServicesPage = () => {
  // services as an array to alternate easily
  const services = [
    {
      title: "Stock Takes",
      description:
        "We conduct full physical stock counts and reconcile your inventory records with what's actually on the ground. No more guessing or discrepancies.",
      details: [
        "Complete physical inventory counting",
        "Reconciliation with existing records",
        "Variance analysis and reporting",
        "Recommendations for inventory optimization",
        "Flexible scheduling including after-hours options",
      ],
      icon: <ClipboardCheck className="h-12 w-12 text-blue-600" />,
      imageUrl: "/uploads/stock taking.png",
    },
    {
      title: "Stock Management",
      description:
        "We help you take full control of your inventory by implementing systems and practices that streamline your stock processes and minimize losses.",
      details: [
        "Real-time stock level tracking",
        "Automatic low-stock alerts and reorder points",
        "Inventory categorization and SKU management",
        "Stock valuation and reporting",
        "Integration with POS and accounting systems",
      ],
      icon: <BarChart className="h-12 w-12 text-blue-600" />,
      imageUrl: "/uploads/stock management.png",
    },
    {
      title: "Stock Arrangement",
      description:
        "Our team helps arrange and label your stock for easy access, better flow, and improved inventory control.",
      details: [
        "Logical arrangement based on usage frequency",
        "Clear labeling and categorization",
        "Implementation of FIFO/LIFO systems",
        "Space optimization recommendations",
        "Staff training on maintaining arrangements",
      ],
      icon: <Database className="h-12 w-12 text-blue-600" />,
      imageUrl: "/uploads/stock arrangement.jpeg",
      reversed: true,
    },
    {
      title: "KRA Stickers Labelling",
      description:
        "Stay compliant with KRA requirements by letting us help you apply and manage KRA stickers professionally and correctly.",
      details: [
        "Accurate application of ETR stickers",
        "Compliance with KRA regulations",
        "Record keeping of applied stickers",
        "Management of sticker inventory",
        "Training on compliance requirements",
      ],
      icon: <File className="h-12 w-12 text-blue-600" />,
      imageUrl: "/uploads/kra.png",
    },
    {
      title: "Data Entry",
      description: "...",
      details: [
        "Digitization of inventory data",
        "Streamlined purchase order processing",
        "Document digitization",
        "Database cleanup and organization",
        "Accurate data entry solutions",
      ],
      icon: <File className="h-12 w-12 text-blue-600" />,
      imageUrl: "/uploads/data-entry.png",
    },
    {
      title: "Accounting",
      description:
        "We assist with basic bookkeeping and financial record organization, helping you keep things clean and ready for audits or reviews.",
      details: [
        "Basic bookkeeping services",
        "Financial record organization",
        "Bank reconciliation",
        "Transaction processing and management",
        "Financial reporting preparation",
      ],
      icon: <BarChart className="h-12 w-12 text-blue-600" />,
      imageUrl: "/uploads/accounting.png",
    },
    {
      title: "Auditing",
      description:
        "We offer internal audits to check your financial and inventory processes, identify gaps, and recommend improvements.",
      details: [
        "Comprehensive inventory audits",
        "Process compliance reviews",
        "Detailed variance reporting",
        "Risk assessment and mitigation recommendations",
        "Follow-up verification services",
      ],
      icon: <CheckCircle className="h-12 w-12 text-blue-600" />,
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      reversed: true,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-600 py-20 md:py-28 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-700/80 to-blue-600/90 z-0" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
          >
            Our Services
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="text-xl max-w-3xl mx-auto text-gray-100"
          >
            Comprehensive inventory and business support solutions tailored to
            your specific needs.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container-custom space-y-0"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} py-16`}
            >
              <div className="container-custom">
                <ServiceItem {...service} />
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-50 via-white to-blue-50">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="container-custom text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Need a Customized Service?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We can tailor our services to meet your specific business
            requirements. Let's discuss your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="shadow-md">
              <Link to="/quote">Get a Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-md">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

// Service Item Component
interface ServiceItemProps {
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  imageUrl: string;
  reversed?: boolean;
}

const ServiceItem = ({
  title,
  description,
  details,
  icon,
  imageUrl,
  reversed = false,
}: ServiceItemProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
        reversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className={reversed ? "md:order-2" : ""}>
        <div className="flex items-center mb-4">
          {icon}
          <h2 className="text-3xl font-bold ml-3">{title}</h2>
        </div>
        <p className="text-lg text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3 mb-6">
          {details.map((detail, index) => (
            <li
              key={index}
              className="flex items-start text-gray-700 hover:text-blue-600 transition-colors"
            >
              <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={reversed ? "md:order-1" : ""}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="rounded-xl overflow-hidden shadow-xl flex justify-center items-center w-full max-w-md h-72 mx-auto bg-gray-50"
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
