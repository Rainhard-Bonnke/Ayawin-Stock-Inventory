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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/supabaseClient";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const SERVICE_ID = "service_00dsj1r";
const TEMPLATE_ID_CLIENT = "template_ymk3gss";
const TEMPLATE_ID_ADMIN = "template_j5wedzy";
const PUBLIC_KEY = "lwlF6RN3rfPvwuZKL";
const whatsappLink =
  "https://wa.me/254791259510?text=Hello%20%F0%9F%91%8B%0AThanks%20for%20contacting%20AyaWin%20Stock%20Solutions.%20We%E2%80%99ll%20get%20back%20to%20you%20shortly.%0A%F0%9F%93%9E%20Urgent%3F%20Call%200791%20259%20510.";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 characters." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  service: z.string().min(1, { message: "Please select a service." }),
  businessSize: z.string().min(1, { message: "Please select your business size." }),
  message: z.string().min(10, { message: "Please provide more details about your needs." }),
});

const QuotePage = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      businessSize: "",
      message: "",
    },
  });

  async function onSubmit(values) {
    const payload = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      company: values.company,
      service: values.service,
      business_size: values.businessSize,
      message: values.message,
    };

    const { error } = await supabase.from("quote_requests").insert([payload]);

    await emailjs.send(SERVICE_ID, TEMPLATE_ID_ADMIN, payload, PUBLIC_KEY);
    await emailjs.send(SERVICE_ID, TEMPLATE_ID_CLIENT, payload, PUBLIC_KEY);

    if (error) {
      toast.error("Failed to submit quote. Please try again.");
    } else {
      toast.success("Your quote request has been submitted! We'll get back to you shortly.");
      form.reset();
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div>
      <div className="flex justify-center items-center py-6">
        <img
          src="public/uploads/Logoo.jpeg"
          alt="Ayawin Logo"
          className="w-32 h-auto"
        />
      </div>

      {/* Hero Section with Animation */}
      <section className="bg-blue-600 py-16 md:py-24 text-white">
        <motion.div
          className="container mx-auto px-4 md:px-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            Request a Quote
          </motion.h1>
          <motion.p
            className="text-2xl font-semibold text-blue-200 mb-2"
            variants={itemVariants}
          >
            Your Stock Our Solution
          </motion.p>
          <motion.p
            className="text-xl max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Tell us about your business needs and we'll provide you with a customized quote.
          </motion.p>
        </motion.div>
      </section>

      {/* Quote Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-center">Get Your Free Quote</h2>
              <Form {...form}>
                <motion.form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                >
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={itemVariants}
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={itemVariants}
                  >
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={itemVariants}
                  >
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Needed</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="stock-takes">Stock Takes</SelectItem>
                              <SelectItem value="stock-arrangement">Stock Arrangement</SelectItem>
                              <SelectItem value="kra-stickers">KRA Stickers</SelectItem>
                              <SelectItem value="data-entry">Data Entry</SelectItem>
                              <SelectItem value="accounting">Accounting</SelectItem>
                              <SelectItem value="auditing">Auditing</SelectItem>
                              <SelectItem value="multiple">Multiple Services</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="businessSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Size</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select business size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="small">Small (1-10 employees)</SelectItem>
                              <SelectItem value="medium">Medium (11-50 employees)</SelectItem>
                              <SelectItem value="large">Large (51-200 employees)</SelectItem>
                              <SelectItem value="enterprise">Enterprise (201+ employees)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Details About Your Needs</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please describe your project, timeline, and any specific requirements"
                              rows={5}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  {/* Submit Button with hover/tap scale */}
                  <motion.div variants={itemVariants}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button type="submit" size="lg" className="w-full">
                        Request Quote
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.form>
              </Form>
            </div>

            {/* WhatsApp Button with hover/tap scale */}
            <div className="mt-8 text-center">
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M16.7 13.1c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.4-.8.9-.9 1-.2.1-.4.1-.7 0-.3-.1-1.2-.4-2.3-1.3-.8-.7-1.4-1.5-1.6-1.8-.2-.3-.1-.5.1-.7.2-.2.4-.5.6-.7.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.7-1.7-.9-2-.2-.3-.4-.3-.7-.3-.2 0-.5 0-.7.2-.2.2-1.1 1.1-1.1 2.7 0 1.6 1.2 3.1 1.4 3.3.2.2 2.3 3.6 5.6 3.6 1.6 0 2.5-1 2.7-1.3.2-.3.2-.5.2-.7 0-.2-.2-.4-.4-.6z" />
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                Chat with us on WhatsApp
              </motion.a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-600">
                Need immediate assistance? Call us at{" "}
                <a
                  href="tel:+254791259510"
                  className="font-semibold text-blue-700 underline hover:text-blue-900"
                >
                  +254 791259510
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuotePage;
