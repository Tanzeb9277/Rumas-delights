"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};



export default function AboutPage() {


  return (
    <main
      className="min-h-screen mt-18
     py-12 bg-base-100"
    >
      <div className="container px-4 md:px-6 mx-auto">
        {/* About Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Story</h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square rounded-lg overflow-hidden"
          >
            <Image
              src="/images/about.jpg"
              alt="Ruma's Delights Restaurant"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">
              From Dhaka to Atlanta
            </h2>
            <div className="space-y-4 text-base-content/80">
              <p>
                Ruma's Delights was founded in 2010 by Ruma Ahmed, who brought
                her family's treasured recipes from Dhaka, Bangladesh to
                Atlanta, Georgia. What started as a small catering business from
                her home kitchen quickly gained popularity among the local
                Bengali community.
              </p>
              <p>
                In 2015, encouraged by the overwhelming response to her
                authentic cooking, Ruma opened her first restaurant in the heart
                of Atlanta. Her mission was simple: to share the rich culinary
                heritage of Bengal with the diverse population of Atlanta.
              </p>
              <p>
                Today, Ruma's Delights stands as a culinary landmark in Atlanta,
                serving authentic Bengali cuisine that transports diners to the
                streets of Dhaka and Kolkata. Every dish is prepared with love,
                using traditional spices and cooking techniques that have been
                passed down through generations.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Our Values */}
        <div className="mb-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-2xl font-bold mb-8 text-center text-primary"
          >
            Our Values
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Authenticity",
                description:
                  "We stay true to traditional Bengali recipes and cooking methods, using authentic spices imported directly from Bangladesh.",
              },
              {
                title: "Community",
                description:
                  "We believe in creating a space where the Bengali community in Atlanta can connect with their roots, and where others can discover the rich culture of Bengal.",
              },
              {
                title: "Quality",
                description:
                  "We source the freshest ingredients and prepare everything from scratch daily to ensure the highest quality dining experience.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="card bg-base-200"
              >
                <div className="card-body">
                  <h3 className="text-xl font-medium mb-3 text-secondary">
                    {value.title}
                  </h3>
                  <p className="text-base-content/80">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Visit Us Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="card bg-base-200 shadow-xl"
        >
          <div className="card-body p-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  Visit Us
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-secondary mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-base-content/70">
                        3302 Shallowford Road, Atlanta, GA 30341
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-secondary mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-base-content/70">(770) 717-7004</p>
                      <p className="text-base-content/70">(770) 617-8995</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-secondary mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-base-content/70">
                        info@rumasdelights.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-secondary mt-0.5 mr-3" />
                    <div>
                      <h3 className="font-medium">Hours</h3>
                      <p className="text-base-content/70">
                        Monday - Thursday: 11am - 10pm
                      </p>
                      <p className="text-base-content/70">
                        Friday - Saturday: 11am - 11pm
                      </p>
                      <p className="text-base-content/70">Sunday: 12pm - 9pm</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Map+Location"
                  alt="Map location"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
