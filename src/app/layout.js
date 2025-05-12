'use client'
import "./globals.css";
import Navbar from "./components/Navbar";
import Footbar from "./components/Footbar";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en" data-theme="caramellatte">
      <body>
        <Navbar />
          {children}
        <Footbar />
      </body>
    </html>
  );
}
