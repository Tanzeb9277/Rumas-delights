import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata = {
  title: "Ruma's Delights",
  description: "Authentic Bengali Cuisine in Atlanta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="caramellatte">
      <body className={poppins.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </div>
      </body>
    </html>
  );
}
