import { Playfair_Display, Raleway } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Elegance Timepieces | Luxury Ladies Watches",
  description: "Discover our exquisite collection of handcrafted luxury timepieces for the modern woman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${raleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
