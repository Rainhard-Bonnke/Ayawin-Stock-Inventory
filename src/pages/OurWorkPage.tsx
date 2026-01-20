import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const OurWorkPage = () => {
  const gallery = [
    {
      title: "Strategic Mapping",
      subtitle: "The Foundation",
      description: "Initial warehouse assessment and strategy mapping to optimize workflow and layout.",
      url: "/uploads/ayawin at work.jpeg",
      type: "image",
    },
    {
      title: "Precision Audit",
      subtitle: "Verification",
      description: "Meticulous physical stock verification, ensuring every item is accounted for.",
      url: "/uploads/ayawin at work1.jpeg",
      type: "image",
    },
    {
      title: "Digital Integration",
      subtitle: "Data Integrity",
      description: "Transcribing field observations into our secure digital ecosystem for real-time tracking.",
      url: "/uploads/ayawin at work2.jpeg",
      type: "image",
    },
    {
      title: "Compliance Check",
      subtitle: "Regulatory Excellence",
      description: "Specialized inventory audits for pharmaceutical and sensitive stock categories.",
      url: "/uploads/ayawin at work3.jpeg",
      type: "image",
    },
    {
      title: "Spatial Optimization",
      subtitle: "Logistics Mastery",
      description: "Redesigning storage solutions to maximize operational throughput and accessibility.",
      url: "/uploads/ayawin at work4.jpeg",
      type: "image",
    },
    {
      title: "The Expert Edge",
      subtitle: "Talent at Work",
      description: "Our dedicated team applying years of logistics expertise to solve complex challenges.",
      url: "/uploads/ayawin at work5.jpeg",
      type: "image",
    },
    {
      title: "ERP Connectivity",
      subtitle: "Tech Convergence",
      description: "Syncing physical inventory with advanced cloud-based systems for absolute clarity.",
      url: "/uploads/ayawin at work6.jpeg",
      type: "image",
    },
    {
      title: "Retail Transformation",
      subtitle: "Operational Clarity",
      description: "Converting disorganized stockrooms into high-efficiency retail support centers.",
      url: "/uploads/ayawin at work7.jpeg",
      type: "image",
    },
    {
      title: "Systems Alignment",
      subtitle: "Error Mitigation",
      description: "Closing the gap between POS records and actual shelf stock through precise counting.",
      url: "/uploads/ayawin at work8.jpeg",
      type: "image",
    },
    {
      title: "Categorization Logic",
      subtitle: "Warehouse Systems",
      description: "Implementing logical alpha-numeric SKU placement for faster picking and packing.",
      url: "/uploads/ayawin at work9.jpeg",
      type: "image",
    },
    {
      title: "Visual Verification",
      subtitle: "Documentation",
      description: "High-definition visual record-keeping of stock conditions and audit procedures.",
      url: "/uploads/ayawin at work10.jpeg.mp4",
      type: "video",
    },
    {
      title: "Final Certification",
      subtitle: "Quality Assurance",
      description: "The double-check verification that guarantees our trademark 99.9% accuracy.",
      url: "/uploads/ayawin at work11.jpeg",
      type: "image",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-slate-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-blue-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-amber-600 rounded-full blur-[120px]" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-amber-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Excellence in Motion
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white gradient-text from-white via-white to-amber-200"
          >
            Our Work & <br />Distinguished Moments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl font-medium"
          >
            A visual journey through the meticulous processes that define Ayawin Stock Solutions.
          </motion.p>
        </div>
      </section>

      {/* Discovery Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {gallery.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx % 3 * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="card-bespoke h-full flex flex-col p-4 overflow-hidden rounded-[2rem]">
                  <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-[1.5rem] mb-8">
                    {item.type === "image" ? (
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    ) : (
                      <div className="relative w-full h-full bg-slate-900 flex items-center justify-center">
                        <video
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110"
                        >
                          <source src={item.url} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform duration-500">
                            <Play fill="white" className="ml-1" />
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="px-4 pb-4">
                    <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-2 block">
                      {item.subtitle}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tighter uppercase group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container-custom text-center">
          <h2 className="text-slate-900 mb-8 max-w-2xl mx-auto">Ready for Flawless Records?</h2>
          <button className="btn-bespoke">
            Start Your Audit Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default OurWorkPage;
