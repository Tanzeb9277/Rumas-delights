"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
      staggerChildren: 0.1,
    },
  },
};

export default function MenuPage() {
  // Menu categories and items
  const menuCategories = [
    {
      name: "Appetizers",
      items: [
        { name: "Beguni", description: "Eggplant fritters", price: "$6.99" },
        {
          name: "Shingara",
          description: "Bengali samosas with spiced potatoes",
          price: "$5.99",
        },
        {
          name: "Phuchka",
          description: "Crispy hollow puris filled with spiced water",
          price: "$7.99",
        },
        {
          name: "Chicken Chop",
          description: "Breaded and fried chicken cutlets",
          price: "$8.99",
        },
      ],
    },
    {
      name: "Main Courses",
      items: [
        {
          name: "Ilish Bhapa",
          description: "Steamed hilsa fish with mustard sauce",
          price: "$18.99",
        },
        {
          name: "Kosha Mangsho",
          description: "Slow-cooked Bengali mutton curry",
          price: "$17.99",
        },
        {
          name: "Chingri Malai Curry",
          description: "Prawns cooked in coconut milk",
          price: "$19.99",
        },
        {
          name: "Doi Maach",
          description: "Fish cooked in yogurt gravy",
          price: "$16.99",
        },
        {
          name: "Shorshe Ilish",
          description: "Hilsa fish in mustard gravy",
          price: "$21.99",
        },
      ],
    },
    {
      name: "Vegetarian Specialties",
      items: [
        {
          name: "Shukto",
          description: "Mixed vegetable stew with bitter gourd",
          price: "$12.99",
        },
        {
          name: "Aloo Posto",
          description: "Potatoes cooked with poppy seeds",
          price: "$11.99",
        },
        {
          name: "Cholar Dal",
          description: "Bengal gram lentils with coconut",
          price: "$10.99",
        },
        {
          name: "Lau Ghonto",
          description: "Bottle gourd curry with lentil dumplings",
          price: "$12.99",
        },
      ],
    },
    {
      name: "Rice & Breads",
      items: [
        {
          name: "Basanti Pulao",
          description: "Sweet yellow rice with dry fruits",
          price: "$8.99",
        },
        { name: "Bhaat", description: "Steamed Bengali rice", price: "$3.99" },
        { name: "Luchi", description: "Deep-fried flatbread", price: "$4.99" },
        {
          name: "Radhaballavi",
          description: "Stuffed lentil puris",
          price: "$5.99",
        },
      ],
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Roshogolla",
          description: "Cottage cheese balls in sugar syrup",
          price: "$5.99",
        },
        { name: "Mishti Doi", description: "Sweet yogurt", price: "$4.99" },
        {
          name: "Sandesh",
          description: "Sweet cottage cheese fudge",
          price: "$6.99",
        },
        {
          name: "Patishapta",
          description: "Bengali crepes with coconut filling",
          price: "$7.99",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen mt-18 py-12 bg-base-100">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Menu Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-base-content/80 max-w-2xl mx-auto">
            Experience the authentic flavors of Bengal with our carefully
            crafted dishes, prepared with traditional spices and cooking
            techniques.
          </p>
        </motion.div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {menuCategories.map((category, index) => (
            <motion.section
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="scroll-mt-16"
              id={category.name.toLowerCase().replace(/\s+/g, "-")}
            >
              <motion.div variants={fadeIn} className="flex items-center mb-8">
                <h2 className="text-2xl font-bold text-primary">
                  {category.name}
                </h2>
                <div className="ml-4 flex-1 h-px bg-base-300"></div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    variants={fadeIn}
                    whileHover={{ x: 5 }}
                    className="flex gap-4"
                  >
                    <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={`/placeholder.svg?height=200&width=200&text=${encodeURIComponent(
                          item.name
                        )}`}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <span className="text-secondary font-medium">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-base-content/70 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Special Dietary Note */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-16 p-6 bg-base-200 rounded-lg"
        >
          <h3 className="text-lg font-medium mb-2">Dietary Information</h3>
          <p className="text-base-content/80">
            Please inform your server of any allergies or dietary restrictions.
            Many of our dishes can be prepared to accommodate vegetarian, vegan,
            and gluten-free diets. Items marked with (V) are vegetarian.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
