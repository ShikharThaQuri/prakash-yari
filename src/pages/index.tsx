import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* -------------- Hero Section ------------------- */}
      <Hero />

      {/* ------------------- Services section ----------------- */}
      <Services />

      {/* ------------------- Blog section ----------------------- */}
      <Blog />

      {/* ------------------ About section ----------------------- */}
      <About />
    </>
  );
}
