import type { Metadata } from "next";

import { Oswald, Quattrocento_Sans } from "next/font/google";
// import "/styles/globals.css";
import "../styles/globals.css"
// import "../styles/globals.css";
import { HeroUIProvider } from "@heroui/system";

import { Navbar } from "@/components/Navbar";
import { Footer } from '@/components/Footer'

const oswaldSerif = Oswald({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "700"]
});

const quattrocentoSans = Quattrocento_Sans({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Heidi Philip-Smith",
  description: "Professional barista | Latte artist | London, UK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswaldSerif.variable} ${quattrocentoSans.variable} antialiased`}
      >
        <HeroUIProvider>
          <Navbar />
          {children}
          <Footer />
        </HeroUIProvider>
      </body>
    </html>
  );
}
