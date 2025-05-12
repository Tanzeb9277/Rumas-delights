import "./globals.css";
import Navbar from "./components/Navbar";
import Footbar from "./components/Footbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en"
    data-theme="caramellatte"
    >
      <body
      data-theme="caramellatte"
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footbar />
      </body>
    </html>
  );
}
