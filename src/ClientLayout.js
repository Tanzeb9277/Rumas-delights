// import { Inter } from "next/font/google";
// import Link from "next/link";
// import { Menu, Facebook, Instagram, Twitter } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Ruma's Delights",
//   description: "Authentic Bengali and International Cuisine Served Fresh",
// };

// export default function ClientLayout({ children }) {

//   const [isOpen, setIsOpen] = useState(false)
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) {
//     return null
//   }

//   return (
//     <html lang="en" data-theme="bangladeshi">
//       <body className={inter.className}>
//         <div className="drawer">
//           <input
//             id="my-drawer"
//             type="checkbox"
//             className="drawer-toggle"
//             checked={isOpen}
//             onChange={() => setIsOpen(!isOpen)}
//           />
//           <div className="drawer-content flex flex-col">
//             <AnimatePresence mode="wait">
//               <motion.main
//                 key={
//                   typeof window !== "undefined" ? window.location.pathname : ""
//                 }
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.3 }}
//                 className="flex-1"
//               >
//                 {children}
//               </motion.main>
//             </AnimatePresence>

//             <footer className="footer footer-horizontal footer-center bg-secondary text-secondary-content p-10">
//               <div className="container mx-auto px-4 md:px-6 py-8">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                   <div>
//                     <h3 className="text-lg font-semibold mb-4">
//                       Ruma&apos;s Delights
//                     </h3>
//                     <p className="text-base-content/70 mb-4">
//                       Authentic Bengali cuisine in the heart of Atlanta,
//                       Georgia.
//                     </p>
//                     <div className="flex space-x-4">
//                       <Link
//                         href="#"
//                         className="text-base-content/60 hover:text-secondary transition-colors"
//                       >
//                         <Facebook className="h-5 w-5" />
//                         <span className="sr-only">Facebook</span>
//                       </Link>
//                       <Link
//                         href="#"
//                         className="text-base-content/60 hover:text-secondary transition-colors"
//                       >
//                         <Instagram className="h-5 w-5" />
//                         <span className="sr-only">Instagram</span>
//                       </Link>
//                       <Link
//                         href="#"
//                         className="text-base-content/60 hover:text-secondary transition-colors"
//                       >
//                         <Twitter className="h-5 w-5" />
//                         <span className="sr-only">Twitter</span>
//                       </Link>
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold mb-4">Contact</h3>
//                     <address className="not-italic text-base-content/70">
//                       <p>123 Bengali Lane</p>
//                       <p>Atlanta, GA 30303</p>
//                       <p className="mt-2">(404) 555-1234</p>
//                       <p>info@rumasdelights.com</p>
//                     </address>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold mb-4">Hours</h3>
//                     <ul className="text-base-content/70 space-y-1">
//                       <li>Monday - Thursday: 11am - 10pm</li>
//                       <li>Friday - Saturday: 11am - 11pm</li>
//                       <li>Sunday: 12pm - 9pm</li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="border-t border-base-300 mt-8 pt-8 text-center text-base-content/60 text-sm">
//                   <p>
//                     &copy; {new Date().getFullYear()} Ruma&apos;s Delights. All
//                     rights reserved.
//                   </p>
//                 </div>
//               </div>
//             </footer>
//           </div>

//           <div className="drawer-side">
//             <label
//               htmlFor="my-drawer"
//               aria-label="close sidebar"
//               className="drawer-overlay"
//               onClick={() => setIsOpen(false)}
//             ></label>
//             <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
//               <li className="mb-4">
//                 <Link
//                   href="/"
//                   onClick={() => setIsOpen(false)}
//                   className="text-xl font-bold"
//                 >
//                   Ruma&apos;s Delights
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/" onClick={() => setIsOpen(false)}>
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/menu" onClick={() => setIsOpen(false)}>
//                   Menu
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" onClick={() => setIsOpen(false)}>
//                   About
//                 </Link>
//               </li>
//               <li className="mt-4">
//                 <Link
//                   href="tel:4045551234"
//                   onClick={() => setIsOpen(false)}
//                   className="btn btn-primary"
//                 >
//                   Order Now
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </body>
//     </html>
//   );
// }

