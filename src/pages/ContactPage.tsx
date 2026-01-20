import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, Mail, MapPin, MessageSquare, Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const SERVICE_ID = "service_00dsj1r";
const TEMPLATE_ID_CLIENT = "template_ymk3gss"; // auto-reply to client
const TEMPLATE_ID_ADMIN = "template_j5wedzy"; // notification to admin (replace with your actual ID)
const PUBLIC_KEY = "lwlF6RN3rfPvwuZKL";
const whatsappLink =
  "https://wa.me/254791259510?text=Hello%20%F0%9F%91%8B%0AThanks%20for%20contacting%20AyaWin%20Stock%20Solutions.%20We%E2%80%99ll%20get%20back%20to%20you%20shortly.%0A%F0%9F%93%9E%20Urgent%3F%20Call%200791%20259%20510.";

const ContactPage = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values) {
    try {
      // Send notification to admin
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID_ADMIN,
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
          title: "Contact Message",
        },
        PUBLIC_KEY
      );

      // Send auto-reply to client
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID_CLIENT,
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
          title: "Contact Message",
        },
        PUBLIC_KEY
      );

      toast.success("Your message has been sent! We'll get back to you soon.");
      form.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Bespoke Hero */}
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
              Contact Us
            </span>
            <h1 className="text-white mb-6">
              Get In <br />
              <span className="gradient-text from-blue-400 via-white to-amber-400">Touch.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-slate-400 text-xl font-medium leading-relaxed">
              Reach out for quotes, support, or general inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-12"
            >
              <div>
                <h2 className="text-slate-900 mb-6 leading-none">Contact <br />Information.</h2>
                <p className="text-lg text-slate-500 font-medium">
                  We are here to help. Reach out to us directly through any of these channels.
                </p>
              </div>

              <div className="space-y-8">
                <ContactInfoBlock
                  icon={<Phone className="h-6 w-6 text-blue-600" />}
                  title="Phone Number"
                  value="+254 791 259 510"
                  link="tel:+254791259510"
                />
                <ContactInfoBlock
                  icon={<Mail className="h-6 w-6 text-blue-600" />}
                  title="Email Address"
                  value="ayawin.ke@gmail.com"
                  link="mailto:ayawin.ke@gmail.com"
                />
                <ContactInfoBlock
                  icon={<MapPin className="h-6 w-6 text-blue-600" />}
                  title="Location"
                  value="Nairobi, Kenya"
                />
              </div>

              {/* Fast-Track CTA */}
              <div className="pt-8">
                <div className="card-bespoke bg-slate-50 border-slate-100 p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Fast Contact</h3>
                  <p className="text-sm text-slate-500 mb-6 font-medium">Connect instantly via WhatsApp.</p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-bespoke w-full !bg-green-600 hover:!bg-green-700"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Message Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="card-bespoke !p-12 shadow-2xl border-slate-100">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-bold uppercase tracking-widest text-[10px] text-blue-600">Full Name</FormLabel>
                            <FormControl>
                              <Input className="rounded-xl border-slate-100 bg-slate-50 h-14 font-medium" placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-bold uppercase tracking-widest text-[10px] text-blue-600">Email Address</FormLabel>
                            <FormControl>
                              <Input className="rounded-xl border-slate-100 bg-slate-50 h-14 font-medium" placeholder="you@company.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold uppercase tracking-widest text-[10px] text-blue-600">Phone Number</FormLabel>
                          <FormControl>
                            <Input className="rounded-xl border-slate-100 bg-slate-50 h-14 font-medium" placeholder="+254 --- --- ---" type="tel" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-bold uppercase tracking-widest text-[10px] text-blue-600">Your Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="How can we help you?"
                              className="rounded-xl border-slate-100 bg-slate-50 min-h-[160px] font-medium"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="btn-bespoke w-full h-16 !text-lg gap-3">
                      Send Message <Send className="h-5 w-5" />
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Internal Bespoke Components
const ContactInfoBlock = ({ icon, title, value, link }: { icon: React.ReactNode, title: string, value: string, link?: string }) => {
  const content = (
    <div className="flex gap-6 items-center group cursor-pointer">
      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <div>
        <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{title}</div>
        <div className="text-xl font-black text-slate-900 tracking-tighter uppercase group-hover:text-blue-600 transition-colors">{value}</div>
      </div>
    </div>
  );

  return link ? <a href={link}>{content}</a> : <div className="cursor-default">{content}</div>;
};

export default ContactPage;