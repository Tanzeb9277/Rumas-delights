"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function OrderPopup({ isOpen, onClose }) {
  const deliveryOptions = [
    {
      name: "Uber Eats",
      link: "https://www.ubereats.com/store/rumas-delights-3302-shallowford-rd/L9ZCD5xkUf6S2rQDSM0PqA?srsltid=AfmBOoqDV_uiu8TsgP6DIQuQ9U7hJtpPO2DA5kv5rpuedKt4I1cpekXL",
      color: "bg-black",
      textColor: "text-white",
      hoverColor: "hover:bg-gray-800"
    },
    {
      name: "DoorDash",
      link: "https://www.doordash.com/store/ruma%E2%80%99s-delights-chamblee-34952327/73410546/?srsltid=AfmBOooA-PCMEqDEvPJNhn2VVL5i1n6QWuuCi-86olZolEBaTyQitj2E",
      color: "bg-red-600",
      textColor: "text-white",
      hoverColor: "hover:bg-red-700"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
          >
            <div className="bg-base-100 rounded-box shadow-xl p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-base-content">Order Online</h2>
                <button
                  onClick={onClose}
                  className="btn btn-circle btn-ghost btn-sm"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Delivery Options */}
              <div className="space-y-4">
                {deliveryOptions.map((option, index) => (
                  <motion.a
                    key={option.name}
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full p-4 rounded-lg text-center font-semibold transition-all duration-200 ${option.color} ${option.textColor} ${option.hoverColor} shadow-md hover:shadow-lg transform hover:scale-105`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={onClose}
                  >
                    Order on {option.name}
                  </motion.a>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 text-center">
                <p className="text-sm text-base-content/70">
                  Choose your preferred delivery platform
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 