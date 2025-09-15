"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Message sent successfully 🚀");
    }, 1200);
  };

  return (
    <section className="bg-neutral-100 dark:bg-neutral-900 w-full min-h-[calc(100dvh-64px)] flex justify-center items-center text-foreground py-16 px-6 md:px-12 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl dark:bg-neutral-900 bg-neutral-100 mx-auto">
        
        {/* Left Side */}
        <motion.div
          className="space-y-6 flex flex-col justify-between h-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <h2 className="text-4xl font-bold">Get in touch</h2>
            <p className="mt-2 text-muted-foreground">
              Have a project in mind or just want to say hello? Fill out the form below and I’ll get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7013.359429296694!2d77.33761719280984!3d28.48919075297282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7ae6ee369b1%3A0x18b7188487f725ea!2sRoshan%20Nagar%2C%20Faridabad%2C%20Haryana%20121013!5e0!3m2!1sen!2sin!4v1757737996359!5m2!1sen!2sin"
              width="318"
              height="240"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold">Details</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+911234567890" className="text-primary hover:underline">
                  <strong>Phone:</strong><a href="" className="hover:text-blue-600"> (+91) 9910412709</a> 
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:surajsharma.devloper@gmail.com" className="text-primary hover:underline hover:text-blue-600">
                  surajsharma.devloper@gmail.com
                </a>
              </li>
              <li>
                <strong>LinkedIn:</strong>{" "}
                <a href="https://www.linkedin.com/in/surajsharma95250/" target="_blank" className="text-primary hover:underline hover:text-blue-600">
                  surajsharma95250
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className=" shadow-lg rounded-2xl">
            <CardContent>
              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/xnnbrwnn"
                method="POST"
                className="space-y-6"
              >
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                  <div className="space-y-3">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input type="text" id="firstName" name="First name :" placeholder="First Name" required />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input type="text" id="lastName" name="Last name" placeholder="Last Name" required />
                  </div>
                </motion.div>

                <motion.div className="space-y-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" name="Email :" placeholder="Email" required />
                </motion.div>

                <motion.div className="space-y-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="Subject :" placeholder="Subject" required />
                </motion.div>

                <motion.div className="space-y-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="Messages :" placeholder="Type your message here." required />
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
