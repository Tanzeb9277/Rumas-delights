"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { UtensilsCrossed, ArrowRight } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Background video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="/images/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-pic.jpg"
          />

          {/* Dark overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center"
        >
          <motion.div
            variants={fadeIn}
            className="inline-block p-2 bg-white/10 backdrop-blur-sm rounded-full mb-4"
          >
          </motion.div>
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Ruma&apos;s Delights
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8"
          >
            Authentic Bengali Cuisine in the Heart of Atlanta
          </motion.p>
          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/menu" className="btn btn-primary">
              View Our Menu <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="btn btn-outline text-white border-white hover:bg-white/10 hover:border-white"
            >
              About Us
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex flex-col items-center text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight">
              Featured Dishes
            </h2>
            <div className="w-20 h-1 bg-primary mt-4"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Ilish Bhapa",
                desc: "Steamed hilsa fish with mustard sauce",
              },
              {
                name: "Kosha Mangsho",
                desc: "Slow-cooked Bengali mutton curry",
              },
              {
                name: "Chingri Malai Curry",
                desc: "Prawns cooked in coconut milk",
              },
            ].map((dish, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="card bg-base-100 shadow-xl overflow-hidden"
              >
                <figure className="relative h-64">
                  <Image
                    src={`/placeholder.svg?height=600&width=600&text=${encodeURIComponent(
                      dish.name
                    )}`}
                    alt={dish.name}
                    fill
                    className="object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{dish.name}</h3>
                  <p>{dish.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex justify-center mt-12"
          >
            <Link href="/menu" className="btn btn-primary">
              See Full Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex flex-col items-center text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight">
              What Our Customers Say
            </h2>
            <div className="w-20 h-1 bg-secondary mt-4"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                text: "The most authentic Bengali food I've had outside of Kolkata. Ruma's Delights truly lives up to its name!",
                author: "Sarah J.",
              },
              {
                text: "The Ilish Bhapa transported me back to my grandmother's kitchen in Dhaka. Absolutely delicious!",
                author: "Rahim M.",
              },
              {
                text: "A hidden gem in Atlanta! The flavors are bold, authentic and the service is exceptional.",
                author: "Michael T.",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="card bg-base-100 shadow-md"
              >
                <div className="card-body">
                  <p className="italic text-base-content/80 mb-4">
                    "{testimonial.text}"
                  </p>
                  <p className="font-medium text-primary">
                    — {testimonial.author}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}