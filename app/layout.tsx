// app/layout.tsx

import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const poppins = Poppins({
  weight: ["400", "600", "700"], // Tentukan berat font yang diinginkan
  subsets: ["latin"],
});

export const metadata = {
  title: "PetaGov",
  description: "Peta interaktif untuk proyek dan investasi pemerintah Surabaya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={poppins.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
