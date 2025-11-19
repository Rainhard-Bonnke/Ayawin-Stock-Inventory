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
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 min-h-[80vh]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Reliable{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
                  Inventory Management
                </span>{" "}
                & Business Support
              </h1>
              <p className="text-xl font-medium text-yellow-200">
                Your Stock, Our Solution
              </p>
              <p className="text-lg text-blue-100 max-w-md">
                From stock takes to data entry, Ayawin Stock Solutions helps you
                stay organized, compliant, and in control.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
                  <Link to="/quote">Get a Free Quote</Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-300 rounded-full opacity-50" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400 rounded-full opacity-40" />
              <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-[520px] h-[520px] mx-auto">
                <img
                  src="/uploads/Homepage.jpeg"
                  alt="Inventory Management"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 gradient-text">
            About Ayawin Stock Solutions
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We provide expert inventory and business support services tailored
            to your company’s needs. From retail shops to warehouses, we deliver
            accuracy, efficiency, and peace of mind.
          </p>
          <Button asChild variant="outline">
            <Link to="/about">Learn More About Us</Link>
          </Button>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to keep your inventory accurate and your
              business running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Stock Takes"
              description="Accurate inventory counting and reconciliation."
              icon={<ClipboardCheck className="h-10 w-10 text-blue-600" />}
            />
            <ServiceCard
              title="Stock Management"
              description="Real-time tracking, low-stock alerts, and full inventory control."
              icon={<BarChart className="h-10 w-10 text-blue-600" />}
            />
            <ServiceCard
              title="Stock Arrangement"
              description="Organizing your stock for better flow and tracking."
              icon={<Database className="h-10 w-10 text-blue-600" />}
            />
            <ServiceCard
              title="KRA Stickers"
              description="Placement and management of KRA-compliant labels."
              icon={<FileText className="h-10 w-10 text-blue-600" />}
            />
            <ServiceCard
              title="Data Entry"
              description="Fast and accurate data input for smooth operations."
              icon={<Database className="h-10 w-10 text-blue-600" />}
            />
            <ServiceCard
              title="Accounting"
              description="Basic bookkeeping and financial data management."
              icon={<BarChart className="h-10 w-10 text-blue-600" />}
            />
            <ServiceCard
              title="Auditing"
              description="Internal reviews to catch errors and ensure compliance."
              icon={<CheckCircle className="h-10 w-10 text-blue-600" />}
            />
          </div>

          <div className="text-center mt-10">
            <Button asChild className="btn-primary">
              <Link to="/services">See All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We pride ourselves on delivering exceptional service that keeps
              our clients coming back.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="Accuracy You Can Trust"
              description="Our meticulous approach ensures reliable inventory data."
            />
            <FeatureCard
              title="Affordable Pricing"
              description="Transparent pricing with no hidden fees or surprises."
            />
            <FeatureCard
              title="Fast Turnaround Times"
              description="We work efficiently to minimize disruption to your business."
            />
            <FeatureCard
              title="Professional Team"
              description="Experienced professionals who understand your business needs."
            />
          </div>
        </div>
      </section>

      {/* Our Work & Moments Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Our Work & Moments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Photo */}
            <div className="rounded-lg overflow-hidden shadow hover:scale-[1.03] transition bg-white">
              <img
                src="/uploads/martin.jpg"
                alt="Inventory Audit - Nairobi"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <p className="font-semibold text-blue-700">Inventory Audit - Nairobi</p>
              </div>
            </div>
            {/* Sample Video */}
            <div className="rounded-lg overflow-hidden shadow hover:scale-[1.03] transition bg-white">
              <video controls className="w-full h-64 object-cover object-center bg-black">
                <source src="/uploads/ayawin.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4">
                <p className="font-semibold text-blue-700">promo vedio</p>
              </div>
            </div>
            {/* Another Sample Photo */}
            <div className="rounded-lg overflow-hidden shadow hover:scale-[1.03] transition bg-white">
              <img
                src="/uploads/WhatsApp Image 2025-09-29 at 23.38.27 (2).jpeg"
                alt="Stock Arrangement - Kisumu"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <p className="font-semibold text-blue-700">Stock Arrangement - Kisumu</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/our-work">View More Work & Moments</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
            <div className="bg-white p-8 rounded-xl shadow-lg relative">
              <Quote className="absolute -top-6 left-6 text-blue-600 w-12 h-12 opacity-30" />
              <p className="text-lg text-gray-700 italic mb-6">
                "Ayawin Stock Solution helped us organize our inventory in just
                two days. Super efficient!"
              </p>
              <div className="flex items-center justify-center gap-3">
                <img
                  src="/uploads/Tamara.jpg"
                  alt="Client"
                  className="w-12 h-12 rounded-full border border-blue-200 object-cover object-center"
                />
                <p className="font-medium text-gray-800">— Happy Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8">
            Let us help you take control of your inventory and streamline your
            business operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
              <Link to="/quote">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-t-4 border-blue-600">
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-blue-700">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

// Feature Card Component
const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="p-6 text-center rounded-lg border border-gray-100 bg-white transition-all duration-300 hover:shadow-md">
      <h3 className="text-xl font-semibold mb-3 text-blue-700">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default HomePage;
