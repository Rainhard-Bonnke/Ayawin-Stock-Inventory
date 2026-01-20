import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Users, Target, Heart, ArrowRight } from "lucide-react";

const AboutPage: React.FC = () => {
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
              Our Story
            </span>
            <h1 className="text-white mb-6">
              Making Inventory <br />
              <span className="gradient-text from-blue-400 via-white to-amber-400">Simple & Accurate.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-slate-400 text-xl font-medium leading-relaxed">
              Founded to help businesses track their stock with precision and ease. Ayawin Stock Solutions is the future of logistics management in East Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section: Who We Are */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-100"
              >
                <img
                  src="/uploads/erp.png"
                  alt="Ayawin Systems"
                  className="w-full h-auto"
                />
              </motion.div>
              {/* Floating Stat Corner */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-10 -right-10 bg-white/90 backdrop-blur shadow-xl p-10 rounded-[2.5rem] hidden md:block border border-slate-100"
              >
                <div className="text-blue-600 font-bold text-4xl mb-2">100+</div>
                <div className="text-[10px] font-bold text-slate-900 uppercase tracking-widest whitespace-nowrap">Happy Clients <br />Managed Successfully</div>
              </motion.div>
            </div>

            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Our Origins</span>
                <h2 className="text-slate-900 mt-4 leading-tight">Born from <br />Experience. <br />Driven by <br />Results.</h2>
                <div className="w-24 h-1 bg-amber-400 mt-8" />
              </motion.div>

              <div className="space-y-6">
                <p className="text-xl text-slate-500 font-medium leading-relaxed">
                  Ayawin was created to solve a major problem: messy warehouses and inaccurate records. We understand both the physical work and the digital needs of modern business.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed font-medium italic">
                  "Our mission is to turn chaotic stockrooms into organized assets, ensuring every shilling is accounted for."
                </p>
              </div>

              <div className="pt-6">
                <Link to="/contact" className="btn-bespoke group">
                  Get in Touch
                  <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bespoke Core Mandates (Mission & Vision) */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-bespoke group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-600 rounded-[1.25rem] flex items-center justify-center mb-8 shadow-lg shadow-blue-200">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">OUR MISSION</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">
                  To provide absolute clarity for businesses in East Africa through accurate inventory audits and reliable data systems.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="card-bespoke group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-amber-500 rounded-[1.25rem] flex items-center justify-center mb-8 shadow-lg shadow-amber-200">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">OUR VISION</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">
                  To be the gold standard of logistics management in Kenya, helping businesses grow and succeed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logic Pillars (Core Values) */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Our Values</span>
            <h2 className="text-slate-900 mt-4">The Ayawin Standard.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard
              id="01"
              title="Integrity"
              desc="We are honest and transparent in all our records."
            />
            <ValueCard
              id="02"
              title="Precision"
              desc="We count everything carefully to eliminate errors."
            />
            <ValueCard
              id="03"
              title="Innovation"
              desc="Using technology to do things better and faster."
            />
            <ValueCard
              id="04"
              title="Security"
              desc="Protecting your assets with careful oversight."
            />
          </div>
        </div>
      </section>

      {/* Professional Leadership (Team) */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl text-left">
              <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">Leadership</span>
              <h2 className="text-white mt-4">Meet the Team.</h2>
            </div>
            <p className="text-slate-400 max-w-sm text-lg font-medium">
              Experts in logistics and systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <TeamCard
              name="Martin Koyih"
              role="Strategic Operations"
              image="/uploads/martin.jpg"
              bio="Commanding a decade of high-stakes retail logistics. Martin leads our field teams with an uncompromising focus on audit integrity."
            />

            <TeamCard
              name="Reinhard Bonnke"
              role="Systems Architecture"
              image="/uploads/bonnke.jpg"
              bio="The digital architect behind Ayawin's ERP ecosystem. Reinhard ensures that every physical count is translated into actionable intelligence."
              contact="0745617108"
            />
          </div>
        </div>
      </section>

      {/* Final Bespoke CTA */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-50/50" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-slate-900 mb-10 max-w-2xl mx-auto">Ready for Flawless Records?</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Link to="/quote" className="btn-bespoke">
              Begin Your Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Bespoke Value Card
const ValueCard: React.FC<{ id: string; title: string; desc: string }> = ({ id, title, desc }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="p-10 card-bespoke flex flex-col items-center text-center group"
    >
      <CheckCircle className="h-12 w-12 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
      <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{title}</h3>
      <p className="text-slate-500 text-sm font-medium leading-relaxed">{desc}</p>
    </motion.div>
  );
};

// Bespoke Team Card
const TeamCard: React.FC<{
  name: string;
  role: string;
  image: string;
  bio: string;
  contact?: string;
}> = ({ name, role, image, bio, contact }) => {
  return (
    <div className="group relative">
      <div className="card-bespoke flex flex-col md:flex-row items-center gap-10 p-10 bg-slate-800 border-white/5 hover:border-blue-500/30 transition-all duration-700">
        <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 relative">
          <div className="absolute inset-0 bg-blue-600 rotate-6 group-hover:rotate-12 transition-transform duration-700 rounded-[2.5rem] -z-10" />
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </div>

        <div className="text-center md:text-left space-y-4">
          <div>
            <span className="text-amber-500 font-black uppercase tracking-widest text-[10px] b-2 block">Executive Board</span>
            <h3 className="text-3xl font-black text-white tracking-tighter uppercase">{name}</h3>
            <div className="text-blue-400 font-bold uppercase tracking-widest text-xs mt-1">{role}</div>
          </div>
          <p className="text-slate-400 text-sm font-medium leading-relaxed">
            {bio}
          </p>
          {contact && (
            <div className="pt-4">
              <a
                href={`tel:${contact}`}
                className="inline-flex items-center gap-3 text-white font-black uppercase tracking-tighter border-b border-white/20 hover:border-amber-400 hover:text-amber-400 transition-all pb-2"
              >
                Secure Comms <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
