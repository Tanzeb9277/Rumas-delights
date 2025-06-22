import React from "react";
import {
  FaUtensils,
  FaConciergeBell,
  FaGlobe,
  FaLeaf,
  FaBreadSlice,
  FaIceCream,
  FaGlassWhiskey,
  FaFish,
} from "react-icons/fa";

const iconMap = {
  Appetizers: <FaConciergeBell className="text-xl" />, // bell for starters
  Entreeés: <FaFish className="text-xl" />, // fish for main dishes
  "International Menu": <FaGlobe className="text-xl" />,
  Sides: <FaLeaf className="text-xl" />, // leaf for light dishes
  "Rice Dishes": <FaUtensils className="text-xl" />, // plate & cutlery
  Breads: <FaBreadSlice className="text-xl" />,
  Desserts: <FaIceCream className="text-xl" />,
  Drinks: <FaGlassWhiskey className="text-xl" />,
};

const menuCategories = [
    {
      name: "Appetizers",
      items: [
        {
          name: "Chotpoti",
          description:
            "Spicy and tangy chickpeas and potatoes with diced peppers and grated boiled eggs",
          price: "$6",
        },
        {
          name: "Samosa",
          description: "Bengali samosas with spiced potatoes (2 pcs.)",
          price: "$4",
        },
        {
          name: "Fuchka (Pani Puri)",
          description: "Crispy potato-filled puris",
          price: "$6",
        },
        {
          name: "Pakora",
          description: "Crispy fritters made with vegetables (2 pcs.)",
          price: "$3",
        },
        {
          name: "Puffed Pastry",
          description:
            "Delicious puff pastries served with either chicken or beef filling",
          price: "$3",
        },
      ],
    },
    {
      name: "Entreeés",
      items: [
        {
          name: "Butter Chicken",
          description:
            "Rich, creamy, and mildly spiced. Made with tender pieces of chicken cooked in a tomato-based sauce enriched with butter and cream",
          price: "$12",
        },
        {
          name: "Fried Chicken",
          description:
            "Southern style fried chicken, seasoned with a blend of spices and herbs, then deep-fried to golden perfection, served with fries",
          price: "$10",
        },
        {
          name: "Grilled Chicken",
          description:
            "Made with marinated chicken pieces that are grilled to perfection",
          price: "$12",
        },
        {
          name: "Beef Bhuna",
          description: `Beef Bhuna is a traditional Bengali dish known for its deep, rich flavors and thick, spiced gravy. The word "bhuna" refers to the slow cooking process where spices and meat are fried and simmered together until the oil separates and the gravy thickens`,
          price: "$12",
        },
        {
          name: "Karrai Ghost (Goat)",
          description: "Tender pieces of goat meat cooked in a rich, spicy gravy with a blend of aromatic spices",
          price: "$15",
        },
        {
          name: "Shrimp Malai Curry",
          description:
            "Made with tender shrimp cooked in a rich, creamy coconut milk-based gravy",
          price: "$15",
        },
        {
          name: "Shrimp Dupiazi",
          description:
            "Juicy shrimp simmered in a semi-thick gravy made with onions, tomatoes, ginger, garlic",
          price: "$15",
        },
        {
          name: "Fish Dupiazi (Salmon)",
          description:
            "Savory, slightly sweet, and aromatic dish with bold onion flavor, made with fresh salmon",
          price: "$15",
        },
        {
          name: "Fish Dupiazi (Rui)",
          description:
            "Savory, slightly sweet, and aromatic dish with bold onion flavor made with fresh Rui",
          price: "$12",
        },
        {
          name: "Mixed Grill Kebab",
          description:
            "Assortment of different types meats marinated with a unique blend of spices, yogurt, herbs grilled over an open flame, giving them a smoky, charred aroma and juicy texture",
          price: "$15",
        },
      ],
    },
    {
      name: "International Menu",
      items: [
        {
          name: "Beef Burger with fries",
          description: "Served hot and fresh alongside crispy french fries",
          price: "$10",
        },
        {
          name: "Veggie Burger with fries",
          description: "Delicious and satisfying plant-based alternative to the classic burger meal",
          price: "$10",
        },
        {
          name: "Philly Cheese Steak with fries",
          description:
            "Mouthwatering combination of thinly sliced beef, melted cheese, and a soft hoagie roll",
          price: "$10",
        },
        {
          name: "Chicken Fajita",
          description:
            "Marinated grilled chicken strips served with sautéed bell peppers and onions, typically wrapped in warm tortillas",
          price: "$10",
        },
        {
          name: "Quesadilla",
          description:
            "Crispy on the outside, gooey on the inside, and packed with flavor",
          price: "$10",
        },
        {
          name: "Spaghetti Pasta",
          description:
            "Classic Italian pasta dish known for its long, thin noodles and rich, flavorful sauces",
          price: "$10",
        },
        {
          name: "Penne Pasta",
          description: "Light golden pasta with vibrant sauces",
          price: "$10",
        },
        {
          name: "Linguine Pasta",
          description: "Classic Italian pasta",
          price: "$10",
        },
        {
          name: "Chili Chicken",
          description:
            "Combination of crispy fried chicken with a spicy, tangy, and slightly sweet sauce",
          price: "$12",
        },
        {
          name: "Mongolian Beef",
          description:
            "Tender, thinly sliced beef cooked in a savory, slightly sweet, and flavorful sauce",
          price: "$12",
        },
        {
          name: "Fried Rice",
          description: "Classic chinese style fried rice",
          price: "$7",
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
          price: "$6",
        },
        {
          name: "Chicken Corn Soup",
          description:
            "Light, comforting soup made with shredded chicken, sweet corn, and a mildly seasoned broth",
          price: "$5",
        },
        {
          name: "Daal",
          description: "Simple yet flavorful lentil stew",
          price: "$5",
        },
        {
          name: "Shami Kebab",
          description:
            "Flavorful, tender patty made primarily from ground meat and lentils",
          price: "$3",
        },
        {
          name: "Garden Salad",
          description: "A colorful salad, made with fresh vegetables",
          price: "$6",
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
          price: "$12",
        },
        {
          name: "Rice Pulao",
          description: "Fragrant and lightly spiced rice",
          price: "$2",
        },
        {
          name: "Beef Biryani",
          description:
            "Marinated tender pieces of spiced beef with fragrant basmati rice, layered and cooked together",
          price: "$12",
        },
        {
          name: "Chicken Biryani",
          description: "Marinated chicken pieces with fragrant basmati rice",
          price: "$12",
        },
        {
          name: "Beef Tehari",
          description:
            "Fragrant, spicy, and flavorful combination of tender beef cooked together with aromatic basmati rice and a rich blend of spices",
          price: "$10",
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
          price: "$2",
        },
        {
          name: "Moghlai Porota",
          description:
            "Golden, flaky, and crisp South Asian flatbread stuffed with a savory filling",
          price: "$6",
        },
        { name: "Luchi", description: "Deep-fried flatbread", price: "$1.99" },
        {
          name: "Daal Puri",
          description:
            "Crispy yet soft flatbread with a savory, mildly spicy lentil center",
          price: "$2",
        },
        {
          name: "Naan",
          description:
            "Soft, leavened flatbread baked in a tandoor (clay oven)",
          price: "$2",
        },
        {
          name: "Roti",
          description: "Whole wheat flatbread",
          price: "$1",
        },
      ],
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Balushai",
          description: "Rich, deep-fried dessert known for its flaky texture",
          price: "$2",
        },
        {
          name: "Mishti Doi",
          description:
            "Traditional Bengali sweetened yogurt dessert, loved for its creamy texture and caramelized sweetness",
          price: "$2",
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
          price: "$2",
        },
        {
          name: "Kalojam",
          description:
            "Rich and popular South Asian sweet known for its deep, dark color and intense flavor",
          price: "$2",
        },
        {
          name: "Kheer",
          description: "Creamy and sweet rice pudding",
          price: "$5",
        },
        {
          name: "Malaichop",
          description: "Fresh, creamy, malai-based dessert",
          price: "$5",
        },
        {
          name: "Pranhara",
          description:
            "Sweet stuffed flatbread made with a sweet lentil filling",
          price: "$2",
        },
      ],
    },
    {
      name: "Drinks",
      items: [
        {
          name: "Soda",
          description: "",
          price: "$2",
        },
        {
          name: "Tea",
          description: "",
          price: "$2",
        },
        {
          name: "Sweet Lassi",
          description: "",
          price: "$4",
        },
        {
          name: "Mango Lassi",
          description: "",
          price: "$5",
        },
      ],
    },
  ];


const Menu = () => {
  return (
    <div className="p-12 mt-6 md:p-24 space-y-6">
      {menuCategories.map((category, index) => (
        <div key={index} className="bg-base-100 shadow-md rounded-box p-4">
          <div className="flex items-center gap-2 mb-4">
            {iconMap[category.name] || <FaUtensils className="text-xl" />}
            <h2 className="text-xl font-bold">{category.name}</h2>
          </div>
          <div className="grid gap-4">
            {category.items.map((item, idx) => (
              <div
                key={idx}
                className="border border-base-200 rounded-box p-4 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-base-content/70">
                  {item.description}
                </p>
                <p className="text-base font-bold mt-2">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
