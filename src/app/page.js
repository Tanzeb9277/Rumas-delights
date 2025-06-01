"use client"
import { Euphoria_Script } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";


const euphoriaScript = Euphoria_Script({
  variable: "--font-euphoria-script",
  subsets: ["latin"],
  weight: "400",
});


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
      <section className="relative h-screen flex items-center justify-between overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Background video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="/images/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
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
          ></motion.div>
          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-6xl text-white mb-4"
          >
            <span
              className={`${euphoriaScript.className} text-6xl md:text-7xl`}
            >
              Ruma&apos;s
            </span>{" "}
            Delights
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8"
          >
            Authentic Bengali Cuisine in the Heart of Georgia
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
                name: "Beef Bhuna",
                desc: `Beef Bhuna is a traditional Bengali dish known for its deep, rich flavors and thick, spiced gravy. The word "bhuna" refers to the slow cooking process where spices and meat are fried and simmered together until the oil separates and the gravy thickens`,
                imgUrl: "/images/featured-1.png",
              },
              {
                name: "Shrimp Malai Curry",
                desc: "Made with tender shrimp cooked in a rich, creamy coconut milk-based gravy",
                imgUrl: "/images/featured-2.jpeg",
              },
              {
                name: "Beef Tehari",
                desc: "Fragrant, spicy, and flavorful combination of tender beef cooked together with aromatic basmati rice and a rich blend of spices",
                imgUrl: "/images/featured-3.jpeg",
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
                    src={dish.imgUrl}
                    alt={dish.name}
                    fill
                    className="object-cover"
                    loading="lazy"
                    title="Delicious Bengali Dish"
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
                text: "I had a splendid time here! Took me back to Bangladesh.",
                author: "Anaida H.",
              },
              {
                text: "Visited for the first time and had an amazing experience! The food was fresh, flavorful, and truly authentic, from the soft parathas to the rich, delicious curries. You can tell everything is made with care. The service was warm and welcoming. Highly recommend to anyone looking for great Bangladeshi cuisine!!",
                author: "Akash H.",
              },
              {
                text: "Great service and delicious food!",
                author: "Sarah B.",
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

      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4 md:px-6">
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
                      title="Ruma's Delights Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}