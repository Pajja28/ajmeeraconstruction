import { Suspense } from "react";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Machinery from "@/components/Machinery";
import Portfolio from "@/components/Portfolio";
import Packages from "@/components/Packages";
import Safety from "@/components/Safety";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import Clients from "@/components/Clients";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <About />
      <Services />
      <Machinery />
      <Portfolio />
      <Packages />
      <Safety />
      <Clients />
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
      <Footer />
    </main>
  );
}
