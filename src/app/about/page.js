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
              From Dhaka to Georgia
            </h2>
            <div className="space-y-4 text-base-content/80">
              <p>
                Ruma's Delights was founded in 2001, as a small catering gig,
                primarily serving the masjid community of Lilburn, Georgia,
                especially during Ramadan, Eids’ and other gatherings.
              </p>
              <p>
                During the lockdown for Covid in 2020, the business took a new
                direction with restaurants closing and a renewed public interest
                in the sweets offered.
              </p>
              <p>
                Today, Ruma's Delights stands as a culinary landmark in Georgia,
                serving authentic Bengali cuisine that transports diners to the
                streets of Dhaka. Every dish is prepared with love, using
                traditional spices and cooking techniques that have been passed
                down through generations.
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
                  "We believe in creating a space where the Bengali community in Georgia can connect with their roots, and where others can discover the rich culture of Bengal.",
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
                        3302 Shallowford Road, Chamblee, GA 30341
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
                        Monday 11:00am - 10:00pm
                      </p>
                      <p className="text-base-content/70">Tuesday - Closed</p>
                      <p className="text-base-content/70">
                        Wednesday 11:00am - 10:00pm
                      </p>
                      <p className="text-base-content/70">
                        Thursday 11:00am - 10:00pm
                      </p>
                      <p className="text-base-content/70">
                        Friday 11:00am - 11:00pm
                      </p>
                      <p className="text-base-content/70">
                        Saturday & Sunday 11:30am - 11:00pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="h-full w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?q=Rumas%20Delights%2C%20Shallowford%20Road%2C%20Chamblee%2C%20GA%2C%20USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "400px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
