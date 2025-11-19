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
    <div>
      <section className="bg-blue-600 py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-2xl font-semibold text-blue-200 mb-2">Your Stock Our Solution</p>
          <p className="text-xl max-w-2xl mx-auto">
            Have a question or ready to get started? We're here to help!
          </p>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
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
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone number" type="tel" {...field} />
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
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Type your message here..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </Form>
            <div className="mt-6 text-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition font-semibold text-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M16.7 13.1c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.4-.8.9-.9 1-.2.1-.4.1-.7 0-.3-.1-1.2-.4-2.3-1.3-.8-.7-1.4-1.5-1.6-1.8-.2-.3-.1-.5.1-.7.2-.2.4-.5.6-.7.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.7-1.7-.9-2-.2-.3-.4-.3-.7-.3-.2 0-.5 0-.7.2-.2.2-1.1 1.1-1.1 2.7 0 1.6 1.2 3.1 1.4 3.3.2.2 2.3 3.6 5.6 3.6 1.6 0 2.5-1 2.7-1.3.2-.3.2-.5.2-.7 0-.2-.2-.4-.4-.6z" />
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                Chat with us on WhatsApp
              </a>
            </div>
            <div className="mt-4 text-center">
              <a
                href={`tel:+254791259510`}
                className="font-semibold text-blue-700 underline hover:text-blue-900"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;