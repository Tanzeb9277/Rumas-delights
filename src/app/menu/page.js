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
        {
          name: "Chotpoti",
          description:
            "Spicy and tangy chickpeas and potatoes with diced peppers and grated boiled eggs",
          price: "$6.99",
        },
        {
          name: "Samosa",
          description: "Bengali samosas with spiced potatoes (2 pcs.)",
          price: "$3.99",
        },
        {
          name: "Fuchka (Pani Puri)",
          description: "Crispy potato-filled puris",
          price: "$5.99",
        },
        {
          name: "Pakora",
          description: "Crispy fritters made with vegetables (2 pcs.)",
          price: "$2.99",
        },
        {
          name: "Puffed Pastry",
          description:
            "Delicious puff pastries served with either chicken or beef filling",
          price: "$2.99",
        },
      ],
    },
    {
      name: "Main Courses",
      items: [
        {
          name: "Butter Chicken",
          description:
            "Rich, creamy, and mildly spiced. Made with tender pieces of chicken cooked in a tomato-based sauce enriched with butter and cream",
          price: "$11.99",
        },
        {
          name: "Beef Bhuna",
          description: `Beef Bhuna is a traditional Bengali dish known for its deep, rich flavors and thick, spiced gravy. The word "bhuna" refers to the slow cooking process where spices and meat are fried and simmered together until the oil separates and the gravy thickens`,
          price: "$11.99",
        },
        {
          name: "Karrai Ghost (Goat)",
          description: `Tender pieces of goat meat cooked in a rich, spicy gravy with a blend of aromatic spices`,
          price: "$14.99",
        },
        {
          name: "Shrimp Malai Curry",
          description:
            "Made with tender shrimp cooked in a rich, creamy coconut milk-based gravy",
          price: "$14.99",
        },
        {
          name: "Shrimp Dupiazi",
          description:
            "Juicy shrimp simmered in a semi-thick gravy made with onions, tomatoes, ginger, garlic",
          price: "$14.99",
        },
        {
          name: "Fish Dupiazi (Salmon)",
          description:
            "Savory, slightly sweet, and aromatic dish with bold onion flavor, made with fresh salmon",
          price: "$14.99",
        },
        {
          name: "Fish Dupiazi (Rui)",
          description:
            "Savory, slightly sweet, and aromatic dish with bold onion flavor made with fresh Rui",
          price: "$11.99",
        },
        {
          name: "Mixed Grill Kebab",
          description:
            "Assortment of different types meats marinated with a unique blend of spices, yogurt, herbs grilled over an open flame, giving them a smoky, charred aroma and juicy texture",
          price: "$14.99",
        },
      ],
    },
    {
      name: "International Menu",
      items: [
        {
          name: "Beef Burger with fries",
          description: "Served hot and fresh alongside crispy french fries",
          price: "$9.99",
        },
        {
          name: "Veggie Burger with fries",
          description: `Delicious and satisfying plant-based alternative to the classic burger meal`,
          price: "$9.99",
        },
        {
          name: "Philly Cheese Steak with fries",
          description:
            "Mouthwatering combination of thinly sliced beef, melted cheese, and a soft hoagie roll",
          price: "$9.99",
        },
        {
          name: "Chicken Fajita",
          description:
            "Marinated grilled chicken strips served with sautéed bell peppers and onions, typically wrapped in warm tortillas",
          price: "$9.99",
        },
        {
          name: "Quesadilla",
          description:
            "Crispy on the outside, gooey on the inside, and packed with flavor",
          price: "$9.99",
        },
        {
          name: "Spaghetti Pasta",
          description:
            "Classic Italian pasta dish known for its long, thin noodles and rich, flavorful sauces",
          price: "$9.99",
        },
        {
          name: "Penne Pasta",
          description: "Light golden pasta with vibrant sauces",
          price: "$9.99",
        },
        {
          name: "Linguine Pasta",
          description: "Classic Italian pasta",
          price: "$9.99",
        },
        {
          name: "Chili Chicken",
          description:
            "Combination of crispy fried chicken with a spicy, tangy, and slightly sweet sauce",
          price: "$11.99",
        },
        {
          name: "Mongolian Beef",
          description:
            "Tender, thinly sliced beef cooked in a savory, slightly sweet, and flavorful sauce",
          price: "$11.99",
        },
        {
          name: "Fried Rice",
          description: "Classic chinese style fried rice",
          price: "$6.99",
        },
      ],
    },
    {
      name: "Sides",
      items: [
        {
          name: "Haleem",
          description:
            "Deeply flavorful and hearty dish slow-cooked with meat, lentils, and grains, and a combination of traditional spices",
          price: "$5.99",
        },
        {
          name: "Chicken Corn Soup",
          description:
            "Light, comforting soup made with shredded chicken, sweet corn, and a mildly seasoned broth",
          price: "$4.99",
        },
        {
          name: "Daal",
          description: "Simple yet flavorful lentil stew",
          price: "$4.99",
        },
        {
          name: "Shami Kebab",
          description:
            "Flavorful, tender patty made primarily from ground meat and lentils",
          price: "$4.99",
        },
        {
          name: "Garden Salad",
          description: "A colorful salad, made with fresh vegetables",
          price: "$5.99",
        },
      ],
    },

    {
      name: "Rice Dishes",
      items: [
        {
          name: "Chicken Roast Pulao",
          description:
            "Fragrant basmati rice cooked together with tender, spiced roasted chicken and a blend of whole spices",
          price: "$9.99",
        },
        {
          name: "Rice Pulao",
          description: "Fragrant and lightly spiced rice",
          price: "$1.99",
        },
        {
          name: "Beef Biryani",
          description:
            "Marinated tender pieces of spiced beef with fragrant basmati rice, layered and cooked together",
          price: "$11.99",
        },
        {
          name: "Chicken Biryani",
          description: "Marinated chicken pieces with fragrant basmati rice",
          price: "$11.99",
        },
        {
          name: "Beef Tehari",
          description:
            "Fragrant, spicy, and flavorful combination of tender beef cooked together with aromatic basmati rice and a rich blend of spices",
          price: "$9.99",
        },
      ],
    },
    {
      name: "Breads",
      items: [
        {
          name: "Porota (Paratha)",
          description:
            "South Asian flatbread known for its flaky, layered texture and rich, buttery taste",
          price: "$1.99",
        },
        {
          name: "Moghlai Porota",
          description:
            "Golden, flaky, and crisp South Asian flatbread stuffed with a savory filling",
          price: "$5.99",
        },
        { name: "Luchi", description: "Deep-fried flatbread", price: "$1.99" },
        {
          name: "Daal Puri",
          description:
            "Crispy yet soft flatbread with a savory, mildly spicy lentil center",
          price: "$1.99",
        },
        {
          name: "Naan",
          description:
            "Soft, leavened flatbread baked in a tandoor (clay oven)",
          price: "$1.99",
        },
        {
          name: "Roti",
          description: "Whole wheat flatbread",
          price: "$0.99",
        },
      ],
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Balushai",
          description: "Rich, deep-fried dessert known for its flaky texture",
          price: "$1.99",
        },
        {
          name: "Mishti Doi",
          description:
            "Traditional Bengali sweetened yogurt dessert, loved for its creamy texture and caramelized sweetness",
          price: "$4.99",
        },
        {
          name: "Shondesh",
          description:
            "Classic Bengali sweet made primarily from fresh paneer (chena) and sugar",
          price: "$1.99",
        },
        {
          name: "Chomchom",
          description:
            "Classic Bengali sweet known for its soft, spongy texture and sweet, fragrant flavor",
          price: "$1.99",
        },
        {
          name: "Kalojam",
          description:
            "Rich and popular South Asian sweet known for its deep, dark color and intense flavor",
          price: "$1.99",
        },
        {
          name: "Kheer",
          description: "Creamy and sweet rice pudding",
          price: "$4.99",
        },
        {
          name: "Malaichop",
          description: "Fresh, creamy, malai-based dessert",
          price: "$4.99",
        },
        {
          name: "Pranhara",
          description:
            "Sweet stuffed flatbread made with a sweet lentil filling",
          price: "$1.99",
        },
      ],
    },
    {
      name: "Drinks",
      items: [
        {
          name: "Soda",
          description: "",
          price: "$1.99",
        },
        {
          name: "Tea",
          description: "",
          price: "$4.99",
        },
        {
          name: "Sweet Lassi",
          description: "",
          price: "$1.99",
        },
        {
          name: "Mango Lassi",
          description: "",
          price: "$1.99",
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
              initial={"hidden"}
              variants={staggerContainer}
              animate={index === 0 ? "visible" : undefined}
              whileInView={index !== 0 ? "visible" : undefined}
              viewport={{ once: true }}
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
